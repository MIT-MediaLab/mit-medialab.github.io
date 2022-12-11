(function(e){function t(t){for(var r,i,s=t[0],d=t[1],l=t[2],h=0,u=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);c&&c(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var d=n[s];0!==a[d]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"188d":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Home")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"three-container",staticClass:"three-container",on:{dragover:e.dragover,drop:e.drop}},[n("div",{staticClass:"three-overlay"},[null!=e.error?n("div",{staticClass:"mb-3",staticStyle:{color:"red"}},[e._v(" An error occured when loading the USDZ file. Maybe this file is not supported or the loader is not supported on this device. ")]):e._e(),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",staticClass:"w-px h-px opacity-0 overflow-hidden absolute",attrs:{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",accept:".usdz"},on:{change:e.onChange}})]),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Information about the player ")]),n("v-card-text",{staticClass:"mt-2"},[e._v(" This player is based on the "),n("a",{attrs:{href:"https://www.npmjs.com/package/three-usdz-loader"}},[e._v("three-usdz-loader")]),e._v(" package"),n("br"),e._v(" Contact: contact@usdz-viewer.net ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)},s=[],d=n("9ab4"),l=n("1b40"),c=n("5a89"),h=n("4721"),u=n("2132"),p=n("8769");let f=class extends l["c"]{constructor(){super(...arguments),this.modelIsVisible=!1,this.modelIsLoading=!1,this.dialog=!1,this.loadedModels=[],this.error=null,this.loaderReady=null}async mounted(){this.camera=new c["p"](27,window.innerWidth/window.innerHeight,1,3500),this.camera.position.z=7,this.camera.position.y=7,this.camera.position.x=0,this.scene=new c["r"],this.scene.background=new c["d"](16777215);const e=new c["a"](1118481);e.intensity=1,this.scene.add(e),this.renderer=new c["x"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=c["c"],this.renderer.toneMappingExposure=2,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=c["u"],await new Promise(e=>{const t=new c["o"](this.renderer);t.compileCubemapShader(),(new u["a"]).load("studio_country_hall_1k.hdr",n=>{const r=t.fromEquirectangular(n);n.mapping=c["g"],n.needsUpdate=!0,window.envMap=r.texture,e(!0)})}),this.threeContainer.appendChild(this.renderer.domElement),this.controls=new h["a"](this.camera,this.renderer.domElement),this.controls.update(),this.animate(),this.loader=new p["USDZLoader"]("/wasm"),this.loadUsdz(),window.addEventListener("resize",this.onWindowResize)}async animate(){const e=(new Date).getTime()/1e3;await new Promise(e=>setTimeout(e,10));for(const t of this.loadedModels)t.update(e);this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(null))}async loadFile(e){if(this.modelIsLoading)return;this.modelIsLoading=!0,this.error=null;for(const a of this.loadedModels)a.clear();this.loadedModels=[];const t=new c["j"];this.scene.add(t);try{const n=await this.loader.loadFile(e,t);this.loadedModels.push(n)}catch(r){return this.error=r,console.error("An error occured when trying to load the model"+r),void(this.modelIsLoading=!1)}const n=this.loadedModels.map(e=>e.getGroup());this.fitCamera(this.camera,this.controls,n),this.modelIsLoading=!1,this.modelIsVisible=!0}fitCamera(e,t,n,r=1.5){const a=e,o=new c["w"],i=new c["w"],s=new c["b"];s.makeEmpty();for(const c of n)s.expandByObject(c);s.getSize(o),s.getCenter(i);const d=Math.max(o.x,o.y,o.z),l=d/(2*Math.atan(Math.PI*a.fov/360)),h=l/a.aspect,u=r*Math.max(l,h),p=t.target.clone().sub(a.position).normalize().multiplyScalar(u);t.maxDistance=10*u,t.target.copy(i),a.near=u/100,a.far=100*u,a.updateProjectionMatrix(),e.position.copy(t.target).sub(p),t.update()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onChange(){console.log("aa"),this.loadUsdz()}onClickDragZone(){this.fileInput.click()}dragover(e){e.preventDefault()}drop(e){e.preventDefault(),null!=e.dataTransfer?this.handleFilesUpload(e.dataTransfer.files):console.error("Files are null")}async loadUsdz(){await fetch("https://s3.amazonaws.com/trackbot-public/room.usdz").then(e=>e.body).then(e=>{if(null!=e){const t=e.getReader();return new ReadableStream({start(e){return n();function n(){return t.read().then(({done:t,value:r})=>{if(!t)return e.enqueue(r),n();e.close()})}}})}}).then(e=>new Response(e)).then(e=>e.blob()).then(e=>new File([e],"usdz_file.usdz")).then(e=>this.loadFile(e)).catch(e=>console.error(e))}async handleFilesUpload(e){await this.loadUsdz(),this.loadFile(e[0])}};Object(d["a"])([Object(l["b"])("three-container")],f.prototype,"threeContainer",void 0),Object(d["a"])([Object(l["b"])("file")],f.prototype,"fileInput",void 0),f=Object(d["a"])([l["a"]],f);var w=f,m=w,v=(n("cddc"),n("2877")),b=n("6544"),g=n.n(b),y=n("8336"),x=n("b0af"),M=n("99d9"),_=n("169a"),j=n("ce7e"),z=n("2fa4"),C=Object(v["a"])(m,i,s,!1,null,null,null),O=C.exports;g()(C,{VBtn:y["a"],VCard:x["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VDialog:_["a"],VDivider:j["a"],VSpacer:z["a"]});var S=r["a"].extend({name:"App",components:{Home:O}}),P=S,k=n("7496"),V=n("f6c4"),I=Object(v["a"])(P,a,o,!1,null,null,null),F=I.exports;g()(I,{VApp:k["a"],VMain:V["a"]});var T=n("f309");r["a"].use(T["a"]);var D=new T["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:D,render:e=>e(F)}).$mount("#app")},cddc:function(e,t,n){"use strict";n("188d")}});
//# sourceMappingURL=app.1f5711a0.js.map