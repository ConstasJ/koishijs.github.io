import{_ as o,r as n,o as r,c as d,a as e,e as h,w as t,F as l,d as s,b as i}from"./app.2aea50e6.js";const c={},p=s('<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>Koishi \u662F\u4E00\u4E2A\u73B0\u4EE3\u3001\u9AD8\u6548\u7684\u8DE8\u5E73\u53F0\u804A\u5929\u673A\u5668\u4EBA\u6846\u67B6\u3002</p><p>\u5B83\u7684\u540D\u5B57\u548C\u56FE\u6807\u8BBE\u8BA1\u6765\u6E90\u4E8E\u4E1C\u65B9 Project \u4E2D\u7684\u89D2\u8272\u53E4\u660E\u5730\u604B\uFF08Komeiji Koishi\uFF09\u3002\u53E4\u660E\u5730\u604B\u662F\u4E00\u4E2A\u4F1A\u505A\u51FA\u65E0\u610F\u8BC6\u4E3E\u52A8\u7684\u89D2\u8272\uFF0C\u53D6\u8FD9\u4E2A\u540D\u5B57\u65E2\u8C61\u5F81\u7740\u804A\u5929\u673A\u5668\u4EBA\u7684\u4E3B\u9898\uFF0C\u4E5F\u8868\u8FBE\u4E86\u4F5C\u8005\u6211\u4E3A\u8FD9\u4E2A\u9879\u76EE\u4EE5\u53CA\u5F00\u6E90\u5DE5\u4F5C\u503E\u6CE8\u7684\u70ED\u7231\u3002</p><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><h3 id="\u5F00\u7BB1\u5373\u7528\u7684\u63A7\u5236\u53F0" tabindex="-1"><a class="header-anchor" href="#\u5F00\u7BB1\u5373\u7528\u7684\u63A7\u5236\u53F0" aria-hidden="true">#</a> \u5F00\u7BB1\u5373\u7528\u7684\u63A7\u5236\u53F0</h3><p>\u9AD8\u5EA6\u4FBF\u5229\u7684\u63A7\u5236\u53F0\u8BA9\u4F60\u65E0\u9700\u57FA\u7840\u8BA9\u4F60\u5728\u51E0\u5206\u949F\u4E4B\u5185\u642D\u5EFA\u81EA\u5DF1\u7684\u804A\u5929\u673A\u5668\u4EBA\u3002</p><ul><li>\u63D0\u4F9B\u5728\u7EBF\u63D2\u4EF6\u5E02\u573A\uFF0C\u5373\u4F7F\u6CA1\u6709 js \u7F16\u7A0B\u57FA\u7840\uFF0C\u4E5F\u80FD\u8F7B\u677E\u5728\u63A7\u5236\u53F0\u4E2D\u4E0B\u8F7D\u5B89\u88C5\u63D2\u4EF6</li><li>\u652F\u6301 QQ\uFF0CTelegram\uFF0CDiscord \u7B49\u4E3B\u6D41\u804A\u5929\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u8D26\u6237\u548C\u8DE8\u5E73\u53F0\u6570\u636E\u4E92\u901A</li><li>\u968F\u65F6\u968F\u5730\u901A\u8FC7\u63A7\u5236\u9762\u677F\u76D1\u63A7\u8FD0\u884C\u72B6\u6001\uFF0C\u63A7\u5236\u673A\u5668\u4EBA\u7684\u884C\u4E3A\uFF0C\u751A\u81F3\u4E0A\u53F7\u804A\u5929</li></ul>',7),u=i("\u53C2\u89C1\uFF1A"),_=i("\u521B\u5EFA Koishi \u63A7\u5236\u53F0\u9879\u76EE"),f=e("h3",{id:"\u529F\u80FD\u5F3A\u5927\u7684-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u529F\u80FD\u5F3A\u5927\u7684-api","aria-hidden":"true"},"#"),i(" \u529F\u80FD\u5F3A\u5927\u7684 API")],-1),m=e("p",null,"\u7ECF\u8FC7\u4E86\u51E0\u4E2A\u7248\u672C\u7684\u8FED\u4EE3\uFF0CKoishi \u5DF2\u7ECF\u53D1\u5C55\u51FA\u4E86\u4E30\u5BCC\u7684 API\uFF0C\u529F\u80FD\u8986\u76D6\u673A\u5668\u4EBA\u9886\u57DF\u7684\u65B9\u65B9\u9762\u9762\u3002\u4ECE\u4E0A\u5C42\u8D1F\u8D23\u4EA4\u4E92\u7684\u6307\u4EE4\u3001\u4F1A\u8BDD\u3001\u4E2D\u95F4\u4EF6\uFF0C\u518D\u5230\u4E2D\u5C42\u8D1F\u8D23\u63A7\u5236\u7684\u5E94\u7528\u3001\u4E0A\u4E0B\u6587\u3001\u63D2\u4EF6\uFF0C\u6700\u540E\u5230\u5E95\u5C42\u7684\u673A\u5668\u4EBA\u548C\u9002\u914D\u5668\uFF0C\u6BCF\u4E00\u4E2A\u90E8\u5206\u90FD\u7ECF\u8FC7\u4E86\u7CBE\u5FC3\u7684\u7F16\u5199\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u8F7B\u677E\u5B9E\u73B0\u4EFB\u4F55\u9700\u6C42\u3002\u5982\u679C\u62C5\u5FC3\u5728\u590D\u6742\u7684\u529F\u80FD\u4E2D\u8FF7\u5931\u65B9\u5411\uFF0C\u6211\u4EEC\u4E5F\u51C6\u5907\u4E86\u7EC6\u81F4\u7684\u6587\u6863\u6765\u63D0\u4F9B\u5E2E\u52A9\u3002",-1),x=i("\u53C2\u89C1\uFF1A"),k=i("API \u6587\u6863"),b=s('<h3 id="\u4E30\u5BCC\u7684\u751F\u6001\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u4E30\u5BCC\u7684\u751F\u6001\u7CFB\u7EDF" aria-hidden="true">#</a> \u4E30\u5BCC\u7684\u751F\u6001\u7CFB\u7EDF</h3><p>\u5B98\u65B9\u63D0\u4F9B\u4E86\u5927\u91CF\u63D2\u4EF6\u548C\u89E3\u51B3\u65B9\u6848\uFF0C\u8986\u76D6\u4E86\u7EDD\u5927\u591A\u6570\u5E38\u89C1\u9700\u6C42\u7684\u540C\u65F6\uFF0C\u4E5F\u4E3A\u5F00\u53D1\u63D0\u4F9B\u4E86\u7EDD\u4F73\u7684\u8303\u4F8B\u3002</p><ul><li>@koishijs/plugin-console\uFF1A\u7F51\u9875\u63A7\u5236\u53F0</li><li>@koishijs/plugin-schedule\uFF1A\u8BA1\u5212\u4EFB\u52A1</li><li>@koishijs/plugin-teach\uFF1A\u95EE\u7B54\u6559\u5B66</li></ul><p>\u9664\u4E86\u8FD9\u4E9B\u5B98\u65B9\u63D2\u4EF6\u4EE5\u5916\uFF0C\u793E\u533A\u8D21\u732E\u8005\u4E5F\u7F16\u5199\u4E86\u5404\u79CD\u5404\u6837\u7684\u7B2C\u4E09\u65B9\u63D2\u4EF6\uFF1A</p><ul><li>koishi-plugin-genshin\uFF1A\u539F\u795E\u8D44\u6599\u67E5\u8BE2</li><li>koishi-plugin-ink\uFF1A\u5C55\u793A\u89C6\u89C9\u5C0F\u8BF4</li><li>koishi-plugin-shell\uFF1A\u6267\u884C\u7EC8\u7AEF\u547D\u4EE4</li></ul><p>\u8FD9\u4E9B\u63D2\u4EF6\u5171\u540C\u7EC4\u6210\u4E86 Koishi \u5982\u4ECA\u7684\u751F\u6001\u3002</p>',6),g=i("\u53C2\u89C1\uFF1A"),K=i("\u5B98\u65B9\u63D2\u4EF6"),j=s('<h3 id="\u4E13\u4E3A\u5F00\u53D1\u8005\u6253\u9020" tabindex="-1"><a class="header-anchor" href="#\u4E13\u4E3A\u5F00\u53D1\u8005\u6253\u9020" aria-hidden="true">#</a> \u4E13\u4E3A\u5F00\u53D1\u8005\u6253\u9020</h3><p>Koishi \u66F4\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4F17\u591A\u4E13\u4E1A\u529F\u80FD\uFF0C\u4F7F\u5F00\u53D1\u8005\u5F97\u4EE5\u5728\u5404\u79CD\u590D\u6742\u9700\u6C42\u4E2D\u6784\u5EFA\u89C4\u6A21\u5316\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h4 id="\u7C7B\u578B\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u652F\u6301" aria-hidden="true">#</a> \u7C7B\u578B\u652F\u6301</h4><p>Koishi \u5B8C\u5168\u57FA\u4E8E TypeScript \u5F00\u53D1\uFF0C\u62E5\u6709\u9876\u7EA7\u7684\u7C7B\u578B\u652F\u6301\uFF0C\u4E30\u5BCC\u7684\u4EE3\u7801\u63D0\u793A\u8BA9\u4F60\u5728\u7F16\u5199\u4EE3\u7801\u7684\u65F6\u5019\u751A\u81F3\u65E0\u9700\u67E5\u770B\u6587\u6863\u3002</p><h4 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h4><p>\u6240\u6709\u6838\u5FC3\u529F\u80FD\u5747\u5DF2\u7ECF\u901A\u8FC7\u5355\u5143\u6D4B\u8BD5\uFF0C\u65E2\u786E\u4FDD\u4E86\u53EF\u9760\u6027\uFF0C\u4E5F\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4E00\u5957\u6D4B\u8BD5\u63D2\u4EF6\u548C\u5B9A\u4F4D\u95EE\u9898\u7684\u6700\u4F73\u5B9E\u8DF5\u3002</p><h4 id="\u6A21\u5757\u70ED\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u70ED\u91CD\u8F7D" aria-hidden="true">#</a> \u6A21\u5757\u70ED\u91CD\u8F7D</h4><p>\u5F00\u53D1 Koishi \u63D2\u4EF6\u65F6\uFF0C\u53EA\u9700\u8F7B\u70B9\u4FDD\u5B58\u5373\u53EF\u70ED\u91CD\u8F7D\uFF0C\u65E0\u9700\u9891\u7E41\u91CD\u542F\u673A\u5668\u4EBA\uFF0C\u5982\u540C\u524D\u7AEF\u5F00\u53D1\u4E00\u6837\u4E1D\u6ED1\u987A\u7545\u3002</p>',8);function N(P,V){const a=n("RouterLink");return r(),d(l,null,[p,e("p",null,[u,h(a,{to:"/manual/template.html"},{default:t(()=>[_]),_:1})]),f,m,e("p",null,[x,h(a,{to:"/api/"},{default:t(()=>[k]),_:1})]),b,e("p",null,[g,h(a,{to:"/plugins/"},{default:t(()=>[K]),_:1})]),j],64)}var A=o(c,[["render",N],["__file","introduction.html.vue"]]);export{A as default};
