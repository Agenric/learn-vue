webpackJsonp([1],{"/LLo":function(t,e){},"3m2/":function(t,e){},DRxp:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("OZGp")},null,null).exports,i=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("Agenric")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]};var u=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){n("ZqCB")},"data-v-aadd49d4",null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.menu,function(e){return n("li",{key:e.id},[n("a",{attrs:{href:e.path}},[t._v(t._s(e.title))])])}),0)])},staticRenderFns:[]},c=n("VU/8")({data:function(){return{menu:[{title:"Home",path:"/"},{title:"Migrate",path:"/migrate"},{title:"Learn",path:"/learn"},{title:"HelloWord",path:"/helloword"}]}}},l,!1,null,null,null).exports,v={data:function(){return{button_list:[{title:"继续用车",handle:function(){window.location.href="mobike://bridge?name=response&callback=1&data=%7B%22type%22%3A12%2C%22data%22%3A%22%22%7D",window.setTimeout(function(){window.location.href="mobike://bridge?name=close&callback=1&data=%7B%22response%22%3A15%7D"},0)}},{title:"我知道了",handle:function(){window.location.href="mobike://bridge?name=close&callback=1&data=%7B%22response%22%3A15%7D"}},{title:"去美团开锁",handle:function(){navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)&&(window.location.href="imeituan://www.meituan.com/bike/scan?url=http%3A%2F%2Fwww.mobike.com%2Fdownload%2Fapp.html%3Fb%3D6928439741",window.setTimeout(function(){window.location.href="https://itunes.apple.com/cn/app/id423084029"},2e3)),navigator.userAgent.match(/android/i)&&(window.location.href="com.baidu.tieba://app",window.setTimeout(function(){window.location.href="https://****.apk"},2e3))}}]}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"migrate",attrs:{id:"app"}},[n("ul",t._l(t.button_list,function(e){return n("li",{key:e.id},[n("button",{staticClass:"my-button",on:{click:e.handle}},[t._v(t._s(e.title))])])}),0)])},staticRenderFns:[]};var d=n("VU/8")(v,m,!1,function(t){n("/LLo")},null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  404\n")])},staticRenderFns:[]},h=n("VU/8")(null,_,!1,null,null,null).exports,p={data:function(){return{message:"Hello Vue!",mouseMessage:"页面加载于"+(new Date).toLocaleString(),seen:!1,todoLists:[{text:"JeffBee",id:1},{text:"Agenric",id:2},{text:"Target",id:3}]}},methods:{reverseMessage:function(){this.message=this.message.split(" ").reverse().join(" ")},warn:function(t,e){e&&e.preventDefault(),alert(t)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"quick-start"}},[t._v("\n  v-once：\n  "),t._m(0),t._v(" "),n("br"),t._v("\n  "+t._s(t.message)+"\n  "),n("br"),t._v("\n  即时联动：\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("br"),t._v("\n  延时联动：\n  "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.message,expression:"message",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:t.message},on:{change:function(e){t.message=e.target.value}}}),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.reverseMessage}},[t._v("反转字符串")]),t._v(" "),n("br"),n("br"),t._v(" "),n("span",{attrs:{title:t.mouseMessage}},[t._v("\n    鼠标悬停几秒钟，查看此处绑定的动态信息\n  ")]),t._v(" "),n("br"),n("br"),t._v("\n  v-if：\n  "),t.seen?n("span",[t._v("现在你看到了我")]):t._e(),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){t.seen=!t.seen}}},[t._v(t._s(!0===t.seen?"隐藏":"显示"))]),t._v(" "),n("br"),n("br"),t._v(" "),n("ol",t._l(t.todoLists,function(e){return n("li",{key:e.id},[t._v(t._s(e.text))])}),0),t._v(" "),n("br"),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.warn("Form cannot be submitted yet.",e)}}},[t._v("\n    Submit\n  ")])])},staticRenderFns:[function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.message))])}]},g={data:function(){return{items:[1,2,3,4,5,6,7,8,9],nextNum:10}},methods:{randomIndex:function(){return Math.floor(Math.random()*this.items.length)},add:function(){this.items.splice(this.randomIndex(),0,this.nextNum++)},remove:function(){this.items.splice(this.randomIndex(),1)}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list-animation"}},[n("button",{on:{click:t.add}},[t._v("Add")]),t._v(" "),n("button",{on:{click:t.remove}},[t._v("Remove")]),t._v(" "),n("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.items,function(e){return n("span",{key:e,staticClass:"listItem"},[t._v(t._s(e))])}),0)],1)},staticRenderFns:[]};var w={data:function(){return{question:"",url:"",answer:"I cannot give you an answer until you ask a question!"}},watch:{question:function(t,e){this.answer="Waiting for you to stop typing...",this.debouncedGetAnswer()}},created:function(){var t=this;setTimeout(function(){t.debouncedGetAnswer=t.getAnswer},500)},methods:{getAnswer:function(){if(-1!==this.question.indexOf("?")){this.answer="Thinking...";var t=this;t.axios.get("https://yesno.wtf/api").then(function(e){t.answer=e.data.answer.toLowerCase(),t.url=e.data.image.toLowerCase(),console.log(t.answer),console.log(t.url)}).catch(function(e){t.answer="Error! Could not reach the API. "+e})}else this.answer="Questions usually contain a question mark. ;-)"}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    Ask a yes/no question:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],attrs:{type:"text"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),t._v(" "),n("p",[t._v(t._s(t.answer))]),t._v(" "),n("img",{attrs:{src:t.url,alt:"",srcset:""}})])},staticRenderFns:[]},x={components:{QuickStart:n("VU/8")(p,f,!1,null,null,null).exports,ListAnimation:n("VU/8")(g,b,!1,function(t){n("DRxp")},"data-v-784fa9fa",null).exports,Request:n("VU/8")(w,k,!1,null,null,null).exports},data:function(){return{currentTab:"QuickStart",tabs:["QuickStart","ListAnimation","Request"]}},computed:{currentTabComponent:function(){return this.currentTab}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"learn"},[t._l(t.tabs,function(e){return n("button",{key:e,class:["tab-button",{active:t.currentTab===e}],on:{click:function(n){t.currentTab=e}}},[t._v(t._s(e))])}),t._v(" "),n("keep-alive",[n(t.currentTabComponent,{tag:"component",staticClass:"tab"})],1)],2)},staticRenderFns:[]};var A=n("VU/8")(x,y,!1,function(t){n("3m2/")},"data-v-1877f630",null).exports;a.a.use(i.a);var F=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:c},{path:"/migrate",name:"Migrate",component:d},{path:"/learn",name:"Learn",component:A},{path:"/helloword",name:"HelloWorld",component:u},{path:"*",name:"NotFound",component:h}]}),C=n("mtWM"),q=n.n(C),T=n("Rf8U"),E=n.n(T),R=n("M4fF"),L=n.n(R);a.a.use(E.a,q.a,L.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:F,components:{App:s},template:"<App/>"})},OZGp:function(t,e){},ZqCB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.77491cf3e43a819ff032.js.map