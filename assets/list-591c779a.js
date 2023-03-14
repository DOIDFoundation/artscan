import{w as fe,Z as ie,b as se,c as ve,d as $e,T as v,e as oe,i as we,N as be,f as V,u as L,h as xe,s as ae,j as R,k as A,l as X,m as _e,o as U,D as Oe,g as Te,n as Pe}from"./index-325b7616.js";import{y as n,m as l,e as $,j as Z,u as I,k as P,n as h,q as N,l as d,A as De,w as re,d as Se}from"./vendor-faffd0a4.js";const Ce=e=>{const{id:t,tokenURI:s}=e,[o,i]=t?t.toString().split("-"):[e.contract.id,e.tokenID];return{address:o,tokenID:i,ctime:e.createdAt*1e3,tokenURI:s}},je=e=>{const t=Ce(e),{owner:{id:s="",doids:o=[]}={}}=e;return Object.assign(t,{owner:s,doids:o.map(i=>({...i,name:fe(i.name)}))})},$t=async e=>{const t=e.toLowerCase();let s=0,o=0;if(e!=ie){const i=await se("scan",`{
        doids(where:{address:"${t}"}){address {id totalTokensMinted totalTokenHolders}}
      }`),{address:{totalTokenHolders:a,totalTokensMinted:r}}=i.doids[0]||{};s=a,o=r}return{ownerNum:s,mintNum:o}},ne=async(e,t={pageSize:5,page:1})=>{let{minter:s,doid:o,tokenID:i}=e;if(!s||s==ie)return[];s=s.toLowerCase();const{tokens:a=[]}=await se("scan",`{tokens(${ve(t)} where:{${$e({minter:s,tokenID:i})}} orderBy:createdAt orderDirection:desc){
        id tokenURI createdAt owner { id doids { name }
      }}}`)||{};return a.map(r=>Object.assign(je(r),{minter:s,doid:o}))},wt=async e=>(await ne(e))[0];var ke=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,le=(e,t,s,o)=>{for(var i=o>1?void 0:o?ze(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&ke(t,s,i),i};let E=class extends v(""){constructor(){super(...arguments),this.type="inline"}render(){switch(this.type){case"block":return n`<div class="block mx-auto my-8 text-center text-xl"><i class="mdi mdi-loading mx-1"></i></div>`;default:return n`<i class="mdi mdi-loading mr-1"></i> Loading...`}}};le([l({type:String})],E.prototype,"type",2);E=le([$("loading-icon")],E);const Q=(e,{persistent:t=!1,rootMargin:s="0px"}={})=>class extends e{constructor(){super(...arguments),this.onObserved=()=>{},this.unobserve=()=>{var o;return this.observe$&&((o=this.observer)==null?void 0:o.unobserve(this.observe$))},this.observe=()=>{this.observer||(this.observe$||(this.observe$=this.$(":first-child")))&&(this.observer=new IntersectionObserver(o=>{o[0].intersectionRatio<=0||(this.onObserved(),t||this.unobserve())},{rootMargin:s}),this.observer.observe(this.observe$))}}firstUpdated(){this.observe()}connectedCallback(){this.unobserve(),super.connectedCallback()}};var g=(e=>(e.audio="audio",e.image="image",e.threed="threed",e.video="video",e))(g||{});const F=[{ext:"gif",mediaType:"image",mimeType:"image/gif"},{ext:"jpg",mediaType:"image",mimeType:"image/jpeg"},{ext:"jpeg",mediaType:"image",mimeType:"image/jpeg"},{ext:"png",mediaType:"image",mimeType:"image/png"},{ext:"svg",mediaType:"image",mimeType:"image/svg+xml"},{ext:"webp",mediaType:"image",mimeType:"image/webp"}];F.map(e=>e.ext);F.map(e=>e.mimeType);const G=[{ext:"mp4",mediaType:"video",mimeType:"video/mp4"},{ext:"webm",mediaType:"video",mimeType:"video/webm"}];G.map(e=>e.ext);G.map(e=>e.mimeType);const J=[{ext:"gltf",mediaType:"threed",mimeType:"model/gltf-binary"},{ext:"glb",mediaType:"threed",mimeType:"model/gltf-binary"}];J.map(e=>e.ext);J.map(e=>e.mimeType);const K=[{ext:"mp3",mediaType:"audio",mimeType:"audio/mpeg"},{ext:"ogg",mediaType:"audio",mimeType:"audio/ogg"},{ext:"wav",mediaType:"audio",mimeType:"audio/wav"}];K.map(e=>e.ext);K.map(e=>e.mimeType);const pe=[...F,...G,...K,...J],Le=(e="")=>{const t=oe(e);return t?Ie(t,"ext"):de(we(e))},de=e=>{var t;return(t=pe.find(s=>s.mimeType===e))==null?void 0:t.mediaType},Ie=(e,t)=>{var s;return(s=pe.find(o=>o[t]===e))==null?void 0:s.mediaType},ce=async e=>{const{headers:t}=await fetch(e,{method:"HEAD"}),s=t.get("content-type");if(s)return de(s)},Me=async e=>{let t;return oe(e)&&(t=Le(e)),t||(t=await ce(e)),t},Be={url:{"0x1":"https://opensea.io/assets/ethereum","0xaa36a7":"https://testnets.opensea.io/assets/sepolia","0x5":"https://testnets.opensea.io/assets/goerli"},api:{"0x1":"https://api.opensea.io/api/v1/asset","0xaa36a7":"https://testnets-api.opensea.io/api/v1/asset","0x5":"https://testnets-api.opensea.io/api/v1/asset"}},Ue=e=>Be[e][be.chainId],q=async e=>{var O;const{background_color:t,owner:s="",external_link:o="",asset_contract:i,collection:a={}}=e,r=e.name||a.name,_=e.image_preview_url||e.image_thumbnail_url||e.image_url||e.image||e.image_original_url||a.image_url||"",c=e.animation_url||e.animation_original_url||a.large_image_url||_;let p=await ce(c);return{name:r,description:e.description||a.description,image:A(_),raw:A(c),creator:(O=e.creator)==null?void 0:O.address,owner:s,external_link:o,background_color:t,mediaType:p}},M={store:sessionStorage,withoutEnv:!0,ttl:864e5};let C=0;const H=async(e,t=1024)=>{let s={};if(C)return await ae(50),await H(e);C=X();try{s=await R.get(e),setTimeout(()=>{C=0},Math.max(X()-C,t))}catch(o){C=0}return s},he=async({address:e="",tokenID:t=""}={},s=!0)=>{let o;const i=await L(`meta.${e}.${t}`,M);if(o=await i.get(),!o)try{const a=`${Ue("api")}/${e}/${t}/`;o=await q(await H(a)),o.name&&o.image?i.set(o):o.image||(await H(`${a}?force_update=true`),s&&(await ae(1e4),o=await he({address:e,tokenID:t},!1)))}catch(a){}return o!=null?o:{}},Y=async(e="")=>{let t;if(!e)return{};V(e)&&(t=await q(await R.get(e)));const s=await L(`meta.${e}`,M);if(t||(t=await s.get()),!t)try{t=await q(await R.get(A(e))),t.name&&t.image&&s.set(t)}catch(o){}return t!=null?t:{}},Ne=async e=>{let t;const{tokenURI:s,address:o,tokenID:i}=e;return V(s)&&(t=await Y(s)),!t&&s&&(t=await(await L(`meta.${s}`,M)).get()),t||(t=await(await L(`meta.${o}.${i}`,M)).get()),!t&&o&&i&&(t=await he(e)),!t&&s&&(t=await Y(s)),t&&(e.meta=t,xe(e)),t!=null?t:{}},Re=async(e,{maxW:t=400}={})=>new Promise(s=>{if(!e)return s("");const o=sessionStorage.getItem(`blob.${e}`);if(o)return s(o);const i=new Image;i.src=e,i.crossOrigin="anonymous",i.onload=async()=>{let[c,p]=[i.width,i.height],[S,O,ge,ye]=[0,0,c,p];c>t&&(p=t*(p/c),c=t),p>t&&(c=t*(c/p),p=t),i.height/i.width,a.width=c,a.height=p,r.drawImage(i,S,O,ge,ye,0,0,c,p),_()};const a=document.createElement("canvas"),r=a.getContext("2d"),_=()=>{a.toBlob(c=>{const p=URL.createObjectURL(c);sessionStorage.setItem(`blob.${e}`,p),s(p)},"image/png",1)}}),Ae=`i{position:relative;display:inline-flex;height:100%;width:100%;align-items:center;justify-content:center;overflow:hidden}i.empty,i.err,i:not(.loaded){background:linear-gradient(-45deg,rgba(238,201,121) 8%,rgb(187,131,68) 36%,rgba(238,201,121) 66%) 0% 0% / 2400px;animation:silk 4s linear infinite}i.err img{visibility:hidden}i img{height:auto;max-height:100%;width:auto;max-width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;-o-object-fit:contain;object-fit:contain}@keyframes silk{0%{background-position:-2400px 0}to{background-position:2400px 0}}
`;var Ee=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,u=(e,t,s,o)=>{for(var i=o>1?void 0:o?qe(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Ee(t,s,i),i};const He=[48,64,128,256,384,512,640,750,828,1080,1200,1920,2048,3840];let m=class extends Q(v(Ae)){constructor(){super(...arguments),this.el$=Z(),this.loaded=!1,this.stop=!1,this.loading="eager",this.sizes=void 0,this.w="100%",this.firstLoaded=this.loaded,this.imgLoaded=this.loaded,this.err=!1,this.show=!1,this.blobSrc="",this.onLoad=()=>{this.emit("loaded",this.imgLoaded=this.firstLoaded=!0)},this.onError=()=>{this.err=!1},this.onObserved=()=>{var e,t;this.w=((t=(e=this.el$.value)==null?void 0:e.getBoundingClientRect().width)!=null?t:"400")+"",this.show=!0}}get lazy(){return this.loading==="lazy"}get isInstantSrc(){return V(this.src)}get isResizableSrc(){return this.src&&/\?(w|width)=/.test(this.src)}get requireComporess(){return!this.isResizableSrc&&!this.isInstantSrc&&!this.blobSrc}get uri(){if(!(this.err||!this.show))return this.requireComporess?this.blobSrc:this.src}get empty(){return!(this.src||this.blobSrc)||!(this.uri||this.uriset)}get uriset(){if(!this.src||this.err||!this.show||!this.isResizableSrc)return;const{origin:e,pathname:t}=new URL(this.src);return He.map(s=>`${[e+t]}?auto=format&w=${s}&width=${s} ${s}w`).join(",")}get autoSizes(){return this.sizes?this.sizes:`(max-width: 768px) ${this.w}px, ${this.w}px`}shouldUpdate(e){return e.has("src")&&this.requireComporess&&this.src&&Re(this.src).then(t=>this.blobSrc=t),!0}connectedCallback(){super.connectedCallback(),this.loading==="eager"&&this.onObserved()}render(){return n`<i ${I(this.el$)} class="${P({loaded:this.firstLoaded,err:this.err,empty:this.empty,stop:this.stop})}">${h(this.isResizableSrc?this.uriset:this.uri,()=>n`<img class="${P({invisible:!this.firstLoaded,"opacity-0":!this.firstLoaded})}" src="${N(this.uri)}" srcset="${N(this.uriset)}" sizes="${N(this.autoSizes)}" @load="${this.onLoad}" @error="${this.onError}">`)}</i>`}};u([l({type:String,attribute:!0})],m.prototype,"src",2);u([l({type:Boolean})],m.prototype,"loaded",2);u([l({type:Boolean})],m.prototype,"stop",2);u([l({type:String})],m.prototype,"loading",2);u([l({type:String})],m.prototype,"sizes",2);u([d()],m.prototype,"w",2);u([d()],m.prototype,"firstLoaded",2);u([d()],m.prototype,"imgLoaded",2);u([d()],m.prototype,"err",2);u([d()],m.prototype,"show",2);u([d()],m.prototype,"blobSrc",2);m=u([$("img-loader")],m);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=Symbol.for(""),Ve=e=>{if((e==null?void 0:e.r)===me)return e==null?void 0:e._$litStatic$},Ze=e=>({_$litStatic$:e,r:me}),W=new Map,Qe=e=>(t,...s)=>{const o=s.length;let i,a;const r=[],_=[];let c,p=0,S=!1;for(;p<o;){for(c=t[p];p<o&&(a=s[p],(i=Ve(a))!==void 0);)c+=i+t[++p],S=!0;_.push(a),r.push(c),p++}if(p===o&&r.push(t[o]),S){const O=r.join("$$lit$$");(t=W.get(O))===void 0&&(r.raw=r,W.set(O,t=r)),s=_}return e(t,...s)},Fe=Qe(n);var Ge=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,z=(e,t,s,o)=>{for(var i=o>1?void 0:o?Je(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Ge(t,s,i),i};const ue=(e,{tag:t="video"}={})=>{class s extends e{constructor(){super(...arguments),this.el$=Z(),this.autoplay=!1,this.playing=!1,this.tag=Ze(t),this.played=!1,this.oncontextmenu=i=>{i.preventDefault(),i.stopImmediatePropagation()},this.onplay=i=>{},this.play=async()=>{var i,a;await 0,this.played=!0,(a=(i=this.el$)==null?void 0:i.value)==null||a.play(),this.emit("play")},this.stop=()=>{var i,a;(a=(i=this.el$)==null?void 0:i.value)==null||a.pause(),this.emit("stop")},this._autoplay=()=>{this.played||!this.autoplay||(this.el$.value&&(this.el$.value.muted=!_e.interacted),this.play())}}render(){return Fe`<${this.tag}
        ${I(this.el$)}
        class="w-full h-full"
        src=${this.src}
        @error=${this.stop}
        @contextmenu=${this.oncontextmenu}
        ?autoplay=${this.autoplay}
        ?controls=${this.autoplay}
        ?poster=${this.poster}
        loop
        webkit-playsinline
        playsinline
        controlslist="nodownload"
        preload="metadata"
        disablepictureinpicture
        @canplay=${this._autoplay}
      ></${this.tag}>`}}return z([l({type:String})],s.prototype,"poster",2),z([l({type:String})],s.prototype,"src",2),z([l({type:Boolean})],s.prototype,"autoplay",2),z([d()],s.prototype,"playing",2),s};var Ke=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye=(e,t,s,o)=>{for(var i=o>1?void 0:o?Xe(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&Ke(t,s,i),i};let ee=class extends ue(v("")){};ee=Ye([$("dui-video")],ee);var We=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=(e,t,s,o)=>{for(var i=o>1?void 0:o?et(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&We(t,s,i),i};let te=class extends ue(v(""),{tag:"audio"}){};te=tt([$("dui-audio")],te);const it=`.play-btn{cursor:pointer;--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));background:rgba(159,159,159,.4);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.play-btn svg{height:100%;width:100%}.play-btn svg path{transform-origin:center;transition:all .35s cubic-bezier(.4,0,.2,1)}
`;var st=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,T=(e,t,s,o)=>{for(var i=o>1?void 0:o?ot(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&st(t,s,i),i};let x=class extends v(it){constructor(){super(...arguments),this.player$=Z(),this.class="",this.autoplay=!1,this.playing=!1,this.updateMediaType=async()=>{var e,t;!this.mediaType&&this.raw&&(this.mediaType=(t=(e=this.meta)==null?void 0:e.mediaType)!=null?t:await Me(this.raw))},this.play=async()=>{var e,t;U.emit("media-play",this.elId),this.playing=!0,await 0,(t=(e=this.player$)==null?void 0:e.value)==null||t.play()},this.stop=e=>{var t,s;e!=null&&e.detail&&(e==null?void 0:e.detail)===this.elId||(this.playing=!1,(s=(t=this.player$)==null?void 0:t.value)==null||s.stop())},this.toggle=async()=>{this[this.playing?"stop":"play"]()}}get poster(){var e;return((e=this.meta)==null?void 0:e.image)||this.src}get raw(){var e;return((e=this.meta)==null?void 0:e.raw)||this.src}get showPoster(){return!this.autoplay&&(this.mediaType!==g.video||!this.playing)||[g.image,g.audio].includes(this.mediaType)}get showPlayBtn(){return!this.autoplay&&[g.video,g.audio].includes(this.mediaType)}get showRawInPlace(){return(this.autoplay||this.playing)&&[g.video,g.audio,g.threed].includes(this.mediaType)}get zoomAble(){return[g.image].includes(this.mediaType)}shouldUpdate(e){return(e.has("meta")||e.has("src"))&&this.updateMediaType(),!0}connectedCallback(){super.connectedCallback(),this.updateMediaType(),U.on("media-play",this.stop)}disconnectedCallback(){super.disconnectedCallback(),U.off("media-play",this.stop)}render(){return n`<div class="media-player w-full h-full mx-auto relative select-none ${P(this.$c([this.class]))}">${h(this.showPoster,()=>n`<img-loader class="poster w-full h-full" src="${this.poster}" loading="lazy"></img-loader>`)} ${h(this.showRawInPlace,()=>n`${De(this.mediaType,[["audio",()=>n`<dui-audio ${I(this.player$)} src="${this.raw}" ?autoplay="${this.autoplay}"></dui-audio>`],["threed",()=>n``],["video",()=>n`<dui-video ${I(this.player$)} src="${this.raw}" ?autoplay="${this.autoplay}"></dui-video>`]])}`)}<div class="top-0 left-0 absolute w-full h-full ${P({"cursor-pointer":!this.showPlayBtn&&!1})}" @click="${this.toggle}">${h(this.showPlayBtn,()=>n`<div class="play-btn flex justify-center items-center w-8 h-8 right-2 bottom-2 absolute z-10 bg-black text-2xl rounded-full"><svg viewBox="0 0 36 36"><path fill="#fff" d="${this.playing?"M12,26 16,26 16,10 12,10zM21,26 25,26 25,10 21,10z":"M13.75,26 20.25,22 20.25,14 13.75,10zM20.25,22 25,18 25,18 20.25,14z"}"></path></svg></div>`)}</div>${h(this.zoomAble,()=>n``)}</div>`}};T([l({type:String})],x.prototype,"class",2);T([l({type:Object})],x.prototype,"meta",2);T([l({type:String})],x.prototype,"src",2);T([l({type:Boolean})],x.prototype,"autoplay",2);T([d()],x.prototype,"playing",2);T([d()],x.prototype,"mediaType",2);x=T([$("dui-media-player")],x);const at=`.skeleton{display:inline-flex;height:100%;width:100%;flex-direction:column;gap:1rem}.p{height:100%;width:6rem;overflow:hidden;border-radius:.375rem;height:1em;background:rgba(222,226,230)}.p:after{content:"";display:block;height:100%;width:100%;background:linear-gradient(90deg,rgba(255,255,255,0) 8%,rgba(255,255,255,.8) 36%,rgba(255,255,255,0) 66%) 0% 0% / 1200px;animation:skeleton 3s ease-in-out infinite}.p:nth-child(2){width:9rem}.p:nth-child(3){width:12rem}@keyframes skeleton{0%{background-position:-1200px 0}to{background-position:1200px 0}}
`;var rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,B=(e,t,s,o)=>{for(var i=o>1?void 0:o?nt(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&rt(t,s,i),i};let j=class extends v(at){constructor(){super(...arguments),this.expect=!1,this.num=1,this.class=""}get groups(){return new Array(this.num)}render(){return this.expect?n`<slot></slot>`:n`<div class="skeleton ${P(this.$c([this.class]))}">${re(this.groups,()=>n`<div class="p"></div>`)}</div>`}};B([l({type:Boolean})],j.prototype,"expect",2);B([l({type:Number})],j.prototype,"num",2);B([l({type:String})],j.prototype,"class",2);j=B([$("loading-skeleton")],j);const lt=`.item{min-height:11rem}
`;var pt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,k=(e,t,s,o)=>{for(var i=o>1?void 0:o?dt(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&pt(t,s,i),i};let D=class extends Q(v(lt)){constructor(){super(...arguments),this.item={},this.cook=async()=>{this.meta=await Ne(this.item),this.cooked=await Oe({DOIDName:this.doid,token:this.token})},this.onObserved=()=>{this.cook()},this.goto=()=>{this.cookedUri&&Te(`/collection/${this.cookedUri}`)}}get doid(){var e;return(e=this.DOID)==null?void 0:e.doid}get createTime(){return this.item.ctime?new Date(this.item.ctime).toLocaleString():""}get token(){var t;const{tokenID:e}=this.item;return{name:(t=this.meta)==null?void 0:t.name,tokenID:e}}get cookedName(){var e,t;return(t=(e=this.cooked)==null?void 0:e.parsed)==null?void 0:t.val}get cookedUri(){var e,t;return(t=(e=this.cooked)==null?void 0:e.parsed)==null?void 0:t.uri}get tokenName(){var e,t;return(t=(e=this.cooked)==null?void 0:e.parsed)==null?void 0:t.val}connectedCallback(){super.connectedCallback()}render(){var e,t,s,o,i;return n`<div class="item p-4"><div class="font-medium"><loading-skeleton .expect="${(e=this.meta)==null?void 0:e.name}"><dui-link class="uri" href="${`/collection/${this.cookedUri}`}">${this.cookedUri}</dui-link></loading-skeleton></div><div class="flex gap-4 py-4"><div class="shrink-0 w-24 h-24"><dui-media-player .meta="${this.meta}"></dui-media-player></div><div><loading-skeleton .expect="${(t=this.meta)==null?void 0:t.name}" num="3"><div class="mb-2 flex items-center"><dui-link class="text-base" href="${`/collection/${this.cookedUri}`}">${(s=this.meta)==null?void 0:s.name}<i class="mdi mdi-ethereum ml-1"></i></dui-link></div><p class="break-words break-all text-xs lg_text-sm text-gray-500">${(o=this.meta)==null?void 0:o.description}</p></loading-skeleton></div></div><div class="text-xs">Minted on ${this.createTime}, Owned by ${h((i=this.item.doids)==null?void 0:i.length,()=>{var a,r;return n`${(r=(a=this.item.doids)==null?void 0:a.at(0))==null?void 0:r.name}`},()=>n`<dui-address .address="${this.item.owner}"></dui-address>`)}</div></div>`}};k([l()],D.prototype,"DOID",2);k([l()],D.prototype,"item",2);k([d()],D.prototype,"cooked",2);k([d()],D.prototype,"meta",2);D=k([$("doid-coll-item")],D);const ct=`:host::part(inner){display:flex;height:2rem;width:100%;align-items:center;justify-content:center}@media (min-width: 1024px){:host::part(inner){height:2.5rem}}
`;var ht=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,w=(e,t,s,o)=>{for(var i=o>1?void 0:o?mt(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&ht(t,s,i),i};let y=class extends Q(v(ct),{persistent:!0,rootMargin:"30px"}){constructor(){super(...arguments),this.pageSize=5,this.page=1,this.mode="scroll",this.pending=!1,this.firstLoad=!0,this.empty=!1,this.nomore=!1,this.class="",this.onObserved=()=>{this.scrollMode&&this.loadmore()}}get canLoad(){return!this.pending&&!this.nomore&&!this.empty&&!this.firstLoad}get scrollMode(){return this.mode==="scroll"}loadmore(){if(!this.canLoad)return;const{pageSize:e,page:t,mode:s}=this;this.emit("loadmore",{pageSize:e,page:t,mode:s})}connectedCallback(){super.connectedCallback()}render(){return n`<div class="dui-pagination w-full flex justify-center items-center mt-4 ${P(this.$c([{nomore:this.nomore,"pointer-events-none":!this.canLoad},this.class]))}"><div part="inner" @click="${this.loadmore}">${h(this.empty,()=>n`<slot name="empty"></slot>`,()=>n`${h(this.nomore,()=>n`<slot name="nomore"></slot>`,()=>n`${h(this.pending,()=>n`<slot name="loading"><loading-icon type="block"></loading-icon></slot>`,()=>n`${h(!this.scrollMode&&!this.firstLoad,()=>n`<slot><dui-link>Load more</dui-link></slot>`)}`)}`)}`)}</div></div>`}};w([l({type:Number})],y.prototype,"pageSize",2);w([l({type:Number})],y.prototype,"page",2);w([l()],y.prototype,"mode",2);w([l()],y.prototype,"pending",2);w([l({type:Boolean})],y.prototype,"firstLoad",2);w([l({type:Boolean})],y.prototype,"empty",2);w([l({type:Boolean})],y.prototype,"nomore",2);w([l()],y.prototype,"class",2);y=w([$("dui-pagination")],y);const ut="";var gt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,b=(e,t,s,o)=>{for(var i=o>1?void 0:o?yt(t,s):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(i=(o?r(t,s,i):r(i))||i);return o&&i&&gt(t,s,i),i};let f=class extends v(ut){constructor(){super(...arguments),this.pending=!1,this.err="",this.ts=0,this.collections=[],this.nomore=!1,this.page=1,this.pageSize=5,this.loadmore=()=>{this.page++,this.getCollections()}}get doid(){var e;return(e=this.DOID)==null?void 0:e.doid}get empty(){return!this.err&&!!this.doid&&!!this.ts&&!this.collections.length}get pagination(){return{page:this.page,pageSize:this.pageSize}}async getCollections(){if(this.pending)return;const{owner:e=""}=await Pe(this.doid);if(e){this.pending=!0,this.err="";try{const t=await ne({minter:e,doid:this.doid},this.pagination);this.collections.push(...t),this.nomore=t.length<this.pageSize}catch(t){this.err=t.message||t}finally{this.ts++,this.pending=!1}}}connectedCallback(){super.connectedCallback(),this.getCollections()}render(){return n`<div class="doid-collections">${h(this.err,()=>n`${this.err}`)} ${h(this.collections.length,()=>n`<div class="grid gap-4">${re(this.collections,e=>n`${Se(e,n`<div class="bg-gray-100 break-words break-all rounded-md"><doid-coll-item .DOID="${this.DOID}" .item="${e}"></doid-coll-item></div>`)}`)}</div>`)} ${h(!this.err,()=>n`<dui-pagination .pending="${this.pending}" .nomore="${this.nomore}" .firstLoad="${!this.ts}" .empty="${this.empty}" .pageSize="${this.pageSize}" .page="${this.page}" @loadmore="${this.loadmore}"><span slot="empty">No collection yet.</span></dui-pagination>`)}</div>`}};b([l()],f.prototype,"DOID",2);b([d()],f.prototype,"pending",2);b([d()],f.prototype,"err",2);b([d()],f.prototype,"ts",2);b([d()],f.prototype,"collections",2);b([d()],f.prototype,"nomore",2);b([d()],f.prototype,"page",2);b([d()],f.prototype,"pageSize",2);f=b([$("doid-collections")],f);export{Ue as a,wt as b,Ne as g,$t as q};
