var n=function(i,t,r=!1){if(!t)if(r){if(i!=null)throw new TypeError("Value is not a null value")}else throw new TypeError("Type is not defined");if(i?.constructor){if(i.constructor!=t)throw new TypeError(`Value is not type ${t.name}`)}else if(!r)throw new TypeError("Value is not nullable")};var c=function(i,t=1,r,e=1,o){n(i,Uint8Array),n(r,Uint8Array),n(t,Number),n(e,Number);for(let s=0,h=0;s<i.length;s+=t,h+=e)o(i.subarray(s,s+t),r.subarray(h,h+e))};var l=[{id:"korg87",win:[7,8],block:[function(i,t){let r=0;i.forEach(function(e,o){t[o+1]=e&127,r|=e>>7<<o}),t[0]=r},function(i,t){let r=i[0];i.subarray(1).forEach((e,o)=>{t[o]=e|(r>>o&1)<<7})}]}],a=l;var y=class{#t;#i;#r;#e;options={};get name(){return this.#i}get template(){return this.#t}encodeLength(t,r){return n(t,Number),this.#t?.len?this.#t?.len[0](t,r):Math.ceil(t*this.#e/this.#r)}decodeLength(t,r){return n(t,Number),this.#t?.len?this.#t?.len[1](t,r):Math.floor(t*this.#r/this.#e)}encodeBytes(t,r){if(n(t,Uint8Array),n(r,Uint8Array),r.length<this.encodeLength(t.length,t))throw new Error("Target isn't sufficient for encoding");let e=this,o=JSON.parse(JSON.stringify(this.#t.init&&this.#t.init[0]||"null"));c(t,this.#r,r,this.#e,function(s,h){e.#t?.block[0]?.call(e,s,h,o)})}decodeBytes(t,r){if(n(t,Uint8Array),n(r,Uint8Array),r.length<this.decodeLength(t.length,t))throw new Error("Target isn't sufficient for decoding");let e=this,o=JSON.parse(JSON.stringify(this.#t.init&&this.#t.init[1]||"null"));c(t,this.#e,r,this.#r,function(s,h){e.#t?.block[1]?.call(e,s,h,o)})}constructor(t,r){if(!t?.id)throw new Error("Invalid algorithm ID");if(t?.block.length!=2)throw new Error("Invalid codec");this.#i=t.name,this.#t=t,this.#r=t.win[0],this.#e=t.win[1],this.options=r||this.options}},f=class{#t={};setAlgo(t){if(!t?.id)throw new Error("Invalid algorithm ID");this.#t[t.id]=t}delAlgo(t){this.#t[t]&&delete this.#t[t]}use(t,r){return new y(this.#t[t],r)}constructor(t){n(t,Array,!0);let r=this;t?.forEach(function(e){r.setAlgo(e)})}},U=new f(a);export{f as Bread,U as Loaf};
