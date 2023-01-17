import{T as m,g as i}from"./index-6e7ac18c.js";import{y as v,m as u,e as d}from"./vendor-c36f6596.js";const g="/assets/doid-15c8a698.svg";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(r,e,o,t)=>{for(var s=t>1?void 0:t?b(e,o):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(t?a(e,o,s):a(s))||s);return t&&s&&h(e,o,s),s};let l=class extends m(""){constructor(){super(...arguments),this.icon=""}render(){return v`<strong class="block w-24 h-24 m-12 mx-auto" href="/"><img class="w-full h-full object-contain select-none pointer-events-none" src="${this.icon||g}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};p([u()],l.prototype,"icon",2);l=p([d("doid-symbol")],l);const f="",w="/assets/logo-26ba3c98.svg";var _=Object.defineProperty,D=Object.getOwnPropertyDescriptor,O=(r,e,o,t)=>{for(var s=t>1?void 0:t?D(e,o):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(t?a(e,o,s):a(s))||s);return t&&s&&_(e,o,s),s};let c=class extends m(f){constructor(){super(...arguments),this.goto=r=>{const{token:e,uri:o,DOID:t}=r.detail;e.name?i(`/collection/${o}`):i(`/artist/${t.doid}`)}}render(){return v`<div class="home"><div class="dui-container"><doid-symbol icon="${w}"><span slot="h1">ARTSCAN</span><p slot="msg">Authentic art, with Web3 artist signature</p></doid-symbol><div class="max-w-2xl mx-auto"><search-bar placeholder="Search by DOID artist signature/artwork" label="DOID of artist or artwork"></search-bar></div></div></div>`}};c=O([d("view-home")],c);export{c as ViewHome};
