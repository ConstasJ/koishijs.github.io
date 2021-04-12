---
sidebarDepth: 2
---

# 配置项

请注意标有 <Badge text="addons" vertical="baseline"/> 的配置项需要配合 koishi-plugin-eval-addons 使用。但你可以将相应的参数传给任何一个插件，效果是等价的。

## prefix

- 类型: `string`
- 默认值: `'>'`

快捷调用的前缀字符。设置为 `null` 可以取消 evaluate 指令的快捷调用。

## loader

- 类型: `string`

使用的 Loader 名称。内置的可选值包括 typescript 和 esbuild。你也可以自己编写一个 Loader，并在这里配置项中填入文件路径。

## timeout

- 类型: `number`
- 默认值: `1000`

单轮 evaluate 指令执行过程允许的最大等待时长，单位为毫秒。

## maxLogs

- 类型: `number`

单轮 evaluate 指令执行过程中允许 [`send`](#send) 被调用的最大次数。

## userFields

- 类型: `string[]`
- 默认值: `['id', 'authority']`

能够在 evaluate 指令中被访问的用户字段列表。这里的字段也是受 [陷阱](#使用陷阱) 影响的。

## resourceLimits

- 类型: [`ResourceLimits`](https://nodejs.org/api/worker_threads.html#worker_threads_worker_resourcelimits)

对子线程的资源限制。

## setupFiles

- 类型: `Record<string, string>`

要在子线程执行的文件名的键值对。键表示你希望在报错信息中显示的模块名，值表示文件的实际路径。如果你要扩展 eval 插件在子线程的行为，你可能需要这个选项。

## inspect

- 类型: [`InspectOptions`](https://nodejs.org/api/util.html#util_util_formatwithoptions_inspectoptions_format_args)

用于将传入 [`send`](#send) 方法的参数转化成字符串的配置项。

## gitRemote <Badge text="addons"/>

- 类型: `string`

扩展模块更新时的 remote 链接。

## addonRoot <Badge text="addons"/>

- 类型: `string`

扩展模块的根目录路径。
