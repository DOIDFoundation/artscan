System.register(["./index-legacy-7ed54e9a.js","./list-legacy-026b7600.js","./vendor-legacy-8274d652.js"],(function(t,s){"use strict";var e,i,r,o,d,n,a,l,c;return{setters:[t=>{e=t.T,i=t.n},t=>{r=t.q},t=>{o=t.x,d=t.i,n=t.k,a=t.n,l=t.e,c=t.l}],execute:function(){var s=Object.defineProperty,g=Object.getOwnPropertyDescriptor,v=(t,e,i,r)=>{for(var o,d=r>1?void 0:r?g(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(d=(r?o(e,i,d):o(d))||d);return r&&d&&s(e,i,d),d};let p=class extends(e("")){constructor(){super(...arguments),this.getOwnerInfo=async()=>{this.info=await i(this.doid)},this.getHodlInfo=async()=>{this.hodls=await r(this.owner)}}get doid(){return this.DOID?.doid}get owner(){return this.info?.owner??""}async connectedCallback(){super.connectedCallback(),await this.getOwnerInfo(),await this.getHodlInfo()}render(){return o`${d(this.info,o`<div class="artist-info"><div class="text-base mb-2">${this.doid}</div><div class="flex gap-2"><div><dui-address .address="${this.info?.owner}" avatar short copy class="text-xs"></dui-address></div></div><div class="w-full flex gap-2 text-xs mt-3"><div>${this.hodls?.mintNum??"-"} <span class="text-gray-500">artworks</span>,</div><span>${this.hodls?.ownerNum??"-"} <span class="text-gray-500">owners</span></span></div></div>`)}`}};v([a()],p.prototype,"DOID",2),v([n()],p.prototype,"info",2),v([n()],p.prototype,"hodls",2),p=v([l("artist-info")],p);var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(t,s,e,i)=>{for(var r,o=i>1?void 0:i?f(s,e):s,d=t.length-1;d>=0;d--)(r=t[d])&&(o=(i?r(s,e,o):r(o))||o);return i&&o&&h(s,e,o),o};let w=t("ViewArtist",class extends(e("")){get doid(){return this.DOID?.doid}render(){return o`<div class="view-artist"><div class="dui-container">${c(this.doid,(()=>o`${d(this.doid,o`<div class="grid-cols-1 lg_grid-cols-6 grid gap-4 lg_gap-8"><div class="lg_col-span-4 order-2 lg_order-none"><doid-collections .DOID="${this.DOID}"></doid-collections></div><div class="lg_col-span-2 bg-gray-100 h-32 p-4 order-1 lg_order-none rounded-md lg_sticky top-4"><artist-info .DOID="${this.DOID}"></artist-info></div></div>`)}`))}</div></div>`}});u([a()],w.prototype,"DOID",2),t("ViewArtist",w=u([l("view-artist")],w))}}}));
