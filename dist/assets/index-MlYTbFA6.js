var M0=Object.defineProperty;var S0=(t,e,n)=>e in t?M0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ye=(t,e,n)=>(S0(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="160",y0=0,Au=1,E0=2,Jf=1,T0=2,bi=3,Qi=0,fn=1,li=2,qi=0,cs=1,Ru=2,Cu=3,Lu=4,b0=5,vr=100,w0=101,A0=102,Pu=103,Uu=104,R0=200,C0=201,L0=202,P0=203,Ml=204,Sl=205,U0=206,D0=207,I0=208,N0=209,F0=210,O0=211,B0=212,k0=213,z0=214,G0=0,V0=1,H0=2,Io=3,W0=4,X0=5,q0=6,j0=7,Qf=0,Y0=1,$0=2,ji=0,K0=1,Z0=2,J0=3,Q0=4,e_=5,t_=6,ep=300,_s=301,vs=302,yl=303,El=304,nc=306,Tl=1e3,Xn=1001,bl=1002,rn=1003,Du=1004,Uc=1005,un=1006,n_=1007,da=1008,Yi=1009,i_=1010,r_=1011,lh=1012,tp=1013,Wi=1014,Xi=1015,fa=1016,np=1017,ip=1018,Tr=1020,s_=1021,qn=1023,a_=1024,o_=1025,br=1026,xs=1027,c_=1028,rp=1029,l_=1030,sp=1031,ap=1033,Dc=33776,Ic=33777,Nc=33778,Fc=33779,Iu=35840,Nu=35841,Fu=35842,Ou=35843,op=36196,Bu=37492,ku=37496,zu=37808,Gu=37809,Vu=37810,Hu=37811,Wu=37812,Xu=37813,qu=37814,ju=37815,Yu=37816,$u=37817,Ku=37818,Zu=37819,Ju=37820,Qu=37821,Oc=36492,ed=36494,td=36495,h_=36283,nd=36284,id=36285,rd=36286,cp=3e3,wr=3001,u_=3200,d_=3201,lp=0,f_=1,Dn="",qt="srgb",Di="srgb-linear",hh="display-p3",ic="display-p3-linear",No="linear",dt="srgb",Fo="rec709",Oo="p3",Fr=7680,sd=519,p_=512,m_=513,g_=514,hp=515,__=516,v_=517,x_=518,M_=519,ad=35044,od="300 es",wl=1035,Ci=2e3,Bo=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Al=180/Math.PI;function Aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function S_(t,e){return(t%e+e)%e}function kc(t,e,n){return(1-n)*t+n*e}function cd(t){return(t&t-1)===0&&t!==0}function Rl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],b=r[1],M=r[4],w=r[7],D=r[2],C=r[5],A=r[8];return s[0]=a*_+o*b+c*D,s[3]=a*p+o*M+c*C,s[6]=a*u+o*w+c*A,s[1]=l*_+h*b+d*D,s[4]=l*p+h*M+d*C,s[7]=l*u+h*w+d*A,s[2]=f*_+m*b+g*D,s[5]=f*p+m*M+g*C,s[8]=f*u+m*w+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,m=l*s-a*c,g=n*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(h*n-r*c)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*c-l*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ze;function up(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ko(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function y_(){const t=ko("canvas");return t.style.display="block",t}const ld={};function ea(t){t in ld||(ld[t]=!0,console.warn(t))}const hd=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ud=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Di]:{transfer:No,primaries:Fo,toReference:t=>t,fromReference:t=>t},[qt]:{transfer:dt,primaries:Fo,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ic]:{transfer:No,primaries:Oo,toReference:t=>t.applyMatrix3(ud),fromReference:t=>t.applyMatrix3(hd)},[hh]:{transfer:dt,primaries:Oo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ud),fromReference:t=>t.applyMatrix3(hd).convertLinearToSRGB()}},E_=new Set([Di,ic]),ot={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!E_.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Va[e].toReference,r=Va[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Va[t].primaries},getTransfer:function(t){return t===Dn?No:Va[t].transfer}};function ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class dp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=ko("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ko("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ls(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ls(n[i]/255)*255):n[i]=ls(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T_=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b_=0;class pn extends Us{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Xn,r=Xn,s=un,a=da,o=qn,c=Yi,l=pn.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Aa(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wr?qt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?wr:cp}set encoding(e){ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?qt:Dn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ep;pn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(l+1)/2,w=(m+1)/2,D=(u+1)/2,C=(h+f)/4,A=(d+_)/4,Z=(g+p)/4;return M>w&&M>D?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=A/i):w>D?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=Z/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=Z/s),this.set(i,r,s,n),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?qt:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new fp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends w_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class pp extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A_ extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-o;const u=c*f+l*m+h*g+d*_,b=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const D=Math.sqrt(M),C=Math.atan2(D,u*b);p=Math.sin(p*C)/D,o=Math.sin(o*C)/D}const w=o*b;if(c=c*p+f*w,l=l*p+m*w,h=h*p+g*w,d=d*p+_*w,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+h*d+c*m-l*f,e[n+1]=c*g+h*f+l*d-o*m,e[n+2]=l*g+h*m+o*f-c*d,e[n+3]=h*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-n)*h)/l,f=Math.sin(n*h)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new U,dd=new Ra;class Ca{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Wa.subVectors(this.max,Hs),Br.subVectors(e.a,Hs),kr.subVectors(e.b,Hs),zr.subVectors(e.c,Hs),Fi.subVectors(kr,Br),Oi.subVectors(zr,kr),cr.subVectors(Br,zr);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-cr.z,cr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,cr.z,0,-cr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-cr.y,cr.x,0];return!Wc(n,Br,kr,zr,Wa)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Br,kr,zr,Wa))?!1:(Xa.crossVectors(Fi,Oi),n=[Xa.x,Xa.y,Xa.z],Wc(n,Br,kr,zr,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new U,new U,new U,new U,new U,new U,new U,new U],Gn=new U,Ha=new Ca,Br=new U,kr=new U,zr=new U,Fi=new U,Oi=new U,cr=new U,Hs=new U,Wa=new U,Xa=new U,lr=new U;function Wc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=e.dot(lr),l=n.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const R_=new Ca,Ws=new U,Xc=new U;class rc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):R_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Xc)),this.expandByPoint(Ws.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new U,qc=new U,qa=new U,Bi=new U,jc=new U,ja=new U,Yc=new U;class mp{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(qa),o=Bi.dot(this.direction),c=-Bi.dot(qa),l=Bi.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qc).addScaledVector(qa,f),m}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){jc.subVectors(n,e),ja.subVectors(i,e),Yc.crossVectors(jc,ja);let a=this.direction.dot(Yc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const c=o*this.direction.dot(ja.crossVectors(Bi,ja));if(c<0)return null;const l=o*this.direction.dot(jc.cross(Bi));if(l<0||c+l>a)return null;const h=-o*Bi.dot(Yc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,r,s,a,o,c,l,h,d,f,m,g,_,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,h,d,f,m,g,_,p)}set(e,n,i,r,s,a,o,c,l,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;n[0]=c*h,n[4]=-c*d,n[8]=l,n[1]=m+g*l,n[5]=f-_*l,n[9]=-o*c,n[2]=_-f*l,n[6]=g+m*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,g=l*h,_=l*d;n[0]=f+_*o,n[4]=g*o-m,n[8]=a*l,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=_+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,g=l*h,_=l*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=_-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;n[0]=c*h,n[4]=g*l-m,n[8]=f*l+_,n[1]=c*d,n[5]=_*l+f,n[9]=m*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;n[0]=c*h,n[4]=_-f*d,n[8]=g*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=m*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;n[0]=c*h,n[4]=-d,n[8]=l*h,n[1]=f*d+_,n[5]=a*h,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,L_)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(i,xn),ki.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(i,xn)),ki.normalize(),Ya.crossVectors(xn,ki),r[0]=ki.x,r[4]=Ya.x,r[8]=xn.x,r[1]=ki.y,r[5]=Ya.y,r[9]=xn.y,r[2]=ki.z,r[6]=Ya.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],b=i[3],M=i[7],w=i[11],D=i[15],C=r[0],A=r[4],Z=r[8],y=r[12],T=r[1],V=r[5],q=r[9],ne=r[13],L=r[2],N=r[6],G=r[10],Y=r[14],W=r[3],$=r[7],j=r[11],H=r[15];return s[0]=a*C+o*T+c*L+l*W,s[4]=a*A+o*V+c*N+l*$,s[8]=a*Z+o*q+c*G+l*j,s[12]=a*y+o*ne+c*Y+l*H,s[1]=h*C+d*T+f*L+m*W,s[5]=h*A+d*V+f*N+m*$,s[9]=h*Z+d*q+f*G+m*j,s[13]=h*y+d*ne+f*Y+m*H,s[2]=g*C+_*T+p*L+u*W,s[6]=g*A+_*V+p*N+u*$,s[10]=g*Z+_*q+p*G+u*j,s[14]=g*y+_*ne+p*Y+u*H,s[3]=b*C+M*T+w*L+D*W,s[7]=b*A+M*V+w*N+D*$,s[11]=b*Z+M*q+w*G+D*j,s[15]=b*y+M*ne+w*Y+D*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*m-i*c*m)+_*(+n*c*m-n*l*f+s*a*f-r*a*m+r*l*h-s*c*h)+p*(+n*l*d-n*o*m-s*a*d+i*a*m+s*o*h-i*l*h)+u*(-r*o*h-n*c*d+n*o*f+r*a*d-i*a*f+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],b=d*p*l-_*f*l+_*c*m-o*p*m-d*c*u+o*f*u,M=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,w=h*_*l-g*d*l+g*o*m-a*_*m-h*o*u+a*d*u,D=g*d*c-h*_*c-g*o*f+a*_*f+h*o*p-a*d*p,C=n*b+i*M+r*w+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*u-i*f*u)*A,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*u+i*c*u)*A,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*m-i*c*m)*A,e[4]=M*A,e[5]=(h*p*s-g*f*s+g*r*m-n*p*m-h*r*u+n*f*u)*A,e[6]=(g*c*s-a*p*s-g*r*l+n*p*l+a*r*u-n*c*u)*A,e[7]=(a*f*s-h*c*s+h*r*l-n*f*l-a*r*m+n*c*m)*A,e[8]=w*A,e[9]=(g*d*s-h*_*s-g*i*m+n*_*m+h*i*u-n*d*u)*A,e[10]=(a*_*s-g*o*s+g*i*l-n*_*l-a*i*u+n*o*u)*A,e[11]=(h*o*s-a*d*s-h*i*l+n*d*l+a*i*m-n*o*m)*A,e[12]=D*A,e[13]=(h*_*r-g*d*r+g*i*f-n*_*f-h*i*p+n*d*p)*A,e[14]=(g*o*r-a*_*r-g*i*c+n*_*c+a*i*p-n*o*p)*A,e[15]=(a*d*r-h*o*r+h*i*c-n*d*c-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,h=a+a,d=o+o,f=s*l,m=s*h,g=s*d,_=a*h,p=a*d,u=o*d,b=c*l,M=c*h,w=c*d,D=i.x,C=i.y,A=i.z;return r[0]=(1-(_+u))*D,r[1]=(m+w)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(f+u))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(g+M)*A,r[9]=(p-b)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const a=Gr.set(r[4],r[5],r[6]).length(),o=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const l=1/s,h=1/a,d=1/o;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ci){const c=this.elements,l=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let m,g;if(o===Ci)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Bo)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ci){const c=this.elements,l=1/(n-e),h=1/(i-r),d=1/(a-s),f=(n+e)*l,m=(i+r)*h;let g,_;if(o===Ci)g=(a+s)*d,_=-2*d;else if(o===Bo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new U,Vn=new It,C_=new U(0,0,0),L_=new U(1,1,1),ki=new U,Ya=new U,xn=new U,fd=new It,pd=new Ra;class La{constructor(e=0,n=0,i=0,r=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const md=new U,Vr=new Ra,Si=new It,$a=new U,Xs=new U,U_=new U,D_=new Ra,gd=new U(1,0,0),_d=new U(0,1,0),vd=new U(0,0,1),I_={type:"added"},N_={type:"removed"};class Kt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new U,n=new La,i=new Ra,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Ze}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(vd,e)}translateOnAxis(e,n){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Xs,$a,this.up):Si.lookAt($a,Xs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(Si),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(N_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new U,yi=new U,$c=new U,Ei=new U,Hr=new U,Wr=new U,xd=new U,Kc=new U,Zc=new U,Jc=new U;let Ka=!1;class Wn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),yi.subVectors(i,n),$c.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(yi),c=Hn.dot($c),l=yi.dot(yi),h=yi.dot($c),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,n,i,r,s,a,o,c){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,n,i,r,s,a,o,c)}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(o,Ei.z),c)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),yi.subVectors(e,n),Hn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Hn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Wr.subVectors(s,i),Kc.subVectors(e,i);const c=Hr.dot(Kc),l=Wr.dot(Kc);if(c<=0&&l<=0)return n.copy(i);Zc.subVectors(e,r);const h=Hr.dot(Zc),d=Wr.dot(Zc);if(h>=0&&d<=h)return n.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Hr,a);Jc.subVectors(e,s);const m=Hr.dot(Jc),g=Wr.dot(Jc);if(g>=0&&m<=g)return n.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Wr,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return xd.subVectors(s,r),o=(d-h)/(d-h+(m-g)),n.copy(r).addScaledVector(xd,o);const u=1/(p+_+f);return a=_*u,o=f*u,n.copy(i).addScaledVector(Hr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=S_(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Qc(a,s,e+1/3),this.g=Qc(a,s,e),this.b=Qc(a,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qt){const i=_p[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ot.fromWorkingColorSpace(Qt.copy(this),e),Math.round(dn(Qt.r*255,0,255))*65536+Math.round(dn(Qt.g*255,0,255))*256+Math.round(dn(Qt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=qt){ot.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==qt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Za);const i=kc(zi.h,Za.h,n),r=kc(zi.s,Za.s,n),s=kc(zi.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Qe;Qe.NAMES=_p;let F_=0;class Ds extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=cs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uh extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new U,Ja=new it;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ad,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ad&&(e.usage=this.usage),e}}class vp extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xp extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $n extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let O_=0;const An=new It,el=new Kt,Xr=new U,Mn=new Ca,qs=new Ca,Ht=new U;class mi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?xp:vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Mn.min,qs.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,qs.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(qs.min),Mn.expandByPoint(qs.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(Xr.fromBufferAttribute(e,l),Ht.add(Xr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<o;T++)l[T]=new U,h[T]=new U;const d=new U,f=new U,m=new U,g=new it,_=new it,p=new it,u=new U,b=new U;function M(T,V,q){d.fromArray(r,T*3),f.fromArray(r,V*3),m.fromArray(r,q*3),g.fromArray(a,T*2),_.fromArray(a,V*2),p.fromArray(a,q*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const ne=1/(_.x*p.y-p.x*_.y);isFinite(ne)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ne),b.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ne),l[T].add(u),l[V].add(u),l[q].add(u),h[T].add(b),h[V].add(b),h[q].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let T=0,V=w.length;T<V;++T){const q=w[T],ne=q.start,L=q.count;for(let N=ne,G=ne+L;N<G;N+=3)M(i[N+0],i[N+1],i[N+2])}const D=new U,C=new U,A=new U,Z=new U;function y(T){A.fromArray(s,T*3),Z.copy(A);const V=l[T];D.copy(V),D.sub(A.multiplyScalar(A.dot(V))).normalize(),C.crossVectors(Z,V);const ne=C.dot(h[T])<0?-1:1;c[T*4]=D.x,c[T*4+1]=D.y,c[T*4+2]=D.z,c[T*4+3]=ne}for(let T=0,V=w.length;T<V;++T){const q=w[T],ne=q.start,L=q.count;for(let N=ne,G=ne+L;N<G;N+=3)y(i[N+0]),y(i[N+1]),y(i[N+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Yn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(n))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new It,hr=new mp,Qa=new rc,Sd=new U,qr=new U,jr=new U,Yr=new U,tl=new U,eo=new U,to=new it,no=new it,io=new it,yd=new U,Ed=new U,Td=new U,ro=new U,so=new U;class jn extends Kt{constructor(e=new mi,n=new uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){eo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(tl.fromBufferAttribute(d,e),a?eo.addScaledVector(tl,h):eo.addScaledVector(tl.sub(n),h))}n.add(eo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Qa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Qa,Sd)===null||hr.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(Md.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,D=M;w<D;w+=3){const C=o.getX(w),A=o.getX(w+1),Z=o.getX(w+2);r=ao(this,u,e,i,l,h,d,C,A,Z),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=o.getX(p),M=o.getX(p+1),w=o.getX(p+2);r=ao(this,a,e,i,l,h,d,b,M,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,D=M;w<D;w+=3){const C=w,A=w+1,Z=w+2;r=ao(this,u,e,i,l,h,d,C,A,Z),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=p,M=p+1,w=p+2;r=ao(this,a,e,i,l,h,d,b,M,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function B_(t,e,n,i,r,s,a,o){let c;if(e.side===fn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Qi,o),c===null)return null;so.copy(o),so.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(so);return l<n.near||l>n.far?null:{distance:l,point:so.clone(),object:t}}function ao(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,qr),t.getVertexPosition(c,jr),t.getVertexPosition(l,Yr);const h=B_(t,e,n,i,qr,jr,Yr,ro);if(h){r&&(to.fromBufferAttribute(r,o),no.fromBufferAttribute(r,c),io.fromBufferAttribute(r,l),h.uv=Wn.getInterpolation(ro,qr,jr,Yr,to,no,io,new it)),s&&(to.fromBufferAttribute(s,o),no.fromBufferAttribute(s,c),io.fromBufferAttribute(s,l),h.uv1=Wn.getInterpolation(ro,qr,jr,Yr,to,no,io,new it),h.uv2=h.uv1),a&&(yd.fromBufferAttribute(a,o),Ed.fromBufferAttribute(a,c),Td.fromBufferAttribute(a,l),h.normal=Wn.getInterpolation(ro,qr,jr,Yr,yd,Ed,Td,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};Wn.getNormal(qr,jr,Yr,d.normal),h.face=d}return h}class Dr extends mi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $n(l,3)),this.setAttribute("normal",new $n(h,3)),this.setAttribute("uv",new $n(d,2));function g(_,p,u,b,M,w,D,C,A,Z,y){const T=w/A,V=D/Z,q=w/2,ne=D/2,L=C/2,N=A+1,G=Z+1;let Y=0,W=0;const $=new U;for(let j=0;j<G;j++){const H=j*V-ne;for(let ie=0;ie<N;ie++){const z=ie*T-q;$[_]=z*b,$[p]=H*M,$[u]=L,l.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[u]=C>0?1:-1,h.push($.x,$.y,$.z),d.push(ie/A),d.push(1-j/Z),Y+=1}}for(let j=0;j<Z;j++)for(let H=0;H<A;H++){const ie=f+H+N*j,z=f+H+N*(j+1),K=f+(H+1)+N*(j+1),ae=f+(H+1)+N*j;c.push(ie,z,ae),c.push(z,K,ae),W+=6}o.addGroup(m,W,y),m+=W,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Ms(t[n]);for(const r in i)e[r]=i[r]}return e}function k_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mp(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const z_={clone:Ms,merge:nn};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sp extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends Sp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Kr=1;class H_ extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn($r,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Pn($r,Kr,e,n);s.layers=this.layers,this.add(s);const a=new Pn($r,Kr,e,n);a.layers=this.layers,this.add(a);const o=new Pn($r,Kr,e,n);o.layers=this.layers,this.add(o);const c=new Pn($r,Kr,e,n);c.layers=this.layers,this.add(c);const l=new Pn($r,Kr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yp extends pn{constructor(e,n,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],n=n!==void 0?n:_s,super(e,n,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wr?qt:Dn),this.texture=new yp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dr(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:qi});s.uniforms.tEquirect.value=n;const a=new jn(r,s),o=n.minFilter;return n.minFilter===da&&(n.minFilter=un),new H_(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const nl=new U,X_=new U,q_=new Ze;class pr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nl.subVectors(i,n).cross(X_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||q_.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new rc,oo=new U;class dh{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],b=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-s,f-l,p-m,w-u).normalize(),i[1].setComponents(c+s,f+l,p+m,w+u).normalize(),i[2].setComponents(c+a,f+h,p+g,w+b).normalize(),i[3].setComponents(c-a,f-h,p-g,w-b).normalize(),i[4].setComponents(c-o,f-d,p-_,w-M).normalize(),n===Ci)i[5].setComponents(c+o,f+d,p+_,w+M).normalize();else if(n===Bo)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ep(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function j_(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,h){const d=l.array,f=l.usage,m=d.byteLength,g=t.createBuffer();t.bindBuffer(h,g),t.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(t.bindBuffer(d,l),m.count===-1&&g.length===0&&t.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];n?t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(t.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);if(d===void 0)i.set(l,r(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class sc extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=n/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const b=u*f-a;for(let M=0;M<l;M++){const w=M*d-s;g.push(w,-b,0),_.push(0,0,1),p.push(M/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const M=b+l*u,w=b+l*(u+1),D=b+1+l*(u+1),C=b+1+l*u;m.push(M,w,C),m.push(w,D,C)}this.setIndex(m),this.setAttribute("position",new $n(g,3)),this.setAttribute("normal",new $n(_,3)),this.setAttribute("uv",new $n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,e2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,t2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,l2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,h2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,u2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Y_,alphahash_pars_fragment:$_,alphamap_fragment:K_,alphamap_pars_fragment:Z_,alphatest_fragment:J_,alphatest_pars_fragment:Q_,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:a1,iridescence_fragment:o1,bumpmap_pars_fragment:c1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:d1,color_fragment:f1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:_1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:x1,displacementmap_pars_vertex:M1,displacementmap_vertex:S1,emissivemap_fragment:y1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:b1,envmap_fragment:w1,envmap_common_pars_fragment:A1,envmap_pars_fragment:R1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:G1,envmap_vertex:L1,fog_vertex:P1,fog_pars_vertex:U1,fog_fragment:D1,fog_pars_fragment:I1,gradientmap_pars_fragment:N1,lightmap_fragment:F1,lightmap_pars_fragment:O1,lights_lambert_fragment:B1,lights_lambert_pars_fragment:k1,lights_pars_begin:z1,lights_toon_fragment:V1,lights_toon_pars_fragment:H1,lights_phong_fragment:W1,lights_phong_pars_fragment:X1,lights_physical_fragment:q1,lights_physical_pars_fragment:j1,lights_fragment_begin:Y1,lights_fragment_maps:$1,lights_fragment_end:K1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:e2,map_fragment:t2,map_pars_fragment:n2,map_particle_fragment:i2,map_particle_pars_fragment:r2,metalnessmap_fragment:s2,metalnessmap_pars_fragment:a2,morphcolor_vertex:o2,morphnormal_vertex:c2,morphtarget_pars_vertex:l2,morphtarget_vertex:h2,normal_fragment_begin:u2,normal_fragment_maps:d2,normal_pars_fragment:f2,normal_pars_vertex:p2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:_2,clearcoat_normal_fragment_maps:v2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:M2,opaque_fragment:S2,packing:y2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:b2,dithering_pars_fragment:w2,roughnessmap_fragment:A2,roughnessmap_pars_fragment:R2,shadowmap_pars_fragment:C2,shadowmap_pars_vertex:L2,shadowmap_vertex:P2,shadowmask_pars_fragment:U2,skinbase_vertex:D2,skinning_pars_vertex:I2,skinning_vertex:N2,skinnormal_vertex:F2,specularmap_fragment:O2,specularmap_pars_fragment:B2,tonemapping_fragment:k2,tonemapping_pars_fragment:z2,transmission_fragment:G2,transmission_pars_fragment:V2,uv_pars_fragment:H2,uv_pars_vertex:W2,uv_vertex:X2,worldpos_vertex:q2,background_vert:j2,background_frag:Y2,backgroundCube_vert:$2,backgroundCube_frag:K2,cube_vert:Z2,cube_frag:J2,depth_vert:Q2,depth_frag:ev,distanceRGBA_vert:tv,distanceRGBA_frag:nv,equirect_vert:iv,equirect_frag:rv,linedashed_vert:sv,linedashed_frag:av,meshbasic_vert:ov,meshbasic_frag:cv,meshlambert_vert:lv,meshlambert_frag:hv,meshmatcap_vert:uv,meshmatcap_frag:dv,meshnormal_vert:fv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:gv,meshphysical_vert:_v,meshphysical_frag:vv,meshtoon_vert:xv,meshtoon_frag:Mv,points_vert:Sv,points_frag:yv,shadow_vert:Ev,shadow_frag:Tv,sprite_vert:bv,sprite_frag:wv},se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},oi={basic:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:nn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:nn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:nn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:nn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:nn([se.points,se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:nn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:nn([se.common,se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:nn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:nn([se.sprite,se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:nn([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:nn([se.lights,se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};oi.physical={uniforms:nn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const co={r:0,b:0,g:0};function Av(t,e,n,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let b=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?n:e).get(M)),M===null?_(o,c):M&&M.isColor&&(_(M,1),b=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||b)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),M&&(M.isCubeTexture||M.mapping===nc)?(h===void 0&&(h=new jn(new Dr(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Ms(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ot.getTransfer(M.colorSpace)!==dt,(d!==M||f!==M.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=t.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new jn(new sc(2,2),new Ir({name:"BackgroundMaterial",uniforms:Ms(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,m=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(co,Mp(t)),i.buffers.color.setClear(co.r,co.g,co.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function Rv(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=p(null);let l=c,h=!1;function d(L,N,G,Y,W){let $=!1;if(a){const j=_(Y,G,N);l!==j&&(l=j,m(l.object)),$=u(L,Y,G,W),$&&b(L,Y,G,W)}else{const j=N.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==j)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=j,$=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,Z(L,N,G,Y),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,N,G){const Y=G.wireframe===!0;let W=o[L.id];W===void 0&&(W={},o[L.id]=W);let $=W[N.id];$===void 0&&($={},W[N.id]=$);let j=$[Y];return j===void 0&&(j=p(f()),$[Y]=j),j}function p(L){const N=[],G=[],Y=[];for(let W=0;W<r;W++)N[W]=0,G[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:Y,object:L,attributes:{},index:null}}function u(L,N,G,Y){const W=l.attributes,$=N.attributes;let j=0;const H=G.getAttributes();for(const ie in H)if(H[ie].location>=0){const K=W[ie];let ae=$[ie];if(ae===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;j++}return l.attributesNum!==j||l.index!==Y}function b(L,N,G,Y){const W={},$=N.attributes;let j=0;const H=G.getAttributes();for(const ie in H)if(H[ie].location>=0){let K=$[ie];K===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),W[ie]=ae,j++}l.attributes=W,l.attributesNum=j,l.index=Y}function M(){const L=l.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function w(L){D(L,0)}function D(L,N){const G=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;G[L]=1,Y[L]===0&&(t.enableVertexAttribArray(L),Y[L]=1),W[L]!==N&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),W[L]=N)}function C(){const L=l.newAttributes,N=l.enabledAttributes;for(let G=0,Y=N.length;G<Y;G++)N[G]!==L[G]&&(t.disableVertexAttribArray(G),N[G]=0)}function A(L,N,G,Y,W,$,j){j===!0?t.vertexAttribIPointer(L,N,G,W,$):t.vertexAttribPointer(L,N,G,Y,W,$)}function Z(L,N,G,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=Y.attributes,$=G.getAttributes(),j=N.defaultAttributeValues;for(const H in $){const ie=$[H];if(ie.location>=0){let z=W[H];if(z===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){const K=z.normalized,ae=z.itemSize,_e=n.get(z);if(_e===void 0)continue;const xe=_e.buffer,Pe=_e.type,De=_e.bytesPerElement,we=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||z.gpuType===tp);if(z.isInterleavedBufferAttribute){const Ve=z.data,I=Ve.stride,Lt=z.offset;if(Ve.isInstancedInterleavedBuffer){for(let Se=0;Se<ie.locationSize;Se++)D(ie.location+Se,Ve.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Se=0;Se<ie.locationSize;Se++)w(ie.location+Se);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Se=0;Se<ie.locationSize;Se++)A(ie.location+Se,ae/ie.locationSize,Pe,K,I*De,(Lt+ae/ie.locationSize*Se)*De,we)}else{if(z.isInstancedBufferAttribute){for(let Ve=0;Ve<ie.locationSize;Ve++)D(ie.location+Ve,z.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ve=0;Ve<ie.locationSize;Ve++)w(ie.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ve=0;Ve<ie.locationSize;Ve++)A(ie.location+Ve,ae/ie.locationSize,Pe,K,ae*De,ae/ie.locationSize*Ve*De,we)}}else if(j!==void 0){const K=j[H];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(ie.location,K);break;case 3:t.vertexAttrib3fv(ie.location,K);break;case 4:t.vertexAttrib4fv(ie.location,K);break;default:t.vertexAttrib1fv(ie.location,K)}}}}C()}function y(){q();for(const L in o){const N=o[L];for(const G in N){const Y=N[G];for(const W in Y)g(Y[W].object),delete Y[W];delete N[G]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const G in N){const Y=N[G];for(const W in Y)g(Y[W].object),delete Y[W];delete N[G]}delete o[L.id]}function V(L){for(const N in o){const G=o[N];if(G[L.id]===void 0)continue;const Y=G[L.id];for(const W in Y)g(Y[W].object),delete Y[W];delete G[L.id]}}function q(){ne(),h=!0,l!==c&&(l=c,m(l.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:q,resetDefaultState:ne,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:M,enableAttribute:w,disableUnusedAttributes:C}}function Cv(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,d){t.drawArrays(s,h,d),n.update(d,s,1)}function c(h,d,f){if(f===0)return;let m,g;if(r)m=t,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,f),n.update(d,s,f)}function l(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Lv(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=a||e.has("OES_texture_float"),D=M&&w,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:D,maxSamples:C}}function Pv(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const b=s?0:i,M=b*4;let w=u.clippingState||null;c.value=w,w=h(g,f,M,m);for(let D=0;D!==M;++D)w[D]=n[D];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,w=m;M!==_;++M,w+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(p,w),p[w+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Uv(t){let e=new WeakMap;function n(a,o){return o===yl?a.mapping=_s:o===El&&(a.mapping=vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===yl||o===El)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new W_(c.height/2);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Tp extends Sp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=4,bd=[.125,.215,.35,.446,.526,.582],xr=20,il=new Tp,wd=new Qe;let rl=null,sl=0,al=0;const mr=(1+Math.sqrt(5))/2,Zr=1/mr,Ad=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,mr,Zr),new U(0,mr,-Zr),new U(Zr,0,mr),new U(-Zr,0,mr),new U(mr,Zr,0),new U(-mr,Zr,0)];class Rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,sl,al),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:fa,format:qn,colorSpace:Di,depthBuffer:!1},r=Cd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dv(s)),this._blurMaterial=Iv(s,e,n)}return r}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,il)}_sceneToCubeUV(e,n,i,r){const o=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wd),h.toneMapping=ji,h.autoClear=!1;const m=new uh({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new jn(new Dr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(wd),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):b===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const M=this._cubeSize;lo(r,b*M,u>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_s||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;lo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,il)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ad[(r-1)%Ad.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new jn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const u=[];let b=0;for(let A=0;A<xr;++A){const Z=A/_,y=Math.exp(-Z*Z/2);u.push(y),A===0?b+=y:A<p&&(b+=2*y)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const w=this._sizeLods[r],D=3*w*(r>M-ns?r-M+ns:0),C=4*(this._cubeSize-w);lo(n,D,C,3*w,2*w),c.setRenderTarget(n),c.render(d,il)}}function Dv(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+bd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-ns?c=bd[a-t+ns-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,b=new Float32Array(_*g*m),M=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,Z=C>2?0:-1,y=[A,Z,0,A+2/3,Z,0,A+2/3,Z+1,0,A,Z,0,A+2/3,Z+1,0,A,Z+1,0];b.set(y,_*g*C),M.set(f,p*g*C);const T=[C,C,C,C,C,C];w.set(T,u*g*C)}const D=new mi;D.setAttribute("position",new Yn(b,_)),D.setAttribute("uv",new Yn(M,p)),D.setAttribute("faceIndex",new Yn(w,u)),e.push(D),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cd(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Iv(t,e,n){const i=new Float32Array(xr),r=new U(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ld(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Pd(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nv(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===yl||c===El,h=c===_s||c===vs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Rd(t)),d=l?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&r(d)){n===null&&(n=new Rd(t));const f=l?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Fv(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ov(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let M=0,w=b.length;M<w;M+=3){const D=b[M+0],C=b[M+1],A=b[M+2];f.push(D,C,C,A,A,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const D=M+0,C=M+1,A=M+2;f.push(D,C,C,A,A,D)}}else return;const p=new(up(f)?xp:vp)(f,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Bv(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){t.drawElements(s,g,o,m*c),n.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,o,m*c,_),n.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,o,m,0,_);let u=0;for(let b=0;b<_;b++)u+=g[b];n.update(u,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function kv(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zv(t,e){return t[0]-e[0]}function Gv(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Vv(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new jt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let N=function(){ne.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],Z=h.morphAttributes.color||[];let y=0;M===!0&&(y=1),w===!0&&(y=2),D===!0&&(y=3);let T=h.attributes.position.count*y,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*V*4*_),ne=new pp(q,T,V,_);ne.type=Xi,ne.needsUpdate=!0;const L=y*4;for(let G=0;G<_;G++){const Y=C[G],W=A[G],$=Z[G],j=T*V*4*G;for(let H=0;H<Y.count;H++){const ie=H*L;M===!0&&(a.fromBufferAttribute(Y,H),q[j+ie+0]=a.x,q[j+ie+1]=a.y,q[j+ie+2]=a.z,q[j+ie+3]=0),w===!0&&(a.fromBufferAttribute(W,H),q[j+ie+4]=a.x,q[j+ie+5]=a.y,q[j+ie+6]=a.z,q[j+ie+7]=0),D===!0&&(a.fromBufferAttribute($,H),q[j+ie+8]=a.x,q[j+ie+9]=a.y,q[j+ie+10]=a.z,q[j+ie+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:ne,size:new it(T,V)},s.set(h,p),h.addEventListener("dispose",N)}let u=0;for(let M=0;M<f.length;M++)u+=f[M];const b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",b),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];i[h.id]=_}for(let w=0;w<g;w++){const D=_[w];D[0]=w,D[1]=f[w]}_.sort(Gv);for(let w=0;w<8;w++)w<g&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(zv);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let b=0;for(let w=0;w<8;w++){const D=o[w],C=D[0],A=D[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+w)!==p[C]&&h.setAttribute("morphTarget"+w,p[C]),u&&h.getAttribute("morphNormal"+w)!==u[C]&&h.setAttribute("morphNormal"+w,u[C]),r[w]=A,b+=A):(p&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),u&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),r[w]=0)}const M=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(t,"morphTargetBaseInfluence",M),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function Hv(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class bp extends pn{constructor(e,n,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:br,h!==br&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===br&&(i=Wi),i===void 0&&h===xs&&(i=Tr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const wp=new pn,Ap=new bp(1,1);Ap.compareFunction=hp;const Rp=new pp,Cp=new A_,Lp=new yp,Ud=[],Dd=[],Id=new Float32Array(16),Nd=new Float32Array(9),Fd=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ud[r];if(s===void 0&&(s=new Float32Array(r),Ud[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ac(t,e){let n=Dd[e];n===void 0&&(n=new Int32Array(e),Dd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Wv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Xv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function qv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function jv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Yv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Fd.set(i),t.uniformMatrix2fv(this.addr,!1,Fd),Bt(n,i)}}function $v(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Nd.set(i),t.uniformMatrix3fv(this.addr,!1,Nd),Bt(n,i)}}function Kv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Id.set(i),t.uniformMatrix4fv(this.addr,!1,Id),Bt(n,i)}}function Zv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Jv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function Qv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function ex(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function tx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function ix(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function rx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function sx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ap:wp;n.setTexture2D(e||s,r)}function ax(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cp,r)}function ox(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lp,r)}function cx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rp,r)}function lx(t){switch(t){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return jv;case 35674:return Yv;case 35675:return $v;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return cx}}function hx(t,e){t.uniform1fv(this.addr,e)}function ux(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function dx(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function fx(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function px(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mx(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gx(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _x(t,e){t.uniform1iv(this.addr,e)}function vx(t,e){t.uniform2iv(this.addr,e)}function xx(t,e){t.uniform3iv(this.addr,e)}function Mx(t,e){t.uniform4iv(this.addr,e)}function Sx(t,e){t.uniform1uiv(this.addr,e)}function yx(t,e){t.uniform2uiv(this.addr,e)}function Ex(t,e){t.uniform3uiv(this.addr,e)}function Tx(t,e){t.uniform4uiv(this.addr,e)}function bx(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||wp,s[a])}function wx(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Cp,s[a])}function Ax(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Lp,s[a])}function Rx(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Rp,s[a])}function Cx(t){switch(t){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return yx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}class Lx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lx(n.type)}}class Px{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Cx(n.type)}}class Ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function Od(t,e){t.seq.push(e),t.map[e.id]=e}function Dx(t,e,n){const i=t.name,r=i.length;for(ol.lastIndex=0;;){const s=ol.exec(i),a=ol.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Od(n,l===void 0?new Lx(o,t,e):new Px(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Ux(o),Od(n,d)),n=d}}}class vo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Dx(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Bd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ix=37297;let Nx=0;function Fx(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Ox(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Oo&&n===Fo?i="LinearDisplayP3ToLinearSRGB":e===Fo&&n===Oo&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case ic:return[i,"LinearTransferOETF"];case qt:case hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Fx(t.getShaderSource(e),a)}else return r}function Bx(t,e){const n=Ox(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kx(t,e){let n;switch(e){case K0:n="Linear";break;case Z0:n="Reinhard";break;case J0:n="OptimizedCineon";break;case Q0:n="ACESFilmic";break;case t_:n="AgX";break;case e_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zx(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function Gx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function Vx(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Hx(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function is(t){return t!==""}function zd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(t){return t.replace(Wx,qx)}const Xx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qx(t,e){let n=Xe[e];if(n===void 0){const i=Xx.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cl(n)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(t){return t.replace(jx,Yx)}function Yx(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $x(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Kx(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zx(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Jx(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Y0:e="ENVMAP_BLENDING_MIX";break;case $0:e="ENVMAP_BLENDING_ADD";break}return e}function Qx(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=$x(n),l=Kx(n),h=Zx(n),d=Jx(n),f=Qx(n),m=n.isWebGL2?"":zx(n),g=Gx(n),_=Vx(s),p=r.createProgram();let u,b,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(is).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(is).join(`
`),b.length>0&&(b+=`
`)):(u=[Hd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),b=[m,Hd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?Xe.tonemapping_pars_fragment:"",n.toneMapping!==ji?kx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Bx("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(is).join(`
`)),a=Cl(a),a=zd(a,n),a=Gd(a,n),o=Cl(o),o=zd(o,n),o=Gd(o,n),a=Vd(a),o=Vd(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const w=M+u+a,D=M+b+o,C=Bd(r,r.VERTEX_SHADER,w),A=Bd(r,r.FRAGMENT_SHADER,D);r.attachShader(p,C),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function Z(q){if(t.debug.checkShaderErrors){const ne=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),N=r.getShaderInfoLog(A).trim();let G=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,A);else{const W=kd(r,C,"vertex"),$=kd(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+W+`
`+$)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(L===""||N==="")&&(Y=!1);Y&&(q.diagnostics={runnable:G,programLog:ne,vertexShader:{log:L,prefix:u},fragmentShader:{log:N,prefix:b}})}r.deleteShader(C),r.deleteShader(A),y=new vo(r,p),T=Hx(r,p)}let y;this.getUniforms=function(){return y===void 0&&Z(this),y};let T;this.getAttributes=function(){return T===void 0&&Z(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(p,Ix)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let t3=0;class n3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i3(e),n.set(e,i)),i}}class i3{constructor(e){this.id=t3++,this.code=e,this.usedTimes=0}}function r3(t,e,n,i,r,s,a){const o=new gp,c=new n3,l=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,T,V,q,ne){const L=q.fog,N=ne.geometry,G=y.isMeshStandardMaterial?q.environment:null,Y=(y.isMeshStandardMaterial?n:e).get(y.envMap||G),W=Y&&Y.mapping===nc?Y.image.height:null,$=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,H=j!==void 0?j.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let z,K,ae,_e;if($){const en=oi[$];z=en.vertexShader,K=en.fragmentShader}else z=y.vertexShader,K=y.fragmentShader,c.update(y),ae=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);const xe=t.getRenderTarget(),Pe=ne.isInstancedMesh===!0,De=ne.isBatchedMesh===!0,we=!!y.map,Ve=!!y.matcap,I=!!Y,Lt=!!y.aoMap,Se=!!y.lightMap,X=!!y.bumpMap,he=!!y.normalMap,Be=!!y.displacementMap,ve=!!y.emissiveMap,S=!!y.metalnessMap,v=!!y.roughnessMap,O=y.anisotropy>0,ee=y.clearcoat>0,Q=y.iridescence>0,te=y.sheen>0,ye=y.transmission>0,ue=O&&!!y.anisotropyMap,me=ee&&!!y.clearcoatMap,Ue=ee&&!!y.clearcoatNormalMap,qe=ee&&!!y.clearcoatRoughnessMap,J=Q&&!!y.iridescenceMap,at=Q&&!!y.iridescenceThicknessMap,Je=te&&!!y.sheenColorMap,ze=te&&!!y.sheenRoughnessMap,Te=!!y.specularMap,ge=!!y.specularColorMap,We=!!y.specularIntensityMap,st=ye&&!!y.transmissionMap,bt=ye&&!!y.thicknessMap,$e=!!y.gradientMap,re=!!y.alphaMap,R=y.alphaTest>0,oe=!!y.alphaHash,ce=!!y.extensions,Ie=!!N.attributes.uv1,Ae=!!N.attributes.uv2,ct=!!N.attributes.uv3;let lt=ji;return y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(lt=t.toneMapping),{isWebGL2:h,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:z,fragmentShader:K,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:De,instancing:Pe,instancingColor:Pe&&ne.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Di,map:we,matcap:Ve,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:W,aoMap:Lt,lightMap:Se,bumpMap:X,normalMap:he,displacementMap:f&&Be,emissiveMap:ve,normalMapObjectSpace:he&&y.normalMapType===f_,normalMapTangentSpace:he&&y.normalMapType===lp,metalnessMap:S,roughnessMap:v,anisotropy:O,anisotropyMap:ue,clearcoat:ee,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:qe,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:at,sheen:te,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:Te,specularColorMap:ge,specularIntensityMap:We,transmission:ye,transmissionMap:st,thicknessMap:bt,gradientMap:$e,opaque:y.transparent===!1&&y.blending===cs,alphaMap:re,alphaTest:R,alphaHash:oe,combine:y.combine,mapUv:we&&_(y.map.channel),aoMapUv:Lt&&_(y.aoMap.channel),lightMapUv:Se&&_(y.lightMap.channel),bumpMapUv:X&&_(y.bumpMap.channel),normalMapUv:he&&_(y.normalMap.channel),displacementMapUv:Be&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:v&&_(y.roughnessMap.channel),anisotropyMapUv:ue&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(y.sheenRoughnessMap.channel),specularMapUv:Te&&_(y.specularMap.channel),specularColorMapUv:ge&&_(y.specularColorMap.channel),specularIntensityMapUv:We&&_(y.specularIntensityMap.channel),transmissionMapUv:st&&_(y.transmissionMap.channel),thicknessMapUv:bt&&_(y.thicknessMap.channel),alphaMapUv:re&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(he||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ae,vertexUv3s:ct,pointsUvs:ne.isPoints===!0&&!!N.attributes.uv&&(we||re),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ne.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===li,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ce&&y.extensions.derivatives===!0,extensionFragDepth:ce&&y.extensions.fragDepth===!0,extensionDrawBuffers:ce&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(b(T,y),M(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function b(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function w(y){const T=g[y.type];let V;if(T){const q=oi[T];V=z_.clone(q.uniforms)}else V=y.uniforms;return V}function D(y,T){let V;for(let q=0,ne=l.length;q<ne;q++){const L=l[q];if(L.cacheKey===T){V=L,++V.usedTimes;break}}return V===void 0&&(V=new e3(t,T,y,s),l.push(V)),V}function C(y){if(--y.usedTimes===0){const T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function Z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:D,releaseProgram:C,releaseShaderCache:A,programs:l,dispose:Z}}function s3(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function a3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function o(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function c(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function l(d,f){n.length>1&&n.sort(d||a3),i.length>1&&i.sort(f||Wd),r.length>1&&r.sort(f||Wd)}function h(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function o3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Xd,t.set(i,[a])):r>=s.length?(a=new Xd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function c3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Qe};break;case"SpotLight":n={position:new U,direction:new U,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function l3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let h3=0;function u3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function d3(t,e){const n=new c3,i=l3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,a=new It,o=new It;function c(h,d){let f=0,m=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,p=0,u=0,b=0,M=0,w=0,D=0,C=0,A=0,Z=0,y=0;h.sort(u3);const T=d===!0?Math.PI:1;for(let q=0,ne=h.length;q<ne;q++){const L=h[q],N=L.color,G=L.intensity,Y=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*G*T,m+=N.g*G*T,g+=N.b*G*T;else if(L.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(L.sh.coefficients[$],G);y++}else if(L.isDirectionalLight){const $=n.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const j=L.shadow,H=i.get(L);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.directionalShadow[_]=H,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=L.shadow.matrix,w++}r.directional[_]=$,_++}else if(L.isSpotLight){const $=n.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(N).multiplyScalar(G*T),$.distance=Y,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,r.spot[u]=$;const j=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&Z++),r.spotLightMatrix[u]=j.matrix,L.castShadow){const H=i.get(L);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.spotShadow[u]=H,r.spotShadowMap[u]=W,C++}u++}else if(L.isRectAreaLight){const $=n.get(L);$.color.copy(N).multiplyScalar(G),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),r.rectArea[b]=$,b++}else if(L.isPointLight){const $=n.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*T),$.distance=L.distance,$.decay=L.decay,L.castShadow){const j=L.shadow,H=i.get(L);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,r.pointShadow[p]=H,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=L.shadow.matrix,D++}r.point[p]=$,p++}else if(L.isHemisphereLight){const $=n.get(L);$.skyColor.copy(L.color).multiplyScalar(G*T),$.groundColor.copy(L.groundColor).multiplyScalar(G*T),r.hemi[M]=$,M++}}b>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const V=r.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==b||V.hemiLength!==M||V.numDirectionalShadows!==w||V.numPointShadows!==D||V.numSpotShadows!==C||V.numSpotMaps!==A||V.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=b,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+A-Z,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=y,V.directionalLength=_,V.pointLength=p,V.spotLength=u,V.rectAreaLength=b,V.hemiLength=M,V.numDirectionalShadows=w,V.numPointShadows=D,V.numSpotShadows=C,V.numSpotMaps=A,V.numLightProbes=y,r.version=h3++)}function l(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let b=0,M=h.length;b<M;b++){const w=h[b];if(w.isDirectionalLight){const D=r.directional[f];D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),f++}else if(w.isSpotLight){const D=r.spot[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),g++}else if(w.isRectAreaLight){const D=r.rectArea[_];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(u),o.identity(),a.copy(w.matrixWorld),a.premultiply(u),o.extractRotation(a),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:r}}function qd(t,e){const n=new d3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function c(d){n.setup(i,d)}function l(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function f3(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let c;return o===void 0?(c=new qd(t,e),n.set(s,[c])):a>=o.length?(c=new qd(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class p3 extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m3 extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v3(t,e,n){let i=new dh;const r=new it,s=new it,a=new jt,o=new p3({depthPacking:d_}),c=new m3,l={},h=n.maxTextureSize,d={[Qi]:fn,[fn]:Qi,[li]:li},f=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:g3,fragmentShader:_3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let u=this.type;this.render=function(C,A,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const y=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),q=t.state;q.setBlending(qi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ne=u!==bi&&this.type===bi,L=u===bi&&this.type!==bi;for(let N=0,G=C.length;N<G;N++){const Y=C[N],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const $=W.getFrameExtents();if(r.multiply($),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,W.mapSize.y=s.y)),W.map===null||ne===!0||L===!0){const H=this.type!==bi?{minFilter:rn,magFilter:rn}:{};W.map!==null&&W.map.dispose(),W.map=new Ur(r.x,r.y,H),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const j=W.getViewportCount();for(let H=0;H<j;H++){const ie=W.getViewport(H);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),q.viewport(a),W.updateMatrices(Y,H),i=W.getFrustum(),w(A,Z,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===bi&&b(W,Z),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(y,T,V)};function b(C,A){const Z=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ur(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,Z,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,Z,m,_,null)}function M(C,A,Z,y){let T=null;const V=Z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)T=V;else if(T=Z.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=T.uuid,ne=A.uuid;let L=l[q];L===void 0&&(L={},l[q]=L);let N=L[ne];N===void 0&&(N=T.clone(),L[ne]=N,A.addEventListener("dispose",D)),T=N}if(T.visible=A.visible,T.wireframe=A.wireframe,y===bi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,Z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=t.properties.get(T);q.light=Z}return T}function w(C,A,Z,y,T){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),L=C.material;if(Array.isArray(L)){const N=ne.groups;for(let G=0,Y=N.length;G<Y;G++){const W=N[G],$=L[W.materialIndex];if($&&$.visible){const j=M(C,$,y,T);C.onBeforeShadow(t,C,A,Z,ne,j,W),t.renderBufferDirect(Z,null,ne,j,C,W),C.onAfterShadow(t,C,A,Z,ne,j,W)}}}else if(L.visible){const N=M(C,L,y,T);C.onBeforeShadow(t,C,A,Z,ne,N,null),t.renderBufferDirect(Z,null,ne,N,C,null),C.onAfterShadow(t,C,A,Z,ne,N,null)}}const q=C.children;for(let ne=0,L=q.length;ne<L;ne++)w(q[ne],A,Z,y,T)}function D(C){C.target.removeEventListener("dispose",D);for(const Z in l){const y=l[Z],T=C.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function x3(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const oe=new jt;let ce=null;const Ie=new jt(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!R&&(t.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){R=Ae},setClear:function(Ae,ct,lt,Gt,en){en===!0&&(Ae*=Gt,ct*=Gt,lt*=Gt),oe.set(Ae,ct,lt,Gt),Ie.equals(oe)===!1&&(t.clearColor(Ae,ct,lt,Gt),Ie.copy(oe))},reset:function(){R=!1,ce=null,Ie.set(-1,0,0,0)}}}function s(){let R=!1,oe=null,ce=null,Ie=null;return{setTest:function(Ae){Ae?De(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!R&&(t.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case G0:t.depthFunc(t.NEVER);break;case V0:t.depthFunc(t.ALWAYS);break;case H0:t.depthFunc(t.LESS);break;case Io:t.depthFunc(t.LEQUAL);break;case W0:t.depthFunc(t.EQUAL);break;case X0:t.depthFunc(t.GEQUAL);break;case q0:t.depthFunc(t.GREATER);break;case j0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Ae}},setLocked:function(Ae){R=Ae},setClear:function(Ae){Ie!==Ae&&(t.clearDepth(Ae),Ie=Ae)},reset:function(){R=!1,oe=null,ce=null,Ie=null}}}function a(){let R=!1,oe=null,ce=null,Ie=null,Ae=null,ct=null,lt=null,Gt=null,en=null;return{setTest:function(ht){R||(ht?De(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(ht){oe!==ht&&!R&&(t.stencilMask(ht),oe=ht)},setFunc:function(ht,tn,ti){(ce!==ht||Ie!==tn||Ae!==ti)&&(t.stencilFunc(ht,tn,ti),ce=ht,Ie=tn,Ae=ti)},setOp:function(ht,tn,ti){(ct!==ht||lt!==tn||Gt!==ti)&&(t.stencilOp(ht,tn,ti),ct=ht,lt=tn,Gt=ti)},setLocked:function(ht){R=ht},setClear:function(ht){en!==ht&&(t.clearStencil(ht),en=ht)},reset:function(){R=!1,oe=null,ce=null,Ie=null,Ae=null,ct=null,lt=null,Gt=null,en=null}}}const o=new r,c=new s,l=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,M=null,w=null,D=null,C=null,A=null,Z=null,y=new Qe(0,0,0),T=0,V=!1,q=null,ne=null,L=null,N=null,G=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=$>=2);let H=null,ie={};const z=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ae=new jt().fromArray(z),_e=new jt().fromArray(K);function xe(R,oe,ce,Ie){const Ae=new Uint8Array(4),ct=t.createTexture();t.bindTexture(R,ct),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let lt=0;lt<ce;lt++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(oe+lt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return ct}const Pe={};Pe[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(t.DEPTH_TEST),c.setFunc(Io),ve(!1),S(Au),De(t.CULL_FACE),he(qi);function De(R){f[R]!==!0&&(t.enable(R),f[R]=!0)}function we(R){f[R]!==!1&&(t.disable(R),f[R]=!1)}function Ve(R,oe){return m[R]!==oe?(t.bindFramebuffer(R,oe),m[R]=oe,i&&(R===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),R===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function I(R,oe){let ce=_,Ie=!1;if(R)if(ce=g.get(oe),ce===void 0&&(ce=[],g.set(oe,ce)),R.isWebGLMultipleRenderTargets){const Ae=R.texture;if(ce.length!==Ae.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let ct=0,lt=Ae.length;ct<lt;ct++)ce[ct]=t.COLOR_ATTACHMENT0+ct;ce.length=Ae.length,Ie=!0}}else ce[0]!==t.COLOR_ATTACHMENT0&&(ce[0]=t.COLOR_ATTACHMENT0,Ie=!0);else ce[0]!==t.BACK&&(ce[0]=t.BACK,Ie=!0);Ie&&(n.isWebGL2?t.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Lt(R){return p!==R?(t.useProgram(R),p=R,!0):!1}const Se={[vr]:t.FUNC_ADD,[w0]:t.FUNC_SUBTRACT,[A0]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[Pu]=t.MIN,Se[Uu]=t.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Se[Pu]=R.MIN_EXT,Se[Uu]=R.MAX_EXT)}const X={[R0]:t.ZERO,[C0]:t.ONE,[L0]:t.SRC_COLOR,[Ml]:t.SRC_ALPHA,[F0]:t.SRC_ALPHA_SATURATE,[I0]:t.DST_COLOR,[U0]:t.DST_ALPHA,[P0]:t.ONE_MINUS_SRC_COLOR,[Sl]:t.ONE_MINUS_SRC_ALPHA,[N0]:t.ONE_MINUS_DST_COLOR,[D0]:t.ONE_MINUS_DST_ALPHA,[O0]:t.CONSTANT_COLOR,[B0]:t.ONE_MINUS_CONSTANT_COLOR,[k0]:t.CONSTANT_ALPHA,[z0]:t.ONE_MINUS_CONSTANT_ALPHA};function he(R,oe,ce,Ie,Ae,ct,lt,Gt,en,ht){if(R===qi){u===!0&&(we(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),R!==b0){if(R!==b||ht!==V){if((M!==vr||C!==vr)&&(t.blendEquation(t.FUNC_ADD),M=vr,C=vr),ht)switch(R){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ru:t.blendFunc(t.ONE,t.ONE);break;case Cu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ru:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,D=null,A=null,Z=null,y.set(0,0,0),T=0,b=R,V=ht}return}Ae=Ae||oe,ct=ct||ce,lt=lt||Ie,(oe!==M||Ae!==C)&&(t.blendEquationSeparate(Se[oe],Se[Ae]),M=oe,C=Ae),(ce!==w||Ie!==D||ct!==A||lt!==Z)&&(t.blendFuncSeparate(X[ce],X[Ie],X[ct],X[lt]),w=ce,D=Ie,A=ct,Z=lt),(Gt.equals(y)===!1||en!==T)&&(t.blendColor(Gt.r,Gt.g,Gt.b,en),y.copy(Gt),T=en),b=R,V=!1}function Be(R,oe){R.side===li?we(t.CULL_FACE):De(t.CULL_FACE);let ce=R.side===fn;oe&&(ce=!ce),ve(ce),R.blending===cs&&R.transparent===!1?he(qi):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ie=R.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),O(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function ve(R){q!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),q=R)}function S(R){R!==y0?(De(t.CULL_FACE),R!==ne&&(R===Au?t.cullFace(t.BACK):R===E0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),ne=R}function v(R){R!==L&&(W&&t.lineWidth(R),L=R)}function O(R,oe,ce){R?(De(t.POLYGON_OFFSET_FILL),(N!==oe||G!==ce)&&(t.polygonOffset(oe,ce),N=oe,G=ce)):we(t.POLYGON_OFFSET_FILL)}function ee(R){R?De(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Q(R){R===void 0&&(R=t.TEXTURE0+Y-1),H!==R&&(t.activeTexture(R),H=R)}function te(R,oe,ce){ce===void 0&&(H===null?ce=t.TEXTURE0+Y-1:ce=H);let Ie=ie[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},ie[ce]=Ie),(Ie.type!==R||Ie.texture!==oe)&&(H!==ce&&(t.activeTexture(ce),H=ce),t.bindTexture(R,oe||Pe[R]),Ie.type=R,Ie.texture=oe)}function ye(){const R=ie[H];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function We(R){ae.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function st(R){_e.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function bt(R,oe){let ce=d.get(oe);ce===void 0&&(ce=new WeakMap,d.set(oe,ce));let Ie=ce.get(R);Ie===void 0&&(Ie=t.getUniformBlockIndex(oe,R.name),ce.set(R,Ie))}function $e(R,oe){const Ie=d.get(oe).get(R);h.get(oe)!==Ie&&(t.uniformBlockBinding(oe,Ie,R.__bindingPointIndex),h.set(oe,Ie))}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},H=null,ie={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,M=null,w=null,D=null,C=null,A=null,Z=null,y=new Qe(0,0,0),T=0,V=!1,q=null,ne=null,L=null,N=null,G=null,ae.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:De,disable:we,bindFramebuffer:Ve,drawBuffers:I,useProgram:Lt,setBlending:he,setMaterial:Be,setFlipSided:ve,setCullFace:S,setLineWidth:v,setPolygonOffset:O,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:ye,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Te,texImage3D:ge,updateUBOMapping:bt,uniformBlockBinding:$e,texStorage2D:Je,texStorage3D:ze,texSubImage2D:Ue,texSubImage3D:qe,compressedTexSubImage2D:J,compressedTexSubImage3D:at,scissor:We,viewport:st,reset:re}}function M3(t,e,n,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return m?new OffscreenCanvas(S,v):ko("canvas")}function _(S,v,O,ee){let Q=1;if((S.width>ee||S.height>ee)&&(Q=ee/Math.max(S.width,S.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const te=v?Rl:Math.floor,ye=te(Q*S.width),ue=te(Q*S.height);d===void 0&&(d=g(ye,ue));const me=O?g(ye,ue):d;return me.width=ye,me.height=ue,me.getContext("2d").drawImage(S,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ye+"x"+ue+")."),me}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return cd(S.width)&&cd(S.height)}function u(S){return o?!1:S.wrapS!==Xn||S.wrapT!==Xn||S.minFilter!==rn&&S.minFilter!==un}function b(S,v){return S.generateMipmaps&&v&&S.minFilter!==rn&&S.minFilter!==un}function M(S){t.generateMipmap(S)}function w(S,v,O,ee,Q=!1){if(o===!1)return v;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=v;if(v===t.RED&&(O===t.FLOAT&&(te=t.R32F),O===t.HALF_FLOAT&&(te=t.R16F),O===t.UNSIGNED_BYTE&&(te=t.R8)),v===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(te=t.R8UI),O===t.UNSIGNED_SHORT&&(te=t.R16UI),O===t.UNSIGNED_INT&&(te=t.R32UI),O===t.BYTE&&(te=t.R8I),O===t.SHORT&&(te=t.R16I),O===t.INT&&(te=t.R32I)),v===t.RG&&(O===t.FLOAT&&(te=t.RG32F),O===t.HALF_FLOAT&&(te=t.RG16F),O===t.UNSIGNED_BYTE&&(te=t.RG8)),v===t.RGBA){const ye=Q?No:ot.getTransfer(ee);O===t.FLOAT&&(te=t.RGBA32F),O===t.HALF_FLOAT&&(te=t.RGBA16F),O===t.UNSIGNED_BYTE&&(te=ye===dt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function D(S,v,O){return b(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==rn&&S.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){return S===rn||S===Du||S===Uc?t.NEAREST:t.LINEAR}function A(S){const v=S.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&h.delete(v)}function Z(S){const v=S.target;v.removeEventListener("dispose",Z),V(v)}function y(S){const v=i.get(S);if(v.__webglInit===void 0)return;const O=S.source,ee=f.get(O);if(ee){const Q=ee[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(S),Object.keys(ee).length===0&&f.delete(O)}i.remove(S)}function T(S){const v=i.get(S);t.deleteTexture(v.__webglTexture);const O=S.source,ee=f.get(O);delete ee[v.__cacheKey],a.memory.textures--}function V(S){const v=S.texture,O=i.get(S),ee=i.get(v);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let te=0;te<O.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(O.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)t.deleteFramebuffer(O.__webglFramebuffer[Q]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Q=0,te=v.length;Q<te;Q++){const ye=i.get(v[Q]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(v[Q])}i.remove(v),i.remove(S)}let q=0;function ne(){q=0}function L(){const S=q;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),q+=1,S}function N(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function G(S,v){const O=i.get(S);if(S.isVideoTexture&&Be(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,S,v);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+v)}function Y(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ae(O,S,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+v)}function W(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ae(O,S,v);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+v)}function $(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){_e(O,S,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+v)}const j={[Tl]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[bl]:t.MIRRORED_REPEAT},H={[rn]:t.NEAREST,[Du]:t.NEAREST_MIPMAP_NEAREST,[Uc]:t.NEAREST_MIPMAP_LINEAR,[un]:t.LINEAR,[n_]:t.LINEAR_MIPMAP_NEAREST,[da]:t.LINEAR_MIPMAP_LINEAR},ie={[p_]:t.NEVER,[M_]:t.ALWAYS,[m_]:t.LESS,[hp]:t.LEQUAL,[g_]:t.EQUAL,[x_]:t.GEQUAL,[__]:t.GREATER,[v_]:t.NOTEQUAL};function z(S,v,O){if(O?(t.texParameteri(S,t.TEXTURE_WRAP_S,j[v.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,j[v.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,j[v.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,H[v.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,H[v.minFilter])):(t.texParameteri(S,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(S,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(v.wrapS!==Xn||v.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,t.TEXTURE_MAG_FILTER,C(v.magFilter)),t.texParameteri(S,t.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==rn&&v.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===rn||v.minFilter!==Uc&&v.minFilter!==da||v.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(t.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function K(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));const ee=v.source;let Q=f.get(ee);Q===void 0&&(Q={},f.set(ee,Q));const te=N(v);if(te!==S.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[te].usedTimes++;const ye=Q[S.__cacheKey];ye!==void 0&&(Q[S.__cacheKey].usedTimes--,ye.usedTimes===0&&T(v)),S.__cacheKey=te,S.__webglTexture=Q[te].texture}return O}function ae(S,v,O){let ee=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=t.TEXTURE_3D);const Q=K(S,v),te=v.source;n.bindTexture(ee,S.__webglTexture,t.TEXTURE0+O);const ye=i.get(te);if(te.version!==ye.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const ue=ot.getPrimaries(ot.workingColorSpace),me=v.colorSpace===Dn?null:ot.getPrimaries(v.colorSpace),Ue=v.colorSpace===Dn||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const qe=u(v)&&p(v.image)===!1;let J=_(v.image,qe,!1,r.maxTextureSize);J=ve(v,J);const at=p(J)||o,Je=s.convert(v.format,v.colorSpace);let ze=s.convert(v.type),Te=w(v.internalFormat,Je,ze,v.colorSpace,v.isVideoTexture);z(ee,v,at);let ge;const We=v.mipmaps,st=o&&v.isVideoTexture!==!0&&Te!==op,bt=ye.__version===void 0||Q===!0,$e=D(v,J,at);if(v.isDepthTexture)Te=t.DEPTH_COMPONENT,o?v.type===Xi?Te=t.DEPTH_COMPONENT32F:v.type===Wi?Te=t.DEPTH_COMPONENT24:v.type===Tr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:v.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===br&&Te===t.DEPTH_COMPONENT&&v.type!==lh&&v.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Wi,ze=s.convert(v.type)),v.format===xs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,v.type!==Tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Tr,ze=s.convert(v.type))),bt&&(st?n.texStorage2D(t.TEXTURE_2D,1,Te,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Te,J.width,J.height,0,Je,ze,null));else if(v.isDataTexture)if(We.length>0&&at){st&&bt&&n.texStorage2D(t.TEXTURE_2D,$e,Te,We[0].width,We[0].height);for(let re=0,R=We.length;re<R;re++)ge=We[re],st?n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,Je,ze,ge.data):n.texImage2D(t.TEXTURE_2D,re,Te,ge.width,ge.height,0,Je,ze,ge.data);v.generateMipmaps=!1}else st?(bt&&n.texStorage2D(t.TEXTURE_2D,$e,Te,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Je,ze,J.data)):n.texImage2D(t.TEXTURE_2D,0,Te,J.width,J.height,0,Je,ze,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){st&&bt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$e,Te,We[0].width,We[0].height,J.depth);for(let re=0,R=We.length;re<R;re++)ge=We[re],v.format!==qn?Je!==null?st?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,J.depth,Je,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,J.depth,Je,ze,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Te,ge.width,ge.height,J.depth,0,Je,ze,ge.data)}else{st&&bt&&n.texStorage2D(t.TEXTURE_2D,$e,Te,We[0].width,We[0].height);for(let re=0,R=We.length;re<R;re++)ge=We[re],v.format!==qn?Je!==null?st?n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,Je,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,Je,ze,ge.data):n.texImage2D(t.TEXTURE_2D,re,Te,ge.width,ge.height,0,Je,ze,ge.data)}else if(v.isDataArrayTexture)st?(bt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$e,Te,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Je,ze,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,Je,ze,J.data);else if(v.isData3DTexture)st?(bt&&n.texStorage3D(t.TEXTURE_3D,$e,Te,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Je,ze,J.data)):n.texImage3D(t.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,Je,ze,J.data);else if(v.isFramebufferTexture){if(bt)if(st)n.texStorage2D(t.TEXTURE_2D,$e,Te,J.width,J.height);else{let re=J.width,R=J.height;for(let oe=0;oe<$e;oe++)n.texImage2D(t.TEXTURE_2D,oe,Te,re,R,0,Je,ze,null),re>>=1,R>>=1}}else if(We.length>0&&at){st&&bt&&n.texStorage2D(t.TEXTURE_2D,$e,Te,We[0].width,We[0].height);for(let re=0,R=We.length;re<R;re++)ge=We[re],st?n.texSubImage2D(t.TEXTURE_2D,re,0,0,Je,ze,ge):n.texImage2D(t.TEXTURE_2D,re,Te,Je,ze,ge);v.generateMipmaps=!1}else st?(bt&&n.texStorage2D(t.TEXTURE_2D,$e,Te,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Je,ze,J)):n.texImage2D(t.TEXTURE_2D,0,Te,Je,ze,J);b(v,at)&&M(ee),ye.__version=te.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _e(S,v,O){if(v.image.length!==6)return;const ee=K(S,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+O);const te=i.get(Q);if(Q.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const ye=ot.getPrimaries(ot.workingColorSpace),ue=v.colorSpace===Dn?null:ot.getPrimaries(v.colorSpace),me=v.colorSpace===Dn||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,qe=v.image[0]&&v.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!Ue&&!qe?J[re]=_(v.image[re],!1,!0,r.maxCubemapSize):J[re]=qe?v.image[re].image:v.image[re],J[re]=ve(v,J[re]);const at=J[0],Je=p(at)||o,ze=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),ge=w(v.internalFormat,ze,Te,v.colorSpace),We=o&&v.isVideoTexture!==!0,st=te.__version===void 0||ee===!0;let bt=D(v,at,Je);z(t.TEXTURE_CUBE_MAP,v,Je);let $e;if(Ue){We&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,bt,ge,at.width,at.height);for(let re=0;re<6;re++){$e=J[re].mipmaps;for(let R=0;R<$e.length;R++){const oe=$e[R];v.format!==qn?ze!==null?We?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,0,0,oe.width,oe.height,ze,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,0,0,oe.width,oe.height,ze,Te,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R,ge,oe.width,oe.height,0,ze,Te,oe.data)}}}else{$e=v.mipmaps,We&&st&&($e.length>0&&bt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,bt,ge,J[0].width,J[0].height));for(let re=0;re<6;re++)if(qe){We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,ze,Te,J[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,J[re].width,J[re].height,0,ze,Te,J[re].data);for(let R=0;R<$e.length;R++){const ce=$e[R].image[re].image;We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,0,0,ce.width,ce.height,ze,Te,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,ge,ce.width,ce.height,0,ze,Te,ce.data)}}else{We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,Te,J[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,ze,Te,J[re]);for(let R=0;R<$e.length;R++){const oe=$e[R];We?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,0,0,ze,Te,oe.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,R+1,ge,ze,Te,oe.image[re])}}}b(v,Je)&&M(t.TEXTURE_CUBE_MAP),te.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function xe(S,v,O,ee,Q,te){const ye=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),me=w(O.internalFormat,ye,ue,O.colorSpace);if(!i.get(v).__hasExternalTextures){const qe=Math.max(1,v.width>>te),J=Math.max(1,v.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,me,qe,J,v.depth,0,ye,ue,null):n.texImage2D(Q,te,me,qe,J,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),he(v)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Q,i.get(O).__webglTexture,0,X(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,Q,i.get(O).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(S,v,O){if(t.bindRenderbuffer(t.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let ee=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||he(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Xi?ee=t.DEPTH_COMPONENT32F:Q.type===Wi&&(ee=t.DEPTH_COMPONENT24));const te=X(v);he(v)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ee,v.width,v.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ee,v.width,v.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,v.width,v.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const ee=X(v);O&&he(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,v.width,v.height):he(v)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,S)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],ye=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),me=w(te.internalFormat,ye,ue,te.colorSpace),Ue=X(v);O&&he(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,me,v.width,v.height):he(v)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,me,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,me,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,Q=X(v);if(v.depthTexture.format===br)he(v)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(v.depthTexture.format===xs)he(v)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function we(S){const v=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=t.createRenderbuffer(),Pe(v.__webglDepthbuffer[ee],S,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=t.createRenderbuffer(),Pe(v.__webglDepthbuffer,S,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(S,v,O){const ee=i.get(S);v!==void 0&&xe(ee.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&we(S)}function I(S){const v=S.texture,O=i.get(S),ee=i.get(v);S.addEventListener("dispose",Z),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=v.version,a.memory.textures++);const Q=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,ye=p(S)||o;if(Q){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let me=0;me<v.mipmaps.length;me++)O.__webglFramebuffer[ue][me]=t.createFramebuffer()}else O.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[ue]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const ue=S.texture;for(let me=0,Ue=ue.length;me<Ue;me++){const qe=i.get(ue[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&he(S)===!1){const ue=te?v:[v];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const Ue=ue[me];O.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const qe=s.convert(Ue.format,Ue.colorSpace),J=s.convert(Ue.type),at=w(Ue.internalFormat,qe,J,Ue.colorSpace,S.isXRRenderTarget===!0),Je=X(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,at,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,O.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),z(t.TEXTURE_CUBE_MAP,v,ye);for(let ue=0;ue<6;ue++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)xe(O.__webglFramebuffer[ue][me],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else xe(O.__webglFramebuffer[ue],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);b(v,ye)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const ue=S.texture;for(let me=0,Ue=ue.length;me<Ue;me++){const qe=ue[me],J=i.get(qe);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),z(t.TEXTURE_2D,qe,ye),xe(O.__webglFramebuffer,S,qe,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),b(qe,ye)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ue=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ee.__webglTexture),z(ue,v,ye),o&&v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)xe(O.__webglFramebuffer[me],S,v,t.COLOR_ATTACHMENT0,ue,me);else xe(O.__webglFramebuffer,S,v,t.COLOR_ATTACHMENT0,ue,0);b(v,ye)&&M(ue),n.unbindTexture()}S.depthBuffer&&we(S)}function Lt(S){const v=p(S)||o,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,Q=O.length;ee<Q;ee++){const te=O[ee];if(b(te,v)){const ye=S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(te).__webglTexture;n.bindTexture(ye,ue),M(ye),n.unbindTexture()}}}function Se(S){if(o&&S.samples>0&&he(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,ee=S.height;let Q=t.COLOR_BUFFER_BIT;const te=[],ye=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(S),me=S.isWebGLMultipleRenderTargets===!0;if(me)for(let Ue=0;Ue<v.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ue=0;Ue<v.length;Ue++){te.push(t.COLOR_ATTACHMENT0+Ue),S.depthBuffer&&te.push(ye);const qe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(qe===!1&&(S.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ue]),qe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),me){const J=i.get(v[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ue=0;Ue<v.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ue]);const qe=i.get(v[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function X(S){return Math.min(r.maxSamples,S.samples)}function he(S){const v=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Be(S){const v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function ve(S,v){const O=S.colorSpace,ee=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===wl||O!==Di&&O!==Dn&&(ot.getTransfer(O)===dt?o===!1?e.has("EXT_sRGB")===!0&&ee===qn?(S.format=wl,S.minFilter=un,S.generateMipmaps=!1):v=dp.sRGBToLinear(v):(ee!==qn||Q!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ne,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=Ve,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=he}function S3(t,e,n){const i=n.isWebGL2;function r(s,a=Dn){let o;const c=ot.getTransfer(a);if(s===Yi)return t.UNSIGNED_BYTE;if(s===np)return t.UNSIGNED_SHORT_4_4_4_4;if(s===ip)return t.UNSIGNED_SHORT_5_5_5_1;if(s===i_)return t.BYTE;if(s===r_)return t.SHORT;if(s===lh)return t.UNSIGNED_SHORT;if(s===tp)return t.INT;if(s===Wi)return t.UNSIGNED_INT;if(s===Xi)return t.FLOAT;if(s===fa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===s_)return t.ALPHA;if(s===qn)return t.RGBA;if(s===a_)return t.LUMINANCE;if(s===o_)return t.LUMINANCE_ALPHA;if(s===br)return t.DEPTH_COMPONENT;if(s===xs)return t.DEPTH_STENCIL;if(s===wl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===c_)return t.RED;if(s===rp)return t.RED_INTEGER;if(s===l_)return t.RG;if(s===sp)return t.RG_INTEGER;if(s===ap)return t.RGBA_INTEGER;if(s===Dc||s===Ic||s===Nc||s===Fc)if(c===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Dc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Dc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Iu||s===Nu||s===Fu||s===Ou)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Iu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ou)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===op)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bu||s===ku)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bu)return c===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ku)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zu||s===Gu||s===Vu||s===Hu||s===Wu||s===Xu||s===qu||s===ju||s===Yu||s===$u||s===Ku||s===Zu||s===Ju||s===Qu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ju)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$u)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ku)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ju)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qu)return c===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oc||s===ed||s===td)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Oc)return c===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ed)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===td)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===h_||s===nd||s===id||s===rd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Oc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===nd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===id)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Tr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class y3 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ho extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E3={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E3)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class T3 extends Us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const _=n.getContextAttributes();let p=null,u=null;const b=[],M=[],w=new it;let D=null;const C=new Pn;C.layers.enable(1),C.viewport=new jt;const A=new Pn;A.layers.enable(2),A.viewport=new jt;const Z=[C,A],y=new y3;y.layers.enable(1),y.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=b[z];return K===void 0&&(K=new cl,b[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=b[z];return K===void 0&&(K=new cl,b[z]=K),K.getGripSpace()},this.getHand=function(z){let K=b[z];return K===void 0&&(K=new cl,b[z]=K),K.getHandSpace()};function q(z){const K=M.indexOf(z.inputSource);if(K===-1)return;const ae=b[K];ae!==void 0&&(ae.update(z.inputSource,z.frame,l||a),ae.dispatchEvent({type:z.type,data:z.inputSource}))}function ne(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",L);for(let z=0;z<b.length;z++){const K=M[z];K!==null&&(M[z]=null,b[z].disconnect(K))}T=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Ur(m.framebufferWidth,m.framebufferHeight,{format:qn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ae=null,_e=null;_.depth&&(_e=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=_.stencil?xs:br,ae=_.stencil?Tr:Wi);const xe={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Ur(f.textureWidth,f.textureHeight,{format:qn,type:Yi,depthTexture:new bp(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(z){for(let K=0;K<z.removed.length;K++){const ae=z.removed[K],_e=M.indexOf(ae);_e>=0&&(M[_e]=null,b[_e].disconnect(ae))}for(let K=0;K<z.added.length;K++){const ae=z.added[K];let _e=M.indexOf(ae);if(_e===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=M.length){M.push(ae),_e=Pe;break}else if(M[Pe]===null){M[Pe]=ae,_e=Pe;break}if(_e===-1)break}const xe=b[_e];xe&&xe.connect(ae)}}const N=new U,G=new U;function Y(z,K,ae){N.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(ae.matrixWorld);const _e=N.distanceTo(G),xe=K.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,De=xe[14]/(xe[10]-1),we=xe[14]/(xe[10]+1),Ve=(xe[9]+1)/xe[5],I=(xe[9]-1)/xe[5],Lt=(xe[8]-1)/xe[0],Se=(Pe[8]+1)/Pe[0],X=De*Lt,he=De*Se,Be=_e/(-Lt+Se),ve=Be*-Lt;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ve),z.translateZ(Be),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const S=De+Be,v=we+Be,O=X-ve,ee=he+(_e-ve),Q=Ve*we/v*S,te=I*we/v*S;z.projectionMatrix.makePerspective(O,ee,Q,te,S,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function W(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;y.near=A.near=C.near=z.near,y.far=A.far=C.far=z.far,(T!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,V=y.far);const K=z.parent,ae=y.cameras;W(y,K);for(let _e=0;_e<ae.length;_e++)W(ae[_e],K);ae.length===2?Y(y,C,A):y.projectionMatrix.copy(C.projectionMatrix),$(z,y,K)};function $(z,K,ae){ae===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(ae.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Al*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let j=null;function H(z,K){if(h=K.getViewerPose(l||a),g=K,h!==null){const ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let xe=0;xe<ae.length;xe++){const Pe=ae[xe];let De=null;if(m!==null)De=m.getViewport(Pe);else{const Ve=d.getViewSubImage(f,Pe);De=Ve.viewport,xe===0&&(e.setRenderTargetTextures(u,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(u))}let we=Z[xe];we===void 0&&(we=new Pn,we.layers.enable(xe),we.viewport=new jt,Z[xe]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),xe===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(we)}}for(let ae=0;ae<b.length;ae++){const _e=M[ae],xe=b[ae];_e!==null&&xe!==void 0&&xe.update(_e,K,l||a)}j&&j(z,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const ie=new Ep;ie.setAnimationLoop(H),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function b3(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Mp(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,M,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,M):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===fn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===fn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=M*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w3(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,M){const w=M.program;i.uniformBlockBinding(b,w)}function l(b,M){let w=r[b.id];w===void 0&&(g(b),w=h(b),r[b.id]=w,b.addEventListener("dispose",p));const D=M.program;i.updateUBOMapping(b,D);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function h(b){const M=d();b.__bindingPointIndex=M;const w=t.createBuffer(),D=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,D,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],w=b.uniforms,D=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let C=0,A=w.length;C<A;C++){const Z=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,T=Z.length;y<T;y++){const V=Z[y];if(m(V,C,y,D)===!0){const q=V.__offset,ne=Array.isArray(V.value)?V.value:[V.value];let L=0;for(let N=0;N<ne.length;N++){const G=ne[N],Y=_(G);typeof G=="number"||typeof G=="boolean"?(V.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,q+L,V.__data)):G.isMatrix3?(V.__data[0]=G.elements[0],V.__data[1]=G.elements[1],V.__data[2]=G.elements[2],V.__data[3]=0,V.__data[4]=G.elements[3],V.__data[5]=G.elements[4],V.__data[6]=G.elements[5],V.__data[7]=0,V.__data[8]=G.elements[6],V.__data[9]=G.elements[7],V.__data[10]=G.elements[8],V.__data[11]=0):(G.toArray(V.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,M,w,D){const C=b.value,A=M+"_"+w;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{const Z=D[A];if(typeof C=="number"||typeof C=="boolean"){if(Z!==C)return D[A]=C,!0}else if(Z.equals(C)===!1)return Z.copy(C),!0}return!1}function g(b){const M=b.uniforms;let w=0;const D=16;for(let A=0,Z=M.length;A<Z;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,V=y.length;T<V;T++){const q=y[T],ne=Array.isArray(q.value)?q.value:[q.value];for(let L=0,N=ne.length;L<N;L++){const G=ne[L],Y=_(G),W=w%D;W!==0&&D-W<Y.boundary&&(w+=D-W),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=Y.storage}}}const C=w%D;return C>0&&(w+=D-C),b.__size=w,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Pp{constructor(e={}){const{canvas:n=y_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;const M=this;let w=!1,D=0,C=0,A=null,Z=-1,y=null;const T=new jt,V=new jt;let q=null;const ne=new Qe(0);let L=0,N=n.width,G=n.height,Y=1,W=null,$=null;const j=new jt(0,0,N,G),H=new jt(0,0,N,G);let ie=!1;const z=new dh;let K=!1,ae=!1,_e=null;const xe=new It,Pe=new it,De=new U,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?Y:1}let I=i;function Lt(x,P){for(let B=0;B<x.length;B++){const k=x[B],F=n.getContext(k,P);if(F!==null)return F}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ch}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",R,!1),n.addEventListener("webglcontextcreationerror",oe,!1),I===null){const P=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&P.shift(),I=Lt(P,x),I===null)throw Lt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Se,X,he,Be,ve,S,v,O,ee,Q,te,ye,ue,me,Ue,qe,J,at,Je,ze,Te,ge,We,st;function bt(){Se=new Fv(I),X=new Lv(I,Se,e),Se.init(X),ge=new S3(I,Se,X),he=new x3(I,Se,X),Be=new kv(I),ve=new s3,S=new M3(I,Se,he,ve,X,ge,Be),v=new Uv(M),O=new Nv(M),ee=new j_(I,X),We=new Rv(I,Se,ee,X),Q=new Ov(I,ee,Be,We),te=new Hv(I,Q,ee,Be),Je=new Vv(I,X,S),qe=new Pv(ve),ye=new r3(M,v,O,Se,X,We,qe),ue=new b3(M,ve),me=new o3,Ue=new f3(Se,X),at=new Av(M,v,O,he,te,f,c),J=new v3(M,te,X),st=new w3(I,Be,X,he),ze=new Cv(I,Se,Be,X),Te=new Bv(I,Se,Be,X),Be.programs=ye.programs,M.capabilities=X,M.extensions=Se,M.properties=ve,M.renderLists=me,M.shadowMap=J,M.state=he,M.info=Be}bt();const $e=new T3(M,I);this.xr=$e,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=Se.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Se.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(N,G,!1))},this.getSize=function(x){return x.set(N,G)},this.setSize=function(x,P,B=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=x,G=P,n.width=Math.floor(x*Y),n.height=Math.floor(P*Y),B===!0&&(n.style.width=x+"px",n.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(N*Y,G*Y).floor()},this.setDrawingBufferSize=function(x,P,B){N=x,G=P,Y=B,n.width=Math.floor(x*B),n.height=Math.floor(P*B),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,P,B,k){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,P,B,k),he.viewport(T.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(H)},this.setScissor=function(x,P,B,k){x.isVector4?H.set(x.x,x.y,x.z,x.w):H.set(x,P,B,k),he.scissor(V.copy(H).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(x){he.setScissorTest(ie=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){$=x},this.getClearColor=function(x){return x.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(x=!0,P=!0,B=!0){let k=0;if(x){let F=!1;if(A!==null){const de=A.texture.format;F=de===ap||de===sp||de===rp}if(F){const de=A.texture.type,Ee=de===Yi||de===Wi||de===lh||de===Tr||de===np||de===ip,Ce=at.getClearColor(),Fe=at.getClearAlpha(),je=Ce.r,Ge=Ce.g,He=Ce.b;Ee?(m[0]=je,m[1]=Ge,m[2]=He,m[3]=Fe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=je,g[1]=Ge,g[2]=He,g[3]=Fe,I.clearBufferiv(I.COLOR,0,g))}else k|=I.COLOR_BUFFER_BIT}P&&(k|=I.DEPTH_BUFFER_BIT),B&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",R,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),Ue.dispose(),ve.dispose(),v.dispose(),O.dispose(),te.dispose(),We.dispose(),st.dispose(),ye.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",en),$e.removeEventListener("sessionend",ht),_e&&(_e.dispose(),_e=null),tn.stop()};function re(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=Be.autoReset,P=J.enabled,B=J.autoUpdate,k=J.needsUpdate,F=J.type;bt(),Be.autoReset=x,J.enabled=P,J.autoUpdate=B,J.needsUpdate=k,J.type=F}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ce(x){const P=x.target;P.removeEventListener("dispose",ce),Ie(P)}function Ie(x){Ae(x),ve.remove(x)}function Ae(x){const P=ve.get(x).programs;P!==void 0&&(P.forEach(function(B){ye.releaseProgram(B)}),x.isShaderMaterial&&ye.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,B,k,F,de){P===null&&(P=we);const Ee=F.isMesh&&F.matrixWorld.determinant()<0,Ce=g0(x,P,B,k,F);he.setMaterial(k,Ee);let Fe=B.index,je=1;if(k.wireframe===!0){if(Fe=Q.getWireframeAttribute(B),Fe===void 0)return;je=2}const Ge=B.drawRange,He=B.attributes.position;let Pt=Ge.start*je,vn=(Ge.start+Ge.count)*je;de!==null&&(Pt=Math.max(Pt,de.start*je),vn=Math.min(vn,(de.start+de.count)*je)),Fe!==null?(Pt=Math.max(Pt,0),vn=Math.min(vn,Fe.count)):He!=null&&(Pt=Math.max(Pt,0),vn=Math.min(vn,He.count));const Vt=vn-Pt;if(Vt<0||Vt===1/0)return;We.setup(F,k,Ce,B,Fe);let vi,yt=ze;if(Fe!==null&&(vi=ee.get(Fe),yt=Te,yt.setIndex(vi)),F.isMesh)k.wireframe===!0?(he.setLineWidth(k.wireframeLinewidth*Ve()),yt.setMode(I.LINES)):yt.setMode(I.TRIANGLES);else if(F.isLine){let Ke=k.linewidth;Ke===void 0&&(Ke=1),he.setLineWidth(Ke*Ve()),F.isLineSegments?yt.setMode(I.LINES):F.isLineLoop?yt.setMode(I.LINE_LOOP):yt.setMode(I.LINE_STRIP)}else F.isPoints?yt.setMode(I.POINTS):F.isSprite&&yt.setMode(I.TRIANGLES);if(F.isBatchedMesh)yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)yt.renderInstances(Pt,Vt,F.count);else if(B.isInstancedBufferGeometry){const Ke=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Rc=Math.min(B.instanceCount,Ke);yt.renderInstances(Pt,Vt,Rc)}else yt.render(Pt,Vt)};function ct(x,P,B){x.transparent===!0&&x.side===li&&x.forceSinglePass===!1?(x.side=fn,x.needsUpdate=!0,Ga(x,P,B),x.side=Qi,x.needsUpdate=!0,Ga(x,P,B),x.side=li):Ga(x,P,B)}this.compile=function(x,P,B=null){B===null&&(B=x),p=Ue.get(B),p.init(),b.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),x!==B&&x.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(M._useLegacyLights);const k=new Set;return x.traverse(function(F){const de=F.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ce=de[Ee];ct(Ce,B,F),k.add(Ce)}else ct(de,B,F),k.add(de)}),b.pop(),p=null,k},this.compileAsync=function(x,P,B=null){const k=this.compile(x,P,B);return new Promise(F=>{function de(){if(k.forEach(function(Ee){ve.get(Ee).currentProgram.isReady()&&k.delete(Ee)}),k.size===0){F(x);return}setTimeout(de,10)}Se.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let lt=null;function Gt(x){lt&&lt(x)}function en(){tn.stop()}function ht(){tn.start()}const tn=new Ep;tn.setAnimationLoop(Gt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(x){lt=x,$e.setAnimationLoop(x),x===null?tn.stop():tn.start()},$e.addEventListener("sessionstart",en),$e.addEventListener("sessionend",ht),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(P),P=$e.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,P,A),p=Ue.get(x,b.length),p.init(),b.push(p),xe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),z.setFromProjectionMatrix(xe),ae=this.localClippingEnabled,K=qe.init(this.clippingPlanes,ae),_=me.get(x,u.length),_.init(),u.push(_),ti(x,P,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(W,$),this.info.render.frame++,K===!0&&qe.beginShadows();const B=p.state.shadowsArray;if(J.render(B,x,P),K===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(_,x),p.setupLights(M._useLegacyLights),P.isArrayCamera){const k=P.cameras;for(let F=0,de=k.length;F<de;F++){const Ee=k[F];Su(_,x,Ee,Ee.viewport)}}else Su(_,x,P);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(M,x,P),We.resetDefaultState(),Z=-1,y=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function ti(x,P,B,k){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||z.intersectsSprite(x)){k&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xe);const Ee=te.update(x),Ce=x.material;Ce.visible&&_.push(x,Ee,Ce,B,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||z.intersectsObject(x))){const Ee=te.update(x),Ce=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),De.copy(Ee.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(xe)),Array.isArray(Ce)){const Fe=Ee.groups;for(let je=0,Ge=Fe.length;je<Ge;je++){const He=Fe[je],Pt=Ce[He.materialIndex];Pt&&Pt.visible&&_.push(x,Ee,Pt,B,De.z,He)}}else Ce.visible&&_.push(x,Ee,Ce,B,De.z,null)}}const de=x.children;for(let Ee=0,Ce=de.length;Ee<Ce;Ee++)ti(de[Ee],P,B,k)}function Su(x,P,B,k){const F=x.opaque,de=x.transmissive,Ee=x.transparent;p.setupLightsView(B),K===!0&&qe.setGlobalState(M.clippingPlanes,B),de.length>0&&m0(F,de,P,B),k&&he.viewport(T.copy(k)),F.length>0&&za(F,P,B),de.length>0&&za(de,P,B),Ee.length>0&&za(Ee,P,B),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function m0(x,P,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const de=X.isWebGL2;_e===null&&(_e=new Ur(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?fa:Yi,minFilter:da,samples:de?4:0})),M.getDrawingBufferSize(Pe),de?_e.setSize(Pe.x,Pe.y):_e.setSize(Rl(Pe.x),Rl(Pe.y));const Ee=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(ne),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const Ce=M.toneMapping;M.toneMapping=ji,za(x,B,k),S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e);let Fe=!1;for(let je=0,Ge=P.length;je<Ge;je++){const He=P[je],Pt=He.object,vn=He.geometry,Vt=He.material,vi=He.group;if(Vt.side===li&&Pt.layers.test(k.layers)){const yt=Vt.side;Vt.side=fn,Vt.needsUpdate=!0,yu(Pt,B,k,vn,Vt,vi),Vt.side=yt,Vt.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e)),M.setRenderTarget(Ee),M.setClearColor(ne,L),M.toneMapping=Ce}function za(x,P,B){const k=P.isScene===!0?P.overrideMaterial:null;for(let F=0,de=x.length;F<de;F++){const Ee=x[F],Ce=Ee.object,Fe=Ee.geometry,je=k===null?Ee.material:k,Ge=Ee.group;Ce.layers.test(B.layers)&&yu(Ce,P,B,Fe,je,Ge)}}function yu(x,P,B,k,F,de){x.onBeforeRender(M,P,B,k,F,de),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(M,P,B,k,x,de),F.transparent===!0&&F.side===li&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,M.renderBufferDirect(B,P,k,F,x,de),F.side=Qi,F.needsUpdate=!0,M.renderBufferDirect(B,P,k,F,x,de),F.side=li):M.renderBufferDirect(B,P,k,F,x,de),x.onAfterRender(M,P,B,k,F,de)}function Ga(x,P,B){P.isScene!==!0&&(P=we);const k=ve.get(x),F=p.state.lights,de=p.state.shadowsArray,Ee=F.state.version,Ce=ye.getParameters(x,F.state,de,P,B),Fe=ye.getProgramCacheKey(Ce);let je=k.programs;k.environment=x.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||k.environment),je===void 0&&(x.addEventListener("dispose",ce),je=new Map,k.programs=je);let Ge=je.get(Fe);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Ee)return Tu(x,Ce),Ge}else Ce.uniforms=ye.getUniforms(x),x.onBuild(B,Ce,M),x.onBeforeCompile(Ce,M),Ge=ye.acquireProgram(Ce,Fe),je.set(Fe,Ge),k.uniforms=Ce.uniforms;const He=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(He.clippingPlanes=qe.uniform),Tu(x,Ce),k.needsLights=v0(x),k.lightsStateVersion=Ee,k.needsLights&&(He.ambientLightColor.value=F.state.ambient,He.lightProbe.value=F.state.probe,He.directionalLights.value=F.state.directional,He.directionalLightShadows.value=F.state.directionalShadow,He.spotLights.value=F.state.spot,He.spotLightShadows.value=F.state.spotShadow,He.rectAreaLights.value=F.state.rectArea,He.ltc_1.value=F.state.rectAreaLTC1,He.ltc_2.value=F.state.rectAreaLTC2,He.pointLights.value=F.state.point,He.pointLightShadows.value=F.state.pointShadow,He.hemisphereLights.value=F.state.hemi,He.directionalShadowMap.value=F.state.directionalShadowMap,He.directionalShadowMatrix.value=F.state.directionalShadowMatrix,He.spotShadowMap.value=F.state.spotShadowMap,He.spotLightMatrix.value=F.state.spotLightMatrix,He.spotLightMap.value=F.state.spotLightMap,He.pointShadowMap.value=F.state.pointShadowMap,He.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ge,k.uniformsList=null,Ge}function Eu(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=vo.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Tu(x,P){const B=ve.get(x);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function g0(x,P,B,k,F){P.isScene!==!0&&(P=we),S.resetTextureUnits();const de=P.fog,Ee=k.isMeshStandardMaterial?P.environment:null,Ce=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Di,Fe=(k.isMeshStandardMaterial?O:v).get(k.envMap||Ee),je=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ge=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),He=!!B.morphAttributes.position,Pt=!!B.morphAttributes.normal,vn=!!B.morphAttributes.color;let Vt=ji;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Vt=M.toneMapping);const vi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,yt=vi!==void 0?vi.length:0,Ke=ve.get(k),Rc=p.state.lights;if(K===!0&&(ae===!0||x!==y)){const wn=x===y&&k.id===Z;qe.setState(k,x,wn)}let wt=!1;k.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Rc.state.version||Ke.outputColorSpace!==Ce||F.isBatchedMesh&&Ke.batching===!1||!F.isBatchedMesh&&Ke.batching===!0||F.isInstancedMesh&&Ke.instancing===!1||!F.isInstancedMesh&&Ke.instancing===!0||F.isSkinnedMesh&&Ke.skinning===!1||!F.isSkinnedMesh&&Ke.skinning===!0||F.isInstancedMesh&&Ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ke.instancingColor===!1&&F.instanceColor!==null||Ke.envMap!==Fe||k.fog===!0&&Ke.fog!==de||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==qe.numPlanes||Ke.numIntersection!==qe.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Ge||Ke.morphTargets!==He||Ke.morphNormals!==Pt||Ke.morphColors!==vn||Ke.toneMapping!==Vt||X.isWebGL2===!0&&Ke.morphTargetsCount!==yt)&&(wt=!0):(wt=!0,Ke.__version=k.version);let ar=Ke.currentProgram;wt===!0&&(ar=Ga(k,P,F));let bu=!1,Gs=!1,Cc=!1;const Zt=ar.getUniforms(),or=Ke.uniforms;if(he.useProgram(ar.program)&&(bu=!0,Gs=!0,Cc=!0),k.id!==Z&&(Z=k.id,Gs=!0),bu||y!==x){Zt.setValue(I,"projectionMatrix",x.projectionMatrix),Zt.setValue(I,"viewMatrix",x.matrixWorldInverse);const wn=Zt.map.cameraPosition;wn!==void 0&&wn.setValue(I,De.setFromMatrixPosition(x.matrixWorld)),X.logarithmicDepthBuffer&&Zt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Zt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Gs=!0,Cc=!0)}if(F.isSkinnedMesh){Zt.setOptional(I,F,"bindMatrix"),Zt.setOptional(I,F,"bindMatrixInverse");const wn=F.skeleton;wn&&(X.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Zt.setValue(I,"boneTexture",wn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Zt.setOptional(I,F,"batchingTexture"),Zt.setValue(I,"batchingTexture",F._matricesTexture,S));const Lc=B.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0&&X.isWebGL2===!0)&&Je.update(F,B,ar),(Gs||Ke.receiveShadow!==F.receiveShadow)&&(Ke.receiveShadow=F.receiveShadow,Zt.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(or.envMap.value=Fe,or.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Gs&&(Zt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ke.needsLights&&_0(or,Cc),de&&k.fog===!0&&ue.refreshFogUniforms(or,de),ue.refreshMaterialUniforms(or,k,Y,G,_e),vo.upload(I,Eu(Ke),or,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vo.upload(I,Eu(Ke),or,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Zt.setValue(I,"center",F.center),Zt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Zt.setValue(I,"normalMatrix",F.normalMatrix),Zt.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const wn=k.uniformsGroups;for(let Pc=0,x0=wn.length;Pc<x0;Pc++)if(X.isWebGL2){const wu=wn[Pc];st.update(wu,ar),st.bind(wu,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function _0(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function v0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,P,B){ve.get(x.texture).__webglTexture=P,ve.get(x.depthTexture).__webglTexture=B;const k=ve.get(x);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const B=ve.get(x);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,B=0){A=x,D=P,C=B;let k=!0,F=null,de=!1,Ee=!1;if(x){const Fe=ve.get(x);Fe.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(I.FRAMEBUFFER,null),k=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(x):Fe.__hasExternalTextures&&S.rebindTextures(x,ve.get(x.texture).__webglTexture,ve.get(x.depthTexture).__webglTexture);const je=x.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ee=!0);const Ge=ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ge[P])?F=Ge[P][B]:F=Ge[P],de=!0):X.isWebGL2&&x.samples>0&&S.useMultisampledRTT(x)===!1?F=ve.get(x).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[B]:F=Ge,T.copy(x.viewport),V.copy(x.scissor),q=x.scissorTest}else T.copy(j).multiplyScalar(Y).floor(),V.copy(H).multiplyScalar(Y).floor(),q=ie;if(he.bindFramebuffer(I.FRAMEBUFFER,F)&&X.drawBuffers&&k&&he.drawBuffers(x,F),he.viewport(T),he.scissor(V),he.setScissorTest(q),de){const Fe=ve.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,Fe.__webglTexture,B)}else if(Ee){const Fe=ve.get(x.texture),je=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,B||0,je)}Z=-1},this.readRenderTargetPixels=function(x,P,B,k,F,de,Ee){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){he.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const Fe=x.texture,je=Fe.format,Ge=Fe.type;if(je!==qn&&ge.convert(je)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ge===fa&&(Se.has("EXT_color_buffer_half_float")||X.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ge!==Yi&&ge.convert(Ge)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Xi&&(X.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-k&&B>=0&&B<=x.height-F&&I.readPixels(P,B,k,F,ge.convert(je),ge.convert(Ge),de)}finally{const Fe=A!==null?ve.get(A).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(x,P,B=0){const k=Math.pow(2,-B),F=Math.floor(P.image.width*k),de=Math.floor(P.image.height*k);S.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,x.x,x.y,F,de),he.unbindTexture()},this.copyTextureToTexture=function(x,P,B,k=0){const F=P.image.width,de=P.image.height,Ee=ge.convert(B.format),Ce=ge.convert(B.type);S.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,x.x,x.y,F,de,Ee,Ce,P.image.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,Ee,P.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,k,x.x,x.y,Ee,Ce,P.image),k===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(x,P,B,k,F=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=x.max.x-x.min.x+1,Ee=x.max.y-x.min.y+1,Ce=x.max.z-x.min.z+1,Fe=ge.convert(k.format),je=ge.convert(k.type);let Ge;if(k.isData3DTexture)S.setTexture3D(k,0),Ge=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)S.setTexture2DArray(k,0),Ge=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const He=I.getParameter(I.UNPACK_ROW_LENGTH),Pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vn=I.getParameter(I.UNPACK_SKIP_PIXELS),Vt=I.getParameter(I.UNPACK_SKIP_ROWS),vi=I.getParameter(I.UNPACK_SKIP_IMAGES),yt=B.isCompressedTexture?B.mipmaps[F]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Ge,F,P.x,P.y,P.z,de,Ee,Ce,Fe,je,yt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,F,P.x,P.y,P.z,de,Ee,Ce,Fe,yt.data)):I.texSubImage3D(Ge,F,P.x,P.y,P.z,de,Ee,Ce,Fe,je,yt),I.pixelStorei(I.UNPACK_ROW_LENGTH,He),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vi),F===0&&k.generateMipmaps&&I.generateMipmap(Ge),he.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,he.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===hh?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===ic?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?wr:cp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?qt:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class A3 extends Pp{}A3.prototype.isWebGL1Renderer=!0;class R3 extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ph extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jd=new U,Yd=new U,$d=new It,ll=new mp,uo=new rc;class C3 extends Kt{constructor(e=new mi,n=new ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jd.fromBufferAttribute(n,r-1),Yd.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jd.distanceTo(Yd);e.setAttribute("lineDistance",new $n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;$d.copy(r).invert(),ll.copy(e.ray).applyMatrix4($d);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new U,h=new U,d=new U,f=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let M=u,w=b-1;M<w;M+=m){const D=g.getX(M),C=g.getX(M+1);if(l.fromBufferAttribute(p,D),h.fromBufferAttribute(p,C),ll.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const Z=e.ray.origin.distanceTo(f);Z<e.near||Z>e.far||n.push({distance:Z,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let M=u,w=b-1;M<w;M+=m){if(l.fromBufferAttribute(p,M),h.fromBufferAttribute(p,M+1),ll.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Kd=new U,Zd=new U;class Up extends C3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Kd.fromBufferAttribute(n,r),Zd.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kd.distanceTo(Zd);e.setAttribute("lineDistance",new $n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L3 extends pn{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:un,this.magFilter=s!==void 0?s:un,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Jr extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dp extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const hl=new It,Jd=new U,Qd=new U;class P3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Jd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jd),Qd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qd),n.updateMatrixWorld(),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U3 extends P3{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D3 extends Dp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new U3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I3 extends Dp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class N3 extends Up{constructor(e=10,n=10,i=4473924,r=8947848){i=new Qe(i),r=new Qe(r);const s=n/2,a=e/n,o=e/2,c=[],l=[];for(let f=0,m=0,g=-o;f<=n;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=f===s?i:r;_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3}const h=new mi;h.setAttribute("position",new $n(c,3)),h.setAttribute("color",new $n(l,3));const d=new ph({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);class F3{constructor(e){Ye(this,"scene");Ye(this,"camera");Ye(this,"renderer");Ye(this,"sidebarWidth",340);const n=document.getElementById(e);if(!n)throw new Error(`Container #${e} not found`);this.scene=new R3,this.scene.background=new Qe(1118481),this.camera=new Pn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.5,4),this.renderer=new Pp({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),n.appendChild(this.renderer.domElement),this.updateCameraOffset();const i=new I3(16777215,.5);this.scene.add(i);const r=new D3(16777215,1);r.position.set(5,5,5),this.scene.add(r),window.addEventListener("resize",this.onWindowResize.bind(this))}updateCameraOffset(){const e=window.innerWidth,n=window.innerHeight,i=-this.sidebarWidth/2;this.camera.setViewOffset(e,n,i,0,e,n)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.updateCameraOffset(),this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}}var mh=typeof self<"u"?self:{};function Ip(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=mh,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function dr(){throw Error("Invalid UTF8")}function ef(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let fo,ul;const O3=typeof TextDecoder<"u";let B3;const k3=typeof TextEncoder<"u";function Np(t){if(k3)t=(B3||(B3=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(128>e)i[n++]=e;else{if(2048>e)i[n++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<t.length){const s=t.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var pa,Fp=Ip(610401301,!1),gh=Ip(572417392,!0);const tf=mh.navigator;function Ll(t){return!!Fp&&!!pa&&pa.brands.some(({brand:e})=>e&&e.indexOf(t)!=-1)}function Un(t){var e;return(e=mh.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Hi(){return!!Fp&&!!pa&&0<pa.brands.length}function dl(){return Hi()?Ll("Chromium"):(Un("Chrome")||Un("CriOS"))&&!(!Hi()&&Un("Edge"))||Un("Silk")}pa=tf&&tf.userAgentData||null;var z3=!Hi()&&(Un("Trident")||Un("MSIE"));!Un("Android")||dl(),dl(),Un("Safari")&&(dl()||!Hi()&&Un("Coast")||!Hi()&&Un("Opera")||!Hi()&&Un("Edge")||(Hi()?Ll("Microsoft Edge"):Un("Edg/"))||Hi()&&Ll("Opera"));var Op={},js=null;function G3(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,a){function o(m){for(;c<s.length;){var g=s.charAt(c++),_=js[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return m}Bp();for(var c=0;;){var l=o(-1),h=o(0),d=o(64),f=o(64);if(f===64&&l===-1)break;a(l<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),f!=64&&a(d<<6&192|f))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Bp(){if(!js){js={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=t.concat(e[n].split(""));Op[n]=i;for(var r=0;r<i.length;r++){var s=i[r];js[s]===void 0&&(js[s]=r)}}}}var kp=typeof Uint8Array<"u",zp=!z3&&typeof btoa=="function";function nf(t){if(!zp){var e;e===void 0&&(e=0),Bp(),e=Op[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],a=t[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,t.length-c){case 2:a=e[(15&(o=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const rf=/[-_.]/g,V3={"-":"+",_:"/",".":"="};function H3(t){return V3[t]||""}function Gp(t){if(!zp)return G3(t);rf.test(t)&&(t=t.replace(rf,H3)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function oc(t){return kp&&t!=null&&t instanceof Uint8Array}let W3;function cc(){return W3||(W3=new Uint8Array(0))}var Ss={};let X3;function Vp(t){if(t!==Ss)throw Error("illegal external caller")}function ys(){return X3||(X3=new $i(null,Ss))}function _h(t){Vp(Ss);var e=t.Z;return(e=e==null||oc(e)?e:typeof e=="string"?Gp(e):null)==null?e:t.Z=e}var $i=class{constructor(t,e){if(Vp(e),this.Z=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}wa(){const t=_h(this);return t?new Uint8Array(t):cc()}};function Hp(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function vh(){return Error("Failed to read varint, encoding is invalid.")}function Wp(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Xp(t){return t.length==0?ys():new $i(t,Ss)}function xh(t){if(typeof t=="string")return{buffer:Gp(t),L:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),L:!1};if(t.constructor===Uint8Array)return{buffer:t,L:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),L:!1};if(t.constructor===$i)return{buffer:_h(t)||cc(),L:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),L:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Mh(){return typeof BigInt=="function"}var Pl=!gh;let sf=!gh;const q3=typeof Uint8Array.prototype.slice=="function";let qp,ft=0,Dt=0;function Ar(t){const e=0>t;let n=(t=Math.abs(t))>>>0;if(t=Math.floor((t-n)/4294967296),e){const[i,r]=Eh(n,t);t=r,n=i}ft=n>>>0,Dt=t>>>0}function Sh(t){const e=qp||(qp=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Dt=0,ft=e.getUint32(0,!0)}function Ul(t,e){return 4294967296*e+(t>>>0)}function yh(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),t=Ul(t,e),n?-t:t}function zo(t,e){if(t>>>=0,2097151>=(e>>>=0))var n=""+(4294967296*e+t);else Mh()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,1e7<=t&&(n+=Math.floor(t/1e7),t%=1e7),1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),n=e+af(n)+af(t));return n}function af(t){return t=String(t),"0000000".slice(t.length)+t}function jp(){var t=ft,e=Dt;if(2147483648&e)if(Mh())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Eh(t,e);t="-"+zo(n,i)}else t=zo(t,e);return t}function lc(t){if(16>t.length)Ar(Number(t));else if(Mh())t=BigInt(t),ft=Number(t&BigInt(4294967295))>>>0,Dt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Dt=ft=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Dt*=1e6,ft=1e6*ft+s,4294967296<=ft&&(Dt+=Math.trunc(ft/4294967296),Dt>>>=0,ft>>>=0)}if(e){const[i,r]=Eh(ft,Dt);ft=i,Dt=r}}}function Eh(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Th(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(32>s&&128&n);for(32<s&&(r|=(127&n)>>4),s=3;32>s&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Rr(t,o),128>n)return e(i>>>0,r>>>0);throw vh()}function bh(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Rr(t,n),!!(127&e)}throw vh()}function er(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw vh();return Rr(t,n),r}function tr(t){return er(t)>>>0}function Dl(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],Rr(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function Il(t){var e=Dl(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:1/0*t:n==0?t*Math.pow(2,-149)*e:t*Math.pow(2,n-150)*(e+Math.pow(2,23))}function j3(t){return er(t)}function fl(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=xh(e),t.h=e.buffer,t.m=e.L,t.j=0,t.l=t.h.length,t.g=t.j)}function Rr(t,e){if(t.g=e,e>t.l)throw Wp(t.l,e)}function Yp(t,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Wp(e,t.l-n);return t.g=i,n}function $p(t,e){if(e==0)return ys();var n=Yp(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?cc():q3?t.slice(n,e):new Uint8Array(t.subarray(n,e))),Xp(n)}var of=[];function Kp(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=tr(t.g);if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw Hp(n,t.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function xo(t){switch(t.h){case 0:t.h!=0?xo(t):bh(t.g);break;case 1:Rr(t=t.g,t.g+8);break;case 2:if(t.h!=2)xo(t);else{var e=tr(t.g);Rr(t=t.g,t.g+e)}break;case 5:Rr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!Kp(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}xo(t)}break;default:throw Hp(t.h,t.l)}}function Pa(t,e,n){const i=t.g.l,r=tr(t.g),s=t.g.g+r;let a=s-i;if(0>=a&&(t.g.l=s,n(e,t,void 0,void 0,void 0),a=s-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function wh(t){var e=tr(t.g),n=Yp(t=t.g,e);if(t=t.h,O3){var i,r=t;(i=ul)||(i=ul=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(fo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),fo=!0}catch{fo=!1}}throw!fo&&(ul=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];128>a?n.push(a):224>a?s>=e?dr():(o=t[s++],194>a||(192&o)!=128?(s--,dr()):n.push((31&a)<<6|63&o)):240>a?s>=e-1?dr():(o=t[s++],(192&o)!=128||a===224&&160>o||a===237&&160<=o||(192&(i=t[s++]))!=128?(s--,dr()):n.push((15&a)<<12|(63&o)<<6|63&i)):244>=a?s>=e-2?dr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,dr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):dr(),8192<=n.length&&(c=ef(c,n),n.length=0)}s=ef(c,n)}return s}function Zp(t){const e=tr(t.g);return $p(t.g,e)}function hc(t,e,n){var i=tr(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var po=[];function cf(t){return t?/^\d+$/.test(t)?(lc(t),new lf(ft,Dt)):null:Y3||(Y3=new lf(0,0))}var lf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Y3;function hf(t){return t?/^-?\d+$/.test(t)?(lc(t),new uf(ft,Dt)):null:$3||($3=new uf(0,0))}var uf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let $3;function Go(t,e,n){for(;0<n||127<e;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ua(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function uc(t,e){if(0<=e)Ua(t,e);else{for(let n=0;9>n;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function ma(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Es(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Bn(t,e,n){Ua(t.g,8*e+n)}function Ah(t,e){return Bn(t,e,2),e=t.g.end(),Es(t,e),e.push(t.h),e}function Rh(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;127<n;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function dc(t,e,n){Bn(t,e,2),Ua(t.g,n.length),Es(t,t.g.end()),Es(t,n)}function Nl(t,e,n,i){n!=null&&(e=Ah(t,e),i(n,t),Rh(t,e))}class Ns{constructor(e,n,i,r){this.g=e,this.h=n,this.l=i,this.qa=r}}function an(t){return Array.prototype.slice.call(t)}function Jp(t){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():t}var ui=Jp(),df=Jp("0di"),fc=ui?(t,e)=>{t[ui]|=e}:(t,e)=>{t.D!==void 0?t.D|=e:Object.defineProperties(t,{D:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function ff(t){const e=Tt(t);(1&e)!=1&&(Object.isFrozen(t)&&(t=an(t)),Et(t,1|e))}var Vo=ui?(t,e)=>{t[ui]&=~e}:(t,e)=>{t.D!==void 0&&(t.D&=~e)};function Yt(t,e,n){return n?t|e:t&~e}var Tt=ui?t=>0|t[ui]:t=>0|t.D,rt=ui?t=>t[ui]:t=>t.D,Et=ui?(t,e)=>{t[ui]=e}:(t,e)=>{t.D!==void 0?t.D=e:Object.defineProperties(t,{D:{value:e,configurable:!0,writable:!0,enumerable:!1}})};function pf(){var t=[];return fc(t,1),t}function Fs(t){return fc(t,34),t}function K3(t,e){Et(e,-14591&(0|t))}function Fl(t,e){Et(e,-14557&(34|t))}function Ho(t){return(t=t>>14&1023)===0?536870912:t}var Da={},Qp={};function mf(t){return!(!t||typeof t!="object"||t.Na!==Qp)}function ta(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}let em=!gh;function tm(t,e,n){if(t!=null){if(typeof t=="string")t=t?new $i(t,Ss):ys();else if(t.constructor!==$i)if(oc(t))t=n?Xp(t):t.length?new $i(new Uint8Array(t),Ss):ys();else{if(!e)throw Error();t=void 0}}return t}function Ol(t,e,n){if(!Array.isArray(t)||t.length)return!1;const i=Tt(t);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(n):e.has(n)))&&(Et(t,1|i),!0)}var Er;const gf=[];function gi(t){if(2&t)throw Error()}Et(gf,55),Er=Object.freeze(gf);class Wo{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Wo(this.g,this.h,this.m)}}var Z3={};let Ki,ga;function nm(t,e){(e=Ki?e[Ki]:void 0)&&(t[Ki]=an(e))}function Bl(t){return(t=Error(t)).__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity="warning",t}function rr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function im(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}Object.freeze(new class{}),Object.freeze(new class{});const J3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function pc(t){const e=typeof t;return e==="number"?Number.isFinite(t):e==="string"&&J3.test(t)}function Os(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?0|t:void 0}function Q3(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?t>>>0:void 0}function _f(t){return t[0]!=="-"&&(20>t.length||t.length===20&&184467>Number(t.substring(0,6)))}function rm(t){return t[0]==="-"?20>t.length||t.length===20&&-922337<Number(t.substring(0,7)):19>t.length||t.length===19&&922337>Number(t.substring(0,6))}function Ch(t){return t=Math.trunc(t),Number.isSafeInteger(t)||(Ar(t),t=yh(ft,Dt)),t}function Lh(t){var e=Math.trunc(Number(t));return Number.isSafeInteger(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),rm(t)||(lc(t),t=jp()),t)}function Xo(t){return t==null?t:pc(t)?typeof t=="number"?Ch(t):Lh(t):void 0}function Ia(t){if(typeof t!="string")throw Error();return t}function Na(t){if(t!=null&&typeof t!="string")throw Error();return t}function _a(t){return t==null||typeof t=="string"?t:void 0}function Ph(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===Da)return t;if(!Array.isArray(t))return n?2&i?(t=e[df])?e=t:(Fs((t=new e).s),e=e[df]=t):e=new e:e=void 0,e;let r=n=Tt(t);return r===0&&(r|=32&i),r|=2&i,r!==n&&Et(t,r),new e(t)}function eM(t,e,n){if(e){var i=!!i;if(!pc(e=t))throw Bl("int64");typeof e=="string"?i=Lh(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):rm(e=String(i))?i=e:(Ar(i),i=jp())):i=Ch(e)}else i=Xo(t);return typeof(n=(t=i)==null?n?0:void 0:t)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}let qo,Uh,tM;function jo(t){switch(typeof t){case"boolean":return Uh||(Uh=[0,void 0,!0]);case"number":return 0<t?void 0:t===0?tM||(tM=[0,void 0]):[-t,void 0];case"string":return[0,t];case"object":return t}}function Cr(t,e){return sm(t,e[0],e[1])}function sm(t,e,n){if(t==null&&(t=qo),qo=void 0,t==null){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error();if(64&(i=Tt(t)))return ga&&delete t[ga],t;if(i|=64,n&&(i|=512,n!==t[0]))throw Error();e:{const r=(n=t).length;if(r){const s=r-1;if(ta(n[s])){if(1024<=(e=s-(+!!(512&(i|=256))-1)))throw Error();i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,r-(+!!(512&i)-1))))throw Error();i=-16760833&i|(1023&e)<<14}}}return Et(t,i),t}let nM=function(){try{return new class extends Map{constructor(){super()}},!1}catch{return!0}}();class pl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const iM=nM?(Object.setPrototypeOf(pl.prototype,Map.prototype),Object.defineProperties(pl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),pl):class extends Map{constructor(){super()}};function mo(t){return t}function ml(t){if(2&t.O)throw Error("Cannot mutate an immutable Map")}var Nn=class extends iM{constructor(t,e,n=mo,i=mo){super();let r=Tt(t);r|=64,Et(t,r),this.O=r,this.V=e,this.R=n||mo,this.Y=this.V?rM:i||mo;for(let s=0;s<t.length;s++){const a=t[s],o=n(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}pa(t=vf){return this.X(t)}X(t=vf){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){ml(this),super.clear()}delete(t){return ml(this),super.delete(this.R(t,!0,!1))}entries(){var t=this.ma();return new Wo(t,sM,this)}keys(){return this.Ma()}values(){var t=this.ma();return new Wo(t,Nn.prototype.get,this)}forEach(t,e){super.forEach((n,i)=>{t.call(e,this.get(i),i,this)})}set(t,e){return ml(this),(t=this.R(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Y(e,!0,!0,this.V,!1,this.O))}Ta(t){const e=this.R(t[0],!1,!0);t=t[1],t=this.V?t===void 0?null:t:this.Y(t,!1,!0,void 0,!1,this.O),super.set(e,t)}has(t){return super.has(this.R(t,!1,!1))}get(t){t=this.R(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.V;return n?((n=this.Y(e,!1,!0,n,this.xa,this.O))!==e&&super.set(t,n),n):e}}ma(){return Array.from(super.keys())}Ma(){return super.keys()}[Symbol.iterator](){return this.entries()}};function rM(t,e,n,i,r,s){return t=Ph(t,i,n,s),r&&(t=mc(t)),t}function vf(t){return t}function sM(t){return[t,this.get(t)]}function Dh(t,e,n,i,r,s){if(t!=null){if(Array.isArray(t))t=s&&2&Tt(t)?t:Ih(t,e,n,i!==void 0,r,s);else if(ta(t)){const a={};for(let o in t)a[o]=Dh(t[o],e,n,i,r,s);t=a}else t=e(t,i);return t}}function Ih(t,e,n,i,r,s){const a=i||n?Tt(t):0;i=i?!!(32&a):void 0;const o=an(t);for(let c=0;c<o.length;c++)o[c]=Dh(o[c],e,n,i,r,s);return n&&(nm(o,t),n(a,o)),o}function aM(t){return Dh(t,am,void 0,void 0,!1,!1)}function am(t){return t.W===Da?t.toJSON():t instanceof Nn?t.pa(aM):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e){if(Array.isArray(e))return em||!Ol(e,void 0,9999)?e:void 0;if(oc(e))return nf(e);if(e instanceof $i){const n=e.Z;return n==null?"":typeof n=="string"?n:e.Z=nf(n)}if(e instanceof Nn)return e=e.pa(),Pl||e.length!==0?e:void 0}}return e}(t)}function kl(t,e,n=Fl){if(t!=null){if(kp&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=Tt(t);return 2&i?t:(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),e?(Et(t,-12293&(34|i)),t):Ih(t,kl,4&i?Fl:n,!0,!1,!0))}return t.W===Da?(n=t.s,t=2&(i=rt(n))?t:Nh(t,n,i,!0)):t instanceof Nn&&(n=Fs(t.X(kl)),t=new Nn(n,t.V,t.R,t.Y)),t}}function Nh(t,e,n,i){return t=t.constructor,qo=e=om(e,n,i),e=new t(e),qo=void 0,e}function om(t,e,n){const i=n||2&e?Fl:K3,r=!!(32&e);return t=function(s,a,o){const c=an(s);var l=c.length;const h=256&a?c[l-1]:void 0;for(l+=h?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(h){a=c[a]={};for(const d in h)a[d]=o(h[d])}return nm(c,s),c}(t,e,s=>kl(s,r,i)),fc(t,32|(n?2:0)),t}function mc(t){const e=t.s,n=rt(e);return 2&n?Nh(t,e,n,!1):t}function Ts(t,e){return _i(t=t.s,rt(t),e)}function _i(t,e,n,i){if(n===-1)return null;if(n>=Ho(e)){if(256&e)return t[t.length-1][n]}else{var r=t.length;if(i&&256&e&&(i=t[r-1][n])!=null)return i;if((e=n+(+!!(512&e)-1))<r)return t[e]}}function pt(t,e,n,i){const r=t.s;let s=rt(r);return gi(s),mt(r,s,e,n,i),t}function mt(t,e,n,i,r){var s=Ho(e);if(n>=s||r){if(r=e,256&e)s=t[t.length-1];else{if(i==null)return r;s=t[s+(+!!(512&e)-1)]={},r|=256}return s[n]=i,r!==e&&Et(t,r),r}return t[n+(+!!(512&e)-1)]=i,256&e&&n in(t=t[t.length-1])&&delete t[n],e}function Bs(t,e,n,i,r){var s=2&e;let a=_i(t,e,n,r);Array.isArray(a)||(a=Er);const o=!(2&i);i=!(1&i);const c=!!(32&e);let l=Tt(a);return l!==0||!c||s||o?1&l||(l|=1,Et(a,l)):(l|=33,Et(a,l)),s?(t=!1,2&l||(Fs(a),t=!!(4&l)),(i||t)&&Object.freeze(a)):(s=!!(2&l)||!!(2048&l),i&&s?(a=an(a),i=1,c&&!o&&(i|=32),Et(a,i),mt(t,e,n,a,r)):o&&32&l&&!s&&Vo(a,32)),a}function Mo(t,e){t=t.s;let n=rt(t);const i=_i(t,n,e),r=rr(i);return r!=null&&r!==i&&mt(t,n,e,r),r}function cm(t){t=t.s;let e=rt(t);const n=_i(t,e,1),i=tm(n,!0,!!(34&e));return i!=null&&i!==n&&mt(t,e,1,i),i}function rs(t,e,n){t=t.s;let i=rt(t);const r=2&i?1:2;let s=lm(t,i,e);var a=Tt(s);if(!(4&a)){(4&a||Object.isFrozen(s))&&(s=an(s),a=Nr(a,i,!1),i=mt(t,i,e,s));var o=0;let c=0;for(;o<s.length;o++){const l=n(s[o]);l!=null&&(s[c++]=l)}c<o&&(s.length=c),a=Yt(a=hm(a,i,!1),20,!0),a=Yt(a,4096,!1),a=Yt(a,8192,!1),Et(s,a),2&a&&Object.freeze(s)}return na(a)||(n=a,(a=(o=r===1)?Yt(a,2,!0):Yt(a,32,!1))!==n&&Et(s,a),o&&Object.freeze(s)),r===2&&na(a)&&(s=an(s),a=Nr(a,i,!1),Et(s,a),mt(t,i,e,s)),s}function lm(t,e,n){return t=_i(t,e,n),Array.isArray(t)?t:Er}function hm(t,e,n){return t===0&&(t=Nr(t,e,n)),Yt(t,1,!0)}function na(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}let oM;function xf(){return oM??(oM=new Nn(Fs([]),void 0,void 0,void 0,Z3))}function um(t){t=an(t);for(let e=0;e<t.length;e++){const n=t[e]=an(t[e]);Array.isArray(n[1])&&(n[1]=Fs(n[1]))}return t}function Yo(t,e,n){{const a=t.s;let o=rt(a);if(gi(o),n==null)mt(a,o,e);else{var i,r=t=Tt(n),s=!!(2&t)||Object.isFrozen(n);if((i=!s)&&(i=!1),!(4&t))for(t=21,s&&(n=an(n),r=0,t=Nr(t,o,!0)),s=0;s<n.length;s++)n[s]=Ia(n[s]);i&&(n=an(n),r=0,t=Nr(t,o,!0)),t!==r&&Et(n,t),mt(a,o,e,n)}}}function Fa(t,e,n,i){const r=rt(t);gi(r),t=Bs(t,r,e,2),i=n(i,!!(4&(e=Tt(t)))&&!!(4096&e)),t.push(i)}function cM(t){return t}function gl(t,e){return Fh(t=t.s,rt(t),$m)===e?e:-1}function Fh(t,e,n){let i=0;for(let r=0;r<n.length;r++){const s=n[r];_i(t,e,s)!=null&&(i!==0&&(e=mt(t,e,i)),i=s)}return i}function Oh(t,e,n,i){let r=rt(t);gi(r);const s=_i(t,r,n,i);let a;if(s!=null&&s.W===Da)return(e=mc(s))!==s&&mt(t,r,n,e,i),e.s;if(Array.isArray(s)){const o=Tt(s);a=2&o?om(s,o,!1):s,a=Cr(a,e)}else a=Cr(void 0,e);return a!==s&&mt(t,r,n,a,i),a}function dm(t,e,n,i){t=t.s;let r=rt(t);const s=_i(t,r,n,i);return(e=Ph(s,e,!1,r))!==s&&e!=null&&mt(t,r,n,e,i),e}function nt(t,e,n,i=!1){if((e=dm(t,e,n,i))==null)return e;t=t.s;let r=rt(t);if(!(2&r)){const s=mc(e);s!==e&&mt(t,r,n,e=s,i)}return e}function fm(t,e,n,i,r,s){var a=!!(2&e),o=a?1:2;const c=o===1;o=o===2,r=!!r,s&&(s=!a),a=lm(t,e,i);var l=Tt(a);const h=!!(4&l);if(!h){var d=a,f=e;const m=!!(2&(l=hm(l,e,r)));m&&(f=Yt(f,2,!0));let g=!m,_=!0,p=0,u=0;for(;p<d.length;p++){const b=Ph(d[p],n,!1,f);if(b instanceof n){if(!m){const M=!!(2&Tt(b.s));g&&(g=!M),_&&(_=M)}d[u++]=b}}u<p&&(d.length=u),l=Yt(l,4,!0),l=Yt(l,16,_),l=Yt(l,8,g),Et(d,l),m&&Object.freeze(d)}if(n=!!(8&l)||c&&!a.length,s&&!n){for(na(l)&&(a=an(a),l=Nr(l,e,r),e=mt(t,e,i,a)),s=a,n=l,d=0;d<s.length;d++)(l=s[d])!==(f=mc(l))&&(s[d]=f);n=Yt(n,8,!0),n=Yt(n,16,!s.length),Et(s,n),l=n}return na(l)||(s=l,c?l=Yt(l,!a.length||16&l&&(!h||32&l)?2:2048,!0):r||(l=Yt(l,32,!1)),l!==s&&Et(a,l),c&&Object.freeze(a)),o&&na(l)&&(a=an(a),l=Nr(l,e,r),Et(a,l),mt(t,e,i,a)),a}function Ii(t,e,n){t=t.s;const i=rt(t);return fm(t,i,e,n,!1,!(2&i))}function Ne(t,e,n,i,r){return i==null&&(i=void 0),pt(t,n,i,r)}function ia(t,e,n,i){i==null&&(i=void 0),t=t.s;let r=rt(t);gi(r),(n=Fh(t,r,n))&&n!==e&&i!=null&&(r=mt(t,r,n)),mt(t,r,e,i)}function Nr(t,e,n){return t=Yt(t,2,!!(2&e)),t=Yt(t,32,!!(32&e)&&n),Yt(t,2048,!1)}function zl(t,e,n){t=t.s;const i=rt(t);gi(i),t=fm(t,i,e,1,!0),e=n??new e,t.push(e),2&Tt(e.s)?Vo(t,8):Vo(t,16)}function In(t,e){return Os(Ts(t,e))}function Fn(t,e){return _a(Ts(t,e))}function di(t){return t??0}function $t(t,e){return di(Mo(t,e))}function va(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);pt(t,e,n)}function fi(t,e,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Bl("int32");n|=0}pt(t,e,n)}function Oe(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);pt(t,e,n)}function Kn(t,e,n){e.g?e.m(t,e.g,e.h,n,!0):e.m(t,e.h,n,!0)}Nn.prototype.toJSON=void 0,Nn.prototype.Na=Qp;var Me=class{constructor(t,e){this.s=sm(t,e)}toJSON(){return pm(this,Ih(this.s,am,void 0,void 0,!1,!1),!0)}l(){var t=fS;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.s;return Nh(this,t,rt(t),!1)}L(){return!!(2&Tt(this.s))}};function pm(t,e,n){const i=t.constructor.A;var r=rt(n?t.s:e),s=Ho(r),a=!1;if(i&&em){if(!n){var o;if((e=an(e)).length&&ta(o=e[e.length-1])){for(a=0;a<i.length;a++)if(i[a]>=s){Object.assign(e[e.length-1]={},o);break}}a=!0}var c;s=e,n=!n,t=Ho(o=rt(t.s)),o=+!!(512&o)-1;for(let p=0;p<i.length;p++){var l=i[p];if(l<t){var h=s[l+=o];h==null?s[l]=n?Er:pf():n&&h!==Er&&ff(h)}else{if(!c){var d=void 0;s.length&&ta(d=s[s.length-1])?c=d:s.push(c={})}h=c[l],c[l]==null?c[l]=n?Er:pf():n&&h!==Er&&ff(h)}}}if(!(c=e.length))return e;let f,m;if(ta(d=e[c-1])){e:{var g=d;for(var _ in s={},n=!1,g)t=g[_],Array.isArray(t)&&(o=t,(!sf&&Ol(t,i,+_)||!Pl&&mf(t)&&t.size===0)&&(t=null),t!=o&&(n=!0)),t!=null?s[_]=t:n=!0;if(n){for(let p in s){g=s;break e}g=null}}g!=d&&(f=!0),c--}for(r=+!!(512&r)-1;0<c&&((d=e[_=c-1])==null||!sf&&Ol(d,i,_-r)||!Pl&&mf(d)&&d.size===0);c--)m=!0;return(f||m)&&(e=a?e:Array.prototype.slice.call(e,0,c),a&&(e.length=c),g&&e.push(g)),e}function mm(t){return Array.isArray(t)?t[0]instanceof Ns?t:[xM,t]:[t,void 0]}function ks(t,e){if(Array.isArray(e)){var n=Tt(e);if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Et(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}Me.prototype.W=Da,Me.prototype.toString=function(){return pm(this,this.s,!1).toString()};const Mf=Symbol();function Bh(t){let e=t[Mf];if(!e){const n=vm(t),i=zh(t),r=i.g;e=r?(s,a)=>r(s,a,i):(s,a)=>{for(;Kp(a)&&a.h!=4;){var o=a.m,c=i[o];if(!c){var l=i.ha;l&&(l=l[o])&&(c=i[o]=lM(l))}c&&c(a,s,o)||(o=(c=a).l,xo(c),c.ga?c=void 0:(l=c.g.g-o,c.g.g=o,c=$p(c.g,l)),o=s,c&&(Ki||(Ki=Symbol()),(l=o[Ki])?l.push(c):o[Ki]=[c]))}n===gm||n===_m||n.Oa||(s[ga||(ga=Symbol())]=n)},t[Mf]=e}return e}function lM(t){const e=(t=mm(t))[0].g;if(t=t[1]){const n=Bh(t),i=zh(t).S;return(r,s,a)=>e(r,s,a,i,n)}return e}let gm,_m;const So=Symbol();function hM(t,e,n){const i=n[1];let r;if(i){const s=i[So];r=s?s.S:jo(i[0]),t[e]=s??i}r&&r===Uh?(t.na||(t.na=[])).push(e):n[0]&&(t.oa||(t.oa=[])).push(e)}function Sf(t,e){return[t.l,!e||0<e[0]?void 0:e]}function vm(t){var e=t[So];if(e)return e;if(!(e=kh(t,t[So]={},Sf,Sf,hM)).oa&&!e.na){let n=!0;for(let i in e){isNaN(i)||(n=!1);break}n?(e=jo(t[0])===Uh,e=t[So]=e?_m||(_m={S:jo(!0)}):gm||(gm={})):e.Oa=!0}return e}function uM(t,e,n){t[e]=n}function kh(t,e,n,i,r=uM){e.S=jo(t[0]);let s=0;var a=t[++s];a&&a.constructor===Object&&(e.ha=a,typeof(a=t[++s])=="function"&&(e.g=a,e.h=t[++s],a=t[++s]));const o={};for(;Array.isArray(a)&&typeof a[0]=="number"&&0<a[0];){for(var c=0;c<a.length;c++)o[a[c]]=a;a=t[++s]}for(c=1;a!==void 0;){let d;typeof a=="number"&&(c+=a,a=t[++s]);var l=void 0;if(a instanceof Ns?d=a:(d=MM,s--),d.qa){a=t[++s],l=t;var h=s;typeof a=="function"&&(a=a(),l[h]=a),l=a}for(h=c+1,typeof(a=t[++s])=="number"&&0>a&&(h-=a,a=t[++s]);c<h;c++){const f=o[c];r(e,c,l?i(d,l,f):n(d,f))}}return e}const yf=Symbol();function xm(t){let e=t[yf];if(!e){const n=gc(t);e=(i,r)=>Mm(i,r,n),t[yf]=e}return e}const yo=Symbol();function dM(t){return t.h}function fM(t,e){let n,i;const r=t.h;return(s,a,o)=>r(s,a,o,i||(i=gc(e).S),n||(n=xm(e)))}function gc(t){let e=t[yo];return e||(e=kh(t,t[yo]={},dM,fM),Eo in t&&yo in t&&(t.length=0),e)}const Eo=Symbol();function pM(t,e){const n=t.g;return e?(i,r,s)=>n(i,r,s,e):n}function mM(t,e,n){const i=t.g;let r,s;return(a,o,c)=>i(a,o,c,s||(s=zh(e).S),r||(r=Bh(e)),n)}function zh(t){let e=t[Eo];return e||(vm(t),e=kh(t,t[Eo]={},pM,mM),Eo in t&&yo in t&&(t.length=0),e)}function Ef(t,e){var n=t[e];if(n)return n;if((n=t.ha)&&(n=n[e])){var i=(n=mm(n))[0].h;if(n=n[1]){const r=xm(n),s=gc(n).S;n=(n=t.h)?n(s,r):(a,o,c)=>i(a,o,c,s,r)}else n=i;return t[e]=n}}function Mm(t,e,n){for(var i=rt(t),r=+!!(512&i)-1,s=t.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const c=t[a];if(c==null)continue;const l=a-r,h=Ef(n,l);h&&h(e,c,l)}if(256&i){i=t[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(o=Ef(n,r))&&o(e,s,r)}if(t=Ki?t[Ki]:void 0)for(Es(e,e.g.end()),n=0;n<t.length;n++)Es(e,_h(t[n])||cc())}function mn(t,e){return new Ns(t,e,!1,!1)}function zs(t,e){return new Ns(t,e,!0,!1)}function _c(t,e){return new Ns(t,e,!1,!0)}function gn(t,e,n){mt(t,rt(t),e,n)}var gM=_c(function(t,e,n,i,r){return t.h===2&&(t=Pa(t,Cr([void 0,void 0],i),r),gi(i=rt(e)),(r=_i(e,i,n))instanceof Nn?2&r.O?((r=r.X()).push(t),mt(e,i,n,r)):r.Ta(t):Array.isArray(r)?(2&Tt(r)&&mt(e,i,n,r=um(r)),r.push(t)):mt(e,i,n,[t]),!0)},function(t,e,n,i,r){if(e instanceof Nn)e.forEach((s,a)=>{Nl(t,n,Cr([a,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Nl(t,n,Cr(a,i),r)}});function Sm(t,e,n){e:if(e!=null){if(pc(e)){if(typeof e=="string"){e=Lh(e);break e}if(typeof e=="number"){e=Ch(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&hf(e),e!=null&&(Bn(t,n,0),typeof e=="number"?(t=t.g,Ar(e),Go(t,ft,Dt)):(n=hf(e),Go(t.g,n.h,n.g))))}function ym(t,e,n){(e=Os(e))!=null&&e!=null&&(Bn(t,n,0),uc(t.g,e))}function Em(t,e,n){(e=im(e))!=null&&(Bn(t,n,0),t.g.g.push(e?1:0))}function Tm(t,e,n){(e=_a(e))!=null&&dc(t,n,Np(e))}function vc(t,e,n,i,r){Nl(t,n,e instanceof Me?e.s:Array.isArray(e)?Cr(e,i):void 0,r)}function bm(t,e,n){(e=e==null||typeof e=="string"||oc(e)||e instanceof $i?e:void 0)!=null&&dc(t,n,xh(e).buffer)}function wm(t,e,n){return(t.h===5||t.h===2)&&(e=Bs(e,rt(e),n,2,!1),t.h==2?hc(t,Il,e):e.push(Il(t.g)),!0)}var Ft,Li=mn(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Dl(i);const r=Dl(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,gn(e,n,s==2047?t?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=rr(e))!=null&&(Bn(t,n,1),t=t.g,(n=qp||(qp=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),ft=n.getUint32(0,!0),Dt=n.getUint32(4,!0),ma(t,ft),ma(t,Dt))}),kt=mn(function(t,e,n){return t.h===5&&(gn(e,n,Il(t.g)),!0)},function(t,e,n){(e=rr(e))!=null&&(Bn(t,n,5),t=t.g,Sh(e),ma(t,ft))}),_M=zs(wm,function(t,e,n){if((e=ks(rr,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Bn(i,r,5),i=i.g,Sh(s),ma(i,ft))}}),Gh=zs(wm,function(t,e,n){if((e=ks(rr,e))!=null&&e.length){Bn(t,n,2),Ua(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Sh(e[i]),ma(n,ft)}}),nr=mn(function(t,e,n){return t.h===0&&(gn(e,n,Th(t.g,yh)),!0)},Sm),_l=mn(function(t,e,n){return t.h===0&&(gn(e,n,(t=Th(t.g,yh))===0?void 0:t),!0)},Sm),vM=mn(function(t,e,n){return t.h===0&&(gn(e,n,Th(t.g,Ul)),!0)},function(t,e,n){e:if(e!=null){if(pc(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),_f(e)||(lc(e),e=zo(ft,Dt)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(r){if(0>r){Ar(r);const s=zo(ft,Dt);return r=Number(s),Number.isSafeInteger(r)?r:s}return _f(String(r))?r:(Ar(r),Ul(ft,Dt))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&cf(e),e!=null&&(Bn(t,n,0),typeof e=="number"?(t=t.g,Ar(e),Go(t,ft,Dt)):(n=cf(e),Go(t.g,n.h,n.g))))}),Ct=mn(function(t,e,n){return t.h===0&&(gn(e,n,er(t.g)),!0)},ym),Vh=zs(function(t,e,n){return(t.h===0||t.h===2)&&(e=Bs(e,rt(e),n,2,!1),t.h==2?hc(t,er,e):e.push(er(t.g)),!0)},function(t,e,n){if((e=ks(Os,e))!=null&&e.length){n=Ah(t,n);for(let i=0;i<e.length;i++)uc(t.g,e[i]);Rh(t,n)}}),bs=mn(function(t,e,n){return t.h===0&&(gn(e,n,(t=er(t.g))===0?void 0:t),!0)},ym),Nt=mn(function(t,e,n){return t.h===0&&(gn(e,n,bh(t.g)),!0)},Em),ra=mn(function(t,e,n){return t.h===0&&(gn(e,n,(t=bh(t.g))===!1?void 0:t),!0)},Em),sn=zs(function(t,e,n){return t.h===2&&(Fa(e,n,cM,t=wh(t)),!0)},function(t,e,n){if((e=ks(_a,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&dc(i,r,Np(s))}}),ir=mn(function(t,e,n){return t.h===2&&(gn(e,n,(t=wh(t))===""?void 0:t),!0)},Tm),_t=mn(function(t,e,n){return t.h===2&&(gn(e,n,wh(t)),!0)},Tm),xM=_c(function(t,e,n,i,r){return t.h===2&&(Pa(t,Oh(e,i,n,!0),r),!0)},vc),MM=_c(function(t,e,n,i,r){return t.h===2&&(Pa(t,Oh(e,i,n),r),!0)},vc);Ft=new Ns(function(t,e,n,i,r){if(t.h!==2)return!1;i=Cr(void 0,i);let s=rt(e);gi(s);let a=Bs(e,s,n,3);return s=rt(e),4&Tt(a)&&(a=an(a),Et(a,-2079&(1|Tt(a))),mt(e,s,n,a)),a.push(i),Pa(t,i,r),!0},function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)vc(t,e[s],n,i,r)},!0,!0);var vt=_c(function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=rt(e);return gi(a),(s=Fh(e,a,s))&&n!==s&&mt(e,a,s),Pa(t,e=Oh(e,i,n),r),!0},vc),Am=mn(function(t,e,n){return t.h===2&&(gn(e,n,Zp(t)),!0)},bm),SM=zs(function(t,e,n){return(t.h===0||t.h===2)&&(e=Bs(e,rt(e),n,2,!1),t.h==2?hc(t,tr,e):e.push(tr(t.g)),!0)},function(t,e,n){if((e=ks(Q3,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Bn(i,r,0),Ua(i.g,s))}}),pi=mn(function(t,e,n){return t.h===0&&(gn(e,n,er(t.g)),!0)},function(t,e,n){(e=Os(e))!=null&&(e=parseInt(e,10),Bn(t,n,0),uc(t.g,e))}),yM=zs(function(t,e,n){return(t.h===0||t.h===2)&&(e=Bs(e,rt(e),n,2,!1),t.h==2?hc(t,j3,e):e.push(er(t.g)),!0)},function(t,e,n){if((e=ks(Os,e))!=null&&e.length){n=Ah(t,n);for(let i=0;i<e.length;i++)uc(t.g,e[i]);Rh(t,n)}});class EM{constructor(e,n){this.h=e,this.g=n,this.l=nt,this.m=Ne,this.defaultValue=void 0}}function Zn(t,e){return new EM(t,e)}function sr(t,e){return(n,i)=>{e:{if(po.length){const s=po.pop();s.o(i),fl(s.g,n,i),n=s}else n=new class{constructor(s,a){if(of.length){const o=of.pop();fl(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,fl(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({ga:s=!1}={}){this.ga=s}}(n,i);try{const s=new t,a=s.s;Bh(e)(a,n),ga&&delete a[ga];var r=s;break e}finally{n.g.clear(),n.m=-1,n.h=-1,100>po.length&&po.push(n)}r=void 0}return r}}function Hh(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Mm(this.s,e,gc(t)),Es(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var Rm=[0,ir,mn(function(t,e,n){return t.h===2&&(gn(e,n,(t=Zp(t))===ys()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof Me){const i=e.Va;return void(i&&(e=i(e),e!=null&&dc(t,n,xh(e).buffer)))}if(Array.isArray(e))return}bm(t,e,n)})],TM=[0,_t],Cm=[0,Ct,pi,Nt,-1,Vh,pi,-1],bM=[0,Nt,-1],Lm=class extends Me{constructor(){super()}};Lm.A=[6];var Pm=[0,Nt,_t,Nt,pi,-1,yM,_t,-1,bM,pi],Um=[0,_t,-2],Tf=class extends Me{constructor(){super()}},Dm=[0],Im=[0,Ct,Nt,-2],On=class extends Me{constructor(t){super(t,2)}},Mt={},wM=[-2,Mt,Nt];Mt[336783863]=[0,_t,Nt,-1,Ct,[0,[1,2,3,4,5],vt,Dm,vt,Pm,vt,Um,vt,Im,vt,Cm],TM];var AM=[0,ir,ra],Nm=[0,_l,-1,ra,-3,_l,Vh,ir,bs,_l,-1,ra,bs,ra,-2,ir],Oa=[-1,{}],Fm=[0,_t,1,Oa],Om=[0,_t,sn,Oa];function kn(t,e){e=Na(e),t=t.s;let n=rt(t);gi(n),mt(t,n,2,e===""?void 0:e)}function gt(t,e){Fa(t.s,3,Ia,e)}function ut(t,e){Fa(t.s,4,Ia,e)}var on=class extends Me{constructor(t){super(t,500)}o(t){return Ne(this,0,7,t)}};on.A=[3,4,5,6,8,13,17,1005];var RM=[-500,ir,-1,sn,-3,wM,Ft,Rm,bs,-1,Fm,Om,Ft,AM,ir,Nm,bs,sn,987,sn],CM=[0,ir,-1,Oa],LM=[-500,_t,-1,[-1,{}],998,_t],PM=[-500,_t,sn,-1,[-2,{},Nt],997,sn,-1],UM=[-500,_t,sn,Oa,998,sn];function zn(t,e){zl(t,on,e)}function St(t,e){Fa(t.s,10,Ia,e)}function xt(t,e){Fa(t.s,15,Ia,e)}var _n=class extends Me{constructor(t){super(t,500)}o(t){return Ne(this,0,1001,t)}};_n.A=[1,6,7,9,10,15,16,17,14,1002];var Bm=[-500,Ft,RM,4,Ft,LM,Ft,PM,bs,Ft,UM,sn,bs,Fm,Om,Ft,CM,sn,-2,Nm,ir,-1,ra,979,Oa,Ft,Rm],DM=sr(_n,Bm);_n.prototype.g=Hh(Bm);var IM=[0,Ft,[0,Ct,-2]],NM=class extends Me{constructor(t){super(t)}},FM=[0,Ct,kt,_t,-1],Wh=class extends Me{constructor(t){super(t)}g(){return Ii(this,NM,1)}};Wh.A=[1];var km=[0,Ft,FM],Xh=sr(Wh,km),OM=[0,Ct,kt],BM=[0,Ct,-1,IM],kM=class extends Me{constructor(t){super(t)}},zM=[0,Ct,-3],GM=[0,kt,-3],VM=class extends Me{constructor(t){super(t)}},HM=[0,kt,-1,_t,kt],To=class extends Me{constructor(t){super(t)}h(){return nt(this,kM,2)}g(){return Ii(this,VM,5)}};To.A=[5];var WM=[0,pi,zM,GM,BM,Ft,HM],zm=class extends Me{constructor(t){super(t)}};zm.A=[1,2,3,8,9];var Gm=sr(zm,[0,sn,Vh,Gh,WM,_t,-1,nr,Ft,OM,sn,nr]),Vm=class extends Me{constructor(t){super(t)}},XM=[0,kt,-4],Hm=class extends Me{constructor(t){super(t)}};Hm.A=[1];var qh=sr(Hm,[0,Ft,XM]),Wm=class extends Me{constructor(t){super(t)}},qM=[0,kt,-4],Xm=class extends Me{constructor(t){super(t)}};Xm.A=[1];var xc=sr(Xm,[0,Ft,qM]),qm=class extends Me{constructor(t){super(t)}};qm.A=[3];var jM=[0,Ct,-1,Gh,pi],jm=class extends Me{constructor(){super()}};jm.prototype.g=Hh([0,kt,-4,nr]);var YM=class extends Me{constructor(t){super(t)}},$M=[0,1,Ct,_t,km],Ym=class extends Me{constructor(t){super(t)}};Ym.A=[1];var KM=sr(Ym,[0,Ft,$M,nr]),Gl=class extends Me{constructor(t){super(t)}};Gl.A=[1];var ZM=class extends Me{constructor(t){super(t)}ua(){const t=cm(this);return t??ys()}},JM=class extends Me{constructor(t){super(t)}},$m=[1,2],QM=[0,$m,vt,[0,Gh],vt,[0,Am],Ct,_t],Km=class extends Me{constructor(t){super(t)}};Km.A=[1];var eS=sr(Km,[0,Ft,QM,nr]),Mc=class extends Me{constructor(t){super(t)}};Mc.A=[4,5];var Zm=[0,_t,Ct,kt,sn,-1],bf=class extends Me{constructor(t){super(t)}},tS=[0,Nt,-1],wf=class extends Me{constructor(t){super(t)}},bo=[1,2,3,4,5],$o=class extends Me{constructor(t){super(t)}g(){return cm(this)!=null}h(){return Fn(this,2)!=null}},Jm=[0,Am,_t,[0,Ct,nr,-1],[0,vM,nr]],Rt=class extends Me{constructor(t){super(t)}g(){return im(Ts(this,2))??!1}},zt=[0,Jm,Nt,[0,bo,vt,Im,vt,Pm,vt,Cm,vt,Dm,vt,Um],pi],jh=class extends Me{constructor(t){super(t)}},Qm=[0,zt,kt,-1,Ct],nS=Zn(502141897,jh);Mt[502141897]=Qm;var eg=[0,Jm];Mt[512499200]=eg;var tg=[0,eg];Mt[515723506]=tg;var iS=sr(class extends Me{constructor(t){super(t)}},[0,[0,pi,-1,_M,SM],jM]),ng=[0,zt];Mt[508981768]=ng;var rS=class extends Me{constructor(t){super(t)}},ig=[0,zt,kt,ng,Nt],rg=class extends Me{constructor(t){super(t)}},sg=[0,zt,Qm,ig,kt,tg];Mt[508968149]=ig;var sS=Zn(508968150,rg);Mt[508968150]=sg;var ag=class extends Me{constructor(t){super(t)}},aS=Zn(513916220,ag);Mt[513916220]=[0,zt,sg,Ct];var Qr=class extends Me{constructor(t){super(t)}h(){return nt(this,Mc,2)}g(){pt(this,2)}},og=[0,zt,Zm];Mt[478825465]=og;var cg=[0,zt];Mt[478825422]=cg;var oS=class extends Me{constructor(t){super(t)}},lg=[0,zt,cg,og,-1],hg=class extends Me{constructor(t){super(t)}},ug=[0,zt,kt,Ct],dg=class extends Me{constructor(t){super(t)}},fg=[0,zt,kt],Yh=class extends Me{constructor(t){super(t)}},pg=[0,zt,ug,fg,kt],mg=class extends Me{constructor(t){super(t)}},cS=[0,zt,pg,lg];Mt[463370452]=lg,Mt[464864288]=ug,Mt[474472470]=fg;var lS=Zn(462713202,Yh);Mt[462713202]=pg;var hS=Zn(479097054,mg);Mt[479097054]=cS;var gg=class extends Me{constructor(t){super(t)}},uS=Zn(456383383,gg);Mt[456383383]=[0,zt,Zm];var _g=class extends Me{constructor(t){super(t)}},dS=Zn(476348187,_g);Mt[476348187]=[0,zt,tS];var vg=class extends Me{constructor(t){super(t)}},xg=[0,pi,-1],Vl=class extends Me{constructor(t){super(t)}};Vl.A=[3];var fS=Zn(458105876,class extends Me{constructor(t){super(t)}g(){var t=this.s;const e=rt(t);var n=2&e;return t=function(i,r,s){var a=Vl;const o=2&r;let c=!1;if(s==null){if(o)return xf();s=[]}else if(s.constructor===Nn){if(!(2&s.O)||o)return s;s=s.X()}else Array.isArray(s)?c=!!(2&Tt(s)):s=[];if(o){if(!s.length)return xf();c||(c=!0,Fs(s))}else c&&(c=!1,s=um(s));return c||(64&Tt(s)?Vo(s,32):32&r&&fc(s,32)),mt(i,r,2,a=new Nn(s,a,eM,void 0),!1),a}(t,e,_i(t,e,2)),t==null||!n&&Vl&&(t.xa=!0),n=t}});Mt[458105876]=[0,xg,gM,[!0,nr,[0,_t,-1,sn]]];var $h=class extends Me{constructor(t){super(t)}},Mg=Zn(458105758,$h);Mt[458105758]=[0,zt,_t,xg];var Kh=class extends Me{constructor(t){super(t)}};Kh.A=[5,6];var pS=Zn(443442058,Kh);Mt[443442058]=[0,zt,_t,Ct,kt,sn,-1];var mS=class extends Me{constructor(t){super(t)}},Sg=[0,zt,kt,-1,Ct];Mt[514774813]=Sg;var gS=class extends Me{constructor(t){super(t)}},yg=[0,zt,kt,Nt],Eg=class extends Me{constructor(t){super(t)}},_S=[0,zt,Sg,yg,kt];Mt[518928384]=yg;var vS=Zn(516587230,Eg);function Hl(t,e){return e=e?e.clone():new Mc,t.displayNamesLocale!==void 0?pt(e,1,Na(t.displayNamesLocale)):t.displayNamesLocale===void 0&&pt(e,1),t.maxResults!==void 0?fi(e,2,t.maxResults):"maxResults"in t&&pt(e,2),t.scoreThreshold!==void 0?Oe(e,3,t.scoreThreshold):"scoreThreshold"in t&&pt(e,3),t.categoryAllowlist!==void 0?Yo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&pt(e,4),t.categoryDenylist!==void 0?Yo(e,5,t.categoryDenylist):"categoryDenylist"in t&&pt(e,5),e}function Tg(t,e=-1,n=""){return{categories:t.map(i=>({index:di(In(i,1))??-1,score:$t(i,2)??0,categoryName:Fn(i,3)??""??"",displayName:Fn(i,4)??""??""})),headIndex:e,headName:n}}function bg(t){var a,o;var e=rs(t,3,rr),n=rs(t,2,Os),i=rs(t,1,_a),r=rs(t,9,_a);const s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(a=nt(t,To,4))==null?void 0:a.h())&&(s.boundingBox={originX:In(e,1)??0,originY:In(e,2)??0,width:In(e,3)??0,height:In(e,4)??0,angle:0}),(o=nt(t,To,4))==null?void 0:o.g().length)for(const c of nt(t,To,4).g())s.keypoints.push({x:Mo(c,1)??0,y:Mo(c,2)??0,score:Mo(c,4)??0,label:Fn(c,3)??""});return s}function Zh(t){const e=[];for(const n of Ii(t,Wm,1))e.push({x:$t(n,1)??0,y:$t(n,2)??0,z:$t(n,3)??0});return e}function wg(t){const e=[];for(const n of Ii(t,Vm,1))e.push({x:$t(n,1)??0,y:$t(n,2)??0,z:$t(n,3)??0});return e}function Af(t){return Array.from(t,e=>127<e?e-256:e)}function Rf(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let go;Mt[516587230]=_S;const xS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Ag(){if(go===void 0)try{await WebAssembly.instantiate(xS),go=!0}catch{go=!1}return go}async function vl(t,e=""){const n=await Ag()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Ys=class{};function Rg(){const t=navigator.userAgent;return t.includes("Safari")&&!t.includes("Chrome")}async function Cf(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(t.toString())}function be(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Lf(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");return t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),e.videoWidth?(n=e.videoWidth,e=e.videoHeight):e.naturalWidth?(n=e.naturalWidth,e=e.naturalHeight):(n=e.width,e=e.height),!t.l||n===t.i.canvas.width&&e===t.i.canvas.height||(t.i.canvas.width=n,t.i.canvas.height=e),[n,e]}function Pf(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Ti(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function fr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}Ys.forVisionTasks=function(t){return vl("vision",t)},Ys.forTextTasks=function(t){return vl("text",t)},Ys.forAudioTasks=function(t){return vl("audio",t)},Ys.isSimdSupported=function(){return Ag()};async function MS(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await Cf(s),!self.ModuleFactory||a&&(await Cf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Uf(t,e){const n=nt(t.baseOptions,$o,1)||new $o;typeof e=="string"?(pt(n,2,Na(e)),pt(n,1)):e instanceof Uint8Array&&(pt(n,1,tm(e,!1,!1)),pt(n,2)),Ne(t.baseOptions,0,1,n)}function Df(t){try{const e=t.F.length;if(e===1)throw Error(t.F[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.F.map(n=>n.message).join(", "))}finally{t.F=[]}}function Le(t,e){t.I=Math.max(t.I,e)}function Jh(t,e){t.C=new on,kn(t.C,"PassThroughCalculator"),gt(t.C,"free_memory"),ut(t.C,"free_memory_unused_out"),St(e,"free_memory"),zn(e,t.C)}function xa(t,e){gt(t.C,e),ut(t.C,e+"_unused_out")}function Qh(t){t.g.addBoolToStream(!0,"free_memory",t.I)}var Wl=class{constructor(t){this.g=t,this.F=[],this.I=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,a,o;if(e){const c=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=nt(this.baseOptions,$o,1))!=null&&r.g()||(s=nt(this.baseOptions,$o,1))!=null&&s.h()||(a=t.baseOptions)!=null&&a.modelAssetBuffer||(o=t.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,h){let d=nt(l.baseOptions,wf,3);if(!d){var f=d=new wf,m=new Tf;ia(f,4,bo,m)}"delegate"in h&&(h.delegate==="GPU"?(h=d,f=new Lm,ia(h,2,bo,f)):(h=d,f=new Tf,ia(h,4,bo,f))),Ne(l.baseOptions,0,3,d)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),Uf(this,"/model.dat"),this.m(),this.N()});Uf(this,c.modelAssetBuffer)}return this.m(),this.N(),Promise.resolve()}N(){}da(){let t;if(this.g.da(e=>{t=DM(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.F.push(Error(i))}),this.g.Ra(),this.g.setGraph(t,e),this.C=void 0,Df(this)}finishProcessing(){this.g.finishProcessing(),Df(this)}close(){this.C=void 0,this.g.closeGraph()}};function Pi(t,e){if(t===null)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Wl.prototype.close=Wl.prototype.close;class SS{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function If(t,e,n){const i=t.g;if(n=Pi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Nf(t,e){const n=t.g,i=Pi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Pi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.N),n.vertexAttribPointer(t.N,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Pi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.M),n.vertexAttribPointer(t.M,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new SS(n,i,r,s)}function eu(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function tu(t,e,n,i){return eu(t,e),t.h||(t.m(),t.F()),n?(t.u||(t.u=Nf(t,!0)),n=t.u):(t.v||(t.v=Nf(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function Sc(t,e,n){return eu(t,e),t=Pi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function yc(t,e,n){eu(t,e),t.C||(t.C=Pi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function nu(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var iu=class{I(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Pi(t.createProgram(),"Failed to create WebGL program"),this.ta=If(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.sa=If(this,this.I(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.N=t.getAttribLocation(this.h,"aVertex"),this.M=t.getAttribLocation(this.h,"aTex")}F(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.ta),t.deleteShader(this.sa)}this.C&&this.g.deleteFramebuffer(this.C),this.v&&this.v.close(),this.u&&this.u.close()}};function Ri(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Xl(t){var e=Ri(t,1);if(!e){if(e=Ri(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=ws(t);var n=ru(t);if(yc(n,i,Cg(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Cg(t){let e=Ri(t,2);if(!e){const n=ws(t);e=Pg(t);const i=Xl(t),r=Lg(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),ql(t)}return e}function ws(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Pi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Lg(t){if(t=ws(t),!_o)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))_o=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");_o=t.R16F}return _o}function ru(t){return t.l||(t.l=new iu),t.l}function Pg(t){const e=ws(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ri(t,2);return n||(n=Sc(ru(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function ql(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var _o,Wt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Ff===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}La(){return!!Ri(this,0)}ka(){return!!Ri(this,1)}P(){return!!Ri(this,2)}ja(){return(e=Ri(t=this,0))||(e=Xl(t),e=new Uint8Array(e.map(n=>255*n)),t.g.push(e)),e;var t,e}ia(){return Xl(this)}K(){return Cg(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=ws(this),r=ru(this);i.activeTexture(i.TEXTURE1),n=Sc(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Lg(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),yc(r,i,n),tu(r,i,!1,()=>{Pg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ql(this)}),nu(r),ql(this)}}t.push(n)}return new Wt(t,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ws(this).deleteTexture(Ri(this,2)),Ff=-1}};Wt.prototype.close=Wt.prototype.close,Wt.prototype.clone=Wt.prototype.clone,Wt.prototype.getAsWebGLTexture=Wt.prototype.K,Wt.prototype.getAsFloat32Array=Wt.prototype.ia,Wt.prototype.getAsUint8Array=Wt.prototype.ja,Wt.prototype.hasWebGLTexture=Wt.prototype.P,Wt.prototype.hasFloat32Array=Wt.prototype.ka,Wt.prototype.hasUint8Array=Wt.prototype.La;var Ff=250;function ci(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Ug(t){var e=ci(t,0);if(!e){e=As(t);const n=Ec(t),i=new Uint8Array(t.width*t.height*4);yc(n,e,wo(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),nu(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function wo(t){let e=ci(t,2);if(!e){const n=As(t);e=Ao(t);const i=ci(t,1)||Ug(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),$s(t)}return e}function As(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return t.h||(t.h=Pi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Ec(t){return t.l||(t.l=new iu),t.l}function Ao(t){const e=As(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=ci(t,2);return n||(n=Sc(Ec(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function $s(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Of(t){const e=As(t);return tu(Ec(t),e,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n}(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}var Xt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--Bf===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ka(){return!!ci(this,0)}la(){return!!ci(this,1)}P(){return!!ci(this,2)}Ia(){return Ug(this)}Ha(){var t=ci(this,1);return t||(wo(this),Ao(this),t=Of(this),$s(this),this.g.push(t),this.j=!0),t}K(){return wo(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=As(this),r=Ec(this);i.activeTexture(i.TEXTURE1),n=Sc(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),yc(r,i,n),tu(r,i,!1,()=>{Ao(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),$s(this)}),nu(r),$s(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);wo(this),Ao(this),n=Of(this),$s(this)}t.push(n)}return new Xt(t,this.la(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ci(this,1).close(),this.m&&As(this).deleteTexture(ci(this,2)),Bf=-1}};Xt.prototype.close=Xt.prototype.close,Xt.prototype.clone=Xt.prototype.clone,Xt.prototype.getAsWebGLTexture=Xt.prototype.K,Xt.prototype.getAsImageBitmap=Xt.prototype.Ha,Xt.prototype.getAsImageData=Xt.prototype.Ia,Xt.prototype.hasWebGLTexture=Xt.prototype.P,Xt.prototype.hasImageBitmap=Xt.prototype.la,Xt.prototype.hasImageData=Xt.prototype.Ka;var Bf=250;function Jn(...t){return t.map(([e,n])=>({start:e,end:n}))}const yS=function(t){return class extends t{Ra(){this.i._registerModelResourcesGraphService()}}}((kf=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:typeof OffscreenCanvas>"u"||Rg()?(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas")):this.i.canvas=new OffscreenCanvas(1,1)}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),be(this,i||"input_audio",s=>{be(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,t,e,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}da(t){Ti(this,"__graph_config__",e=>{t(e)}),be(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),be(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)})}addGpuBufferToStream(t,e,n){be(this,e,i=>{const[r,s]=Lf(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){be(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){be(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){be(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){be(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addStringToStream(t,e,n){be(this,e,i=>{be(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){be(this,e,i=>{Pf(this,Object.keys(t),r=>{Pf(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){be(this,n,r=>{be(this,e,s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){be(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){be(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){be(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){be(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){be(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){be(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)be(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){be(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){be(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){be(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){be(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){be(this,e,n=>{be(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){be(this,n,i=>{be(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){be(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){be(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){be(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){be(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){be(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)be(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Ti(this,t,e),be(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){fr(this,t,e),be(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Ti(this,t,e),be(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){fr(this,t,e),be(this,t,n=>{this.i._attachIntVectorListener(n)})}attachDoubleListener(t,e){Ti(this,t,e),be(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){fr(this,t,e),be(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Ti(this,t,e),be(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){fr(this,t,e),be(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Ti(this,t,e),be(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){fr(this,t,e),be(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Ti(this,t,e),be(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){fr(this,t,e),be(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ti(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),be(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends kf{get fa(){return this.i}va(t,e,n){be(this,e,i=>{const[r,s]=Lf(this,t,i);this.fa._addBoundTextureAsImageToStream(i,r,s,n)})}ba(t,e){Ti(this,t,e),be(this,t,n=>{this.fa._attachImageListener(n)})}ca(t,e){fr(this,t,e),be(this,t,n=>{this.fa._attachImageVectorListener(n)})}}));var kf,Qn=class extends yS{};async function et(t,e,n){return async function(i,r,s,a){return MS(i,r,s,a)}(t,n.canvas??(typeof OffscreenCanvas>"u"||Rg()?document.createElement("canvas"):void 0),e,n)}function Dg(t,e,n,i){if(t.J){const s=new jm;if(n!=null&&n.regionOfInterest){if(!t.U)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");Oe(s,1,(r.left+r.right)/2),Oe(s,2,(r.top+r.bottom)/2),Oe(s,4,r.right-r.left),Oe(s,3,r.bottom-r.top)}else Oe(s,1,.5),Oe(s,2,.5),Oe(s,4,1),Oe(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Oe(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:[e.width,e.height];n=$t(s,3)*o/a,r=$t(s,4)*a/o,Oe(s,4,n),Oe(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.J,i)}t.g.va(e,t.T,i??performance.now()),t.finishProcessing()}function ei(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Dg(t,e,n,t.I+1)}function Ni(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Dg(t,e,n,i)}function Ma(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Wt([r],n,!1,t.g.i.canvas,t.M,s,e),i?t.clone():t}var bn=class extends Wl{constructor(t,e,n,i){super(t),this.g=t,this.T=e,this.J=n,this.U=i,this.M=new iu}l(t,e=!0){if("runningMode"in t&&va(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.M.close(),super.close()}};bn.prototype.close=bn.prototype.close;var Rn=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ne(t=this.h=new jh,0,1,e=new Rt),Oe(this.h,2,.5),Oe(this.h,3,.3)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Oe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Oe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}G(t,e){return this.j={detections:[]},ei(this,t,e),this.j}H(t,e,n){return this.j={detections:[]},Ni(this,t,n,e),this.j}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect_in"),xt(t,"detections");const e=new On;Kn(e,nS,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect_in"),ut(n,"DETECTIONS:detections"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Gm(s),this.j.detections.push(bg(i));Le(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rn.prototype.detectForVideo=Rn.prototype.H,Rn.prototype.detect=Rn.prototype.G,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=async function(t,e){return et(Rn,t,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(t,e){return et(Rn,t,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(t,e){return et(Rn,t,e)};var Ig=Jn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Ng=Jn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Fg=Jn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),ES=Jn([474,475],[475,476],[476,477],[477,474]),Og=Jn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Bg=Jn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),TS=Jn([469,470],[470,471],[471,472],[472,469]),kg=Jn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),bS=[...Ig,...Ng,...Fg,...Og,...Bg,...kg],wS=Jn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function zf(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var At=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ne(t=this.h=new rg,0,1,e=new Rt),this.v=new rS,Ne(this.h,0,3,this.v),this.u=new jh,Ne(this.h,0,2,this.u),fi(this.u,4,1),Oe(this.u,2,.5),Oe(this.v,2,.5),Oe(this.h,4,.5)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return"numFaces"in t&&fi(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Oe(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Oe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Oe(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}G(t,e){return zf(this),ei(this,t,e),this.j}H(t,e,n){return zf(this),Ni(this,t,n,e),this.j}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect"),xt(t,"face_landmarks");const e=new On;Kn(e,sS,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),ut(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=xc(s),this.j.faceLandmarks.push(Zh(i));Le(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{Le(this,i)}),this.outputFaceBlendshapes&&(xt(t,"blendshapes"),ut(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Xh(s),this.j.faceBlendshapes.push(Tg(i.g()??[]));Le(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{Le(this,i)})),this.outputFacialTransformationMatrixes&&(xt(t,"face_geometry"),ut(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=nt(iS(s),qm,2))&&this.j.facialTransformationMatrixes.push({rows:di(In(i,1))??0,columns:di(In(i,2))??0,data:rs(i,3,rr)??[]});Le(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.H,At.prototype.detect=At.prototype.G,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return et(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return et(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return et(At,t,e)},At.FACE_LANDMARKS_LIPS=Ig,At.FACE_LANDMARKS_LEFT_EYE=Ng,At.FACE_LANDMARKS_LEFT_EYEBROW=Fg,At.FACE_LANDMARKS_LEFT_IRIS=ES,At.FACE_LANDMARKS_RIGHT_EYE=Og,At.FACE_LANDMARKS_RIGHT_EYEBROW=Bg,At.FACE_LANDMARKS_RIGHT_IRIS=TS,At.FACE_LANDMARKS_FACE_OVAL=kg,At.FACE_LANDMARKS_CONTOURS=bS,At.FACE_LANDMARKS_TESSELATION=wS;var ni=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!0),Ne(t=this.j=new ag,0,1,e=new Rt)}get baseOptions(){return nt(this.j,Rt,1)}set baseOptions(t){Ne(this.j,0,1,t)}o(t){return super.l(t)}Ua(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,ei(this,t,i??{}),!this.h)return this.u}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect"),xt(t,"stylized_image");const e=new On;Kn(e,aS,this.j);const n=new on;kn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),ut(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),zn(t,n),this.g.ba("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=a[3*h],l[4*h+1]=a[3*h+1],l[4*h+2]=a[3*h+2],l[4*h+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new Xt([a],!1,!1,this.g.i.canvas,this.M,o,i),this.u=s=s?o.clone():o,this.h&&this.h(s),Le(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.stylize=ni.prototype.Ua,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(t,e){return et(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return et(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return et(ni,t,e)};var zg=Jn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Gf(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Vf(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Hf(t,e=!0){const n=[];for(const r of t){var i=Xh(r);t=[];for(const s of i.g())i=e&&In(s,1)!=null?di(In(s,1)):-1,t.push({score:$t(s,2)??0,index:i,categoryName:Fn(s,3)??""??"",displayName:Fn(s,4)??""??""});n.push(t)}return n}var Sn=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ne(t=this.v=new mg,0,1,e=new Rt),this.B=new Yh,Ne(this.v,0,2,this.B),this.u=new dg,Ne(this.B,0,3,this.u),this.h=new hg,Ne(this.B,0,2,this.h),this.j=new oS,Ne(this.v,0,3,this.j),Oe(this.h,2,.5),Oe(this.B,4,.5),Oe(this.u,2,.5)}get baseOptions(){return nt(this.v,Rt,1)}set baseOptions(t){Ne(this.v,0,1,t)}o(t){var r,s,a,o;if(fi(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Oe(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Oe(this.B,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Oe(this.u,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Qr,n=e,i=Hl(t.cannedGesturesClassifierOptions,(r=nt(this.j,Qr,3))==null?void 0:r.h());Ne(n,0,2,i),Ne(this.j,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=nt(this.j,Qr,3))==null||s.g());return t.customGesturesClassifierOptions?(Ne(n=e=new Qr,0,2,i=Hl(t.customGesturesClassifierOptions,(a=nt(this.j,Qr,4))==null?void 0:a.h())),Ne(this.j,0,4,e)):t.customGesturesClassifierOptions===void 0&&((o=nt(this.j,Qr,4))==null||o.g()),this.l(t)}Pa(t,e){return Gf(this),ei(this,t,e),Vf(this)}Qa(t,e,n){return Gf(this),Ni(this,t,n,e),Vf(this)}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect"),xt(t,"hand_gestures"),xt(t,"hand_landmarks"),xt(t,"world_hand_landmarks"),xt(t,"handedness");const e=new On;Kn(e,hS,this.v);const n=new on;kn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),ut(n,"HAND_GESTURES:hand_gestures"),ut(n,"LANDMARKS:hand_landmarks"),ut(n,"WORLD_LANDMARKS:world_hand_landmarks"),ut(n,"HANDEDNESS:handedness"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=xc(s);const a=[];for(const o of Ii(i,Wm,1))a.push({x:$t(o,1)??0,y:$t(o,2)??0,z:$t(o,3)??0});this.landmarks.push(a)}Le(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Le(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=qh(s);const a=[];for(const o of Ii(i,Vm,1))a.push({x:$t(o,1)??0,y:$t(o,2)??0,z:$t(o,3)??0});this.worldLandmarks.push(a)}Le(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Le(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Hf(i,!1)),Le(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{Le(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Hf(i)),Le(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Wf(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Sn.prototype.recognizeForVideo=Sn.prototype.Qa,Sn.prototype.recognize=Sn.prototype.Pa,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(t,e){return et(Sn,t,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(t,e){return et(Sn,t,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(t,e){return et(Sn,t,e)},Sn.HAND_CONNECTIONS=zg;var yn=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ne(t=this.j=new Yh,0,1,e=new Rt),this.u=new dg,Ne(this.j,0,3,this.u),this.h=new hg,Ne(this.j,0,2,this.h),fi(this.h,3,1),Oe(this.h,2,.5),Oe(this.u,2,.5),Oe(this.j,4,.5)}get baseOptions(){return nt(this.j,Rt,1)}set baseOptions(t){Ne(this.j,0,1,t)}o(t){return"numHands"in t&&fi(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Oe(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Oe(this.j,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Oe(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}G(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ei(this,t,e),Wf(this)}H(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ni(this,t,n,e),Wf(this)}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect"),xt(t,"hand_landmarks"),xt(t,"world_hand_landmarks"),xt(t,"handedness");const e=new On;Kn(e,lS,this.j);const n=new on;kn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),ut(n,"LANDMARKS:hand_landmarks"),ut(n,"WORLD_LANDMARKS:world_hand_landmarks"),ut(n,"HANDEDNESS:handedness"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=xc(s),this.landmarks.push(Zh(i));Le(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Le(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=qh(s),this.worldLandmarks.push(wg(i));Le(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Le(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Xh(c);const l=[];for(const h of i.g())l.push({score:$t(h,2)??0,index:di(In(h,1))??-1,categoryName:Fn(h,3)??""??"",displayName:Fn(h,4)??""??""});o.push(l)}a.call(s,...o),Le(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.prototype.detectForVideo=yn.prototype.H,yn.prototype.detect=yn.prototype.G,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(t,e){return et(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return et(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return et(yn,t,e)},yn.HAND_CONNECTIONS=zg;var Cn=class extends bn{constructor(t,e){super(new Qn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ne(t=this.h=new gg,0,1,e=new Rt)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return Ne(this.h,0,2,Hl(t,nt(this.h,Mc,2))),this.l(t)}ya(t,e){return this.j={classifications:[]},ei(this,t,e),this.j}za(t,e,n){return this.j={classifications:[]},Ni(this,t,n,e),this.j}m(){var t=new _n;St(t,"input_image"),St(t,"norm_rect"),xt(t,"classifications");const e=new On;Kn(e,uS,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),gt(n,"IMAGE:input_image"),gt(n,"NORM_RECT:norm_rect"),ut(n,"CLASSIFICATIONS:classifications"),n.o(e),zn(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:Ii(s,YM,1).map(o=>{var c;return Tg(((c=nt(o,Wh,4))==null?void 0:c.g())??[],di(In(o,2)),Fn(o,3)??"")})};return Xo(Ts(s,2))!=null&&(a.timestampMs=di(Xo(Ts(s,2)))),a}(KM(i)),Le(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.classifyForVideo=Cn.prototype.za,Cn.prototype.classify=Cn.prototype.ya,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return et(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return et(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return et(Cn,t,e)};var En=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!0),this.h=new _g,this.embeddings={embeddings:[]},Ne(t=this.h,0,1,e=new Rt)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){var e=this.h,n=nt(this.h,bf,2);return n=n?n.clone():new bf,t.l2Normalize!==void 0?va(n,1,t.l2Normalize):"l2Normalize"in t&&pt(n,1),t.quantize!==void 0?va(n,2,t.quantize):"quantize"in t&&pt(n,2),Ne(e,0,2,n),this.l(t)}Fa(t,e){return ei(this,t,e),this.embeddings}Ga(t,e,n){return Ni(this,t,n,e),this.embeddings}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect"),xt(t,"embeddings_out");const e=new On;Kn(e,dS,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),ut(n,"EMBEDDINGS:embeddings_out"),n.o(e),zn(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=eS(i),this.embeddings=function(s){return{embeddings:Ii(s,JM,1).map(a=>{var c,l;const o={headIndex:di(In(a,3))??-1,headName:Fn(a,4)??""??""};if(dm(a,Gl,gl(a,1))!==void 0)a=rs(a=nt(a,Gl,gl(a,1)),1,rr),o.floatEmbedding=a;else{const h=new Uint8Array(0);o.quantizedEmbedding=((l=(c=nt(a,ZM,gl(a,2)))==null?void 0:c.ua())==null?void 0:l.wa())??h}return o}),timestampMs:di(Xo(Ts(s,2)))}}(i),Le(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};En.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Rf(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Rf(Af(t.quantizedEmbedding),Af(e.quantizedEmbedding))}return t},En.prototype.embedForVideo=En.prototype.Ga,En.prototype.embed=En.prototype.Fa,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(t,e){return et(En,t,{baseOptions:{modelAssetPath:e}})},En.createFromModelBuffer=function(t,e){return et(En,t,{baseOptions:{modelAssetBuffer:e}})},En.createFromOptions=function(t,e){return et(En,t,e)};var jl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function Xf(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function qf(t){try{const e=new jl(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Qh(t)}}jl.prototype.close=jl.prototype.close;var ln=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new $h,this.v=new vg,Ne(this.h,0,3,this.v),Ne(t=this.h,0,1,e=new Rt)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?pt(this.h,2,Na(t.displayNamesLocale)):"displayNamesLocale"in t&&pt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}N(){(function(t){var n,i;const e=Ii(t.da(),on,1).filter(r=>(Fn(r,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=nt(e[0],On,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=Fn(r,1)??""})})(this)}ea(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Xf(this),ei(this,t,i),qf(this)}Sa(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Xf(this),Ni(this,t,r,e),qf(this)}Ja(){return this.u}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect");const e=new On;Kn(e,Mg,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),n.o(e),zn(t,n),Jh(this,t),this.outputConfidenceMasks&&(xt(t,"confidence_masks"),ut(n,"CONFIDENCE_MASKS:confidence_masks"),xa(this,"confidence_masks"),this.g.ca("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ma(this,s,!0,!this.j)),Le(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Le(this,i)})),this.outputCategoryMask&&(xt(t,"category_mask"),ut(n,"CATEGORY_MASK:category_mask"),xa(this,"category_mask"),this.g.ba("category_mask",(i,r)=>{this.categoryMask=Ma(this,i,!1,!this.j),Le(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Le(this,i)})),xt(t,"quality_scores"),ut(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,Le(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ln.prototype.getLabels=ln.prototype.Ja,ln.prototype.segmentForVideo=ln.prototype.Sa,ln.prototype.segment=ln.prototype.ea,ln.prototype.setOptions=ln.prototype.o,ln.createFromModelPath=function(t,e){return et(ln,t,{baseOptions:{modelAssetPath:e}})},ln.createFromModelBuffer=function(t,e){return et(ln,t,{baseOptions:{modelAssetBuffer:e}})},ln.createFromOptions=function(t,e){return et(ln,t,e)};var Yl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Yl.prototype.close=Yl.prototype.close;var AS=class extends Me{constructor(t){super(t)}},Rs=[0,Ct,-2],RS=[0,Li,-3,Nt],Tc=[0,Li,-3,Nt,Li,-1],Gg=[0,Tc],CS=[0,Gg,Rs],LS=[0,Tc,Rs],Vg=[0,Tc,Ct,-1],PS=[0,Vg,Rs],US=[0,Li,-3,Nt,Rs,-1],DS=[0,Li,-3,Nt,pi],xl=class extends Me{constructor(t){super(t)}},jf=[0,Li,-1,Nt],Hg=class extends Me{constructor(){super()}};Hg.A=[1];var Yf=class extends Me{constructor(t){super(t)}},$l=[1,2,3,4,5,6,7,8,9,10,14,15],IS=[0,$l,vt,Tc,vt,LS,vt,Gg,vt,CS,vt,jf,vt,DS,vt,RS,vt,[0,_t,Li,-2,Nt,Ct,Nt,-1,2,Li,Rs],vt,Vg,vt,PS,Li,Rs,_t,vt,US,vt,[0,Ft,jf]],NS=[0,_t,Ct,-1,Nt],Kl=class extends Me{constructor(){super()}};Kl.A=[1],Kl.prototype.g=Hh([0,Ft,IS,_t,NS]);var ii=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new $h,this.v=new vg,Ne(this.h,0,3,this.v),Ne(t=this.h,0,1,e=new Rt)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}ea(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.I+1,i=new Kl;const s=new Yf;var a=new AS;if(fi(a,1,255),Ne(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new xl;va(o,3,!0),Oe(o,1,e.keypoint.x),Oe(o,2,e.keypoint.y),ia(s,5,$l,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new Hg,e.scribble))va(e=new xl,3,!0),Oe(e,1,o.x),Oe(e,2,o.y),zl(a,xl,e);ia(s,15,$l,a)}zl(i,Yf,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),ei(this,t,r);e:{try{const l=new Yl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{Qh(this)}c=void 0}return c}m(){var t=new _n;St(t,"image_in"),St(t,"roi_in"),St(t,"norm_rect_in");const e=new On;Kn(e,Mg,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),gt(n,"IMAGE:image_in"),gt(n,"ROI:roi_in"),gt(n,"NORM_RECT:norm_rect_in"),n.o(e),zn(t,n),Jh(this,t),this.outputConfidenceMasks&&(xt(t,"confidence_masks"),ut(n,"CONFIDENCE_MASKS:confidence_masks"),xa(this,"confidence_masks"),this.g.ca("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Ma(this,s,!0,!this.j)),Le(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Le(this,i)})),this.outputCategoryMask&&(xt(t,"category_mask"),ut(n,"CATEGORY_MASK:category_mask"),xa(this,"category_mask"),this.g.ba("category_mask",(i,r)=>{this.categoryMask=Ma(this,i,!1,!this.j),Le(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Le(this,i)})),xt(t,"quality_scores"),ut(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,Le(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ii.prototype.segment=ii.prototype.ea,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(t,e){return et(ii,t,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(t,e){return et(ii,t,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(t,e){return et(ii,t,e)};var Ln=class extends bn{constructor(t,e){super(new Qn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ne(t=this.h=new Kh,0,1,e=new Rt)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?pt(this.h,2,Na(t.displayNamesLocale)):"displayNamesLocale"in t&&pt(this.h,2),t.maxResults!==void 0?fi(this.h,3,t.maxResults):"maxResults"in t&&pt(this.h,3),t.scoreThreshold!==void 0?Oe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&pt(this.h,4),t.categoryAllowlist!==void 0?Yo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&pt(this.h,5),t.categoryDenylist!==void 0?Yo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&pt(this.h,6),this.l(t)}G(t,e){return this.j={detections:[]},ei(this,t,e),this.j}H(t,e,n){return this.j={detections:[]},Ni(this,t,n,e),this.j}m(){var t=new _n;St(t,"input_frame_gpu"),St(t,"norm_rect"),xt(t,"detections");const e=new On;Kn(e,pS,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),gt(n,"IMAGE:input_frame_gpu"),gt(n,"NORM_RECT:norm_rect"),ut(n,"DETECTIONS:detections"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Gm(s),this.j.detections.push(bg(i));Le(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{Le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ln.prototype.detectForVideo=Ln.prototype.H,Ln.prototype.detect=Ln.prototype.G,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=async function(t,e){return et(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return et(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return et(Ln,t,e)};function $f(t){t.landmarks=[],t.worldLandmarks=[],t.v=void 0}function Kf(t){try{const e=new class{constructor(n,i,r){this.landmarks=n,this.worldLandmarks=i,this.g=r}close(){var n;(n=this.g)==null||n.forEach(i=>{i.close()})}}(t.landmarks,t.worldLandmarks,t.v);if(!t.u)return e;t.u(e)}finally{Qh(t)}}var hn=class extends bn{constructor(t,e){super(new Qn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ne(t=this.h=new Eg,0,1,e=new Rt),this.B=new gS,Ne(this.h,0,3,this.B),this.j=new mS,Ne(this.h,0,2,this.j),fi(this.j,4,1),Oe(this.j,2,.5),Oe(this.B,2,.5),Oe(this.h,4,.5)}get baseOptions(){return nt(this.h,Rt,1)}set baseOptions(t){Ne(this.h,0,1,t)}o(t){return"numPoses"in t&&fi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Oe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Oe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Oe(this.B,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}G(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,$f(this),ei(this,t,i),Kf(this)}H(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,$f(this),Ni(this,t,r,e),Kf(this)}m(){var t=new _n;St(t,"image_in"),St(t,"norm_rect"),xt(t,"normalized_landmarks"),xt(t,"world_landmarks"),xt(t,"segmentation_masks");const e=new On;Kn(e,vS,this.h);const n=new on;kn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),ut(n,"NORM_LANDMARKS:normalized_landmarks"),ut(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),zn(t,n),Jh(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=xc(s),this.landmarks.push(Zh(i));Le(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],Le(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=qh(s),this.worldLandmarks.push(wg(i));Le(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],Le(this,i)}),this.outputSegmentationMasks&&(ut(n,"SEGMENTATION_MASK:segmentation_masks"),xa(this,"segmentation_masks"),this.g.ca("segmentation_masks",(i,r)=>{this.v=i.map(s=>Ma(this,s,!0,!this.u)),Le(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.v=[],Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hn.prototype.detectForVideo=hn.prototype.H,hn.prototype.detect=hn.prototype.G,hn.prototype.setOptions=hn.prototype.o,hn.createFromModelPath=function(t,e){return et(hn,t,{baseOptions:{modelAssetPath:e}})},hn.createFromModelBuffer=function(t,e){return et(hn,t,{baseOptions:{modelAssetBuffer:e}})},hn.createFromOptions=function(t,e){return et(hn,t,e)},hn.POSE_CONNECTIONS=Jn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);class FS{constructor(e=.35){Ye(this,"alpha");Ye(this,"prevWorld",null);Ye(this,"prevNorm",null);this.alpha=e}smoothSet(e,n){return e.map((i,r)=>{const s=n[r];return s?{x:this.alpha*i.x+(1-this.alpha)*s.x,y:this.alpha*i.y+(1-this.alpha)*s.y,z:this.alpha*i.z+(1-this.alpha)*s.z}:i})}smooth(e,n){const i=this.prevWorld?e.map((s,a)=>this.prevWorld[a]?this.smoothSet(s,this.prevWorld[a]):s):e,r=this.prevNorm?n.map((s,a)=>this.prevNorm[a]?this.smoothSet(s,this.prevNorm[a]):s):n;return this.prevWorld=i,this.prevNorm=r,{worldLandmarks:i,normalizedLandmarks:r}}reset(){this.prevWorld=null,this.prevNorm=null}}class OS{constructor(e,n){Ye(this,"poseLandmarker",null);Ye(this,"video");Ye(this,"onStatusChange");Ye(this,"smoother",new FS(.35));Ye(this,"lastTimestamp",-1);Ye(this,"timestampOffset",0);this.video=e,this.onStatusChange=n}get smoothAlpha(){return this.smoother.alpha}set smoothAlpha(e){this.smoother.alpha=Math.max(.01,Math.min(1,e))}async init(){try{this.updateStatus("loading","MediaPipeモデルをロード中...");const e=await Ys.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.9/wasm");this.poseLandmarker=await hn.createFromOptions(e,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5})}catch(e){throw this.updateStatus("error",`モデルのロードに失敗しました: ${e.message}`),e}}async startCamera(){try{if(this.updateStatus("camera_starting","カメラを起動中..."),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Webブラウザがカメラ入力をサポートしていません。");this.stopCurrentSource(),this.smoother.reset();const e=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});return this.video.srcObject=e,this.video.src="",this.video.style.transform="scaleX(-1)",new Promise((n,i)=>{this.video.onloadedmetadata=()=>{this.video.play().then(()=>{this.updateStatus("running_webcam","実行中 (Webcam)"),n(!0)}).catch(i)},this.video.onerror=()=>i(new Error("ビデオの読み込みに失敗しました"))})}catch(e){throw this.updateStatus("error",`カメラの起動に失敗しました: ${e.message}`),e}}async setVideoSource(e){try{this.updateStatus("file_loading","ビデオファイルを読み込み中..."),this.stopCurrentSource(),this.smoother.reset();const n=URL.createObjectURL(e);return this.video.srcObject=null,this.video.src=n,this.video.style.transform="scaleX(1)",new Promise((i,r)=>{this.video.onloadedmetadata=()=>{this.video.play().then(()=>{this.updateStatus("running_file",`実行中 (File: ${e.name})`),i(!0)}).catch(r)},this.video.onerror=()=>r(new Error("ビデオファイルの再生に失敗しました"))})}catch(n){throw this.updateStatus("error",`ファイルの読み込みに失敗しました: ${n.message}`),n}}updateStatus(e,n){this.onStatusChange&&this.onStatusChange(e,n)}stopCurrentSource(){this.video.srcObject&&this.video.srcObject.getTracks().forEach(n=>n.stop()),this.video.src&&URL.revokeObjectURL(this.video.src)}estimate(e){var i,r;if(!this.poseLandmarker||this.video.readyState<2)return null;let n=e+this.timestampOffset;n<=this.lastTimestamp&&(this.timestampOffset=this.lastTimestamp-e+1,n=e+this.timestampOffset),this.lastTimestamp=n;try{const s=this.poseLandmarker.detectForVideo(this.video,n);if(!s||!((i=s.worldLandmarks)!=null&&i.length)||!((r=s.landmarks)!=null&&r.length))return s;const{worldLandmarks:a,normalizedLandmarks:o}=this.smoother.smooth(s.worldLandmarks,s.landmarks);return{...s,worldLandmarks:a,landmarks:o}}catch(s){return console.error("MediaPipe estimate error:",s),null}}}class BS{constructor(e){Ye(this,"scene");Ye(this,"boxes",new Map);Ye(this,"headBox",null);Ye(this,"scaleFactor",2.5);Ye(this,"adjRoll",0);Ye(this,"adjPitch",0);Ye(this,"offsetX",0);Ye(this,"offsetY",0);Ye(this,"offsetZ",0);Ye(this,"headScale",.33);Ye(this,"_brightness",1);Ye(this,"mode","centroid");Ye(this,"directDepthOffset",0);Ye(this,"mirrored",!0);Ye(this,"_videoOpacity",.5);Ye(this,"showFloorGrid",!1);Ye(this,"virtualFrame",null);Ye(this,"videoPlane",null);Ye(this,"videoTexture",null);Ye(this,"floorGrid",null);Ye(this,"frameAspectRatio",16/9);Ye(this,"colors",{right:{main:62207,front:62207,back:21930},left:{main:16711880,front:16711880,back:8912998},center:{main:7340287,front:7340287,back:3342472}});Ye(this,"connections",[{start:11,end:12,name:"shoulders",side:"center"},{start:11,end:23,name:"left_torso",side:"left"},{start:12,end:24,name:"right_torso",side:"right"},{start:23,end:24,name:"hips",side:"center"},{start:11,end:13,name:"left_upper_arm",side:"left"},{start:13,end:15,name:"left_lower_arm",side:"left"},{start:12,end:14,name:"right_upper_arm",side:"right"},{start:14,end:16,name:"right_lower_arm",side:"right"},{start:23,end:25,name:"left_upper_leg",side:"left"},{start:25,end:27,name:"left_lower_leg",side:"left"},{start:24,end:26,name:"right_upper_leg",side:"right"},{start:26,end:28,name:"right_lower_leg",side:"right"}]);this.scene=e,this.initBoxes(),this.initHead(),this.initVirtualFrame(),this.initVideoPlane(),this.initFloorGrid()}get brightness(){return this._brightness}set brightness(e){this._brightness=e,this.updateMaterialIntensity()}get videoOpacity(){return this._videoOpacity}set videoOpacity(e){this._videoOpacity=e,this.videoPlane&&(this.videoPlane.material.opacity=e)}updateMaterialIntensity(){const e=n=>{if(!n)return;const i=n.material;Array.isArray(i)&&i.forEach((r,s)=>{const a=s===4?.4:.1;r.emissiveIntensity=a*this._brightness})};this.boxes.forEach(n=>e(n)),e(this.headBox)}createMultiMaterial(e){const n=this.colors[e],i=[new Jr({color:n.main,emissive:n.main,emissiveIntensity:.1,metalness:.8,roughness:.2}),new Jr({color:n.main,emissive:n.main,emissiveIntensity:.1,metalness:.8,roughness:.2}),new Jr({color:n.main,emissive:n.main,emissiveIntensity:.1,metalness:.8,roughness:.2}),new Jr({color:n.main,emissive:n.main,emissiveIntensity:.1,metalness:.8,roughness:.2}),new Jr({color:n.front,emissive:n.front,emissiveIntensity:.3,metalness:.8,roughness:.2}),new Jr({color:n.back,emissive:n.back,emissiveIntensity:.05,metalness:.8,roughness:.2})];return i.forEach(r=>{r.userData.baseEmissiveIntensity=r.emissiveIntensity}),i}initBoxes(){this.connections.forEach(e=>{const n=new Dr(1,1,1),i=this.createMultiMaterial(e.side),r=new jn(n,i);r.name=e.name,r.visible=!1,r.castShadow=!0,this.scene.add(r),this.boxes.set(e.name,r)})}initHead(){const e=new Dr(1,1,1),n=this.createMultiMaterial("center");this.headBox=new jn(e,n),this.headBox.name="head",this.headBox.visible=!1,this.headBox.castShadow=!0,this.scene.add(this.headBox)}initFloorGrid(){const e=new N3(10,20,62207,13124);(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.transparent=!0,i.opacity=.18}),e.position.set(0,0,0),e.visible=!1,this.scene.add(e),this.floorGrid=e}initVideoPlane(){const n=4/this.frameAspectRatio,i=new sc(4,n),r=new uh({transparent:!0,opacity:this._videoOpacity,side:li});this.videoPlane=new jn(i,r),this.videoPlane.position.set(0,1.5,-.01),this.videoPlane.visible=!1,this.scene.add(this.videoPlane)}initVirtualFrame(){const n=4/this.frameAspectRatio,i=new mi,r=new Float32Array([-4/2,-n/2,0,4/2,-n/2,0,4/2,-n/2,0,4/2,n/2,0,4/2,n/2,0,-4/2,n/2,0,-4/2,n/2,0,-4/2,-n/2,0]);i.setAttribute("position",new Yn(r,3));const s=new ph({color:62207,transparent:!0,opacity:.8});this.virtualFrame=new Up(i,s),this.virtualFrame.position.set(0,1.5,0),this.virtualFrame.visible=!1,this.scene.add(this.virtualFrame)}updateVideoSource(e){this.videoTexture||(this.videoTexture=new L3(e),this.videoTexture.colorSpace=qt,this.videoPlane&&(this.videoPlane.material.map=this.videoTexture))}update(e,n){if(!e||e.length===0)return;this.updateMaterialIntensity();const i=new La(this.adjPitch,0,this.adjRoll),r=new U(this.offsetX,this.offsetY,this.offsetZ);this.virtualFrame&&(this.virtualFrame.visible=this.mode==="direct",this.virtualFrame.position.z=this.directDepthOffset),this.videoPlane&&(this.videoPlane.visible=this.mode==="direct",this.videoPlane.position.z=this.directDepthOffset-.01),this.floorGrid&&(this.floorGrid.visible=this.mode==="direct"&&this.showFloorGrid);const s=4,a=s/this.frameAspectRatio;this.connections.forEach(o=>{const c=this.boxes.get(o.name);if(!c)return;let l,h;if(this.mode==="centroid"){const _=e[o.start],p=e[o.end];l=new U(_.x,-_.y,-_.z),h=new U(p.x,-p.y,-p.z),this.mirrored&&(l.x*=-1,h.x*=-1),l.applyEuler(i).multiplyScalar(this.scaleFactor).add(r),h.applyEuler(i).multiplyScalar(this.scaleFactor).add(r)}else{const _=n[o.start],p=n[o.end],u=e[o.start],b=e[o.end],M=this.mirrored?.5-_.x:_.x-.5,w=this.mirrored?.5-p.x:p.x-.5;l=new U(M*s,(.5-_.y)*a+1.5,-u.z*this.scaleFactor+this.directDepthOffset),h=new U(w*s,(.5-p.y)*a+1.5,-b.z*this.scaleFactor+this.directDepthOffset)}const d=new U().addVectors(l,h).multiplyScalar(.5);c.position.copy(d);const m=new U().subVectors(h,l).length(),g=.04*this.scaleFactor;c.scale.set(g,g,m),c.lookAt(h),c.visible=!0}),this.updateHead(e,n,i,r,s,a)}updateHead(e,n,i,r,s,a){if(!this.headBox)return;const o=e[0],c=n[0],l=e[7],h=e[8];if(!o||!l||!h)return;let d,f;if(this.mode==="centroid"){d=new U(o.x,-o.y,-o.z),this.mirrored&&(d.x*=-1),d.applyEuler(i).multiplyScalar(this.scaleFactor).add(r);const m=new U(l.x,-l.y,-l.z),g=new U(h.x,-h.y,-h.z);f=m.distanceTo(g)*1.2*this.scaleFactor*this.headScale}else{const m=this.mirrored?.5-c.x:c.x-.5;d=new U(m*s,(.5-c.y)*a+1.5,-o.z*this.scaleFactor+this.directDepthOffset);const g=n[7],_=n[8],p=this.mirrored?.5-g.x:g.x-.5,u=this.mirrored?.5-_.x:_.x-.5,b=new U(p*s,(.5-g.y)*a+1.5,this.directDepthOffset),M=new U(u*s,(.5-_.y)*a+1.5,this.directDepthOffset);f=b.distanceTo(M)*1.5*this.headScale*this.scaleFactor}this.headBox.position.copy(d),this.headBox.position.y+=f*.1,this.headBox.scale.set(f,f,f),this.headBox.visible=!0}}var su=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},E=(t,e,n)=>(su(t,e,"read from private field"),n?n.call(t):e.get(t)),le=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ke=(t,e,n,i)=>(su(t,e,"write to private field"),e.set(t,n),n),fe=(t,e,n)=>(su(t,e,"access private method"),n),Wg=class{constructor(t){this.value=t}},au=class{constructor(t){this.value=t}},Xg=t=>t<256?1:t<65536?2:t<1<<24?3:t<2**32?4:t<2**40?5:6,kS=t=>{if(t<127)return 1;if(t<16383)return 2;if(t<(1<<21)-1)return 3;if(t<(1<<28)-1)return 4;if(t<2**35-1)return 5;if(t<2**42-1)return 6;throw new Error("EBML VINT size not supported "+t)},es=(t,e,n)=>{let i=0;for(let r=e;r<n;r++){let s=Math.floor(r/8),a=t[s],o=7-(r&7),c=(a&1<<o)>>o;i<<=1,i|=c}return i},zS=(t,e,n,i)=>{for(let r=e;r<n;r++){let s=Math.floor(r/8),a=t[s],o=7-(r&7);a&=~(1<<o),a|=(i&1<<n-r-1)>>n-r-1<<o,t[s]=a}},bc=class{},qg=class extends bc{constructor(){super(...arguments),this.buffer=null}},jg=class extends bc{constructor(t){if(super(),this.options=t,typeof t!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(t.onData){if(typeof t.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(t.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(t.onHeader&&typeof t.onHeader!="function")throw new TypeError("options.onHeader, when provided, must be a function.");if(t.onCluster&&typeof t.onCluster!="function")throw new TypeError("options.onCluster, when provided, must be a function.");if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},GS=class extends bc{constructor(t,e){if(super(),this.stream=t,this.options=e,!(t instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Zi,tt,Zl,Yg,Jl,$g,Ql,Kg,Ro,eh,th,Zg,Jg=class{constructor(){le(this,Zl),le(this,Jl),le(this,Ql),le(this,Ro),le(this,th),this.pos=0,le(this,Zi,new Uint8Array(8)),le(this,tt,new DataView(E(this,Zi).buffer)),this.offsets=new WeakMap,this.dataOffsets=new WeakMap}seek(t){this.pos=t}writeEBMLVarInt(t,e=kS(t)){let n=0;switch(e){case 1:E(this,tt).setUint8(n++,128|t);break;case 2:E(this,tt).setUint8(n++,64|t>>8),E(this,tt).setUint8(n++,t);break;case 3:E(this,tt).setUint8(n++,32|t>>16),E(this,tt).setUint8(n++,t>>8),E(this,tt).setUint8(n++,t);break;case 4:E(this,tt).setUint8(n++,16|t>>24),E(this,tt).setUint8(n++,t>>16),E(this,tt).setUint8(n++,t>>8),E(this,tt).setUint8(n++,t);break;case 5:E(this,tt).setUint8(n++,8|t/2**32&7),E(this,tt).setUint8(n++,t>>24),E(this,tt).setUint8(n++,t>>16),E(this,tt).setUint8(n++,t>>8),E(this,tt).setUint8(n++,t);break;case 6:E(this,tt).setUint8(n++,4|t/2**40&3),E(this,tt).setUint8(n++,t/2**32|0),E(this,tt).setUint8(n++,t>>24),E(this,tt).setUint8(n++,t>>16),E(this,tt).setUint8(n++,t>>8),E(this,tt).setUint8(n++,t);break;default:throw new Error("Bad EBML VINT size "+e)}this.write(E(this,Zi).subarray(0,n))}writeEBML(t){if(t!==null)if(t instanceof Uint8Array)this.write(t);else if(Array.isArray(t))for(let e of t)this.writeEBML(e);else if(this.offsets.set(t,this.pos),fe(this,Ro,eh).call(this,t.id),Array.isArray(t.data)){let e=this.pos,n=t.size===-1?1:t.size??4;t.size===-1?fe(this,Zl,Yg).call(this,255):this.seek(this.pos+n);let i=this.pos;if(this.dataOffsets.set(t,i),this.writeEBML(t.data),t.size!==-1){let r=this.pos-i,s=this.pos;this.seek(e),this.writeEBMLVarInt(r,n),this.seek(s)}}else if(typeof t.data=="number"){let e=t.size??Xg(t.data);this.writeEBMLVarInt(e),fe(this,Ro,eh).call(this,t.data,e)}else typeof t.data=="string"?(this.writeEBMLVarInt(t.data.length),fe(this,th,Zg).call(this,t.data)):t.data instanceof Uint8Array?(this.writeEBMLVarInt(t.data.byteLength,t.size),this.write(t.data)):t.data instanceof Wg?(this.writeEBMLVarInt(4),fe(this,Jl,$g).call(this,t.data.value)):t.data instanceof au&&(this.writeEBMLVarInt(8),fe(this,Ql,Kg).call(this,t.data.value))}};Zi=new WeakMap;tt=new WeakMap;Zl=new WeakSet;Yg=function(t){E(this,tt).setUint8(0,t),this.write(E(this,Zi).subarray(0,1))};Jl=new WeakSet;$g=function(t){E(this,tt).setFloat32(0,t,!1),this.write(E(this,Zi).subarray(0,4))};Ql=new WeakSet;Kg=function(t){E(this,tt).setFloat64(0,t,!1),this.write(E(this,Zi))};Ro=new WeakSet;eh=function(t,e=Xg(t)){let n=0;switch(e){case 6:E(this,tt).setUint8(n++,t/2**40|0);case 5:E(this,tt).setUint8(n++,t/2**32|0);case 4:E(this,tt).setUint8(n++,t>>24);case 3:E(this,tt).setUint8(n++,t>>16);case 2:E(this,tt).setUint8(n++,t>>8);case 1:E(this,tt).setUint8(n++,t);break;default:throw new Error("Bad UINT size "+e)}this.write(E(this,Zi).subarray(0,n))};th=new WeakSet;Zg=function(t){this.write(new Uint8Array(t.split("").map(e=>e.charCodeAt(0))))};var Co,Lr,Sa,Lo,nh,VS=class extends Jg{constructor(t){super(),le(this,Lo),le(this,Co,void 0),le(this,Lr,new ArrayBuffer(2**16)),le(this,Sa,new Uint8Array(E(this,Lr))),ke(this,Co,t)}write(t){fe(this,Lo,nh).call(this,this.pos+t.byteLength),E(this,Sa).set(t,this.pos),this.pos+=t.byteLength}finalize(){fe(this,Lo,nh).call(this,this.pos),E(this,Co).buffer=E(this,Lr).slice(0,this.pos)}};Co=new WeakMap;Lr=new WeakMap;Sa=new WeakMap;Lo=new WeakSet;nh=function(t){let e=E(this,Lr).byteLength;for(;e<t;)e*=2;if(e===E(this,Lr).byteLength)return;let n=new ArrayBuffer(e),i=new Uint8Array(n);i.set(E(this,Sa),0),ke(this,Lr,n),ke(this,Sa,i)};var ts,ri,si,gr,Ba=class extends Jg{constructor(t){super(),this.target=t,le(this,ts,!1),le(this,ri,void 0),le(this,si,void 0),le(this,gr,void 0)}write(t){if(!E(this,ts))return;let e=this.pos;if(e<E(this,si)){if(e+t.byteLength<=E(this,si))return;t=t.subarray(E(this,si)-e),e=0}let n=e+t.byteLength-E(this,si),i=E(this,ri).byteLength;for(;i<n;)i*=2;if(i!==E(this,ri).byteLength){let r=new Uint8Array(i);r.set(E(this,ri),0),ke(this,ri,r)}E(this,ri).set(t,e-E(this,si)),ke(this,gr,Math.max(E(this,gr),e+t.byteLength))}startTrackingWrites(){ke(this,ts,!0),ke(this,ri,new Uint8Array(2**10)),ke(this,si,this.pos),ke(this,gr,this.pos)}getTrackedWrites(){if(!E(this,ts))throw new Error("Can't get tracked writes since nothing was tracked.");let e={data:E(this,ri).subarray(0,E(this,gr)-E(this,si)),start:E(this,si),end:E(this,gr)};return ke(this,ri,void 0),ke(this,ts,!1),e}};ts=new WeakMap;ri=new WeakMap;si=new WeakMap;gr=new WeakMap;var HS=2**24,WS=2,_r,hs,sa,Ks,Ui,Tn,Ko,ih,ou,Qg,cu,e0,aa,Zo,lu=class extends Ba{constructor(t,e){var n,i;super(t),le(this,Ko),le(this,ou),le(this,cu),le(this,aa),le(this,_r,[]),le(this,hs,0),le(this,sa,void 0),le(this,Ks,void 0),le(this,Ui,void 0),le(this,Tn,[]),ke(this,sa,e),ke(this,Ks,((n=t.options)==null?void 0:n.chunked)??!1),ke(this,Ui,((i=t.options)==null?void 0:i.chunkSize)??HS)}write(t){super.write(t),E(this,_r).push({data:t.slice(),start:this.pos}),this.pos+=t.byteLength}flush(){var n,i;if(E(this,_r).length===0)return;let t=[],e=[...E(this,_r)].sort((r,s)=>r.start-s.start);t.push({start:e[0].start,size:e[0].data.byteLength});for(let r=1;r<e.length;r++){let s=t[t.length-1],a=e[r];a.start<=s.start+s.size?s.size=Math.max(s.size,a.start+a.data.byteLength-s.start):t.push({start:a.start,size:a.data.byteLength})}for(let r of t){r.data=new Uint8Array(r.size);for(let s of E(this,_r))r.start<=s.start&&s.start<r.start+r.size&&r.data.set(s.data,s.start-r.start);if(E(this,Ks))fe(this,Ko,ih).call(this,r.data,r.start),fe(this,aa,Zo).call(this);else{if(E(this,sa)&&r.start<E(this,hs))throw new Error("Internal error: Monotonicity violation.");(i=(n=this.target.options).onData)==null||i.call(n,r.data,r.start),ke(this,hs,r.start+r.data.byteLength)}}E(this,_r).length=0}finalize(){E(this,Ks)&&fe(this,aa,Zo).call(this,!0)}};_r=new WeakMap;hs=new WeakMap;sa=new WeakMap;Ks=new WeakMap;Ui=new WeakMap;Tn=new WeakMap;Ko=new WeakSet;ih=function(t,e){let n=E(this,Tn).findIndex(o=>o.start<=e&&e<o.start+E(this,Ui));n===-1&&(n=fe(this,cu,e0).call(this,e));let i=E(this,Tn)[n],r=e-i.start,s=t.subarray(0,Math.min(E(this,Ui)-r,t.byteLength));i.data.set(s,r);let a={start:r,end:r+s.byteLength};if(fe(this,ou,Qg).call(this,i,a),i.written[0].start===0&&i.written[0].end===E(this,Ui)&&(i.shouldFlush=!0),E(this,Tn).length>WS){for(let o=0;o<E(this,Tn).length-1;o++)E(this,Tn)[o].shouldFlush=!0;fe(this,aa,Zo).call(this)}s.byteLength<t.byteLength&&fe(this,Ko,ih).call(this,t.subarray(s.byteLength),e+s.byteLength)};ou=new WeakSet;Qg=function(t,e){let n=0,i=t.written.length-1,r=-1;for(;n<=i;){let s=Math.floor(n+(i-n+1)/2);t.written[s].start<=e.start?(n=s+1,r=s):i=s-1}for(t.written.splice(r+1,0,e),(r===-1||t.written[r].end<e.start)&&r++;r<t.written.length-1&&t.written[r].end>=t.written[r+1].start;)t.written[r].end=Math.max(t.written[r].end,t.written[r+1].end),t.written.splice(r+1,1)};cu=new WeakSet;e0=function(t){let n={start:Math.floor(t/E(this,Ui))*E(this,Ui),data:new Uint8Array(E(this,Ui)),written:[],shouldFlush:!1};return E(this,Tn).push(n),E(this,Tn).sort((i,r)=>i.start-r.start),E(this,Tn).indexOf(n)};aa=new WeakSet;Zo=function(t=!1){var e,n;for(let i=0;i<E(this,Tn).length;i++){let r=E(this,Tn)[i];if(!(!r.shouldFlush&&!t)){for(let s of r.written){if(E(this,sa)&&r.start+s.start<E(this,hs))throw new Error("Internal error: Monotonicity violation.");(n=(e=this.target.options).onData)==null||n.call(e,r.data.subarray(s.start,s.end),r.start+s.start),ke(this,hs,r.start+s.end)}E(this,Tn).splice(i--,1)}}};var XS=class extends lu{constructor(t,e){var n;super(new jg({onData:(i,r)=>t.stream.write({type:"write",data:i,position:r}),chunked:!0,chunkSize:(n=t.options)==null?void 0:n.chunkSize}),e)}},Cs=1,ya=2,Jo=3,qS=1,jS=2,YS=17,$S=2**15,oa=2**13,Zf="https://github.com/Vanilagy/webm-muxer",t0=6,n0=5,KS=["strict","offset","permissive"],Re,pe,Ea,Ta,Ai,Ls,ss,Pr,Ps,Ji,us,ds,hi,ka,fs,Gi,Vi,Mr,ca,la,ps,ms,Qo,ba,ha,rh,i0,sh,r0,hu,s0,uu,a0,du,o0,fu,c0,pu,l0,wc,mu,Ac,gu,_u,h0,Sr,as,yr,os,ah,u0,oh,d0,Zs,Po,Js,Uo,vu,f0,ai,wi,gs,wa,ua,ec,xu,p0,tc,Mu,Qs,Do,ZS=class{constructor(t){le(this,rh),le(this,sh),le(this,hu),le(this,uu),le(this,du),le(this,fu),le(this,pu),le(this,wc),le(this,Ac),le(this,_u),le(this,Sr),le(this,yr),le(this,ah),le(this,oh),le(this,Zs),le(this,Js),le(this,vu),le(this,ai),le(this,gs),le(this,ua),le(this,xu),le(this,tc),le(this,Qs),le(this,Re,void 0),le(this,pe,void 0),le(this,Ea,void 0),le(this,Ta,void 0),le(this,Ai,void 0),le(this,Ls,void 0),le(this,ss,void 0),le(this,Pr,void 0),le(this,Ps,void 0),le(this,Ji,void 0),le(this,us,void 0),le(this,ds,void 0),le(this,hi,void 0),le(this,ka,void 0),le(this,fs,0),le(this,Gi,[]),le(this,Vi,[]),le(this,Mr,[]),le(this,ca,void 0),le(this,la,void 0),le(this,ps,-1),le(this,ms,-1),le(this,Qo,-1),le(this,ba,void 0),le(this,ha,!1),fe(this,rh,i0).call(this,t),ke(this,Re,{type:"webm",firstTimestampBehavior:"strict",...t}),this.target=t.target;let e=!!E(this,Re).streaming;if(t.target instanceof qg)ke(this,pe,new VS(t.target));else if(t.target instanceof jg)ke(this,pe,new lu(t.target,e));else if(t.target instanceof GS)ke(this,pe,new XS(t.target,e));else throw new Error(`Invalid target: ${t.target}`);fe(this,sh,r0).call(this)}addVideoChunk(t,e,n){if(!(t instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (chunk) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(t.byteLength);t.copyTo(i),this.addVideoChunkRaw(i,t.type,n??t.timestamp,e)}addVideoChunkRaw(t,e,n,i){if(!(t instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(i&&typeof i!="object")throw new TypeError("addVideoChunkRaw's fourth argument (meta), when provided, must be an object.");if(fe(this,Qs,Do).call(this),!E(this,Re).video)throw new Error("No video track declared.");E(this,ca)===void 0&&ke(this,ca,n),i&&fe(this,ah,u0).call(this,i);let r=fe(this,Js,Uo).call(this,t,e,n,Cs);for(E(this,Re).video.codec==="V_VP9"&&fe(this,oh,d0).call(this,r),ke(this,ps,r.timestamp);E(this,Vi).length>0&&E(this,Vi)[0].timestamp<=r.timestamp;){let s=E(this,Vi).shift();fe(this,ai,wi).call(this,s,!1)}!E(this,Re).audio||r.timestamp<=E(this,ms)?fe(this,ai,wi).call(this,r,!0):E(this,Gi).push(r),fe(this,Zs,Po).call(this),fe(this,Sr,as).call(this)}addAudioChunk(t,e,n){if(!(t instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (chunk) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(t.byteLength);t.copyTo(i),this.addAudioChunkRaw(i,t.type,n??t.timestamp,e)}addAudioChunkRaw(t,e,n,i){if(!(t instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(i&&typeof i!="object")throw new TypeError("addAudioChunkRaw's fourth argument (meta), when provided, must be an object.");if(fe(this,Qs,Do).call(this),!E(this,Re).audio)throw new Error("No audio track declared.");E(this,la)===void 0&&ke(this,la,n),i!=null&&i.decoderConfig&&(E(this,Re).streaming?ke(this,Ji,fe(this,gs,wa).call(this,i.decoderConfig.description)):fe(this,ua,ec).call(this,E(this,Ji),i.decoderConfig.description));let r=fe(this,Js,Uo).call(this,t,e,n,ya);for(ke(this,ms,r.timestamp);E(this,Gi).length>0&&E(this,Gi)[0].timestamp<=r.timestamp;){let s=E(this,Gi).shift();fe(this,ai,wi).call(this,s,!0)}!E(this,Re).video||r.timestamp<=E(this,ps)?fe(this,ai,wi).call(this,r,!E(this,Re).video):E(this,Vi).push(r),fe(this,Zs,Po).call(this),fe(this,Sr,as).call(this)}addSubtitleChunk(t,e,n){if(typeof t!="object"||!t)throw new TypeError("addSubtitleChunk's first argument (chunk) must be an object.");if(!(t.body instanceof Uint8Array))throw new TypeError("body must be an instance of Uint8Array.");if(!Number.isFinite(t.timestamp)||t.timestamp<0)throw new TypeError("timestamp must be a non-negative real number.");if(!Number.isFinite(t.duration)||t.duration<0)throw new TypeError("duration must be a non-negative real number.");if(t.additions&&!(t.additions instanceof Uint8Array))throw new TypeError("additions, when present, must be an instance of Uint8Array.");if(typeof e!="object")throw new TypeError("addSubtitleChunk's second argument (meta) must be an object.");if(fe(this,Qs,Do).call(this),!E(this,Re).subtitles)throw new Error("No subtitle track declared.");e!=null&&e.decoderConfig&&(E(this,Re).streaming?ke(this,us,fe(this,gs,wa).call(this,e.decoderConfig.description)):fe(this,ua,ec).call(this,E(this,us),e.decoderConfig.description));let i=fe(this,Js,Uo).call(this,t.body,"key",n??t.timestamp,Jo,t.duration,t.additions);ke(this,Qo,i.timestamp),E(this,Mr).push(i),fe(this,Zs,Po).call(this),fe(this,Sr,as).call(this)}finalize(){if(E(this,ha))throw new Error("Cannot finalize a muxer more than once.");for(;E(this,Gi).length>0;)fe(this,ai,wi).call(this,E(this,Gi).shift(),!0);for(;E(this,Vi).length>0;)fe(this,ai,wi).call(this,E(this,Vi).shift(),!0);for(;E(this,Mr).length>0&&E(this,Mr)[0].timestamp<=E(this,fs);)fe(this,ai,wi).call(this,E(this,Mr).shift(),!1);if(E(this,hi)&&fe(this,tc,Mu).call(this),E(this,pe).writeEBML(E(this,ds)),!E(this,Re).streaming){let t=E(this,pe).pos,e=E(this,pe).pos-E(this,yr,os);E(this,pe).seek(E(this,pe).offsets.get(E(this,Ea))+4),E(this,pe).writeEBMLVarInt(e,t0),E(this,ss).data=new au(E(this,fs)),E(this,pe).seek(E(this,pe).offsets.get(E(this,ss))),E(this,pe).writeEBML(E(this,ss)),E(this,Ai).data[0].data[1].data=E(this,pe).offsets.get(E(this,ds))-E(this,yr,os),E(this,Ai).data[1].data[1].data=E(this,pe).offsets.get(E(this,Ta))-E(this,yr,os),E(this,Ai).data[2].data[1].data=E(this,pe).offsets.get(E(this,Ls))-E(this,yr,os),E(this,pe).seek(E(this,pe).offsets.get(E(this,Ai))),E(this,pe).writeEBML(E(this,Ai)),E(this,pe).seek(t)}fe(this,Sr,as).call(this),E(this,pe).finalize(),ke(this,ha,!0)}};Re=new WeakMap;pe=new WeakMap;Ea=new WeakMap;Ta=new WeakMap;Ai=new WeakMap;Ls=new WeakMap;ss=new WeakMap;Pr=new WeakMap;Ps=new WeakMap;Ji=new WeakMap;us=new WeakMap;ds=new WeakMap;hi=new WeakMap;ka=new WeakMap;fs=new WeakMap;Gi=new WeakMap;Vi=new WeakMap;Mr=new WeakMap;ca=new WeakMap;la=new WeakMap;ps=new WeakMap;ms=new WeakMap;Qo=new WeakMap;ba=new WeakMap;ha=new WeakMap;rh=new WeakSet;i0=function(t){if(typeof t!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(t.target instanceof bc))throw new TypeError("The target must be provided and an instance of Target.");if(t.video){if(typeof t.video.codec!="string")throw new TypeError(`Invalid video codec: ${t.video.codec}. Must be a string.`);if(!Number.isInteger(t.video.width)||t.video.width<=0)throw new TypeError(`Invalid video width: ${t.video.width}. Must be a positive integer.`);if(!Number.isInteger(t.video.height)||t.video.height<=0)throw new TypeError(`Invalid video height: ${t.video.height}. Must be a positive integer.`);if(t.video.frameRate!==void 0&&(!Number.isFinite(t.video.frameRate)||t.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.video.frameRate}. Must be a positive number.`);if(t.video.alpha!==void 0&&typeof t.video.alpha!="boolean")throw new TypeError(`Invalid video alpha: ${t.video.alpha}. Must be a boolean.`)}if(t.audio){if(typeof t.audio.codec!="string")throw new TypeError(`Invalid audio codec: ${t.audio.codec}. Must be a string.`);if(!Number.isInteger(t.audio.numberOfChannels)||t.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${t.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(t.audio.sampleRate)||t.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${t.audio.sampleRate}. Must be a positive integer.`);if(t.audio.bitDepth!==void 0&&(!Number.isInteger(t.audio.bitDepth)||t.audio.bitDepth<=0))throw new TypeError(`Invalid audio bit depth: ${t.audio.bitDepth}. Must be a positive integer.`)}if(t.subtitles&&typeof t.subtitles.codec!="string")throw new TypeError(`Invalid subtitles codec: ${t.subtitles.codec}. Must be a string.`);if(t.type!==void 0&&!["webm","matroska"].includes(t.type))throw new TypeError(`Invalid type: ${t.type}. Must be 'webm' or 'matroska'.`);if(t.firstTimestampBehavior&&!KS.includes(t.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${t.firstTimestampBehavior}`);if(t.streaming!==void 0&&typeof t.streaming!="boolean")throw new TypeError(`Invalid streaming option: ${t.streaming}. Must be a boolean.`)};sh=new WeakSet;r0=function(){E(this,pe)instanceof Ba&&E(this,pe).target.options.onHeader&&E(this,pe).startTrackingWrites(),fe(this,hu,s0).call(this),E(this,Re).streaming||fe(this,fu,c0).call(this),fe(this,pu,l0).call(this),fe(this,uu,a0).call(this),fe(this,du,o0).call(this),E(this,Re).streaming||(fe(this,wc,mu).call(this),fe(this,Ac,gu).call(this)),fe(this,_u,h0).call(this),fe(this,Sr,as).call(this)};hu=new WeakSet;s0=function(){let t={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:E(this,Re).type??"webm"},{id:17031,data:2},{id:17029,data:2}]};E(this,pe).writeEBML(t)};uu=new WeakSet;a0=function(){ke(this,Ps,{id:236,size:4,data:new Uint8Array(oa)}),ke(this,Ji,{id:236,size:4,data:new Uint8Array(oa)}),ke(this,us,{id:236,size:4,data:new Uint8Array(oa)})};du=new WeakSet;o0=function(){ke(this,Pr,{id:21936,data:[{id:21937,data:2},{id:21946,data:2},{id:21947,data:2},{id:21945,data:0}]})};fu=new WeakSet;c0=function(){const t=new Uint8Array([28,83,187,107]),e=new Uint8Array([21,73,169,102]),n=new Uint8Array([22,84,174,107]);ke(this,Ai,{id:290298740,data:[{id:19899,data:[{id:21419,data:t},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:e},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:n},{id:21420,size:5,data:0}]}]})};pu=new WeakSet;l0=function(){let t={id:17545,data:new au(0)};ke(this,ss,t);let e={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:Zf},{id:22337,data:Zf},E(this,Re).streaming?null:t]};ke(this,Ta,e)};wc=new WeakSet;mu=function(){let t={id:374648427,data:[]};ke(this,Ls,t),E(this,Re).video&&t.data.push({id:174,data:[{id:215,data:Cs},{id:29637,data:Cs},{id:131,data:qS},{id:134,data:E(this,Re).video.codec},E(this,Ps),E(this,Re).video.frameRate?{id:2352003,data:1e9/E(this,Re).video.frameRate}:null,{id:224,data:[{id:176,data:E(this,Re).video.width},{id:186,data:E(this,Re).video.height},E(this,Re).video.alpha?{id:21440,data:1}:null,E(this,Pr)]}]}),E(this,Re).audio&&(ke(this,Ji,E(this,Re).streaming?E(this,Ji)||null:{id:236,size:4,data:new Uint8Array(oa)}),t.data.push({id:174,data:[{id:215,data:ya},{id:29637,data:ya},{id:131,data:jS},{id:134,data:E(this,Re).audio.codec},E(this,Ji),{id:225,data:[{id:181,data:new Wg(E(this,Re).audio.sampleRate)},{id:159,data:E(this,Re).audio.numberOfChannels},E(this,Re).audio.bitDepth?{id:25188,data:E(this,Re).audio.bitDepth}:null]}]})),E(this,Re).subtitles&&t.data.push({id:174,data:[{id:215,data:Jo},{id:29637,data:Jo},{id:131,data:YS},{id:134,data:E(this,Re).subtitles.codec},E(this,us)]})};Ac=new WeakSet;gu=function(){let t={id:408125543,size:E(this,Re).streaming?-1:t0,data:[E(this,Re).streaming?null:E(this,Ai),E(this,Ta),E(this,Ls)]};if(ke(this,Ea,t),E(this,pe).writeEBML(t),E(this,pe)instanceof Ba&&E(this,pe).target.options.onHeader){let{data:e,start:n}=E(this,pe).getTrackedWrites();E(this,pe).target.options.onHeader(e,n)}};_u=new WeakSet;h0=function(){ke(this,ds,{id:475249515,data:[]})};Sr=new WeakSet;as=function(){E(this,pe)instanceof lu&&E(this,pe).flush()};yr=new WeakSet;os=function(){return E(this,pe).dataOffsets.get(E(this,Ea))};ah=new WeakSet;u0=function(t){if(t.decoderConfig){if(t.decoderConfig.colorSpace){let e=t.decoderConfig.colorSpace;if(ke(this,ba,e),E(this,Pr).data=[{id:21937,data:{rgb:1,bt709:1,bt470bg:5,smpte170m:6}[e.matrix]},{id:21946,data:{bt709:1,smpte170m:6,"iec61966-2-1":13}[e.transfer]},{id:21947,data:{bt709:1,bt470bg:5,smpte170m:6}[e.primaries]},{id:21945,data:[1,2][Number(e.fullRange)]}],!E(this,Re).streaming){let n=E(this,pe).pos;E(this,pe).seek(E(this,pe).offsets.get(E(this,Pr))),E(this,pe).writeEBML(E(this,Pr)),E(this,pe).seek(n)}}t.decoderConfig.description&&(E(this,Re).streaming?ke(this,Ps,fe(this,gs,wa).call(this,t.decoderConfig.description)):fe(this,ua,ec).call(this,E(this,Ps),t.decoderConfig.description))}};oh=new WeakSet;d0=function(t){if(t.type!=="key"||!E(this,ba))return;let e=0;if(es(t.data,0,2)!==2)return;e+=2;let n=(es(t.data,e+1,e+2)<<1)+es(t.data,e+0,e+1);e+=2,n===3&&e++;let i=es(t.data,e+0,e+1);if(e++,i)return;let r=es(t.data,e+0,e+1);if(e++,r!==0)return;e+=2;let s=es(t.data,e+0,e+24);if(e+=24,s!==4817730)return;n>=2&&e++;let a={rgb:7,bt709:2,bt470bg:1,smpte170m:3}[E(this,ba).matrix];zS(t.data,e+0,e+3,a)};Zs=new WeakSet;Po=function(){let t=Math.min(E(this,Re).video?E(this,ps):1/0,E(this,Re).audio?E(this,ms):1/0),e=E(this,Mr);for(;e.length>0&&e[0].timestamp<=t;)fe(this,ai,wi).call(this,e.shift(),!E(this,Re).video&&!E(this,Re).audio)};Js=new WeakSet;Uo=function(t,e,n,i,r,s){let a=fe(this,vu,f0).call(this,n,i);return{data:t,additions:s,type:e,timestamp:a,duration:r,trackNumber:i}};vu=new WeakSet;f0=function(t,e){let n=e===Cs?E(this,ps):e===ya?E(this,ms):E(this,Qo);if(e!==Jo){let i=e===Cs?E(this,ca):E(this,la);if(E(this,Re).firstTimestampBehavior==="strict"&&n===-1&&t!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received ${t}). Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of the document, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
If you want to allow non-zero first timestamps, set firstTimestampBehavior: 'permissive'.
`);E(this,Re).firstTimestampBehavior==="offset"&&(t-=i)}if(t<n)throw new Error(`Timestamps must be monotonically increasing (went from ${n} to ${t}).`);if(t<0)throw new Error(`Timestamps must be non-negative (received ${t}).`);return t};ai=new WeakSet;wi=function(t,e){E(this,Re).streaming&&!E(this,Ls)&&(fe(this,wc,mu).call(this),fe(this,Ac,gu).call(this));let n=Math.floor(t.timestamp/1e3),i=n-E(this,ka),r=e&&t.type==="key"&&i>=1e3,s=i>=$S;if((!E(this,hi)||r||s)&&(fe(this,xu,p0).call(this,n),i=0),i<0)return;let a=new Uint8Array(4),o=new DataView(a.buffer);if(o.setUint8(0,128|t.trackNumber),o.setInt16(1,i,!1),t.duration===void 0&&!t.additions){o.setUint8(3,+(t.type==="key")<<7);let c={id:163,data:[a,t.data]};E(this,pe).writeEBML(c)}else{let c=Math.floor(t.duration/1e3),l={id:160,data:[{id:161,data:[a,t.data]},t.duration!==void 0?{id:155,data:c}:null,t.additions?{id:30113,data:t.additions}:null]};E(this,pe).writeEBML(l)}ke(this,fs,Math.max(E(this,fs),n))};gs=new WeakSet;wa=function(t){return{id:25506,size:4,data:new Uint8Array(t)}};ua=new WeakSet;ec=function(t,e){let n=E(this,pe).pos;E(this,pe).seek(E(this,pe).offsets.get(t));let i=6+e.byteLength,r=oa-i;if(r<0){let s=e.byteLength+r;e instanceof ArrayBuffer?e=e.slice(0,s):e=e.buffer.slice(0,s),r=0}t=[fe(this,gs,wa).call(this,e),{id:236,size:4,data:new Uint8Array(r)}],E(this,pe).writeEBML(t),E(this,pe).seek(n)};xu=new WeakSet;p0=function(t){E(this,hi)&&fe(this,tc,Mu).call(this),E(this,pe)instanceof Ba&&E(this,pe).target.options.onCluster&&E(this,pe).startTrackingWrites(),ke(this,hi,{id:524531317,size:E(this,Re).streaming?-1:n0,data:[{id:231,data:t}]}),E(this,pe).writeEBML(E(this,hi)),ke(this,ka,t);let e=E(this,pe).offsets.get(E(this,hi))-E(this,yr,os);E(this,ds).data.push({id:187,data:[{id:179,data:t},E(this,Re).video?{id:183,data:[{id:247,data:Cs},{id:241,data:e}]}:null,E(this,Re).audio?{id:183,data:[{id:247,data:ya},{id:241,data:e}]}:null]})};tc=new WeakSet;Mu=function(){if(!E(this,Re).streaming){let t=E(this,pe).pos-E(this,pe).dataOffsets.get(E(this,hi)),e=E(this,pe).pos;E(this,pe).seek(E(this,pe).offsets.get(E(this,hi))+4),E(this,pe).writeEBMLVarInt(t,n0),E(this,pe).seek(e)}if(E(this,pe)instanceof Ba&&E(this,pe).target.options.onCluster){let{data:t,start:e}=E(this,pe).getTrackedWrites();E(this,pe).target.options.onCluster(t,e,E(this,ka))}};Qs=new WeakSet;Do=function(){if(E(this,ha))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};new TextEncoder;class JS{constructor(e,n){Ye(this,"isCapturing",!1);Ye(this,"shouldStop",!1);this.canvas=e,this.video=n}get capturing(){return this.isCapturing}async startCapture(e,n){if(this.isCapturing)return;this.isCapturing=!0,this.shouldStop=!1;const{startTime:i,endTime:r,fps:s}=e,a=1/s,o=Math.ceil((r-i)*s),c=Math.round(1e6/s);if(!("VideoEncoder"in window)){n.onError(new Error("このブラウザは WebCodecs をサポートしていません（Chrome 94+ が必要です）")),this.isCapturing=!1;return}const l=this.canvas.width%2===0?this.canvas.width:this.canvas.width-1,h=this.canvas.height%2===0?this.canvas.height:this.canvas.height-1,d=new ZS({target:new qg,video:{codec:"V_VP9",width:l,height:h},firstTimestampBehavior:"offset"});let f=null;const m=new VideoEncoder({output:(g,_)=>d.addVideoChunk(g,_),error:g=>{f=g}});m.configure({codec:"vp09.00.10.08",width:l,height:h,bitrate:8e6,framerate:s});try{for(let p=0;p<o&&!this.shouldStop;p++){const u=i+p*a;if(this.video.currentTime=u,await this.waitForSeek(),await this.waitForReadyState(),f)throw f;const b=Math.round(p*c/1e3);await n.onRender(b),await this.nextFrame(),await this.nextFrame();const M=await createImageBitmap(this.canvas,0,0,l,h),w=new VideoFrame(M,{timestamp:p*c,duration:c});m.encode(w,{keyFrame:p%Math.round(s)===0}),w.close(),M.close(),n.onProgress(p+1,o)}if(await m.flush(),f)throw f;d.finalize();const g=d.target.buffer,_=new Blob([g],{type:"video/webm"});n.onComplete(_)}catch(g){n.onError(g)}finally{try{m.close()}catch{}this.isCapturing=!1}}stopCapture(){this.shouldStop=!0}waitForSeek(){return new Promise(e=>{let n=!1;const i=()=>{n||(n=!0,this.video.removeEventListener("seeked",i),clearTimeout(r),e())};this.video.addEventListener("seeked",i,{once:!0});const r=setTimeout(i,2e3)})}waitForReadyState(){return new Promise(e=>{if(this.video.readyState>=2){e();return}const n=Date.now()+2e3,i=()=>{this.video.readyState>=2||Date.now()>=n?e():requestAnimationFrame(i)};requestAnimationFrame(i)})}nextFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}}async function QS(){const t=document.getElementById("status"),e=document.getElementById("webcam"),n=document.getElementById("btn-webcam"),i=document.getElementById("video-upload"),r=document.getElementById("video-controls"),s=document.getElementById("btn-play-pause"),a=document.getElementById("video-seek"),o=document.getElementById("video-time"),c=document.getElementById("video-speed"),l=document.getElementById("speed-label"),h=document.getElementById("btn-step"),d=document.getElementById("btn-step-back"),f=document.getElementById("btn-set-a"),m=document.getElementById("btn-set-b"),g=document.getElementById("btn-toggle-repeat"),_=document.getElementById("btn-clear-ab"),p=document.getElementById("ab-status-text"),u=document.getElementById("point-a-val"),b=document.getElementById("point-b-val"),M=document.getElementById("adj-smooth"),w=document.getElementById("adj-roll"),D=document.getElementById("adj-pitch"),C=document.getElementById("adj-scale"),A=document.getElementById("adj-x"),Z=document.getElementById("adj-y"),y=document.getElementById("adj-z"),T=document.getElementById("adj-head-scale"),V=document.getElementById("adj-direct-depth"),q=document.getElementById("adj-video-opacity"),ne=document.getElementById("btn-reset-calibration");let L=!1,N=null,G=null,Y=!1;try{let W=function(){var X,he;if(r.style.display==="block"&&e.duration){a.value=(e.currentTime/e.duration*100).toString();const Be=Math.floor(e.currentTime/60).toString().padStart(2,"0")+":"+Math.floor(e.currentTime%60).toString().padStart(2,"0"),ve=Math.floor(e.duration/60).toString().padStart(2,"0")+":"+Math.floor(e.duration%60).toString().padStart(2,"0");o.innerText=`${Be} / ${ve}`}if(Y&&N!==null&&G!==null&&e.currentTime>=G&&(e.currentTime=N),!z.capturing){const Be=j.estimate(performance.now());Be&&((X=Be.worldLandmarks)!=null&&X.length)&&((he=Be.landmarks)!=null&&he.length)&&(H.updateVideoSource(e),H.update(Be.worldLandmarks[0],Be.landmarks[0]))}$.render(),requestAnimationFrame(W)};const $=new F3("canvas-container"),j=new OS(e,(X,he)=>{t&&he&&(t.innerText=he,t.style.color=X==="error"?"#ff4444":"")}),H=new BS($.scene);await j.init(),await j.startCamera(),n==null||n.addEventListener("click",async()=>{var X;await j.startCamera(),H.mirrored=!0,r.style.display="none",n.classList.add("active"),(X=document.querySelector(".file-label"))==null||X.classList.remove("active")}),i==null||i.addEventListener("change",async X=>{var Be;const he=(Be=X.target.files)==null?void 0:Be[0];if(he){await j.setVideoSource(he),H.mirrored=!1,r.style.display="block",s&&(s.innerText="Pause"),n==null||n.classList.remove("active");const ve=document.querySelector(".file-label");ve&&ve.classList.add("active");const S=document.getElementById("capture-download");S&&(S.style.display="none")}});const ie=$.renderer.domElement,z=new JS(ie,e),K=document.getElementById("btn-capture-start"),ae=document.getElementById("btn-capture-stop"),_e=document.getElementById("capture-progress"),xe=document.getElementById("capture-download");K==null||K.addEventListener("click",async()=>{const X=N??0,he=G??e.duration??0;if(he<=X){alert("Invalid range");return}e.pause(),s&&(s.innerText="Play"),K.style.display="none",ae.style.display="",_e.style.display="block",xe.style.display="none",_e.innerText="Preparing...",await z.startCapture({startTime:X,endTime:he,fps:30},{onRender:async Be=>{var S,v;const ve=j.estimate(Be);(S=ve==null?void 0:ve.worldLandmarks)!=null&&S.length&&((v=ve==null?void 0:ve.landmarks)!=null&&v.length)&&(H.updateVideoSource(e),H.update(ve.worldLandmarks[0],ve.landmarks[0])),$.render()},onProgress:(Be,ve)=>{_e.innerText=`${Be} / ${ve} frames`},onComplete:Be=>{const ve=URL.createObjectURL(Be);xe.href=ve,xe.style.display="block",_e.innerText="✅ Complete!",ae.style.display="none",K.style.display=""},onError:Be=>{_e.innerText=`❌ ${Be.message}`,ae.style.display="none",K.style.display=""}})}),ae==null||ae.addEventListener("click",()=>{z.stopCapture(),ae.style.display="none",K.style.display="",_e.innerText="⏹ Stopped"});const Pe=document.getElementById("btn-mode-centroid"),De=document.getElementById("btn-mode-direct"),we=document.getElementById("grid-toggle-row"),Ve=document.getElementById("btn-toggle-grid");Pe==null||Pe.addEventListener("click",()=>{H.mode="centroid",Pe.classList.add("active"),De.classList.remove("active"),we.style.display="none",H.showFloorGrid=!1,Ve.innerText="Grid: OFF",Ve.classList.remove("active")}),De==null||De.addEventListener("click",()=>{H.mode="direct",De.classList.add("active"),Pe.classList.remove("active"),we.style.display="flex"}),Ve==null||Ve.addEventListener("click",()=>{H.showFloorGrid=!H.showFloorGrid,Ve.innerText=H.showFloorGrid?"Grid: ON":"Grid: OFF",Ve.classList.toggle("active",H.showFloorGrid)}),s==null||s.addEventListener("click",()=>{L||(e.paused?(e.play(),s.innerText="Pause"):(e.pause(),s.innerText="Play"))}),a==null||a.addEventListener("input",()=>{e.duration&&(e.currentTime=parseFloat(a.value)/100*e.duration)}),c==null||c.addEventListener("input",()=>{const X=parseFloat(c.value);X===0?(L=!0,e.pause(),s.innerText="Play",l.innerText="Speed: Frame-by-frame"):(L=!1,e.playbackRate=X,l.innerText=`Speed: ${X.toFixed(2)}x`)}),h==null||h.addEventListener("click",()=>{e.duration&&(e.currentTime=Math.min(e.currentTime+1/30,e.duration))}),d==null||d.addEventListener("click",()=>{e.currentTime=Math.max(e.currentTime-1/30,0)});const I=()=>{const X=he=>{const Be=Math.floor(he/60),ve=Math.floor(he%60);return`${Be.toString().padStart(2,"0")}:${ve.toString().padStart(2,"0")}`};u.innerText=N!==null?X(N):"--:--",b.innerText=G!==null?X(G):"--:--",p.innerText=Y?"LOOP ON":"LOOP OFF"};f==null||f.addEventListener("click",()=>{N=e.currentTime,I()}),m==null||m.addEventListener("click",()=>{G=e.currentTime,I()}),g==null||g.addEventListener("click",()=>{if(N===null||G===null||N>=G){alert("Invalid A-B points");return}Y=!Y,I()}),_==null||_.addEventListener("click",()=>{N=null,G=null,Y=!1,I()});const Lt=X=>X*(Math.PI/180);H.adjRoll=Lt(2),M==null||M.addEventListener("input",X=>{j.smoothAlpha=parseFloat(X.target.value)}),w==null||w.addEventListener("input",X=>{H.adjRoll=Lt(parseFloat(X.target.value))}),D==null||D.addEventListener("input",X=>{H.adjPitch=Lt(parseFloat(X.target.value))}),C==null||C.addEventListener("input",X=>{H.scaleFactor=parseFloat(X.target.value)}),A==null||A.addEventListener("input",X=>{H.offsetX=parseFloat(X.target.value)}),Z==null||Z.addEventListener("input",X=>{H.offsetY=parseFloat(X.target.value)}),y==null||y.addEventListener("input",X=>{H.offsetZ=parseFloat(X.target.value)}),T==null||T.addEventListener("input",X=>{H.headScale=parseFloat(X.target.value)}),V==null||V.addEventListener("input",X=>{H.directDepthOffset=parseFloat(X.target.value)}),q==null||q.addEventListener("input",X=>{H.videoOpacity=parseFloat(X.target.value)});const Se=document.getElementById("adj-brightness");Se==null||Se.addEventListener("input",X=>{H.brightness=parseFloat(X.target.value)}),ne==null||ne.addEventListener("click",()=>{const X={smooth:.35,scale:2.5,headScale:.33,brightness:1,roll:2,pitch:0,x:0,y:0,z:0,directDepth:0,videoOpacity:.5};j.smoothAlpha=X.smooth,H.scaleFactor=X.scale,H.headScale=X.headScale,H.brightness=X.brightness,H.directDepthOffset=X.directDepth,H.adjRoll=Lt(X.roll),H.adjPitch=Lt(X.pitch),H.offsetX=X.x,H.offsetY=X.y,H.offsetZ=X.z,H.videoOpacity=X.videoOpacity,M&&(M.value=X.smooth.toString()),C&&(C.value=X.scale.toString()),T&&(T.value=X.headScale.toString()),Se&&(Se.value=X.brightness.toString()),w&&(w.value=X.roll.toString()),D&&(D.value=X.pitch.toString()),A&&(A.value=X.x.toString()),Z&&(Z.value=X.y.toString()),y&&(y.value=X.z.toString()),V&&(V.value=X.directDepth.toString()),q&&(q.value=X.videoOpacity.toString())}),W()}catch(W){console.error(W),t&&(t.innerText=`Error: ${W.message}`,t.style.color="#ff4444")}}QS();
