if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-f671e4c0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Erc1155-e3b3e26f.js",revision:null},{url:"assets/Erc1155-legacy-af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:null},{url:"assets/Erc721-legacy-df326043.js",revision:null},{url:"assets/index-02b2b1be.js",revision:null},{url:"assets/index-1ca2111f.js",revision:null},{url:"assets/index-2aa52b4e.css",revision:null},{url:"assets/index-3aadb578.js",revision:null},{url:"assets/index-5b049b88.js",revision:null},{url:"assets/index-71416c3f.js",revision:null},{url:"assets/index-ab81cec6.js",revision:null},{url:"assets/index-b58b57bb.js",revision:null},{url:"assets/index-legacy-4eaba68b.js",revision:null},{url:"assets/index-legacy-6a8130fd.js",revision:null},{url:"assets/index-legacy-7ed54e9a.js",revision:null},{url:"assets/index-legacy-8d2a33ac.js",revision:null},{url:"assets/index-legacy-a6e8c661.js",revision:null},{url:"assets/index-legacy-ae9540b8.js",revision:null},{url:"assets/index-legacy-e8bd55ea.js",revision:null},{url:"assets/index.umd-178a620f.js",revision:null},{url:"assets/index.umd-legacy-466d7142.js",revision:null},{url:"assets/list-c7e362fc.js",revision:null},{url:"assets/list-legacy-026b7600.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:null},{url:"assets/Locker-legacy-af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:null},{url:"assets/Locker.codes-legacy-d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy-58f79974.js",revision:null},{url:"assets/Resolver-bbd82db3.js",revision:null},{url:"assets/Resolver-legacy-63193ddb.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:null},{url:"assets/Resolver.codes-legacy-77c566ca.js",revision:null},{url:"assets/vendor-c17b9770.js",revision:null},{url:"assets/vendor-legacy-8274d652.js",revision:null},{url:"index.html",revision:"d3f50f64d80125eb8f3975584e00885f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"bac32860718c5331438bb102ec9c76af"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
