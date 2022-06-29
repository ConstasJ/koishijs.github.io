import{_ as F,r as a,o as c,c as r,a as s,e as o,w as e,F as p,b as l,d as y}from"./app.2aea50e6.js";const i={},E=s("h1",{id:"\u63CF\u8FF0\u914D\u7F6E\u6A21\u5F0F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u63CF\u8FF0\u914D\u7F6E\u6A21\u5F0F","aria-hidden":"true"},"#"),l(" \u63CF\u8FF0\u914D\u7F6E\u6A21\u5F0F")],-1),d=l("\u501F\u52A9 "),h={href:"https://code.mycard.moe/3rdeye/schemastery-gen",target:"_blank",rel:"noopener noreferrer"},f=l("schemastery-gen"),m=l(" \u8FD9\u4E2A\u5305\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u88C5\u9970\u5668\u8FDB\u884C\u7F16\u5199 Koishi \u63D2\u4EF6\u6240\u9700\u8981\u7684\u63CF\u8FF0\u914D\u7F6E\u6A21\u5F0F\u3002\u63D2\u4EF6\u52A0\u8F7D\u65F6\uFF0C\u7C7B\u5C06\u4F1A\u81EA\u52A8\u5B9E\u4F8B\u5316\uFF0C\u5E76\u6CE8\u5165\u8FD9\u4E9B\u65B9\u6CD5\u3002"),u=y("<p>\u6211\u4EEC\u9700\u8981\u4F7F\u7528 <code>@RegisterSchema</code> \u88C5\u9970\u5668\u5BF9\u914D\u7F6E\u7C7B\u8FDB\u884C\u4FEE\u9970\uFF0C\u4F7F\u5176\u6210\u4E3A\u4E00\u4E2A Schema \u5BF9\u8C61\u3002\u540C\u65F6\uFF0C\u9700\u8981\u5BF9\u6BCF\u4E2A\u51FA\u73B0\u4E8E\u914D\u7F6E\u7684\u6210\u5458\u5C5E\u6027\u4F7F\u7528 <code>@SchemaProperty</code> \u8FDB\u884C\u4FEE\u9970\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6210\u5458\u5B57\u6BB5\uFF0C\u7CFB\u7EDF\u5C06\u4F1A\u5C1D\u8BD5\u63A8\u65AD\u8FD9\u4E9B\u5B57\u6BB5\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>type</code> \u53C2\u6570\u624B\u52A8\u6307\u5B9A\u7C7B\u578B\u6216\u53E6\u4E00\u4E2A Schema \u5BF9\u8C61\u3002</p><p>\u7279\u522B\u5730\uFF0C\u7CFB\u7EDF\u53EF\u4EE5\u63A8\u65AD\u51FA\u67D0\u4E00\u5B57\u6BB5\u662F\u5426\u4E3A\u6570\u7EC4\uFF0C\u4F46\u662F\u65E0\u6CD5\u63A8\u65AD\u6570\u7EC4\u5185\u90E8\u7684\u7C7B\u578B\u3002\u56E0\u6B64\u4E0B\u4F8B\u4E2D\u6211\u4EEC<strong>\u5FC5\u987B</strong>\u624B\u52A8\u6307\u5B9A <code>someArray</code> \u7684\u5185\u90E8\u7C7B\u578B\u4E3A <code>string</code>\u3002</p>",3),A=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { RegisterSchema, SchemaProperty } "),s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E6DB74"}},"'schemastery-gen'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"import"),s("span",{style:{color:"#F8F8F2"}}," { Context } "),s("span",{style:{color:"#F92672"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E6DB74"}},"'koishi'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"@"),s("span",{style:{color:"#A6E22E"}},"RegisterSchema"),s("span",{style:{color:"#F8F8F2"}},"() "),s("span",{style:{color:"#88846F"}},"// Config \u7C7B\u672C\u8EAB\u4F1A\u6210\u4E3A Schema \u5BF9\u8C61")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Config"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"constructor"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"_config"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"any"),s("span",{style:{color:"#F8F8F2"}},") {}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ default: "),s("span",{style:{color:"#E6DB74"}},"'baz'"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  foo"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#88846F"}},"// \u81EA\u52A8\u63A8\u65AD\u51FA Schema.string()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#A6E22E"}},"getFoo"),s("span",{style:{color:"#F8F8F2"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#F92672"}},"return"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FD971F"}},"this"),s("span",{style:{color:"#F8F8F2"}},".foo")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ type: Schema."),s("span",{style:{color:"#A6E22E"}},"number"),s("span",{style:{color:"#F8F8F2"}},"(), required: "),s("span",{style:{color:"#AE81FF"}},"true"),s("span",{style:{color:"#F8F8F2"}}," }) "),s("span",{style:{color:"#88846F"}},"// \u4E5F\u53EF\u624B\u52A8\u6307\u5B9A Schema \u5BF9\u8C61")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  bar"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"number")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ type: "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"String"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  someArray"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},"[] "),s("span",{style:{color:"#88846F"}},"// \u81EA\u52A8\u63A8\u65AD\u51FA Schema.array(...)\uFF0C\u4F46\u662F\u65E0\u6CD5\u63A8\u65AD\u5185\u90E8\u7C7B\u578B\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9A")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"const"),s("span",{style:{color:"#F8F8F2"}}," name "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E6DB74"}},"'myplugin'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E"}},"apply"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"ctx"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Context"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"config"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Partial"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Config"),s("span",{style:{color:"#F8F8F2"}},">) {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])],-1),_=s("h2",{id:"\u5D4C\u5957\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5D4C\u5957\u914D\u7F6E","aria-hidden":"true"},"#"),l(" \u5D4C\u5957\u914D\u7F6E")],-1),D=s("p",null,"\u5728\u914D\u7F6E\u7C7B\u5B58\u5728\u5D4C\u5957\u7684\u60C5\u51B5\u4E0B\uFF0C\u5185\u5C42\u7C7B\u4E5F\u4F1A\u81EA\u52A8\u5B9E\u4F8B\u5316\uFF0C\u5E76\u4E14\u4F1A\u81EA\u52A8\u6CE8\u5165\u5230\u5916\u5C42\u7C7B\u7684\u5BF9\u5E94\u5C5E\u6027\u4E2D\u3002",-1),g=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"@"),s("span",{style:{color:"#A6E22E"}},"RegisterSchema"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"ChildConfig"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"constructor"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"_config"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"any"),s("span",{style:{color:"#F8F8F2"}},") {}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ default: "),s("span",{style:{color:"#E6DB74"}},"'baz'"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  foo"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ type: Schema."),s("span",{style:{color:"#A6E22E"}},"number"),s("span",{style:{color:"#F8F8F2"}},"(), required: "),s("span",{style:{color:"#AE81FF"}},"true"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  bar"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"number")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"// Config \u7C7B\u672C\u8EAB\u4F1A\u6210\u4E3A Schema \u5BF9\u8C61")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"@"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Config"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"constructor"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"_config"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"any"),s("span",{style:{color:"#F8F8F2"}},") {}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#88846F"}},"// \u81EA\u52A8\u63A8\u65AD\u51FA ChildConfig")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  child"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"ChildConfig")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#88846F"}},"// \u65E0\u6CD5\u81EA\u52A8\u63A8\u65AD ChildConfig\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9A\u3002\u4F46\u662F\u53EF\u4EE5\u63A8\u65AD\u51FA\u5916\u5C42\u7684 Schema.array(...)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ type: ChildConfig })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  children"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"ChildConfig"),s("span",{style:{color:"#F8F8F2"}},"[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])],-1),x=s("h2",{id:"\u5FAA\u73AF\u5D4C\u5957\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5FAA\u73AF\u5D4C\u5957\u914D\u7F6E","aria-hidden":"true"},"#"),l(" \u5FAA\u73AF\u5D4C\u5957\u914D\u7F6E")],-1),S=s("p",null,[l("\u5982\u679C\u914D\u7F6E\u7C7B\u5B58\u5728\u5FAA\u73AF\u5D4C\u5957\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528 "),s("code",null,"SchemaRef(() => Type)"),l(" \u65B9\u6CD5\u8FDB\u884C\u5B9A\u4E49\u3002")],-1),P=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"@"),s("span",{style:{color:"#A6E22E"}},"RegisterSchema"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Author"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"constructor"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"_"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Partial"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Author"),s("span",{style:{color:"#F8F8F2"}},">) {}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  name"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#A6E22E"}},"getName"),s("span",{style:{color:"#F8F8F2"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#F92672"}},"return"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FD971F"}},"this"),s("span",{style:{color:"#F8F8F2"}},".name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    type: "),s("span",{style:{color:"#A6E22E"}},"SchemaRef"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," Post), "),s("span",{style:{color:"#88846F"}},"// \u5FAA\u73AF\u5D4C\u5957\u7C7B\u7684\u6570\u7EC4\uFF0Carray \u53EF\u4EE5\u7531\u6210\u5458\u53D8\u91CF\u7C7B\u578B\u81EA\u52A8\u63A8\u65AD\u3002")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  posts"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Post"),s("span",{style:{color:"#F8F8F2"}},"[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"@"),s("span",{style:{color:"#A6E22E"}},"RegisterSchema"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"export"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Post"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"constructor"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"_"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Partial"),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Post"),s("span",{style:{color:"#F8F8F2"}},">) {}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  name"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#A6E22E"}},"getName"),s("span",{style:{color:"#F8F8F2"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#F92672"}},"return"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FD971F"}},"this"),s("span",{style:{color:"#F8F8F2"}},".name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    type: "),s("span",{style:{color:"#A6E22E"}},"SchemaRef"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," Author), "),s("span",{style:{color:"#88846F"}},"// \u5FAA\u73AF\u5D4C\u5957")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  author"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Author")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    type: "),s("span",{style:{color:"#A6E22E"}},"SchemaRef"),s("span",{style:{color:"#F8F8F2"}},"(() "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," Post), "),s("span",{style:{color:"#88846F"}},"// \u6307\u5B9A\u81EA\u8EAB\u4E3A\u7C7B\u578B\u4E5F\u9700\u8981\u5982\u6B64\u4F7F\u7528\u3002")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  childPosts"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Post"),s("span",{style:{color:"#F8F8F2"}},"[]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])],-1),C=s("h2",{id:"\u63CF\u8FF0\u5408\u5E76",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u63CF\u8FF0\u5408\u5E76","aria-hidden":"true"},"#"),l(" \u63CF\u8FF0\u5408\u5E76")],-1),b=s("p",null,[l("\u4F7F\u7528 "),s("code",null,"Mixin()"),l(" \u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5BF9\u914D\u7F6E\u7C7B\u8FDB\u884C\u5408\u5E76\u3002")],-1),k=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"DressColor"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ default: "),s("span",{style:{color:"#E6DB74"}},"'red'"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  color"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"DressSize"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ default: "),s("span",{style:{color:"#E6DB74"}},"'M'"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  size"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"@"),s("span",{style:{color:"#A6E22E"}},"RegisterSchema"),s("span",{style:{color:"#F8F8F2"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"class"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Dress"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F92672"}},"extends"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E"}},"Mixin"),s("span",{style:{color:"#F8F8F2"}},"(DressColor, DressSize) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  @"),s("span",{style:{color:"#A6E22E"}},"SchemaProperty"),s("span",{style:{color:"#F8F8F2"}},"({ default: "),s("span",{style:{color:"#E6DB74"}},"'dress'"),s("span",{style:{color:"#F8F8F2"}}," })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  name"),s("span",{style:{color:"#F92672"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])],-1);function B(R,N){const t=a("ExternalLinkIcon"),n=a("panel-view");return c(),r(p,null,[E,s("p",null,[d,s("a",h,[f,o(t)]),m]),u,o(n,{class:"code",title:"",style:{}},{default:e(()=>[A]),_:1}),_,D,o(n,{class:"code",title:"",style:{}},{default:e(()=>[g]),_:1}),x,S,o(n,{class:"code",title:"",style:{}},{default:e(()=>[P]),_:1}),C,b,o(n,{class:"code",title:"",style:{}},{default:e(()=>[k]),_:1})],64)}var z=F(i,[["render",B],["__file","schemastery.html.vue"]]);export{z as default};
