(()=>{var hp=0,bh=1,fp=2;var co=1,dp=2,ca=3,Hs=0,zn=1,Ji=2,xr=0,Ws=1,Th=2,wh=3,Ah=4,pp=5;var vr=100,mp=101,gp=102,_p=103,xp=104,vp=200,yp=201,Mp=202,Sp=203,Eh=204,Ch=205,bp=206,Tp=207,wp=208,Ap=209,Ep=210,Cp=211,Rp=212,Pp=213,Ip=214,Pl=0,Il=1,Ll=2,ia=3,Dl=4,Nl=5,Fl=6,Ul=7,Rh=0,Lp=1,Dp=2,$i=0,Ph=1,Ih=2,Lh=3,Dh=4,Nh=5,Fh=6,Uh=7;var Oh=300,yr=301,ua=302,uc=303,hc=304,Ol=1e3,Xi=1001,Bl=1002,mn=1003,Np=1004;var uo=1005;var Bn=1006,fc=1007;var ms=1008;var fi=1009,Bh=1010,zh=1011,ha=1012,dc=1013,Oi=1014,Bi=1015,zi=1016,pc=1017,mc=1018,Mr=1020,kh=35902,Vh=35899,Gh=1021,Hh=1022,ki=1023,ds=1026,gs=1027,Wh=1028,gc=1029,Xs=1030,_c=1031;var xc=1033,ho=33776,fo=33777,po=33778,mo=33779,vc=35840,yc=35841,Mc=35842,Sc=35843,bc=36196,Tc=37492,wc=37496,Ac=37488,Ec=37489,go=37490,Cc=37491,Rc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Nc=37813,Fc=37814,Uc=37815,Oc=37816,Bc=37817,zc=37818,kc=37819,Vc=37820,Gc=37821,Hc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,_o=36285,Zc=36286;var qa=2300,zl=2301,Cl=2302,gh=2303,_h=2400,xh=2401,vh=2402;var Fp=3200;var Xh=0,Up=1,_s="",li="srgb",mr="srgb-linear",Ya="linear",ve="srgb";var Rl=7680;var Op=519,Bp=512,zp=513,kp=514,qh=515,Vp=516,Gp=517,Yh=518,Zh=519,Hp=35044;var Jh="300 es",Si=2e3,Za=2001;function jg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function t_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wp(){let s=Ja("canvas");return s.style.display="block",s}var Gd={},sa=null;function $h(...s){let t="THREE."+s.shift();sa?sa("log",t,...s):console.log(t,...s)}function Xp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=Xp(s);let t="THREE."+s.shift();if(sa)sa("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=Xp(s);let t="THREE."+s.shift();if(sa)sa("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Xa(...s){let t=s.join(" ");t in Gd||(Gd[t]=!0,Vt(...s))}function qp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yp={[Pl]:Pl,[Ll]:Fl,[Dl]:Dl,[ia]:Nl,[Il]:Il,[Fl]:Ll,[Ul]:Ul,[Nl]:ia},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ju=Math.PI/180,kl=180/Math.PI;function xo(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function e_(s,t){return(s%t+t)%t}function $u(s,t,e){return(1-e)*s+e*t}function Zp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function n_(s,t){if(t.constructor===Float32Array)return s;let e=Kh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function i_(s,t){if(t.constructor===Float32Array)return s;let e=Kh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var nf=class nf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nf.prototype.isVector2=!0;var ae=nf,Yi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=r[a+0],d=r[a+1],_=r[a+2],x=r[a+3];if(f!==x||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*x;m<0&&(h=-h,d=-d,_=-_,x=-x,m=-m);let g=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);g=Math.sin(g*S)/A,o=Math.sin(o*S)/A,l=l*g+h*o,c=c*g+d*o,u=u*g+_*o,f=f*g+x*o}else{l=l*g+h*o,c=c*g+d*o,u=u*g+_*o,f=f*g+x*o;let S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),h=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sf=class sf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ku.copy(this).projectOnVector(t),this.sub(Ku)}reflect(t){return this.sub(Ku.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sf.prototype.isVector3=!0;var Y=sf,Ku=new Y,Hd=new Yi,rf=class rf{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],x=i[0],m=i[3],g=i[6],S=i[1],A=i[4],v=i[7],b=i[2],y=i[5],p=i[8];return r[0]=a*x+o*S+l*b,r[3]=a*m+o*A+l*y,r[6]=a*g+o*v+l*p,r[1]=c*x+u*S+f*b,r[4]=c*m+u*A+f*y,r[7]=c*g+u*v+f*p,r[2]=h*x+d*S+_*b,r[5]=h*m+d*A+_*y,r[8]=h*g+d*v+_*p,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=f*x,t[1]=(i*c-u*n)*x,t[2]=(o*n-i*a)*x,t[3]=h*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qu.makeScale(t,e)),this}rotate(t){return Xa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qu.makeRotation(-t)),this}translate(t,e){return Xa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rf.prototype.isMatrix3=!0;var kt=rf,Qu=new kt,Wd=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s_(){let s={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(i.r=na(i.r),i.g=na(i.g),i.b=na(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_s?Ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mr]:{primaries:t,whitePoint:n,transfer:Ya,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}var ie=s_();function fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function na(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Hr,Vl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hr===void 0&&(Hr=Ja("canvas")),Hr.width=t.width,Hr.height=t.height;let i=Hr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},r_=0,ra=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ju(i[a].image)):r.push(ju(i[a]))}else r=ju(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ju(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var a_=0,th=new Y,Zn=class s extends qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Xi,i=Xi,r=Bn,a=ms,o=ki,l=fi,c=s.DEFAULT_ANISOTROPY,u=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=xo(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ol:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ol:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Oh;Zn.DEFAULT_ANISOTROPY=1;var af=class af{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(d+1)/2,b=(g+1)/2,y=(u+h)/4,p=(f+x)/4,M=(_+m)/4;return A>v&&A>b?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=y/n,r=p/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=y/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=p/r,i=M/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};af.prototype.isVector4=!0;var Le=af,Gl=class extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Zn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ra(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$a=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var cc=class cc{constructor(t,e,n,i,r,a,o,l,c,u,f,h,d,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,f,h,d,_,x,m)}set(t,e,n,i,r,a,o,l,c,u,f,h,d,_,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=_,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Wr.setFromMatrixColumn(t,0).length(),r=1/Wr.setFromMatrixColumn(t,1).length(),a=1/Wr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,_=o*u,x=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-x*c,e[9]=-o*l,e[2]=x-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,_=c*u,x=c*f;e[0]=h+x*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=x+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,_=c*u,x=c*f;e[0]=h-x*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*f,_=o*u,x=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,_=o*l,x=o*c;e[0]=l*u,e[4]=x-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-x*f}else if(t.order==="XZY"){let h=a*l,d=a*c,_=o*l,x=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o_,t,l_)}lookAt(t,e,n){let i=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Is.crossVectors(n,ai),Is.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Is.crossVectors(n,ai)),Is.normalize(),al.crossVectors(ai,Is),i[0]=Is.x,i[4]=al.x,i[8]=ai.x,i[1]=Is.y,i[5]=al.y,i[9]=ai.y,i[2]=Is.z,i[6]=al.z,i[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],x=n[6],m=n[10],g=n[14],S=n[3],A=n[7],v=n[11],b=n[15],y=i[0],p=i[4],M=i[8],C=i[12],E=i[1],L=i[5],D=i[9],B=i[13],I=i[2],z=i[6],G=i[10],U=i[14],Q=i[3],H=i[7],P=i[11],j=i[15];return r[0]=a*y+o*E+l*I+c*Q,r[4]=a*p+o*L+l*z+c*H,r[8]=a*M+o*D+l*G+c*P,r[12]=a*C+o*B+l*U+c*j,r[1]=u*y+f*E+h*I+d*Q,r[5]=u*p+f*L+h*z+d*H,r[9]=u*M+f*D+h*G+d*P,r[13]=u*C+f*B+h*U+d*j,r[2]=_*y+x*E+m*I+g*Q,r[6]=_*p+x*L+m*z+g*H,r[10]=_*M+x*D+m*G+g*P,r[14]=_*C+x*B+m*U+g*j,r[3]=S*y+A*E+v*I+b*Q,r[7]=S*p+A*L+v*z+b*H,r[11]=S*M+A*D+v*G+b*P,r[15]=S*C+A*B+v*U+b*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],x=t[7],m=t[11],g=t[15],S=l*d-c*h,A=o*d-c*f,v=o*h-l*f,b=a*d-c*u,y=a*h-l*u,p=a*f-o*u;return e*(x*S-m*A+g*v)-n*(_*S-m*b+g*y)+i*(_*A-x*b+g*p)-r*(_*v-x*y+m*p)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],x=t[13],m=t[14],g=t[15],S=e*o-n*a,A=e*l-i*a,v=e*c-r*a,b=n*l-i*o,y=n*c-r*o,p=i*c-r*l,M=u*x-f*_,C=u*m-h*_,E=u*g-d*_,L=f*m-h*x,D=f*g-d*x,B=h*g-d*m,I=S*B-A*D+v*L+b*E-y*C+p*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*B-l*D+c*L)*z,t[1]=(i*D-n*B-r*L)*z,t[2]=(x*p-m*y+g*b)*z,t[3]=(h*y-f*p-d*b)*z,t[4]=(l*E-a*B-c*C)*z,t[5]=(e*B-i*E+r*C)*z,t[6]=(m*v-_*p-g*A)*z,t[7]=(u*p-h*v+d*A)*z,t[8]=(a*D-o*E+c*M)*z,t[9]=(n*E-e*D-r*M)*z,t[10]=(_*y-x*v+g*S)*z,t[11]=(f*v-u*y-d*S)*z,t[12]=(o*C-a*L-l*M)*z,t[13]=(e*L-n*C+i*M)*z,t[14]=(x*A-_*b-m*S)*z,t[15]=(u*b-f*A+h*S)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,x=a*u,m=a*f,g=o*f,S=l*c,A=l*u,v=l*f,b=n.x,y=n.y,p=n.z;return i[0]=(1-(x+g))*b,i[1]=(d+v)*b,i[2]=(_-A)*b,i[3]=0,i[4]=(d-v)*y,i[5]=(1-(h+g))*y,i[6]=(m+S)*y,i[7]=0,i[8]=(_+A)*p,i[9]=(m-S)*p,i[10]=(1-(h+x))*p,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Wr.set(i[0],i[1],i[2]).length(),o=Wr.set(i[4],i[5],i[6]).length(),l=Wr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Li.copy(this);let c=1/a,u=1/o,f=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=f,Li.elements[9]*=f,Li.elements[10]*=f,e.setFromRotationMatrix(Li),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Si,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),_,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===Si)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Za)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Si,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-i),h=-(e+t)/(e-t),d=-(n+i)/(n-i),_,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===Si)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Za)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};cc.prototype.isMatrix4=!0;var Be=cc,Wr=new Y,Li=new Be,o_=new Y(0,0,0),l_=new Y(1,1,1),Is=new Y,al=new Y,ai=new Y,qd=new Be,Yd=new Yi,Os=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Os.DEFAULT_ORDER="XYZ";var Ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},c_=0,Zd=new Y,Xr=new Yi,os=new Be,ol=new Y,Va=new Y,u_=new Y,h_=new Yi,Jd=new Y(1,0,0),$d=new Y(0,1,0),Kd=new Y(0,0,1),Qd={type:"added"},f_={type:"removed"},qr={type:"childadded",child:null},eh={type:"childremoved",child:null},ui=class s extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new Y,e=new Os,n=new Yi,i=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new kt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Jd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return Zd.copy(t).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ol.copy(t):ol.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Va,ol,this.up):os.lookAt(ol,Va,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(os),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qd),qr.child=t,this.dispatchEvent(qr),qr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(f_),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qd),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,t,u_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,h_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ui.DEFAULT_UP=new Y(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pr=class extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},d_={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},ll={h:0,s:0,l:0};function nh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=e_(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nh(a,r,t+1/3),this.g=nh(a,r,t),this.b=nh(a,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=li){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let n=Jp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return ie.workingToColorSpace(En.copy(this),t),Math.round(re(En.r*255,0,255))*65536+Math.round(re(En.g*255,0,255))*256+Math.round(re(En.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(En.copy(this),e);let n=En.r,i=En.g,r=En.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=li){ie.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,i=En.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ls),this.setHSL(Ls.h+t,Ls.s+e,Ls.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ls),t.getHSL(ll);let n=$u(Ls.h,ll.h,e),i=$u(Ls.s,ll.s,e),r=$u(Ls.l,ll.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new ce;ce.NAMES=Jp;var Qa=class extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Di=new Y,ls=new Y,ih=new Y,cs=new Y,Yr=new Y,Zr=new Y,jd=new Y,sh=new Y,rh=new Y,ah=new Y,oh=new Le,lh=new Le,ch=new Le,Us=class s{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Di.subVectors(t,e),i.cross(Di);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Di.subVectors(i,e),ls.subVectors(n,e),ih.subVectors(t,e);let a=Di.dot(Di),o=Di.dot(ls),l=Di.dot(ih),c=ls.dot(ls),u=ls.dot(ih),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(a,cs.y),l.addScaledVector(o,cs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(t,e),lh.fromBufferAttribute(t,n),ch.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(oh,r.x),a.addScaledVector(lh,r.y),a.addScaledVector(ch,r.z),a}static isFrontFacing(t,e,n,i){return Di.subVectors(n,e),ls.subVectors(t,e),Di.cross(ls).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Di.cross(ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Yr.subVectors(i,n),Zr.subVectors(r,n),sh.subVectors(t,n);let l=Yr.dot(sh),c=Zr.dot(sh);if(l<=0&&c<=0)return e.copy(n);rh.subVectors(t,i);let u=Yr.dot(rh),f=Zr.dot(rh);if(u>=0&&f<=u)return e.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Yr,a);ah.subVectors(t,r);let d=Yr.dot(ah),_=Zr.dot(ah);if(_>=0&&d<=_)return e.copy(r);let x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Zr,o);let m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return jd.subVectors(r,i),o=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(jd,o);let g=1/(m+x+h);return a=x*g,o=h*g,e.copy(n).addScaledVector(Yr,a).addScaledVector(Zr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bs=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ni):Ni.fromBufferAttribute(r,a),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(t.matrixWorld),this.union(cl)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ga),ul.subVectors(this.max,Ga),Jr.subVectors(t.a,Ga),$r.subVectors(t.b,Ga),Kr.subVectors(t.c,Ga),Ds.subVectors($r,Jr),Ns.subVectors(Kr,$r),ur.subVectors(Jr,Kr);let e=[0,-Ds.z,Ds.y,0,-Ns.z,Ns.y,0,-ur.z,ur.y,Ds.z,0,-Ds.x,Ns.z,0,-Ns.x,ur.z,0,-ur.x,-Ds.y,Ds.x,0,-Ns.y,Ns.x,0,-ur.y,ur.x,0];return!uh(e,Jr,$r,Kr,ul)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,Jr,$r,Kr,ul))?!1:(hl.crossVectors(Ds,Ns),e=[hl.x,hl.y,hl.z],uh(e,Jr,$r,Kr,ul))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},us=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ni=new Y,cl=new Bs,Jr=new Y,$r=new Y,Kr=new Y,Ds=new Y,Ns=new Y,ur=new Y,Ga=new Y,ul=new Y,hl=new Y,hr=new Y;function uh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hr.fromArray(s,r);let o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=t.dot(hr),c=e.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var tn=new Y,fl=new ae,p_=0,en=class extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hp,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=t!==void 0?Kh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fl.fromBufferAttribute(this,e),fl.applyMatrix3(t),this.setXY(e,fl.x,fl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):n_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):i_(t,this.array)}};var ja=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var to=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var bi=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},m_=new Bs,Ha=new Y,hh=new Y,gr=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):m_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ha.subVectors(t,this.center);let e=Ha.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ha,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ha.copy(t.center).add(hh)),this.expandByPoint(Ha.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},g_=0,Mi=new Be,fh=new ui,Qr=new Y,oi=new Bs,Wa=new Bs,pn=new Y,Ui=class s extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jg(t)?to:ja)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,n){return Mi.makeTranslation(t,e,n),this.applyMatrix4(Mi),this}scale(t,e,n){return Mi.makeScale(t,e,n),this.applyMatrix4(Mi),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(oi.min,Wa.min),oi.expandByPoint(pn),pn.addVectors(oi.max,Wa.max),oi.expandByPoint(pn)):(oi.expandByPoint(Wa.min),oi.expandByPoint(Wa.max))}oi.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)pn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(Qr.fromBufferAttribute(t,c),pn.add(Qr)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new Y,l[C]=new Y;let u=new Y,f=new Y,h=new Y,d=new ae,_=new ae,x=new ae,m=new Y,g=new Y;function S(C,E,L){c[C]=c[E]=c[L]=1,u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,E),h.fromBufferAttribute(n,L),d.fromBufferAttribute(r,C),_.fromBufferAttribute(r,E),x.fromBufferAttribute(r,L),f.sub(u),h.sub(u),_.sub(d),x.sub(d);let D=1/(_.x*x.y-x.x*_.y);isFinite(D)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(h,-_.y).multiplyScalar(D),g.copy(h).multiplyScalar(_.x).addScaledVector(f,-x.x).multiplyScalar(D),o[C].add(m),o[E].add(m),o[L].add(m),l[C].add(g),l[E].add(g),l[L].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let C=0,E=A.length;C<E;++C){let L=A[C],D=L.start,B=L.count;for(let I=D,z=D+B;I<z;I+=3)S(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new Y,b=new Y,y=new Y,p=new Y;function M(C){y.fromBufferAttribute(i,C),p.copy(y);let E=o[C];v.copy(E),v.sub(y.multiplyScalar(y.dot(E))).normalize(),b.crossVectors(p,E);let D=b.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,E=n.count;C<E;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(t)for(let h=0,d=t.count;h<d;h+=3){let _=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let g=0;g<u;g++)h[_++]=c[d++]}return new en(h,u,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dh=new Y,__=new Y,x_=new kt,Fi=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dh.subVectors(n,e).cross(__.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(dh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||x_.getNormalMatrix(t),i=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},v_=0,zs=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=Ws,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Ch,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rl,this.stencilZFail=Rl,this.stencilZPass=Rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hs=new Y,ph=new Y,dl=new Y,pl=new Y,eo=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,e),hs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ph.copy(t).add(e).multiplyScalar(.5),dl.copy(e).sub(t).normalize(),pl.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,a=-this.direction.dot(dl),o=pl.dot(this.direction),l=-pl.dot(dl),c=pl.lengthSq(),u=Math.abs(1-a*a),f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ph).addScaledVector(dl,h),d}intersectSphere(t,e){if(t.radius<0)return null;hs.subVectors(t.center,this.origin);let n=hs.dot(this.direction),i=hs.dot(hs)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,_=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,A=n.z-a.z,v=Math.abs(l),b=Math.abs(c),y=Math.abs(u),p,M,C,E,L,D,B,I,z,G,U,Q;if(v>=b&&v>=y?(C=l,D=f,z=_,Q=g,l>=0?(p=c,M=u,E=h,L=d,B=x,I=m,G=S,U=A):(p=u,M=c,E=d,L=h,B=m,I=x,G=A,U=S)):b>=y?(C=c,D=h,z=x,Q=S,c>=0?(p=u,M=l,E=d,L=f,B=m,I=_,G=A,U=g):(p=l,M=u,E=f,L=d,B=_,I=m,G=g,U=A)):(C=u,D=d,z=m,Q=A,u>=0?(p=l,M=c,E=f,L=h,B=_,I=x,G=g,U=S):(p=c,M=l,E=h,L=f,B=x,I=_,G=S,U=g)),C===0)return null;let H=p/C,P=M/C,j=1/C,xt=E-H*D,At=L-P*D,q=B-H*z,ot=I-P*z,_t=G-H*Q,St=U-P*Q,ht=_t*ot-St*q,Ft=xt*St-At*_t,Me=q*At-ot*xt;if(i){if(ht<0||Ft<0||Me<0)return null}else if((ht<0||Ft<0||Me<0)&&(ht>0||Ft>0||Me>0))return null;let Et=ht+Ft+Me;if(Et===0)return null;let Wt=j*(ht*D+Ft*z+Me*Q);return(Et>0?Wt<0:Wt>0)?null:this.at(Wt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wl=class extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tp=new Be,fr=new eo,ml=new gr,ep=new Y,gl=new Y,_l=new Y,xl=new Y,mh=new Y,vl=new Y,np=new Y,yl=new Y,Zi=class extends ui{constructor(t=new Ui,e=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(mh.fromBufferAttribute(f,t),a?vl.addScaledVector(mh,u):vl.addScaledVector(mh.sub(e),u))}e.add(vl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),fr.copy(t.ray).recast(t.near),!(ml.containsPoint(fr.origin)===!1&&(fr.intersectSphere(ml,ep)===null||fr.origin.distanceToSquared(ep)>(t.far-t.near)**2))&&(tp.copy(r).invert(),fr.copy(t.ray).applyMatrix4(tp),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){let m=h[_],g=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,b=A;v<b;v+=3){let y=o.getX(v),p=o.getX(v+1),M=o.getX(v+2);i=Ml(this,g,t,n,c,u,f,y,p,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=_,g=x;m<g;m+=3){let S=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);i=Ml(this,a,t,n,c,u,f,S,A,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){let m=h[_],g=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,b=A;v<b;v+=3){let y=v,p=v+1,M=v+2;i=Ml(this,g,t,n,c,u,f,y,p,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,g=x;m<g;m+=3){let S=m,A=m+1,v=m+2;i=Ml(this,a,t,n,c,u,f,S,A,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function y_(s,t,e,n,i,r,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Hs,o),l===null)return null;yl.copy(o),yl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(yl);return c<e.near||c>e.far?null:{distance:c,point:yl.clone(),object:s}}function Ml(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,gl),s.getVertexPosition(l,_l),s.getVertexPosition(c,xl);let u=y_(s,t,e,n,gl,_l,xl,np);if(u){let f=new Y;Us.getBarycoord(np,gl,_l,xl,f),i&&(u.uv=Us.getInterpolatedAttribute(i,o,l,c,f,new ae)),r&&(u.uv1=Us.getInterpolatedAttribute(r,o,l,c,f,new ae)),a&&(u.normal=Us.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new Y,materialIndex:0};Us.getNormal(gl,_l,xl,h.normal),u.face=h,u.barycoord=f}return u}var Xl=class extends Zn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=mn,u=mn,f,h){super(null,a,o,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=new gr,M_=new ae(.5,.5),Sl=new Y,_r=class{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,r=new Fi,a=new Fi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],x=r[9],m=r[10],g=r[11],S=r[12],A=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,d-u,g-_,b-S).normalize(),i[1].setComponents(c+a,d+u,g+_,b+S).normalize(),i[2].setComponents(c+o,d+f,g+x,b+A).normalize(),i[3].setComponents(c-o,d-f,g-x,b-A).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,d-h,g-m,b-v).normalize();else if(i[4].setComponents(c-l,d-h,g-m,b-v).normalize(),e===Si)i[5].setComponents(c+l,d+h,g+m,b+v).normalize();else if(e===Za)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){dr.center.set(0,0,0);let e=M_.distanceTo(t.center);return dr.radius=.7071067811865476+e,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Sl.x=i.normal.x>0?t.max.x:t.min.x,Sl.y=i.normal.y>0?t.max.y:t.min.y,Sl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ip=new Be,ql=class s{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];ip.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new _r),n[i].setFromProjectionMatrix(ip,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new _r),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Yl=class extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sp=new Be,yh=new eo,bl=new gr,Tl=new Y,no=class extends ui{constructor(t=new Ui,e=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(i),bl.radius+=r,t.ray.intersectsSphere(bl)===!1)return;sp.copy(i).invert(),yh.copy(t.ray).applyMatrix4(sp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,x=d;_<x;_++){let m=c.getX(_);Tl.fromBufferAttribute(f,m),rp(Tl,m,l,i,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,x=d;_<x;_++)Tl.fromBufferAttribute(f,_),rp(Tl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rp(s,t,e,n,i,r,a){let o=yh.distanceSqToPoint(s);if(o<e){let l=new Y;yh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var io=class extends Zn{constructor(t=[],e=yr,n,i,r,a,o,l,c,u){super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ps=class extends Zn{constructor(t,e,n=Oi,i,r,a,o=mn,l=mn,c,u=ds,f=1){if(u!==ds&&u!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ra(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},so=class extends ps{constructor(t,e=Oi,n=yr,i,r,a=mn,o=mn,l,c=ds){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},oa=class s extends Ui{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(u,3)),this.setAttribute("uv",new bi(f,2));function _(x,m,g,S,A,v,b,y,p,M,C){let E=v/p,L=b/M,D=v/2,B=b/2,I=y/2,z=p+1,G=M+1,U=0,Q=0,H=new Y;for(let P=0;P<G;P++){let j=P*L-B;for(let xt=0;xt<z;xt++){let At=xt*E-D;H[x]=At*S,H[m]=j*A,H[g]=I,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=y>0?1:-1,u.push(H.x,H.y,H.z),f.push(xt/p),f.push(1-P/M),U+=1}}for(let P=0;P<M;P++)for(let j=0;j<p;j++){let xt=h+j+z*P,At=h+j+z*(P+1),q=h+(j+1)+z*(P+1),ot=h+(j+1)+z*P;l.push(xt,At,ot),l.push(At,q,ot),Q+=6}o.addGroup(d,Q,C),d+=Q,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ao=class s extends Ui{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],x=[],m=[];for(let g=0;g<u;g++){let S=g*h-a;for(let A=0;A<c;A++){let v=A*f-r;_.push(v,-S,0),x.push(0,0,1),m.push(A/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let A=S+c*g,v=S+c*(g+1),b=S+1+c*(g+1),y=S+1+c*g;d.push(A,v,y),d.push(v,b,y)}this.setIndex(d),this.setAttribute("position",new bi(_,3)),this.setAttribute("normal",new bi(x,3)),this.setAttribute("uv",new bi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Sr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ap(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ap(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Cn(s){let t={};for(let e=0;e<s.length;e++){let n=Sr(s[e]);for(let i in n)t[i]=n[i]}return t}function ap(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function S_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var $p={clone:Sr,merge:Cn},b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=S_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Zl=class extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Jl=class extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$l=class extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function jr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ks=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends ks{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=t,o=2*e-n;break;case vh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:a=t,l=2*n-e;break;case vh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),x=_*_,m=x*_,g=-h*m+2*h*x-h*_,S=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*_+1,A=(-1-d)*m+(1.5+d)*x+.5*_,v=d*m-d*x;for(let b=0;b!==o;++b)r[b]=g*a[u+b]+S*a[c+b]+A*a[l+b]+v*a[f+b];return r}},Ql=class extends ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},jl=class extends ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},tc=class extends ks{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-e)/(i-e),x=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*_;return r}let h=o*2,d=t-1;for(let _=0;_!==o;++_){let x=a[c+_],m=a[l+_],g=d*h+_*2,S=f[g],A=f[g+1],v=t*h+_*2,b=u[v],y=u[v+1],p=A_(n,e,S,b,i);r[_]=Kp(p,x,A,y,m)}return r}};function Kp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function w_(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function A_(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Kp(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=w_(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),wl(t.settings)&&(n.settings={inTangents:jr(t.settings.inTangents,Array),outTangents:jr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qa:e=this.InterpolantFactoryMethodDiscrete;break;case zl:e=this.InterpolantFactoryMethodLinear;break;case Cl:e=this.InterpolantFactoryMethodSmooth;break;case gh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return Cl;case this.InterpolantFactoryMethodBezier:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;wl(this.settings)&&(op(this.settings.inTangents,t),op(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;wl(this.settings)&&(lp(this.settings.inTangents,t),lp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&t_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Cl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let _=0;_!==n;++_){let x=e[f+_];if(x!==e[h+_]||x!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,wl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function op(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function lp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=zl;var Vs=class extends hi{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=qa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}};ec.prototype.ValueTypeName="color";var nc=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}};nc.prototype.ValueTypeName="number";var ic=class extends ks{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)Yi.slerpFlat(r,0,a,c-o,a,c,l);return r}},oo=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends hi{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=qa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="vector";var rc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qp=new rc,ac=class{constructor(t){this.manager=t!==void 0?t:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Al=new Y,El=new Yi,Wi=new Y,lo=class extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Al,El,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,El,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Al,El,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,El,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new Y,cp=new ae,up=new ae,On=class extends lo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z)}getViewSize(t,e){return this.getViewBounds(t,cp,up),e.subVectors(up,cp)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ju*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var oc=class extends lo{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ta=-90,ea=1,la=class extends ui{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new On(ta,ea,t,e);i.layers=this.layers,this.add(i);let r=new On(ta,ea,t,e);r.layers=this.layers,this.add(r);let a=new On(ta,ea,t,e);a.layers=this.layers,this.add(a);let o=new On(ta,ea,t,e);o.layers=this.layers,this.add(o);let l=new On(ta,ea,t,e);l.layers=this.layers,this.add(l);let c=new On(ta,ea,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},lc=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var jh="\\[\\]\\.:\\/",E_=new RegExp("["+jh+"]","g"),tf="[^"+jh+"]",C_="[^"+jh.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",tf),P_=/(WCOD+)?/.source.replace("WCOD",C_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),D_=new RegExp("^"+R_+P_+I_+L_+"$"),N_=["material","materials","bones","map"],Mh=class{constructor(t,e,n){let i=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E_,"")}static parseTrackName(t){let e=D_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Mh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hb=new Float32Array(1);var of=class of{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};of.prototype.isMatrix2=!0;var Sh=of;function ef(s,t,e,n){let i=F_(n);switch(e){case Gh:return s*t;case Wh:return s*t/i.components*i.byteLength;case gc:return s*t/i.components*i.byteLength;case Xs:return s*t*2/i.components*i.byteLength;case _c:return s*t*2/i.components*i.byteLength;case Hh:return s*t*3/i.components*i.byteLength;case ki:return s*t*4/i.components*i.byteLength;case xc:return s*t*4/i.components*i.byteLength;case ho:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yc:case Sc:return Math.max(s,16)*Math.max(t,8)/4;case vc:case Mc:return Math.max(s,8)*Math.max(t,8)/2;case bc:case Tc:case Ac:case Ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wc:case go:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _o:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F_(s){switch(s){case fi:case Bh:return{byteLength:1,components:1};case ha:case zh:case zi:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Oi:case dc:case Bi:return{byteLength:4,components:1};case kh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ym(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function O_(s){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){let _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){let x=f[d];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
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
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
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
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K_=`#ifdef USE_IRIDESCENCE
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
#endif`,Q_=`#ifdef USE_BUMPMAP
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Rx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Fx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ux=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,Zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,av=`#ifdef USE_NORMALMAP
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
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Sv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tv=`#ifdef USE_SKINNING
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
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
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
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iv=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Wv=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xv=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Qv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jv=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,ty=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ey=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,ny=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,iy=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,oy=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,ly=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,cy=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hy=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,fy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,gy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Zt={alphahash_fragment:B_,alphahash_pars_fragment:z_,alphamap_fragment:k_,alphamap_pars_fragment:V_,alphatest_fragment:G_,alphatest_pars_fragment:H_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:q_,batching_vertex:Y_,begin_vertex:Z_,beginnormal_vertex:J_,bsdfs:$_,iridescence_fragment:K_,bumpmap_pars_fragment:Q_,clipping_planes_fragment:j_,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:ex,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:sx,color_pars_vertex:rx,color_vertex:ax,common:ox,defaultnormal_vertex:lx,displacementmap_pars_vertex:cx,displacementmap_vertex:ux,emissivemap_fragment:hx,emissivemap_pars_fragment:fx,colorspace_fragment:dx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Rx,envmap_vertex:vx,fog_vertex:yx,fog_pars_vertex:Mx,fog_fragment:Sx,fog_pars_fragment:bx,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:wx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Ex,lights_pars_begin:Cx,lights_toon_fragment:Px,lights_toon_pars_fragment:Ix,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Nx,lights_physical_pars_fragment:Fx,lights_fragment_begin:Ux,lights_fragment_maps:Ox,lights_fragment_end:Bx,lightprobes_pars_fragment:zx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Hx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:qx,map_particle_pars_fragment:Yx,metalnessmap_fragment:Zx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:$x,morphcolor_vertex:Kx,morphnormal_vertex:Qx,morphtarget_pars_vertex:jx,morphtarget_vertex:tv,normal_fragment_begin:ev,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:sv,normal_vertex:rv,normalmap_pars_fragment:av,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:uv,opaque_fragment:hv,packing:fv,premultiplied_alpha_fragment:dv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:xv,shadowmap_pars_fragment:vv,shadowmap_pars_vertex:yv,shadowmap_vertex:Mv,shadowmask_pars_fragment:Sv,skinbase_vertex:bv,skinning_pars_vertex:Tv,skinning_vertex:wv,skinnormal_vertex:Av,specularmap_fragment:Ev,specularmap_pars_fragment:Cv,tonemapping_fragment:Rv,tonemapping_pars_fragment:Pv,transmission_fragment:Iv,transmission_pars_fragment:Lv,uv_pars_fragment:Dv,uv_pars_vertex:Nv,uv_vertex:Fv,worldpos_vertex:Uv,background_vert:Ov,background_frag:Bv,backgroundCube_vert:zv,backgroundCube_frag:kv,cube_vert:Vv,cube_frag:Gv,depth_vert:Hv,depth_frag:Wv,distance_vert:Xv,distance_frag:qv,equirect_vert:Yv,equirect_frag:Zv,linedashed_vert:Jv,linedashed_frag:$v,meshbasic_vert:Kv,meshbasic_frag:Qv,meshlambert_vert:jv,meshlambert_frag:ty,meshmatcap_vert:ey,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:ay,meshphysical_vert:oy,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:hy,points_frag:fy,shadow_vert:dy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},bt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Qi={basic:{uniforms:Cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Cn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Cn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Cn([bt.points,bt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Cn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Cn([bt.common,bt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Cn([bt.sprite,bt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Cn([bt.common,bt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Cn([bt.lights,bt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Qi.physical={uniforms:Cn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Jc={r:0,b:0,g:0},_y=new Be,Mm=new kt;Mm.set(-1,0,0,0,1,0,0,0,1);function xy(s,t,e,n,i,r){let a=new ce(0),o=i===!0?0:1,l,c,u=null,f=0,h=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let v=S.backgroundBlurriness>0;A=t.get(A,v)}return A}function _(S){let A=!1,v=d(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,A){let v=d(A);v&&v.isCubeTexture?(c===void 0&&(c=new Zi(new oa(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Sr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mm),c.material.toneMapped=ie.getTransfer(v.colorSpace)!==ve,(u!==v||f!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Zi(new ao(2,2),new Ti({name:"BackgroundMaterial",uniforms:Sr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Jc,Qh(s)),e.buffers.color.setClear(Jc.r,Jc.g,Jc.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:x,dispose:g}}function vy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,a=!1;function o(L,D,B,I,z){let G=!1,U=f(L,I,B,D);r!==U&&(r=U,c(r.object)),G=d(L,I,B,z),G&&_(L,I,B,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(L,D,B,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function u(L){return s.deleteVertexArray(L)}function f(L,D,B,I){let z=I.wireframe===!0,G=n[D.id];G===void 0&&(G={},n[D.id]=G);let U=L.isInstancedMesh===!0?L.id:0,Q=G[U];Q===void 0&&(Q={},G[U]=Q);let H=Q[B.id];H===void 0&&(H={},Q[B.id]=H);let P=H[z];return P===void 0&&(P=h(l()),H[z]=P),P}function h(L){let D=[],B=[],I=[];for(let z=0;z<e;z++)D[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,D,B,I){let z=r.attributes,G=D.attributes,U=0,Q=B.getAttributes();for(let H in Q)if(Q[H].location>=0){let j=z[H],xt=G[H];if(xt===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor)),j===void 0||j.attribute!==xt||xt&&j.data!==xt.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function _(L,D,B,I){let z={},G=D.attributes,U=0,Q=B.getAttributes();for(let H in Q)if(Q[H].location>=0){let j=G[H];j===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let xt={};xt.attribute=j,j&&j.data&&(xt.data=j.data),z[H]=xt,U++}r.attributes=z,r.attributesNum=U,r.index=I}function x(){let L=r.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function m(L){g(L,0)}function g(L,D){let B=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;B[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),z[L]!==D&&(s.vertexAttribDivisor(L,D),z[L]=D)}function S(){let L=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==L[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function A(L,D,B,I,z,G,U){U===!0?s.vertexAttribIPointer(L,D,B,z,G):s.vertexAttribPointer(L,D,B,I,z,G)}function v(L,D,B,I){x();let z=I.attributes,G=B.getAttributes(),U=D.defaultAttributeValues;for(let Q in G){let H=G[Q];if(H.location>=0){let P=z[Q];if(P===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){let j=P.normalized,xt=P.itemSize,At=t.get(P);if(At===void 0)continue;let q=At.buffer,ot=At.type,_t=At.bytesPerElement,St=ot===s.INT||ot===s.UNSIGNED_INT||P.gpuType===dc;if(P.isInterleavedBufferAttribute){let ht=P.data,Ft=ht.isInterleavedBuffer===!0?ht.stride:ht.itemSize,Me=P.offset;if(ht.isInstancedInterleavedBuffer||ht.isInstancedBufferAttribute){for(let Et=0;Et<H.locationSize;Et++)g(H.location+Et,ht.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Et=0;Et<H.locationSize;Et++)m(H.location+Et);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Et=0;Et<H.locationSize;Et++)A(H.location+Et,xt/H.locationSize,ot,j,Ft*_t,(Me+xt/H.locationSize*Et)*_t,St)}else{if(P.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)g(H.location+ht,P.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht);s.bindBuffer(s.ARRAY_BUFFER,q);for(let ht=0;ht<H.locationSize;ht++)A(H.location+ht,xt/H.locationSize,ot,j,xt*_t,xt/H.locationSize*ht*_t,St)}}else if(U!==void 0){let j=U[Q];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(H.location,j);break;case 3:s.vertexAttrib3fv(H.location,j);break;case 4:s.vertexAttrib4fv(H.location,j);break;default:s.vertexAttrib1fv(H.location,j)}}}}S()}function b(){C();for(let L in n){let D=n[L];for(let B in D){let I=D[B];for(let z in I){let G=I[z];for(let U in G)u(G[U].object),delete G[U];delete I[z]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let B in D){let I=D[B];for(let z in I){let G=I[z];for(let U in G)u(G[U].object),delete G[U];delete I[z]}}delete n[L.id]}function p(L){for(let D in n){let B=n[D];for(let I in B){let z=B[I];if(z[L.id]===void 0)continue;let G=z[L.id];for(let U in G)u(G[U].object),delete G[U];delete z[L.id]}}}function M(L){for(let D in n){let B=n[D],I=L.isInstancedMesh===!0?L.id:0,z=B[I];if(z!==void 0){for(let G in z){let U=z[G];for(let Q in U)u(U[Q].object),delete U[Q];delete z[G]}delete B[I],Object.keys(B).length===0&&delete n[D]}}}function C(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:p,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function yy(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function My(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let p=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(p){return!(p!==ki&&n.convert(p)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(p){let M=p===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(p!==fi&&p!==Bi&&!M&&n.convert(p)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(p){if(p==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:y}}function Sy(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Fi,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,A=S*4,v=g.clippingState||null;l.value=v,v=u(_,h,A,d);for(let b=0;b!==A;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let g=d+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,v=d;A!==x;++A,v+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Mo=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new io(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oa(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:xr});r.uniforms.tEquirect.value=e;let a=new Zi(i,r),o=e.minFilter;return e.minFilter===ms&&(e.minFilter=Bn),new la(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},jp=256,by=3,Ty=20,Sm=256,bm=16,wy=3,Ay=new Y,Ey=new ce,Kc=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new la(1,10,null),this._boxMesh=new Zi(new oa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Ay}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,_=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Ey));let m=new la(n,i,u);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=_,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(jp,Zp(t))}_fromTexture(t,e){t.mapping===yr||t.mapping===ua?this._setSize(t.image.length===0?jp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=tm(t,!1,!1),n=Math.log2(t)-by;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===yr||t.mapping===ua?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=em()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cy(),this._integrationMaterial=Ry());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bm);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-wy)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Sm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Py());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function tm(s,t,e){return new Mo(s,{minFilter:ms,generateMipmaps:t,type:zi,colorSpace:mr,depthBuffer:e})}function So(s,t,e){return new Ti({name:s,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:zn,blending:xr,depthTest:!1,depthWrite:!1})}function Cy(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ry(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Py(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ty}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function em(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function nm(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Iy(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===uc||d===hc)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let x=new Mo(_.height);return x.fromEquirectangularTexture(s,h),t.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,_=d===uc||d===hc,x=d===yr||d===ua;if(_||x){let m=e.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Kc(s)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return _&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Kc(s)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===uc?h.mapping=yr:d===hc&&(h.mapping=ua),h}function l(h){let d=0,_=6;for(let x=0;x<_;x++)h[x]!==void 0&&d++;return d===_}function c(h){let d=h.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Ly(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Xa("WebGLRenderer: "+n+" extension not supported."),i}}}function Dy(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete i[_.id],a.unregister(_);let x=r.get(_);x&&(t.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(_){let x=_.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function f(_){let x=_.index,m=_.attributes.position,g=0;if(m===void 0)return;let S=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?to:ja,v=new A(Math.ceil(S/3)*6,1),b=v.array;if(x!==null){let p=x.array;g=x.version;for(let M=0,C=0;M<S;M+=3){let E=p[M+0],L=p[M+1],D=p[M+2];b[C++]=E,b[C++]=L,b[C++]=L,b[C++]=D,b[C++]=D,b[C++]=E}}else{g=m.version;for(let p=0,M=0;p<S;p+=3){let C=p+0,E=p+1,L=p+2;b[M++]=C,b[M++]=E,b[M++]=E,b[M++]=L,b[M++]=L,b[M++]=C}}v.version=g;let y=r.get(_);y&&t.remove(y),r.set(_,v)}function h(_){let x=r.get(_);if(x){let m=_.index;m!==null&&x.version<m.version&&f(_)}else f(_);return r.get(_)}function d(){for(let _ in i){let x=i[_].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function Ny(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){s.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(s.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Fy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Uy(s,t,e){let n=new WeakMap,i=new Le;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let C=function(){p.dispose(),n.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;d===!0&&(A=1),_===!0&&(A=2),x===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let y=new Float32Array(v*b*4*f),p=new $a(y,v,b,f);p.type=Bi,p.needsUpdate=!0;let M=A*4;for(let E=0;E<f;E++){let L=m[E],D=g[E],B=S[E],I=v*b*4*E;for(let z=0;z<L.count;z++){let G=z*M;d===!0&&(i.fromBufferAttribute(L,z),y[I+G+0]=i.x,y[I+G+1]=i.y,y[I+G+2]=i.z,y[I+G+3]=0),_===!0&&(i.fromBufferAttribute(D,z),y[I+G+4]=i.x,y[I+G+5]=i.y,y[I+G+6]=i.z,y[I+G+7]=0),x===!0&&(i.fromBufferAttribute(B,z),y[I+G+8]=i.x,y[I+G+9]=i.y,y[I+G+10]=i.z,y[I+G+11]=B.itemSize===4?i.w:1)}}h={count:f,texture:p,size:new ae(v,b)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Oy(s,t,e,n,i){let r=new WeakMap;function a(c){let u=i.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var By={[Ph]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Lh]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Uh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function zy(s,t,e,n,i,r){let a=new ci(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ui;u.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new bi([0,2,0,0,2,0],2));let f=new Zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Zi(u,f),d=new oc(-1,1,1,-1,0,1),_=null,x=null,m=!1,g,S=null,A=[],v=!1;this.setSize=function(b,y){a.setSize(b,y),o!==null&&o.setSize(b,y),l!==null&&l.setSize(b,y);for(let p=0;p<A.length;p++){let M=A[p];M.setSize&&M.setSize(b,y)}},this.setEffects=function(b){A=b,v=A.length>0&&A[0].isRenderPass===!0;let y=a.width,p=a.height;A.length>0&&o===null&&(o=new ci(y,p,{type:zi,depthBuffer:!1,stencilBuffer:!1}),l=new ci(y,p,{type:zi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&A.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ps(y,p),r===!0&&(c.format=gs,c.type=Mr)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<A.length;C++){let E=A[C];E.setSize&&E.setSize(y,p),M&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,y){if(m||b.toneMapping===$i&&A.length===0)return!1;if(S=y,y!==null){let p=y.width,M=y.height;(a.width!==p||a.height!==M)&&this.setSize(p,M)}return v===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=$i,!0},this.hasRenderPass=function(){return v},this.end=function(b,y){b.toneMapping=g,m=!0;let p=a,M=o;for(let C=0;C<A.length;C++){let E=A[C];E.enabled!==!1&&(E.render(b,M,p,y),E.needsSwap!==!1&&(p=M,M=M===o?l:o))}if(_!==b.outputColorSpace||x!==b.toneMapping){_=b.outputColorSpace,x=b.toneMapping,f.defines={},ie.getTransfer(_)===ve&&(f.defines.SRGB_TRANSFER="");let C=By[x];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=p.texture,b.setRenderTarget(S),b.render(h,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var Tm=new Zn,wm=new ps(1,1),Am=new so(1),Em=new $a,Cm=new Hl,Rm=new io,im=[],sm=[],rm=new Float32Array(16),am=new Float32Array(9),om=new Float32Array(4);function da(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=im[i];if(r===void 0&&(r=new Float32Array(i),im[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function cn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function un(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function jc(s,t){let e=sm[t];e===void 0&&(e=new Int32Array(t),sm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ky(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2fv(this.addr,t),un(e,t)}}function Gy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;s.uniform3fv(this.addr,t),un(e,t)}}function Hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4fv(this.addr,t),un(e,t)}}function Wy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(cn(e,n))return;om.set(n),s.uniformMatrix2fv(this.addr,!1,om),un(e,n)}}function Xy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(cn(e,n))return;am.set(n),s.uniformMatrix3fv(this.addr,!1,am),un(e,n)}}function qy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(cn(e,n))return;rm.set(n),s.uniformMatrix4fv(this.addr,!1,rm),un(e,n)}}function Yy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2iv(this.addr,t),un(e,t)}}function Jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;s.uniform3iv(this.addr,t),un(e,t)}}function $y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4iv(this.addr,t),un(e,t)}}function Ky(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2uiv(this.addr,t),un(e,t)}}function jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;s.uniform3uiv(this.addr,t),un(e,t)}}function tM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4uiv(this.addr,t),un(e,t)}}function tu(s){return s.version===0&&(s.compareFunction=Zh,s.needsUpdate=!0),s}function eM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=tu(wm):r=Tm,e.setTexture2D(t||r,i)}function nM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cm,i)}function iM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=tu(Am):r=Rm,e.setTextureCube(t||r,i)}function sM(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Em,i)}function rM(s){switch(s){case 5126:return ky;case 35664:return Vy;case 35665:return Gy;case 35666:return Hy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Qy;case 36295:return jy;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}function aM(s,t){s.uniform1fv(this.addr,t)}function oM(s,t){let e=da(t,this.size,2);s.uniform2fv(this.addr,e)}function lM(s,t){let e=da(t,this.size,3);s.uniform3fv(this.addr,e)}function cM(s,t){let e=da(t,this.size,4);s.uniform4fv(this.addr,e)}function uM(s,t){let e=da(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hM(s,t){let e=da(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fM(s,t){let e=da(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dM(s,t){s.uniform1iv(this.addr,t)}function pM(s,t){s.uniform2iv(this.addr,t)}function mM(s,t){s.uniform3iv(this.addr,t)}function gM(s,t){s.uniform4iv(this.addr,t)}function _M(s,t){s.uniform1uiv(this.addr,t)}function xM(s,t){s.uniform2uiv(this.addr,t)}function vM(s,t){s.uniform3uiv(this.addr,t)}function yM(s,t){s.uniform4uiv(this.addr,t)}function MM(s,t,e){let n=this.cache,i=t.length,r=jc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=tu(wm):a=Tm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function SM(s,t,e){let n=this.cache,i=t.length,r=jc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Cm,r[a])}function bM(s,t,e){let n=this.cache,i=t.length,r=jc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=tu(Am):a=Rm;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function TM(s,t,e){let n=this.cache,i=t.length,r=jc(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Em,r[a])}function wM(s){switch(s){case 5126:return aM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return hM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}var uf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rM(e.type)}},hf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wM(e.type)}},ff=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function lm(s,t){s.seq.push(t),s.map[t.id]=t}function AM(s,t,e){let n=s.name,i=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),a=lf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){lm(e,c===void 0?new uf(o,s,t):new hf(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new ff(o),lm(e,f)),e=f}}}var fa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);AM(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function cm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var EM=37297,CM=0;function RM(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var um=new kt;function PM(s){ie._getMatrix(um,ie.workingColorSpace,s);let t=`mat3( ${um.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Ya:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function hm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+RM(s.getShaderSource(t),o)}else return r}function IM(s,t){let e=PM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LM={[Ph]:"Linear",[Ih]:"Reinhard",[Lh]:"Cineon",[Dh]:"ACESFilmic",[Fh]:"AgX",[Uh]:"Neutral",[Nh]:"Custom"};function DM(s,t){let e=LM[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $c=new Y;function NM(){ie.getLuminanceCoefficients($c);let s=$c.x.toFixed(4),t=$c.y.toFixed(4),e=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function UM(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function OM(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function yo(s){return s!==""}function fm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function dm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(s){return s.replace(BM,zM)}function zM(s,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return df(e)}var kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(s){return s.replace(kM,VM)}function VM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function mm(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var GM={[co]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function HM(s){return GM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WM={[ua]:"ENVMAP_MODE_REFRACTION"};function XM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":WM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qM={[Rh]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function YM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qM[s.combine]||"ENVMAP_BLENDING_NONE"}function ZM(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=HM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=XM(e),f=YM(e),h=FM(e),d=UM(r),_=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(yo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(yo).join(`
`),m.length>0&&(m+=`
`)):(x=[mm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),m=[mm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Zt.tonemapping_pars_fragment:"",e.toneMapping!==$i?DM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,IM("linearToOutputTexel",e.outputColorSpace),NM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),a=df(a),a=fm(a,e),a=dm(a,e),o=df(o),o=fm(o,e),o=dm(o,e),a=pm(a),o=pm(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=g+x+a,A=g+m+o,v=cm(i,i.VERTEX_SHADER,S),b=cm(i,i.FRAGMENT_SHADER,A);i.attachShader(_,v),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function y(E){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(v)||"",B=i.getShaderInfoLog(b)||"",I=L.trim(),z=D.trim(),G=B.trim(),U=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,v,b);else{let H=hm(i,v,"vertex"),P=hm(i,b,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+H+`
`+P)}else I!==""?Vt("WebGLProgram: Program Info Log:",I):(z===""||G==="")&&(Q=!1);Q&&(E.diagnostics={runnable:U,programLog:I,vertexShader:{log:z,prefix:x},fragmentShader:{log:G,prefix:m}})}i.deleteShader(v),i.deleteShader(b),p=new fa(i,_),M=OM(i,_)}let p;this.getUniforms=function(){return p===void 0&&y(this),p};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,EM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=CM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=b,this}var JM=0,pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mf(t),e.set(t,n)),n}},mf=class{constructor(t){this.id=JM++,this.code=t,this.usedTimes=0}};function $M(s){return s===Xs||s===go||s===_o}function KM(s,t,e,n,i,r){let a=new Ka,o=new pf,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(p){return l.add(p),p===0?"uv":`uv${p}`}function _(p,M,C,E,L,D){let B=E.fog,I=L.geometry,z=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?E.environment:null,G=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,U=t.get(p.envMap||z,G),Q=h[p.type],H=n.precision;p.precision!==null&&(H=n.getMaxPrecision(p.precision),H!==p.precision&&Vt("WebGLProgram.getParameters:",p.precision,"not supported, using",H,"instead."));let P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=P!==void 0?P.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let At,q,ot,_t;if(Q){let nt=Qi[Q];At=nt.vertexShader,q=nt.fragmentShader}else{At=p.vertexShader,q=p.fragmentShader;let nt=o.getVertexShaderStage(p),Tt=o.getFragmentShaderStage(p);o.update(p,nt,Tt),ot=nt.id,_t=Tt.id}let St=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,Et=!!p.map,Wt=!!p.matcap,Dt=!!U,Ot=Dt&&U.isPMREMTexture===!0,de=!!p.aoMap,ue=!!p.lightMap,J=!!p.bumpMap&&p.wireframe===!1,jt=!!p.normalMap,$e=!!p.displacementMap,we=!!p.emissiveMap,se=!!p.metalnessMap,Ge=!!p.roughnessMap,Ze=p.anisotropy>0,O=p.clearcoat>0,ge=p.diffuseRoughness>0,he=p.dispersion>0,Ht=p.retroreflectivity>0,ft=p.iridescence>0,pe=p.sheen>0,Nt=p.transmission>0,zt=Ze&&!!p.anisotropyMap,R=O&&!!p.clearcoatMap,T=O&&!!p.clearcoatNormalMap,V=O&&!!p.clearcoatRoughnessMap,rt=ge&&!!p.diffuseRoughnessMap,it=ft&&!!p.iridescenceMap,ut=ft&&!!p.iridescenceThicknessMap,gt=pe&&!!p.sheenColorMap,W=pe&&!!p.sheenRoughnessMap,tt=!!p.specularMap,ct=!!p.specularColorMap,N=!!p.specularIntensityMap,K=Nt&&!!p.transmissionMap,$=Nt&&!!p.thicknessMap,dt=!!p.gradientMap,lt=!!p.alphaMap,pt=p.alphaTest>0,at=!!p.alphaHash,mt=!!p.extensions,st=$i;p.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ot?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,vt={shaderID:Q,shaderType:p.type,shaderName:p.name,vertexShader:At,fragmentShader:q,defines:p.defines,customVertexShaderID:ot,customFragmentShaderID:_t,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:H,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Et,matcap:Wt,envMap:Dt,envMapMode:Dt&&U.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:de,lightMap:ue,bumpMap:J,normalMap:jt,displacementMap:$e,emissiveMap:we,normalMapObjectSpace:jt&&p.normalMapType===Up,normalMapTangentSpace:jt&&p.normalMapType===Xh,packedNormalMap:jt&&p.normalMapType===Xh&&$M(p.normalMap.format),metalnessMap:se,roughnessMap:Ge,anisotropy:Ze,anisotropyMap:zt,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:V,diffuseRoughness:ge,diffuseRoughnessMap:rt,dispersion:he,retroreflection:Ht,iridescence:ft,iridescenceMap:it,iridescenceThicknessMap:ut,sheen:pe,sheenColorMap:gt,sheenRoughnessMap:W,specularMap:tt,specularColorMap:ct,specularIntensityMap:N,transmission:Nt,transmissionMap:K,thicknessMap:$,gradientMap:dt,opaque:p.transparent===!1&&p.blending===Ws&&p.alphaToCoverage===!1,alphaMap:lt,alphaTest:pt,alphaHash:at,combine:p.combine,mapUv:Et&&d(p.map.channel),aoMapUv:de&&d(p.aoMap.channel),lightMapUv:ue&&d(p.lightMap.channel),bumpMapUv:J&&d(p.bumpMap.channel),normalMapUv:jt&&d(p.normalMap.channel),displacementMapUv:$e&&d(p.displacementMap.channel),emissiveMapUv:we&&d(p.emissiveMap.channel),metalnessMapUv:se&&d(p.metalnessMap.channel),roughnessMapUv:Ge&&d(p.roughnessMap.channel),anisotropyMapUv:zt&&d(p.anisotropyMap.channel),clearcoatMapUv:R&&d(p.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&d(p.diffuseRoughnessMap.channel),iridescenceMapUv:it&&d(p.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&d(p.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(p.sheenColorMap.channel),sheenRoughnessMapUv:W&&d(p.sheenRoughnessMap.channel),specularMapUv:tt&&d(p.specularMap.channel),specularColorMapUv:ct&&d(p.specularColorMap.channel),specularIntensityMapUv:N&&d(p.specularIntensityMap.channel),transmissionMapUv:K&&d(p.transmissionMap.channel),thicknessMapUv:$&&d(p.thicknessMap.channel),alphaMapUv:lt&&d(p.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(jt||Ze),vertexNormals:!!I.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Et||lt),fog:!!B,useFog:p.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||I.attributes.normal===void 0&&jt===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:xt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:Et&&p.map.isVideoTexture===!0&&ie.getTransfer(p.map.colorSpace)===ve,decodeVideoTextureEmissive:we&&p.emissiveMap.isVideoTexture===!0&&ie.getTransfer(p.emissiveMap.colorSpace)===ve,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Ji,flipSided:p.side===zn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:mt&&p.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&p.extensions.multiDraw===!0||Me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function x(p){let M=[];if(p.shaderID?M.push(p.shaderID):(M.push(p.customVertexShaderID),M.push(p.customFragmentShaderID)),p.defines!==void 0)for(let C in p.defines)M.push(C),M.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(m(M,p),g(M,p),M.push(s.outputColorSpace)),M.push(p.customProgramCacheKey),M.join()}function m(p,M){p.push(M.precision),p.push(M.outputColorSpace),p.push(M.envMapMode),p.push(M.envMapPMREM),p.push(M.envMapMaxLod),p.push(M.envMapSize),p.push(M.mapUv),p.push(M.alphaMapUv),p.push(M.lightMapUv),p.push(M.aoMapUv),p.push(M.bumpMapUv),p.push(M.normalMapUv),p.push(M.displacementMapUv),p.push(M.emissiveMapUv),p.push(M.metalnessMapUv),p.push(M.roughnessMapUv),p.push(M.anisotropyMapUv),p.push(M.clearcoatMapUv),p.push(M.clearcoatNormalMapUv),p.push(M.clearcoatRoughnessMapUv),p.push(M.diffuseRoughnessMapUv),p.push(M.iridescenceMapUv),p.push(M.iridescenceThicknessMapUv),p.push(M.sheenColorMapUv),p.push(M.sheenRoughnessMapUv),p.push(M.specularMapUv),p.push(M.specularColorMapUv),p.push(M.specularIntensityMapUv),p.push(M.transmissionMapUv),p.push(M.thicknessMapUv),p.push(M.combine),p.push(M.fogExp2),p.push(M.sizeAttenuation),p.push(M.morphTargetsCount),p.push(M.numSunLights),p.push(M.numDirLights),p.push(M.numPointLights),p.push(M.numSpotLights),p.push(M.numSpotLightMaps),p.push(M.numHemiLights),p.push(M.numRectAreaLights),p.push(M.numSunLightShadows),p.push(M.numDirLightShadows),p.push(M.numPointLightShadows),p.push(M.numSpotLightShadows),p.push(M.numSpotLightShadowsWithMaps),p.push(M.numLightProbes),p.push(M.numLightProbeGrids),p.push(M.shadowMapType),p.push(M.toneMapping),p.push(M.numClippingPlanes),p.push(M.numClipIntersection),p.push(M.depthPacking)}function g(p,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function S(p){let M=h[p.type],C;if(M){let E=Qi[M];C=$p.clone(E.uniforms)}else C=p.uniforms;return C}function A(p,M){let C=u.get(M);return C!==void 0?++C.usedTimes:(C=new ZM(s,M,p,i),c.push(C),u.set(M,C)),C}function v(p){if(--p.usedTimes===0){let M=c.indexOf(p);c[M]=c[c.length-1],c.pop(),u.delete(p.cacheKey),p.destroy()}}function b(p){o.remove(p)}function y(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:S,acquireProgram:A,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:y}}function QM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function jM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function gm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _m(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,x,m,g){let S=s[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},s[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=_,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=m,S.group=g),t++,S}function l(h,d,_,x,m,g,S){S.reversedDepth===!0&&(m=-m);let A=o(h,d,_,x,m,g);_.transmission>0?n.push(A):_.transparent===!0?i.push(A):e.push(A)}function c(h,d,_,x,m,g){let S=o(h,d,_,x,m,g);_.transmission>0?n.unshift(S):_.transparent===!0?i.unshift(S):e.unshift(S)}function u(h,d){e.length>1&&e.sort(h||jM),n.length>1&&n.sort(d||gm),i.length>1&&i.sort(d||gm)}function f(){for(let h=t,d=s.length;h<d;h++){let _=s[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:u}}function tS(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new _m,s.set(n,[a])):i>=r.length?(a=new _m,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function eS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new ce};break;case"SpotLight":e={position:new Y,direction:new Y,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=e,e}}}function nS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var iS=0;function sS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function rS(s){let t=new eS,e=nS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,r=new Be,a=new Be;function o(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,_=0,x=0,m=0,g=0,S=0,A=0,v=0,b=0,y=0,p=0,M=0,C=0,E=0;c.sort(sS);for(let D=0,B=c.length;D<B;D++){let I=c[D],z=I.color,G=I.intensity,U=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Xs?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*G,f+=z.g*G,h+=z.b*G;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],G);E++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=Q;let xt=P.getViewportCount();for(let At=0;At<xt;At++)n.sunShadowMatrix[x+At]=P.getMatrix(At),n.sunShadowCascade[x+At]=P._cascadeData[At];x+=xt,_++}n.sun[d]=H,d++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=H,m++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(z).multiplyScalar(G),H.distance=U,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[S]=H;let P=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,P.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[S]=P.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=Q,p++}S++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(z).multiplyScalar(G),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=H,A++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let P=I.shadow,j=e.get(I);j.shadowIntensity=P.intensity,j.shadowBias=P.bias,j.shadowNormalBias=P.normalBias,j.shadowRadius=P.radius,j.shadowMapSize=P.mapSize,j.shadowCameraNear=P.camera.near,j.shadowCameraFar=P.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(G),H.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[v]=H,v++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==S||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==p||L.numSpotMaps!==M||L.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=g,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=p,n.spotShadowMap.length=p,n.spotLightMatrix.length=p+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=S,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=p,L.numSpotMaps=M,L.numLightProbes=E,n.version=iS++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0,m=0,g=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let v=c[S];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),h++}else if(v.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),_++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function xm(s){let t=new rS(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),i.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function aS(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new xm(s),t.set(i,[o])):r>=a.length?(o=new xm(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var oS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cS=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],uS=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],vm=new Be,vo=new Y,cf=new Y;function hS(s,t,e){let n=new _r,i=new ae,r=new ae,a=new Le,o=new Jl,l=new $l,c={},u=e.maxTextureSize,f={[Hs]:zn,[zn]:Hs,[Ji]:Ji},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:oS,fragmentShader:lS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ui;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Zi(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let g=this.type;this.render=function(y,p,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===dp&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=co);let C=s.getRenderTarget(),E=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(xr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&p.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=y.length;I<z;I++){let G=y[I],U=G.shadow;if(U===void 0){Vt("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let Q=U.getFrameExtents();i.multiply(Q),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,U.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=H,U.map===null||B===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ca){if(G.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ci(i.x,i.y,{format:Xs,type:zi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),U.map.texture.name=G.name+".shadowMap",U.map.depthTexture=new ps(i.x,i.y,Bi),U.map.depthTexture.name=G.name+".shadowMapDepth",U.map.depthTexture.format=ds,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=mn,U.map.depthTexture.magFilter=mn}else G.isPointLight?(U.map=new Mo(i.x),U.map.depthTexture=new so(i.x,Oi)):(U.map=new ci(i.x,i.y),U.map.depthTexture=new ps(i.x,i.y,Oi)),U.map.depthTexture.name=G.name+".shadowMap",U.map.depthTexture.format=ds,this.type===co?(U.map.depthTexture.compareFunction=H?Yh:qh,U.map.depthTexture.minFilter=Bn,U.map.depthTexture.magFilter=Bn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=mn,U.map.depthTexture.magFilter=mn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let P=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();G.isPointLight!==!0&&U.updateMatrices(G,M);let j=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:M.layers;for(let xt=0;xt<P;xt++){let At=U.getCamera(xt);if(G.isPointLight){let q=U.camera,ot=U.matrix,_t=G.distance||q.far;_t!==q.far&&(q.far=_t,q.updateProjectionMatrix()),vo.setFromMatrixPosition(G.matrixWorld),q.position.copy(vo),cf.copy(q.position),cf.add(cS[xt]),q.up.copy(uS[xt]),q.lookAt(cf),q.updateMatrixWorld(),ot.makeTranslation(-vo.x,-vo.y,-vo.z),vm.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(vm,q.coordinateSystem,q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,xt),s.clear();else{xt===0&&(s.setRenderTarget(U.map),s.clear());let q=U.getViewport(xt);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(a)}n=U.getFrustum(xt),v(p,M,At,G,j,this.type)}U.isPointLightShadow!==!0&&this.type===ca&&S(U,M),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,E,L)};function S(y,p){let M=t.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new ci(i.x,i.y,{format:Xs,type:zi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(p,null,M,h,x,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(p,null,M,d,x,null)}function A(y,p,M,C){let E=null,L=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)E=L;else if(E=M.isPointLight===!0?l:o,s.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let D=E.uuid,B=p.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[B];z===void 0&&(z=E.clone(),I[B]=z,p.addEventListener("dispose",b)),E=z}if(E.visible=p.visible,E.wireframe=p.wireframe,C===ca?E.side=p.shadowSide!==null?p.shadowSide:p.side:E.side=p.shadowSide!==null?p.shadowSide:f[p.side],E.alphaMap=p.alphaMap,E.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,E.map=p.map,E.clipShadows=p.clipShadows,E.clippingPlanes=p.clippingPlanes,E.clipIntersection=p.clipIntersection,E.displacementMap=p.displacementMap,E.displacementScale=p.displacementScale,E.displacementBias=p.displacementBias,E.wireframeLinewidth=p.wireframeLinewidth,E.linewidth=p.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=s.properties.get(E);D.light=M}return E}function v(y,p,M,C,E,L){if(y.visible===!1)return;if(y.layers.test(E)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===ca)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let I=t.update(y),z=y.material;if(Array.isArray(z)){let G=I.groups;for(let U=0,Q=G.length;U<Q;U++){let H=G[U],P=z[H.materialIndex];if(P&&P.visible){let j=A(y,P,C,L);y.onBeforeShadow(s,y,p,M,I,j,H),s.renderBufferDirect(M,null,I,j,y,H),y.onAfterShadow(s,y,p,M,I,j,H)}}}else if(z.visible){let G=A(y,z,C,L);y.onBeforeShadow(s,y,p,M,I,G,null),s.renderBufferDirect(M,null,I,G,y,null),y.onAfterShadow(s,y,p,M,I,G,null)}}let B=y.children;for(let I=0,z=B.length;I<z;I++)v(B[I],p,M,C,E,L)}function b(y){y.target.removeEventListener("dispose",b);for(let M in c){let C=c[M],E=y.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}function fS(s,t){function e(){let N=!1,K=new Le,$=null,dt=new Le(0,0,0,0);return{setMask:function(lt){$!==lt&&!N&&(s.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){N=lt},setClear:function(lt,pt,at,mt,st){st===!0&&(lt*=mt,pt*=mt,at*=mt),K.set(lt,pt,at,mt),dt.equals(K)===!1&&(s.clearColor(lt,pt,at,mt),dt.copy(K))},reset:function(){N=!1,$=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,K=!1,$=null,dt=null,lt=null;return{setReversed:function(pt){if(K!==pt){let at=t.get("EXT_clip_control");pt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),K=pt;let mt=lt;lt=null,this.setClear(mt)}},getReversed:function(){return K},setTest:function(pt){pt?ht(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(pt){$!==pt&&!N&&(s.depthMask(pt),$=pt)},setFunc:function(pt){if(K&&(pt=Yp[pt]),dt!==pt){switch(pt){case Pl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Ll:s.depthFunc(s.LESS);break;case ia:s.depthFunc(s.LEQUAL);break;case Dl:s.depthFunc(s.EQUAL);break;case Nl:s.depthFunc(s.GEQUAL);break;case Fl:s.depthFunc(s.GREATER);break;case Ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=pt}},setLocked:function(pt){N=pt},setClear:function(pt){lt!==pt&&(lt=pt,K&&(pt=1-pt),s.clearDepth(pt))},reset:function(){N=!1,$=null,dt=null,lt=null,K=!1}}}function i(){let N=!1,K=null,$=null,dt=null,lt=null,pt=null,at=null,mt=null,st=null;return{setTest:function(et){N||(et?ht(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(et){K!==et&&!N&&(s.stencilMask(et),K=et)},setFunc:function(et,vt,nt){($!==et||dt!==vt||lt!==nt)&&(s.stencilFunc(et,vt,nt),$=et,dt=vt,lt=nt)},setOp:function(et,vt,nt){(pt!==et||at!==vt||mt!==nt)&&(s.stencilOp(et,vt,nt),pt=et,at=vt,mt=nt)},setLocked:function(et){N=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){N=!1,K=null,$=null,dt=null,lt=null,pt=null,at=null,mt=null,st=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,_=[],x=null,m=!1,g=null,S=null,A=null,v=null,b=null,y=null,p=null,M=new ce(0,0,0),C=0,E=!1,L=null,D=null,B=null,I=null,z=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Q=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=Q>=2);let P=null,j={},xt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),q=new Le().fromArray(xt),ot=new Le().fromArray(At);function _t(N,K,$,dt){let lt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(N,pt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<$;at++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(K+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return pt}let St={};St[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),a.setFunc(ia),J(!1),jt(bh),ht(s.CULL_FACE),de(xr);function ht(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Ft(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Me(N,K){return h[N]!==K?(s.bindFramebuffer(N,K),h[N]=K,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=K),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=K),!0):!1}function Et(N,K){let $=_,dt=!1;if(N){$=d.get(K),$===void 0&&($=[],d.set(K,$));let lt=N.textures;if($.length!==lt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,at=lt.length;pt<at;pt++)$[pt]=s.COLOR_ATTACHMENT0+pt;$.length=lt.length,dt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,dt=!0);dt&&s.drawBuffers($)}function Wt(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let Dt={[vr]:s.FUNC_ADD,[mp]:s.FUNC_SUBTRACT,[gp]:s.FUNC_REVERSE_SUBTRACT};Dt[_p]=s.MIN,Dt[xp]=s.MAX;let Ot={[vp]:s.ZERO,[yp]:s.ONE,[Mp]:s.SRC_COLOR,[Eh]:s.SRC_ALPHA,[Ep]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[bp]:s.DST_ALPHA,[Sp]:s.ONE_MINUS_SRC_COLOR,[Ch]:s.ONE_MINUS_SRC_ALPHA,[Ap]:s.ONE_MINUS_DST_COLOR,[Tp]:s.ONE_MINUS_DST_ALPHA,[Cp]:s.CONSTANT_COLOR,[Rp]:s.ONE_MINUS_CONSTANT_COLOR,[Pp]:s.CONSTANT_ALPHA,[Ip]:s.ONE_MINUS_CONSTANT_ALPHA};function de(N,K,$,dt,lt,pt,at,mt,st,et){if(N===xr){m===!0&&(Ft(s.BLEND),m=!1);return}if(m===!1&&(ht(s.BLEND),m=!0),N!==pp){if(N!==g||et!==E){if((S!==vr||b!==vr)&&(s.blendEquation(s.FUNC_ADD),S=vr,b=vr),et)switch(N){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Th:s.blendFunc(s.ONE,s.ONE);break;case wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ah:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Th:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wh:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",N);break}A=null,v=null,y=null,p=null,M.set(0,0,0),C=0,g=N,E=et}return}lt=lt||K,pt=pt||$,at=at||dt,(K!==S||lt!==b)&&(s.blendEquationSeparate(Dt[K],Dt[lt]),S=K,b=lt),($!==A||dt!==v||pt!==y||at!==p)&&(s.blendFuncSeparate(Ot[$],Ot[dt],Ot[pt],Ot[at]),A=$,v=dt,y=pt,p=at),(mt.equals(M)===!1||st!==C)&&(s.blendColor(mt.r,mt.g,mt.b,st),M.copy(mt),C=st),g=N,E=!1}function ue(N,K){N.side===Ji?Ft(s.CULL_FACE):ht(s.CULL_FACE);let $=N.side===zn;K&&($=!$),J($),N.blending===Ws&&N.transparent===!1?de(xr):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),we(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function jt(N){N!==hp?(ht(s.CULL_FACE),N!==D&&(N===bh?s.cullFace(s.BACK):N===fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),D=N}function $e(N){N!==B&&(U&&s.lineWidth(N),B=N)}function we(N,K,$){N?(ht(s.POLYGON_OFFSET_FILL),(I!==K||z!==$)&&(I=K,z=$,a.getReversed()&&(K=-K,$=-$),s.polygonOffset(K,$))):Ft(s.POLYGON_OFFSET_FILL)}function se(N){N?ht(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function Ge(N){N===void 0&&(N=s.TEXTURE0+G-1),P!==N&&(s.activeTexture(N),P=N)}function Ze(N,K,$){$===void 0&&(P===null?$=s.TEXTURE0+G-1:$=P);let dt=j[$];dt===void 0&&(dt={type:void 0,texture:void 0},j[$]=dt),(dt.type!==N||dt.texture!==K)&&(P!==$&&(s.activeTexture($),P=$),s.bindTexture(N,K||St[N]),dt.type=N,dt.texture=K)}function O(){let N=j[P];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ge(){try{s.compressedTexImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function he(){try{s.compressedTexImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function ft(){try{s.texSubImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function zt(){try{s.texStorage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function R(){try{s.texStorage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function T(){try{s.texImage2D(...arguments)}catch(N){Gt("WebGLState:",N)}}function V(){try{s.texImage3D(...arguments)}catch(N){Gt("WebGLState:",N)}}function rt(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function it(N,K){f[N]!==K&&(s.pixelStorei(N,K),f[N]=K)}function ut(N){q.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function gt(N){ot.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ot.copy(N))}function W(N,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let dt=$.get(N);dt===void 0&&(dt=s.getUniformBlockIndex(K,N.name),s.uniformBlockBinding(K,dt,dt),$.set(N,dt))}function tt(N,K,$){let lt=c.get(K).get(N);l[lt]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,$),l[lt]=$)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},P=null,j={},h={},l={},d=new WeakMap,_=[],x=null,m=!1,g=null,S=null,A=null,v=null,b=null,y=null,p=null,M=new ce(0,0,0),C=0,E=!1,L=null,D=null,B=null,I=null,z=null,q.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Ft,bindFramebuffer:Me,drawBuffers:Et,useProgram:Wt,setBlending:de,setMaterial:ue,setFlipSided:J,setCullFace:jt,setLineWidth:$e,setPolygonOffset:we,setScissorTest:se,activeTexture:Ge,bindTexture:Ze,unbindTexture:O,compressedTexImage2D:ge,compressedTexImage3D:he,texImage2D:T,texImage3D:V,pixelStorei:it,getParameter:rt,updateUBOMapping:W,uniformBlockBinding:tt,texStorage2D:zt,texStorage3D:R,texSubImage2D:Ht,texSubImage3D:ft,compressedTexSubImage2D:pe,compressedTexSubImage3D:Nt,scissor:ut,viewport:gt,reset:ct}}function dS(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,f=new Set,h,d=new WeakMap,_=new Set,x=new FinalizationRegistry(R=>_.delete(R)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return m?new OffscreenCanvas(R,T):Ja("canvas")}function S(R,T,V){let rt=1,it=zt(R);if((it.width>V||it.height>V)&&(rt=V/Math.max(it.width,it.height)),rt<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let ut=Math.floor(rt*it.width),gt=Math.floor(rt*it.height);h===void 0&&(h=g(ut,gt));let W=T?g(ut,gt):h;return W.width=ut,W.height=gt,W.getContext("2d").drawImage(R,0,0,ut,gt),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ut+"x"+gt+")."),W}else return"data"in R&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function A(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,T,V,rt,it,ut=!1){if(R!==null){if(s[R]!==void 0)return s[R];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;rt&&(gt=t.get("EXT_texture_norm16"),gt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=T;if(T===s.RED&&(V===s.FLOAT&&(W=s.R32F),V===s.HALF_FLOAT&&(W=s.R16F),V===s.UNSIGNED_BYTE&&(W=s.R8),V===s.UNSIGNED_SHORT&&gt&&(W=gt.R16_EXT),V===s.SHORT&&gt&&(W=gt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.R8UI),V===s.UNSIGNED_SHORT&&(W=s.R16UI),V===s.UNSIGNED_INT&&(W=s.R32UI),V===s.BYTE&&(W=s.R8I),V===s.SHORT&&(W=s.R16I),V===s.INT&&(W=s.R32I)),T===s.RG&&(V===s.FLOAT&&(W=s.RG32F),V===s.HALF_FLOAT&&(W=s.RG16F),V===s.UNSIGNED_BYTE&&(W=s.RG8),V===s.UNSIGNED_SHORT&&gt&&(W=gt.RG16_EXT),V===s.SHORT&&gt&&(W=gt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RG8UI),V===s.UNSIGNED_SHORT&&(W=s.RG16UI),V===s.UNSIGNED_INT&&(W=s.RG32UI),V===s.BYTE&&(W=s.RG8I),V===s.SHORT&&(W=s.RG16I),V===s.INT&&(W=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RGB8UI),V===s.UNSIGNED_SHORT&&(W=s.RGB16UI),V===s.UNSIGNED_INT&&(W=s.RGB32UI),V===s.BYTE&&(W=s.RGB8I),V===s.SHORT&&(W=s.RGB16I),V===s.INT&&(W=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),V===s.UNSIGNED_INT&&(W=s.RGBA32UI),V===s.BYTE&&(W=s.RGBA8I),V===s.SHORT&&(W=s.RGBA16I),V===s.INT&&(W=s.RGBA32I)),T===s.RGB&&(V===s.UNSIGNED_SHORT&&gt&&(W=gt.RGB16_EXT),V===s.SHORT&&gt&&(W=gt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),T===s.RGBA){let tt=ut?Ya:ie.getTransfer(it);V===s.FLOAT&&(W=s.RGBA32F),V===s.HALF_FLOAT&&(W=s.RGBA16F),V===s.UNSIGNED_BYTE&&(W=tt===ve?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&gt&&(W=gt.RGBA16_EXT),V===s.SHORT&&gt&&(W=gt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function p(R,T){let V;return R?T===null||T===Oi||T===Mr?V=s.DEPTH24_STENCIL8:T===Bi?V=s.DEPTH32F_STENCIL8:T===ha&&(V=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Oi||T===Mr?V=s.DEPTH_COMPONENT24:T===Bi?V=s.DEPTH_COMPONENT32F:T===ha&&(V=s.DEPTH_COMPONENT16),V}function M(R,T){return A(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){let T=new WeakRef(R);n.get(R).__ref=T,_.add(T),x.register(R,T,T)}function E(R){let T=n.get(R).__ref;T!==void 0&&(_.delete(T),x.unregister(T))}function L(R){B(R.target)}function D(R){I(R.target)}function B(R){R.removeEventListener("dispose",L),E(R),G(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function I(R){R.removeEventListener("dispose",D),E(R),Q(R)}function z(){for(let R of _){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):B(T))}_.clear(),f.clear()}function G(R){let T=n.get(R);if(T.__webglInit===void 0)return;let V=R.source,rt=d.get(V);if(rt){let it=rt[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&U(R),Object.keys(rt).length===0&&d.delete(V)}n.remove(R)}function U(R){let T=n.get(R);s.deleteTexture(T.__webglTexture);let V=R.source,rt=d.get(V);delete rt[T.__cacheKey],a.memory.textures--}function Q(R){let T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&B(V),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let ut=0;ut<T.__webglFramebuffer[it].length;ut++)s.deleteFramebuffer(T.__webglFramebuffer[it][ut]);else s.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)s.deleteFramebuffer(T.__webglFramebuffer[it]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let rt=R.textures;for(let it=0,ut=rt.length;it<ut;it++){let gt=n.get(rt[it]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(rt[it])}n.remove(R)}let H=0;function P(){H=0}function j(){return H}function xt(R){H=R}function At(){let R=H;return R>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,R}function q(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ot(R,T){let V=n.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let rt=R.image;if(rt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,R,T);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function _t(R,T){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ue(V,R,T);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function St(R,T){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ue(V,R,T);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function ht(R,T){let V=n.get(R);if(R.version>0&&V.__version!==R.version){J(V,R,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}let Ft={[Ol]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Bl]:s.MIRRORED_REPEAT},Me={[mn]:s.NEAREST,[Np]:s.NEAREST_MIPMAP_NEAREST,[uo]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[fc]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},Et={[Bp]:s.NEVER,[Zh]:s.ALWAYS,[zp]:s.LESS,[qh]:s.LEQUAL,[kp]:s.EQUAL,[Yh]:s.GEQUAL,[Vp]:s.GREATER,[Gp]:s.NOTEQUAL};function Wt(R,T){if(T.type===Bi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===fc||T.magFilter===uo||T.magFilter===ms||T.minFilter===Bn||T.minFilter===fc||T.minFilter===uo||T.minFilter===ms)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ft[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ft[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ft[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Me[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mn||T.minFilter!==uo&&T.minFilter!==ms||T.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Dt(R,T){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",L),C(T));let rt=T.source,it=d.get(rt);it===void 0&&(it={},d.set(rt,it));let ut=q(T);if(ut!==R.__cacheKey){it[ut]===void 0&&(it[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),it[ut].usedTimes++;let gt=it[R.__cacheKey];gt!==void 0&&(it[R.__cacheKey].usedTimes--,gt.usedTimes===0&&U(T)),R.__cacheKey=ut,R.__webglTexture=it[ut].texture}return V}function Ot(R,T,V){return Math.floor(Math.floor(R/V)/T)}function de(R,T,V,rt){let ut=R.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,V,rt,T.data);else{ut.sort((N,K)=>N.start-K.start);let gt=0;for(let N=1;N<ut.length;N++){let K=ut[gt],$=ut[N],dt=K.start+K.count,lt=Ot($.start,T.width,4),pt=Ot(K.start,T.width,4);$.start<=dt+1&&lt===pt&&Ot($.start+$.count-1,T.width,4)===lt?K.count=Math.max(K.count,$.start+$.count-K.start):(++gt,ut[gt]=$)}ut.length=gt+1;let W=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let N=0,K=ut.length;N<K;N++){let $=ut[N],dt=Math.floor($.start/4),lt=Math.ceil($.count/4),pt=dt%T.width,at=Math.floor(dt/T.width),mt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,pt,at,mt,st,V,rt,T.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,W),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function ue(R,T,V){let rt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=s.TEXTURE_3D);let it=Dt(R,T),ut=T.source;e.bindTexture(rt,R.__webglTexture,s.TEXTURE0+V);let gt=n.get(ut);if(ut.version!==gt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&T.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),et=T.colorSpace===_s?null:ie.getPrimaries(T.colorSpace),vt=T.colorSpace===_s||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let tt=S(T.image,!1,i.maxTextureSize);tt=Nt(T,tt);let ct=r.convert(T.format,T.colorSpace),N=r.convert(T.type),K=y(T.internalFormat,ct,N,T.normalized,T.colorSpace,T.isVideoTexture);Wt(rt,T);let $,dt=T.mipmaps,lt=T.isVideoTexture!==!0,pt=gt.__version===void 0||it===!0,at=ut.dataReady,mt=M(T,tt);if(T.isDepthTexture)K=p(T.format===gs,T.type),pt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,K,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,K,tt.width,tt.height,0,ct,N,null));else if(T.isDataTexture)if(dt.length>0){lt&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,K,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)$=dt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,$.width,$.height,ct,N,$.data):e.texImage2D(s.TEXTURE_2D,st,K,$.width,$.height,0,ct,N,$.data);T.generateMipmaps=!1}else lt?(pt&&e.texStorage2D(s.TEXTURE_2D,mt,K,tt.width,tt.height),at&&de(T,tt,ct,N)):e.texImage2D(s.TEXTURE_2D,0,K,tt.width,tt.height,0,ct,N,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,K,dt[0].width,dt[0].height,tt.depth);for(let st=0,et=dt.length;st<et;st++)if($=dt[st],T.format!==ki)if(ct!==null)if(lt){if(at)if(T.layerUpdates.size>0){let vt=ef($.width,$.height,T.format,T.type);for(let nt of T.layerUpdates){let Tt=$.data.subarray(nt*vt/$.data.BYTES_PER_ELEMENT,(nt+1)*vt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,nt,$.width,$.height,1,ct,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,tt.depth,ct,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,K,$.width,$.height,tt.depth,0,$.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,tt.depth,ct,N,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,K,$.width,$.height,tt.depth,0,ct,N,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{lt&&pt&&e.texStorage2D(s.TEXTURE_2D,mt,K,dt[0].width,dt[0].height);for(let st=0,et=dt.length;st<et;st++)$=dt[st],T.format!==ki?ct!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,$.width,$.height,ct,$.data):e.compressedTexImage2D(s.TEXTURE_2D,st,K,$.width,$.height,0,$.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,$.width,$.height,ct,N,$.data):e.texImage2D(s.TEXTURE_2D,st,K,$.width,$.height,0,ct,N,$.data)}else if(T.isDataArrayTexture)if(lt){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,K,tt.width,tt.height,tt.depth),at)if(T.layerUpdates.size>0){let st=ef(tt.width,tt.height,T.format,T.type);for(let et of T.layerUpdates){let vt=tt.data.subarray(et*st/tt.data.BYTES_PER_ELEMENT,(et+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,N,vt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,N,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,K,tt.width,tt.height,tt.depth,0,ct,N,tt.data);else if(T.isData3DTexture)lt?(pt&&e.texStorage3D(s.TEXTURE_3D,mt,K,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,N,tt.data)):e.texImage3D(s.TEXTURE_3D,0,K,tt.width,tt.height,tt.depth,0,ct,N,tt.data);else if(T.isFramebufferTexture){if(pt)if(lt)e.texStorage2D(s.TEXTURE_2D,mt,K,tt.width,tt.height);else{let st=tt.width,et=tt.height;for(let vt=0;vt<mt;vt++)e.texImage2D(s.TEXTURE_2D,vt,K,st,et,0,ct,N,null),st>>=1,et>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),f.add(T),st.onpaint=et=>{let vt=et.changedElements;for(let nt of f)vt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let vt=s.RGBA,nt=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,nt,Tt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(lt&&pt){let st=zt(dt[0]);e.texStorage2D(s.TEXTURE_2D,mt,K,st.width,st.height)}for(let st=0,et=dt.length;st<et;st++)$=dt[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,N,$):e.texImage2D(s.TEXTURE_2D,st,K,ct,N,$);T.generateMipmaps=!1}else if(lt){if(pt){let st=zt(tt);e.texStorage2D(s.TEXTURE_2D,mt,K,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,N,tt)}else e.texImage2D(s.TEXTURE_2D,0,K,ct,N,tt);A(T)&&T.mipmapsAutoUpdate===!0&&v(rt),gt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function J(R,T,V){if(T.image.length!==6)return;let rt=Dt(R,T),it=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);let ut=n.get(it);if(it.version!==ut.__version||rt===!0){e.activeTexture(s.TEXTURE0+V);let gt=ie.getPrimaries(ie.workingColorSpace),W=T.colorSpace===_s?null:ie.getPrimaries(T.colorSpace),tt=T.colorSpace===_s||gt===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!ct&&!N?K[nt]=S(T.image[nt],!0,i.maxCubemapSize):K[nt]=N?T.image[nt].image:T.image[nt],K[nt]=Nt(T,K[nt]);let $=K[0],dt=r.convert(T.format,T.colorSpace),lt=r.convert(T.type),pt=y(T.internalFormat,dt,lt,T.normalized,T.colorSpace),at=T.isVideoTexture!==!0,mt=ut.__version===void 0||rt===!0,st=it.dataReady,et=M(T,$);Wt(s.TEXTURE_CUBE_MAP,T);let vt;if(T.isDepthTexture){if(pt=p(T.format===gs,T.type),mt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,pt,$.width,$.height);else for(let nt=0;nt<6;nt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,$.width,$.height,0,dt,lt,null)}else if(ct){at&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,$.width,$.height);for(let nt=0;nt<6;nt++){vt=K[nt].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){let te=vt[Tt];T.format!==ki?dt!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,te.width,te.height,dt,te.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,te.width,te.height,0,te.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,te.width,te.height,dt,lt,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,te.width,te.height,0,dt,lt,te.data)}}}else{if(vt=T.mipmaps,at&&mt){vt.length>0&&et++;let nt=zt(K[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(N){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,dt,lt,K[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,K[nt].width,K[nt].height,0,dt,lt,K[nt].data);for(let Tt=0;Tt<vt.length;Tt++){let Xt=vt[Tt].image[nt].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Xt.width,Xt.height,dt,lt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,Xt.width,Xt.height,0,dt,lt,Xt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,lt,K[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,dt,lt,K[nt]);for(let Tt=0;Tt<vt.length;Tt++){let te=vt[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,dt,lt,te.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,dt,lt,te.image[nt])}}}A(T)&&T.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ut.__version=it.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function jt(R,T,V,rt,it,ut){let gt=r.convert(V.format,V.colorSpace),W=r.convert(V.type),tt=y(V.internalFormat,gt,W,V.normalized,V.colorSpace),ct=n.get(T),N=n.get(V);if(N.__renderTarget=T,!ct.__hasExternalTextures){let K=Math.max(1,T.width>>ut),$=Math.max(1,T.height>>ut);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ut,tt,K,$,T.depth,0,gt,W,null):e.texImage2D(it,ut,tt,K,$,0,gt,W,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ft(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,it,N.__webglTexture,0,Ht(T)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,it,N.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(R,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){let rt=T.depthTexture,it=rt&&rt.isDepthTexture?rt.type:null,ut=p(T.stencilBuffer,it),gt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(T),ut,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(T),ut,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,R)}else{let rt=T.textures;for(let it=0;it<rt.length;it++){let ut=rt[it],gt=r.convert(ut.format,ut.colorSpace),W=r.convert(ut.type),tt=y(ut.internalFormat,gt,W,ut.normalized,ut.colorSpace);ft(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(T),tt,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(T),tt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,tt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(R,T,V){let rt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(T.depthTexture);it.__renderTarget=T;let ut=rt?T.depthTexture.image[0]:T.depthTexture.image;(!it.__webglTexture||ut.width!==T.width||ut.height!==T.height)&&(ut.width=T.width,ut.height=T.height,T.depthTexture.needsUpdate=!0),rt?ht(T.depthTexture,0):ot(T.depthTexture,0);let gt=it.__webglTexture,W=Ht(T),tt=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ct=T.depthTexture.format===gs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ds)ft(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else if(T.depthTexture.format===gs)ft(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){let T=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let rt=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){let it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",it)};rt.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=rt}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let rt=0;rt<6;rt++)we(T.__webglFramebuffer[rt],R,rt);else R.texture.mipmaps.length>0?we(T.__webglFramebuffer[0],R,0):we(T.__webglFramebuffer,R,0);else if(V){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=s.createRenderbuffer(),$e(T.__webglDepthbuffer[rt],R,!1);else{let it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ut)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),$e(T.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(R,T,V){let rt=n.get(R);T!==void 0&&jt(rt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&se(R)}function Ze(R){let T=R.texture,V=n.get(R),rt=n.get(T);R.addEventListener("dispose",D),C(R);let it=R.textures,ut=R.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=T.version,a.memory.textures++),ut){V.__webglFramebuffer=[];for(let W=0;W<6;W++)if(T.mipmaps.length>0){V.__webglFramebuffer[W]=[];for(let tt=0;tt<T.mipmaps.length;tt++)V.__webglFramebuffer[W][tt]=s.createFramebuffer()}else V.__webglFramebuffer[W]=s.createFramebuffer()}else{if(T.mipmaps.length>0){V.__webglFramebuffer=[];for(let W=0;W<T.mipmaps.length;W++)V.__webglFramebuffer[W]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(gt)for(let W=0,tt=it.length;W<tt;W++){let ct=n.get(it[W]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ft(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let W=0;W<it.length;W++){let tt=it[W];V.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[W]);let ct=r.convert(tt.format,tt.colorSpace),N=r.convert(tt.type),K=y(tt.internalFormat,ct,N,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),$=Ht(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,K,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,V.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),$e(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,T);for(let W=0;W<6;W++)if(T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)jt(V.__webglFramebuffer[W][tt],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,tt);else jt(V.__webglFramebuffer[W],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);A(T)?v(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let W=0,tt=it.length;W<tt;W++){let ct=it[W],N=n.get(ct),K=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,N.__webglTexture),Wt(K,ct),jt(V.__webglFramebuffer,R,ct,s.COLOR_ATTACHMENT0+W,K,0),A(ct)&&v(K)}e.unbindTexture()}else{let W=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(W=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(W,rt.__webglTexture),Wt(W,T),T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)jt(V.__webglFramebuffer[tt],R,T,s.COLOR_ATTACHMENT0,W,tt);else jt(V.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,W,0);A(T)?v(W):T.mipmaps.length>0&&s.texParameteri(W,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&se(R)}function O(R){let T=R.textures;for(let V=0,rt=T.length;V<rt;V++){let it=T[V];if(A(it)&&it.mipmapsAutoUpdate===!0){let ut=b(R),gt=n.get(it).__webglTexture;e.bindTexture(ut,gt),v(ut),e.unbindTexture()}}}let ge=[];function he(R){if(R.samples>0){if(ft(R)===!1){let T=R.textures,V=R.width,rt=R.height,it=s.COLOR_BUFFER_BIT,ut=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(R),W=T.length>1;if(W)for(let ct=0;ct<T.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<T.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let N=n.get(T[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,V,rt,0,0,V,rt,it,s.NEAREST),l===!0&&(ge.length=0,ge.push(s.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ge.push(ut),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ct=0;ct<T.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let N=n.get(T[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ht(R){return Math.min(i.maxSamples,R.samples)}function ft(R){let T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pe(R){let T=a.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function Nt(R,T){let V=R.colorSpace,rt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==mr&&V!==_s&&(ie.getTransfer(V)===ve?(rt!==ki||it!==fi)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",V)),T}function zt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=P,this.getTextureUnits=j,this.setTextureUnits=xt,this.setTexture2D=ot,this.setTexture2DArray=_t,this.setTexture3D=St,this.setTextureCube=ht,this.rebindTextures=Ge,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=ft,this.dispose=z}function pS(s,t){function e(n,i=_s){let r,a=ie.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===pc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return s.BYTE;if(n===zh)return s.SHORT;if(n===ha)return s.UNSIGNED_SHORT;if(n===dc)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===Bi)return s.FLOAT;if(n===zi)return s.HALF_FLOAT;if(n===Gh)return s.ALPHA;if(n===Hh)return s.RGB;if(n===ki)return s.RGBA;if(n===ds)return s.DEPTH_COMPONENT;if(n===gs)return s.DEPTH_STENCIL;if(n===Wh)return s.RED;if(n===gc)return s.RED_INTEGER;if(n===Xs)return s.RG;if(n===_c)return s.RG_INTEGER;if(n===xc)return s.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===yc||n===Mc||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Tc||n===wc||n===Ac||n===Ec||n===go||n===Cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Tc)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ac)return r.COMPRESSED_R11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Fc||n===Uc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===Yc||n===_o||n===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ti({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zi(new ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends qi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null,x=typeof XRWebGLBinding!="undefined",m=new gf,g={},S=e.getContextAttributes(),A=null,v=null,b=[],y=[],p=new ae,M=null,C=null,E=new On;E.viewport=new Le;let L=new On;L.viewport=new Le;let D=[E,L],B=new lc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=b[q];return ot===void 0&&(ot=new aa,b[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=b[q];return ot===void 0&&(ot=new aa,b[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=b[q];return ot===void 0&&(ot=new aa,b[q]=ot),ot.getHandSpace()};function G(q){let ot=y.indexOf(q.inputSource);if(ot===-1)return;let _t=b[ot];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<b.length;q++){let ot=y[q];ot!==null&&(y[q]=null,b[q].disconnect(ot))}I=null,z=null,m.reset();for(let q in g)delete g[q];if(t.setRenderTarget(A),d=null,h=null,f=null,i=null,v=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(p.width,p.height,!1),C!==null){let q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",U),i.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(p),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,St=null,ht=null;S.depth&&(ht=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?gs:ds,St=S.stencil?Mr:Oi);let Ft={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ft),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new ci(h.textureWidth,h.textureHeight,{format:ki,type:fi,depthTexture:new ps(h.textureWidth,h.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ci(d.framebufferWidth,d.framebufferHeight,{format:ki,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(q){for(let ot=0;ot<q.removed.length;ot++){let _t=q.removed[ot],St=y.indexOf(_t);St>=0&&(y[St]=null,b[St].disconnect(_t))}for(let ot=0;ot<q.added.length;ot++){let _t=q.added[ot],St=y.indexOf(_t);if(St===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=y.length){y.push(_t),St=Ft;break}else if(y[Ft]===null){y[Ft]=_t,St=Ft;break}if(St===-1)break}let ht=b[St];ht&&ht.connect(_t)}}function H(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ot=q.near,_t=q.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),B.near=L.near=E.near=ot,B.far=L.far=E.far=_t,(I!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=q.layers.mask|6,E.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let St=q.parent,ht=B.cameras;H(B,St);for(let Ft=0;Ft<ht.length;Ft++)H(ht[Ft],St);B.projectionMatrix.copy(E.projectionMatrix),B.projectionMatrixInverse.copy(E.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),P(q,B,St)};function P(q,ot,_t){_t===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=kl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return g[q]};let j=null;function xt(q,ot){if(u=ot.getViewerPose(c||a),_=ot,u!==null){let _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let St=!1;_t.length!==B.cameras.length&&(B.cameras.length=0,St=!0);for(let Et=0;Et<_t.length;Et++){let Wt=_t[Et],Dt=null;if(d!==null)Dt=d.getViewport(Wt);else{let de=f.getViewSubImage(h,Wt);Dt=de.viewport,Et===0&&(t.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(v))}let Ot=D[Et];Ot===void 0&&(Ot=new On,Ot.layers.enable(Et),Ot.viewport=new Le,D[Et]=Ot),Ot.matrix.fromArray(Wt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Wt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Et===0&&(B.matrix.copy(Ot.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),St===!0&&B.cameras.push(Ot)}let ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Et=f.getDepthInformation(_t[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,i.renderState)}if(ht&&ht.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Et=0;Et<_t.length;Et++){let Wt=_t[Et].camera;if(Wt){let Dt=g[Wt];Dt||(Dt=new ro,g[Wt]=Dt);let Ot=f.getCameraImage(Wt);Dt.sourceTexture=Ot}}}}for(let _t=0;_t<b.length;_t++){let St=y[_t],ht=b[_t];St!==null&&ht!==void 0&&ht.update(St,ot,c||a)}j&&j(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}let At=new ym;At.setAnimationLoop(xt),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}},_S=new Be,Pm=new kt;Pm.set(-1,0,0,0,1,0,0,0,1);function xS(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Qh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,A,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===zn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===zn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),A=S.envMap,v=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(_S.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vS(s,t,e,n){let i={},r={};function a(S,A){let v=A.program;n.uniformBlockBinding(S,v,i[S.id])}function o(S,A){let v=i[S.id];v===void 0&&(_(S),v=l(S),i[S.id]=v,S.addEventListener("dispose",m));let b=A.program;n.updateUBOMapping(S,b);let y=t.render.frame;r[S.id]!==y&&(c(S),r[S.id]=y)}function l(S){let A=s.createBuffer(),v=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function c(S){let A=i[S.id],v=S.uniforms,b=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let y=0,p=v.length;y<p;y++){let M=v[y];if(Array.isArray(M))for(let C=0,E=M.length;C<E;C++)u(M[C],y,C,b);else u(M,y,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(S,A,v,b){if(h(S,A,v,b)===!0){let y=S.__offset,p=S.value;if(Array.isArray(p)){let M=0;for(let C=0;C<p.length;C++){let E=p[C],L=x(E,!0);f(E,S.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(p,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,S.__data)}}function f(S,A,v){typeof S=="number"||typeof S=="boolean"?A[v]=S:S.isMatrix3?(A[v]=S.elements[0],A[v+1]=S.elements[1],A[v+2]=S.elements[2],A[v+3]=0,A[v+4]=S.elements[3],A[v+5]=S.elements[4],A[v+6]=S.elements[5],A[v+7]=0,A[v+8]=S.elements[6],A[v+9]=S.elements[7],A[v+10]=S.elements[8],A[v+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-v),v):S.toArray(A,v)}function h(S,A,v,b){let y=S.value,p=A+"_"+v;if(Array.isArray(y)){b[p]===void 0&&(b[p]=[]);let M=b[p],C=!1;for(let E=0;E<y.length;E++)d(y[E],M,E)===!0&&(C=!0);return C}return d(y,b,p)}function d(S,A,v){if(A[v]===void 0)return typeof S=="number"||typeof S=="boolean"?A[v]=S:ArrayBuffer.isView(S)?A[v]=S.slice():A[v]=S.clone(),!0;{let b=A[v];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return A[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function _(S){let A=S.uniforms,v=0,b=16;for(let p=0,M=A.length;p<M;p++){let C=Array.isArray(A[p])?A[p]:[A[p]];for(let E=0,L=C.length;E<L;E++){let D=C[E],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(A[p])||Array.isArray(D.value),z=v;for(let U=0,Q=B.length;U<Q;U++){let H=B[U],P=x(H,I),j=v%b,xt=j%P.boundary,At=j+xt;v+=xt,At!==0&&b-At<P.storage&&(v+=b-At),U===0&&(z=v),v+=P.storage}let G=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new G((v-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let y=v%b;return y>0&&(v+=b-y),S.__size=v,S.__cache={},this}function x(S,A){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(S){let A=S.target;A.removeEventListener("dispose",m),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:a,update:o,dispose:g}}var yS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function MS(){return Ki===null&&(Ki=new Xl(yS,16,16,Xs,zi),Ki.name="DFG_LUT",Ki.minFilter=Bn,Ki.magFilter=Bn,Ki.wrapS=Xi,Ki.wrapT=Xi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Qc=class{constructor(t={}){let{canvas:e=Wp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=fi}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let x=d,m=new Set([xc,_c,gc]),g=new Set([fi,Oi,ha,Mr,pc,mc]),S=new Uint32Array(4),A=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,y=null,p=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,L=!1,D=null,B=null,I=null,z=null;this._outputColorSpace=li;let G=0,U=0,Q=null,H=-1,P=null,j=new Le,xt=new Le,At=null,q=new ce(0),ot=0,_t=e.width,St=e.height,ht=1,Ft=null,Me=null,Et=new Le(0,0,_t,St),Wt=new Le(0,0,_t,St),Dt=!1,Ot=new _r,de=new ql,ue=!1,J=!1,jt=new Be,$e=new Y,we=new Le,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Ze(){return Q===null?ht:1}let O=n;function ge(w,F){return e.getContext(w,F)}let he,Ht,ft,pe,Nt,zt,R,T,V,rt,it,ut,gt,W,tt,ct,N,K,$,dt,lt,pt,at;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),O===null){let F="webgl2";if(O=ge(F,w),O===null)throw ge(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(w){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Gt("WebGLRenderer: "+w.message),w}function mt(){he=new Ly(O),he.init(),lt=new pS(O,he),Ht=new My(O,he,t,lt),ft=new fS(O,he),Ht.reversedDepthBuffer&&h&&ft.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),pe=new Fy(O),Nt=new QM,zt=new dS(O,he,ft,Nt,Ht,lt,pe),R=new Iy(E),T=new O_(O),pt=new vy(O,T),V=new Dy(O,T,pe,pt),rt=new Oy(O,V,T,pt,pe),K=new Uy(O,Ht,zt),tt=new Sy(Nt),it=new KM(E,R,he,Ht,pt,tt),ut=new xS(E,Nt),gt=new tS,W=new aS(he),N=new xy(E,R,ft,rt,_,l),ct=new hS(E,rt,Ht),at=new vS(O,pe,Ht,ft),$=new yy(O,he,pe),dt=new Ny(O,he,pe),pe.programs=it.programs,E.capabilities=Ht,E.extensions=he,E.properties=Nt,E.renderLists=gt,E.shadowMap=ct,E.state=ft,E.info=pe}x!==fi&&(C=new zy(x,e.width,e.height,o,i,r));let st=new _f(E,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(w){w!==void 0&&(ht=w,this.setSize(_t,St,!1))},this.getSize=function(w){return w.set(_t,St)},this.setSize=function(w,F,Z=!0){if(st.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=w,St=F,e.width=Math.floor(w*ht),e.height=Math.floor(F*ht),Z===!0&&(e.style.width=w+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(_t*ht,St*ht).floor()},this.setDrawingBufferSize=function(w,F,Z){_t=w,St=F,ht=Z,e.width=Math.floor(w*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===fi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,F,Z,k){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,F,Z,k),ft.viewport(j.copy(Et).multiplyScalar(Ze()).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,F,Z,k){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,F,Z,k),ft.scissor(xt.copy(Wt).multiplyScalar(Ze()).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){ft.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){Ft=w},this.setTransparentSort=function(w){Me=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Z=!0){let k=0;if(w){let X=!1;if(Q!==null){let Mt=Q.texture.format;X=m.has(Mt)}if(X){let Mt=Q.texture.type,Rt=g.has(Mt),yt=N.getClearColor(),wt=N.getClearAlpha(),Ut=yt.r,qt=yt.g,ee=yt.b;Rt?(S[0]=Ut,S[1]=qt,S[2]=ee,S[3]=wt,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Ut,A[1]=qt,A[2]=ee,A[3]=wt,O.clearBufferiv(O.COLOR,0,A))}else k|=O.COLOR_BUFFER_BIT}F&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),N.dispose(),gt.dispose(),W.dispose(),zt.dispose(),Nt.dispose(),R.dispose(),rt.dispose(),V.dispose(),pt.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ae),st.removeEventListener("sessionend",xe),an.stop()};function et(w){w.preventDefault(),$h("WebGLRenderer: Context Lost."),L=!0}function vt(){$h("WebGLRenderer: Context Restored."),L=!1;let w=pe.autoReset,F=ct.enabled,Z=ct.autoUpdate,k=ct.needsUpdate,X=ct.type;mt(),pe.autoReset=w,ct.enabled=F,ct.autoUpdate=Z,ct.needsUpdate=k,ct.type=X}function nt(w){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tt(w){let F=w.target;F.removeEventListener("dispose",Tt),te(F)}function te(w){Xt(w),Nt.remove(w)}function Xt(w){let F=Nt.get(w).programs;F!==void 0&&(F.forEach(function(Z){it.releaseProgram(Z)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Z,k,X,Mt){F===null&&(F=se);let Rt=X.isMesh&&X.matrixWorld.determinantAffine()<0,yt=yi(w,F,Z,k,X);ft.setMaterial(k,Rt);let wt=Z.index,Ut=1;if(k.wireframe===!0){if(wt=V.getWireframeAttribute(Z),wt===void 0)return;Ut=2}let qt=Z.drawRange,ee=Z.attributes.position,Pt=qt.start*Ut,ne=(qt.start+qt.count)*Ut;Mt!==null&&(Pt=Math.max(Pt,Mt.start*Ut),ne=Math.min(ne,(Mt.start+Mt.count)*Ut)),wt!==null?(Pt=Math.max(Pt,0),ne=Math.min(ne,wt.count)):ee!=null&&(Pt=Math.max(Pt,0),ne=Math.min(ne,ee.count));let je=ne-Pt;if(je<0||je===1/0)return;pt.setup(X,k,yt,Z,wt);let Ie,Ce=$;if(wt!==null&&(Ie=T.get(wt),Ce=dt,Ce.setIndex(Ie)),X.isMesh)k.wireframe===!0?(ft.setLineWidth(k.wireframeLinewidth*Ze()),Ce.setMode(O.LINES)):Ce.setMode(O.TRIANGLES);else if(X.isLine){let Tn=k.linewidth;Tn===void 0&&(Tn=1),ft.setLineWidth(Tn*Ze()),X.isLineSegments?Ce.setMode(O.LINES):X.isLineLoop?Ce.setMode(O.LINE_LOOP):Ce.setMode(O.LINE_STRIP)}else X.isPoints?Ce.setMode(O.POINTS):X.isSprite&&Ce.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Tn=X._multiDrawStarts,It=X._multiDrawCounts,Un=X._multiDrawCount,_e=wt?T.get(wt).bytesPerElement:1,lr=Nt.get(k).currentProgram.getUniforms();for(let wn=0;wn<Un;wn++)lr.setValue(O,"_gl_DrawID",wn),Ce.render(Tn[wn]/_e,It[wn])}else if(X.isInstancedMesh)Ce.renderInstances(Pt,je,X.count);else if(Z.isInstancedBufferGeometry){let Tn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,Tn);Ce.renderInstances(Pt,je,It)}else Ce.render(Pt,je)};function Ne(w,F,Z,k){D!==null&&w.isNodeMaterial&&D.setObject(k,w),ue===!0&&tt.setState(w,Z,!1),w.transparent===!0&&w.side===Ji&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,ri(w,F,k),w.side=Hs,w.needsUpdate=!0,ri(w,F,k),w.side=Ji):ri(w,F,k)}this.compile=function(w,F,Z=null){Z===null&&(Z=w),D!==null&&D.renderStart(w,F,Z),y=W.get(Z),y.init(F),M.push(y),Z.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),w!==Z&&w.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights(),D!==null&&D.updateLights(y.state.lightsArray),J=this.localClippingEnabled,ue=tt.init(this.clippingPlanes,J),ue===!0&&tt.setGlobalState(this.clippingPlanes,F),D!==null&&ct.render(y.state.shadowsArray,Z,F);let k=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){let yt=Mt[Rt];Ne(yt,Z,F,X),k.add(yt)}else Ne(Mt,Z,F,X),k.add(Mt)}),y=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(w,F,Z=null){let k=this.compile(w,F,Z);return new Promise(X=>{function Mt(){if(k.forEach(function(Rt){let wt=Nt.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&k.delete(Rt)}),k.size===0){X(w);return}setTimeout(Mt,10)}he.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ke=null;function Fe(w){Ke&&Ke(w)}function Ae(){an.stop()}function xe(){an.start()}let an=new ym;an.setAnimationLoop(Fe),typeof self!="undefined"&&an.setContext(self),this.setAnimationLoop=function(w){Ke=w,st.setAnimationLoop(w),w===null?an.stop():an.start()},st.addEventListener("sessionstart",Ae),st.addEventListener("sessionend",xe),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,F);let Z=st.enabled===!0&&st.isPresenting===!0,k=C!==null&&(Q===null||Z)&&C.begin(E,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(F),F=st.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,F,Q),y=W.get(w,M.length),y.init(F),y.state.textureUnits=zt.getTextureUnits(),M.push(y),jt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?de.setFromArrayCamera(F):Ot.setFromProjectionMatrix(jt,Si,F.reversedDepth),J=this.localClippingEnabled,ue=tt.init(this.clippingPlanes,J),b=gt.get(w,p.length),b.init(),p.push(b),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=E.xr.getDepthSensingMesh();Rt!==null&&Ee(Rt,F,-1/0,E.sortObjects)}Ee(w,F,0,E.sortObjects),b.finish(),D!==null&&D.updateLights(y.state.lightsArray),E.sortObjects===!0&&b.sort(Ft,Me),Ge=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ge&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),ue===!0&&tt.beginShadows();let X=y.state.shadowsArray;if(ct.render(X,w,F),ue===!0&&tt.endShadows(),(k&&C.hasRenderPass())===!1){let Rt=b.opaque,yt=b.transmissive;if(y.setupLights(),F.isArrayCamera){let wt=F.cameras;if(yt.length>0)for(let Ut=0,qt=wt.length;Ut<qt;Ut++){let ee=wt[Ut];si(Rt,yt,w,ee)}Ge&&N.render(w);for(let Ut=0,qt=wt.length;Ut<qt;Ut++){let ee=wt[Ut];bn(b,w,ee,ee.viewport)}}else yt.length>0&&si(Rt,yt,w,F),Ge&&N.render(w),bn(b,w,F)}Q!==null&&U===0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q)),k&&C.end(E),w.isScene===!0&&w.onAfterRender(E,w,F),pt.resetDefaultState(),H=-1,P=null,M.pop(),M.length>0?(y=M[M.length-1],zt.setTextureUnits(y.state.textureUnits),ue===!0&&tt.setGlobalState(E.clippingPlanes,y.state.camera)):y=null,p.pop(),p.length>0?b=p[p.length-1]:b=null,D!==null&&D.renderEnd()};function Ee(w,F,Z,k){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){let Rt=F.isArrayCamera?de:Ot;if(!w.frustumCulled||w.intersectsFrustum(Rt)){k&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(jt);let yt=rt.update(w),wt=w.material;wt.visible&&b.push(w,yt,wt,Z,we.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let Rt=F.isArrayCamera?de:Ot;if(!w.frustumCulled||w.intersectsFrustum(Rt)){let yt=rt.update(w),wt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),we.copy(yt.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(jt)),Array.isArray(wt)){let Ut=yt.groups;for(let qt=0,ee=Ut.length;qt<ee;qt++){let Pt=Ut[qt],ne=wt[Pt.materialIndex];ne&&ne.visible&&b.push(w,yt,ne,Z,we.z,Pt,F)}}else wt.visible&&b.push(w,yt,wt,Z,we.z,null,F)}}}let Mt=w.children;for(let Rt=0,yt=Mt.length;Rt<yt;Rt++)Ee(Mt[Rt],F,Z,k)}function bn(w,F,Z,k){let{opaque:X,transmissive:Mt,transparent:Rt}=w;y.setupLightsView(Z),ue===!0&&tt.setGlobalState(E.clippingPlanes,Z),k&&ft.viewport(j.copy(k)),X.length>0&&He(X,F,Z),Mt.length>0&&He(Mt,F,Z),Rt.length>0&&He(Rt,F,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function si(w,F,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){let Pt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:Pt?zi:fi,minFilter:ms,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Mt=y.state.transmissionRenderTarget[k.id],Rt=k.viewport||j;Mt.setSize(Rt.z*E.transmissionResolutionScale,Rt.w*E.transmissionResolutionScale);let yt=E.getRenderTarget(),wt=E.getActiveCubeFace(),Ut=E.getActiveMipmapLevel();E.setRenderTarget(Mt),E.getClearColor(q),ot=E.getClearAlpha(),ot<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&N.render(Z);let qt=E.toneMapping;E.toneMapping=$i;let ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),ue===!0&&tt.setGlobalState(E.clippingPlanes,k),He(w,Z,k),zt.updateMultisampleRenderTarget(Mt),zt.updateRenderTargetMipmap(Mt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ne=0,je=F.length;ne<je;ne++){let Ie=F[ne],{object:Ce,geometry:Tn,material:It,group:Un}=Ie;if(It.side===Ji&&Ce.layers.test(k.layers)){let _e=It.side;It.side=zn,It.needsUpdate=!0,Qe(Ce,Z,k,Tn,It,Un),It.side=_e,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(zt.updateMultisampleRenderTarget(Mt),zt.updateRenderTargetMipmap(Mt))}E.setRenderTarget(yt,wt,Ut),E.setClearColor(q,ot),ee!==void 0&&(k.viewport=ee),E.toneMapping=qt}function He(w,F,Z){let k=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Mt=w.length;X<Mt;X++){let Rt=w[X],{object:yt,geometry:wt,group:Ut}=Rt,qt=Rt.material;qt.allowOverride===!0&&k!==null&&(qt=k),yt.layers.test(Z.layers)&&Qe(yt,F,Z,wt,qt,Ut)}}function Qe(w,F,Z,k,X,Mt){D!==null&&X.isNodeMaterial&&D.setObject(w,X),w.onBeforeRender(E,F,Z,k,X,Mt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(E,F,Z,k,w,Mt),X.transparent===!0&&X.side===Ji&&X.forceSinglePass===!1?(X.side=zn,X.needsUpdate=!0,E.renderBufferDirect(Z,F,k,X,w,Mt),X.side=Hs,X.needsUpdate=!0,E.renderBufferDirect(Z,F,k,X,w,Mt),X.side=Ji):E.renderBufferDirect(Z,F,k,X,w,Mt),w.onAfterRender(E,F,Z,k,X,Mt)}function on(w){let F=0;for(let Z of w)Z.texture!==null&&F++;return F}function ri(w,F,Z){F.isScene!==!0&&(F=se);let k=Nt.get(w),X=y.state.lights,Mt=y.state.shadowsArray,Rt=X.state.version,yt=it.getParameters(w,X.state,Mt,F,Z,y.state.lightProbeGridArray),wt=it.getProgramCacheKey(yt),Ut=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=R.get(w.envMap||k.environment,qt),k.envMapRotation=k.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Tt),Ut=new Map,k.programs=Ut,k.programVariants=new Map);let ee=Ut.get(wt);if(ee!==void 0){if(k.currentProgram===ee&&k.lightsStateVersion===Rt)return We(w,yt),ee}else yt.uniforms=it.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,Z,yt),w.onBeforeCompile(yt,E),ee=it.acquireProgram(yt,wt),Ut.set(wt,ee),k.uniforms=yt.uniforms;let Pt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),We(w,yt),k.needsLights=sl(w),k.lightsStateVersion=Rt,k.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.sunLights.value=X.state.sun,Pt.sunLightShadows.value=X.state.sunShadow,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.sunShadowMatrix.value=X.state.sunShadowMatrix,Pt.sunShadowCascade.value=X.state.sunShadowCascade,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotLightMatrix.value=X.state.spotLightMatrix,Pt.spotLightMap.value=X.state.spotLightMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=on(y.state.lightProbeGridArray),k.currentProgram=ee,k.uniformsList=null,ee}function Gr(w,F,Z,k,X){let Mt=Nt.get(w),Rt=Mt.currentProgram.id+","+k+","+X,yt=Mt.programVariants.get(Rt);return yt===void 0?(yt=ri(w,F,Z),Mt.programVariants.set(Rt,yt)):(Mt.currentProgram=yt,Mt.uniformsList=null,Mt.outputColorSpace=k,Mt.toneMapping=X),yt}function ln(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=fa.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function We(w,F){let Z=Nt.get(w);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function yi(w,F,Z,k,X){F.isScene!==!0&&(F=se),zt.resetTextureUnits();let Mt=F.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,yt=Q===null?E.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ie.workingColorSpace,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ut=R.get(k.envMap||Rt,wt),qt=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ee=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!Z.morphAttributes.position,ne=!!Z.morphAttributes.normal,je=!!Z.morphAttributes.color,Ie=$i;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=E.toneMapping);let Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tn=Ce!==void 0?Ce.length:0,It=Nt.get(k),Un=y.state.lights;if(ue===!0&&(J===!0||w!==P)){let Oe=w===P&&k.id===H;tt.setState(k,w,Oe)}let _e=!1,lr=!1;k.version===It.__version?It.needsLights&&It.lightsStateVersion!==Un.state.version||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Ut||k.fog===!0&&It.fog!==Mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==qt||It.vertexTangents!==ee||It.morphTargets!==Pt||It.morphNormals!==ne||It.morphColors!==je||It.morphTargetsCount!==Tn||It.numLightProbeGrids!==on(y.state.lightProbeGridArray)?_e=!0:(It.outputColorSpace!==yt||It.toneMapping!==Ie)&&(lr=!0):(_e=!0,It.__version=k.version);let wn=It.currentProgram;(_e===!0||lr===!0)&&(wn=lr===!0?Gr(k,F,X,yt,Ie):ri(k,F,X),D&&k.isNodeMaterial&&D.onUpdateProgram(k,wn,It));let rl=!1,Ps=!1,cr=!1,fe=wn.getUniforms(),xn=It.uniforms;if(ft.useProgram(wn.program)&&(rl=!0,Ps=!0,cr=!0),k.id!==H&&(H=k.id,Ps=!0),rl||P!==w){ft.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",w.projectionMatrix),fe.setValue(O,"viewMatrix",w.matrixWorldInverse);let dn=fe.map.cameraPosition;dn!==void 0&&dn.setValue(O,$e.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,Ps=!0,cr=!0)}if(It.needsLights&&(Un.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",Un.state.sunShadowMap,zt),Un.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",Un.state.directionalShadowMap,zt),Un.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",Un.state.spotShadowMap,zt),Un.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",Un.state.pointShadowMap,zt)),X.isSkinnedMesh){fe.setOptional(O,X,"bindMatrix"),fe.setOptional(O,X,"bindMatrixInverse");let Oe=X.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),fe.setValue(O,"boneTexture",Oe.boneTexture,zt))}X.isBatchedMesh&&(fe.setOptional(O,X,"batchingTexture"),fe.setValue(O,"batchingTexture",X._matricesTexture,zt),fe.setOptional(O,X,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",X._indirectTexture,zt),fe.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",X._colorsTexture,zt));let Ii=Z.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&K.update(X,Z,wn),(Ps||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,fe.setValue(O,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(xn.envMapIntensity.value=F.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=MS()),Ps){if(fe.setValue(O,"toneMappingExposure",E.toneMappingExposure),It.needsLights&&ka(xn,cr),Mt&&k.fog===!0&&ut.refreshFogUniforms(xn,Mt),ut.refreshMaterialUniforms(xn,k,ht,St,y.state.transmissionRenderTarget[w.id]),It.needsLights&&It.numLightProbeGrids>0){let Oe=v,dn=0;for(let as of y.state.lightProbeGridArray)as.texture!==null&&(Oe.textures[dn]=as.texture,Oe.min[dn]=as.boundingBox.min,Oe.max[dn]=as.boundingBox.max,Oe.resolution[dn]=as.resolution,dn++);for(let as in Oe)Oe[as].length=dn;xn.probesSH.value=Oe.textures,xn.probesMin.value=Oe.min,xn.probesMax.value=Oe.max,xn.probesResolution.value=Oe.resolution}fa.upload(O,ln(It),xn,zt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fa.upload(O,ln(It),xn,zt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(O,"center",X.center),fe.setValue(O,"modelViewMatrix",X.modelViewMatrix),fe.setValue(O,"normalMatrix",X.normalMatrix),fe.setValue(O,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){let Oe=k.uniformsGroups;for(let dn=0,as=Oe.length;dn<as;dn++){let Vd=Oe[dn];at.update(Vd,wn),at.bind(Vd,wn)}}return wn}function ka(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function sl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,F,Z){let k=Nt.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Nt.get(w.texture).__webglTexture=F,Nt.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Z=Nt.get(w);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Z=0){Q=w,G=F,U=Z;let k=null,X=!1,Mt=!1;if(w){let yt=Nt.get(w);if(yt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(O.FRAMEBUFFER,yt.__webglFramebuffer),j.copy(w.viewport),xt.copy(w.scissor),At=w.scissorTest,ft.viewport(j),ft.scissor(xt),ft.setScissorTest(At),H=-1;return}else if(yt.__webglFramebuffer===void 0)zt.setupRenderTarget(w);else if(yt.__hasExternalTextures)zt.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qt=w.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&Nt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(w)}}let wt=w.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);let Ut=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?k=Ut[F][Z]:k=Ut[F],X=!0):w.samples>0&&zt.useMultisampledRTT(w)===!1?k=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[Z]:k=Ut,j.copy(w.viewport),xt.copy(w.scissor),At=w.scissorTest}else j.copy(Et).multiplyScalar(ht).floor(),xt.copy(Wt).multiplyScalar(ht).floor(),At=Dt;if(Z!==0&&(k=B),ft.bindFramebuffer(O.FRAMEBUFFER,k)&&ft.drawBuffers(w,k),ft.viewport(j),ft.scissor(xt),ft.setScissorTest(At),X){let yt=Nt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,Z)}else if(Mt){let yt=F;for(let wt=0;wt<w.textures.length;wt++){let Ut=Nt.get(w.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Z,yt)}}else if(w!==null&&Z!==0){let yt=Nt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,Z)}H=-1};function Rs(w){let F=Nt.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=Ht.textureFormatReadable(w.format),F.__typeReadable=Ht.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Z,k,X,Mt,Rt,yt=0){if(!(w&&w.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){ft.bindFramebuffer(O.FRAMEBUFFER,wt);try{let Ut=w.textures[yt],qt=Ut.format,ee=Ut.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Pt=Rs(Ut);if(Pt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-k&&Z>=0&&Z<=w.height-X&&O.readPixels(F,Z,k,X,lt.convert(qt),lt.convert(ee),Mt)}finally{let Ut=Q!==null?Nt.get(Q).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,F,Z,k,X,Mt,Rt,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(F>=0&&F<=w.width-k&&Z>=0&&Z<=w.height-X){ft.bindFramebuffer(O.FRAMEBUFFER,wt);let Ut=w.textures[yt],qt=Ut.format,ee=Ut.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Pt=Rs(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ne),O.bufferData(O.PIXEL_PACK_BUFFER,Mt.byteLength,O.STREAM_READ),O.readPixels(F,Z,k,X,lt.convert(qt),lt.convert(ee),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let je=Q!==null?Nt.get(Q).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,je);let Ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qp(O,Ie,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ne),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ne),O.deleteSync(Ie),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Z=0){let k=Math.pow(2,-Z),X=Math.floor(w.image.width*k),Mt=Math.floor(w.image.height*k),Rt=F!==null?F.x:0,yt=F!==null?F.y:0;zt.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Rt,yt,X,Mt),ft.unbindTexture()},this.copyTextureToTexture=function(w,F,Z=null,k=null,X=0,Mt=0){let Rt,yt,wt,Ut,qt,ee,Pt,ne,je,Ie=w.isCompressedTexture?w.mipmaps[Mt]:w.image;if(Z!==null)Rt=Z.max.x-Z.min.x,yt=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,qt=Z.min.y,ee=Z.isBox3?Z.min.z:0;else{let fe=Math.pow(2,-X);Rt=Math.floor(Ie.width*fe),yt=Math.floor(Ie.height*fe),w.isDataArrayTexture?wt=Ie.depth:w.isData3DTexture?wt=Math.floor(Ie.depth*fe):wt=1,Ut=0,qt=0,ee=0}k!==null?(Pt=k.x,ne=k.y,je=k.z):(Pt=0,ne=0,je=0);let Ce=lt.convert(F.format),Tn=lt.convert(F.type),It;F.isData3DTexture?(zt.setTexture3D(F,0),It=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(zt.setTexture2DArray(F,0),It=O.TEXTURE_2D_ARRAY):(zt.setTexture2D(F,0),It=O.TEXTURE_2D),ft.activeTexture(O.TEXTURE0),ft.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ft.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ft.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let Un=ft.getParameter(O.UNPACK_ROW_LENGTH),_e=ft.getParameter(O.UNPACK_IMAGE_HEIGHT),lr=ft.getParameter(O.UNPACK_SKIP_PIXELS),wn=ft.getParameter(O.UNPACK_SKIP_ROWS),rl=ft.getParameter(O.UNPACK_SKIP_IMAGES);ft.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),ft.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),ft.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),ft.pixelStorei(O.UNPACK_SKIP_ROWS,qt),ft.pixelStorei(O.UNPACK_SKIP_IMAGES,ee);let Ps=w.isDataArrayTexture||w.isData3DTexture,cr=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let fe=Nt.get(w),xn=Nt.get(F),Ii=Nt.get(fe.__renderTarget),Oe=Nt.get(xn.__renderTarget);ft.bindFramebuffer(O.READ_FRAMEBUFFER,Ii.__webglFramebuffer),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let dn=0;dn<wt;dn++)Ps&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(w).__webglTexture,X,ee+dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(F).__webglTexture,Mt,je+dn)),O.blitFramebuffer(Ut,qt,Ut+Rt,qt+yt,Pt,ne,Pt+Rt,ne+yt,O.DEPTH_BUFFER_BIT,O.NEAREST);ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Nt.has(w)){let fe=Nt.get(w),xn=Nt.get(F);ft.bindFramebuffer(O.READ_FRAMEBUFFER,I),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Ii=0;Ii<wt;Ii++)Ps?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fe.__webglTexture,X,ee+Ii):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,X),cr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xn.__webglTexture,Mt,je+Ii):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xn.__webglTexture,Mt),X!==0?O.blitFramebuffer(Ut,qt,Ut+Rt,qt+yt,Pt,ne,Pt+Rt,ne+yt,O.COLOR_BUFFER_BIT,O.NEAREST):cr?O.copyTexSubImage3D(It,Mt,Pt,ne,je+Ii,Ut,qt,Rt,yt):O.copyTexSubImage2D(It,Mt,Pt,ne,Ut,qt,Rt,yt);ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else cr?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(It,Mt,Pt,ne,je,Rt,yt,wt,Ce,Tn,Ie.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(It,Mt,Pt,ne,je,Rt,yt,wt,Ce,Ie.data):O.texSubImage3D(It,Mt,Pt,ne,je,Rt,yt,wt,Ce,Tn,Ie):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Mt,Pt,ne,Rt,yt,Ce,Tn,Ie.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Mt,Pt,ne,Ie.width,Ie.height,Ce,Ie.data):O.texSubImage2D(O.TEXTURE_2D,Mt,Pt,ne,Rt,yt,Ce,Tn,Ie);ft.pixelStorei(O.UNPACK_ROW_LENGTH,Un),ft.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e),ft.pixelStorei(O.UNPACK_SKIP_PIXELS,lr),ft.pixelStorei(O.UNPACK_SKIP_ROWS,wn),ft.pixelStorei(O.UNPACK_SKIP_IMAGES,rl),Mt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(It),ft.unbindTexture()},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&zt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?zt.setTextureCube(w,0):w.isData3DTexture?zt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?zt.setTexture2DArray(w,0):zt.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){G=0,U=0,Q=null,ft.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};function xs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function zm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},Df,vn,Ue,Ai=1e8,be=1/Ai,wf=Math.PI*2,SS=wf/4,bS=0,km=Math.sqrt,TS=Math.cos,wS=Math.sin,hn=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},ys=function(t){return typeof t=="number"},fu=function(t){return typeof t=="undefined"},es=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},Nf=function(){return typeof window!="undefined"},eu=function(t){return Xe(t)||hn(t)},Vm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,AS=/random\([^)]+\)/g,ES=/,\s*/g,Im=/(?:-?\.?\d|\.)+/gi,Ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uf=/[+-]=-?[.\d]+/,CS=/[^,'"\[\]\s]+/gi,RS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,ji,Af,Of,pi={},ru={},Gm,Hm=function(t){return(ru=ma(t,pi))&&In},du=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ro=function(t,e){return!e&&console.warn(t)},Wm=function(t,e){return t&&(pi[t]=e)&&ru&&(ru[t]=e)||pi},Po=function(){return 0},PS={suppressEvents:!0,isStart:!0,kill:!1},nu={suppressEvents:!0,kill:!1},IS={suppressEvents:!0},Bf={},Ys=[],Ef={},Xm,Jn={},vf={},Lm=30,iu=[],zf="",kf=function(t){var e=t[0],n,i;if(es(e)||Xe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=iu.length;i--&&!iu[i].targetTest(e););n=iu[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Wf(t[i],n)))||t.splice(i,1);return t},Zs=function(t){return t._gsap||kf(Ei(t))[0]._gsap},Vf=function(t,e,n){return(n=t[e])&&Xe(n)?t[e]():fu(n)&&t.getAttribute&&t.getAttribute(e)||n},kn=function(t,e){return(t=t.split(",")).forEach(e)||t},qe=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},Er=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},LS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},au=function(){var t=Ys.length,e=Ys.slice(0),n,i;for(Ef={},Ys.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Gf=function(t){return!!(t._initted||t._startAt||t.add)},qm=function(t,e,n,i){Ys.length&&!vn&&au(),t.render(e,n,i||!!(vn&&e<0&&Gf(t))),Ys.length&&!vn&&au()},Ym=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(CS).length<2?e:hn(t)?t.trim():t},Zm=function(t){return t},mi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},DS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ma=function(t,e){for(var n in e)t[n]=e[n];return t},Dm=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=es(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ou=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wo=function(t){var e=t.parent||ke,n=t.keyframes?DS(Pn(t.keyframes)):mi;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},NS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Jm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},pu=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Js=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},br=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},FS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cf=function(t,e,n,i){return t._startAt&&(vn?t._startAt.revert(nu):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},US=function s(t){return!t||t._ts&&s(t.parent)},Nm=function(t){return t._repeat?ga(t._tTime,t=t.duration()+t._rDelay)*t:0},ga=function(t,e){var n=Math.floor(t=ze(t/e));return t&&n===t?n-1:n},lu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},mu=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},gu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),mu(t),n._dirty||br(n,t)),t},$m=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=lu(t.rawTime(),e),(!e._dur||No(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),br(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-be}},ts=function(t,e,n,i){return e.parent&&Js(e),e._start=ze((ys(n)?n:!n&&cu(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ke?wi(t,n,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jm(t,e,"_first","_last",t._sort?"_start":0),cu(e)||(t._recent=e),i||$m(t,e),t._ts<0&&gu(t,t._tTime),t},Km=function(t,e){return(pi.ScrollTrigger||du("scrollTrigger",e))&&pi.ScrollTrigger.create(e,t)},Qm=function(t,e,n,i,r){if(Yf(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xm!==$n.frame)return Ys.push(t),t._lazy=[r,i],1},OS=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},cu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},BS=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&OS(t)&&!(!t._initted&&cu(t))||(t._ts<0||t._dp._ts<0)&&!cu(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=No(0,t._tDur,e),u=ga(l,o),t._yoyo&&u&1&&(a=1-a),u!==ga(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||vn||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&Qm(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Cf(t,e,n,!0),t._onUpdate&&!n&&di(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&di(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Js(t,1),!n&&!vn&&(di(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},zS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},_a=function(t,e,n,i){var r=t._repeat,a=ze(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ze(a*(r+1)+t._rDelay*r):a,o>0&&!i&&gu(t,t._tTime=t._tDur*o),t.parent&&mu(t),n||br(t.parent,t),t},Fm=function(t){return t instanceof Rn?br(t):_a(t,t._dur)},kS={_start:0,endTime:Po,totalDuration:Po},wi=function s(t,e,n){var i=t.labels,r=t._recent||kS,a=t.duration()>=Ai?r.endTime(!1):t._dur,o,l,c;return hn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ao=function(t,e,n){var i=ys(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;a.immediateRender=Kn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Je(e[0],a,e[r+1])},$s=function(t,e){return t||t===0?e(t):e},No=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!hn(t)||!(e=RS.exec(t))?"":e[1]},VS=function(t,e,n){return $s(n,function(i){return No(t,e,i)})},Rf=[].slice,jm=function(t,e){return t&&es(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&es(t[0]))&&!t.nodeType&&t!==ji},GS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return hn(i)&&!e||jm(i,1)?(r=n).push.apply(r,Ei(i)):n.push(i)})||n},Ei=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):hn(t)&&!n&&(Af||!xa())?Rf.call((e||Of).querySelectorAll(t),0):Pn(t)?GS(t,n):jm(t)?Rf.call(t,0):t?[t]:[]},Pf=function(t){return t=Ei(t)[0]||Ro("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ei(e,n.querySelectorAll?n:n===t?Ro("Invalid scope")||Of.createElement("div"):t)}},t0=function(t){return t.sort(function(){return .5-Math.random()})},e0=function(t){if(Xe(t))return t;var e=es(t)?t:{each:t},n=Tr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,f=i;return hn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,_){var x=(_||e).length,m=a[x],g,S,A,v,b,y,p,M,C;if(!m){if(C=e.grid==="auto"?0:(e.grid||[1,Ai])[1],!C){for(p=-Ai;p<(p=_[C++].getBoundingClientRect().left)&&C<x;);C<x&&C--}for(m=a[x]=[],g=l?Math.min(C,x)*u-.5:i%C,S=C===Ai?0:l?x*f/C-.5:i/C|0,p=0,M=Ai,y=0;y<x;y++)A=y%C-g,v=S-(y/C|0),m[y]=b=c?Math.abs(c==="y"?v:A):km(A*A+v*v),b>p&&(p=b),b<M&&(M=b);i==="random"&&t0(m),m.max=p-M,m.min=M,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(C>x?x-1:c?c==="y"?x/C:C:Math.max(C,x/C))||0)*(i==="edges"?-1:1),m.b=x<0?r-x:r,m.u=yn(e.amount||e.each)||0,n=n&&x<0?e1(n):n}return x=(m[h]-m.min)/m.max||0,ze(m.b+(n?n(x):x)*m.v)+m.u}},If=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ze(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ys(n)?0:yn(n))}},n0=function(t,e){var n=Pn(t),i,r;return!n&&es(t)&&(i=n=t.radius||Ai,t.values?(t=Ei(t.values),(r=!ys(t[0]))&&(i*=i)):t=If(t.increment)),$s(e,n?Xe(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ai,u=0,f=t.length,h,d;f--;)r?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:a,r||u===a||ys(a)?u:u+yn(a)}:If(t))},i0=function(t,e,n,i){return $s(Pn(t)?!e:n===!0?!!(n=0):!i,function(){return Pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},HS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},WS=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},XS=function(t,e,n){return r0(t,e,0,1,n)},s0=function(t,e,n){return $s(n,function(i){return t[~~e(i)]})},qS=function s(t,e,n){var i=e-t;return Pn(t)?s0(t,s(0,t.length),e):$s(n,function(r){return(i+(r-t)%i)%i+t})},YS=function s(t,e,n){var i=e-t,r=i*2;return Pn(t)?s0(t,s(0,t.length-1),e):$s(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},va=function(t){return t.replace(AS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ES);return i0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},r0=function(t,e,n,i,r){var a=e-t,o=i-n;return $s(r,function(l){return n+((l-t)/a*o||0)})},ZS=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var a=hn(t),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Pn(t)&&!Pn(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(s(t[c-1],t[c]));f--,r=function(_){_*=f;var x=Math.min(h,~~_);return u[x](_-x)},n=e}else i||(t=ma(Pn(t)?[]:{},t));if(!u){for(l in e)Xf.call(o,t,l,"get",e[l]);r=function(_){return $f(_,o)||(a?t.p:t)}}}return $s(n,r)},Um=function(t,e,n){var i=t.labels,r=Ai,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},di=function(t,e,n){var i=t.vars,r=i[e],a=Ue,o=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ys.length&&au(),o&&(Ue=o),u=l?r.apply(c,l):r.call(c),Ue=a,u},bo=function(t){return Js(t),t.scrollTrigger&&t.scrollTrigger.kill(!!vn),t.progress()<1&&di(t,"onInterrupt"),t},pa,a0=[],o0=function(t){if(t)if(t=!t.name&&t.default||t,Nf()||t.headless){var e=t.name,n=Xe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Po,render:$f,add:Xf,kill:h1,modifier:u1,rawVars:0},a={targetTest:0,get:0,getSetter:_u,aliases:{},register:0};if(xa(),t!==i){if(Jn[e])return;mi(i,mi(ou(t,r),a)),ma(i.prototype,ma(r,ou(t,a))),Jn[i.prop=e]=i,t.targetTest&&(iu.push(i),Bf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wm(e,i),t.register&&t.register(In,i,Vn)}else a0.push(t)},Re=255,To={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},yf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},l0=function(t,e,n){var i=t?ys(t)?[t>>16,t>>8&Re,t&Re]:0:To.black,r,a,o,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),To[t])i=To[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Im),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=yf(l+1/3,r,a),i[1]=yf(l,r,a),i[2]=yf(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Ff),n&&i.length<4&&(i[3]=1),i}else i=t.match(Im)||To.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Re,a=i[1]/Re,o=i[2]/Re,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(a-o)/d+(a<o?6:0):f===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},c0=function(t){var e=[],n=[],i=-1;return t.split(vs).forEach(function(r){var a=r.match(Ar)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Om=function(t,e,n){var i="",r=(t+i).match(vs),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return t;if(r=r.map(function(h){return(h=l0(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=c0(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(vs,"1").split(Ar),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(vs),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},vs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in To)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),JS=/hsl[a]?\(/,Hf=function(t){var e=t.join(" "),n;if(vs.lastIndex=0,vs.test(e))return n=JS.test(e),t[1]=Om(t[1],n),t[0]=Om(t[0],n,c0(t[1])),!0},Io,$n=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,f,h,d,_=function x(m){var g=s()-i,S=m===!0,A,v,b,y;if((g>t||g<0)&&(n+=g-e),i+=g,b=i-n,A=b-a,(A>0||S)&&(y=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=A+(A>=r?0:r-A),v=1),S||(l=c(x)),v)for(d=0;d<o.length;d++)o[d](b,h,y,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Gm&&(!Af&&Nf()&&(ji=Af=window,Of=ji.document||{},pi.gsap=In,(ji.gsapVersions||(ji.gsapVersions=[])).push(In.version),Hm(ru||ji.GreenSockGlobals||!ji.gsap&&ji||{}),a0.forEach(o0)),u=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Io=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Io=0,c=Po},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,g,S){var A=g?function(v,b,y,p){m(v,b,y,p),f.remove(A)}:m;return f.remove(m),o[S?"unshift":"push"](A),xa(),A},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},f})(),xa=function(){return!Io&&$n.wake()},oe={},$S=/^[\d.\-M][\d.\-,\s]/,KS=/["']/g,QS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(KS,"").trim():+c,i=l.substr(o+1).trim();return e},jS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},t1=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[QS(e[1])]:jS(t).split(",").map(Ym)):oe._CE&&$S.test(t)?oe._CE("",t):n},e1=function(t){return function(e){return 1-t(1-e)}},Tr=function(t,e){return t&&(Xe(t)?t:oe[t]||t1(t))||e},Cr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return kn(t,function(o){oe[o]=pi[o]=r,oe[a=o.toLowerCase()]=n;for(var l in r)oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[o+"."+l]=r[l]}),r},u0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Mf=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/wf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*wS((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:u0(o);return r=wf/r,l.config=function(c,u){return s(t,c,u)},l},Sf=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:u0(n);return i.config=function(r){return s(t,r)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Cr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Cr("Elastic",Mf("in"),Mf("out"),Mf());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Cr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Cr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Cr("Circ",function(s){return-(km(1-s*s)-1)});Cr("Sine",function(s){return s===1?1:-TS(s*SS)+1});Cr("Back",Sf("in"),Sf("out"),Sf());oe.SteppedEase=oe.steps=pi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-be;return function(o){return((i*No(0,a,o)|0)+r)*n}}};Co.ease=oe["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return zf+=s+","+s+"Params,"});var Wf=function(t,e){this.id=bS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vf,this.set=e?e.getSetter:_u},Lo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_a(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),Io||$n.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,_a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(xa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gu(this,n),!r._dp||r.parent||$m(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ts(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ga(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?lu(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(No(-Math.abs(this._delay),o,r),i!==!1),mu(this),FS(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{xa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==be,a;if(r)for(this._tTime-=be,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+be){r=!1;break}a=a._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=ze(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ts(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lu(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=IS);var i=vn;return vn=n,Gf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(wi(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-be),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-be)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Xe(n)?n:Zm,l=function(){var u=i.then;i.then=null,r&&r(),Xe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){bo(this)},s})();mi(Lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var Rn=(function(s){zm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kn(n.sortChildren),ke&&ts(n.parent||ke,xs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Km(xs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Ao(0,arguments,this),this},e.from=function(i,r,a){return Ao(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Ao(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,wo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Je(i,r,wi(this,a),1),this},e.call=function(i,r,a){return ts(this,Je.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Je(i,a,wi(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,wo(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},e.staggerFromTo=function(i,r,a,o,l,c,u,f){return o.startAt=a,wo(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,f)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ze(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,x,m,g,S,A,v,b,y,p;if(this!==ke&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,A=this._ts,g=!A,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(y=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=ze(u%m),u===l?(x=this._repeat,h=c):(b=ze(u/m),x=~~b,x&&x===b&&(h=c,x--),h>c&&(h=c)),b=ga(this._tTime,m),!o&&this._tTime&&b!==x&&this._tTime-b*m-this._dur<=0&&(b=x),y&&x&1&&(h=c-h,p=1),x!==b&&!this._lock){var M=y&&b&1,C=M===(y&&x&1);if(x<b&&(M=!M),o=M?0:u%c?c:u,this._lock=1,this.render(o||(p?0:ze(x*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1,b=x),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=zS(this,ze(o),ze(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!r&&!b&&(di(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,a),h!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=-be);break}}d=_}else{d=this._last;for(var E=i<0?i:h;d;){if(_=d._prev,(d._act||E<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,r,a||vn&&Gf(d)),h!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=E?-be:be);break}}d=_}}if(S&&!r&&(this.pause(),S.render(h>=o?0:-be)._zTime=h>=o?1:-1,this._ts))return this._start=v,mu(this),this.render(i,r,a);this._onUpdate&&!r&&di(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Js(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(di(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(ys(r)||(r=wi(this,r,i)),!(i instanceof Lo)){if(Pn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(hn(i))return this.addLabel(i,r);if(Xe(i))i=Je.delayedCall(0,i);else return this}return this!==i?ts(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ai);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Je?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return hn(i)?this.removeLabel(i):Xe(i)?this.killTweensOf(i):(i.parent===this&&pu(this,i),i===this._recent&&(this._recent=this._last),br(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=wi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Je.delayedCall(0,r||Po,a);return o.data="isPause",this._hasPause=1,ts(this,o,wi(this,i))},e.removePause=function(i){var r=this._first;for(i=wi(this,i);r;)r._start===i&&r.data==="isPause"&&Js(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qs!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Ei(i),l=this._first,c=ys(r),u;l;)l instanceof Je?LS(l._targets,o)&&(c?(!qs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=wi(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Je.to(a,mi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||be,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&_a(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,mi({startAt:{time:wi(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Um(this,wi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Um(this,wi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ze(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return br(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),br(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Ai,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ts(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=ze(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;_a(a,a===ke&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ke._ts&&(qm(ke,lu(i,ke)),Xm=$n.frame),$n.frame>=Lm){Lm+=Qn.autoSleep||120;var r=ke._first;if((!r||!r._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},t})(Lo);mi(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var n1=function(t,e,n,i,r,a,o){var l=new Vn(this._pt,t,e,0,1,Jf,null,r),c=0,u=0,f,h,d,_,x,m,g,S;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=va(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),h=n.match(xf)||[];f=xf.exec(i);)_=f[0],x=i.substring(c,f.index),d?d=(d+1)%5:x.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:m,c:_.charAt(1)==="="?Er(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=xf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Uf.test(i)||g)&&(l.e=0),this._pt=l,l},Xf=function(t,e,n,i,r,a,o,l,c,u){Xe(i)&&(i=i(r||0,t,a));var f=t[e],h=n!=="get"?n:Xe(f)?c?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Xe(f)?c?o1:f0:Zf,_;if(hn(i)&&(~i.indexOf("random(")&&(i=va(i)),i.charAt(1)==="="&&(_=Er(h,i)+(yn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Lf)return!isNaN(h*i)&&i!==""?(_=new Vn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?c1:d0,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&du(e,i),n1.call(this,t,e,h,i,d,l||Qn.stringFilter,c))},i1=function(t,e,n,i,r){if(Xe(t)&&(t=Eo(t,r,e,n,i)),!es(t)||t.style&&t.nodeType||Pn(t)||Vm(t))return hn(t)?Eo(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Eo(t[o],r,e,n,i);return a},qf=function(t,e,n,i,r,a){var o,l,c,u;if(Jn[t]&&(o=new Jn[t]).init(r,o.rawVars?e[t]:i1(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Vn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==pa))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qs,Lf,Yf=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,x=t._startAt,m=t._targets,g=t.parent,S=g&&g.data==="nested"?g.vars.targets:m,A=t._overwrite==="auto"&&!Df,v=t.timeline,b=i.easeReverse||f,y,p,M,C,E,L,D,B,I,z,G,U,Q;if(v&&(!h||!r)&&(r="none"),t._ease=Tr(r,Co.ease),t._rEase=b&&(Tr(b)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||h&&!i.stagger){if(B=m[0]?Zs(m[0]).harness:0,U=B&&i[B.prop],y=ou(i,Bf),x&&(x._zTime<0&&x.progress(1),e<0&&u&&o&&!d?x.render(-1,!0):x.revert(u&&_?nu:PS),x._lazy=0),a){if(Js(t._startAt=Je.set(m,mi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return di(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vn||!o&&!d)&&t._startAt.revert(nu),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!x){if(e&&(o=!1),M=mi({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Kn(l),immediateRender:o,stagger:0,parent:g},y),U&&(M[B.prop]=U),Js(t._startAt=Je.set(m,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vn?t._startAt.revert(nu):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Kn(l)||l&&!_,p=0;p<m.length;p++){if(E=m[p],D=E._gsap||kf(m)[p]._gsap,t._ptLookup[p]=z={},Ef[D.id]&&Ys.length&&au(),G=S===m?p:S.indexOf(E),B&&(I=new B).init(E,U||y,t,G,S)!==!1&&(t._pt=C=new Vn(t._pt,E,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){z[H]=C}),I.priority&&(L=1)),!B||U)for(M in y)Jn[M]&&(I=qf(M,y,t,G,E,S))?I.priority&&(L=1):z[M]=C=Xf.call(t,E,M,"get",y[M],G,S,0,i.stringFilter);t._op&&t._op[p]&&t.kill(E,t._op[p]),A&&t._pt&&(qs=t,ke.killTweensOf(E,z,t.globalTime(e)),Q=!t.parent,qs=0),t._pt&&l&&(Ef[D.id]=1)}L&&Kf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,h&&e<=0&&v.render(Ai,!0,!0)},s1=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Lf=1,t.vars[e]="+=0",Yf(t,o),Lf=0,l?Ro(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=qe(n)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))},r1=function(t,e){var n=t[0]?Zs(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ma({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},a1=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Pn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Eo=function(t,e,n,i,r){return Xe(t)?t.call(e,n,i,r):hn(t)&&~t.indexOf("random(")?va(t):t},uu=zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",h0={};kn(uu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return h0[s]=1});uu=uu.split(",");var Je=(function(s){zm(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:wo(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=i.parent||ke,S=(Pn(n)||Vm(n)?ys(n[0]):"length"in i)?[n]:Ei(n),A,v,b,y,p,M,C,E;if(o._targets=S.length?kf(S):Ro("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||eu(c)||eu(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Rn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:S}),A.kill(),A.parent=A._dp=xs(o),A._start=0,h||eu(c)||eu(u)){if(y=S.length,C=h&&e0(h),es(h))for(p in h)~uu.indexOf(p)&&(E||(E={}),E[p]=h[p]);for(v=0;v<y;v++)b=ou(i,h0),b.stagger=0,L&&(b.easeReverse=L),E&&ma(b,E),M=S[v],b.duration=+Eo(c,xs(o),v,M,S),b.delay=(+Eo(u,xs(o),v,M,S)||0)-o._delay,!h&&y===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),A.to(M,b,C?C(v,M,S):0),A._ease=oe.none;A.duration()?c=u=0:o.timeline=0}else if(_){wo(mi(A.vars.defaults,{ease:"none"})),A._ease=Tr(_.ease||i.ease||"none");var D=0,B,I,z;if(Pn(_))_.forEach(function(G){return A.to(S,G,">")}),A.duration();else{b={};for(p in _)p==="ease"||p==="easeEach"||a1(p,_[p],b,_.easeEach);for(p in b)for(B=b[p].sort(function(G,U){return G.t-U.t}),D=0,v=0;v<B.length;v++)I=B[v],z={ease:I.e,duration:(I.t-(v?B[v-1].t:0))/100*c},z[p]=I.v,A.to(S,z,D),D+=z.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return d===!0&&!Df&&(qs=xs(o),ke.killTweensOf(S),qs=0),ts(g,xs(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===ze(g._time)&&Kn(f)&&US(xs(o))&&g.data!=="nested")&&(o._tTime=-be,o.render(Math.max(0,-u)||0)),m&&Km(xs(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-be&&!u?l:i<be?0:i,h,d,_,x,m,g,S,A;if(!c)BS(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,A=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,r,a);if(h=ze(f%x),f===l?(_=this._repeat,h=c):(m=ze(f/x),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),g=this._yoyo&&_&1,g&&(h=c-h),m=ga(this._tTime,x),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&h!==x&&this._initted&&(this._lock=a=1,this.render(ze(x*_),!0).invalidate()._lock=0)}if(!this._initted){if(Qm(this,u?i:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=h<o;if(v!==this._inv){var b=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!m&&(di(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Cf(this,i,r,a),di(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&di(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Cf(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Js(this,1),!r&&!(u&&!o)&&(f||o||g)&&(di(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){Io||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yf(this,c),u=this._ease(c/this._dur),s1(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(gu(this,0),this.parent||Jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,qs&&qs.vars.overwrite!==!0)._first||bo(this),this.parent&&a!==this.timeline.totalDuration()&&_a(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ei(i):o,c=this._ptLookup,u=this._pt,f,h,d,_,x,m,g;if((!r||r==="all")&&NS(o,l))return r==="all"&&(this._pt=0),bo(this);for(f=this._op=this._op||[],r!=="all"&&(hn(r)&&(x={},kn(r,function(S){return x[S]=1}),r=x),r=r1(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],r==="all"?(f[g]=r,_=h,d={}):(d=f[g]=f[g]||{},_=r);for(x in _)m=h&&h[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&pu(this,m,"_pt"),delete h[x]),d!=="all"&&(d[x]=1)}return this._initted&&!this._pt&&u&&bo(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ao(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Ao(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ke.killTweensOf(i,r,a)},t})(Lo);mi(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(s){Je[s]=function(){var t=new Rn,e=Rf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Zf=function(t,e,n){return t[e]=n},f0=function(t,e,n){return t[e](n)},o1=function(t,e,n,i){return t[e](i.fp,n)},l1=function(t,e,n){return t.setAttribute(e,n)},_u=function(t,e){return Xe(t[e])?f0:fu(t[e])&&t.setAttribute?l1:Zf},d0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},c1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Jf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},$f=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},u1=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},h1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pu(this,e,"_pt"):e.dep||(n=1),e=i;return!n},f1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Kf=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Vn=(function(){function s(e,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||d0,this.d=l||this,this.set=c||Zf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=f1,this.m=n,this.mt=r,this.tween=i},s})();kn(zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Bf[s]=1});pi.TweenMax=pi.TweenLite=Je;pi.TimelineLite=pi.TimelineMax=Rn;ke=new Rn({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Hf;var wr=[],su={},d1=[],Bm=0,p1=0,bf=function(t){return(su[t]||d1).map(function(e){return e()})},Do=function(){var t=Date.now(),e=[];t-Bm>2&&(bf("matchMediaInit"),wr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=ji.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),bf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bm=t,bf("matchMedia"))},p0=(function(){function s(e,n){this.selector=n&&Pf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=p1++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Xe(n)&&(r=i,i=n,n=Xe);var a=this,o=function(){var c=Ue,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Pf(r)),Ue=a,f=i.apply(a,arguments),Xe(f)&&a._r.push(f),Ue=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Xe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ue;Ue=null,n(this),Ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Je&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=wr.length;a--;)wr[a].id===this.id&&wr.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Do):o.removeEventListener("change",Do)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),m1=(function(){function s(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){es(n)||(n={matches:n});var a=new p0(0,r||this.scope),o=a.conditions={},l,c,u;Ue&&!a.selector&&(a.selector=Ue.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ji.matchMedia(n[c]),l&&(wr.indexOf(a)<0&&wr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Do):l.addEventListener("change",Do),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),hu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return o0(i)})},timeline:function(t){return new Rn(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,i){hn(t)&&(t=Ei(t)[0]);var r=Zs(t||{}).get,a=n?Zm:Ym;return n==="native"&&(n=""),t&&(e?a((Jn[e]&&Jn[e].get||r)(t,e,n,i)):function(o,l,c){return a((Jn[o]&&Jn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Ei(t),t.length>1){var i=t.map(function(u){return In.quickSetter(u,e,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}t=t[0]||{};var a=Jn[e],o=Zs(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;pa._pt=0,f.init(t,n?u+n:u,pa,0,[t]),f.render(1,f),pa._pt&&$f(1,pa)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,r=In.to(t,mi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Tr(t.ease,Co.ease)),Dm(Co,t||{})},config:function(t){return Dm(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jn[o]&&!pi[o]&&Ro(e+" effect requires "+o+" plugin.")}),vf[e]=function(o,l,c){return n(Ei(o),mi(l||{},r),c)},a&&(Rn.prototype[e]=function(o,l,c){return this.add(vf[e](o,es(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Tr(e)},parseEase:function(t,e){return arguments.length?Tr(t,e):oe},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Rn(t),i,r;for(n.smoothChildTiming=Kn(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,i=ke._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Je&&i.vars.onComplete===i._targets[0]))&&ts(n,i,i._start-i._delay),i=r;return ts(ke,n,0),n},context:function(t,e){return t?new p0(t,e):Ue},matchMedia:function(t){return new m1(t)},matchMediaRefresh:function(){return wr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Do()},addEventListener:function(t,e){var n=su[t]||(su[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=su[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:qS,wrapYoyo:YS,distribute:e0,random:i0,snap:n0,normalize:XS,getUnit:yn,clamp:VS,splitColor:l0,toArray:Ei,selector:Pf,mapRange:r0,pipe:HS,unitize:WS,interpolate:ZS,shuffle:t0},install:Hm,effects:vf,ticker:$n,updateRoot:Rn.updateRoot,plugins:Jn,globalTimeline:ke,core:{PropTween:Vn,globals:Wm,Tween:Je,Timeline:Rn,Animation:Lo,getCache:Zs,_removeLinkedListItem:pu,reverting:function(){return vn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return Df=t}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return hu[s]=Je[s]});$n.add(Rn.updateRoot);pa=hu.to({},{duration:0});var g1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_1=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=g1(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Tf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(hn(r)&&(l={},kn(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}_1(o,r)}}}},In=hu.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Tf("roundProps",If),Tf("modifiers"),Tf("snap",n0))||hu;Je.version=Rn.version=In.version="3.15.1";Gm=1;Nf()&&xa();var x1=oe.Power0,v1=oe.Power1,y1=oe.Power2,M1=oe.Power3,S1=oe.Power4,b1=oe.Linear,T1=oe.Quad,w1=oe.Cubic,A1=oe.Quart,E1=oe.Quint,C1=oe.Strong,R1=oe.Elastic,P1=oe.Back,I1=oe.SteppedEase,L1=oe.Bounce,D1=oe.Sine,N1=oe.Expo,F1=oe.Circ;var m0,Ks,Ma,id,Lr,U1,g0,sd,O1=function(){return typeof window!="undefined"},Ss={},Ir=180/Math.PI,Sa=Math.PI/180,ya=Math.atan2,_0=1e8,rd=/([A-Z])/g,B1=/(left|right|width|margin|padding|x)/i,z1=/[\s,\(]\S/,ns={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},k1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},V1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},G1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},H1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},w0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},A0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},W1=function(t,e,n){return t.style[e]=n},X1=function(t,e,n){return t.style.setProperty(e,n)},q1=function(t,e,n){return t._gsap[e]=n},Y1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Z1=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},J1=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Ve="transform",jn=Ve+"Origin",$1=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Ss&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ns[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ms(i,o)}):this.tfm[t]=a.x?a[t]:Ms(i,t),t===jn&&(this.tfm.zOrigin=a.zOrigin);else return ns.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Ve)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=Ve}(r||e)&&this.props.push(t,e,r[t])},E0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},K1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(rd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=sd(),(!r||!r.isStart)&&!n[Ve]&&(E0(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},C0=function(t,e){var n={target:t,props:[],revert:K1,save:$1};return t._gsap||In.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},R0,td=function(t,e){var n=Ks.createElementNS?Ks.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ks.createElement(t);return n&&n.style?n:Ks.createElement(t)},gi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(rd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ba(e)||e,1)||""},x0="O,Moz,ms,Ms,Webkit".split(","),ba=function(t,e,n){var i=e||Lr,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(x0[a]+t in r););return a<0?null:(a===3?"ms":a>=0?x0[a]:"")+t},ed=function(){O1()&&window.document&&(m0=window,Ks=m0.document,Ma=Ks.documentElement,Lr=td("div")||{style:{}},U1=td("div"),Ve=ba(Ve),jn=Ve+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",R0=!!ba("perspective"),sd=In.core.reverting,id=1)},v0=function(t){var e=t.ownerSVGElement,n=td("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ma.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ma.removeChild(n),r},y0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},P0=function(t){var e,n;try{e=t.getBBox()}catch{e=v0(t),n=1}return e&&(e.width||e.height)||n||(e=v0(t)),e&&!e.width&&!e.x&&!e.y?{x:+y0(t,["x","cx","x1"])||0,y:+y0(t,["y","cy","y1"])||0,width:0,height:0}:e},I0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&P0(t))},js=function(t,e){if(e){var n=t.style,i;e in Ss&&e!==jn&&(e=Ve),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(rd,"-$1").toLowerCase())):n.removeAttribute(e)}},Qs=function(t,e,n,i,r,a){var o=new Vn(t._pt,e,n,0,1,a?A0:w0);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},M0={deg:1,rad:1,turn:1},Q1={grid:1,flex:1},tr=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Lr.style,l=B1.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,x,m,g;if(i===a||!r||M0[i]||M0[a])return r;if(a!=="px"&&!h&&(r=s(t,e,n,"px")),g=t.getCTM&&I0(t),(d||a==="%")&&(Ss[e]||~e.indexOf("adius")))return _=g?t.getBBox()[l?"width":"height"]:t[u],qe(d?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(h?a:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Ks||!x.appendChild)&&(x=Ks.body),m=x._gsap,m&&d&&m.width&&l&&m.time===$n.time&&!m.uncache)return qe(r/m.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+i,_=t[u],S?t.style[e]=S:js(t,e)}else(d||a==="%")&&!Q1[gi(x,"display")]&&(o.position=gi(t,"position")),x===t&&(o.position="static"),x.appendChild(Lr),_=Lr[u],x.removeChild(Lr),o.position="absolute";return l&&d&&(m=Zs(x),m.time=$n.time,m.width=x[u]),qe(h?_*r/f:_&&r?f/_*r:0)},Ms=function(t,e,n,i){var r;return id||ed(),e in ns&&e!=="transform"&&(e=ns[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ss[e]&&e!=="transform"?(r=Oo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:vu(gi(t,jn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=xu[e]&&xu[e](t,e,n)||gi(t,e)||Vf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?tr(t,e,r,n)+n:r},j1=function(t,e,n,i){if(!n||n==="none"){var r=ba(e,t,1),a=r&&gi(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=gi(t,"borderTopColor"))}var o=new Vn(this._pt,t.style,e,0,1,Jf),l=0,c=0,u,f,h,d,_,x,m,g,S,A,v,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=gi(t,e)||i,x?t.style[e]=x:js(t,e)),u=[n,i],Hf(u),n=u[0],i=u[1],h=n.match(Ar)||[],b=i.match(Ar)||[],b.length){for(;f=Ar.exec(i);)m=f[0],S=i.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(x=h[c++]||"")&&(d=parseFloat(x)||0,v=x.substr((d+"").length),m.charAt(1)==="="&&(m=Er(d,m)+v),g=parseFloat(m),A=m.substr((g+"").length),l=Ar.lastIndex-A.length,A||(A=A||Qn.units[e]||v,l===i.length&&(i+=A,o.e+=A)),v!==A&&(d=tr(t,e,x,A)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:g-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?A0:w0;return Uf.test(i)&&(o.e=0),this._pt=o,o},S0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=S0[n]||n,e[1]=S0[i]||i,e.join(" ")},eb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ss[o]&&(l=1,o=o==="transformOrigin"?jn:Ve),js(n,o);l&&(js(n,Ve),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Oo(n,1),a.uncache=1,E0(i)))}},xu={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Vn(t._pt,e,n,0,0,eb);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Uo=[1,0,0,1,0,0],L0={},D0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},b0=function(t){var e=gi(t,Ve);return D0(e)?Uo:e.substr(7).match(Ff).map(qe)},ad=function(t,e){var n=t._gsap||Zs(t),i=t.style,r=b0(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Uo:r):(r===Uo&&!t.offsetParent&&t!==Ma&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ma.appendChild(t)),r=b0(t),l?i.display=l:js(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ma.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},nd=function(t,e,n,i,r,a){var o=t._gsap,l=r||ad(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],x=l[2],m=l[3],g=l[4],S=l[5],A=e.split(" "),v=parseFloat(A[0])||0,b=parseFloat(A[1])||0,y,p,M,C;n?l!==Uo&&(p=d*m-_*x)&&(M=v*(m/p)+b*(-x/p)+(x*S-m*g)/p,C=v*(-_/p)+b*(d/p)-(d*S-_*g)/p,v=M,b=C):(y=P0(t),v=y.x+(~A[0].indexOf("%")?v/100*y.width:v),b=y.y+(~(A[1]||A[0]).indexOf("%")?b/100*y.height:b)),i||i!==!1&&o.smooth?(g=v-c,S=b-u,o.xOffset=f+(g*d+S*x)-g,o.yOffset=h+(g*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[jn]="0px 0px",a&&(Qs(a,o,"xOrigin",c,v),Qs(a,o,"yOrigin",u,b),Qs(a,o,"xOffset",f,o.xOffset),Qs(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},Oo=function(t,e){var n=t._gsap||new Wf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=gi(t,jn)||"0",u,f,h,d,_,x,m,g,S,A,v,b,y,p,M,C,E,L,D,B,I,z,G,U,Q,H,P,j,xt,At,q,ot;return u=f=h=x=m=g=S=A=v=0,d=_=1,n.svg=!!(t.getCTM&&I0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ve]!=="none"?l[Ve]:"")),i.scale=i.rotate=i.translate="none"),p=ad(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),nd(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,p)),b=n.xOrigin||0,y=n.yOrigin||0,p!==Uo&&(L=p[0],D=p[1],B=p[2],I=p[3],u=z=p[4],f=G=p[5],p.length===6?(d=Math.sqrt(L*L+D*D),_=Math.sqrt(I*I+B*B),x=L||D?ya(D,L)*Ir:0,S=B||I?ya(B,I)*Ir+x:0,S&&(_*=Math.abs(Math.cos(S*Sa))),n.svg&&(u-=b-(b*L+y*B),f-=y-(b*D+y*I))):(ot=p[6],At=p[7],P=p[8],j=p[9],xt=p[10],q=p[11],u=p[12],f=p[13],h=p[14],M=ya(ot,xt),m=M*Ir,M&&(C=Math.cos(-M),E=Math.sin(-M),U=z*C+P*E,Q=G*C+j*E,H=ot*C+xt*E,P=z*-E+P*C,j=G*-E+j*C,xt=ot*-E+xt*C,q=At*-E+q*C,z=U,G=Q,ot=H),M=ya(-B,xt),g=M*Ir,M&&(C=Math.cos(-M),E=Math.sin(-M),U=L*C-P*E,Q=D*C-j*E,H=B*C-xt*E,q=I*E+q*C,L=U,D=Q,B=H),M=ya(D,L),x=M*Ir,M&&(C=Math.cos(M),E=Math.sin(M),U=L*C+D*E,Q=z*C+G*E,D=D*C-L*E,G=G*C-z*E,L=U,z=Q),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),d=qe(Math.sqrt(L*L+D*D+B*B)),_=qe(Math.sqrt(G*G+ot*ot)),M=ya(z,G),S=Math.abs(M)>2e-4?M*Ir:0,v=q?1/(q<0?-q:q):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!D0(gi(t,Ve)),U&&t.setAttribute("transform",U))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=x<=0?180:-180,x+=x<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=qe(d),n.scaleY=qe(_),n.rotation=qe(x)+o,n.rotationX=qe(m)+o,n.rotationY=qe(g)+o,n.skewX=S+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[jn]=vu(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?ib:R0?N0:nb,n.uncache=0,n},vu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Qf=function(t,e,n){var i=yn(e);return qe(parseFloat(e)+parseFloat(tr(t,"x",n+"px",i)))+i},nb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,N0(t,e)},Rr="0deg",Fo="0px",Pr=") ",N0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,x=n.scaleY,m=n.transformPerspective,g=n.force3D,S=n.target,A=n.zOrigin,v="",b=g==="auto"&&t&&t!==1||g===!0;if(A&&(f!==Rr||u!==Rr)){var y=parseFloat(u)*Sa,p=Math.sin(y),M=Math.cos(y),C;y=parseFloat(f)*Sa,C=Math.cos(y),a=Qf(S,a,p*C*-A),o=Qf(S,o,-Math.sin(y)*-A),l=Qf(S,l,M*C*-A+A)}m!==Fo&&(v+="perspective("+m+Pr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||a!==Fo||o!==Fo||l!==Fo)&&(v+=l!==Fo||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Pr),c!==Rr&&(v+="rotate("+c+Pr),u!==Rr&&(v+="rotateY("+u+Pr),f!==Rr&&(v+="rotateX("+f+Pr),(h!==Rr||d!==Rr)&&(v+="skew("+h+", "+d+Pr),(_!==1||x!==1)&&(v+="scale("+_+", "+x+Pr),S.style[Ve]=v||"translate(0, 0)"},ib=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,x=n.yOrigin,m=n.xOffset,g=n.yOffset,S=n.forceCSS,A=parseFloat(a),v=parseFloat(o),b,y,p,M,C;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Sa,c*=Sa,b=Math.cos(l)*f,y=Math.sin(l)*f,p=Math.sin(l-c)*-h,M=Math.cos(l-c)*h,c&&(u*=Sa,C=Math.tan(c-u),C=Math.sqrt(1+C*C),p*=C,M*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),b*=C,y*=C)),b=qe(b),y=qe(y),p=qe(p),M=qe(M)):(b=f,M=h,y=p=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=tr(d,"x",a,"px"),v=tr(d,"y",o,"px")),(_||x||m||g)&&(A=qe(A+_-(_*b+x*p)+m),v=qe(v+x-(_*y+x*M)+g)),(i||r)&&(C=d.getBBox(),A=qe(A+i/100*C.width),v=qe(v+r/100*C.height)),C="matrix("+b+","+y+","+p+","+M+","+A+","+v+")",d.setAttribute("transform",C),S&&(d.style[Ve]=C)},sb=function(t,e,n,i,r){var a=360,o=hn(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ir:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*_0)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*_0)%a-~~(c/a)*a)),t._pt=h=new Vn(t._pt,e,n,i,c,k1),h.e=u,h.u="deg",t._props.push(n),h},T0=function(t,e){for(var n in e)t[n]=e[n];return t},rb=function(t,e,n){var i=T0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ve]=e,o=Oo(n,1),js(n,Ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ve],a[Ve]=e,o=Oo(n,1),a[Ve]=c);for(l in Ss)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=yn(c),_=yn(u),f=d!==_?tr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Vn(t._pt,o,l,f,h-f,jf),t._pt.u=_||0,t._props.push(l));T0(o,i)};kn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});xu[t>1?"border"+s:s]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return Ms(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,x){return d[_]=h[x]=h[x]||h[(x-1)/2|0]}),o.init(l,d,f)}});var od={name:"css",register:ed,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,_,x,m,g,S,A,v,b,y,p,M,C;id||ed(),this.styles=this.styles||C0(t),M=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(u=e[x],!(Jn[x]&&qf(x,e,n,i,t,r)))){if(d=typeof u,_=xu[x],d==="function"&&(u=u.call(n,i,t,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=va(u)),_)_(this,t,x,u,n)&&(p=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),u+="",vs.lastIndex=0,vs.test(c)||(m=yn(c),g=yn(u),g?m!==g&&(c=tr(t,x,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,i,r,0,0,x),a.push(x),M.push(x,0,o[x]);else if(d!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,r):l[x],hn(c)&&~c.indexOf("random(")&&(c=va(c)),yn(c+"")||c==="auto"||(c+=Qn.units[x]||yn(Ms(t,x))||""),(c+"").charAt(1)==="="&&(c=Ms(t,x))):c=Ms(t,x),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),x in ns&&(x==="autoAlpha"&&(h===1&&Ms(t,"visibility")==="hidden"&&f&&(h=0),M.push("visibility",0,o.visibility),Qs(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=ns[x],~x.indexOf(",")&&(x=x.split(",")[0]))),A=x in Ss,A){if(this.styles.save(x),C=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=gi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=u,u=gi(t,"perspective"),E?t.style.perspective=E:js(t,"perspective")}f=parseFloat(u)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||Oo(t,e.parseTransform),y=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new Vn(this._pt,o,Ve,0,1,b.renderTransform,b,0,-1),v.dep=1),x==="scale")this._pt=new Vn(this._pt,b,"scaleY",b.scaleY,(S?Er(b.scaleY,S+f):f)-b.scaleY||0,jf),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(jn,0,o[jn]),u=tb(u),b.svg?nd(t,u,0,y,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&Qs(this,b,"zOrigin",b.zOrigin,g),Qs(this,o,x,vu(c),vu(u)));continue}else if(x==="svgOrigin"){nd(t,u,1,y,0,this);continue}else if(x in L0){sb(this,b,x,h,S?Er(h,S+u):u);continue}else if(x==="smoothOrigin"){Qs(this,b,"smooth",b.smooth,u);continue}else if(x==="force3D"){b[x]=u;continue}else if(x==="transform"){rb(this,u,t);continue}}else x in o||(x=ba(x)||x);if(A||(f||f===0)&&(h||h===0)&&!z1.test(u)&&x in o)m=(c+"").substr((h+"").length),f||(f=0),g=yn(u)||(x in Qn.units?Qn.units[x]:m),m!==g&&(h=tr(t,x,c,g)),this._pt=new Vn(this._pt,A?b:o,x,h,(S?Er(h,S+f):f)-h,!A&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?H1:jf),this._pt.u=g||0,A&&C!==u?(this._pt.b=c,this._pt.e=C,this._pt.r=G1):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=V1);else if(x in o)j1.call(this,t,x,c,S?S+u:u);else if(x in t)this.add(t,x,c||t[x],S?S+u:u,i,r);else if(x!=="parseTransform"){du(x,u);continue}A||(x in o?M.push(x,0,o[x]):typeof t[x]=="function"?M.push(x,2,t[x]()):M.push(x,1,c||t[x])),a.push(x)}}p&&Kf(this)},render:function(t,e){if(e.tween._time||!sd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ms,aliases:ns,getSetter:function(t,e,n){var i=ns[e];return i&&i.indexOf(",")<0&&(e=i),e in Ss&&e!==jn&&(t._gsap.x||Ms(t,"x"))?n&&g0===n?e==="scale"?Y1:q1:(g0=n||{})&&(e==="scale"?Z1:J1):t.style&&!fu(t.style[e])?W1:~e.indexOf("-")?X1:_u(t,e)},core:{_removeProperty:js,_getMatrix:ad}};In.utils.checkPrefix=ba;In.core.getStyleSaver=C0;(function(s,t,e,n){var i=kn(s+","+t+","+e,function(r){Ss[r]=1});kn(t,function(r){Qn.units[r]="deg",L0[r]=1}),ns[i[13]]=s+","+t,kn(n,function(r){var a=r.split(":");ns[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Qn.units[s]="px"});In.registerPlugin(od);var ti=In.registerPlugin(od)||In,zE=ti.core.Tween;function F0(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function ab(s,t,e){return t&&F0(s.prototype,t),e&&F0(s,e),s}var Mn,Su,ob,ei,er,nr,wa,O0,Dr,Aa,B0,bs,Vi,z0,k0=function(){return Mn||typeof window!="undefined"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},V0=1,Ta=[],Jt=[],Gi=[],zo=Date.now,ld=function(t,e){return e},lb=function(){var t=Aa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Jt),i.push.apply(i,Gi),Jt=n,Gi=i,ld=function(a,o){return e[a](o)}},ws=function(t,e){return~Gi.indexOf(t)&&Gi[Gi.indexOf(t)+1][e]},ko=function(t){return!!~B0.indexOf(t)},Hn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},yu="scrollLeft",Mu="scrollTop",cd=function(){return bs&&bs.isPressed||Jt.cache++},bu=function(t,e){var n=function i(r){if(r||r===0){V0&&ei.history.scrollRestoration!=="manual"&&(ei.history.scrollRestoration="manual");var a=bs&&bs.isPressed;r=i.v=Math.round(r)||(bs&&bs.iOS?1:0),t(r),i.cacheID=Jt.cache,a&&ld("ss",r)}else(e||Jt.cache!==i.cacheID||ld("ref"))&&(i.cacheID=Jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Ln={s:yu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bu(function(s){return arguments.length?ei.scrollTo(s,nn.sc()):ei.pageXOffset||er[yu]||nr[yu]||wa[yu]||0})},nn={s:Mu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:bu(function(s){return arguments.length?ei.scrollTo(Ln.sc(),s):ei.pageYOffset||er[Mu]||nr[Mu]||wa[Mu]||0})},Wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Mn.utils.toArray)(t)[0]||(typeof t=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},cb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ts=function(t,e){var n=e.s,i=e.sc;ko(t)&&(t=er.scrollingElement||nr);var r=Jt.indexOf(t),a=i===nn.sc?1:2;!~r&&(r=Jt.push(t)-1),Jt[r+a]||Hn(t,"scroll",cd);var o=Jt[r+a],l=o||(Jt[r+a]=bu(ws(t,n),!0)||(ko(t)?i:bu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Mn.getProperty(t,"scrollBehavior")==="smooth"),l},Tu=function(t,e,n){var i=t,r=t,a=zo(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,x){var m=zo();x||m-a>l?(r=i,i=_,o=a,a=m):n?i+=_:i=r+(_-r)/(m-o)*(a-o)},f=function(){r=i=n?0:i,o=a=0},h=function(_){var x=o,m=r,g=zo();return(_||_===0)&&_!==i&&u(_),a===o||g-o>c?0:(i+(n?m:-m))/((n?g:a)-x)*1e3};return{update:u,reset:f,getVelocity:h}},Bo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},U0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},G0=function(){Aa=Mn.core.globals().ScrollTrigger,Aa&&Aa.core&&lb()},H0=function(t){return Mn=t||k0(),!Su&&Mn&&typeof document!="undefined"&&document.body&&(ei=window,er=document,nr=er.documentElement,wa=er.body,B0=[ei,er,nr,wa],ob=Mn.utils.clamp,z0=Mn.core.context||function(){},Dr="onpointerenter"in wa?"pointer":"mouse",O0=Ye.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vi=Ye.eventTypes=("ontouchstart"in nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return V0=0},500),Su=1),Aa||G0(),Su};Ln.op=nn;Jt.cache=0;var Ye=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Su||H0(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),Aa||G0();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,x=n.event,m=n.onDragStart,g=n.onDragEnd,S=n.onDrag,A=n.onPress,v=n.onRelease,b=n.onRight,y=n.onLeft,p=n.onUp,M=n.onDown,C=n.onChangeX,E=n.onChangeY,L=n.onChange,D=n.onToggleX,B=n.onToggleY,I=n.onHover,z=n.onHoverEnd,G=n.onMove,U=n.ignoreCheck,Q=n.isNormalizer,H=n.onGestureStart,P=n.onGestureEnd,j=n.onWheel,xt=n.onEnable,At=n.onDisable,q=n.onClick,ot=n.scrollSpeed,_t=n.capture,St=n.allowClicks,ht=n.lockAxis,Ft=n.onLockAxis;this.target=o=Wn(o)||nr,this.vars=n,d&&(d=Mn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,ot=ot||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(wa).lineHeight)||22);var Me,Et,Wt,Dt,Ot,de,ue,J=this,jt=0,$e=0,we=n.passive||!u&&n.passive!==!1,se=Ts(o,Ln),Ge=Ts(o,nn),Ze=se(),O=Ge(),ge=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Vi[0]==="pointerdown",he=ko(o),Ht=o.ownerDocument||er,ft=[0,0,0],pe=[0,0,0],Nt=0,zt=function(){return Nt=zo()},R=function(mt,st){return(J.event=mt)&&d&&cb(mt.target,d)||st&&ge&&mt.pointerType!=="touch"||U&&U(mt,st)},T=function(){J._vx.reset(),J._vy.reset(),Et.pause(),f&&f(J)},V=function(){var mt=J.deltaX=U0(ft),st=J.deltaY=U0(pe),et=Math.abs(mt)>=i,vt=Math.abs(st)>=i;L&&(et||vt)&&L(J,mt,st,ft,pe),et&&(b&&J.deltaX>0&&b(J),y&&J.deltaX<0&&y(J),C&&C(J),D&&J.deltaX<0!=jt<0&&D(J),jt=J.deltaX,ft[0]=ft[1]=ft[2]=0),vt&&(M&&J.deltaY>0&&M(J),p&&J.deltaY<0&&p(J),E&&E(J),B&&J.deltaY<0!=$e<0&&B(J),$e=J.deltaY,pe[0]=pe[1]=pe[2]=0),(Dt||Wt)&&(G&&G(J),Wt&&(m&&Wt===1&&m(J),S&&S(J),Wt=0),Dt=!1),de&&!(de=!1)&&Ft&&Ft(J),Ot&&(j(J),Ot=!1),Me=0},rt=function(mt,st,et){ft[et]+=mt,pe[et]+=st,J._vx.update(mt),J._vy.update(st),c?Me||(Me=requestAnimationFrame(V)):V()},it=function(mt,st){ht&&!ue&&(J.axis=ue=Math.abs(mt)>Math.abs(st)?"x":"y",de=!0),ue!=="y"&&(ft[2]+=mt,J._vx.update(mt,!0)),ue!=="x"&&(pe[2]+=st,J._vy.update(st,!0)),c?Me||(Me=requestAnimationFrame(V)):V()},ut=function(mt){if(!R(mt,1)){mt=Bo(mt,u);var st=mt.clientX,et=mt.clientY,vt=st-J.x,nt=et-J.y,Tt=J.isDragging;J.x=st,J.y=et,(Tt||(vt||nt)&&(Math.abs(J.startX-st)>=r||Math.abs(J.startY-et)>=r))&&(Wt||(Wt=Tt?2:1),Tt||(J.isDragging=!0),it(vt,nt))}},gt=J.onPress=function(at){R(at,1)||at&&at.button||(J.axis=ue=null,Et.pause(),J.isPressed=!0,at=Bo(at),jt=$e=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),Hn(Q?o:Ht,Vi[1],ut,we,!0),J.deltaX=J.deltaY=0,A&&A(J))},W=J.onRelease=function(at){if(!R(at,1)){Gn(Q?o:Ht,Vi[1],ut,!0);var mt=!isNaN(J.y-J.startY),st=J.isDragging,et=st&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),vt=Bo(at);!et&&mt&&(J._vx.reset(),J._vy.reset(),u&&St&&Mn.delayedCall(.08,function(){if(zo()-Nt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Ht.createEvent){var nt=Ht.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,ei,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,f&&st&&!Q&&Et.restart(!0),Wt&&V(),g&&st&&g(J),v&&v(J,et)}},tt=function(mt){return mt.touches&&mt.touches.length>1&&(J.isGesturing=!0)&&H(mt,J.isDragging)},ct=function(){return(J.isGesturing=!1)||P(J)},N=function(mt){if(!R(mt)){var st=se(),et=Ge();rt((st-Ze)*ot,(et-O)*ot,1),Ze=st,O=et,f&&Et.restart(!0)}},K=function(mt){if(!R(mt)){mt=Bo(mt,u),j&&(Ot=!0);var st=(mt.deltaMode===1?l:mt.deltaMode===2?ei.innerHeight:1)*_;rt(mt.deltaX*st,mt.deltaY*st,0),f&&!Q&&Et.restart(!0)}},$=function(mt){if(!R(mt)){var st=mt.clientX,et=mt.clientY,vt=st-J.x,nt=et-J.y;J.x=st,J.y=et,Dt=!0,f&&Et.restart(!0),(vt||nt)&&it(vt,nt)}},dt=function(mt){J.event=mt,I(J)},lt=function(mt){J.event=mt,z(J)},pt=function(mt){return R(mt)||Bo(mt,u)&&q(J)};Et=J._dc=Mn.delayedCall(h||.25,T).pause(),J.deltaX=J.deltaY=0,J._vx=Tu(0,50,!0),J._vy=Tu(0,50,!0),J.scrollX=se,J.scrollY=Ge,J.isDragging=J.isGesturing=J.isPressed=!1,z0(this),J.enable=function(at){return J.isEnabled||(Hn(he?Ht:o,"scroll",cd),a.indexOf("scroll")>=0&&Hn(he?Ht:o,"scroll",N,we,_t),a.indexOf("wheel")>=0&&Hn(o,"wheel",K,we,_t),(a.indexOf("touch")>=0&&O0||a.indexOf("pointer")>=0)&&(Hn(o,Vi[0],gt,we,_t),Hn(Ht,Vi[2],W),Hn(Ht,Vi[3],W),St&&Hn(o,"click",zt,!0,!0),q&&Hn(o,"click",pt),H&&Hn(Ht,"gesturestart",tt),P&&Hn(Ht,"gestureend",ct),I&&Hn(o,Dr+"enter",dt),z&&Hn(o,Dr+"leave",lt),G&&Hn(o,Dr+"move",$)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Dt=Wt=!1,J._vx.reset(),J._vy.reset(),Ze=se(),O=Ge(),at&&at.type&&gt(at),xt&&xt(J)),J},J.disable=function(){J.isEnabled&&(Ta.filter(function(at){return at!==J&&ko(at.target)}).length||Gn(he?Ht:o,"scroll",cd),J.isPressed&&(J._vx.reset(),J._vy.reset(),Gn(Q?o:Ht,Vi[1],ut,!0)),Gn(he?Ht:o,"scroll",N,_t),Gn(o,"wheel",K,_t),Gn(o,Vi[0],gt,_t),Gn(Ht,Vi[2],W),Gn(Ht,Vi[3],W),Gn(o,"click",zt,!0),Gn(o,"click",pt),Gn(Ht,"gesturestart",tt),Gn(Ht,"gestureend",ct),Gn(o,Dr+"enter",dt),Gn(o,Dr+"leave",lt),Gn(o,Dr+"move",$),J.isEnabled=J.isPressed=J.isDragging=!1,At&&At(J))},J.kill=J.revert=function(){J.disable();var at=Ta.indexOf(J);at>=0&&Ta.splice(at,1),bs===J&&(bs=0)},Ta.push(J),Q&&ko(o)&&(bs=J),J.enable(x)},ab(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ye.version="3.15.1";Ye.create=function(s){return new Ye(s)};Ye.register=H0;Ye.getAll=function(){return Ta.slice()};Ye.getById=function(s){return Ta.filter(function(t){return t.vars.id===s})[0]};k0()&&Mn.registerPlugin(Ye);var Ct,Pa,Qt,Se,vi,ye,bd,ku,jo,Yo,Go,wu,Dn,Hu,gd,qn,W0,X0,Ia,og,ud,lg,Xn,_d,cg,ug,ir,xd,Td,La,wd,sr,vd,hd,Au=1,Nn=Date.now,fd=Nn(),Pi=0,Ho=0,q0=function(t,e,n){var i=xi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Y0=function(t,e){return e&&(!xi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ub=function s(){return Ho&&requestAnimationFrame(s)},Z0=function(){return Hu=1},J0=function(){return Hu=0},is=function(t){return t},Wo=function(t){return Math.round(t*1e5)/1e5||0},hg=function(){return typeof window!="undefined"},fg=function(){return Ct||hg()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},zr=function(t){return!!~bd.indexOf(t)},dg=function(t){return(t==="Height"?wd:Qt["inner"+t])||vi["client"+t]||ye["client"+t]},pg=function(t){return ws(t,"getBoundingClientRect")||(zr(t)?function(){return zu.width=Qt.innerWidth,zu.height=wd,zu}:function(){return As(t)})},hb=function(t,e,n){var i=n.d,r=n.d2,a=n.a;return(a=ws(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?dg(r):t["client"+r])||0}},fb=function(t,e){return!e||~Gi.indexOf(t)?pg(t):function(){return zu}},ss=function(t,e){var n=e.s,i=e.d2,r=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=ws(t,n))?a()-pg(t)()[r]:zr(t)?(vi[n]||ye[n])-dg(i):t[n]-t["offset"+i])},Eu=function(t,e){for(var n=0;n<Ia.length;n+=3)(!e||~e.indexOf(Ia[n+1]))&&t(Ia[n],Ia[n+1],Ia[n+2])},xi=function(t){return typeof t=="string"},Fn=function(t){return typeof t=="function"},Xo=function(t){return typeof t=="number"},Nr=function(t){return typeof t=="object"},Vo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ea=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ca=Math.abs,mg="left",gg="top",Ad="right",Ed="bottom",Ur="width",Or="height",Zo="Right",Jo="Left",$o="Top",Ko="Bottom",sn="padding",Ci="margin",Na="Width",Cd="Height",fn="px",Ri=function(t){return Qt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},db=function(t){var e=Ri(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},$0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},As=function(t,e){var n=e&&Ri(t)[gd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Vu=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},_g=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},pb=function(t){return function(e){return Ct.utils.snap(_g(t),e)}},Rd=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return e(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=e(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:e(r<0?i-t:i+t)}},mb=function(t){return function(e,n){return Rd(_g(t))(e,n.direction)}},Cu=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},_n=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ru=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},K0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Pu={toggleActions:"play",anticipatePin:0},Gu={top:0,left:0,center:.5,bottom:1,right:1},Fu=function(t,e){if(xi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Gu?Gu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Iu=function(t,e,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,f=r.fontSize,h=r.indent,d=r.fontWeight,_=Se.createElement("div"),x=zr(n)||ws(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=x?ye:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,A=S?c:u,v="border-color:"+A+";font-size:"+f+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(v+=(i===nn?Ad:Ed)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(_,g.children[0]):g.appendChild(_),_._offset=_["offset"+i.op.d2],Uu(_,0,i,S),_},Uu=function(t,e,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Na]=1,r["border"+o+Na]=0,r[n.p]=e+"px",Ct.set(t,r)},Kt=[],yd={},tl,Q0=function(){return Nn()-Pi>34&&(tl||(tl=requestAnimationFrame(Es)))},Ra=function(){(!Xn||!Xn.isPressed||Xn.startX>ye.clientWidth)&&(Jt.cache++,Xn?tl||(tl=requestAnimationFrame(Es)):Es(),Pi||Vr("scrollStart"),Pi=Nn())},dd=function(){ug=Qt.innerWidth,cg=Qt.innerHeight},qo=function(t){Jt.cache++,(t===!0||!Dn&&!lg&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!_d||ug!==Qt.innerWidth||Math.abs(Qt.innerHeight-cg)>Qt.innerHeight*.25))&&ku.restart(!0)},kr={},gb=[],xg=function s(){return gn($t,"scrollEnd",s)||Fr(!0)},Vr=function(t){return kr[t]&&kr[t].map(function(e){return e()})||gb},_i=[],vg=function(t){for(var e=0;e<_i.length;e+=5)(!t||_i[e+4]&&_i[e+4].query===t)&&(_i[e].style.cssText=_i[e+1],_i[e].getBBox&&_i[e].setAttribute("transform",_i[e+2]||""),_i[e+3].uncache=1)},yg=function(){Jt.cache++,Jt.forEach(function(t){return Fn(t)&&(t.rec=t())})},Pd=function(t,e){var n;for(qn=0;qn<Kt.length;qn++)n=Kt[qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));sr=!0,e&&vg(e),e||Vr("revert")},Mg=function(t,e){Jt.cache++,(e||!Yn)&&Jt.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),xi(t)&&(Td=t,Qt.history.scrollRestoration!==t&&(Qt.history.scrollRestoration=t))},Yn,Br=0,j0,_b=function(){if(j0!==Br){var t=j0=Br;requestAnimationFrame(function(){return t===Br&&Fr(!0)})}},Sg=function(){ye.appendChild(La),wd=!Xn&&La.offsetHeight||Qt.innerHeight,ye.removeChild(La)},tg=function(t){return jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fr=function(t,e){if(vi=Se.documentElement,ye=Se.body,bd=[Qt,Se,vi,ye],Pi&&!t&&!sr){_n($t,"scrollEnd",xg);return}Sg(),Yn=$t.isRefreshing=!0,sr||yg();var n=Vr("refreshInit");og&&$t.sort(),e||Pd(),Jt.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Kt.slice(0).forEach(function(i){return i.refresh()}),sr=!1,Kt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),vd=1,tg(!0),Kt.forEach(function(i){var r=ss(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),tg(!1),vd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Jt.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Mg(Td,1),ku.pause(),Br++,Yn=2,Es(2),Kt.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=$t.isRefreshing=!1,Vr("refresh")},Md=0,Ou=1,Qo,Es=function(t){if(t===2||!Yn&&!sr){$t.isUpdating=!0,Qo&&Qo.update(0);var e=Kt.length,n=Nn(),i=n-fd>=50,r=e&&Kt[0].scroll();if(Ou=Md>r?-1:1,Yn||(Md=r),i&&(Pi&&!Hu&&n-Pi>200&&(Pi=0,Vr("scrollEnd")),Go=fd,fd=n),Ou<0){for(qn=e;qn-- >0;)Kt[qn]&&Kt[qn].update(0,i);Ou=1}else for(qn=0;qn<e;qn++)Kt[qn]&&Kt[qn].update(0,i);$t.isUpdating=!1}tl=0},Sd=[mg,gg,Ed,Ad,Ci+Ko,Ci+Zo,Ci+$o,Ci+Jo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bu=Sd.concat([Ur,Or,"boxSizing","max"+Na,"max"+Cd,"position",Ci,sn,sn+$o,sn+Zo,sn+Ko,sn+Jo]),xb=function(t,e,n){Da(n);var i=t._gsap;if(i.spacerIsNative)Da(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},pd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Sd.length,a=e.style,o=t.style,l;r--;)l=Sd[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ed]=o[Ad]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ur]=Vu(t,Ln)+fn,a[Or]=Vu(t,nn)+fn,a[sn]=o[Ci]=o[gg]=o[mg]="0",Da(i),o[Ur]=o["max"+Na]=n[Ur],o[Or]=o["max"+Cd]=n[Or],o[sn]=n[sn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},vb=/([A-Z])/g,Da=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,a;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],r=t[i],a?e[r]=a:e[r]&&e.removeProperty(r.replace(vb,"-$1").toLowerCase())}},Lu=function(t){for(var e=Bu.length,n=t.style,i=[],r=0;r<e;r++)i.push(Bu[r],n[Bu[r]]);return i.t=t,i},yb=function(t,e,n){for(var i=[],r=t.length,a=n?8:0,o;a<r;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},zu={left:0,top:0},eg=function(t,e,n,i,r,a,o,l,c,u,f,h,d,_){Fn(t)&&(t=t(l)),xi(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Fu("0"+t.substr(3),n):0));var x=d?d.time():0,m,g,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Xo(t))d&&(t=Ct.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&Uu(o,n,i,!0);else{Fn(e)&&(e=e(l));var A=(t||"0").split(" "),v,b,y,p;S=Wn(e,l)||ye,v=As(S)||{},(!v||!v.left&&!v.top)&&Ri(S).display==="none"&&(p=S.style.display,S.style.display="block",v=As(S),p?S.style.display=p:S.style.removeProperty("display")),b=Fu(A[0],v[i.d]),y=Fu(A[1]||"0",n),t=v[i.p]-c[i.p]-u+b+r-y,o&&Uu(o,y,i,n-y<20||o._isStart&&y>20),n-=n-y}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var M=t+n,C=a._isStart;m="scroll"+i.d2,Uu(a,M,i,C&&M>20||!C&&(f?Math.max(ye[m],vi[m]):a.parentNode[m])<=M+1),f&&(c=As(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+fn))}return d&&S&&(m=As(S),d.seek(h),g=As(S),d._caScrollDist=m[i.p]-g[i.p],t=t/d._caScrollDist*h),d&&d.seek(x),d?t:Math.round(t)},Mb=/(webkit|moz|length|cssText|inset)/i,ng=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,a,o;if(e===ye){t._stOrig=r.cssText,o=Ri(t);for(a in o)!+a&&!Mb.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},bg=function(t,e,n){var i=e,r=i;return function(a){var o=Math.round(t());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},Du=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},ig=function(t,e){var n=Ts(t,e),i="_scroll"+e.p2,r=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||n();var x=bg(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return x(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){Jt.cache++,a.tween&&Es()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ct.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},_n(t,"wheel",n.wheelHandler),$t.isTouch&&_n(t,"touchmove",n.wheelHandler),r},$t=(function(){function s(e,n){Pa||s.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xd(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ho){this.update=this.refresh=this.kill=is;return}n=$0(xi(n)||Xo(n)||n.nodeType?{trigger:n}:n,Pu);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,f=r.scrub,h=r.trigger,d=r.pin,_=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,S=r.onSnapComplete,A=r.once,v=r.snap,b=r.pinReparent,y=r.pinSpacer,p=r.containerAnimation,M=r.fastScrollEnd,C=r.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:nn,L=!f&&f!==0,D=Wn(n.scroller||Qt),B=Ct.core.getCache(D),I=zr(D),z=("pinType"in n?n.pinType:ws(D,"pinType")||I&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=L&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Pu.markers,H=I?0:parseFloat(Ri(D)["border"+E.p2+Na])||0,P=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(P)},xt=hb(D,I,E),At=fb(D,I),q=0,ot=0,_t=0,St=Ts(D,E),ht,Ft,Me,Et,Wt,Dt,Ot,de,ue,J,jt,$e,we,se,Ge,Ze,O,ge,he,Ht,ft,pe,Nt,zt,R,T,V,rt,it,ut,gt,W,tt,ct,N,K,$,dt,lt;if(P._startClamp=P._endClamp=!1,P._dir=E,m*=45,P.scroller=D,P.scroll=p?p.time.bind(p):St,Et=St(),sr&&St.rec==null&&(St.rec=Et),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(og=1,n.refreshPriority===-9999&&(Qo=P)),B.tweenScroll=B.tweenScroll||{top:ig(D,nn),left:ig(D,Ln)},P.tweenTo=ht=B.tweenScroll[E.p],P.scrubDuration=function(et){tt=Xo(et)&&et,tt?W?W.duration(et):W=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(P)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),ut=0,l||(l=i.vars.id)),v&&((!Nr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ye.style&&Ct.set(I?[ye,vi]:D,{scrollBehavior:"auto"}),Jt.forEach(function(et){return Fn(et)&&et.target===(I?Se.scrollingElement||vi:D)&&(et.smooth=!1)}),Me=Fn(v.snapTo)?v.snapTo:v.snapTo==="labels"?pb(i):v.snapTo==="labelsDirectional"?mb(i):v.directional!==!1?function(et,vt){return Rd(v.snapTo)(et,Nn()-ot<500?0:vt.direction)}:Ct.utils.snap(v.snapTo),ct=v.duration||{min:.1,max:2},ct=Nr(ct)?Yo(ct.min,ct.max):Yo(ct,ct),N=Ct.delayedCall(v.delay||tt/2||.1,function(){var et=St(),vt=Nn()-ot<500,nt=ht.tween;if((vt||Math.abs(P.getVelocity())<10)&&!nt&&!Hu&&q!==et){var Tt=(et-Dt)/se,te=i&&!L?i.totalProgress():Tt,Xt=vt?0:(te-gt)/(Nn()-Go)*1e3||0,Ne=Ct.utils.clamp(-Tt,1-Tt,Ca(Xt/2)*Xt/.185),Ke=Tt+(v.inertia===!1?0:Ne),Fe,Ae,xe=v,an=xe.onStart,Ee=xe.onInterrupt,bn=xe.onComplete;if(Fe=Me(Ke,P),Xo(Fe)||(Fe=Ke),Ae=Math.max(0,Math.round(Dt+Fe*se)),et<=Ot&&et>=Dt&&Ae!==et){if(nt&&!nt._initted&&nt.data<=Ca(Ae-et))return;v.inertia===!1&&(Ne=Fe-Tt),ht(Ae,{duration:ct(Ca(Math.max(Ca(Ke-te),Ca(Fe-te))*.185/Xt/.05||0)),ease:v.ease||"power3",data:Ca(Ae-et),onInterrupt:function(){return N.restart(!0)&&Ee&&Ea(P,Ee)},onComplete:function(){P.update(),q=St(),i&&!L&&(W?W.resetTo("totalProgress",Fe,i._tTime/i._tDur):i.progress(Fe)),ut=gt=i&&!L?i.totalProgress():P.progress,S&&S(P),bn&&Ea(P,bn)}},et,Ne*se,Ae-et-Ne*se),an&&Ea(P,an,ht.tween)}}else P.isActive&&q!==et&&N.restart(!0)}).pause()),l&&(yd[l]=P),h=P.trigger=Wn(h||d!==!0&&d),lt=h&&h._gsap&&h._gsap.stRevert,lt&&(lt=lt(P)),d=d===!0?h:Wn(d),xi(o)&&(o={targets:h,className:o}),d&&(_===!1||_===Ci||(_=!_&&d.parentNode&&d.parentNode.style&&Ri(d.parentNode).display==="flex"?!1:sn),P.pin=d,Ft=Ct.core.getCache(d),Ft.spacer?Ge=Ft.pinState:(y&&(y=Wn(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),Ft.spacerIsNative=!!y,y&&(Ft.spacerState=Lu(y))),Ft.spacer=ge=y||Se.createElement("div"),ge.classList.add("pin-spacer"),l&&ge.classList.add("pin-spacer-"+l),Ft.pinState=Ge=Lu(d)),n.force3D!==!1&&Ct.set(d,{force3D:!0}),P.spacer=ge=Ft.spacer,it=Ri(d),zt=it[_+E.os2],Ht=Ct.getProperty(d),ft=Ct.quickSetter(d,E.a,fn),pd(d,ge,it),O=Lu(d)),Q){$e=Nr(Q)?$0(Q,K0):K0,J=Iu("scroller-start",l,D,E,$e,0),jt=Iu("scroller-end",l,D,E,$e,0,J),he=J["offset"+E.op.d2];var pt=Wn(ws(D,"content")||D);de=this.markerStart=Iu("start",l,pt,E,$e,he,0,p),ue=this.markerEnd=Iu("end",l,pt,E,$e,he,0,p),p&&(dt=Ct.quickSetter([de,ue],E.a,fn)),!z&&!(Gi.length&&ws(D,"fixedMarkers")===!0)&&(db(I?ye:D),Ct.set([J,jt],{force3D:!0}),T=Ct.quickSetter(J,E.a,fn),rt=Ct.quickSetter(jt,E.a,fn))}if(p){var at=p.vars.onUpdate,mt=p.vars.onUpdateParams;p.eventCallback("onUpdate",function(){P.update(0,0,1),at&&at.apply(p,mt||[])})}if(P.previous=function(){return Kt[Kt.indexOf(P)-1]},P.next=function(){return Kt[Kt.indexOf(P)+1]},P.revert=function(et,vt){if(!vt)return P.kill(!0);var nt=et!==!1||!P.enabled,Tt=Dn;nt!==P.isReverted&&(nt&&(K=Math.max(St(),P.scroll.rec||0),_t=P.progress,$=i&&i.progress()),de&&[de,ue,J,jt].forEach(function(te){return te.style.display=nt?"none":"block"}),nt&&(Dn=P,P.update(nt)),d&&(!b||!P.isActive)&&(nt?xb(d,ge,Ge):pd(d,ge,Ri(d),R)),nt||P.update(nt),Dn=Tt,P.isReverted=nt)},P.refresh=function(et,vt,nt,Tt){if(!((Dn||!P.enabled)&&!vt)){if(d&&et&&Pi){_n(s,"scrollEnd",xg);return}!Yn&&j&&j(P),Dn=P,ht.tween&&!nt&&(ht.tween.kill(),ht.tween=0),W&&W.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var te=xt(),Xt=At(),Ne=p?p.duration():ss(D,E),Ke=se<=.01||!se,Fe=0,Ae=Tt||0,xe=Nr(nt)?nt.end:n.end,an=n.endTrigger||h,Ee=Nr(nt)?nt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),bn=P.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,P),si=h&&Math.max(0,Kt.indexOf(P))||0,He=si,Qe,on,ri,Gr,ln,We,yi,ka,sl,Rs,w,F,Z;for(Q&&Nr(nt)&&(F=Ct.getProperty(J,E.p),Z=Ct.getProperty(jt,E.p));He-- >0;)We=Kt[He],We.end||We.refresh(0,1)||(Dn=P),yi=We.pin,yi&&(yi===h||yi===d||yi===bn)&&!We.isReverted&&(Rs||(Rs=[]),Rs.unshift(We),We.revert(!0,!0)),We!==Kt[He]&&(si--,He--);for(Fn(Ee)&&(Ee=Ee(P)),Ee=q0(Ee,"start",P),Dt=eg(Ee,h,te,E,St(),de,J,P,Xt,H,z,Ne,p,P._startClamp&&"_startClamp")||(d?-.001:0),Fn(xe)&&(xe=xe(P)),xi(xe)&&!xe.indexOf("+=")&&(~xe.indexOf(" ")?xe=(xi(Ee)?Ee.split(" ")[0]:"")+xe:(Fe=Fu(xe.substr(2),te),xe=xi(Ee)?Ee:(p?Ct.utils.mapRange(0,p.duration(),p.scrollTrigger.start,p.scrollTrigger.end,Dt):Dt)+Fe,an=h)),xe=q0(xe,"end",P),Ot=Math.max(Dt,eg(xe||(an?"100% 0":Ne),an,te,E,St()+Fe,ue,jt,P,Xt,H,z,Ne,p,P._endClamp&&"_endClamp"))||-.001,Fe=0,He=si;He--;)We=Kt[He]||{},yi=We.pin,yi&&We.start-We._pinPush<=Dt&&!p&&We.end>0&&(Qe=We.end-(P._startClamp?Math.max(0,We.start):We.start),(yi===h&&We.start-We._pinPush<Dt||yi===bn)&&isNaN(Ee)&&(Fe+=Qe*(1-We.progress)),yi===d&&(Ae+=Qe));if(Dt+=Fe,Ot+=Fe,P._startClamp&&(P._startClamp+=Fe),P._endClamp&&!Yn&&(P._endClamp=Ot||-.001,Ot=Math.min(Ot,ss(D,E))),se=Ot-Dt||(Dt-=.01)&&.001,Ke&&(_t=Ct.utils.clamp(0,1,Ct.utils.normalize(Dt,Ot,K))),P._pinPush=Ae,de&&Fe&&(Qe={},Qe[E.a]="+="+Fe,bn&&(Qe[E.p]="-="+St()),Ct.set([de,ue],Qe)),d&&!(vd&&P.end>=ss(D,E)))Qe=Ri(d),Gr=E===nn,ri=St(),pe=parseFloat(Ht(E.a))+Ae,!Ne&&Ot>1&&(w=(I?Se.scrollingElement||vi:D).style,w={style:w,value:w["overflow"+E.a.toUpperCase()]},I&&Ri(ye)["overflow"+E.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+E.a.toUpperCase()]="scroll")),pd(d,ge,Qe),O=Lu(d),on=As(d,!0),ka=z&&Ts(D,Gr?Ln:nn)(),_?(R=[_+E.os2,se+Ae+fn],R.t=ge,He=_===sn?Vu(d,E)+se+Ae:0,He&&(R.push(E.d,He+fn),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=He+fn)),Da(R),bn&&Kt.forEach(function(k){k.pin===bn&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),z&&St(K)):(He=Vu(d,E),He&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=He+fn)),z&&(ln={top:on.top+(Gr?ri-Dt:ka)+fn,left:on.left+(Gr?ka:ri-Dt)+fn,boxSizing:"border-box",position:"fixed"},ln[Ur]=ln["max"+Na]=Math.ceil(on.width)+fn,ln[Or]=ln["max"+Cd]=Math.ceil(on.height)+fn,ln[Ci]=ln[Ci+$o]=ln[Ci+Zo]=ln[Ci+Ko]=ln[Ci+Jo]="0",ln[sn]=Qe[sn],ln[sn+$o]=Qe[sn+$o],ln[sn+Zo]=Qe[sn+Zo],ln[sn+Ko]=Qe[sn+Ko],ln[sn+Jo]=Qe[sn+Jo],Ze=yb(Ge,ln,b),Yn&&St(0)),i?(sl=i._initted,ud(1),i.render(i.duration(),!0,!0),Nt=Ht(E.a)-pe+se+Ae,V=Math.abs(se-Nt)>1,z&&V&&Ze.splice(Ze.length-2,2),i.render(0,!0,!0),sl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ud(0)):Nt=se,w&&(w.value?w.style["overflow"+E.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+E.a));else if(h&&St()&&!p)for(on=h.parentNode;on&&on!==ye;)on._pinOffset&&(Dt-=on._pinOffset,Ot-=on._pinOffset),on=on.parentNode;Rs&&Rs.forEach(function(k){return k.revert(!1,!0)}),P.start=Dt,P.end=Ot,Et=Wt=Yn?K:St(),!p&&!Yn&&!sr&&(Et<K&&St(K),P.scroll.rec=0),P.revert(!1,!0),ot=Nn(),N&&(q=-1,N.restart(!0)),Dn=0,i&&L&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Ke||_t!==P.progress||p||x||i&&!i._initted)&&(i&&!L&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(p&&Dt<-.001&&!_t?Ct.utils.normalize(Dt,Ot,0):_t,!0),P.progress=Ke||(Et-Dt)/se===_t?0:_t),d&&_&&(ge._pinOffset=Math.round(P.progress*Nt)),W&&W.invalidate(),isNaN(F)||(F-=Ct.getProperty(J,E.p),Z-=Ct.getProperty(jt,E.p),Du(J,E,F),Du(de,E,F-(Tt||0)),Du(jt,E,Z),Du(ue,E,Z-(Tt||0))),Ke&&!Yn&&P.update(),u&&!Yn&&!we&&(we=!0,u(P),we=!1)}},P.getVelocity=function(){return(St()-Wt)/(Nn()-Go)*1e3||0},P.endAnimation=function(){Vo(P.callbackAnimation),i&&(W?W.progress(1):i.paused()?L||Vo(i,P.direction<0,1):Vo(i,i.reversed()))},P.labelToScroll=function(et){return i&&i.labels&&(Dt||P.refresh()||Dt)+i.labels[et]/i.duration()*se||0},P.getTrailing=function(et){var vt=Kt.indexOf(P),nt=P.direction>0?Kt.slice(0,vt).reverse():Kt.slice(vt+1);return(xi(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return P.direction>0?Tt.end<=Dt:Tt.start>=Ot})},P.update=function(et,vt,nt){if(!(p&&!nt&&!et)){var Tt=Yn===!0?K:P.scroll(),te=et?0:(Tt-Dt)/se,Xt=te<0?0:te>1?1:te||0,Ne=P.progress,Ke,Fe,Ae,xe,an,Ee,bn,si;if(vt&&(Wt=Et,Et=p?St():Tt,v&&(gt=ut,ut=i&&!L?i.totalProgress():Xt)),m&&d&&!Dn&&!Au&&Pi&&(!Xt&&Dt<Tt+(Tt-Wt)/(Nn()-Go)*m?Xt=1e-4:Xt===1&&Ot>Tt+(Tt-Wt)/(Nn()-Go)*m&&(Xt=.9999)),Xt!==Ne&&P.enabled){if(Ke=P.isActive=!!Xt&&Xt<1,Fe=!!Ne&&Ne<1,Ee=Ke!==Fe,an=Ee||!!Xt!=!!Ne,P.direction=Xt>Ne?1:-1,P.progress=Xt,an&&!Dn&&(Ae=Xt&&!Ne?0:Xt===1?1:Ne===1?2:3,L&&(xe=!Ee&&U[Ae+1]!=="none"&&U[Ae+1]||U[Ae],si=i&&(xe==="complete"||xe==="reset"||xe in i))),C&&(Ee||si)&&(si||f||!i)&&(Fn(C)?C(P):P.getTrailing(C).forEach(function(ri){return ri.endAnimation()})),L||(W&&!Dn&&!Au?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Xt,i._tTime/i._tDur):(W.vars.totalProgress=Xt,W.invalidate().restart())):i&&i.totalProgress(Xt,!!(Dn&&(ot||et)))),d){if(et&&_&&(ge.style[_+E.os2]=zt),!z)ft(Wo(pe+Nt*Xt));else if(an){if(bn=!et&&Xt>Ne&&Ot+1>Tt&&Tt+1>=ss(D,E),b)if(!et&&(Ke||bn)){var He=As(d,!0),Qe=Tt-Dt;ng(d,ye,He.top+(E===nn?Qe:0)+fn,He.left+(E===nn?0:Qe)+fn)}else ng(d,ge);Da(Ke||bn?Ze:O),V&&Xt<1&&Ke||ft(pe+(Xt===1&&!bn?Nt:0))}}v&&!ht.tween&&!Dn&&!Au&&N.restart(!0),o&&(Ee||A&&Xt&&(Xt<1||!hd))&&jo(o.targets).forEach(function(ri){return ri.classList[Ke||A?"add":"remove"](o.className)}),a&&!L&&!et&&a(P),an&&!Dn?(L&&(si&&(xe==="complete"?i.pause().totalProgress(1):xe==="reset"?i.restart(!0).pause():xe==="restart"?i.restart(!0):i[xe]()),a&&a(P)),(Ee||!hd)&&(c&&Ee&&Ea(P,c),G[Ae]&&Ea(P,G[Ae]),A&&(Xt===1?P.kill(!1,1):G[Ae]=0),Ee||(Ae=Xt===1?1:3,G[Ae]&&Ea(P,G[Ae]))),M&&!Ke&&Math.abs(P.getVelocity())>(Xo(M)?M:2500)&&(Vo(P.callbackAnimation),W?W.progress(1):Vo(i,xe==="reverse"?1:!Xt,1))):L&&a&&!Dn&&a(P)}if(rt){var on=p?Tt/p.duration()*(p._caScrollDist||0):Tt;T(on+(J._isFlipped?1:0)),rt(on)}dt&&dt(-Tt/p.duration()*(p._caScrollDist||0))}},P.enable=function(et,vt){P.enabled||(P.enabled=!0,_n(D,"resize",qo),I||_n(D,"scroll",Ra),j&&_n(s,"refreshInit",j),et!==!1&&(P.progress=_t=0,Et=Wt=q=St()),vt!==!1&&P.refresh())},P.getTween=function(et){return et&&ht?ht.tween:W},P.setPositions=function(et,vt,nt,Tt){if(p){var te=p.scrollTrigger,Xt=p.duration(),Ne=te.end-te.start;et=te.start+Ne*et/Xt,vt=te.start+Ne*vt/Xt}P.refresh(!1,!1,{start:Y0(et,nt&&!!P._startClamp),end:Y0(vt,nt&&!!P._endClamp)},Tt),P.update()},P.adjustPinSpacing=function(et){if(R&&et){var vt=R.indexOf(E.d)+1;R[vt]=parseFloat(R[vt])+et+fn,R[1]=parseFloat(R[1])+et+fn,Da(R)}},P.disable=function(et,vt){if(et!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,vt||W&&W.pause(),K=0,Ft&&(Ft.uncache=1),j&&gn(s,"refreshInit",j),N&&(N.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!I)){for(var nt=Kt.length;nt--;)if(Kt[nt].scroller===D&&Kt[nt]!==P)return;gn(D,"resize",qo),I||gn(D,"scroll",Ra)}},P.kill=function(et,vt){P.disable(et,vt),W&&!vt&&W.kill(),l&&delete yd[l];var nt=Kt.indexOf(P);nt>=0&&Kt.splice(nt,1),nt===qn&&Ou>0&&qn--,nt=0,Kt.forEach(function(Tt){return Tt.scroller===P.scroller&&(nt=1)}),nt||Yn||sr||(P.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),vt||i.kill()),de&&[de,ue,J,jt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Qo===P&&(Qo=0),d&&(Ft&&(Ft.uncache=1),nt=0,Kt.forEach(function(Tt){return Tt.pin===d&&nt++}),nt||(Ft.spacer=0)),n.onKill&&n.onKill(P)},Kt.push(P),P.enable(!1,!1),lt&&lt(P),i&&i.add&&!se){var st=P.update;P.update=function(){P.update=st,Jt.cache++,Dt||Ot||P.refresh()},Ct.delayedCall(.01,P.update),se=.01,Dt=Ot=0}else P.refresh();d&&_b()},s.register=function(n){return Pa||(Ct=n||fg(),hg()&&window.document&&s.enable(),Pa=Ho),Pa},s.defaults=function(n){if(n)for(var i in n)Pu[i]=n[i];return Pu},s.disable=function(n,i){Ho=0,Kt.forEach(function(a){return a[i?"kill":"disable"](n)}),gn(Qt,"wheel",Ra),gn(Se,"scroll",Ra),clearInterval(wu),gn(Se,"touchcancel",is),gn(ye,"touchstart",is),Cu(gn,Se,"pointerdown,touchstart,mousedown",Z0),Cu(gn,Se,"pointerup,touchend,mouseup",J0),ku.kill(),Eu(gn);for(var r=0;r<Jt.length;r+=3)Ru(gn,Jt[r],Jt[r+1]),Ru(gn,Jt[r],Jt[r+2])},s.enable=function(){if(Qt=window,Se=document,vi=Se.documentElement,ye=Se.body,Ct){if(jo=Ct.utils.toArray,Yo=Ct.utils.clamp,xd=Ct.core.context||is,ud=Ct.core.suppressOverwrites||is,Td=Qt.history.scrollRestoration||"auto",Md=Qt.pageYOffset||0,Ct.core.globals("ScrollTrigger",s),ye){Ho=1,La=document.createElement("div"),La.style.height="100vh",La.style.position="absolute",Sg(),ub(),Ye.register(Ct),s.isTouch=Ye.isTouch,ir=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_d=Ye.isTouch===1,_n(Qt,"wheel",Ra),bd=[Qt,Se,vi,ye],Ct.matchMedia?(s.matchMedia=function(u){var f=Ct.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ct.addEventListener("matchMediaInit",function(){yg(),Pd()}),Ct.addEventListener("matchMediaRevert",function(){return vg()}),Ct.addEventListener("matchMedia",function(){Fr(0,1),Vr("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return dd(),dd})):console.warn("Requires GSAP 3.11.0 or later"),dd(),_n(Se,"scroll",Ra);var n=ye.hasAttribute("style"),i=ye.style,r=i.borderTopStyle,a=Ct.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=As(ye),nn.m=Math.round(o.top+nn.sc())||0,Ln.m=Math.round(o.left+Ln.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(ye.setAttribute("style",""),ye.removeAttribute("style")),wu=setInterval(Q0,250),Ct.delayedCall(.5,function(){return Au=0}),_n(Se,"touchcancel",is),_n(ye,"touchstart",is),Cu(_n,Se,"pointerdown,touchstart,mousedown",Z0),Cu(_n,Se,"pointerup,touchend,mouseup",J0),gd=Ct.utils.checkPrefix("transform"),Bu.push(gd),Pa=Nn(),ku=Ct.delayedCall(.2,Fr).pause(),Ia=[Se,"visibilitychange",function(){var u=Qt.innerWidth,f=Qt.innerHeight;Se.hidden?(W0=u,X0=f):(W0!==u||X0!==f)&&qo()},Se,"DOMContentLoaded",Fr,Qt,"load",Fr,Qt,"resize",qo],Eu(_n),Kt.forEach(function(u){return u.enable(0,1)}),l=0;l<Jt.length;l+=3)Ru(gn,Jt[l],Jt[l+1]),Ru(gn,Jt[l],Jt[l+2])}else if(Se){var c=function u(){s.enable(),Se.removeEventListener("DOMContentLoaded",u)};Se.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(hd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wu)||(wu=i)&&setInterval(Q0,i),"ignoreMobileResize"in n&&(_d=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Eu(gn)||Eu(_n,n.autoRefreshEvents||"none"),lg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Wn(n),a=Jt.indexOf(r),o=zr(r);~a&&Jt.splice(a,o?6:2),i&&(o?Gi.unshift(Qt,i,ye,i,vi,i):Gi.unshift(r,i))},s.clearMatchMedia=function(n){Kt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(xi(n)?Wn(n):n).getBoundingClientRect(),o=a[r?Ur:Or]*i||0;return r?a.right-o>0&&a.left+o<Qt.innerWidth:a.bottom-o>0&&a.top+o<Qt.innerHeight},s.positionInViewport=function(n,i,r){xi(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[r?Ur:Or],l=i==null?o/2:i in Gu?Gu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/Qt.innerWidth:(a.top+l)/Qt.innerHeight},s.killAll=function(n){if(Kt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=kr.killAll||[];kr={},i.forEach(function(r){return r()})}},s})();$t.version="3.15.1";$t.saveStyles=function(s){return s?jo(s).forEach(function(t){if(t&&t.style){var e=_i.indexOf(t);e>=0&&_i.splice(e,5),_i.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),xd())}}):_i};$t.revert=function(s,t){return Pd(!s,t)};$t.create=function(s,t){return new $t(s,t)};$t.refresh=function(s){return s?qo(!0):(Pa||$t.register())&&Fr(!0)};$t.update=function(s){return++Jt.cache&&Es(s===!0?2:0)};$t.clearScrollMemory=Mg;$t.maxScroll=function(s,t){return ss(s,t?Ln:nn)};$t.getScrollFunc=function(s,t){return Ts(Wn(s),t?Ln:nn)};$t.getById=function(s){return yd[s]};$t.getAll=function(){return Kt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};$t.isScrolling=function(){return!!Pi};$t.snapDirectional=Rd;$t.addEventListener=function(s,t){var e=kr[s]||(kr[s]=[]);~e.indexOf(t)||e.push(t)};$t.removeEventListener=function(s,t){var e=kr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};$t.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ct.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),r<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Fn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Fn(r)&&(r=r(),_n($t,"refresh",function(){return r=t.batchMax()})),jo(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push($t.create(c))}),e};var sg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},md=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===vi&&s(ye,e)},Nu={auto:1,scroll:1},Sb=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,a=r._gsap||Ct.core.getCache(r),o=Nn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==ye&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Nu[(l=Ri(r)).overflowY]||Nu[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!zr(r)&&(Nu[(l=Ri(r)).overflowY]||Nu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Tg=function(t,e,n,i){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Sb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(Se,Ye.eventTypes[0],ag,!1,!0)},onDisable:function(){return gn(Se,Ye.eventTypes[0],ag,!0)}})},bb=/(input|label|select|textarea)/i,rg,ag=function(t){var e=bb.test(t.target.tagName);(e||rg)&&(t._gsapAllow=!0,rg=e)},Tb=function(t){Nr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,a=e.onRelease,o,l,c=Wn(t.target)||vi,u=Ct.core.globals().ScrollSmoother,f=u&&u.get(),h=ir&&(t.content&&Wn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=Ts(c,nn),_=Ts(c,Ln),x=1,m=(Ye.isTouch&&Qt.visualViewport?Qt.visualViewport.scale*Qt.visualViewport.width:Qt.outerWidth)/Qt.innerWidth,g=0,S=Fn(i)?function(){return i(o)}:function(){return i||2.8},A,v,b=Tg(c,t.type,!0,r),y=function(){return v=!1},p=is,M=is,C=function(){l=ss(c,nn),M=Yo(ir?1:0,l),n&&(p=Yo(0,ss(c,Ln))),A=Br},E=function(){h._gsap.y=Wo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(y);var Q=Wo(o.deltaY/2),H=M(d.v-Q);if(h&&H!==d.v+d.offset){d.offset=H-d.v;var P=Wo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=Jt.cache,Es()}return!0}d.offset&&E(),v=!0},D,B,I,z,G=function(){C(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Ct.set(h,{y:"+=0"}),t.ignoreCheck=function(U){return ir&&U.type==="touchmove"&&L(U)||x>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},t.onPress=function(){v=!1;var U=x;x=Wo((Qt.visualViewport&&Qt.visualViewport.scale||1)/m),D.pause(),U!==x&&md(c,x>1.01?!0:n?!1:"x"),B=_(),I=d(),C(),A=Br},t.onRelease=t.onGestureStart=function(U,Q){if(d.offset&&E(),!Q)z.restart(!0);else{Jt.cache++;var H=S(),P,j;n&&(P=_(),j=P+H*.05*-U.velocityX/.227,H*=sg(_,P,j,ss(c,Ln)),D.vars.scrollX=p(j)),P=d(),j=P+H*.05*-U.velocityY/.227,H*=sg(d,P,j,ss(c,nn)),D.vars.scrollY=M(j),D.invalidate().duration(H).play(.01),(ir&&D.vars.scrollY>=l||P>=l-1)&&Ct.to({},{onUpdate:G,duration:H})}a&&a(U)},t.onWheel=function(){D._ts&&D.pause(),Nn()-g>1e3&&(A=0,g=Nn())},t.onChange=function(U,Q,H,P,j){if(Br!==A&&C(),Q&&n&&_(p(P[2]===Q?B+(U.startX-U.x):_()+Q-P[1])),H){d.offset&&E();var xt=j[2]===H,At=xt?I+U.startY-U.y:d()+H-j[1],q=M(At);xt&&At!==q&&(I+=q-At),d(q)}(H||Q)&&Es()},t.onEnable=function(){md(c,n?!1:"x"),$t.addEventListener("refresh",G),_n(Qt,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},t.onDisable=function(){md(c,!0),gn(Qt,"resize",G),$t.removeEventListener("refresh",G),b.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ye(t),o.iOS=ir,ir&&!d()&&d(1),ir&&Ct.ticker.add(is),z=o._dc,D=Ct.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bg(d,d(),function(){return D.pause()})},onUpdate:Es,onComplete:z.vars.onComplete}),o};$t.sort=function(s){if(Fn(s))return Kt.sort(s);var t=Qt.pageYOffset||0;return $t.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Qt.innerHeight}),Kt.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$t.observe=function(s){return new Ye(s)};$t.normalizeScroll=function(s){if(typeof s=="undefined")return Xn;if(s===!0&&Xn)return Xn.enable();if(s===!1){Xn&&Xn.kill(),Xn=s;return}var t=s instanceof Ye?s:Tb(s);return Xn&&Xn.target===t.target&&Xn.kill(),zr(t.target)&&(Xn=t),t};$t.core={_getVelocityProp:Tu,_inputObserver:Tg,_scrollers:Jt,_proxies:Gi,bridge:{ss:function(){Pi||Vr("scrollStart"),Pi=Nn()},ref:function(){return Dn}}};fg()&&Ct.registerPlugin($t);function wg(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Dd={W:2,H:.92};function Ag(s,t){let e=[],{W:n,H:i}=Dd,r=(c,u)=>(i+u)*Math.pow(Math.max(0,1-(c/(n+u*1.3))**2),1.05),a=[{s:1,e:0,d:1},{s:1,e:.085,d:.55},{s:1,e:.2,d:.38},{s:-1,e:0,d:1},{s:-1,e:.08,d:.42}];for(let c of a){let u=n+c.e*1.3,f=.011/(s*c.d);for(let h=-u;h<=u;h+=f)e.push([h,c.s*r(h,c.e)+(t()-.5)*.006,(t()-.5)*.05,1,c.e,0,0])}let o=Math.round(96*Math.sqrt(s)),l=.015/Math.sqrt(s);for(let c=0;c<o;c++){let u=c/o*Math.PI*2;for(let f=.335;f<.77;f+=l){let h=u+.06*Math.sin(f*16+c*.9);e.push([Math.cos(h)*f,Math.sin(h)*f,.02,2,f,0,0])}}return[[.43,24],[.565,30],[.69,36]].forEach(([c,u],f)=>{let h=Math.round(2*Math.PI*c/(.009/s));for(let d=0;d<h;d++){let _=d/h*Math.PI*2,x=c+.02*Math.sin(u*_+f);e.push([Math.cos(_)*x,Math.sin(_)*x,.03,2,x,0,0])}}),[.78,.8].forEach(c=>{let u=Math.round(2*Math.PI*c/(.0075/s));for(let f=0;f<u;f++){let h=f/u*Math.PI*2;e.push([Math.cos(h)*c,Math.sin(h)*c,.02,2,c,0,0])}}),[.3,.316].forEach(c=>{let u=Math.round(2*Math.PI*c/(.0075/s));for(let f=0;f<u;f++){let h=f/u*Math.PI*2;e.push([Math.cos(h)*c,Math.sin(h)*c,.04,3,c,0,0])}}),[.215,.235].forEach((c,u)=>{let f=Math.round(34*s);for(let h=0;h<f;h++){let d=1.95+h/f*(.75-u*.15);e.push([Math.cos(d)*c,Math.sin(d)*c,.05,4,0,0,0])}}),{primary:e,secondary:[]}}var rr={PW:1.3,PH:1.838};function Eg(s,t){let e=[],n=[],{PW:i,PH:r}=rr,a=.24,o=.0125/Math.sqrt(s),l=.011/s,c={},u=(v,b,y,p,M,C,E,L=0,D=0)=>{let B=Math.hypot(p-b,M-y),I=Math.max(2,Math.round(B/C));for(let z=0;z<=I;z++){let G=z/I;v.push([b+(p-b)*G,y+(M-y)*G,D,E,L,0,0])}},f=(v,b,y,p,M=2,C=0,E={})=>{var G,U,Q,H,P;let L=b,D=b+p,B=(G=E.type)!=null?G:2,I=(U=E.z)!=null?U:0,z=(Q=E.sp)!=null?Q:o;for(;L<D-.015;){let j=(H=E.word)!=null?H:.05+t()*.2;L+j>D&&(j=D-L);for(let xt=L;xt<=L+j;xt+=z)for(let At=0;At<M;At++)v.push([xt+(t()-.5)*.002,y+(At-(M-1)/2)*z*.95,I,B,C,0,0]);L+=j+((P=E.gap)!=null?P:.034)}return D},h=(v,b,y,p,M)=>{let C=o*1.15;for(let E=v;E<=b;E+=C)for(let L=y-p/2;L<=y+p/2;L+=C)e.push([E+(t()-.5)*.006,L+(t()-.5)*.006,-.01,3,M,0,0])};u(e,-i,r,i-a,r,l,1),u(e,i-a,r,i,r-a,l,1),u(e,i,r-a,i,-r,l,1),u(e,i,-r,-i,-r,l,1),u(e,-i,-r,-i,r,l,1),u(e,i-a,r,i-a,r-a,l*1.7,1),u(e,i-a,r-a,i,r-a,l*1.7,1);let d=Math.round(150*s);for(let v=0;v<d;v++){let b=t()*6.283,y=.11*Math.sqrt(t());e.push([-.99+Math.cos(b)*y,1.56+Math.sin(b)*y,0,2,0,0,0])}f(e,-.78,1.62,.62,3),f(e,-.78,1.555,.48),f(e,-.78,1.5,.55),f(e,.42,1.6,.68,5,0,{word:.68}),f(e,.42,1.4,.26),f(e,.78,1.4,.32,2,0,{word:.045,gap:.012}),f(e,.42,1.33,.2,2,1);let _=f(e,.78,1.33,.3,2,1,{word:.045,gap:.012});f(e,.42,1.26,.22),f(e,.78,1.26,.3,2,0,{word:.045,gap:.012}),h(.38,_+.04,1.33,.085,1),c.g1=[_+.08,1.33,0],f(e,-1.1,1.3,.62),f(e,-1.1,1.24,.5),f(e,-1.1,1.18,.56),f(e,-1.1,1.12,.36),f(e,-1.1,.95,1.2,3),f(e,-1.1,.86,2.18),f(e,-1.1,.8,1.55),f(e,-1.1,.64,.5,3),f(e,.36,.64,.14,3),f(e,.6,.64,.2,3),f(e,.9,.64,.2,3),u(e,-1.1,.585,1.1,.585,l*1.2,2);for(let v=0;v<5;v++){let b=.5-v*.095;f(e,-1.1,b,.55+t()*.55),f(e,.4,b,.05,2,0,{word:.05}),f(e,.6,b,.2,2,0,{word:.045,gap:.012}),f(e,.9,b,.2,2,0,{word:.045,gap:.012})}u(e,.36,0,1.1,0,l*1.2,2),f(e,.36,-.08,.36),f(e,.9,-.08,.2,2,0,{word:.045,gap:.012}),f(e,.36,-.15,.3),f(e,.9,-.15,.2,2,0,{word:.045,gap:.012}),f(e,.36,-.27,.26,3,2);let x=f(e,.8,-.27,.3,3,2,{word:.048,gap:.012});h(.32,x+.04,-.27,.095,2),c.g2=[x+.08,-.27,0],u(e,.36,-.33,1.1,-.33,l*1.3,2),u(e,.36,-.345,1.1,-.345,l*1.3,2),f(e,-1.1,-.52,.5,3),f(e,-1.1,-.6,.86),f(e,-1.1,-.68,.22,2,3);let m=f(e,-.82,-.68,1.02,2,3,{word:.05,gap:.03});h(-1.14,m+.04,-.68,.085,3),c.g3=[m+.08,-.68,0],f(e,-1.1,-.76,.6),f(e,-1.1,-.84,.8),f(e,-1.1,-1.02,2.12),f(e,-1.1,-1.08,1.38);let g=Math.round(300*s);for(let v=0;v<g;v++){let b=v/g;e.push([-1.05+b*.72+.03*Math.sin(b*40),-1.36+.07*Math.sin(b*9.5)+.035*Math.sin(b*27),0,2,0,0,0])}u(e,-1.1,-1.47,-.3,-1.47,l*1.3,2),f(e,-1.1,-1.53,.45),[[.2,.0085],[.17,.009],[.06,.012]].forEach(([v,b])=>{let y=Math.round(2*Math.PI*v/(b/s));for(let p=0;p<y;p++){if(t()<.16)continue;let M=p/y*Math.PI*2;e.push([.74+Math.cos(M)*v,-1.36+Math.sin(M)*v,0,2,0,0,0])}});let S=Math.round(200*s);for(let v=0;v<S;v++){let b=t()*Math.PI*2,y=.1+t()*.045;t()<.35||e.push([.74+Math.cos(b)*y,-1.36+Math.sin(b)*y,0,2,0,0,0])}f(e,-1.1,-1.72,.5,1),f(e,-.3,-1.72,.5,1),f(e,.5,-1.72,.5,1);let A=.008/s;for(let v=-1.5;v<=1.5;v+=A)e.push([v,0,.06,4,0,0,0]),t()<.6&&e.push([v+A*.5,0,.06,4,0,0,0]);return[[1,.16,.12,-.6],[2,.32,.24,-1.2]].forEach(([v,b,y,p])=>{let M=l*2.2,C=-i+b,E=i+b,L=-r+y,D=r+y;u(n,C,D,E,D,M,5,v,p),u(n,E,D,E,L,M,5,v,p);for(let B=0;B<22;B++){let I=D-.25-B*.14;f(n,E-.32,I,.26*t()+.06,1,v,{type:5,z:p,sp:o*1.6})}}),{primary:e,secondary:n,anchors:c}}function Cg(s,t,e){let n=[],i=[],r=e?3:1.95,a=e?1.72:1.9,o=e?[1.62,-.42]:[.62,-.78],l=e?.56:.5,c=[];for(let y=0;y<6;y++){let p=y/6*Math.PI*2+.35;c.push({x:o[0]+Math.cos(p)*l,y:o[1]+Math.sin(p)*l*.86,z:(t()-.5)*.3,r:.06+t()*.025,cl:1})}let u=e?26:17,f=0;for(;c.length-6<u&&f<8e3;){f++;let y=(t()*2-1)*r,p=(t()*2-1)*a;(y/r)**2+(p/a)**2>1||Math.hypot(y-o[0],p-o[1])<l+.42||c.some(M=>Math.hypot(M.x-y,M.y-p)<(e?.44:.4))||c.push({x:y,y:p,z:(t()-.5)*.9,r:.03+t()*.055,cl:0})}let h=(y,p)=>Math.hypot(c[y].x-c[p].x,c[y].y-c[p].y),d=[],_=new Set,x=(y,p,M)=>{let C=y<p?y+"-"+p:p+"-"+y;_.has(C)||(_.add(C),d.push({a:y,b:p,cl:M}))},m=c.map((y,p)=>p).filter(y=>!c[y].cl);m.forEach(y=>{m.filter(p=>p!==y).sort((p,M)=>h(y,p)-h(y,M)).slice(0,2).forEach(p=>x(y,p,0))});for(let y=0;y<6;y++)x(y,(y+1)%6,1);x(1,4,1),[0,3].forEach(y=>{let p=m.slice().sort((M,C)=>h(y,M)-h(y,C))[0];p!==void 0&&x(p,y,0)}),c.forEach(y=>{let p=Math.round(2*Math.PI*y.r/(.0095/Math.sqrt(s)));for(let M=0;M<p;M++){let C=M/p*Math.PI*2;n.push([y.x+Math.cos(C)*y.r,y.y+Math.sin(C)*y.r,y.z,1,0,y.cl,0])}for(let M=0;M<5;M++)n.push([y.x+(t()-.5)*.02,y.y+(t()-.5)*.02,y.z,1,0,y.cl,0])});let g=[],S=.019/Math.sqrt(s);d.forEach(y=>{let p=c[y.a],M=c[y.b],C=(p.x+M.x)/2,E=(p.y+M.y)/2,L=M.x-p.x,D=M.y-p.y,B=Math.hypot(L,D),I=-D/B,z=L/B,G=t()<.5?1:-1;y.cl&&(G=(C+I*.1-o[0])**2+(E+z*.1-o[1])**2>(C-o[0])**2+(E-o[1])**2?1:-1);let U=B*(y.cl?.2:.14)*G,Q=C+I*U,H=E+z*U,P=Math.max(6,Math.round(B*1.05/S)),j=(.18+t()*.3)*(y.cl||t()<.5?1:-1);for(let xt=1;xt<P;xt++){let At=xt/P,q=1-At,ot=q*q*p.x+2*q*At*Q+At*At*M.x,_t=q*q*p.y+2*q*At*H+At*At*M.y,St=q*p.z+At*M.z;Math.hypot(ot-p.x,_t-p.y)<p.r+.02||Math.hypot(ot-M.x,_t-M.y)<M.r+.02||n.push([ot,_t,St,2,At,y.cl,j])}if(y.cl&&Math.abs(y.b-y.a)===1||y.cl&&Math.abs(y.b-y.a)===5){let q=.25*p.x+.5*Q+.25*M.x,ot=.5*.5*p.y+2*.5*.5*H+.5*.5*M.y,_t=q-o[0],St=ot-o[1],ht=Math.hypot(_t,St)||1;g.push([q+_t/ht*.25,ot+St/ht*.17,0])}});let A=[],v=r*1.7,b=a*1.6;for(let y=0;y<150;y++){let p=(t()*2-1)*v,M=(t()*2-1)*b;A.push({x:p,y:M,z:-1.6+t()*1})}return A.forEach((y,p)=>{for(let E=0;E<4;E++)i.push([y.x+(t()-.5)*.03,y.y+(t()-.5)*.03,y.z,3,0,0,0]);let M=-1,C=1e9;if(A.forEach((E,L)=>{if(L===p)return;let D=Math.hypot(E.x-y.x,E.y-y.y);D<C&&(C=D,M=L)}),M>=0&&C<1.2){let E=A[M],L=Math.round(C/(.05/Math.sqrt(s)));for(let D=1;D<L;D++){let B=D/L;i.push([y.x+(E.x-y.x)*B,y.y+(E.y-y.y)*B,y.z+(E.z-y.z)*B,3,B,0,.15])}}}),{primary:n,secondary:i,anchors:{amounts:g,cluster:[o[0],o[1]-l-.22,0],clusterCenter:[o[0],o[1],0]}}}function Fa(s,t,e,n){let i=s.primary.slice();Id(i,e),i.length>t&&(i.length=t);let r=s.secondary.slice();Id(r,e);for(let a=0;i.length<t&&a<r.length;a++)i.push(r[a]);for(;i.length<t;)i.push([(e()*2-1)*n[0],(e()*2-1)*n[1],n[2]+e()*(n[3]-n[2]),0,e(),0,0]);return Id(i,e),i}function Id(s,t){for(let e=s.length-1;e>0;e--){let n=Math.floor(t()*(e+1)),i=s[e];s[e]=s[n],s[n]=i}return s}var wb=[[[2.5,12],[6,5.5],[9.2,3.6],[12,3.6]],[[12,3.6],[14.8,3.6],[18,5.5],[21.5,12]],[[21.5,12],[18,18.5],[14.8,20.4],[12,20.4]],[[12,20.4],[9.2,20.4],[6,18.5],[2.5,12]]];function Ld(s,t){let e=1-t,n=e*e*e,i=3*e*e*t,r=3*e*t*t,a=t*t*t;return[n*s[0][0]+i*s[1][0]+r*s[2][0]+a*s[3][0],n*s[0][1]+i*s[1][1]+r*s[2][1]+a*s[3][1]]}function Ab(s,t,e,n){let i=s/19,r=[],a=1.8*i;wb.forEach(l=>{let c=0,u=Ld(l,0);for(let h=1;h<=40;h++){let d=Ld(l,h/40);c+=Math.hypot(d[0]-u[0],d[1]-u[1]),u=d}let f=Math.max(8,Math.round(c*i/t));for(let h=0;h<f;h++){let[d,_]=Ld(l,h/f);for(let x=0;x<3;x++){let m=(x-1)*a*.36+(e()-.5)*a*.2,g=d-12,S=_-12,A=Math.hypot(g,S)||1;r.push([(d-12)*i+g/A*m,-(_-12)*i-S/A*m,0,n,0,0,0])}}});let o=3.1*i;for(let l=-o;l<=o;l+=t*1.15)for(let c=-o;c<=o;c+=t*1.15)l*l+c*c<=o*o&&r.push([l+(e()-.5)*t*.3,c+(e()-.5)*t*.3,0,n,0,0,0]);return r}function Rg(s,t){let e=[],n=Math.sqrt(s),i=a=>1.08+.035*Math.sin(5*a+1.3)+.02*Math.sin(11*a+.4)+.012*Math.sin(23*a),r=.03/n;for(let a=-1.15;a<=1.15;a+=r)for(let o=-1.15;o<=1.15;o+=r){let l=Math.hypot(a,o),c=Math.atan2(o,a);l<=i(c)&&e.push([a+(t()-.5)*r*.8,o+(t()-.5)*r*.8,-.01,4,l,0,0])}return[[.98,.0075],[.95,.0085],[.665,.0085],[.64,.009]].forEach(([a,o])=>{let l=Math.round(2*Math.PI*a/(o/s));for(let c=0;c<l;c++){let u=c/l*Math.PI*2,f=a+(t()-.5)*.006;e.push([Math.cos(u)*f,Math.sin(u)*f,0,1,a,0,0])}}),[0,Math.PI].forEach(a=>{let o=Math.round(2*Math.PI*.81/(.006/s));for(let l=0;l<o;l++){let c=l/o*Math.PI*2,u=.805+.085*Math.sin(16*c+a);e.push([Math.cos(c)*u,Math.sin(c)*u,.01,2,0,0,0])}}),Ab(1,.0065/s,t,3).forEach(a=>e.push(a)),{primary:e,secondary:[]}}function Pg(s,t,e){let n=[],i=Math.sqrt(s),r=.011/s,a=.0125/i,o={},l=(m,g,S,A,v=1,b=r)=>{let y=Math.hypot(S-m,A-g),p=Math.max(2,Math.round(y/b));for(let M=0;M<=p;M++){let C=M/p;n.push([m+(S-m)*C,g+(A-g)*C,0,v,0,0,0])}},c=(m,g,S,A,v,b=1)=>{let y=Math.max(3,Math.round(Math.abs(v-A)*S/r));for(let p=0;p<=y;p++){let M=A+(v-A)*p/y;n.push([m+Math.cos(M)*S,g+Math.sin(M)*S,0,b,0,0,0])}},u=(m,g,S,A,v,b=1)=>{l(m+v,A,S-v,A,b),l(S,A-v,S,g+v,b),l(S-v,g,m+v,g,b),l(m,g+v,m,A-v,b),c(S-v,A-v,v,0,Math.PI/2,b),c(m+v,A-v,v,Math.PI/2,Math.PI,b),c(m+v,g+v,v,Math.PI,Math.PI*1.5,b),c(S-v,g+v,v,Math.PI*1.5,Math.PI*2,b)},f=(m,g,S,A=1)=>c(m,g,S,0,Math.PI*2,A),h=(m,g,S,A=2,v=2,b={})=>{var M,C;let y=m,p=m+S;for(;y<p-.012;){let E=(M=b.word)!=null?M:.05+t()*.17;y+E>p&&(E=p-y);for(let L=y;L<=y+E;L+=a)for(let D=0;D<A;D++)n.push([L,g+(D-(A-1)/2)*a*.95,0,v,0,0,0]);y+=E+((C=b.gap)!=null?C:.032)}return p},d=(m,g,S,A=2,v=2)=>h(m-S,g,S,A,v,{word:.042,gap:.011}),_=(m,g,S,A,v=4,b=a*1.5)=>{for(let y=m;y<=S;y+=b)for(let p=g;p<=A;p+=b)n.push([y,p,-.01,v,0,0,0])},x=(m,g,S,A,v)=>{let b=[],y=.35;for(let M=0;M<v;M++)y+=(t()-.45)*.22,y=Math.min(.85,Math.max(.1,y)),b.push(y);b[Math.floor(v*.7)]=.95;let p=b.map((M,C)=>[m+(g-m)*C/(v-1),S+(A-S)*M]);for(let M=0;M<p.length-1;M++)l(p[M][0],p[M][1],p[M+1][0],p[M+1][1],5,r*.8);p.forEach(([M,C])=>f(M,C,.022,1));for(let M=0;M<p.length-1;M++)for(let C=p[M][0];C<p[M+1][0];C+=a*3){let E=(C-p[M][0])/(p[M+1][0]-p[M][0]),L=p[M][1]+(p[M+1][1]-p[M][1])*E;for(let D=S;D<L;D+=a*3)n.push([C,D,-.01,4,0,0,0])}};if(e){u(-2.6,-1.625,2.6,1.625,.12),l(-2.6,1.38,2.6,1.38),h(-2.45,1.5,.42,2),u(-.7,1.43,.75,1.57,.07),h(-.6,1.5,.45,1),f(2.4,1.5,.055),l(-1.72,1.38,-1.72,-1.625),[.55,.45,.6,.4,.5,.42].forEach((b,y)=>h(-2.42,1.18-y*.2,b,2)),_(-2.52,1.1,-1.82,1.26),f(-2.36,-1.42,.07),h(-2.22,-1.42,.36),h(-1.55,1.16,1.05,3),h(-1.55,1.05,.8),u(1.75,1.06,2.45,1.24,.09),h(1.9,1.15,.4);let v=(4-.24)/3;for(let b=0;b<3;b++){let y=-1.55+b*(v+.12);u(y,.36,y+v,.92,.06),h(y+.1,.8,.5),h(y+.1,.61,.56,5,2,{word:.085,gap:.02}),h(y+.1,.46,.4,1)}u(-1.55,-1.5,.62,.24,.06),h(-1.45,.12,.6,2),l(-1.45,-1.32,.52,-1.32),[-.97,-.62,-.27].forEach(b=>l(-1.45,b,.52,b,4,r*2.4)),x(-1.4,.48,-1.3,-.15,12),u(.74,-1.5,2.45,.24,.06),h(.84,.11,.42,2),h(1.52,.11,.26,2),d(2.35,.11,.28,2),l(.84,.02,2.35,.02,1,r*1.3);for(let b=0;b<7;b++){let y=-.12-b*.19,p=b===3,M=p?6:2;if(p){for(let C=.8;C<=2.4;C+=a*1.15)for(let E=y-.065;E<=y+.065;E+=a*1.15)n.push([C,E,-.01,3,0,0,0]);o.flag=[2.45,y,0]}h(.84,y,.38+t()*.18,2,M),h(1.52,y,.24,2,M),d(2.35,y,.3,2,M)}}else{u(-1,-1.95,1,1.95,.2),h(-.82,1.8,.22,1),d(.84,1.8,.26,1),h(-.82,1.58,.95,3),f(.78,1.6,.07),h(-.82,1.47,.6,1),[[-.88,-.04],[.04,.88]].forEach(([v,b])=>{u(v,.86,b,1.34,.06),h(v+.08,1.24,.42,1),h(v+.08,1.06,.5,5,2,{word:.08,gap:.02}),h(v+.08,.94,.32,1)}),u(-.88,-.1,.88,.76,.06),h(-.8,.66,.5,2),l(-.8,.02,.8,.02),x(-.78,.78,.04,.56,10);for(let v=0;v<6;v++){let b=-.28-v*.24,y=v===2,p=y?6:2;if(y){for(let M=-.9;M<=.9;M+=a*1.15)for(let C=b-.08;C<=b+.08;C+=a*1.15)n.push([M,C,-.01,3,0,0,0]);o.flag=[.94,b,0]}f(-.78,b,.05,y?6:1),h(-.66,b,.6+t()*.2,2,p),d(.84,b,.32,2,p)}l(-1,-1.68,1,-1.68),[-.6,-.2,.2,.6].forEach(v=>f(v,-1.82,.045))}return{primary:n,secondary:[],anchors:o}}var Ig=`
precision highp float;
uniform float uTime, uM, uOpen, uClose, uScan, uAlarm, uPx, uSize, uReduced, uInk, uPress, uFlag, uRows;
uniform vec3 uHi;
uniform vec2 uLook, uView;
uniform vec4 uGrid;
uniform vec4 uTA, uTB, uTC, uTE, uTF, uTG;
uniform mat3 uRA, uRB, uRC, uRF;
uniform vec3 cPaper, cInk, cAmber, cRed, cDust, cDustInk, cWax, cWaxHi;

attribute vec3 aDoc;
attribute vec3 aNet;
attribute vec4 aRnd;
attribute vec2 aEyeI;
attribute vec2 aDocI;
attribute vec4 aNetI;
attribute vec4 aSeal;
attribute vec4 aApp;

varying vec3 vCol;
varying float vA;

struct St { vec3 p; float a; float s; vec3 c; };

float ease(float t) { return t * t * (3.0 - 2.0 * t); }
vec3 baseC() { return mix(cPaper, cInk, uInk); }
vec3 dustC() { return mix(cDust, cDustInk, uInk); }

vec3 drift(vec3 p, float amt) {
  return p + amt * vec3(
    sin(uTime * 0.21 + aRnd.y * 6.283),
    cos(uTime * 0.17 + aRnd.z * 6.283),
    sin(uTime * 0.13 + aRnd.w * 6.283));
}

/* ---- 0 and 6: the eye ---- */
St eyeS(float open, vec4 T) {
  St o;
  vec3 e = position;
  float t = aEyeI.x;
  o.a = 0.0; o.s = 1.0; o.c = baseC();
  const float W = 2.0;
  const float H = 0.92;
  if (t < 0.5) {
    e = drift(e, 0.12);
    o.a = 0.2; o.s = 0.75; o.c = dustC();
  } else if (t < 1.5) {
    float closedY = -0.07 * (1.0 - (e.x / 2.3) * (e.x / 2.3));
    e.y = mix(closedY, e.y, open);
    o.a = 0.92 - aEyeI.y * 1.8;
  } else {
    e.xy += uLook;
    float lid = open * H * pow(max(0.0, 1.0 - (e.x / W) * (e.x / W)), 1.05);
    float vis = 1.0 - smoothstep(lid - 0.035, lid + 0.005, abs(e.y));
    if (t < 2.5) o.a = vis * (0.45 + 0.5 * smoothstep(0.3, 0.8, aEyeI.y));
    else if (t < 3.5) o.a = vis * 0.95;
    else o.a = vis * 0.9;
  }
  o.p = uRA * e * T.w + T.xyz;
  return o;
}

/* ---- 1: the document ---- */
St docS() {
  St o;
  vec3 b = aDoc;
  float t = aDocI.x, g = aDocI.y;
  o.a = 0.0; o.s = 1.0; o.c = baseC();
  float scanY = mix(1.95, -1.95, uScan);
  float hiRaw = g < 0.5 ? 0.0 : (g < 1.5 ? uHi.x : (g < 2.5 ? uHi.y : uHi.z));
  float u = (b.x + 1.3) / 2.6;
  float hi = clamp(hiRaw * 1.8 - u * 0.8, 0.0, 1.0);
  if (t < 0.5) {
    b = drift(b, 0.1);
    o.a = 0.12; o.s = 0.7; o.c = dustC();
  } else if (t < 1.5) {
    o.a = 0.55;
  } else if (t < 2.5) {
    float scanned = step(scanY, b.y) * step(0.001, uScan);
    o.a = 0.5 + 0.3 * scanned;
    o.c = mix(o.c, cAmber, hi * step(0.5, g));
    o.a = mix(o.a, 1.0, hi * step(0.5, g));
  } else if (t < 3.5) {
    o.c = cAmber; o.a = 0.34 * hi; o.s = 1.3;
  } else if (t < 4.5) {
    b.y = scanY + (aRnd.y - 0.5) * 0.018;
    float on = smoothstep(0.0, 0.03, uScan) * (1.0 - smoothstep(0.97, 1.0, uScan));
    o.a = 0.95 * on; o.s = 1.15;
  } else {
    o.a = g < 1.5 ? 0.24 : 0.13; o.s = 0.85;
  }
  float near = exp(-pow((b.y - scanY) * 13.0, 2.0)) * step(1.5, t) * step(t, 2.5) * step(0.001, uScan) * (1.0 - step(0.999, uScan));
  o.a = min(1.0, o.a + near * 0.45);
  o.s += near * 0.5;
  o.p = uRB * b * uTB.w + uTB.xyz;
  return o;
}

/* ---- 2: the money ---- */
St netS() {
  St o;
  vec3 c = aNet;
  float t = aNetI.x, tt = aNetI.y, cl = aNetI.z, sp = aNetI.w;
  o.a = 0.0; o.s = 1.0; o.c = baseC();
  if (t < 0.5) {
    c = drift(c, 0.12);
    o.a = 0.12; o.s = 0.7; o.c = dustC();
  } else if (t < 1.5) {
    o.a = 0.9; o.s = 1.1;
  } else if (t < 2.5) {
    float t2 = sp >= 0.0 ? tt : 1.0 - tt;
    float speed = abs(sp) * (1.0 + 2.2 * uAlarm * cl);
    float ph = fract(t2 * 1.6 - uTime * speed);
    float pulse = pow(ph, 7.0);
    o.a = 0.32 + 0.68 * pulse;
    o.s = 0.95 + 0.9 * pulse;
  } else {
    o.a = 0.16; o.s = 0.75; o.c = dustC();
  }
  float alarmPulse = 0.5 + 0.5 * sin(uTime * 5.0);
  o.c = mix(o.c, cRed, uAlarm * cl);
  o.s *= 1.0 + 0.3 * uAlarm * cl * alarmPulse;
  o.a = mix(o.a, max(o.a, 0.85), uAlarm * cl * step(0.5, t));
  o.a *= 1.0 - 0.5 * uAlarm * (1.0 - cl);
  o.p = uRC * c * uTC.w + uTC.xyz;
  return o;
}

/* ---- 3: dotted paper for the case files ---- */
St gridS() {
  St o;
  float cols = uGrid.x, rows = uGrid.y, sp = uGrid.z;
  float id = float(gl_VertexID);
  float cells = cols * rows;
  float cell = mod(id, cells);
  float col = mod(cell, cols);
  float row = floor(cell / cols);
  o.p = vec3((col - (cols - 1.0) * 0.5) * sp, (row - (rows - 1.0) * 0.5) * sp, 0.0);
  o.a = id < cells ? 0.34 : 0.0;
  o.s = 0.85;
  o.c = baseC();
  return o;
}

/* ---- 4: the seal ---- */
St sealS() {
  St o;
  float t = aSeal.w;
  if (t < 0.5) {
    o = gridS();
    o.a = 0.0;
    return o;
  }
  vec3 q = aSeal.xyz;
  float pr = clamp(uPress, 0.0, 1.0);
  float sc = mix(1.8, 1.0, pr * pr);
  float ang = (1.0 - pr) * 0.55;
  float bump = smoothstep(0.84, 0.95, pr) * (1.0 - smoothstep(0.95, 1.0, pr));
  q.xy *= 1.0 + 0.06 * bump;
  float ca = cos(ang), sa = sin(ang);
  q.xy = vec2(ca * q.x - sa * q.y, sa * q.x + ca * q.y);
  o.p = q * sc * uTE.w + uTE.xyz;
  o.p.z += (1.0 - pr) * 1.2;
  o.s = 1.0;
  if (t < 1.5) { o.c = cWaxHi; o.a = 0.9; o.s = 0.9; }
  else if (t < 2.5) { o.c = cWaxHi; o.a = 0.85; o.s = 0.85; }
  else if (t < 3.5) { o.c = cWaxHi; o.a = 1.0; o.s = 0.95; }
  else { o.c = cWax * (0.88 + 0.24 * aRnd.y); o.a = 0.92; o.s = 2.2; }
  o.a *= mix(0.45, 1.0, pr);
  return o;
}

/* ---- 5: the software ---- */
St appS() {
  St o;
  float t = aApp.w;
  if (t < 0.5) {
    o = gridS();
    o.a = 0.0;
    return o;
  }
  o.p = uRF * aApp.xyz * uTF.w + uTF.xyz;
  o.c = baseC();
  o.s = 1.0;
  if (t < 1.5) { o.a = 0.78; }
  else if (t < 2.5) { o.a = 0.68; }
  else if (t < 3.5) { o.c = cAmber; o.a = 0.42 * uFlag; o.s = 1.3; }
  else if (t < 4.5) { o.a = 0.16; o.s = 0.9; }
  else if (t < 5.5) { o.a = 0.92; o.s = 1.1; }
  else { o.c = mix(o.c, cAmber, uFlag); o.a = mix(0.68, 1.0, uFlag); }
  return o;
}

St stateFor(int k) {
  if (k == 0) return eyeS(uOpen, uTA);
  if (k == 1) return docS();
  if (k == 2) return netS();
  if (k == 3) return gridS();
  if (k == 4) return sealS();
  if (k == 5) return appS();
  return eyeS(1.0 - uClose, uTG);
}

void main() {
  float M = clamp(uM, 0.0, 6.0);
  float segF = min(floor(M), 5.0);
  int seg = int(segF);
  float local = M - segF;
  St A = stateFor(seg);
  St B = stateFor(seg + 1);

  vec3 p;
  float a, s;
  vec3 col;
  if (uReduced > 0.5) {
    bool first = local < 0.5;
    float w = first ? 1.0 - smoothstep(0.35, 0.5, local) : smoothstep(0.5, 0.65, local);
    p = first ? A.p : B.p;
    a = (first ? A.a : B.a) * w;
    s = first ? A.s : B.s;
    col = first ? A.c : B.c;
  } else {
    float dMax = seg < 2 ? 0.14 : 0.3;
    float d = aRnd.x * dMax;
    if (seg == 2) d = (0.5 - 0.5 * clamp(B.p.y / uView.y, -1.0, 1.0)) * dMax;
    if (seg == 4) d = (0.5 - 0.5 * clamp((B.p.y - uTF.y) / max(0.001, uTF.w * 2.0), -1.0, 1.0)) * dMax;
    float t = clamp((local - d) / (1.0 - dMax), 0.0, 1.0);
    float k = ease(t);
    float bell = sin(3.14159 * t);
    if (seg < 2) {
      vec3 mid;
      if (seg == 0) {
        // the whole screen becomes lines of text for a moment
        float rows1 = floor(uRows * 0.8);
        float row = floor(aRnd.z * rows1);
        float words = 19.0;
        float wd = floor(aRnd.y * words);
        float f = fract(aRnd.y * words);
        float cellW = uView.x * 2.1 / words;
        float len = 0.45 + 0.5 * fract(sin(row * 91.17 + wd * 17.31) * 43758.5453);
        float lineEnd = 0.55 + 0.45 * fract(sin(row * 7.31) * 1531.7);
        float x = -uView.x * 1.05 + wd * cellW + cellW * len * f;
        float left = -uView.x * 1.05;
        float span = uView.x * 2.1 * lineEnd;
        x = left + mod(x - left, span);
        mid = vec3(x, mix(-0.92, 0.74, row / (rows1 - 1.0)) * uView.y, 0.0);
      } else {
        // a ledger: rows of amounts in columns
        float rows2 = floor(uRows * 0.62);
        float row = floor(aRnd.z * rows2);
        float colI = floor(aRnd.y * 6.0);
        float f = fract(aRnd.y * 6.0);
        float cellW = uView.x * 2.1 / 6.0;
        float len = 0.25 + 0.6 * fract(sin(row * 12.9898 + colI * 78.233) * 43758.5453);
        float x0 = -uView.x * 1.05 + colI * cellW;
        mid = vec3(x0 + cellW * (0.9 - len * f), mix(-0.92, 0.74, row / (rows2 - 1.0)) * uView.y, 0.0);
      }
      if (t < 0.4) p = mix(A.p, mid, ease(t / 0.4));
      else if (t < 0.6) p = mid;
      else p = mix(mid, B.p, ease((t - 0.6) / 0.4));
      p.x += sin(aRnd.w * 12.57 + uTime * 0.6) * 0.05 * bell;
      a = max(mix(A.a, B.a, k), 0.5 * bell);
      col = mix(mix(A.c, B.c, k), baseC(), 0.6 * bell * (1.0 - step(0.5, uAlarm)));
    } else {
      p = mix(A.p, B.p, k);
      vec3 sw = vec3(
        sin(aRnd.y * 12.57 + uTime * 0.7 + p.y * 0.5),
        cos(aRnd.z * 12.57 + uTime * 0.6 + p.x * 0.4),
        sin(aRnd.w * 12.57 + uTime * 0.5) * 1.4);
      p += sw * bell * (0.12 + 0.5 * aRnd.w);
      a = max(mix(A.a, B.a, k), 0.2 * bell * step(0.001, A.a + B.a));
      col = mix(A.c, B.c, clamp(t * 2.2, 0.0, 1.0));
    }
    s = mix(A.s, B.s, k);
  }

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * s * uPx * (12.0 / -mv.z);
  vCol = col;
  vA = a;
}
`,Lg=`
precision highp float;
varying vec3 vCol;
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  float m = smoothstep(0.5, 0.3, r);
  float alpha = m * vA;
  if (alpha < 0.008) discard;
  gl_FragColor = vec4(vCol, alpha);
}
`;ti.registerPlugin($t);$t.config({ignoreMobileResize:!0});var rs=(s,t=document)=>t.querySelector(s),or=(s,t=document)=>[...t.querySelectorAll(s)],ar=document.documentElement,Pe=matchMedia("(prefers-reduced-motion: reduce)").matches,Gg=matchMedia("(pointer: coarse)").matches;Pe&&ar.classList.add("is-reduced");var Lt={heroOut:.6,morph1:.7,docIn:1.9,scan:2.5,scanDur:3,docOut:6,morph2:6.2,netIn:7.4,alarm:8.3,netOut:9.8,flip:10,casesIn:10.9,track:11.3,trackEnd:15,casesOut:15.3,morph4:15.4,priceIn:15.7,press:16.8,pressDur:.55,priceOut:18.2,morph5:18.4,appIn:19.4,flag:20,appOut:21,unflip:21.1,morph6:21.2,total:23},Wu=[0,1.6,6.2,10,15.35,18.3,21.1,Lt.total],Eb=["The eye","The document","The money","The case files","The price","The software","The answer"],me={m:0,open:Pe?1:0,close:0,scan:0,h1:0,h2:0,h3:0,alarm:0,ink:0,press:0,flag:0},ni={x:0,y:0,tx:0,ty:0};function Hg(){let s=innerWidth,t=innerHeight;return s<760||s/t<.95?"stacked":s>=1180&&s/t>=1.2?"wide":"medium"}var rn=Hg();ar.dataset.mode=rn;var Cb=rs("#gl"),ii=null;try{ii=new Qc({canvas:Cb,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{ii=null}ii||ar.classList.add("no-gl");var il=new On(30,innerWidth/innerHeight,.1,100);il.position.z=12;var Wg=new Qa,Yu,Dg,nl,Cs={},Ng=(navigator.hardwareConcurrency||8)<=4,Ua=()=>new Le(0,0,0,1),Hi={uTime:{value:0},uM:{value:0},uOpen:{value:me.open},uClose:{value:0},uScan:{value:0},uHi:{value:new Y},uAlarm:{value:0},uInk:{value:0},uPress:{value:0},uFlag:{value:0},uLook:{value:new ae},uPx:{value:1},uSize:{value:2.2},uView:{value:new ae(5,3)},uRows:{value:50},uGrid:{value:new Le(40,24,.2,0)},uReduced:{value:Pe?1:0},uTA:{value:Ua()},uTB:{value:Ua()},uTC:{value:Ua()},uTE:{value:Ua()},uTF:{value:Ua()},uTG:{value:Ua()},uRA:{value:new kt},uRB:{value:new kt},uRC:{value:new kt},uRF:{value:new kt},cPaper:{value:new Y(.925,.894,.824)},cInk:{value:new Y(.09,.125,.212)},cAmber:{value:new Y(.941,.655,.227)},cRed:{value:new Y(.886,.333,.247)},cDust:{value:new Y(.56,.6,.7)},cDustInk:{value:new Y(.45,.47,.55)},cWax:{value:new Y(.62,.16,.12)},cWaxHi:{value:new Y(.98,.8,.72)}};function Rb(){return rn==="stacked"?Ng?5200:6800:Ng?9e3:14e3}function Xg(){let s=Rb(),t=s/14e3,e=wg(7),n=rn!=="stacked",i=Fa(Ag(t,e),s,e,[8.5,5.5,-4,1.2]),r=Eg(t,e),a=Fa(r,s,e,[5.5,4.2,-5,-.5]),o=Cg(t,e,n),l=Fa(o,s,e,[6,4.4,-5,-.8]),c=[0,4,1,2,3],u=Fa(Rg(t,e),s,e,[1,1,0,0]).sort((p,M)=>c.indexOf(p[3])-c.indexOf(M[3])),f=Pg(t,e,n),h=Fa(f,s,e,[1,1,0,0]);Cs={doc:r.anchors,net:o.anchors,app:f.anchors};let d=new Float32Array(s*3),_=new Float32Array(s*3),x=new Float32Array(s*3),m=new Float32Array(s*4),g=new Float32Array(s*2),S=new Float32Array(s*2),A=new Float32Array(s*4),v=new Float32Array(s*4),b=new Float32Array(s*4);for(let p=0;p<s;p++){let M=i[p],C=a[p],E=l[p],L=u[p],D=h[p];d.set([M[0],M[1],M[2]],p*3),_.set([C[0],C[1],C[2]],p*3),x.set([E[0],E[1],E[2]],p*3),g.set([M[3],M[4]],p*2),S.set([C[3],C[4]],p*2),A.set([E[3],E[4],E[5],E[6]],p*4),v.set([L[0],L[1],L[2],L[3]],p*4),b.set([D[0],D[1],D[2],D[3]],p*4),m.set([e(),e(),e(),e()],p*4)}let y=new Ui;return y.setAttribute("position",new en(d,3)),y.setAttribute("aDoc",new en(_,3)),y.setAttribute("aNet",new en(x,3)),y.setAttribute("aRnd",new en(m,4)),y.setAttribute("aEyeI",new en(g,2)),y.setAttribute("aDocI",new en(S,2)),y.setAttribute("aNetI",new en(A,4)),y.setAttribute("aSeal",new en(v,4)),y.setAttribute("aApp",new en(b,4)),y}function Pb(){ii&&(Dg=new Ti({uniforms:Hi,vertexShader:Ig,fragmentShader:Lg,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ws}),nl=Xg(),Yu=new no(nl,Dg),Yu.frustumCulled=!1,Wg.add(Yu),ii.outputColorSpace=mr,ii.setClearColor(0,0))}var Yt={eye:{x:0,y:0,s:1,rx:0,ry:0},doc:{x:0,y:0,s:1,rx:0,ry:0},net:{x:0,y:0,s:1,rx:0,ry:0},seal:{x:0,y:0,s:1},app:{x:0,y:0,s:1,rx:0,ry:0},end:{x:0,y:0,s:1}},le=innerWidth,Te=innerHeight,Sn=1,Nd=[le/2,Te/2],Fd=[le/2,Te/3];function qg(){le=innerWidth,Te=innerHeight,il.aspect=le/Te,il.updateProjectionMatrix(),Sn=24*Math.tan(15*Math.PI/180)/Te;let t=(l,c)=>[(l-le/2)*Sn,(Te/2-c)*Sn],e=2*(Dd.W+.3),n=2*rr.PH,i=2*rr.PW;Hi.uView.value.set(le/2*Sn,Te/2*Sn),Hi.uRows.value=Math.max(18,Math.round(Te/17));let r=rn==="stacked"?26:30;if(Hi.uGrid.value.set(Math.ceil(le/r)+1,Math.ceil(Te/r)+1,r*Sn,0),rn==="stacked"){let c=Te*.5,u=(96+c)/2;Nd=[le/2,u];let[f,h]=t(le/2,u);Yt.eye={x:f,y:h,s:Math.min(le*.94,(c-96)*2.2)*Sn/e,rx:0,ry:0};let d=Math.min(c-96-10,le*.7*(n/i));Yt.doc={x:f,y:h+.02,s:d*Sn/n,rx:.05,ry:-.12};let _=Math.min(le*.96,(c-96)*1.02);Yt.net={x:f,y:h,s:_*Sn/4,rx:0,ry:0};let x=Math.min(c-96-6,le*.62*1.95);Yt.app={x:f,y:h,s:x*Sn/3.9,rx:0,ry:.1},Fd=[le/2,Te*.3];let[m,g]=t(le/2,Te*.3);Yt.end={x:m,y:g,s:le*.86*Sn/e}}else{let l=le*.735,c=Math.min(le*(rn==="wide"?.46:.44),Te*1);Nd=[l,Te*.47];let[u,f]=t(l,Te*.47);Yt.eye={x:u,y:f,s:c*Sn/e,rx:0,ry:0};let h=Math.min(Math.max(le*.38,420),560),d=rn==="wide"?le-330:le-48,_=d-h,x=Math.min(Te*.8,_*.92*(n/i)),[m,g]=t((h+d)/2,Te*.53);Yt.doc={x:m,y:g,s:x*Sn/n,rx:.06,ry:-.2};let S=Math.min(le-h-40,Te*.8*1.75),[A,v]=t(h+(le-h-20)/2,Te*.52);Yt.net={x:A,y:v,s:S*Sn/6.2,rx:0,ry:0};let b=Math.min(68,Math.max(20,le*.046)),y=rn==="medium"?Math.max(h,b+Math.min(400,le*.4)+34):h,p=Math.min(le-y-70,Te*.74*1.6),[M,C]=t(y+10+(le-y-40)/2,Te*.53);Yt.app={x:M,y:C,s:p*Sn/5.2,rx:.05,ry:.16},Fd=[le/2,Te*.34];let[E,L]=t(le/2,Te*.34);Yt.end={x:E,y:L,s:Math.min(le*.44,Te*.85)*Sn/e}}let a=rs(".price-wrap"),o=rs(".amt");if(a&&o){let l=a.getBoundingClientRect(),c=o.getBoundingClientRect(),u=rn==="wide"?100:rn==="medium"?88:62,f=l.right-u*.32,h=c.top+u*.9,[d,_]=t(f,h);Yt.seal={x:d,y:_,s:u*Sn/1.1}}if(ii){let l=Math.min(devicePixelRatio||1,rn==="stacked"?1.6:1.75);ii.setPixelRatio(l),ii.setSize(le,Te,!1),Hi.uPx.value=l,Hi.uSize.value=rn==="stacked"?2:2.3}Yg()}function Xu(s,t,e){let n=Math.cos(s),i=Math.sin(s),r=Math.cos(t),a=Math.sin(t);return e.set(r,a*i,a*n,0,n,-i,-a,r*i,r*n),e}function Yg(){let s=Hi;s.uTA.value.set(Yt.eye.x,Yt.eye.y,0,Yt.eye.s),s.uTB.value.set(Yt.doc.x,Yt.doc.y,0,Yt.doc.s),s.uTC.value.set(Yt.net.x,Yt.net.y,0,Yt.net.s),s.uTE.value.set(Yt.seal.x,Yt.seal.y,0,Yt.seal.s),s.uTF.value.set(Yt.app.x,Yt.app.y,0,Yt.app.s),s.uTG.value.set(Yt.end.x,Yt.end.y,0,Yt.end.s),Xu(Yt.eye.rx,Yt.eye.ry,s.uRA.value),Xu(Yt.doc.rx,Yt.doc.ry,s.uRB.value),Xu(Yt.net.rx,Yt.net.ry,s.uRC.value),Xu(Yt.app.rx,Yt.app.ry,s.uRF.value)}var Oa=new Y;function Ba(s,t,e){let n=Yt[s];return Oa.set(t[0],t[1],t[2]).applyMatrix3(e).multiplyScalar(n.s),Oa.x+=n.x,Oa.y+=n.y,Oa.project(il),[(Oa.x+1)*.5*le,(1-Oa.y)*.5*Te]}var Ib=or(".pin[data-g]"),Zg=or(".side-note"),Ud=or(".connector"),Lb=or(".amount"),Db=rs(".flag-tag"),Nb=rs(".app-pin"),Od=[];function Jg(){Od=Zg.map(s=>s.firstElementChild.offsetHeight||80)}function Fb(){if(!ii||!Cs.doc)return;let s=me.m,t=Hi.uRB.value,e=Hi.uRC.value,n=Hi.uRF.value;if(s>.5&&s<2){let i=["g1","g2","g3"].map(r=>Ba("doc",Cs.doc[r],t));if(Ib.forEach((r,a)=>{r.style.transform=`translate3d(${i[a][0].toFixed(1)}px,${i[a][1].toFixed(1)}px,0)`}),rn==="wide"){let a=Math.max(Ba("doc",[rr.PW,rr.PH,0],t)[0],Ba("doc",[rr.PW,-rr.PH,0],t)[0])+46,o=-1e9;Zg.forEach((l,c)=>{let u=i[c][1]-14;u<o+18&&(u=o+18),u=Math.min(u,Te-Od[c]-24),o=u+Od[c],l.style.transform=`translate3d(${a.toFixed(1)}px,${u.toFixed(1)}px,0)`;let f=i[c][0]+13,h=i[c][1],d=a-6,_=u+14;Ud[c].style.width=`${Math.max(0,Math.hypot(d-f,_-h)).toFixed(1)}px`,Ud[c].style.transform=`translate3d(${f.toFixed(1)}px,${h.toFixed(1)}px,0) rotate(${Math.atan2(_-h,d-f)}rad)`})}}if(s>1.5&&s<3){Lb.forEach((a,o)=>{let l=Cs.net.amounts[o];if(!l){a.style.display="none";return}let[c,u]=Ba("net",l,e);a.style.transform=`translate3d(${c.toFixed(1)}px,${u.toFixed(1)}px,0)`});let[i,r]=Ba("net",Cs.net.cluster,e);Db.style.transform=`translate3d(${i.toFixed(1)}px,${r.toFixed(1)}px,0)`}if(s>4.5&&s<6&&Cs.app.flag){let[i,r]=Ba("app",Cs.app.flag,n);Nb.style.transform=`translate3d(${i.toFixed(1)}px,${r.toFixed(1)}px,0)`}}var Fg=or(".count").map(s=>({el:s,to:parseFloat(s.dataset.to),pre:s.dataset.pre||"",suf:s.dataset.suf||"",v:{n:0}})),Ub=s=>Math.round(s).toLocaleString("en-GB");function Ug(s){s.el.innerHTML=(s.pre?`<span class="sym">${s.pre}</span>`:"")+Ub(s.v.n)+(s.suf?`<span class="sym">${s.suf}</span>`:"")}var Bt,qu,$g=rs("#story"),el=rs(".case-track");function Kg(){let s=rn==="stacked"?58:70;$g.style.height=`calc(${(Lt.total*s).toFixed(0)}vh + 100vh)`}function Ob(s){return Lt.scan+(1.95-s)/3.9*Lt.scanDur}function Qg(){Bt&&(Bt.scrollTrigger.kill(),Bt.kill()),qu&&(qu.scrollTrigger.kill(),qu.kill());let s=[".p-doc .panel-in",".p-net .panel-in",".p-cases .panel-in",".p-price .panel-in",".p-app .panel-in",".pin .badge",".side-note .note",".connector",".notes-inline li",".amount span",".flag-tag span",".alarm",".case-track",".price-card",".app-pin .badge",".app-note"];ti.set(s,{autoAlpha:0}),ti.set(".p-hero .panel-in",{autoAlpha:1,y:0}),ti.set(".sheet",{rotationX:84,transformPerspective:1500,transformOrigin:"50% 100%",autoAlpha:0}),ti.set(".sheet-shade",{opacity:.55}),Fg.forEach(u=>{u.v.n=0,Ug(u)});let t=Pe?0:26,e=(u,f,h=.5)=>Bt.fromTo(u,{autoAlpha:0,y:t},{autoAlpha:1,y:0,duration:h},f),n=(u,f,h=.45)=>Bt.to(u,{autoAlpha:0,duration:h},f);Bt=ti.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:$g,start:"top top",end:"bottom bottom",scrub:Pe?!0:.9,onUpdate:u=>Bd(u.progress*Lt.total,0)}}),Bt.to(".p-hero .panel-in",{autoAlpha:0,y:-t,duration:.45},Lt.heroOut),Bt.to(".scroll-cue",{autoAlpha:0,duration:.3},Lt.heroOut-.2),Bt.to(me,{m:1,duration:1.6,ease:"power1.inOut"},Lt.morph1),e(".p-doc .panel-in",Lt.docIn),Bt.to(me,{scan:1,duration:Lt.scanDur},Lt.scan),[["g1","h1"],["g2","h2"],["g3","h3"]].forEach(([u,f],h)=>{let d=Ob(Cs.doc?Cs.doc[u][1]:1-h);Bt.to(me,{[f]:1,duration:.35},d),Bt.fromTo(`.pin[data-g="${h+1}"] .badge`,{autoAlpha:0,scale:Pe?1:.4},{autoAlpha:1,scale:1,duration:.2},d+.1),Bt.fromTo(`.side-note[data-g="${h+1}"] .note`,{autoAlpha:0,x:Pe?0:-12},{autoAlpha:1,x:0,duration:.3},d+.18),Bt.fromTo(Ud[h],{autoAlpha:0},{autoAlpha:.75,duration:.25},d+.15),Bt.fromTo(`.notes-inline li[data-g="${h+1}"]`,{autoAlpha:0,y:Pe?0:10},{autoAlpha:1,y:0,duration:.3},d+.18),h===0&&rn==="stacked"&&Bt.to(".p-doc .collapse",{autoAlpha:0,height:0,marginBottom:0,duration:.3},d)}),n([".p-doc .panel-in",".pin .badge",".side-note .note",".connector"],Lt.docOut),Bt.to(me,{m:2,duration:1.6,ease:"power1.inOut"},Lt.morph2),e(".p-net .panel-in",Lt.netIn),Bt.to(me,{alarm:1,duration:.7},Lt.alarm),Bt.fromTo(".flag-tag span",{autoAlpha:0},{autoAlpha:1,duration:.3},Lt.alarm+.35),Bt.fromTo(".amount span",{autoAlpha:0},{autoAlpha:1,duration:.3,stagger:.06},Lt.alarm+.25),Bt.fromTo(".alarm",{autoAlpha:0,y:Pe?0:10},{autoAlpha:1,y:0,duration:.35},Lt.alarm+.45),rn==="stacked"&&Bt.to(".p-net .collapse",{autoAlpha:0,height:0,marginBottom:0,duration:.3},Lt.alarm+.2),n([".p-net .panel-in",".amount span",".flag-tag span"],Lt.netOut),Bt.set(".sheet",{autoAlpha:1},Lt.flip),Bt.to(".sheet",{rotationX:0,duration:1,ease:Pe?"none":"power2.inOut"},Lt.flip),Bt.to(".sheet-shade",{opacity:0,duration:1},Lt.flip),Bt.to(me,{ink:1,duration:.7},Lt.flip+.25),Bt.to(".vignette",{opacity:0,duration:.6},Lt.flip+.3),Bt.to(me,{m:3,duration:1.2,ease:"power1.inOut"},Lt.flip),e(".p-cases .panel-in",Lt.casesIn);let i=or(".case"),r=i[0].offsetWidth||380,a=parseFloat(getComputedStyle(el).columnGap||getComputedStyle(el).gap)||28,o=le+10,l=u=>le/2-(u*(r+a)+r/2),c=l(i.length-1);Bt.set(el,{x:o},Lt.casesIn-.01),Bt.to(el,{autoAlpha:1,duration:.2},Lt.track-.2),Bt.to(el,{x:c,duration:Lt.trackEnd-Lt.track,ease:"none"},Lt.track),i.forEach((u,f)=>{let h=Lt.track+(o-l(f))/(o-c)*(Lt.trackEnd-Lt.track);Fg.filter(d=>u.contains(d.el)).forEach(d=>{Bt.to(d.v,{n:d.to,duration:.7,ease:"power1.out",onUpdate:()=>Ug(d)},h-.55)})}),n([".p-cases .panel-in",".case-track"],Lt.casesOut),Bt.to(me,{m:4,duration:1.2,ease:"power1.inOut"},Lt.morph4),e(".p-price .panel-in",Lt.priceIn),Bt.fromTo(".price-card",{autoAlpha:0,y:Pe?0:30,rotation:Pe?0:-2},{autoAlpha:1,y:0,rotation:0,duration:.6},Lt.priceIn+.1),Bt.to(me,{press:1,duration:Lt.pressDur,ease:"power2.in"},Lt.press),Pe||Bt.to(".price-card",{keyframes:{x:[0,-4,3,-2,0],y:[0,2,-1,0,0]},duration:.2},Lt.press+Lt.pressDur-.03),n([".p-price .panel-in",".price-card"],Lt.priceOut),Bt.to(me,{m:5,duration:1.4,ease:"power1.inOut"},Lt.morph5),e(".p-app .panel-in",Lt.appIn),Bt.to(me,{flag:1,duration:.4},Lt.flag),Bt.fromTo(".app-pin .badge",{autoAlpha:0,scale:Pe?1:.4},{autoAlpha:1,scale:1,duration:.2},Lt.flag+.1),Bt.fromTo(".app-note",{autoAlpha:0,y:Pe?0:10},{autoAlpha:1,y:0,duration:.3},Lt.flag+.2),rn==="stacked"&&Bt.to(".p-app .collapse",{autoAlpha:0,height:0,marginBottom:0,duration:.3},Lt.flag),n([".p-app .panel-in",".app-pin .badge"],Lt.appOut),Bt.to(".sheet",{rotationX:84,duration:.9,ease:Pe?"none":"power2.inOut"},Lt.unflip),Bt.to(".sheet-shade",{opacity:.55,duration:.9},Lt.unflip),Bt.set(".sheet",{autoAlpha:0},Lt.unflip+.9),Bt.to(me,{ink:0,duration:.6},Lt.unflip+.1),Bt.to(".vignette",{opacity:1,duration:.6},Lt.unflip+.3),Bt.to(me,{m:6,duration:1.4,ease:"power1.inOut"},Lt.morph6),Bt.set({},{},Lt.total),qu=ti.fromTo(me,{close:0},{close:1,ease:"none",scrollTrigger:{trigger:"#talk",start:"top bottom",end:"bottom bottom",scrub:Pe?!0:.6,onUpdate:u=>Bd(Lt.total,u.progress)}})}var Bb=rs(".chapter-num"),zb=rs(".chapter-name"),kb=or(".progress i"),Og=-1,Bg=0,zg=0;function Bd(s,t){s!==void 0&&(Bg=s),t!==void 0&&(zg=t),s=Bg;for(let n=0;n<7;n++){let i=(s-Wu[n])/(Wu[n+1]-Wu[n]);n===6&&(i=i*.6+zg*.4),kb[n].style.transform=`scaleX(${Math.min(1,Math.max(0,i)).toFixed(3)})`}let e=0;for(let n=0;n<7;n++)s>=Wu[n]&&(e=n);e!==Og&&(Og=e,Bb.textContent=`${e+1} / 7`,zb.textContent=Eb[e]),ar.classList.toggle("is-paper",s>Lt.flip+.8&&s<Lt.unflip+.45),ar.classList.toggle("is-seal",s>Lt.morph4+.25&&s<Lt.priceOut+.45)}function Vb(s){if(!Bt)return;let t=Bt.scrollTrigger;window.scrollTo({top:t.start+(t.end-t.start)*(s/Bt.duration()),behavior:Pe?"auto":"smooth"})}window.__pythiaGoto=s=>{let t=Bt.scrollTrigger;window.scrollTo({top:t.start+(t.end-t.start)*(s/Bt.duration()),behavior:"auto"})};or("[data-goto]").forEach(s=>{s.addEventListener("click",t=>{let e=parseFloat(s.dataset.goto);Number.isNaN(e)||(t.preventDefault(),Vb(e))})});addEventListener("pointermove",s=>{if(Gg)return;let[t,e]=me.m>5.5?Fd:Nd;ni.tx=Math.max(-1,Math.min(1,(s.clientX-t)/(le*.4))),ni.ty=Math.max(-1,Math.min(1,(s.clientY-e)/(Te*.45)))},{passive:!0});function Gb(){if(Pe){me.open=1;return}ti.to(me,{open:1,duration:2,ease:"power3.out",delay:.35}),ti.from(".p-hero .reveal",{autoAlpha:0,y:18,duration:1,ease:"power3.out",stagger:.12,delay:.9});let s=()=>{me.m<.05&&!document.hidden&&ti.to(me,{open:.06,duration:.09,ease:"power2.in",yoyo:!0,repeat:1}),ti.delayedCall(4.5+Math.random()*4,s)};ti.delayedCall(5,s)}var zd=performance.now(),za=0,Zu=!0;function kd(s){if(!Zu)return;let t=Math.min(.05,(s-zd)/1e3);zd=s,Pe||(za+=t),Gg&&!Pe&&(ni.tx=Math.sin(za*.37)*.55,ni.ty=Math.sin(za*.23+1)*.35);let e=Pe?1:1-Math.pow(.001,t);ni.x+=(ni.tx-ni.x)*e,ni.y+=(ni.ty-ni.y)*e;let n=Hi;n.uTime.value=za,n.uM.value=me.m,n.uOpen.value=me.open,n.uClose.value=me.close,n.uScan.value=me.scan,n.uHi.value.set(me.h1,me.h2,me.h3),n.uAlarm.value=me.alarm,n.uInk.value=me.ink,n.uPress.value=me.press,n.uFlag.value=me.flag,n.uLook.value.set(Pe?0:ni.x*.17,Pe?0:-ni.y*.1),Yt.eye.ry=Pe?0:ni.x*.12,Yt.eye.rx=Pe?0:ni.y*.08,Pe||(Yt.net.ry=Math.sin(za*.12)*.16,Yt.net.rx=Math.sin(za*.09)*.05),Yg(),Fb(),ii.render(Wg,il),requestAnimationFrame(kd)}document.addEventListener("visibilitychange",()=>{document.hidden?Zu=!1:!Zu&&ii&&(Zu=!0,zd=performance.now(),requestAnimationFrame(kd))});var kg;addEventListener("resize",()=>{clearTimeout(kg),kg=setTimeout(()=>{let s=Hg();s!==rn&&(rn=s,ar.dataset.mode=rn,ii&&(nl.dispose(),nl=Xg(),Yu.geometry=nl)),Kg(),qg(),Jg(),Qg(),$t.refresh()},180)});function Vg(){Pb(),Kg(),qg(),Jg(),Qg(),Bd(0,0);let s=rs("#talk"),t=()=>ar.classList.toggle("is-after",s.getBoundingClientRect().bottom<innerHeight*.6);addEventListener("scroll",t,{passive:!0}),t(),Gb(),ii&&requestAnimationFrame(kd),ar.classList.add("is-ready")}document.fonts&&document.fonts.ready?document.fonts.ready.then(Vg):Vg();})();
