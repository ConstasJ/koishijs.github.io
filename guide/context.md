---
sidebarDepth: 2
---

# 插件与上下文

## 使用插件

Koishi 官方实现了许多功能，但一个机器人很可能只会用到其中的一部分。因此我们采用了插件化的方式，将不同的功能解耦到了不同的包中。你可以在 [官方插件](../plugins/index.md) 中了解到各种不同的功能。

### 安装插件

在之前的文档中，我们已经展示了如何通过配置文件和脚本调用两种方法使用插件，它们的写法略有不同。让我们先回顾一下：

```js koishi.config.js
module.exports = {
  plugins: {
    './my-plugin': true, // true 和 {} 的效果等价
    'common': { /* 传给 koishi-plugin-common 的选项 */ },
  },
}
```

`plugins` 是一个对象，其中的每一个键表示一个插件的路径。

- 如果是一个绝对路径或者相对路径，我们会相对 koishi.config.js 所在的目录进行解析
- 其他情况下我们将其视为包名，并允许省略 koishi-plugin- 这个前缀，并考虑 scope 带来的影响（例如对于 foo/bar，我们将尝试读取 koishi-plugin-foo/bar 和 foo/bar 两个包；对于 @foo/bar，我们将尝试读取 @foo/koishi-plugin-bar 和 @foo/bar 两个包）

上面的写法使用 API 可以写成：

```js index.js
app
  .plugin(require('./my-plugin'))
  .plugin(require('koishi-plugin-common'), options)
```

### 开发插件

一个**插件**的本质是以下两个之一：

- 一个接受两个参数的函数，第一个参数是所在的上下文，第二个参数是传入的选项
- 一个对象，其中的 `apply` 方法是上面所说的函数

因此，下面的三种写法是等价的：

```js
ctx.middleware(callback)

ctx.plugin(ctx => ctx.middleware(callback))

ctx.plugin({
  apply: ctx => ctx.middleware(callback),
})
```

插件化的写法能够帮助我们将多个逻辑组合在一起并模块化，同时可以在插件内部对所需的选项进行初始化，这些都能极大地提高了代码的可维护性。这是因为每个人都可以直接将代码以插件的形式导出成模块，之后插件名又可以被直接写在 `koishi.config.js` 文件中。

### 具名插件

除此以外，插件如果使用对象式，那么除了 `apply` 以外，你还可以提供一个 `name` 属性。如果提供了这个属性，命令行工具会将这个名字输出到控制台中。例如，下面给出了一个插件的例子，它实现了检测说话带空格的功能：

```js detect-space.js
module.exports.name = 'detect-space'

module.exports.apply = (ctx) => {
  ctx.middleware((meta, next) => {
    if (meta.message.match(/^\s*(\S +){2,}\S\s*$/g)) {
      return meta.send('在？为什么说话带空格？')
    } else {
      return next()
    }
  })
}
```

把它放到你的机器人文件夹，接着向你的 `koishi.config.js` 添加一行：

```js koishi.config.js
module.exports = {
  plugins: {
    './detect-space': true,
  },
}
```

调用 `koishi start`，你就可以看到这个插件在正常运行的提示了。

### 嵌套插件

Koishi 的插件也是可以嵌套的。你可以将你编写的插件解耦成多个独立的子插件，再用一个父插件作为入口，就像这样：

```js koishi-plugin-foo/index.js
// 在 a.js, b.js 中编写两个不同的插件
const pluginA = require('./a')
const pluginB = require('./b')

// 将这两个插件输出
module.exports.pluginA = pluginA
module.exports.pluginB = pluginB

// 在 apply 函数中安装 a, b 两个插件
module.exports.apply = (ctx) => {
  ctx.plugin(pluginA)
  ctx.plugin(pluginB)
}
```

这样别人就可以这样使用你的插件了：

```js
// 如果希望同时使用你的插件的全部功能
ctx.plugin(require('koishi-plugin-foo'))

// 如果只希望启用一部分功能
ctx.plugin(require('koishi-plugin-foo').pluginA)

// 或者等价的写法
ctx.plugin(require('koishi-plugin-foo/a'))
```

