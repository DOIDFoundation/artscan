System.register(["./index-legacy-0b0e4c4d.js","./vendor-legacy-8274d652.js","./list-legacy-19dda794.js"],(function(e,t){"use strict";var s,i,n,a,r,d,l,o,c,g;return{setters:[e=>{s=e.T,i=e.a},e=>{n=e.x,a=e.n,r=e.e,d=e.l,l=e.k},e=>{o=e.g,c=e.a,g=e.b}],execute:function(){var t=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(e,s,i,n)=>{for(var a,r=n>1?void 0:n?h(s,i):s,d=e.length-1;d>=0;d--)(a=e[d])&&(r=(n?a(s,i,r):a(r))||r);return n&&r&&t(s,i,r),r};let m=class extends(s("")){get doid(){return this.DOID?.doid??""}get tokenish(){return this.DOID?.uri?.replace(this.doid,"")}render(){return this.tokenish?n`<dui-link link href="${`/artist/${this.doid}`}">${this.doid}</dui-link>${this.tokenish}`:n`${this.doid}`}};p([a()],m.prototype,"DOID",2),m=p([r("coll-marker")],m);var u=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=(e,t,s,i)=>{for(var n,a=i>1?void 0:i?v(t,s):t,r=e.length-1;r>=0;r--)(n=e[r])&&(a=(i?n(t,s,a):n(a))||a);return i&&a&&u(t,s,a),a};let D=class extends(s(".media{min-height:25rem}\n")){constructor(){super(...arguments),this.pending=!1,this.metaPending=!1,this.err="",this.ts=0,this.getMeta=async()=>{if(!this.metaPending&&(this.metaPending=!0,this.item))try{this.meta=await o(this.item)}catch{}finally{this.metaPending=!1}}}get doid(){return this.DOID?.doid}get doidName(){return this.DOID?.name}get token(){return this.DOID?.token}get minter(){return this.token?.minter??""}get tokenID(){return this.token?.tokenID??""}get slugName(){return this.token?.slugName??""}get address(){return this.item?.address}get empty(){return!(this.pending||!this.ts||this.metaPending||this.item&&this.sameURI)}get opensea(){const e=`${c("opensea")}/${this.address}/${this.tokenID}`;return{url:e,origin:new URL(e).origin}}get scan(){return`${i().scan}/address/${this.address}`}get sameURI(){const{slugURI:e}=this.item??{};return e&&this.DOID?.uri?.endsWith(e)}async getCollection(){if(!this.pending&&(this.slugName||this.tokenID||this.minter)){this.pending=!0,this.err="";try{this.item=await g(this),this.getMeta()}catch(e){this.err=e.message||e}this.ts++,this.pending=!1}}async connectedCallback(){super.connectedCallback(),this.getCollection()}render(){return n`<div class="comp-collection">${d(this.empty,(()=>n`<p class="text-center">No data yet.</p>`),(()=>n`${d(this.pending,(()=>n`<loading-icon type="block"></loading-icon>`),(()=>n`${d(!this.err,(()=>n`<div class="my-4 grid grid-cols-1 lg_grid-cols-5 gap-4 lg_gap-8"><div class="media lg_col-span-2 flex flex-col gap-2 items-center p-4 lg_px-6 bg-gray-100 rounded-md"><dui-media-player autoplay class="w-full h-full" .meta="${this.meta}"></dui-media-player><loading-skeleton class="flex flex-col items-center" .expect="${this.meta?.name}" num="3"><div class="text-base mb-2">${this.meta?.name}</div><div class="break-words break-all text-gray-500">${this.meta?.description}</div></loading-skeleton></div><div class="py-2 lg_mt-0 lg_col-span-3"><div class="flex lg_flex-col gap-2 mb-2"><b>Created by:</b> <span class="text-gray-500">${this.doid}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Owned by:</b> <span class="text-gray-500">${d(this.item?.doids?.length,(()=>n`${this.item?.doids?.at(0)?.name}`),(()=>n`<dui-address .address="${this.item?.owner}"></dui-address>`))}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Marketplace:</b><dui-link open href="${this.opensea.url}">${this.opensea.origin}</dui-link></div><div class="mt-6 lg_mt-6"><div class="text-base mb-3"><b>Meta Info.</b></div><div class="flex flex-col gap-2"><div class="flex gap-2 items-center"><span>Contract:</span><dui-address href="${this.scan}" class="lg_text-sm text-blue-500" .address="${this.item?.address}"></dui-address></div><div class="flex gap-2 text-xs lg_text-sm"><span>Token ID:</span> <span class="text-gray-500">${this.item?.tokenID}</span></div><div class="flex gap-2 items-center text-xs lg_text-sm"><span>Chain:</span> <span><span class="text-gray-500">Ethereum</span><i class="mdi mdi-ethereum ml-1"></i></span></div></div></div></div></div>`))}`))}`))}</div>`}};y([a()],D.prototype,"DOID",2),y([l()],D.prototype,"cooked",2),y([l()],D.prototype,"item",2),y([l()],D.prototype,"pending",2),y([l()],D.prototype,"metaPending",2),y([l()],D.prototype,"err",2),y([l()],D.prototype,"ts",2),y([l()],D.prototype,"meta",2),D=y([r("doid-collection")],D);var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor,b=(e,t,s,i)=>{for(var n,a=i>1?void 0:i?k(t,s):t,r=e.length-1;r>=0;r--)(n=e[r])&&(a=(i?n(t,s,a):n(a))||a);return i&&a&&x(t,s,a),a};let f=e("ViewCollection",class extends(s("")){get tokenName(){return this.DOID?.token?.name}connectedCallback(){super.connectedCallback()}render(){return n`<div class="view-collection"><div class="dui-container"><coll-marker .DOID="${this.DOID}" class="block mb-6"></coll-marker>${d(this.tokenName,(()=>n`<doid-collection .DOID="${this.DOID}"></doid-collection>`),(()=>n`<doid-collections .DOID="${this.DOID}"></doid-collections>`))}</div></div>`}});b([a()],f.prototype,"DOID",2),e("ViewCollection",f=b([r("view-collection")],f))}}}));
