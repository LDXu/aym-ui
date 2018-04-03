webpackJsonp([6],{294:function(t,s,a){t.exports=a(367)},367:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(368),l=a(0),n=l(null,e.a,!1,null,null,null);s.default=n.exports},368:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("popup")]),t._v(" "),a("h3",[t._v("介绍")]),t._v(" "),a("p",[t._v("Popup是所有弹层类组件的基础组件,如"),a("code",{pre:!0},[t._v("toast")]),t._v("、"),a("code",{pre:!0},[t._v("dialog")]),t._v("...")]),t._v(" "),a("h3",[t._v("代码示例")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-popup")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"myPopup"')]),t._v("\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@mask-click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"closePopup('myPopup')\"")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(">")]),t._v("\n        Popup是所有弹层类组件的基础组件\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-popup")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'demo-popup'")]),t._v(",\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {}\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showPopup(refId) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" component = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[refId]\n            component.show()\n        },\n        closePopup(refId) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" component = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[refId]\n            component.hide()\n        }\n    }\n}\n")])]),t._v(" "),a("h3",[t._v("props 说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不同类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mask")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示遮罩")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("transparent")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("mask背景透明")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("内容")])])])])])}],n={render:e,staticRenderFns:l};s.a=n}});