(function(e){function t(t){for(var r,l,u=t[0],i=t[1],c=t[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MenuLateral"),n("router-view")],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.streaming-menu",modifiers:{"streaming-menu":!0}}]},[e._v("Expandir Menu")]),n("b-sidebar",{attrs:{id:"streaming-menu",title:"Sidebar",shadow:""}},[n("div",{staticClass:"px-3 py-2"},[n("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{to:"/catalogo"}},[e._v("Catalogo")])],1)])],1)},u=[],i={name:"MenuLateral"},c=i,s=n("2877"),f=Object(s["a"])(c,l,u,!1,null,null,null),p=f.exports,d={components:{MenuLateral:p}},m=d,v=(n("034f"),Object(s["a"])(m,o,a,!1,null,null,null)),b=v.exports,g=n("8c4f"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Home Streaming")]),r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],y={name:"Home"},O=y,w=Object(s["a"])(O,h,_,!1,null,null,null),j=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Login")])},M=[],E={name:"Login"},P=E,S=Object(s["a"])(P,x,M,!1,null,null,null),$=S.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Catálogo")])},L=[],H={name:"Catalogo"},k=H,T=Object(s["a"])(k,C,L,!1,null,null,null),J=T.exports;r["default"].use(g["a"]);var N=[{path:"/",name:"Home",component:j},{path:"/login",name:"Login",component:$},{path:"/catalogo",name:"Catalogo",component:J}],V=new g["a"]({routes:N}),q=V,z=n("5f5b"),A=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(z["a"]),r["default"].use(A["a"]),r["default"].config.productionTip=!1,new r["default"]({router:q,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.76e98f92.js.map