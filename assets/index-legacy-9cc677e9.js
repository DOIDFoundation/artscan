System.register(["./index-legacy-0b0e4c4d.js","./vendor-legacy-8274d652.js"],(function(e,t){"use strict";var s,o,r,n,i,c;return{setters:[e=>{s=e.T,o=e.g},e=>{r=e.x,n=e.j,i=e.n,c=e.e}],execute:function(){const t="/assets/doid-15c8a698.svg";var a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=(e,t,s,o)=>{for(var r,n=o>1?void 0:o?l(t,s):t,i=e.length-1;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&a(t,s,n),n};let h=class extends(s("")){constructor(){super(...arguments),this.icon="",this.sm=!1,this.dense=!1}render(){return r`<strong href="/" class="block m-12 mx-auto ${n(this.$c([this.sm?"w-14 h-14 ":"w-24 h-24"]))}"><img class="w-full h-full object-contain select-none pointer-events-none" src="${this.icon||t}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};d([i()],h.prototype,"icon",2),d([i({type:Boolean})],h.prototype,"sm",2),d([i({type:Boolean})],h.prototype,"dense",2),h=d([c("doid-symbol")],h);let p=class extends(s("")){constructor(){super(...arguments),this.sm=!1}render(){return r`<img class="w-full h-full object-contain select-none pointer-events-none ${n({"w-2/3 h-2/3":this.sm})}" src="${t}">`}};d([i({type:Boolean})],p.prototype,"sm",2),p=d([c("doid-icon")],p);var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor;let g=e("ViewHome",class extends(s("")){constructor(){super(...arguments),this.goto=e=>{const{token:t,uri:s,DOID:r}=e.detail;t.name?o(`/collection/${s}`):o(`/artist/${r.doid}`)}}render(){return r`<div class="home"><div class="dui-container"><doid-symbol icon="${"/assets/logo-26ba3c98.svg"}"><span slot="h1">ARTSCAN</span><p slot="msg">Authentic art, with Web3 artist signature</p></doid-symbol><div class="max-w-2xl mx-auto"><search-bar placeholder="Search by DOID artist signature/artwork" label="DOID of artist or artwork"></search-bar></div></div></div>`}});e("ViewHome",g=((e,t,s,o)=>{for(var r,n=o>1?void 0:o?m(t,s):t,i=e.length-1;i>=0;i--)(r=e[i])&&(n=(o?r(t,s,n):r(n))||n);return o&&n&&u(t,s,n),n})([c("view-home")],g))}}}));
