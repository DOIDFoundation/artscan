import{T as u,a as b}from"./index-a6111c5d.js";import{x as l,n as v,e as f,l as h,k as c}from"./vendor-c17b9770.js";import{g as _,a as O,b as I}from"./list-f13cac9e.js";var k=Object.defineProperty,w=Object.getOwnPropertyDescriptor,$=(e,t,a,i)=>{for(var s=i>1?void 0:i?w(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&k(t,a,s),s};let m=class extends u(""){get doid(){var e,t;return(t=(e=this.DOID)==null?void 0:e.doid)!=null?t:""}get tokenish(){var e,t;return(t=(e=this.DOID)==null?void 0:e.uri)==null?void 0:t.replace(this.doid,"")}render(){return this.tokenish?l`<dui-link link href="${`/artist/${this.doid}`}">${this.doid}</dui-link>${this.tokenish}`:l`${this.doid}`}};$([v()],m.prototype,"DOID",2);m=$([f("coll-marker")],m);const P=`.media{min-height:25rem}
`;var C=Object.defineProperty,N=Object.getOwnPropertyDescriptor,d=(e,t,a,i)=>{for(var s=i>1?void 0:i?N(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&C(t,a,s),s};let o=class extends u(P){constructor(){super(...arguments),this.pending=!1,this.metaPending=!1,this.err="",this.ts=0,this.getMeta=async()=>{if(!this.metaPending&&(this.metaPending=!0,this.item))try{this.meta=await _(this.item)}catch(e){}finally{this.metaPending=!1}}}get doid(){var e;return(e=this.DOID)==null?void 0:e.doid}get doidName(){var e;return(e=this.DOID)==null?void 0:e.name}get token(){var e;return(e=this.DOID)==null?void 0:e.token}get minter(){var e,t;return(t=(e=this.token)==null?void 0:e.minter)!=null?t:""}get tokenID(){var e,t;return(t=(e=this.token)==null?void 0:e.tokenID)!=null?t:""}get slugName(){var e,t;return(t=(e=this.token)==null?void 0:e.slugName)!=null?t:""}get address(){var e;return(e=this.item)==null?void 0:e.address}get empty(){return!this.pending&&!!this.ts&&!this.metaPending&&(!this.item||!this.sameURI)}get opensea(){const e=`${O("opensea")}/${this.address}/${this.tokenID}`;return{url:e,origin:new URL(e).origin}}get scan(){return`${b().scan}/address/${this.address}`}get sameURI(){var t,a,i;const{slugURI:e}=(t=this.item)!=null?t:{};return e&&((i=(a=this.DOID)==null?void 0:a.uri)==null?void 0:i.endsWith(e))}async getCollection(){if(!this.pending&&(this.slugName||this.tokenID||this.minter)){this.pending=!0,this.err="";try{this.item=await I(this),this.getMeta()}catch(e){this.err=e.message||e}this.ts++,this.pending=!1}}async connectedCallback(){super.connectedCallback(),this.getCollection()}render(){return l`<div class="comp-collection">${h(this.empty,()=>l`<p class="text-center">No data yet.</p>`,()=>l`${h(this.pending,()=>l`<loading-icon type="block"></loading-icon>`,()=>l`${h(!this.err,()=>{var e,t,a,i,s,n,r;return l`<div class="my-4 grid grid-cols-1 lg_grid-cols-5 gap-4 lg_gap-8"><div class="media lg_col-span-2 flex flex-col gap-2 items-center p-4 lg_px-6 bg-gray-100 rounded-md"><dui-media-player autoplay class="w-full h-full" .meta="${this.meta}"></dui-media-player><loading-skeleton class="flex flex-col items-center" .expect="${(e=this.meta)==null?void 0:e.name}" num="3"><div class="text-base mb-2">${(t=this.meta)==null?void 0:t.name}</div><div class="break-words break-all text-gray-500">${(a=this.meta)==null?void 0:a.description}</div></loading-skeleton></div><div class="py-2 lg_mt-0 lg_col-span-3"><div class="flex lg_flex-col gap-2 mb-2"><b>Created by:</b> <span class="text-gray-500">${this.doid}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Owned by:</b> <span class="text-gray-500">${h((s=(i=this.item)==null?void 0:i.doids)==null?void 0:s.length,()=>{var p,D,x;return l`${(x=(D=(p=this.item)==null?void 0:p.doids)==null?void 0:D.at(0))==null?void 0:x.name}`},()=>{var p;return l`<dui-address .address="${(p=this.item)==null?void 0:p.owner}"></dui-address>`})}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Marketplace:</b><dui-link open href="${this.opensea.url}">${this.opensea.origin}</dui-link></div><div class="mt-6 lg_mt-6"><div class="text-base mb-3"><b>Meta Info.</b></div><div class="flex flex-col gap-2"><div class="flex gap-2 items-center"><span>Contract:</span><dui-address href="${this.scan}" class="lg_text-sm text-blue-500" .address="${(n=this.item)==null?void 0:n.address}"></dui-address></div><div class="flex gap-2 text-xs lg_text-sm"><span>Token ID:</span> <span class="text-gray-500">${(r=this.item)==null?void 0:r.tokenID}</span></div><div class="flex gap-2 items-center text-xs lg_text-sm"><span>Chain:</span> <span><span class="text-gray-500">Ethereum</span><i class="mdi mdi-ethereum ml-1"></i></span></div></div></div></div></div>`})}`)}`)}</div>`}};d([v()],o.prototype,"DOID",2);d([c()],o.prototype,"cooked",2);d([c()],o.prototype,"item",2);d([c()],o.prototype,"pending",2);d([c()],o.prototype,"metaPending",2);d([c()],o.prototype,"err",2);d([c()],o.prototype,"ts",2);d([c()],o.prototype,"meta",2);o=d([f("doid-collection")],o);const j="";var M=Object.defineProperty,U=Object.getOwnPropertyDescriptor,y=(e,t,a,i)=>{for(var s=i>1?void 0:i?U(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&M(t,a,s),s};let g=class extends u(j){get tokenName(){var e,t;return(t=(e=this.DOID)==null?void 0:e.token)==null?void 0:t.name}connectedCallback(){super.connectedCallback()}render(){return l`<div class="view-collection"><div class="dui-container"><coll-marker .DOID="${this.DOID}" class="block mb-6"></coll-marker>${h(this.tokenName,()=>l`<doid-collection .DOID="${this.DOID}"></doid-collection>`,()=>l`<doid-collections .DOID="${this.DOID}"></doid-collections>`)}</div></div>`}};y([v()],g.prototype,"DOID",2);g=y([f("view-collection")],g);export{g as ViewCollection};
