(function(t){function e(e){for(var n,o,i=e[0],s=e[1],l=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==c[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"aa2e9cc0"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=c[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(t);var l=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=c[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}c[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/travel/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"11dd":function(t,e,a){t.exports=a.p+"img/brand.a007aa05.svg"},"1c3f":function(t,e,a){},2376:function(t,e,a){t.exports=a.p+"img/filter.727470b0.svg"},"2d08":function(t,e,a){},"3cf1":function(t,e,a){},"3f35":function(t,e,a){t.exports=a.p+"img/food.4437bd99.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=a("cf05"),r=a.n(c),o=a("d103"),i=a.n(o),s=a("9e08"),l=a.n(s),u=a("3f35"),d=a.n(u),f=a("f035"),b=a.n(f),p=function(t){return Object(n["z"])("data-v-27e9a58f"),t=t(),Object(n["x"])(),t},v={class:"navbar navbar-expand-lg"},g={class:"container-fluid"},m=p((function(){return Object(n["f"])("img",{src:r.a,alt:"logo"},null,-1)})),O=p((function(){return Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1)})),j={id:"navbarSupportedContent",class:"collapse navbar-collapse"},h=p((function(){return Object(n["f"])("form",{class:"d-flex input-group-custom input-group-custom-sm"},[Object(n["f"])("input",{class:"form-control",type:"search",placeholder:"Search","aria-label":"Search"}),Object(n["f"])("button",{class:"btn input-group-icon",type:"submit"},[Object(n["f"])("img",{src:i.a,alt:"search",style:{height:"14px",width:"14px"}})])],-1)})),y={class:"navbar-nav ms-auto mb-2 mb-lg-0 row"},x={class:"nav-item col"},w=Object(n["h"])(" 找景點 "),A=p((function(){return Object(n["f"])("img",{src:l.a,alt:"找景點"},null,-1)})),T={class:"nav-item col"},k=Object(n["h"])(" 找餐廳 "),U=p((function(){return Object(n["f"])("img",{src:d.a,alt:"找餐廳"},null,-1)})),C={class:"nav-item col"},P=Object(n["h"])(" 找飯店 "),S=p((function(){return Object(n["f"])("img",{src:b.a,alt:"找飯店"},null,-1)})),E={class:"nav-item col"},G=Object(n["h"])(" 我的旅程 ");function B(t,e){var a=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["e"])("nav",v,[Object(n["f"])("div",g,[Object(n["i"])(a,{class:"navbar-brand",to:"/"},{default:Object(n["I"])((function(){return[m]})),_:1}),O,Object(n["f"])("div",j,[h,Object(n["f"])("ul",y,[Object(n["f"])("li",x,[Object(n["i"])(a,{to:"/tour",class:"btn btn-outline-primary text-nowrap"},{default:Object(n["I"])((function(){return[w,A]})),_:1})]),Object(n["f"])("li",T,[Object(n["i"])(a,{to:"/food",class:"btn btn-outline-primary text-nowrap"},{default:Object(n["I"])((function(){return[k,U]})),_:1})]),Object(n["f"])("li",C,[Object(n["i"])(a,{to:"/hotel",class:"btn btn-outline-primary text-nowrap"},{default:Object(n["I"])((function(){return[P,S]})),_:1})]),Object(n["f"])("li",E,[Object(n["i"])(a,{to:"/my-journey",class:"btn btn-primary"},{default:Object(n["I"])((function(){return[G]})),_:1})])])])])])}a("b375");var I=a("6b0d"),V=a.n(I);const F={},z=V()(F,[["render",B],["__scopeId","data-v-27e9a58f"]]);var H=z,L={setup:function(t){return function(t,e){var a=Object(n["D"])("router-view");return Object(n["w"])(),Object(n["e"])("div",null,[Object(n["i"])(H),Object(n["i"])(a)])}}};const M=L;var X=M,W=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),Y={class:"position-relative overflow-hidden p-3 p-md-5 text-center bg-light bg-cover"},Z=Object(n["g"])('<div class="col-md-5 py-lg-5 mx-auto my-5" data-v-0263371d><h1 class="text-white" data-v-0263371d> 開始實現你的夢想旅程 </h1><form class="d-flex input-group-custom my-3" data-v-0263371d><input type="text" class="form-control" placeholder="想要去哪？" aria-label="想要去哪？" aria-describedby="basic-addon1" data-v-0263371d><button class="btn input-group-icon" type="submit" data-v-0263371d><img src="'+i.a+'" alt="search" style="height:14px;width:14px;" data-v-0263371d></button></form></div>',1),q=[Z],K={setup:function(t){return function(t,e){return Object(n["w"])(),Object(n["e"])("div",Y,q)}}};a("c73b");const Q=V()(K,[["__scopeId","data-v-0263371d"]]);var R=Q,D=function(t){return Object(n["z"])("data-v-1d286920"),t=t(),Object(n["x"])(),t},J={class:"position-relative overflow-hidden p-3 p-md-5 text-center bg-light bg-cover"},N=D((function(){return Object(n["f"])("div",{class:"col-md-5 py-lg-5 mx-auto my-5"},[Object(n["f"])("h1",{class:"text-white"}," 你不能錯過的注目景點！ "),Object(n["f"])("button",{type:"button",class:"btn btn-primary"}," 賞楓秘境看這裡 ")],-1)})),_=[N];function $(t,e){return Object(n["w"])(),Object(n["e"])("div",J,_)}a("ffb0");const tt={},et=V()(tt,[["render",$],["__scopeId","data-v-1d286920"]]);var at=et,nt=(a("99af"),a("8349")),ct=a("8aee"),rt=a("d561"),ot=a("defa"),it=(a("a9e3"),a("62f3")),st=a.n(it),lt={class:"card my-3"},ut=Object(n["f"])("div",{class:"position-relative"},[Object(n["f"])("img",{src:st.a,class:"card-img-top",alt:"Card"}),Object(n["f"])("button",{type:"button",class:"btn btn-outline-primary btn-like"},[Object(n["f"])("i",{class:"bi bi-heart"})])],-1),dt={class:"card-body"},ft={class:"card-title"},bt={props:{title:{type:String,default:""},score:{type:Number,default:0},tags:{type:Array,default:function(){return[]}}},setup:function(t){var e=t;return function(t,a){return Object(n["w"])(),Object(n["e"])("div",lt,[ut,Object(n["f"])("div",dt,[Object(n["f"])("h5",ft,Object(n["F"])(e.title),1),(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["C"])(e.tags,(function(t,e){return Object(n["w"])(),Object(n["e"])("button",{key:e,class:"tag"},Object(n["F"])(t),1)})),128))])])}}};const pt=bt;var vt=pt,gt=(a("41fa"),a("d9ac"),{class:"container-fluid mt-4"}),mt={class:"container d-flex justify-content-between align-items-center mt-3"},Ot={class:"m-0 fw-bold"},jt=Object(n["f"])("button",{type:"button",class:"btn btn-primary"}," 查看更多 ",-1),ht={props:{category:{type:String,default:"Title"},cards:{type:Array,default:function(){return[]}}},setup:function(t){var e=t;return ot["a"].use([ct["a"],rt["a"]]),function(a,c){return Object(n["w"])(),Object(n["e"])("div",gt,[Object(n["f"])("div",mt,[Object(n["f"])("h3",Ot,Object(n["F"])(e.category),1),jt]),Object(n["i"])(Object(n["G"])(nt["a"]),{slidesPerView:1,freeMode:!0,mousewheel:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:20},992:{slidesPerView:3,spaceBetween:30},1400:{slidesPerView:4,spaceBetween:20},1920:{slidesPerView:5,spaceBetween:20}}},{default:Object(n["I"])((function(){return[(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["C"])(t.cards,(function(t,e){return Object(n["w"])(),Object(n["d"])(Object(n["G"])(nt["b"]),{key:e},{default:Object(n["I"])((function(){return[Object(n["i"])(vt,{title:"".concat(t.title," ").concat(e+1),tags:t.tags},null,8,["title","tags"])]})),_:2},1024)})),128))]})),_:1})])}}};const yt=ht;var xt=yt,wt=a("11dd"),At=a.n(wt),Tt={class:"bg-primary"},kt=Object(n["g"])('<footer class="container d-flex justify-content-between align-items-center py-4" data-v-0f4a2166><div class="m-0" data-v-0f4a2166><img src="'+At.a+'" alt="Brand" data-v-0f4a2166><div data-v-0f4a2166><a href="#" class="me-2" target="_blank" data-v-0f4a2166><i class="bi bi-facebook" data-v-0f4a2166></i></a><a href="#" class="me-2" target="_blank" data-v-0f4a2166><i class="bi bi-line" data-v-0f4a2166></i></a><a href="#" target="_blank" data-v-0f4a2166><i class="bi bi-twitter" data-v-0f4a2166></i></a></div></div><p class="m-0" data-v-0f4a2166><ul class="row m-0 p-0 list-unstyled" data-v-0f4a2166><li class="col d-flex flex-column justify-content-center align-items-center" data-v-0f4a2166><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 找景點 </a><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 主題景點 </a></li><li class="col d-flex flex-column justify-content-center align-items-center" data-v-0f4a2166><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 找景點 </a><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 主題景點 </a></li><li class="col d-flex flex-column justify-content-center align-items-center" data-v-0f4a2166><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 找餐廳 </a><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 主題餐廳 </a></li><li class="col d-flex flex-column justify-content-center align-items-center" data-v-0f4a2166><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 會員登入 </a><a href="#" class="link-light text-decoration-none" data-v-0f4a2166> 商家專區 </a></li></ul></p><p class="m-0 text-light" data-v-0f4a2166> Copyright © </p></footer>',1),Ut=[kt];function Ct(t,e){return Object(n["w"])(),Object(n["e"])("div",Tt,Ut)}a("b4d3");const Pt={},St=V()(Pt,[["render",Ct],["__scopeId","data-v-0f4a2166"]]);var Et=St,Gt={setup:function(t){for(var e=[],a=0;a<10;a+=1)e.push({title:"新北歡樂耶誕城",score:4.6,tags:["文化活動","熱鬧","新北板橋"]});for(var c=[],r=0;r<10;r+=1)c.push({title:"台北大稻埕",score:4.6,tags:["文化活動","熱鬧"]});return function(t,a){return Object(n["w"])(),Object(n["e"])("div",null,[Object(n["i"])(R),Object(n["i"])(xt,{category:"熱門打卡景點",cards:e}),Object(n["i"])(at),Object(n["i"])(xt,{category:"Rainbow Life!",cards:c}),Object(n["i"])(Et)])}}};const Bt=Gt;var It=Bt,Vt=a("f931"),Ft=a.n(Vt),zt=a("2376"),Ht=a.n(zt),Lt=a("99ad"),Mt=a.n(Lt),Xt=Object(n["g"])('<div class="container py-5" data-v-eb0dde10><h1 class="text-light fw-bold" data-v-eb0dde10> 景點列表 </h1><ul class="list-unstyled row my-0" data-v-eb0dde10><li class="col-3 d-grid" data-v-eb0dde10><button type="button" class="btn btn-outline-primary text-start" data-v-eb0dde10> 選擇地區 </button></li><li class="col-3 d-grid" data-v-eb0dde10><button type="button" class="btn btn-outline-primary text-start" data-v-eb0dde10> 選擇參觀日期 </button></li><li class="col-auto ms-auto pe-0" data-v-eb0dde10><button type="button" class="btn btn-primary text-start d-flex justify-content-between align-items-center" data-v-eb0dde10> 排序 <img class="ms-2" src="'+Ft.a+'" alt="sort" data-v-eb0dde10></button></li><li class="col-auto pe-0" data-v-eb0dde10><button type="button" class="btn btn-primary text-start d-flex justify-content-between align-items-center" data-v-eb0dde10> 篩選 <img class="ms-2" src="'+Ht.a+'" alt="sort" data-v-eb0dde10></button></li><li class="col-auto pe-0" data-v-eb0dde10><button type="button" class="btn btn-primary h-100" data-v-eb0dde10><img src="'+Mt.a+'" alt="sort" data-v-eb0dde10></button></li></ul></div>',1),Wt=[Xt],Yt={props:{imgSrc:{type:String,default:""}},setup:function(t){var e=t,a=Object(n["B"])(e.imgSrc);return function(t,e){return Object(n["w"])(),Object(n["e"])("div",{class:"bg-cover",style:Object(n["o"])({backgroundImage:"url(".concat(a.value,")")})},Wt,4)}}};a("9034");const Zt=V()(Yt,[["__scopeId","data-v-eb0dde10"]]);var qt=Zt,Kt={setup:function(t){var e="https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80";return function(t,a){return Object(n["w"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(qt,{imgSrc:e}),Object(n["i"])(Et)],64)}}};const Qt=Kt;var Rt=Qt;function Dt(t,e){return Object(n["w"])(),Object(n["e"])("h1",null,"Food")}const Jt={},Nt=V()(Jt,[["render",Dt]]);var _t=Nt;function $t(t,e){return Object(n["w"])(),Object(n["e"])("h1",null,"Hotel")}const te={},ee=V()(te,[["render",$t]]);var ae=ee;function ne(t,e){return Object(n["w"])(),Object(n["e"])("h1",null,"My Journey")}const ce={},re=V()(ce,[["render",ne]]);var oe=re,ie=[{path:"/",name:"Home",component:It},{path:"/tour",name:"Tour",component:Rt},{path:"/food",name:"Food",component:_t},{path:"/hotel",name:"Hotel",component:ae},{path:"/my-journey",name:"MyJourney",component:oe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],se=Object(W["a"])({history:Object(W["b"])("/travel/"),routes:ie}),le=se;a("ce50"),a("d617"),a("7b17");Object(n["c"])(X).use(le).mount("#app")},"62f3":function(t,e,a){t.exports=a.p+"img/card-img.123eaf2c.png"},9034:function(t,e,a){"use strict";a("2d08")},"99ad":function(t,e,a){t.exports=a.p+"img/list.4baa4ec7.svg"},"9c83":function(t,e,a){},"9e08":function(t,e,a){t.exports=a.p+"img/tour.a04457a1.svg"},b375:function(t,e,a){"use strict";a("e2f1")},b4d3:function(t,e,a){"use strict";a("3cf1")},c73b:function(t,e,a){"use strict";a("9c83")},ce50:function(t,e,a){},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAAWCAYAAADuKF/RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAajSURBVHgB7VpvThtHFH9vdrM4oVJ9gyyVcExUCXOCmhMUPgaSFp8g5ATACUJOYEeU5GPMCXBOgCtVtQGp2ZwgzgeosXdn+mb8h7U9Y3vXXtK0+Umg9fx9s/Pm/fnNYvby7R5CsCsEpmE2eBC01usrBW+4wj0rpp0Hdp4h+xkE5pHxtG4+AVBFwAZyfiJEu6wbS8Igc6me2S6AAbo+9Fy+ub4peGuFhmpTK7pgLRSpJg8TgCgagrMGIHhKbgxO6svPKsb5L96cIvJcb37ZHwQr1TJbL+BfBly5/O3THBSiMxgXL2rZp4fhsuzlUZ4WTy8aXIgKZPv15ScH4SL3QzGdajufdM2DFqxd/rhd1dVlL46FdgofN2uPt8rdNlLOHYgP7cHovoNT7fw2uLUftj/CHUDJwSHfn1tgQ3f47HkphIRAMTCWOnmGlzHdgHyfTjiEFSPVTKXB4trmlsUjr0XYfqgPuspexYeLlnO2/Mfxelg5m7ZfJUXWdvj7c+sz3AH6e4G3ZYKeEZxf6XEt3JZBklCmeEZIxZAL+kpAKpW2HHgXLvOWCo1AvvgACoN/fL3nuhKH5eRBL29uuMyGhNDZyMm+eSowe4f+78PXAzdbO8rXV25jjPZVy7MWnf4GcDLdjPuecQCKw1Lf2TmIgOGYRo2x6Gx0f/5k6kduc6cn08WjrbLdCe4g0uQmYGD1TSZndm6cGRIgqgzRU8+C3I5Al2yZq20r2FzkiwsECirpPWlq8qY+ApncjIp8lgcE7XtnQkDfVTEU8vR69LgU7vf44jjHAV+qAxXRk1EwW6lnttZ7v0khzmC6WK7Yk0mOYWPANily3hiOB5CxVVrEhmGQEpn1weCIQ6X2+FZT2ThFC9jS+coTL1wkA8iFtnOqU1BksApfEAKwrMtspDUAyxgzuf0n23YNsZu78tfxw16gKZWH9uEUQsoTBaS8OaMMU0O4dr2zOYfDVV2ToleKgL8Om0atgAhpnaLTpldrQwohIf1u9vzohDQgp+kzt2B4npDvgN6Ttg6Z+B4iAi17JmqA3vdc4pPEYgq1ONSUkymGiBBfWCl0G5X9QC7BX3hOrk/fh2PkrEKAtTpT9iP4a5gDElOK/xKIaNoY4TnaSsHH9OFViAzhakvJut5ctWJkKliJEexXvilFUuB2CeYEiv/S9xYdl6zTiFLUl/Ssr0Tz6mYzlepmMIzlyXLvaRtSaqyaWKzxZ2a7+k0pkkGprombJkNmYxprQVmZBXAGGgKMGOmGpOuJST0YZia7lqUin8nSuWDAcHyYLHn1P4Q09c2rVqz7DLqb+R0iohvv7EgmdV4k350rBV14JRc0WnqfvHxRvBueg8P788z2WlyWEoGVICZUMG45ezAHJKgUwjNUuJJp09Yge2jo48FUsPaWifwJl8gswUbzy0LfnryBQs4vSr0/dcOpG4v4FOPapoD058q/i2nXO4I8xIDkSsK/E4sp1A2cNiWF9MKDhWLm/M1rxgL1cjm30ozhKqVUO9qxQvm39NVdP6olg6TvHeAO2uOTPJ8blTcsADGFT/vkFfEpHym92NOt7f7igiyPfR3e9e9L2dpbl6RzdW2ExV5qSb4xqTsXvMFQbwO4D2XajwO5H5IqT5CnEFXQERXQSfFQEmOiI6SifIV564YpZqK9q/O6VzFdtY9D0/EPUy26XdTQ8pSm7hLTeTKJ3JuEbqDq6eoeXR57NFFudG6zUrQcv2K6qZUKRnvyTu6HorkhITRTfvW+f68xj6t59PFkoEAE78lW52F2lCAGFPtaOyoYKW6LFcmNRI4t6LRu0DF5ObGh0MdOMMbNKplpwycfJuEmFlNIIXgABzAryL/2PoLpQZ7UGfzuLQIWWz5lCYQwMYhu6oG9CxHBEJ6T33Un/hkxwRUGwVTrTTT7OM8+PUTgryAu5MZztj5cLBVOlcdUDFRUe1CIxyXcoum0d01BZ7yb3XEbPgUCHEtzdxSZT1QMs1IE3DPWgT2mbhC1zLNd9UEJiMq0fdRmk/DN69aaaeNUuVIMWuSUyqGuwDm8EoG1Vs/8Uhqdl9ySDgFoy6VyCl9saudi0P9kUH55pVUekjv85RUF5jGo8c665KeQ9ZXt0qS29UfP9uUt9RgrV8FxA8j0zgoGAxpmQVWlTjEhvxfwBXcZZyOxhhz7+qrlxcnzb6N15g7XccblBy1V04fAYWTOjzYGZePepKCxMzfPj+sz2oaUpdkqh9fab8O4C1NAZngBCq917VficiPy+p8zSPfWLGX6B/YmNWiGGgmYAAAAAElFTkSuQmCC"},d103:function(t,e,a){t.exports=a.p+"img/search.e92a1bdb.svg"},e2f1:function(t,e,a){},f035:function(t,e,a){t.exports=a.p+"img/bed.1ae77369.svg"},f931:function(t,e,a){t.exports=a.p+"img/sort.b3a290f8.svg"},ffb0:function(t,e,a){"use strict";a("1c3f")}});
//# sourceMappingURL=app.501e2e03.js.map