(function(){"use strict";var e={6231:function(e,a,n){var r=n(9242),t=n(3396);function o(e,a,n,r,o,i){const l=(0,t.up)("navbar-topo"),c=(0,t.up)("corpo-padrao"),s=(0,t.up)("rodape-bar");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(l),(0,t.Wm)(c),(0,t.Wm)(s)],64)}const i={class:"container"};function l(e,a,n,r,o,l){const c=(0,t.up)("corpo-nav-bar"),s=(0,t.up)("corpo-body");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(c,{onNavegar:a[0]||(a[0]=a=>e.componenteRenderizar=a)}),(0,t.Wm)(s,{propsRenderizar:e.componenteRenderizar},null,8,["propsRenderizar"])])}function c(e,a,n,r,o,i){return(0,t.wg)(),(0,t.j4)(t.Ob,null,[((0,t.wg)(),(0,t.j4)((0,t.LL)(n.propsRenderizar)))],1024)}function s(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("div",null,"Schedule-em produção")}var u={name:"Agenda"},d=n(89);const m=(0,d.Z)(u,[["render",s]]);var p=m;function f(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("div",null,"DgInfinita em produção")}var v={name:"DgInfinita"};const g=(0,d.Z)(v,[["render",f]]);var b=g,h=n(7139);const w=(0,t._)("hr",{class:"border border-2 border-warning opacity-100 mb-1"},null,-1),y=(0,t._)("hr",{class:"border border-2 border-warning opacity-100 mt-0"},null,-1),_={class:"table table-striped-columns"},k=(0,t._)("th",null,"Gemas lvl 1 necessarias para o lvl:",-1),D=(0,t._)("td",null,"quantidade de gemas:",-1),z=(0,t._)("hr",{class:"border border-2 border-warning opacity-100 mb-1"},null,-1),O=(0,t._)("hr",{class:"border border-2 border-warning opacity-100 mt-0"},null,-1),C={class:"table table-striped-columns"},S=(0,t._)("th",null,"level da gema",-1),j=(0,t._)("td",null,"preço mercado:",-1),M=(0,t._)("td",null,"rendimento:",-1),G={class:"form-text"},I=(0,t._)("hr",{class:"border border-2 border-warning opacity-100 mb-1"},null,-1),Z=(0,t._)("hr",{class:"border border-2 border-warning opacity-100 mt-0"},null,-1);function P(e,a,n,r,o,i){const l=(0,t.up)("gema-form");return(0,t.wg)(),(0,t.iD)(t.HY,null,[w,y,(0,t._)("table",_,[(0,t._)("thead",null,[(0,t._)("tr",null,[k,((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(10,(e=>(0,t._)("th",{key:e},(0,h.zw)(e),1))),64))])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[D,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.quantidadeGemas,((e,a)=>((0,t.wg)(),(0,t.iD)("td",{key:a},(0,h.zw)(e.toLocaleString("pt-BR",{style:"decimal"})),1)))),128))])])]),z,O,(0,t._)("table",C,[(0,t._)("thead",null,[(0,t._)("tr",null,[S,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.gemas,((e,a)=>((0,t.wg)(),(0,t.iD)("th",{key:a},(0,h.zw)(e.level),1)))),128))])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[j,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.gemas,((e,a)=>((0,t.wg)(),(0,t.iD)("td",{key:a},(0,h.zw)(e.price.toLocaleString("pt-BR",{style:"decimal"})),1)))),128))]),(0,t._)("tr",null,[M,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.gemas,((e,a)=>((0,t.wg)(),(0,t.iD)("td",{key:a},[(0,t.Uk)((0,h.zw)(i.rendimentoGema(e.price,a))+" ",1),(0,t._)("div",G,"ultimo update: "+(0,h.zw)(e.last_update),1)])))),128))])])]),(0,t._)("button",{onClick:a[0]||(a[0]=e=>i.formGemaShowF())},"Atualizar preço das gemas"),e.formGemaShow?((0,t.wg)(),(0,t.j4)(l,{key:0,gemaData:this.gemas,onAtualizacao:a[1]||(a[1]=a=>e.gemaAtualizacao=a)},null,8,["gemaData"])):(0,t.kq)("",!0),I,Z],64)}var A=n(4154);const T="https://ydqmsdvqwqfgbsibvreg.supabase.co",q="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkcW1zZHZxd3FmZ2JzaWJ2cmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU1NzU3MzIsImV4cCI6MTk3MTE1MTczMn0.a60wEVAyTdH4cddEb9YmpJciqlnieXVLISry38o0IQc",R=(0,A.eI)(T,q),x={action:"",class:"row"},N={class:"row"},E={class:"col-3 col-form-label",for:""},J={class:"col-6"},L=["onUpdate:modelValue"],H=["onClick"];function Y(e,a,n,o,i,l){return(0,t.wg)(),(0,t.iD)("form",x,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.gemas,((a,n)=>((0,t.wg)(),(0,t.iD)("div",{class:"col-sm-6 mb-1",key:n},[(0,t._)("div",N,[(0,t._)("label",E,"Gema level "+(0,h.zw)(a.level)+":",1),(0,t._)("div",J,[(0,t.wy)((0,t._)("input",{type:"number",class:"form-control","onUpdate:modelValue":a=>e.gemas[n].price=a},null,8,L),[[r.nr,e.gemas[n].price]])]),(0,t._)("button",{class:"btn btn-success col-3",type:"button",onClick:e=>l.enviar(n,a.id)},"Atualizar ",8,H)])])))),128))])}var B={name:"GemaForm",props:{gemaData:{type:Object,required:!0}},data:()=>({gemas:{}}),created(){this.gemas=JSON.parse(JSON.stringify(this.gemaData))},methods:{async enviar(e,a){try{let n=(new Date).toLocaleString("pt-BR");const{data:r}=await R.from("gem").update({price:this.gemas[e].price,last_update:n}).eq("level",a);this.$emit("atualizacao",r)}catch(n){console.log("error->>>",n)}}}};const F=(0,d.Z)(B,[["render",Y]]);var V=F,W={components:{gemaForm:V},name:"Gema",data:()=>({gemas:{},error:{},quantidadeGemas:[1,3,9,27,81,243,729,2187,6561,19683],formGemaShow:!1,gemaAtualizacao:""}),methods:{async getGemas(){try{const{data:e}=await R.from("gem").select("*").order("id");this.gemas=e}catch(e){console.log(e)}},formGemaShowF(){this.formGemaShow=!this.formGemaShow},rendimentoGema(e,a){let n=Math.floor(.95*this.gemas[0].price),r=n*this.quantidadeGemas[a],t=Math.floor(.95*e),o=100*t/r-100,i=Math.floor(o);return i+"%"}},created(){this.getGemas()},watch:{gemaAtualizacao(e){this.gemas[e[0].id-1].price=e[0].price,this.gemas[e[0].id-1].last_update=e[0].last_update}}};const X=(0,d.Z)(W,[["render",P]]);var K=X;function U(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("div",null,"Mercado vou-mecher aqui agora")}var Q={name:"Mercado"};const $=(0,d.Z)(Q,[["render",U]]);var ee=$;function ae(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("div",null,"MktXMari-em produção")}var ne={name:"MktXMari"};const re=(0,d.Z)(ne,[["render",ae]]);var te=re,oe={name:"CorpoBody",components:{DgInfinita:b,Gema:K,Mercado:ee,MktXMari:te,Agenda:p},data:()=>({}),props:{propsRenderizar:{type:String,required:!0}}};const ie=(0,d.Z)(oe,[["render",c]]);var le=ie;const ce={class:"navbar navbar-expand-lg bg-light"},se={class:"container-fluid justify-content-enter"},ue={class:"navbar-nav"},de={class:"nav-item"},me={class:"nav-item"},pe={class:"nav-item"},fe={class:"nav-item"},ve={class:"nav-item"};function ge(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("nav",ce,[(0,t._)("div",se,[(0,t._)("ul",ue,[(0,t._)("li",de,[(0,t._)("a",{class:"nav-link",href:"#",onClick:a[0]||(a[0]=e=>i.navegarPara("agenda"))},"Agenda")]),(0,t._)("li",me,[(0,t._)("a",{class:"nav-link",href:"#",onClick:a[1]||(a[1]=e=>i.navegarPara("gema"))},"Gema")]),(0,t._)("li",pe,[(0,t._)("a",{class:"nav-link",href:"#",onClick:a[2]||(a[2]=e=>i.navegarPara("mercado"))},"Mercado")]),(0,t._)("li",fe,[(0,t._)("a",{class:"nav-link",href:"#",onClick:a[3]||(a[3]=e=>i.navegarPara("mkt-x-mari"))},"Mercado x Mari")]),(0,t._)("li",ve,[(0,t._)("a",{class:"nav-link",href:"#",onClick:a[4]||(a[4]=e=>i.navegarPara("dg-infinita"))},"DG infinita")])])])])}var be={name:"CorpoNavBar",methods:{navegarPara(e){this.$emit("navegar",e)}}};const he=(0,d.Z)(be,[["render",ge]]);var we=he,ye={name:"Corpo",components:{CorpoBody:le,CorpoNavBar:we},data:()=>({componenteRenderizar:"Gema"}),methods:{}};const _e=(0,d.Z)(ye,[["render",l]]);var ke=_e;function De(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("div",null,"Rodape")}var ze={name:"Rodape"};const Oe=(0,d.Z)(ze,[["render",De]]);var Ce=Oe;const Se={class:"navbar navbar-expand-lg navbar-dark bg-dark"},je=(0,t.uE)('<div class="container-fluid"><a class="navbar-brand" href="#">LSD- Lost ark Schedule</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li></ul></div></div>',1),Me=[je];function Ge(e,a,n,r,o,i){return(0,t.wg)(),(0,t.iD)("nav",Se,Me)}var Ie={name:"Topo"};const Ze=(0,d.Z)(Ie,[["render",Ge]]);var Pe=Ze,Ae={name:"App",components:{CorpoPadrao:ke,RodapeBar:Ce,NavbarTopo:Pe},data:()=>({}),methods:{}};const Te=(0,d.Z)(Ae,[["render",o]]);var qe=Te;(0,r.ri)(qe).mount("#app")}},a={};function n(r){var t=a[r];if(void 0!==t)return t.exports;var o=a[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,r,t,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],t=e[u][1],o=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=t();void 0!==s&&(a=s)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,t,o]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){var e,a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,t){if(1&t&&(r=this(r)),8&t)return r;if("object"===typeof r&&r){if(4&t&&r.__esModule)return r;if(16&t&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,a({}),a([]),a(a)];for(var l=2&t&&r;"object"==typeof l&&!~e.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(o,i),o}}(),function(){n.d=function(e,a){for(var r in a)n.o(a,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,r){return n.f[r](e,a),a}),[]))}}(),function(){n.u=function(e){return"js/"+e+".f5a953cd.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="v8_daily_lost_ark:";n.l=function(r,t,o,i){if(e[r])e[r].push(t);else{var l,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==a+o){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",a+o),l.src=r),e[r]=[t];var m=function(a,n){l.onerror=l.onload=null,clearTimeout(p);var t=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),t&&t.forEach((function(e){return e(n)})),a)return a(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(a,r){var t=n.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else{var o=new Promise((function(n,r){t=e[a]=[n,r]}));r.push(t[2]=o);var i=n.p+n.u(a),l=new Error,c=function(r){if(n.o(e,a)&&(t=e[a],0!==t&&(e[a]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+a+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,t[1](l)}};n.l(i,c,"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,r){var t,o,i=r[0],l=r[1],c=r[2],s=0;if(i.some((function(a){return 0!==e[a]}))){for(t in l)n.o(l,t)&&(n.m[t]=l[t]);if(c)var u=c(n)}for(a&&a(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkv8_daily_lost_ark"]=self["webpackChunkv8_daily_lost_ark"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6231)}));r=n.O(r)})();
//# sourceMappingURL=app.aa252536.js.map