Koishi 的官方插件 koishi-plugin-common 也使用了 [这种写法](https://github.com/koishijs/koishi/blob/master/packages/plugin-common/src/index.ts)。

## 使用上下文

一个 **上下文** 描述了机器人的一种可能的运行环境。例如，如果一个指令或中间件被绑定在了上面例子中的上下文，那么只有该环境下的事件才会触发对应的回调函数。之前介绍过的 `ctx.on()`, `ctx.middleware()` 以及 `ctx.plugin()` 这些 API 都是上下文类所提供的方法，而我们能在 `app` 上调用这些方法只是因为 `App` 对象本身也是一个上下文而已。

### 使用选择器

我们可以通过 **选择器** 来快速创建新的上下文：

```js
app.group() // 选择全部群聊会话
app.group.except() // 选择全部私聊会话

app.group('112233') // 选择来自群 112233 的会话
app.group.except('112233') // 选择来自除了群 112233 以外的群的会话

app.user('445566') // 选择来自用户 445566 的会话（包括群聊和私聊）
app.group.except().user('445566') // 选择来自用户 445566 的私聊会话
```

它们实际上是 `ctx.select()` 和 `ctx.unselect()` 方法的语法糖。对于上面的最后一个例子，你可以等价地表示成：

```js
// 选择来自用户 445566 的私聊会话
app.unselect('groupId').select('userId', '445566')
```

利用上下文，你可以非常方便地对每个环境进行分别配置：

```js
// 在所有环境注册中间件
app.middleware(callback)

// 当有人申请加群 112233 时触发 listener
app.group('112233').on('group-request', listener)

// 注册指令 my-command，有数据库支持时才生效
app.select('database').command('my-command')

// 安装插件 ./my-plugin，仅限 OneBot 平台使用
app.select('platform', 'onebot').plugin(require('./my-plugin'))
```

是不是非常方便呢？

### 使用过滤器

你也可以自定义一个上下文的 **过滤器** 函数：它传入一个会话对象，并返回一个 boolean 类型。

```js
// 满足当前上下文条件，且消息内容为“啦啦啦”
ctx.intersect(session => session.content === '啦啦啦')

// 满足当前上下文条件，或消息内容为“啦啦啦”
ctx.union(session => session.content === '啦啦啦')
```

这里的两个方法 `ctx.intersect()` 和 `ctx.union()` 也可以传入一个上下文，表示两个上下文的交集和并集：

```js
// 选择来自用户 445566 的私聊会话
app.unselect('groupId').intersect(app.select('userId', '445566'))

// 选择来自用户 445566 的会话，以及全部私聊会话
app.unselect('groupId').union(app.select('userId', '445566'))
```

这些方法会返回一个新的上下文，在其上使用监听器、中间件、指令或是插件就好像同时在多个上下文中使用一样。

## 可卸载的插件

通常来说一个插件的效应应该是永久的，但如果你想在运行时卸载一个插件，应该怎么做？你可以使用插件定义中的那个 Context 对象来解决。

```js my-plugin.js
module.exports = (ctx, options) => {
  // 编写你的插件逻辑
  ctx.on('message', someListener)
  ctx.command('foo').action(callback)
  ctx.middleware(callback)
  ctx.plugin(require('another-plugin'))

  // 卸载这个插件，取消上面的全部操作
  ctx.dispose()
}
```

看起来很神奇，不过它的实现方式也非常简单。当一个插件被注册时，Koishi 会记录注册过程中定义的所有事件钩子、指令、中间件乃至子插件。当 `ctx.dispose()` 被调用时，再逐一取消上述操作的效应。因此，它的局限性也很明显：它并不能妥善处理除了 Context API 以外的副作用。不过，我们也准备了额外的解决办法：

```js my-plugin.js
module.exports = (ctx, options) => {
  // ctx.dispose 无法消除 setInterval 的效果
  const timer = setInterval(callback, 60000)

  // 添加一个特殊的回调函数来处理副作用
  ctx.before('disconnect', () => {
    clearInterval(timer)
  })

  // 现在我们又可以愉快地使用 ctx.dispose() 啦
  ctx.dispose()
}
```

### 插件热重载
