(()=>{var sp=0,xu=1,ap=2;var ao=1,op=2,aa=3,Vr=0,zn=1,Ji=2,ps=0,Gr=1,vu=2,yu=3,Mu=4,lp=5;var ms=100,cp=101,hp=102,up=103,fp=104,dp=200,pp=201,mp=202,gp=203,Su=204,bu=205,_p=206,xp=207,vp=208,yp=209,Mp=210,Sp=211,bp=212,Tp=213,wp=214,El=0,Cl=1,Rl=2,ta=3,Pl=4,Il=5,Ll=6,Dl=7,Tu=0,Ap=1,Ep=2,$i=0,wu=1,Au=2,Eu=3,Cu=4,Ru=5,Pu=6,Iu=7;var Lu=300,gs=301,oa=302,oc=303,lc=304,Nl=1e3,Xi=1001,Ul=1002,mn=1003,Cp=1004;var oo=1005;var Bn=1006,cc=1007;var pr=1008;var ui=1009,Du=1010,Nu=1011,la=1012,hc=1013,Fi=1014,Oi=1015,Bi=1016,uc=1017,fc=1018,_s=1020,Uu=35902,Fu=35899,Ou=1021,Bu=1022,zi=1023,fr=1026,mr=1027,zu=1028,dc=1029,Hr=1030,pc=1031;var mc=1033,lo=33776,co=33777,ho=33778,uo=33779,gc=35840,_c=35841,xc=35842,vc=35843,yc=36196,Mc=37492,Sc=37496,bc=37488,Tc=37489,fo=37490,wc=37491,Ac=37808,Ec=37809,Cc=37810,Rc=37811,Pc=37812,Ic=37813,Lc=37814,Dc=37815,Nc=37816,Uc=37817,Fc=37818,Oc=37819,Bc=37820,zc=37821,kc=36492,Vc=36494,Gc=36495,Hc=36283,Wc=36284,po=36285,Xc=36286;var Ha=2300,Fl=2301,wl=2302,uu=2303,fu=2400,du=2401,pu=2402;var Rp=3200;var ku=0,Pp=1,gr="",oi="srgb",us="srgb-linear",Wa="linear",me="srgb";var Al=7680;var Ip=519,Lp=512,Dp=513,Np=514,Vu=515,Up=516,Fp=517,Gu=518,Hu=519,Op=35044;var Wu="300 es",Mi=2e3,Xa=2001;function V0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function G0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bp(){let r=qa("canvas");return r.style.display="block",r}var Fd={},ea=null;function Xu(...r){let t="THREE."+r.shift();ea?ea("log",t,...r):console.log(t,...r)}function zp(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function zt(...r){r=zp(r);let t="THREE."+r.shift();if(ea)ea("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function kt(...r){r=zp(r);let t="THREE."+r.shift();if(ea)ea("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Ga(...r){let t=r.join(" ");t in Fd||(Fd[t]=!0,zt(...r))}function kp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Vp={[El]:El,[Rl]:Ll,[Pl]:Pl,[ta]:Il,[Cl]:Cl,[Ll]:Rl,[Dl]:Dl,[Il]:ta},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wh=Math.PI/180,Ol=180/Math.PI;function mo(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ne(r,t,e){return Math.max(t,Math.min(e,r))}function H0(r,t){return(r%t+t)%t}function Xh(r,t,e){return(1-e)*r+e*t}function Gp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qu(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function W0(r,t){if(t.constructor===Float32Array)return r;let e=qu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function X0(r,t){if(t.constructor===Float32Array)return r;let e=qu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Ku=class Ku{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ku.prototype.isVector2=!0;var ie=Ku,Yi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(u!==x||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*x;p<0&&(f=-f,d=-d,g=-g,x=-x,p=-p);let _=1-o;if(p<.9995){let S=Math.acos(p),A=Math.sin(S);_=Math.sin(_*S)/A,o=Math.sin(o*S)/A,l=l*_+f*o,c=c*_+d*o,h=h*_+g*o,u=u*_+x*o}else{l=l*_+f*o,c=c*_+d*o,h=h*_+g*o,u=u*_+x*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qu=class Qu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Od.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Od.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qh.copy(this).projectOnVector(t),this.sub(qh)}reflect(t){return this.sub(qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qu.prototype.isVector3=!0;var Z=Qu,qh=new Z,Od=new Yi,ju=class ju{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],_=i[6],S=i[1],A=i[4],v=i[7],w=i[2],y=i[5],m=i[8];return s[0]=a*x+o*S+l*w,s[3]=a*p+o*A+l*y,s[6]=a*_+o*v+l*m,s[1]=c*x+h*S+u*w,s[4]=c*p+h*A+u*y,s[7]=c*_+h*v+u*m,s[2]=f*x+d*S+g*w,s[5]=f*p+d*A+g*y,s[8]=f*_+d*v+g*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(t,e)),this}rotate(t){return Ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-t)),this}translate(t,e){return Ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ju.prototype.isMatrix3=!0;var Bt=ju,Yh=new Bt,Bd=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q0(){let r={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===me&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[us]:{primaries:t,whitePoint:n,transfer:Wa,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}var te=q0();function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ks,Bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ks===void 0&&(ks=qa("canvas")),ks.width=t.width,ks.height=t.height;let i=ks.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=qa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ur(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ur(e[n]/255)*255):e[n]=ur(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Y0=0,na=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=mo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Zh(i[a].image)):s.push(Zh(i[a]))}else s=Zh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Zh(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Bl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Z0=0,Jh=new Z,Zn=class r extends qi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Xi,i=Xi,s=Bn,a=pr,o=zi,l=ui,c=r.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=mo(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nl:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nl:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Lu;Zn.DEFAULT_ANISOTROPY=1;var tf=class tf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(d+1)/2,w=(_+1)/2,y=(h+f)/4,m=(u+x)/4,M=(g+p)/4;return A>v&&A>w?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=y/n,s=m/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=y/i,s=M/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=m/s,i=M/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tf.prototype.isVector4=!0;var we=tf,zl=class extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Zn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new na(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ac=class ac{constructor(t,e,n,i,s,a,o,l,c,h,u,f,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,d,g,x,p)}set(t,e,n,i,s,a,o,l,c,h,u,f,d,g,x,p){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=d,_[7]=g,_[11]=x,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Vs.setFromMatrixColumn(t,0).length(),s=1/Vs.setFromMatrixColumn(t,1).length(),a=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J0,t,$0)}lookAt(t,e,n){let i=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Rr.crossVectors(n,si),Rr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Rr.crossVectors(n,si)),Rr.normalize(),il.crossVectors(si,Rr),i[0]=Rr.x,i[4]=il.x,i[8]=si.x,i[1]=Rr.y,i[5]=il.y,i[9]=si.y,i[2]=Rr.z,i[6]=il.z,i[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],_=n[14],S=n[3],A=n[7],v=n[11],w=n[15],y=i[0],m=i[4],M=i[8],P=i[12],E=i[1],D=i[5],N=i[9],B=i[13],I=i[2],z=i[6],G=i[10],F=i[14],Q=i[3],H=i[7],R=i[11],j=i[15];return s[0]=a*y+o*E+l*I+c*Q,s[4]=a*m+o*D+l*z+c*H,s[8]=a*M+o*N+l*G+c*R,s[12]=a*P+o*B+l*F+c*j,s[1]=h*y+u*E+f*I+d*Q,s[5]=h*m+u*D+f*z+d*H,s[9]=h*M+u*N+f*G+d*R,s[13]=h*P+u*B+f*F+d*j,s[2]=g*y+x*E+p*I+_*Q,s[6]=g*m+x*D+p*z+_*H,s[10]=g*M+x*N+p*G+_*R,s[14]=g*P+x*B+p*F+_*j,s[3]=S*y+A*E+v*I+w*Q,s[7]=S*m+A*D+v*z+w*H,s[11]=S*M+A*N+v*G+w*R,s[15]=S*P+A*B+v*F+w*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],_=t[15],S=l*d-c*f,A=o*d-c*u,v=o*f-l*u,w=a*d-c*h,y=a*f-l*h,m=a*u-o*h;return e*(x*S-p*A+_*v)-n*(g*S-p*w+_*y)+i*(g*A-x*w+_*m)-s*(g*v-x*y+p*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],_=t[15],S=e*o-n*a,A=e*l-i*a,v=e*c-s*a,w=n*l-i*o,y=n*c-s*o,m=i*c-s*l,M=h*x-u*g,P=h*p-f*g,E=h*_-d*g,D=u*p-f*x,N=u*_-d*x,B=f*_-d*p,I=S*B-A*N+v*D+w*E-y*P+m*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*B-l*N+c*D)*z,t[1]=(i*N-n*B-s*D)*z,t[2]=(x*m-p*y+_*w)*z,t[3]=(f*y-u*m-d*w)*z,t[4]=(l*E-a*B-c*P)*z,t[5]=(e*B-i*E+s*P)*z,t[6]=(p*v-g*m-_*A)*z,t[7]=(h*m-f*v+d*A)*z,t[8]=(a*N-o*E+c*M)*z,t[9]=(n*E-e*N-s*M)*z,t[10]=(g*y-x*v+_*S)*z,t[11]=(u*v-h*y-d*S)*z,t[12]=(o*P-a*D-l*M)*z,t[13]=(e*D-n*P+i*M)*z,t[14]=(x*A-g*w-p*S)*z,t[15]=(h*w-u*A+f*S)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,x=a*h,p=a*u,_=o*u,S=l*c,A=l*h,v=l*u,w=n.x,y=n.y,m=n.z;return i[0]=(1-(x+_))*w,i[1]=(d+v)*w,i[2]=(g-A)*w,i[3]=0,i[4]=(d-v)*y,i[5]=(1-(f+_))*y,i[6]=(p+S)*y,i[7]=0,i[8]=(g+A)*m,i[9]=(p-S)*m,i[10]=(1-(f+x))*m,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Vs.set(i[0],i[1],i[2]).length(),o=Vs.set(i[4],i[5],i[6]).length(),l=Vs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ii.copy(this);let c=1/a,h=1/o,u=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=u,Ii.elements[9]*=u,Ii.elements[10]*=u,e.setFromRotationMatrix(Ii),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Mi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===Mi)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Xa)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Mi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===Mi)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Xa)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ac.prototype.isMatrix4=!0;var Ne=ac,Vs=new Z,Ii=new Ne,J0=new Z(0,0,0),$0=new Z(1,1,1),Rr=new Z,il=new Z,si=new Z,kd=new Ne,Vd=new Yi,Ur=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ur.DEFAULT_ORDER="XYZ";var Za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},K0=0,Gd=new Z,Gs=new Yi,ar=new Ne,rl=new Z,Ba=new Z,Q0=new Z,j0=new Yi,Hd=new Z(1,0,0),Wd=new Z(0,1,0),Xd=new Z(0,0,1),qd={type:"added"},t_={type:"removed"},Hs={type:"childadded",child:null},$h={type:"childremoved",child:null},ci=class r extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new Ur,n=new Yi,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Bt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(Hd,t)}rotateY(t){return this.rotateOnAxis(Wd,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hd,t)}translateY(t){return this.translateOnAxis(Wd,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rl.copy(t):rl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Ba,rl,this.up):ar.lookAt(rl,Ba,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(ar),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t_),$h.child=t,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,j0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ci.DEFAULT_UP=new Z(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hs=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},e_={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),_=this._getHandJoint(c,x);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Kh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=H0(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Kh(a,s,t+1/3),this.g=Kh(a,s,t),this.b=Kh(a,s,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=oi){function n(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){let n=Hp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return te.workingToColorSpace(An.copy(this),t),Math.round(ne(An.r*255,0,255))*65536+Math.round(ne(An.g*255,0,255))*256+Math.round(ne(An.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(An.copy(this),e);let n=An.r,i=An.g,s=An.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=oi){te.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,i=An.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pr),this.setHSL(Pr.h+t,Pr.s+e,Pr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pr),t.getHSL(sl);let n=Xh(Pr.h,sl.h,e),i=Xh(Pr.s,sl.s,e),s=Xh(Pr.l,sl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new se;se.NAMES=Hp;var Ja=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Li=new Z,or=new Z,Qh=new Z,lr=new Z,Ws=new Z,Xs=new Z,Yd=new Z,jh=new Z,tu=new Z,eu=new Z,nu=new we,iu=new we,ru=new we,Nr=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Li.subVectors(t,e),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Li.subVectors(i,e),or.subVectors(n,e),Qh.subVectors(t,e);let a=Li.dot(Li),o=Li.dot(or),l=Li.dot(Qh),c=or.dot(or),h=or.dot(Qh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(a,lr.y),l.addScaledVector(o,lr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(t,e),iu.fromBufferAttribute(t,n),ru.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(nu,s.x),a.addScaledVector(iu,s.y),a.addScaledVector(ru,s.z),a}static isFrontFacing(t,e,n,i){return Li.subVectors(n,e),or.subVectors(t,e),Li.cross(or).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Li.cross(or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Ws.subVectors(i,n),Xs.subVectors(s,n),jh.subVectors(t,n);let l=Ws.dot(jh),c=Xs.dot(jh);if(l<=0&&c<=0)return e.copy(n);tu.subVectors(t,i);let h=Ws.dot(tu),u=Xs.dot(tu);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ws,a);eu.subVectors(t,s);let d=Ws.dot(eu),g=Xs.dot(eu);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Xs,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Yd.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Yd,o);let _=1/(p+x+f);return a=x*_,o=f*_,e.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fr=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Di):Di.fromBufferAttribute(s,a),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),al.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox)),al.applyMatrix4(t.matrixWorld),this.union(al)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(za),ol.subVectors(this.max,za),qs.subVectors(t.a,za),Ys.subVectors(t.b,za),Zs.subVectors(t.c,za),Ir.subVectors(Ys,qs),Lr.subVectors(Zs,Ys),as.subVectors(qs,Zs);let e=[0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,0,-as.z,as.y,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,as.z,0,-as.x,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0,-as.y,as.x,0];return!su(e,qs,Ys,Zs,ol)||(e=[1,0,0,0,1,0,0,0,1],!su(e,qs,Ys,Zs,ol))?!1:(ll.crossVectors(Ir,Lr),e=[ll.x,ll.y,ll.z],su(e,qs,Ys,Zs,ol))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Di=new Z,al=new Fr,qs=new Z,Ys=new Z,Zs=new Z,Ir=new Z,Lr=new Z,as=new Z,za=new Z,ol=new Z,ll=new Z,os=new Z;function su(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){os.fromArray(r,s);let o=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ke=new Z,cl=new ie,n_=0,pn=class extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Op,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=t!==void 0?qu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cl.fromBufferAttribute(this,e),cl.applyMatrix3(t),this.setXY(e,cl.x,cl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):W0(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):X0(t,this.array)}};var $a=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ka=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Si=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},i_=new Fr,ka=new Z,au=new Z,fs=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):i_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ka.subVectors(t,this.center);let e=ka.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ka,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ka.copy(t.center).add(au)),this.expandByPoint(ka.copy(t.center).sub(au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},r_=0,yi=new Ne,ou=new ci,Js=new Z,ai=new Fr,Va=new Fr,dn=new Z,Ui=class r extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V0(t)?Ka:$a)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return ou.lookAt(t),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Si(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(ai.min,Va.min),ai.expandByPoint(dn),dn.addVectors(ai.max,Va.max),ai.expandByPoint(dn)):(ai.expandByPoint(Va.min),ai.expandByPoint(Va.max))}ai.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)dn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(dn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(t,c),dn.add(Js)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new Z,l[P]=new Z;let h=new Z,u=new Z,f=new Z,d=new ie,g=new ie,x=new ie,p=new Z,_=new Z;function S(P,E,D){c[P]=c[E]=c[D]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,D),d.fromBufferAttribute(s,P),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,D),u.sub(h),f.sub(h),g.sub(d),x.sub(d);let N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(N),_.copy(f).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(N),o[P].add(p),o[E].add(p),o[D].add(p),l[P].add(_),l[E].add(_),l[D].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let P=0,E=A.length;P<E;++P){let D=A[P],N=D.start,B=D.count;for(let I=N,z=N+B;I<z;I+=3)S(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new Z,w=new Z,y=new Z,m=new Z;function M(P){y.fromBufferAttribute(i,P),m.copy(y);let E=o[P];v.copy(E),v.sub(y.multiplyScalar(y.dot(E))).normalize(),w.crossVectors(m,E);let N=w.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,N)}for(let P=0,E=n.count;P<E;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,h=new Z,u=new Z;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let _=0;_<h;_++)f[g++]=c[d++]}return new pn(f,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var lu=new Z,s_=new Z,a_=new Bt,Ni=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=lu.subVectors(n,e).cross(s_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(lu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||a_.getNormalMatrix(t),i=this.coplanarPoint(lu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},o_=0,Or=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Gr,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=bu,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Al,this.stencilZFail=Al,this.stencilZPass=Al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hr=new Z,cu=new Z,hl=new Z,ul=new Z,Qa=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hr.copy(this.origin).addScaledVector(this.direction,e),hr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cu.copy(t).add(e).multiplyScalar(.5),hl.copy(e).sub(t).normalize(),ul.copy(this.origin).sub(cu);let s=t.distanceTo(e)*.5,a=-this.direction.dot(hl),o=ul.dot(this.direction),l=-ul.dot(hl),c=ul.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cu).addScaledVector(hl,f),d}intersectSphere(t,e){if(t.radius<0)return null;hr.subVectors(t.center,this.origin);let n=hr.dot(this.direction),i=hr.dot(hr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,_=n.x-a.x,S=n.y-a.y,A=n.z-a.z,v=Math.abs(l),w=Math.abs(c),y=Math.abs(h),m,M,P,E,D,N,B,I,z,G,F,Q;if(v>=w&&v>=y?(P=l,N=u,z=g,Q=_,l>=0?(m=c,M=h,E=f,D=d,B=x,I=p,G=S,F=A):(m=h,M=c,E=d,D=f,B=p,I=x,G=A,F=S)):w>=y?(P=c,N=f,z=x,Q=S,c>=0?(m=h,M=l,E=d,D=u,B=p,I=g,G=A,F=_):(m=l,M=h,E=u,D=d,B=g,I=p,G=_,F=A)):(P=h,N=d,z=p,Q=A,h>=0?(m=l,M=c,E=u,D=f,B=g,I=x,G=_,F=S):(m=c,M=l,E=f,D=u,B=x,I=g,G=S,F=_)),P===0)return null;let H=m/P,R=M/P,j=1/P,xt=E-H*N,At=D-R*N,q=B-H*z,ot=I-R*z,_t=G-H*Q,St=F-R*Q,ut=_t*ot-St*q,Nt=xt*St-At*_t,xe=q*At-ot*xt;if(i){if(ut<0||Nt<0||xe<0)return null}else if((ut<0||Nt<0||xe<0)&&(ut>0||Nt>0||xe>0))return null;let Et=ut+Nt+xe;if(Et===0)return null;let Gt=j*(ut*N+Nt*z+xe*Q);return(Et>0?Gt<0:Gt>0)?null:this.at(Gt/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vl=class extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zd=new Ne,ls=new Qa,fl=new fs,Jd=new Z,dl=new Z,pl=new Z,ml=new Z,hu=new Z,gl=new Z,$d=new Z,_l=new Z,Zi=class extends ci{constructor(t=new Ui,e=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(hu.fromBufferAttribute(u,t),a?gl.addScaledVector(hu,h):gl.addScaledVector(hu.sub(e),h))}e.add(gl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),ls.copy(t.ray).recast(t.near),!(fl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(fl,Jd)===null||ls.origin.distanceToSquared(Jd)>(t.far-t.near)**2))&&(Zd.copy(s).invert(),ls.copy(t.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],_=a[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,w=A;v<w;v+=3){let y=o.getX(v),m=o.getX(v+1),M=o.getX(v+2);i=xl(this,_,t,n,c,h,u,y,m,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,_=x;p<_;p+=3){let S=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);i=xl(this,a,t,n,c,h,u,S,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],_=a[p.materialIndex],S=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,w=A;v<w;v+=3){let y=v,m=v+1,M=v+2;i=xl(this,_,t,n,c,h,u,y,m,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,_=x;p<_;p+=3){let S=p,A=p+1,v=p+2;i=xl(this,a,t,n,c,h,u,S,A,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function l_(r,t,e,n,i,s,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Vr,o),l===null)return null;_l.copy(o),_l.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(_l);return c<e.near||c>e.far?null:{distance:c,point:_l.clone(),object:r}}function xl(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,dl),r.getVertexPosition(l,pl),r.getVertexPosition(c,ml);let h=l_(r,t,e,n,dl,pl,ml,$d);if(h){let u=new Z;Nr.getBarycoord($d,dl,pl,ml,u),i&&(h.uv=Nr.getInterpolatedAttribute(i,o,l,c,u,new ie)),s&&(h.uv1=Nr.getInterpolatedAttribute(s,o,l,c,u,new ie)),a&&(h.normal=Nr.getInterpolatedAttribute(a,o,l,c,u,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new Z,materialIndex:0};Nr.getNormal(dl,pl,ml,f.normal),h.face=f,h.barycoord=u}return h}var Gl=class extends Zn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=mn,h=mn,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cs=new fs,c_=new ie(.5,.5),vl=new Z,ds=class{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],p=s[10],_=s[11],S=s[12],A=s[13],v=s[14],w=s[15];if(i[0].setComponents(c-a,d-h,_-g,w-S).normalize(),i[1].setComponents(c+a,d+h,_+g,w+S).normalize(),i[2].setComponents(c+o,d+u,_+x,w+A).normalize(),i[3].setComponents(c-o,d-u,_-x,w-A).normalize(),n)i[4].setComponents(l,f,p,v).normalize(),i[5].setComponents(c-l,d-f,_-p,w-v).normalize();else if(i[4].setComponents(c-l,d-f,_-p,w-v).normalize(),e===Mi)i[5].setComponents(c+l,d+f,_+p,w+v).normalize();else if(e===Xa)i[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=c_.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(vl.x=i.normal.x>0?t.max.x:t.min.x,vl.y=i.normal.y>0?t.max.y:t.min.y,vl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kd=new Ne,Hl=class r{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];Kd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ds),n[i].setFromProjectionMatrix(Kd,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ds),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Wl=class extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qd=new Ne,mu=new Qa,yl=new fs,Ml=new Z,ja=class extends ci{constructor(t=new Ui,e=new Wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(i),yl.radius+=s,t.ray.intersectsSphere(yl)===!1)return;Qd.copy(i).invert(),mu.copy(t.ray).applyMatrix4(Qd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Ml.fromBufferAttribute(u,p),jd(Ml,p,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,x=d;g<x;g++)Ml.fromBufferAttribute(u,g),jd(Ml,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function jd(r,t,e,n,i,s,a){let o=mu.distanceSqToPoint(r);if(o<e){let l=new Z;mu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var to=class extends Zn{constructor(t=[],e=gs,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var dr=class extends Zn{constructor(t,e,n=Fi,i,s,a,o=mn,l=mn,c,h=fr,u=1){if(h!==fr&&h!==mr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new na(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},eo=class extends dr{constructor(t,e=Fi,n=gs,i,s,a=mn,o=mn,l,c=fr){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ra=class r extends Ui{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Si(c,3)),this.setAttribute("normal",new Si(h,3)),this.setAttribute("uv",new Si(u,2));function g(x,p,_,S,A,v,w,y,m,M,P){let E=v/m,D=w/M,N=v/2,B=w/2,I=y/2,z=m+1,G=M+1,F=0,Q=0,H=new Z;for(let R=0;R<G;R++){let j=R*D-B;for(let xt=0;xt<z;xt++){let At=xt*E-N;H[x]=At*S,H[p]=j*A,H[_]=I,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[_]=y>0?1:-1,h.push(H.x,H.y,H.z),u.push(xt/m),u.push(1-R/M),F+=1}}for(let R=0;R<M;R++)for(let j=0;j<m;j++){let xt=f+j+z*R,At=f+j+z*(R+1),q=f+(j+1)+z*(R+1),ot=f+(j+1)+z*R;l.push(xt,At,ot),l.push(At,q,ot),Q+=6}o.addGroup(d,Q,P),d+=Q,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var io=class r extends Ui{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],x=[],p=[];for(let _=0;_<h;_++){let S=_*f-a;for(let A=0;A<c;A++){let v=A*u-s;g.push(v,-S,0),x.push(0,0,1),p.push(A/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){let A=S+c*_,v=S+c*(_+1),w=S+1+c*(_+1),y=S+1+c*_;d.push(A,v,y),d.push(v,w,y)}this.setIndex(d),this.setAttribute("position",new Si(g,3)),this.setAttribute("normal",new Si(x,3)),this.setAttribute("uv",new Si(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function xs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(tp(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(tp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function En(r){let t={};for(let e=0;e<r.length;e++){let n=xs(r[e]);for(let i in n)t[i]=n[i]}return t}function tp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function h_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Yu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Wp={clone:xs,merge:En},u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=h_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(i.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xl=class extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ql=class extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yl=class extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $s(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Sl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Br=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zl=class extends Br{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case du:s=t,o=2*e-n;break;case pu:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case du:a=t,l=2*n-e;break;case pu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,p=x*g,_=-f*p+2*f*x-f*g,S=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,A=(-1-d)*p+(1.5+d)*x+.5*g,v=d*p-d*x;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+S*a[c+w]+A*a[l+w]+v*a[u+w];return s}},Jl=class extends Br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},$l=class extends Br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Kl=class extends Br{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(i-e),x=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*g;return s}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],_=d*f+g*2,S=u[_],A=u[_+1],v=t*f+g*2,w=h[v],y=h[v+1],m=p_(n,e,S,w,i);s[g]=Xp(m,x,A,y,p)}return s}};function Xp(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function d_(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function p_(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=Xp(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=d_(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var hi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Sl(t.settings)&&(n.settings={inTangents:$s(t.settings.inTangents,Array),outTangents:$s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ha:e=this.InterpolantFactoryMethodDiscrete;break;case Fl:e=this.InterpolantFactoryMethodLinear;break;case wl:e=this.InterpolantFactoryMethodSmooth;break;case uu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return wl;case this.InterpolantFactoryMethodBezier:return uu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Sl(this.settings)&&(ep(this.settings.inTangents,t),ep(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Sl(this.settings)&&(np(this.settings.inTangents,t),np(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&G0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wl,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Sl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ep(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function np(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Fl;var zr=class extends hi{constructor(t,e,n){super(t,e,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Ha;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}};Ql.prototype.ValueTypeName="color";var jl=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}};jl.prototype.ValueTypeName="number";var tc=class extends Br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Yi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ro=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends hi{constructor(t,e,n){super(t,e,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Ha;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends hi{constructor(t,e,n,i){super(t,e,n,i)}};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qp=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var bl=new Z,Tl=new Yi,Wi=new Z,so=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bl,Tl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(bl,Tl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Tl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new Z,ip=new ie,rp=new ie,On=class extends so{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dr.x,Dr.y).multiplyScalar(-t/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-t/Dr.z)}getViewSize(t,e){return this.getViewBounds(t,ip,rp),e.subVectors(rp,ip)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rc=class extends so{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ks=-90,Qs=1,sa=class extends ci{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new On(Ks,Qs,t,e);i.layers=this.layers,this.add(i);let s=new On(Ks,Qs,t,e);s.layers=this.layers,this.add(s);let a=new On(Ks,Qs,t,e);a.layers=this.layers,this.add(a);let o=new On(Ks,Qs,t,e);o.layers=this.layers,this.add(o);let l=new On(Ks,Qs,t,e);l.layers=this.layers,this.add(l);let c=new On(Ks,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},sc=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zu="\\[\\]\\.:\\/",m_=new RegExp("["+Zu+"]","g"),Ju="[^"+Zu+"]",g_="[^"+Zu.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",Ju),x_=/(WCOD+)?/.source.replace("WCOD",g_),v_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),M_=new RegExp("^"+__+x_+v_+y_+"$"),S_=["material","materials","bones","map"],gu=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(t){let e=M_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);S_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=gu;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E1=new Float32Array(1);var ef=class ef{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};ef.prototype.isMatrix2=!0;var _u=ef;function $u(r,t,e,n){let i=b_(n);switch(e){case Ou:return r*t;case zu:return r*t/i.components*i.byteLength;case dc:return r*t/i.components*i.byteLength;case Hr:return r*t*2/i.components*i.byteLength;case pc:return r*t*2/i.components*i.byteLength;case Bu:return r*t*3/i.components*i.byteLength;case zi:return r*t*4/i.components*i.byteLength;case mc:return r*t*4/i.components*i.byteLength;case lo:case co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _c:case vc:return Math.max(r,16)*Math.max(t,8)/4;case gc:case xc:return Math.max(r,8)*Math.max(t,8)/2;case yc:case Mc:case bc:case Tc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sc:case fo:case wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case kc:case Vc:case Gc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Hc:case Wc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case po:case Xc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b_(r){switch(r){case ui:case Du:return{byteLength:1,components:1};case la:case Nu:case Bi:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case Fi:case hc:case Oi:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function pm(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function w_(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
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
#endif`,C_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
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
#endif`,D_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
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
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J_=`#define PI 3.141592653589793
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
} // validated`,$_=`vec3 transformedNormal = objectNormal;
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
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
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
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,bx=`uniform sampler2D dfgLUT;
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
}`,Tx=`
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ux=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
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
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hv=`float getShadowMask() {
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
}`,uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform float backgroundBlurriness;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
}`,Dv=`#define DISTANCE
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
}`,Nv=`#define DISTANCE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,kv=`uniform vec3 diffuse;
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
}`,Vv=`#define LAMBERT
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
}`,Gv=`#define LAMBERT
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
}`,Hv=`#define MATCAP
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define NORMAL
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
}`,qv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,Zv=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,$v=`#define STANDARD
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
}`,Kv=`#define TOON
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
}`,Qv=`#define TOON
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
}`,jv=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:A_,alphahash_pars_fragment:E_,alphamap_fragment:C_,alphamap_pars_fragment:R_,alphatest_fragment:P_,alphatest_pars_fragment:I_,aomap_fragment:L_,aomap_pars_fragment:D_,batching_pars_vertex:N_,batching_vertex:U_,begin_vertex:F_,beginnormal_vertex:O_,bsdfs:B_,iridescence_fragment:z_,bumpmap_pars_fragment:k_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:Y_,color_vertex:Z_,common:J_,defaultnormal_vertex:$_,displacementmap_pars_vertex:K_,displacementmap_vertex:Q_,emissivemap_fragment:j_,emissivemap_pars_fragment:tx,colorspace_fragment:ex,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:rx,envmap_pars_fragment:sx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:_x,envmap_vertex:ox,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:hx,fog_pars_fragment:ux,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:xx,lights_toon_pars_fragment:vx,lights_phong_fragment:yx,lights_phong_pars_fragment:Mx,lights_physical_fragment:Sx,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:wx,lights_fragment_end:Ax,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Nx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Bx,morphcolor_vertex:zx,morphnormal_vertex:kx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Hx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Qx,opaque_fragment:jx,packing:tv,premultiplied_alpha_fragment:ev,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:rv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:hv,skinbase_vertex:uv,skinning_pars_vertex:fv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:_v,tonemapping_pars_fragment:xv,transmission_fragment:vv,transmission_pars_fragment:yv,uv_pars_fragment:Mv,uv_pars_vertex:Sv,uv_vertex:bv,worldpos_vertex:Tv,background_vert:wv,background_frag:Av,backgroundCube_vert:Ev,backgroundCube_frag:Cv,cube_vert:Rv,cube_frag:Pv,depth_vert:Iv,depth_frag:Lv,distance_vert:Dv,distance_frag:Nv,equirect_vert:Uv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:kv,meshlambert_vert:Vv,meshlambert_frag:Gv,meshmatcap_vert:Hv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:Zv,meshphysical_vert:Jv,meshphysical_frag:$v,meshtoon_vert:Kv,meshtoon_frag:Qv,points_vert:jv,points_frag:ty,shadow_vert:ey,shadow_frag:ny,sprite_vert:iy,sprite_frag:ry},bt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Qi={basic:{uniforms:En([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:En([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:En([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:En([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:En([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new se(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:En([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:En([bt.points,bt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:En([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:En([bt.common,bt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:En([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:En([bt.sprite,bt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:En([bt.common,bt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:En([bt.lights,bt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Qi.physical={uniforms:En([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var qc={r:0,b:0,g:0},sy=new Ne,mm=new Bt;mm.set(-1,0,0,0,1,0,0,0,1);function ay(r,t,e,n,i,s){let a=new se(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let v=S.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(S){let A=!1,v=d(S);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(S,A){let v=d(A);v&&v.isCubeTexture?(c===void 0&&(c=new Zi(new ra(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:xs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,y,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mm),c.material.toneMapped=te.getTransfer(v.colorSpace)!==me,(h!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Zi(new io(2,2),new bi({name:"BackgroundMaterial",uniforms:xs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(qc,Yu(r)),e.buffers.color.setClear(qc.r,qc.g,qc.b,A,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:x,dispose:_}}function oy(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(D,N,B,I,z){let G=!1,F=u(D,I,B,N);s!==F&&(s=F,c(s.object)),G=d(D,I,B,z),G&&g(D,I,B,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(D,N,B,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function u(D,N,B,I){let z=I.wireframe===!0,G=n[N.id];G===void 0&&(G={},n[N.id]=G);let F=D.isInstancedMesh===!0?D.id:0,Q=G[F];Q===void 0&&(Q={},G[F]=Q);let H=Q[B.id];H===void 0&&(H={},Q[B.id]=H);let R=H[z];return R===void 0&&(R=f(l()),H[z]=R),R}function f(D){let N=[],B=[],I=[];for(let z=0;z<e;z++)N[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,N,B,I){let z=s.attributes,G=N.attributes,F=0,Q=B.getAttributes();for(let H in Q)if(Q[H].location>=0){let j=z[H],xt=G[H];if(xt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),j===void 0||j.attribute!==xt||xt&&j.data!==xt.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function g(D,N,B,I){let z={},G=N.attributes,F=0,Q=B.getAttributes();for(let H in Q)if(Q[H].location>=0){let j=G[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let xt={};xt.attribute=j,j&&j.data&&(xt.data=j.data),z[H]=xt,F++}s.attributes=z,s.attributesNum=F,s.index=I}function x(){let D=s.newAttributes;for(let N=0,B=D.length;N<B;N++)D[N]=0}function p(D){_(D,0)}function _(D,N){let B=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;B[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),z[D]!==N&&(r.vertexAttribDivisor(D,N),z[D]=N)}function S(){let D=s.newAttributes,N=s.enabledAttributes;for(let B=0,I=N.length;B<I;B++)N[B]!==D[B]&&(r.disableVertexAttribArray(B),N[B]=0)}function A(D,N,B,I,z,G,F){F===!0?r.vertexAttribIPointer(D,N,B,z,G):r.vertexAttribPointer(D,N,B,I,z,G)}function v(D,N,B,I){x();let z=I.attributes,G=B.getAttributes(),F=N.defaultAttributeValues;for(let Q in G){let H=G[Q];if(H.location>=0){let R=z[Q];if(R===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let j=R.normalized,xt=R.itemSize,At=t.get(R);if(At===void 0)continue;let q=At.buffer,ot=At.type,_t=At.bytesPerElement,St=ot===r.INT||ot===r.UNSIGNED_INT||R.gpuType===hc;if(R.isInterleavedBufferAttribute){let ut=R.data,Nt=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,xe=R.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Et=0;Et<H.locationSize;Et++)_(H.location+Et,ut.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Et=0;Et<H.locationSize;Et++)p(H.location+Et);r.bindBuffer(r.ARRAY_BUFFER,q);for(let Et=0;Et<H.locationSize;Et++)A(H.location+Et,xt/H.locationSize,ot,j,Nt*_t,(xe+xt/H.locationSize*Et)*_t,St)}else{if(R.isInstancedBufferAttribute){for(let ut=0;ut<H.locationSize;ut++)_(H.location+ut,R.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ut=0;ut<H.locationSize;ut++)p(H.location+ut);r.bindBuffer(r.ARRAY_BUFFER,q);for(let ut=0;ut<H.locationSize;ut++)A(H.location+ut,xt/H.locationSize,ot,j,xt*_t,xt/H.locationSize*ut*_t,St)}}else if(F!==void 0){let j=F[Q];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(H.location,j);break;case 3:r.vertexAttrib3fv(H.location,j);break;case 4:r.vertexAttrib4fv(H.location,j);break;default:r.vertexAttrib1fv(H.location,j)}}}}S()}function w(){P();for(let D in n){let N=n[D];for(let B in N){let I=N[B];for(let z in I){let G=I[z];for(let F in G)h(G[F].object),delete G[F];delete I[z]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let B in N){let I=N[B];for(let z in I){let G=I[z];for(let F in G)h(G[F].object),delete G[F];delete I[z]}}delete n[D.id]}function m(D){for(let N in n){let B=n[N];for(let I in B){let z=B[I];if(z[D.id]===void 0)continue;let G=z[D.id];for(let F in G)h(G[F].object),delete G[F];delete z[D.id]}}}function M(D){for(let N in n){let B=n[N],I=D.isInstancedMesh===!0?D.id:0,z=B[I];if(z!==void 0){for(let G in z){let F=z[G];for(let Q in F)h(F[Q].object),delete F[Q];delete z[G]}delete B[I],Object.keys(B).length===0&&delete n[N]}}}function P(){E(),a=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:m,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function ly(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function cy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(m){return!(m!==zi&&n.convert(m)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let M=m===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==ui&&m!==Oi&&!M&&n.convert(m)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),y=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:w,samples:y}}function hy(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Ni,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,_=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let S=s?0:n,A=S*4,v=_.clippingState||null;l.value=v,v=h(g,f,A,d);for(let w=0;w!==A;++w)v[w]=e[w];_.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let _=d+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let A=0,v=d;A!==x;++A,v+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var xo=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new to(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ra(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:ps});s.uniforms.tEquirect.value=e;let a=new Zi(i,s),o=e.minFilter;return e.minFilter===pr&&(e.minFilter=Bn),new sa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Yp=256,uy=3,fy=20,gm=256,_m=16,dy=3,py=new Z,my=new se,Zc=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sa(1,10,null),this._boxMesh=new Zi(new ra(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=py}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(my));let p=new sa(n,i,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Yp,Gp(t))}_fromTexture(t,e){t.mapping===gs||t.mapping===oa?this._setSize(t.image.length===0?Yp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Zp(t,!1,!1),n=Math.log2(t)-uy;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===gs||t.mapping===oa?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gy(),this._integrationMaterial=_y());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/_m);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-dy)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(gm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xy());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function Zp(r,t,e){return new xo(r,{minFilter:pr,generateMipmaps:t,type:Bi,colorSpace:us,depthBuffer:e})}function vo(r,t,e){return new bi({name:r,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:zn,blending:ps,depthTest:!1,depthWrite:!1})}function gy(){return vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gm}u

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
	`)}function _y(){return vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_m}},`

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
	`)}function xy(){return vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fy}
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
	`)}function Jp(){return vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $p(){return vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vy(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===oc||d===lc)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new xo(g.height);return x.fromEquirectangularTexture(r,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===oc||d===lc,x=d===gs||d===oa;if(g||x){let p=e.get(f),_=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Zc(r)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let S=f.image;return g&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Zc(r)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===oc?f.mapping=gs:d===lc&&(f.mapping=oa),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function yy(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ga("WebGLRenderer: "+n+" extension not supported."),i}}}function My(r,t,e,n){let i={},s=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let x=s.get(g);x&&(t.remove(x),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],r.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,_=0;if(p===void 0)return;let S=x!==null?x.array.length:p.array.length/3-1,A=p.count>=65535?Ka:$a,v=new A(Math.ceil(S/3)*6,1),w=v.array;if(x!==null){let m=x.array;_=x.version;for(let M=0,P=0;M<S;M+=3){let E=m[M+0],D=m[M+1],N=m[M+2];w[P++]=E,w[P++]=D,w[P++]=D,w[P++]=N,w[P++]=N,w[P++]=E}}else{_=p.version;for(let m=0,M=0;m<S;m+=3){let P=m+0,E=m+1,D=m+2;w[M++]=P,w[M++]=E,w[M++]=E,w[M++]=D,w[M++]=D,w[M++]=P}}v.version=_;let y=s.get(g);y&&t.remove(y),s.set(g,v)}function f(g){let x=s.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return s.get(g)}function d(){for(let g in i){let x=i[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Sy(r,t,e){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function by(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ty(r,t,e){let n=new WeakMap,i=new we;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let P=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let v=o.attributes.position.count*A,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let y=new Float32Array(v*w*4*u),m=new Ya(y,v,w,u);m.type=Oi,m.needsUpdate=!0;let M=A*4;for(let E=0;E<u;E++){let D=p[E],N=_[E],B=S[E],I=v*w*4*E;for(let z=0;z<D.count;z++){let G=z*M;d===!0&&(i.fromBufferAttribute(D,z),y[I+G+0]=i.x,y[I+G+1]=i.y,y[I+G+2]=i.z,y[I+G+3]=0),g===!0&&(i.fromBufferAttribute(N,z),y[I+G+4]=i.x,y[I+G+5]=i.y,y[I+G+6]=i.z,y[I+G+7]=0),x===!0&&(i.fromBufferAttribute(B,z),y[I+G+8]=i.x,y[I+G+9]=i.y,y[I+G+10]=i.z,y[I+G+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:m,size:new ie(v,w)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wy(r,t,e,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ay={[wu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[Eu]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Pu]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function Ey(r,t,e,n,i,s){let a=new li(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ui;h.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Si([0,2,0,0,2,0],2));let u=new Xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Zi(h,u),d=new rc(-1,1,1,-1,0,1),g=null,x=null,p=!1,_,S=null,A=[],v=!1;this.setSize=function(w,y){a.setSize(w,y),o!==null&&o.setSize(w,y),l!==null&&l.setSize(w,y);for(let m=0;m<A.length;m++){let M=A[m];M.setSize&&M.setSize(w,y)}},this.setEffects=function(w){A=w,v=A.length>0&&A[0].isRenderPass===!0;let y=a.width,m=a.height;A.length>0&&o===null&&(o=new li(y,m,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new li(y,m,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&A.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new dr(y,m),s===!0&&(c.format=mr,c.type=_s)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<A.length;P++){let E=A[P];E.setSize&&E.setSize(y,m),M&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(w,y){if(p||w.toneMapping===$i&&A.length===0)return!1;if(S=y,y!==null){let m=y.width,M=y.height;(a.width!==m||a.height!==M)&&this.setSize(m,M)}return v===!1&&w.setRenderTarget(a),_=w.toneMapping,w.toneMapping=$i,!0},this.hasRenderPass=function(){return v},this.end=function(w,y){w.toneMapping=_,p=!0;let m=a,M=o;for(let P=0;P<A.length;P++){let E=A[P];E.enabled!==!1&&(E.render(w,M,m,y),E.needsSwap!==!1&&(m=M,M=M===o?l:o))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,u.defines={},te.getTransfer(g)===me&&(u.defines.SRGB_TRANSFER="");let P=Ay[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(S),w.render(f,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var xm=new Zn,vm=new dr(1,1),ym=new eo(1),Mm=new Ya,Sm=new kl,bm=new to,Kp=[],Qp=[],jp=new Float32Array(16),tm=new Float32Array(9),em=new Float32Array(4);function ha(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Kp[i];if(s===void 0&&(s=new Float32Array(i),Kp[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function an(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function $c(r,t){let e=Qp[t];e===void 0&&(e=new Int32Array(t),Qp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Cy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),an(e,t)}}function Py(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),an(e,t)}}function Iy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),an(e,t)}}function Ly(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(sn(e,n))return;em.set(n),r.uniformMatrix2fv(this.addr,!1,em),an(e,n)}}function Dy(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(sn(e,n))return;tm.set(n),r.uniformMatrix3fv(this.addr,!1,tm),an(e,n)}}function Ny(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(sn(e,n))return;jp.set(n),r.uniformMatrix4fv(this.addr,!1,jp),an(e,n)}}function Uy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Fy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),an(e,t)}}function Oy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),an(e,t)}}function By(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),an(e,t)}}function zy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ky(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),an(e,t)}}function Vy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),an(e,t)}}function Gy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),an(e,t)}}function Kc(r){return r.version===0&&(r.compareFunction=Hu,r.needsUpdate=!0),r}function Hy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Kc(vm):s=xm,e.setTexture2D(t||s,i)}function Wy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sm,i)}function Xy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Kc(ym):s=bm,e.setTextureCube(t||s,i)}function qy(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mm,i)}function Yy(r){switch(r){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Zy(r,t){r.uniform1fv(this.addr,t)}function Jy(r,t){let e=ha(t,this.size,2);r.uniform2fv(this.addr,e)}function $y(r,t){let e=ha(t,this.size,3);r.uniform3fv(this.addr,e)}function Ky(r,t){let e=ha(t,this.size,4);r.uniform4fv(this.addr,e)}function Qy(r,t){let e=ha(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function jy(r,t){let e=ha(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function tM(r,t){let e=ha(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function eM(r,t){r.uniform1iv(this.addr,t)}function nM(r,t){r.uniform2iv(this.addr,t)}function iM(r,t){r.uniform3iv(this.addr,t)}function rM(r,t){r.uniform4iv(this.addr,t)}function sM(r,t){r.uniform1uiv(this.addr,t)}function aM(r,t){r.uniform2uiv(this.addr,t)}function oM(r,t){r.uniform3uiv(this.addr,t)}function lM(r,t){r.uniform4uiv(this.addr,t)}function cM(r,t,e){let n=this.cache,i=t.length,s=$c(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Kc(vm):a=xm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function hM(r,t,e){let n=this.cache,i=t.length,s=$c(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Sm,s[a])}function uM(r,t,e){let n=this.cache,i=t.length,s=$c(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Kc(ym):a=bm;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,s[o])}function fM(r,t,e){let n=this.cache,i=t.length,s=$c(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Mm,s[a])}function dM(r){switch(r){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return Ky;case 35674:return Qy;case 35675:return jy;case 35676:return tM;case 5124:case 35670:return eM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return aM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}var sf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yy(e.type)}},af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dM(e.type)}},of=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},nf=/(\w+)(\])?(\[|\.)?/g;function nm(r,t){r.seq.push(t),r.map[t.id]=t}function pM(r,t,e){let n=r.name,i=n.length;for(nf.lastIndex=0;;){let s=nf.exec(n),a=nf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nm(e,c===void 0?new sf(o,r,t):new af(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new of(o),nm(e,u)),e=u}}}var ca=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);pM(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function im(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var mM=37297,gM=0;function _M(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var rm=new Bt;function xM(r){te._getMatrix(rm,te.workingColorSpace,r);let t=`mat3( ${rm.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(r)){case Wa:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+_M(r.getShaderSource(t),o)}else return s}function vM(r,t){let e=xM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yM={[wu]:"Linear",[Au]:"Reinhard",[Eu]:"Cineon",[Cu]:"ACESFilmic",[Pu]:"AgX",[Iu]:"Neutral",[Ru]:"Custom"};function MM(r,t){let e=yM[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yc=new Z;function SM(){te.getLuminanceCoefficients(Yc);let r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),e=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function TM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function _o(r){return r!==""}function am(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function om(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace(AM,EM)}function EM(r,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lf(e)}var CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(r){return r.replace(CM,RM)}function RM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function cm(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var PM={[ao]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function IM(r){return PM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var LM={[oa]:"ENVMAP_MODE_REFRACTION"};function DM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":LM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NM={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function UM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NM[r.combine]||"ENVMAP_BLENDING_NONE"}function FM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=IM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DM(e),u=UM(e),f=bM(e),d=TM(s),g=i.createProgram(),x,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(_o).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(_o).join(`
`),p.length>0&&(p+=`
`)):(x=[cm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),p=[cm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Xt.tonemapping_pars_fragment:"",e.toneMapping!==$i?MM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,vM("linearToOutputTexel",e.outputColorSpace),SM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_o).join(`
`)),a=lf(a),a=am(a,e),a=om(a,e),o=lf(o),o=am(o,e),o=om(o,e),a=lm(a),o=lm(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+x+a,A=_+p+o,v=im(i,i.VERTEX_SHADER,S),w=im(i,i.FRAGMENT_SHADER,A);i.attachShader(g,v),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function y(E){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(v)||"",B=i.getShaderInfoLog(w)||"",I=D.trim(),z=N.trim(),G=B.trim(),F=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,v,w);else{let H=sm(i,v,"vertex"),R=sm(i,w,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+H+`
`+R)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(z===""||G==="")&&(Q=!1);Q&&(E.diagnostics={runnable:F,programLog:I,vertexShader:{log:z,prefix:x},fragmentShader:{log:G,prefix:p}})}i.deleteShader(v),i.deleteShader(w),m=new ca(i,g),M=wM(i,g)}let m;this.getUniforms=function(){return m===void 0&&y(this),m};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,mM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=w,this}var OM=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hf(t),e.set(t,n)),n}},hf=class{constructor(t){this.id=OM++,this.code=t,this.usedTimes=0}};function BM(r){return r===Hr||r===fo||r===po}function zM(r,t,e,n,i,s){let a=new Za,o=new cf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(m){return l.add(m),m===0?"uv":`uv${m}`}function g(m,M,P,E,D,N){let B=E.fog,I=D.geometry,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?E.environment:null,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=t.get(m.envMap||z,G),Q=f[m.type],H=n.precision;m.precision!==null&&(H=n.getMaxPrecision(m.precision),H!==m.precision&&zt("WebGLProgram.getParameters:",m.precision,"not supported, using",H,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=R!==void 0?R.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let At,q,ot,_t;if(Q){let nt=Qi[Q];At=nt.vertexShader,q=nt.fragmentShader}else{At=m.vertexShader,q=m.fragmentShader;let nt=o.getVertexShaderStage(m),Tt=o.getFragmentShaderStage(m);o.update(m,nt,Tt),ot=nt.id,_t=Tt.id}let St=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Nt=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,Et=!!m.map,Gt=!!m.matcap,Lt=!!F,Ft=Lt&&F.isPMREMTexture===!0,ce=!!m.aoMap,ae=!!m.lightMap,J=!!m.bumpMap&&m.wireframe===!1,$t=!!m.normalMap,Ye=!!m.displacementMap,Me=!!m.emissiveMap,ee=!!m.metalnessMap,Be=!!m.roughnessMap,We=m.anisotropy>0,O=m.clearcoat>0,ue=m.diffuseRoughness>0,oe=m.dispersion>0,Vt=m.retroreflectivity>0,ft=m.iridescence>0,he=m.sheen>0,Dt=m.transmission>0,Ot=We&&!!m.anisotropyMap,C=O&&!!m.clearcoatMap,b=O&&!!m.clearcoatNormalMap,V=O&&!!m.clearcoatRoughnessMap,st=ue&&!!m.diffuseRoughnessMap,it=ft&&!!m.iridescenceMap,ht=ft&&!!m.iridescenceThicknessMap,gt=he&&!!m.sheenColorMap,W=he&&!!m.sheenRoughnessMap,tt=!!m.specularMap,ct=!!m.specularColorMap,L=!!m.specularIntensityMap,K=Dt&&!!m.transmissionMap,$=Dt&&!!m.thicknessMap,dt=!!m.gradientMap,lt=!!m.alphaMap,pt=m.alphaTest>0,at=!!m.alphaHash,mt=!!m.extensions,rt=$i;m.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(rt=r.toneMapping);let et=Ft?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,vt={shaderID:Q,shaderType:m.type,shaderName:m.name,vertexShader:At,fragmentShader:q,defines:m.defines,customVertexShaderID:ot,customFragmentShaderID:_t,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:H,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&D.instanceColor!==null,instancingMorph:Nt&&D.morphTexture!==null,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Et,matcap:Gt,envMap:Lt,envMapMode:Lt&&F.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?et.length-1:null,envMapSize:Ft?et[0].width:null,aoMap:ce,lightMap:ae,bumpMap:J,normalMap:$t,displacementMap:Ye,emissiveMap:Me,normalMapObjectSpace:$t&&m.normalMapType===Pp,normalMapTangentSpace:$t&&m.normalMapType===ku,packedNormalMap:$t&&m.normalMapType===ku&&BM(m.normalMap.format),metalnessMap:ee,roughnessMap:Be,anisotropy:We,anisotropyMap:Ot,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:V,diffuseRoughness:ue,diffuseRoughnessMap:st,dispersion:oe,retroreflection:Vt,iridescence:ft,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:he,sheenColorMap:gt,sheenRoughnessMap:W,specularMap:tt,specularColorMap:ct,specularIntensityMap:L,transmission:Dt,transmissionMap:K,thicknessMap:$,gradientMap:dt,opaque:m.transparent===!1&&m.blending===Gr&&m.alphaToCoverage===!1,alphaMap:lt,alphaTest:pt,alphaHash:at,combine:m.combine,mapUv:Et&&d(m.map.channel),aoMapUv:ce&&d(m.aoMap.channel),lightMapUv:ae&&d(m.lightMap.channel),bumpMapUv:J&&d(m.bumpMap.channel),normalMapUv:$t&&d(m.normalMap.channel),displacementMapUv:Ye&&d(m.displacementMap.channel),emissiveMapUv:Me&&d(m.emissiveMap.channel),metalnessMapUv:ee&&d(m.metalnessMap.channel),roughnessMapUv:Be&&d(m.roughnessMap.channel),anisotropyMapUv:Ot&&d(m.anisotropyMap.channel),clearcoatMapUv:C&&d(m.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(m.diffuseRoughnessMap.channel),iridescenceMapUv:it&&d(m.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&d(m.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&d(m.sheenColorMap.channel),sheenRoughnessMapUv:W&&d(m.sheenRoughnessMap.channel),specularMapUv:tt&&d(m.specularMap.channel),specularColorMapUv:ct&&d(m.specularColorMap.channel),specularIntensityMapUv:L&&d(m.specularIntensityMap.channel),transmissionMapUv:K&&d(m.transmissionMap.channel),thicknessMapUv:$&&d(m.thicknessMap.channel),alphaMapUv:lt&&d(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($t||We),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Et||lt),fog:!!B,useFog:m.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&$t===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ut,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:xt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(nt=>nt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:Et&&m.map.isVideoTexture===!0&&te.getTransfer(m.map.colorSpace)===me,decodeVideoTextureEmissive:Me&&m.emissiveMap.isVideoTexture===!0&&te.getTransfer(m.emissiveMap.colorSpace)===me,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ji,flipSided:m.side===zn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:mt&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&m.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function x(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let P in m.defines)M.push(P),M.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(p(M,m),_(M,m),M.push(r.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function p(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapPMREM),m.push(M.envMapMaxLod),m.push(M.envMapSize),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.diffuseRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.numLightProbeGrids),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function _(m,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function S(m){let M=f[m.type],P;if(M){let E=Qi[M];P=Wp.clone(E.uniforms)}else P=m.uniforms;return P}function A(m,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new FM(r,M,m,i),c.push(P),h.set(M,P)),P}function v(m){if(--m.usedTimes===0){let M=c.indexOf(m);c[M]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function y(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:A,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:y}}function kM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function VM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function hm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function um(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,x,p,_){let S=r[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:_},r[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=g,S.materialVariant=a(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=p,S.group=_),t++,S}function l(f,d,g,x,p,_,S){S.reversedDepth===!0&&(p=-p);let A=o(f,d,g,x,p,_);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):e.push(A)}function c(f,d,g,x,p,_){let S=o(f,d,g,x,p,_);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||VM),n.length>1&&n.sort(d||hm),i.length>1&&i.sort(d||hm)}function u(){for(let f=t,d=r.length;f<d;f++){let g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function GM(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new um,r.set(n,[a])):i>=s.length?(a=new um,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function HM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new se};break;case"SpotLight":e={position:new Z,direction:new Z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function WM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var XM=0;function qM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function YM(r){let t=new HM,e=WM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new Ne,a=new Ne;function o(c){let h=0,u=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,g=0,x=0,p=0,_=0,S=0,A=0,v=0,w=0,y=0,m=0,M=0,P=0,E=0;c.sort(qM);for(let N=0,B=c.length;N<B;N++){let I=c[N],z=I.color,G=I.intensity,F=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hr?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*G,u+=z.g*G,f+=z.b*G;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],G);E++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=Q;let xt=R.getViewportCount();for(let At=0;At<xt;At++)n.sunShadowMatrix[x+At]=R.getMatrix(At),n.sunShadowCascade[x+At]=R._cascadeData[At];x+=xt,g++}n.sun[d]=H,d++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(z).multiplyScalar(G),H.distance=F,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[S]=H;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[S]=R.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=Q,m++}S++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(z).multiplyScalar(G),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=H,A++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let R=I.shadow,j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=I.shadow.matrix,y++}n.point[_]=H,_++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(G),H.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[v]=H,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==p||D.pointLength!==_||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==y||D.numSpotShadows!==m||D.numSpotMaps!==M||D.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=A,n.point.length=_,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=E,D.sunLength=d,D.directionalLength=p,D.pointLength=_,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=y,D.numSpotShadows=m,D.numSpotMaps=M,D.numLightProbes=E,n.version=XM++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=0,_=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let v=c[S];if(v.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(_),u++}else if(v.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(_),f++}else if(v.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(_),g++}else if(v.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:o,setupView:l,state:n}}function fm(r){let t=new YM(r),e=[],n=[],i=[];function s(u){h.camera=u,e.length=0,n.length=0,i.length=0}function a(u){u.isLightProbeGrid?i.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ZM(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new fm(r),t.set(i,[o])):s>=a.length?(o=new fm(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`,KM=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],QM=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],dm=new Ne,go=new Z,rf=new Z;function jM(r,t,e){let n=new ds,i=new ie,s=new ie,a=new we,o=new ql,l=new Yl,c={},h=e.maxTextureSize,u={[Vr]:zn,[zn]:Vr,[Ji]:Ji},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:JM,fragmentShader:$M}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ui;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Zi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let _=this.type;this.render=function(y,m,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===op&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);let P=r.getRenderTarget(),E=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ps),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=_!==this.type;B&&m.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=y.length;I<z;I++){let G=y[I],F=G.shadow;if(F===void 0){zt("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let Q=F.getFrameExtents();i.multiply(Q),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,F.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===aa){if(G.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new li(i.x,i.y,{format:Hr,type:Bi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new dr(i.x,i.y,Oi),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=fr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn}else G.isPointLight?(F.map=new xo(i.x),F.map.depthTexture=new eo(i.x,Fi)):(F.map=new li(i.x,i.y),F.map.depthTexture=new dr(i.x,i.y,Fi)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=fr,this.type===ao?(F.map.depthTexture.compareFunction=H?Gu:Vu,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();G.isPointLight!==!0&&F.updateMatrices(G,M);let j=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let xt=0;xt<R;xt++){let At=F.getCamera(xt);if(G.isPointLight){let q=F.camera,ot=F.matrix,_t=G.distance||q.far;_t!==q.far&&(q.far=_t,q.updateProjectionMatrix()),go.setFromMatrixPosition(G.matrixWorld),q.position.copy(go),rf.copy(q.position),rf.add(KM[xt]),q.up.copy(QM[xt]),q.lookAt(rf),q.updateMatrixWorld(),ot.makeTranslation(-go.x,-go.y,-go.z),dm.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(dm,q.coordinateSystem,q.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(F.map),r.clear());let q=F.getViewport(xt);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),N.viewport(a)}n=F.getFrustum(xt),v(m,M,At,G,j,this.type)}F.isPointLightShadow!==!0&&this.type===aa&&S(F,M),F.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(P,E,D)};function S(y,m){let M=t.update(x);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new li(i.x,i.y,{format:Hr,type:Bi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(m,null,M,f,x,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(m,null,M,d,x,null)}function A(y,m,M,P){let E=null,D=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)E=D;else if(E=M.isPointLight===!0?l:o,r.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let N=E.uuid,B=m.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let z=I[B];z===void 0&&(z=E.clone(),I[B]=z,m.addEventListener("dispose",w)),E=z}if(E.visible=m.visible,E.wireframe=m.wireframe,P===aa?E.side=m.shadowSide!==null?m.shadowSide:m.side:E.side=m.shadowSide!==null?m.shadowSide:u[m.side],E.alphaMap=m.alphaMap,E.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,E.map=m.map,E.clipShadows=m.clipShadows,E.clippingPlanes=m.clippingPlanes,E.clipIntersection=m.clipIntersection,E.displacementMap=m.displacementMap,E.displacementScale=m.displacementScale,E.displacementBias=m.displacementBias,E.wireframeLinewidth=m.wireframeLinewidth,E.linewidth=m.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=r.properties.get(E);N.light=M}return E}function v(y,m,M,P,E,D){if(y.visible===!1)return;if(y.layers.test(E)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===aa)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let I=t.update(y),z=y.material;if(Array.isArray(z)){let G=I.groups;for(let F=0,Q=G.length;F<Q;F++){let H=G[F],R=z[H.materialIndex];if(R&&R.visible){let j=A(y,R,P,D);y.onBeforeShadow(r,y,m,M,I,j,H),r.renderBufferDirect(M,null,I,j,y,H),y.onAfterShadow(r,y,m,M,I,j,H)}}}else if(z.visible){let G=A(y,z,P,D);y.onBeforeShadow(r,y,m,M,I,G,null),r.renderBufferDirect(M,null,I,G,y,null),y.onAfterShadow(r,y,m,M,I,G,null)}}let B=y.children;for(let I=0,z=B.length;I<z;I++)v(B[I],m,M,P,E,D)}function w(y){y.target.removeEventListener("dispose",w);for(let M in c){let P=c[M],E=y.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function tS(r,t){function e(){let L=!1,K=new we,$=null,dt=new we(0,0,0,0);return{setMask:function(lt){$!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){L=lt},setClear:function(lt,pt,at,mt,rt){rt===!0&&(lt*=mt,pt*=mt,at*=mt),K.set(lt,pt,at,mt),dt.equals(K)===!1&&(r.clearColor(lt,pt,at,mt),dt.copy(K))},reset:function(){L=!1,$=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,K=!1,$=null,dt=null,lt=null;return{setReversed:function(pt){if(K!==pt){let at=t.get("EXT_clip_control");pt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),K=pt;let mt=lt;lt=null,this.setClear(mt)}},getReversed:function(){return K},setTest:function(pt){pt?ut(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(pt){$!==pt&&!L&&(r.depthMask(pt),$=pt)},setFunc:function(pt){if(K&&(pt=Vp[pt]),dt!==pt){switch(pt){case El:r.depthFunc(r.NEVER);break;case Cl:r.depthFunc(r.ALWAYS);break;case Rl:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case Pl:r.depthFunc(r.EQUAL);break;case Il:r.depthFunc(r.GEQUAL);break;case Ll:r.depthFunc(r.GREATER);break;case Dl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=pt}},setLocked:function(pt){L=pt},setClear:function(pt){lt!==pt&&(lt=pt,K&&(pt=1-pt),r.clearDepth(pt))},reset:function(){L=!1,$=null,dt=null,lt=null,K=!1}}}function i(){let L=!1,K=null,$=null,dt=null,lt=null,pt=null,at=null,mt=null,rt=null;return{setTest:function(et){L||(et?ut(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(et){K!==et&&!L&&(r.stencilMask(et),K=et)},setFunc:function(et,vt,nt){($!==et||dt!==vt||lt!==nt)&&(r.stencilFunc(et,vt,nt),$=et,dt=vt,lt=nt)},setOp:function(et,vt,nt){(pt!==et||at!==vt||mt!==nt)&&(r.stencilOp(et,vt,nt),pt=et,at=vt,mt=nt)},setLocked:function(et){L=et},setClear:function(et){rt!==et&&(r.clearStencil(et),rt=et)},reset:function(){L=!1,K=null,$=null,dt=null,lt=null,pt=null,at=null,mt=null,rt=null}}}let s=new e,a=new n,o=new i,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,p=!1,_=null,S=null,A=null,v=null,w=null,y=null,m=null,M=new se(0,0,0),P=0,E=!1,D=null,N=null,B=null,I=null,z=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=Q>=2);let R=null,j={},xt=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),q=new we().fromArray(xt),ot=new we().fromArray(At);function _t(L,K,$,dt){let lt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(L,pt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<$;at++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(K+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return pt}let St={};St[r.TEXTURE_2D]=_t(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=_t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=_t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=_t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(r.DEPTH_TEST),a.setFunc(ta),J(!1),$t(xu),ut(r.CULL_FACE),ce(ps);function ut(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Nt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function xe(L,K){return f[L]!==K?(r.bindFramebuffer(L,K),f[L]=K,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=K),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=K),!0):!1}function Et(L,K){let $=g,dt=!1;if(L){$=d.get(K),$===void 0&&($=[],d.set(K,$));let lt=L.textures;if($.length!==lt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,at=lt.length;pt<at;pt++)$[pt]=r.COLOR_ATTACHMENT0+pt;$.length=lt.length,dt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,dt=!0);dt&&r.drawBuffers($)}function Gt(L){return x!==L?(r.useProgram(L),x=L,!0):!1}let Lt={[ms]:r.FUNC_ADD,[cp]:r.FUNC_SUBTRACT,[hp]:r.FUNC_REVERSE_SUBTRACT};Lt[up]=r.MIN,Lt[fp]=r.MAX;let Ft={[dp]:r.ZERO,[pp]:r.ONE,[mp]:r.SRC_COLOR,[Su]:r.SRC_ALPHA,[Mp]:r.SRC_ALPHA_SATURATE,[vp]:r.DST_COLOR,[_p]:r.DST_ALPHA,[gp]:r.ONE_MINUS_SRC_COLOR,[bu]:r.ONE_MINUS_SRC_ALPHA,[yp]:r.ONE_MINUS_DST_COLOR,[xp]:r.ONE_MINUS_DST_ALPHA,[Sp]:r.CONSTANT_COLOR,[bp]:r.ONE_MINUS_CONSTANT_COLOR,[Tp]:r.CONSTANT_ALPHA,[wp]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(L,K,$,dt,lt,pt,at,mt,rt,et){if(L===ps){p===!0&&(Nt(r.BLEND),p=!1);return}if(p===!1&&(ut(r.BLEND),p=!0),L!==lp){if(L!==_||et!==E){if((S!==ms||w!==ms)&&(r.blendEquation(r.FUNC_ADD),S=ms,w=ms),et)switch(L){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vu:r.blendFunc(r.ONE,r.ONE);break;case yu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:kt("WebGLState: Invalid blending: ",L);break}else switch(L){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",L);break}A=null,v=null,y=null,m=null,M.set(0,0,0),P=0,_=L,E=et}return}lt=lt||K,pt=pt||$,at=at||dt,(K!==S||lt!==w)&&(r.blendEquationSeparate(Lt[K],Lt[lt]),S=K,w=lt),($!==A||dt!==v||pt!==y||at!==m)&&(r.blendFuncSeparate(Ft[$],Ft[dt],Ft[pt],Ft[at]),A=$,v=dt,y=pt,m=at),(mt.equals(M)===!1||rt!==P)&&(r.blendColor(mt.r,mt.g,mt.b,rt),M.copy(mt),P=rt),_=L,E=!1}function ae(L,K){L.side===Ji?Nt(r.CULL_FACE):ut(r.CULL_FACE);let $=L.side===zn;K&&($=!$),J($),L.blending===Gr&&L.transparent===!1?ce(ps):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){D!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),D=L)}function $t(L){L!==sp?(ut(r.CULL_FACE),L!==N&&(L===xu?r.cullFace(r.BACK):L===ap?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),N=L}function Ye(L){L!==B&&(F&&r.lineWidth(L),B=L)}function Me(L,K,$){L?(ut(r.POLYGON_OFFSET_FILL),(I!==K||z!==$)&&(I=K,z=$,a.getReversed()&&(K=-K,$=-$),r.polygonOffset(K,$))):Nt(r.POLYGON_OFFSET_FILL)}function ee(L){L?ut(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function Be(L){L===void 0&&(L=r.TEXTURE0+G-1),R!==L&&(r.activeTexture(L),R=L)}function We(L,K,$){$===void 0&&(R===null?$=r.TEXTURE0+G-1:$=R);let dt=j[$];dt===void 0&&(dt={type:void 0,texture:void 0},j[$]=dt),(dt.type!==L||dt.texture!==K)&&(R!==$&&(r.activeTexture($),R=$),r.bindTexture(L,K||St[L]),dt.type=L,dt.texture=K)}function O(){let L=j[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{r.compressedTexImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function oe(){try{r.compressedTexImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Vt(){try{r.texSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function ft(){try{r.texSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function Dt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function Ot(){try{r.texStorage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function C(){try{r.texStorage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function b(){try{r.texImage2D(...arguments)}catch(L){kt("WebGLState:",L)}}function V(){try{r.texImage3D(...arguments)}catch(L){kt("WebGLState:",L)}}function st(L){return u[L]!==void 0?u[L]:r.getParameter(L)}function it(L,K){u[L]!==K&&(r.pixelStorei(L,K),u[L]=K)}function ht(L){q.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function gt(L){ot.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function W(L,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let dt=$.get(L);dt===void 0&&(dt=r.getUniformBlockIndex(K,L.name),r.uniformBlockBinding(K,dt,dt),$.set(L,dt))}function tt(L,K,$){let lt=c.get(K).get(L);l[lt]!==$&&(r.bindBufferBase(r.UNIFORM_BUFFER,lt,$),l[lt]=$)}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},R=null,j={},f={},l={},d=new WeakMap,g=[],x=null,p=!1,_=null,S=null,A=null,v=null,w=null,y=null,m=null,M=new se(0,0,0),P=0,E=!1,D=null,N=null,B=null,I=null,z=null,q.set(0,0,r.canvas.width,r.canvas.height),ot.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:Nt,bindFramebuffer:xe,drawBuffers:Et,useProgram:Gt,setBlending:ce,setMaterial:ae,setFlipSided:J,setCullFace:$t,setLineWidth:Ye,setPolygonOffset:Me,setScissorTest:ee,activeTexture:Be,bindTexture:We,unbindTexture:O,compressedTexImage2D:ue,compressedTexImage3D:oe,texImage2D:b,texImage3D:V,pixelStorei:it,getParameter:st,updateUBOMapping:W,uniformBlockBinding:tt,texStorage2D:Ot,texStorage3D:C,texSubImage2D:Vt,texSubImage3D:ft,compressedTexSubImage2D:he,compressedTexSubImage3D:Dt,scissor:ht,viewport:gt,reset:ct}}function eS(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,x=new FinalizationRegistry(C=>g.delete(C)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return p?new OffscreenCanvas(C,b):qa("canvas")}function S(C,b,V){let st=1,it=Ot(C);if((it.width>V||it.height>V)&&(st=V/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ht=Math.floor(st*it.width),gt=Math.floor(st*it.height);f===void 0&&(f=_(ht,gt));let W=b?_(ht,gt):f;return W.width=ht,W.height=gt,W.getContext("2d").drawImage(C,0,0,ht,gt),zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+gt+")."),W}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function A(C){return C.generateMipmaps}function v(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,b,V,st,it,ht=!1){if(C!==null){if(r[C]!==void 0)return r[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=b;if(b===r.RED&&(V===r.FLOAT&&(W=r.R32F),V===r.HALF_FLOAT&&(W=r.R16F),V===r.UNSIGNED_BYTE&&(W=r.R8),V===r.UNSIGNED_SHORT&&gt&&(W=gt.R16_EXT),V===r.SHORT&&gt&&(W=gt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(W=r.R8UI),V===r.UNSIGNED_SHORT&&(W=r.R16UI),V===r.UNSIGNED_INT&&(W=r.R32UI),V===r.BYTE&&(W=r.R8I),V===r.SHORT&&(W=r.R16I),V===r.INT&&(W=r.R32I)),b===r.RG&&(V===r.FLOAT&&(W=r.RG32F),V===r.HALF_FLOAT&&(W=r.RG16F),V===r.UNSIGNED_BYTE&&(W=r.RG8),V===r.UNSIGNED_SHORT&&gt&&(W=gt.RG16_EXT),V===r.SHORT&&gt&&(W=gt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(W=r.RG8UI),V===r.UNSIGNED_SHORT&&(W=r.RG16UI),V===r.UNSIGNED_INT&&(W=r.RG32UI),V===r.BYTE&&(W=r.RG8I),V===r.SHORT&&(W=r.RG16I),V===r.INT&&(W=r.RG32I)),b===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(W=r.RGB8UI),V===r.UNSIGNED_SHORT&&(W=r.RGB16UI),V===r.UNSIGNED_INT&&(W=r.RGB32UI),V===r.BYTE&&(W=r.RGB8I),V===r.SHORT&&(W=r.RGB16I),V===r.INT&&(W=r.RGB32I)),b===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),V===r.UNSIGNED_INT&&(W=r.RGBA32UI),V===r.BYTE&&(W=r.RGBA8I),V===r.SHORT&&(W=r.RGBA16I),V===r.INT&&(W=r.RGBA32I)),b===r.RGB&&(V===r.UNSIGNED_SHORT&&gt&&(W=gt.RGB16_EXT),V===r.SHORT&&gt&&(W=gt.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),b===r.RGBA){let tt=ht?Wa:te.getTransfer(it);V===r.FLOAT&&(W=r.RGBA32F),V===r.HALF_FLOAT&&(W=r.RGBA16F),V===r.UNSIGNED_BYTE&&(W=tt===me?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&gt&&(W=gt.RGBA16_EXT),V===r.SHORT&&gt&&(W=gt.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function m(C,b){let V;return C?b===null||b===Fi||b===_s?V=r.DEPTH24_STENCIL8:b===Oi?V=r.DEPTH32F_STENCIL8:b===la&&(V=r.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===_s?V=r.DEPTH_COMPONENT24:b===Oi?V=r.DEPTH_COMPONENT32F:b===la&&(V=r.DEPTH_COMPONENT16),V}function M(C,b){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==mn&&C.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){let b=new WeakRef(C);n.get(C).__ref=b,g.add(b),x.register(C,b,b)}function E(C){let b=n.get(C).__ref;b!==void 0&&(g.delete(b),x.unregister(b))}function D(C){B(C.target)}function N(C){I(C.target)}function B(C){C.removeEventListener("dispose",D),E(C),G(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",N),E(C),Q(C)}function z(){for(let C of g){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):B(b))}g.clear(),u.clear()}function G(C){let b=n.get(C);if(b.__webglInit===void 0)return;let V=C.source,st=d.get(V);if(st){let it=st[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(C),Object.keys(st).length===0&&d.delete(V)}n.remove(C)}function F(C){let b=n.get(C);r.deleteTexture(b.__webglTexture);let V=C.source,st=d.get(V);delete st[b.__cacheKey],a.memory.textures--}function Q(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&B(V),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ht=0;ht<b.__webglFramebuffer[it].length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[it][ht]);else r.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)r.deleteFramebuffer(b.__webglFramebuffer[it]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=C.textures;for(let it=0,ht=st.length;it<ht;it++){let gt=n.get(st[it]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(st[it])}n.remove(C)}let H=0;function R(){H=0}function j(){return H}function xt(C){H=C}function At(){let C=H;return C>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function q(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ot(C,b){let V=n.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let st=C.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(V,C,b);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+b)}function _t(C,b){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ae(V,C,b);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+b)}function St(C,b){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ae(V,C,b);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+b)}function ut(C,b){let V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+b)}let Nt={[Nl]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Ul]:r.MIRRORED_REPEAT},xe={[mn]:r.NEAREST,[Cp]:r.NEAREST_MIPMAP_NEAREST,[oo]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[cc]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},Et={[Lp]:r.NEVER,[Hu]:r.ALWAYS,[Dp]:r.LESS,[Vu]:r.LEQUAL,[Np]:r.EQUAL,[Gu]:r.GEQUAL,[Up]:r.GREATER,[Fp]:r.NOTEQUAL};function Gt(C,b){if(b.type===Oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===cc||b.magFilter===oo||b.magFilter===pr||b.minFilter===Bn||b.minFilter===cc||b.minFilter===oo||b.minFilter===pr)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Nt[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Nt[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Nt[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,xe[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mn||b.minFilter!==oo&&b.minFilter!==pr||b.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(C,b){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D),P(b));let st=b.source,it=d.get(st);it===void 0&&(it={},d.set(st,it));let ht=q(b);if(ht!==C.__cacheKey){it[ht]===void 0&&(it[ht]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),it[ht].usedTimes++;let gt=it[C.__cacheKey];gt!==void 0&&(it[C.__cacheKey].usedTimes--,gt.usedTimes===0&&F(b)),C.__cacheKey=ht,C.__webglTexture=it[ht].texture}return V}function Ft(C,b,V){return Math.floor(Math.floor(C/V)/b)}function ce(C,b,V,st){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,V,st,b.data);else{ht.sort((L,K)=>L.start-K.start);let gt=0;for(let L=1;L<ht.length;L++){let K=ht[gt],$=ht[L],dt=K.start+K.count,lt=Ft($.start,b.width,4),pt=Ft(K.start,b.width,4);$.start<=dt+1&&lt===pt&&Ft($.start+$.count-1,b.width,4)===lt?K.count=Math.max(K.count,$.start+$.count-K.start):(++gt,ht[gt]=$)}ht.length=gt+1;let W=e.getParameter(r.UNPACK_ROW_LENGTH),tt=e.getParameter(r.UNPACK_SKIP_PIXELS),ct=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let L=0,K=ht.length;L<K;L++){let $=ht[L],dt=Math.floor($.start/4),lt=Math.ceil($.count/4),pt=dt%b.width,at=Math.floor(dt/b.width),mt=lt,rt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(r.UNPACK_SKIP_ROWS,at),e.texSubImage2D(r.TEXTURE_2D,0,pt,at,mt,rt,V,st,b.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,W),e.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ct)}}function ae(C,b,V){let st=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=r.TEXTURE_3D);let it=Lt(C,b),ht=b.source;e.bindTexture(st,C.__webglTexture,r.TEXTURE0+V);let gt=n.get(ht);if(ht.version!==gt.__version||it===!0){if(e.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let rt=te.getPrimaries(te.workingColorSpace),et=b.colorSpace===gr?null:te.getPrimaries(b.colorSpace),vt=b.colorSpace===gr||rt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let tt=S(b.image,!1,i.maxTextureSize);tt=Dt(b,tt);let ct=s.convert(b.format,b.colorSpace),L=s.convert(b.type),K=y(b.internalFormat,ct,L,b.normalized,b.colorSpace,b.isVideoTexture);Gt(st,b);let $,dt=b.mipmaps,lt=b.isVideoTexture!==!0,pt=gt.__version===void 0||it===!0,at=ht.dataReady,mt=M(b,tt);if(b.isDepthTexture)K=m(b.format===mr,b.type),pt&&(lt?e.texStorage2D(r.TEXTURE_2D,1,K,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,K,tt.width,tt.height,0,ct,L,null));else if(b.isDataTexture)if(dt.length>0){lt&&pt&&e.texStorage2D(r.TEXTURE_2D,mt,K,dt[0].width,dt[0].height);for(let rt=0,et=dt.length;rt<et;rt++)$=dt[rt],lt?at&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,$.width,$.height,ct,L,$.data):e.texImage2D(r.TEXTURE_2D,rt,K,$.width,$.height,0,ct,L,$.data);b.generateMipmaps=!1}else lt?(pt&&e.texStorage2D(r.TEXTURE_2D,mt,K,tt.width,tt.height),at&&ce(b,tt,ct,L)):e.texImage2D(r.TEXTURE_2D,0,K,tt.width,tt.height,0,ct,L,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&pt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,K,dt[0].width,dt[0].height,tt.depth);for(let rt=0,et=dt.length;rt<et;rt++)if($=dt[rt],b.format!==zi)if(ct!==null)if(lt){if(at)if(b.layerUpdates.size>0){let vt=$u($.width,$.height,b.format,b.type);for(let nt of b.layerUpdates){let Tt=$.data.subarray(nt*vt/$.data.BYTES_PER_ELEMENT,(nt+1)*vt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,nt,$.width,$.height,1,ct,Tt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,tt.depth,ct,$.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,K,$.width,$.height,tt.depth,0,$.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,tt.depth,ct,L,$.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,K,$.width,$.height,tt.depth,0,ct,L,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{lt&&pt&&e.texStorage2D(r.TEXTURE_2D,mt,K,dt[0].width,dt[0].height);for(let rt=0,et=dt.length;rt<et;rt++)$=dt[rt],b.format!==zi?ct!==null?lt?at&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,$.width,$.height,ct,$.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,K,$.width,$.height,0,$.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,$.width,$.height,ct,L,$.data):e.texImage2D(r.TEXTURE_2D,rt,K,$.width,$.height,0,ct,L,$.data)}else if(b.isDataArrayTexture)if(lt){if(pt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,K,tt.width,tt.height,tt.depth),at)if(b.layerUpdates.size>0){let rt=$u(tt.width,tt.height,b.format,b.type);for(let et of b.layerUpdates){let vt=tt.data.subarray(et*rt/tt.data.BYTES_PER_ELEMENT,(et+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,L,vt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,L,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,K,tt.width,tt.height,tt.depth,0,ct,L,tt.data);else if(b.isData3DTexture)lt?(pt&&e.texStorage3D(r.TEXTURE_3D,mt,K,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,L,tt.data)):e.texImage3D(r.TEXTURE_3D,0,K,tt.width,tt.height,tt.depth,0,ct,L,tt.data);else if(b.isFramebufferTexture){if(pt)if(lt)e.texStorage2D(r.TEXTURE_2D,mt,K,tt.width,tt.height);else{let rt=tt.width,et=tt.height;for(let vt=0;vt<mt;vt++)e.texImage2D(r.TEXTURE_2D,vt,K,rt,et,0,ct,L,null),rt>>=1,et>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let rt=r.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),tt.parentNode!==rt){rt.appendChild(tt),u.add(b),rt.onpaint=et=>{let vt=et.changedElements;for(let nt of u)vt.includes(nt.image)&&(nt.needsUpdate=!0)},rt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,tt);else{let vt=r.RGBA,nt=r.RGBA,Tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,vt,nt,Tt,tt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(dt.length>0){if(lt&&pt){let rt=Ot(dt[0]);e.texStorage2D(r.TEXTURE_2D,mt,K,rt.width,rt.height)}for(let rt=0,et=dt.length;rt<et;rt++)$=dt[rt],lt?at&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ct,L,$):e.texImage2D(r.TEXTURE_2D,rt,K,ct,L,$);b.generateMipmaps=!1}else if(lt){if(pt){let rt=Ot(tt);e.texStorage2D(r.TEXTURE_2D,mt,K,rt.width,rt.height)}at&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,L,tt)}else e.texImage2D(r.TEXTURE_2D,0,K,ct,L,tt);A(b)&&b.mipmapsAutoUpdate===!0&&v(st),gt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function J(C,b,V){if(b.image.length!==6)return;let st=Lt(C,b),it=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);let ht=n.get(it);if(it.version!==ht.__version||st===!0){e.activeTexture(r.TEXTURE0+V);let gt=te.getPrimaries(te.workingColorSpace),W=b.colorSpace===gr?null:te.getPrimaries(b.colorSpace),tt=b.colorSpace===gr||gt===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!ct&&!L?K[nt]=S(b.image[nt],!0,i.maxCubemapSize):K[nt]=L?b.image[nt].image:b.image[nt],K[nt]=Dt(b,K[nt]);let $=K[0],dt=s.convert(b.format,b.colorSpace),lt=s.convert(b.type),pt=y(b.internalFormat,dt,lt,b.normalized,b.colorSpace),at=b.isVideoTexture!==!0,mt=ht.__version===void 0||st===!0,rt=it.dataReady,et=M(b,$);Gt(r.TEXTURE_CUBE_MAP,b);let vt;if(b.isDepthTexture){if(pt=m(b.format===mr,b.type),mt)if(at)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,pt,$.width,$.height);else for(let nt=0;nt<6;nt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,$.width,$.height,0,dt,lt,null)}else if(ct){at&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,pt,$.width,$.height);for(let nt=0;nt<6;nt++){vt=K[nt].mipmaps;for(let Tt=0;Tt<vt.length;Tt++){let Kt=vt[Tt];b.format!==zi?dt!==null?at?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Kt.width,Kt.height,dt,Kt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,Kt.width,Kt.height,0,Kt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Kt.width,Kt.height,dt,lt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,pt,Kt.width,Kt.height,0,dt,lt,Kt.data)}}}else{if(vt=b.mipmaps,at&&mt){vt.length>0&&et++;let nt=Ot(K[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,pt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,dt,lt,K[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,K[nt].width,K[nt].height,0,dt,lt,K[nt].data);for(let Tt=0;Tt<vt.length;Tt++){let Ht=vt[Tt].image[nt].image;at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Ht.width,Ht.height,dt,lt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,Ht.width,Ht.height,0,dt,lt,Ht.data)}}else{at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt,lt,K[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,pt,dt,lt,K[nt]);for(let Tt=0;Tt<vt.length;Tt++){let Kt=vt[Tt];at?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,dt,lt,Kt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,pt,dt,lt,Kt.image[nt])}}}A(b)&&b.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),ht.__version=it.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function $t(C,b,V,st,it,ht){let gt=s.convert(V.format,V.colorSpace),W=s.convert(V.type),tt=y(V.internalFormat,gt,W,V.normalized,V.colorSpace),ct=n.get(b),L=n.get(V);if(L.__renderTarget=b,!ct.__hasExternalTextures){let K=Math.max(1,b.width>>ht),$=Math.max(1,b.height>>ht);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,tt,K,$,b.depth,0,gt,W,null):e.texImage2D(it,ht,tt,K,$,0,gt,W,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),ft(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,it,L.__webglTexture,0,Vt(b)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,it,L.__webglTexture,ht),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(C,b,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){let st=b.depthTexture,it=st&&st.isDepthTexture?st.type:null,ht=m(b.stencilBuffer,it),gt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(b),ht,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,C)}else{let st=b.textures;for(let it=0;it<st.length;it++){let ht=st[it],gt=s.convert(ht.format,ht.colorSpace),W=s.convert(ht.type),tt=y(ht.internalFormat,gt,W,ht.normalized,ht.colorSpace);ft(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt(b),tt,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt(b),tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,tt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(C,b,V){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(b.depthTexture);it.__renderTarget=b;let ht=st?b.depthTexture.image[0]:b.depthTexture.image;(!it.__webglTexture||ht.width!==b.width||ht.height!==b.height)&&(ht.width=b.width,ht.height=b.height,b.depthTexture.needsUpdate=!0),st?ut(b.depthTexture,0):ot(b.depthTexture,0);let gt=it.__webglTexture,W=Vt(b),tt=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,ct=b.depthTexture.format===mr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===fr)ft(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,tt,gt,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,ct,tt,gt,0);else if(b.depthTexture.format===mr)ft(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,tt,gt,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,ct,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(C){let b=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let st=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=st}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let st=0;st<6;st++)Me(b.__webglFramebuffer[st],C,st);else C.texture.mipmaps.length>0?Me(b.__webglFramebuffer[0],C,0):Me(b.__webglFramebuffer,C,0);else if(V){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=r.createRenderbuffer(),Ye(b.__webglDepthbuffer[st],C,!1);else{let it=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ht)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ye(b.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(C,b,V){let st=n.get(C);b!==void 0&&$t(st.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ee(C)}function We(C){let b=C.texture,V=n.get(C),st=n.get(b);C.addEventListener("dispose",N),P(C);let it=C.textures,ht=C.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=b.version,a.memory.textures++),ht){V.__webglFramebuffer=[];for(let W=0;W<6;W++)if(b.mipmaps.length>0){V.__webglFramebuffer[W]=[];for(let tt=0;tt<b.mipmaps.length;tt++)V.__webglFramebuffer[W][tt]=r.createFramebuffer()}else V.__webglFramebuffer[W]=r.createFramebuffer()}else{if(b.mipmaps.length>0){V.__webglFramebuffer=[];for(let W=0;W<b.mipmaps.length;W++)V.__webglFramebuffer[W]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(gt)for(let W=0,tt=it.length;W<tt;W++){let ct=n.get(it[W]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ft(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let W=0;W<it.length;W++){let tt=it[W];V.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[W]);let ct=s.convert(tt.format,tt.colorSpace),L=s.convert(tt.type),K=y(tt.internalFormat,ct,L,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),$=Vt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,K,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,V.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ye(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,b);for(let W=0;W<6;W++)if(b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)$t(V.__webglFramebuffer[W][tt],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,tt);else $t(V.__webglFramebuffer[W],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);A(b)?v(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let W=0,tt=it.length;W<tt;W++){let ct=it[W],L=n.get(ct),K=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,L.__webglTexture),Gt(K,ct),$t(V.__webglFramebuffer,C,ct,r.COLOR_ATTACHMENT0+W,K,0),A(ct)&&v(K)}e.unbindTexture()}else{let W=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(W=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(W,st.__webglTexture),Gt(W,b),b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)$t(V.__webglFramebuffer[tt],C,b,r.COLOR_ATTACHMENT0,W,tt);else $t(V.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,W,0);A(b)?v(W):b.mipmaps.length>0&&r.texParameteri(W,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ee(C)}function O(C){let b=C.textures;for(let V=0,st=b.length;V<st;V++){let it=b[V];if(A(it)&&it.mipmapsAutoUpdate===!0){let ht=w(C),gt=n.get(it).__webglTexture;e.bindTexture(ht,gt),v(ht),e.unbindTexture()}}}let ue=[];function oe(C){if(C.samples>0){if(ft(C)===!1){let b=C.textures,V=C.width,st=C.height,it=r.COLOR_BUFFER_BIT,ht=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(C),W=b.length>1;if(W)for(let ct=0;ct<b.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let L=n.get(b[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,V,st,0,0,V,st,it,r.NEAREST),l===!0&&(ue.length=0,ue.push(r.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ue.push(ht),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let ct=0;ct<b.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let L=n.get(b[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,L,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Vt(C){return Math.min(i.maxSamples,C.samples)}function ft(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Dt(C,b){let V=C.colorSpace,st=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==us&&V!==gr&&(te.getTransfer(V)===me?(st!==zi||it!==ui)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",V)),b}function Ot(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=R,this.getTextureUnits=j,this.setTextureUnits=xt,this.setTexture2D=ot,this.setTexture2DArray=_t,this.setTexture3D=St,this.setTextureCube=ut,this.rebindTextures=Be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=ft,this.dispose=z}function nS(r,t){function e(n,i=gr){let s,a=te.getTransfer(i);if(n===ui)return r.UNSIGNED_BYTE;if(n===uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Du)return r.BYTE;if(n===Nu)return r.SHORT;if(n===la)return r.UNSIGNED_SHORT;if(n===hc)return r.INT;if(n===Fi)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===Ou)return r.ALPHA;if(n===Bu)return r.RGB;if(n===zi)return r.RGBA;if(n===fr)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===zu)return r.RED;if(n===dc)return r.RED_INTEGER;if(n===Hr)return r.RG;if(n===pc)return r.RG_INTEGER;if(n===mc)return r.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===xc||n===vc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Mc||n===Sc||n===bc||n===Tc||n===fo||n===wc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yc||n===Mc)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return s.COMPRESSED_R11_EAC;if(n===Tc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return s.COMPRESSED_RG11_EAC;if(n===wc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Ec||n===Cc||n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ac)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===Vc||n===Gc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===kc)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Wc||n===po||n===Xc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rS=`
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

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bi({vertexShader:iS,fragmentShader:rS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zi(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends qi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding!="undefined",p=new uf,_={},S=e.getContextAttributes(),A=null,v=null,w=[],y=[],m=new ie,M=null,P=null,E=new On;E.viewport=new we;let D=new On;D.viewport=new we;let N=[E,D],B=new sc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=w[q];return ot===void 0&&(ot=new ia,w[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=w[q];return ot===void 0&&(ot=new ia,w[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=w[q];return ot===void 0&&(ot=new ia,w[q]=ot),ot.getHandSpace()};function G(q){let ot=y.indexOf(q.inputSource);if(ot===-1)return;let _t=w[ot];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<w.length;q++){let ot=y[q];ot!==null&&(y[q]=null,w[q].disconnect(ot))}I=null,z=null,p.reset();for(let q in _)delete _[q];if(t.setRenderTarget(A),d=null,f=null,u=null,i=null,v=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(m.width,m.height,!1),P!==null){let q=P.camera;q.fov=P.fov,q.zoom=P.zoom,q.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(m),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,St=null,ut=null;S.depth&&(ut=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?mr:fr,St=S.stencil?_s:Fi);let Nt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Nt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new li(f.textureWidth,f.textureHeight,{format:zi,type:ui,depthTexture:new dr(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new li(d.framebufferWidth,d.framebufferHeight,{format:zi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(q){for(let ot=0;ot<q.removed.length;ot++){let _t=q.removed[ot],St=y.indexOf(_t);St>=0&&(y[St]=null,w[St].disconnect(_t))}for(let ot=0;ot<q.added.length;ot++){let _t=q.added[ot],St=y.indexOf(_t);if(St===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=y.length){y.push(_t),St=Nt;break}else if(y[Nt]===null){y[Nt]=_t,St=Nt;break}if(St===-1)break}let ut=w[St];ut&&ut.connect(_t)}}function H(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ot=q.near,_t=q.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),B.near=D.near=E.near=ot,B.far=D.far=E.far=_t,(I!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=q.layers.mask|6,E.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let St=q.parent,ut=B.cameras;H(B,St);for(let Nt=0;Nt<ut.length;Nt++)H(ut[Nt],St);B.projectionMatrix.copy(E.projectionMatrix),B.projectionMatrixInverse.copy(E.projectionMatrixInverse),P===null&&q.isPerspectiveCamera&&(P={camera:q,fov:q.fov,zoom:q.zoom}),R(q,B,St)};function R(q,ot,_t){_t===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ol*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(q){return _[q]};let j=null;function xt(q,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){let _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let St=!1;_t.length!==B.cameras.length&&(B.cameras.length=0,St=!0);for(let Et=0;Et<_t.length;Et++){let Gt=_t[Et],Lt=null;if(d!==null)Lt=d.getViewport(Gt);else{let ce=u.getViewSubImage(f,Gt);Lt=ce.viewport,Et===0&&(t.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(v))}let Ft=N[Et];Ft===void 0&&(Ft=new On,Ft.layers.enable(Et),Ft.viewport=new we,N[Et]=Ft),Ft.matrix.fromArray(Gt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Gt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Et===0&&(B.matrix.copy(Ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),St===!0&&B.cameras.push(Ft)}let ut=i.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Et=u.getDepthInformation(_t[0]);Et&&Et.isValid&&Et.texture&&p.init(Et,i.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Et=0;Et<_t.length;Et++){let Gt=_t[Et].camera;if(Gt){let Lt=_[Gt];Lt||(Lt=new no,_[Gt]=Lt);let Ft=u.getCameraImage(Gt);Lt.sourceTexture=Ft}}}}for(let _t=0;_t<w.length;_t++){let St=y[_t],ut=w[_t];St!==null&&ut!==void 0&&ut.update(St,ot,c||a)}j&&j(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let At=new pm;At.setAnimationLoop(xt),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}},sS=new Ne,Tm=new Bt;Tm.set(-1,0,0,0,1,0,0,0,1);function aS(r,t){function e(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,Yu(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function i(p,_,S,A,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(p,_):_.isMeshLambertMaterial?(s(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(p,_),u(p,_)):_.isMeshPhongMaterial?(s(p,_),h(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(p,_),f(p,_),_.isMeshPhysicalMaterial&&d(p,_,v)):_.isMeshMatcapMaterial?(s(p,_),g(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),x(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?l(p,_,S,A):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,e(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===zn&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,e(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===zn&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,e(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,e(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);let S=t.get(_),A=S.envMap,v=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Tm),p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,S,A){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*S,p.scale.value=A*.5,_.map&&(p.map.value=_.map,e(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function u(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function f(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function d(p,_,S){p.ior.value=_.ior,_.diffuseRoughness>0&&(p.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.retroreflectivity>0&&(p.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,_){_.matcap&&(p.matcap.value=_.matcap)}function x(p,_){let S=t.get(_).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oS(r,t,e,n){let i={},s={};function a(S,A){let v=A.program;n.uniformBlockBinding(S,v,i[S.id])}function o(S,A){let v=i[S.id];v===void 0&&(g(S),v=l(S),i[S.id]=v,S.addEventListener("dispose",p));let w=A.program;n.updateUBOMapping(S,w);let y=t.render.frame;s[S.id]!==y&&(c(S),s[S.id]=y)}function l(S){let A=r.createBuffer(),v=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,v,w),r.bindBuffer(r.UNIFORM_BUFFER,null),A}function c(S){let A=i[S.id],v=S.uniforms,w=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let y=0,m=v.length;y<m;y++){let M=v[y];if(Array.isArray(M))for(let P=0,E=M.length;P<E;P++)h(M[P],y,P,w);else h(M,y,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(S,A,v,w){if(f(S,A,v,w)===!0){let y=S.__offset,m=S.value;if(Array.isArray(m)){let M=0;for(let P=0;P<m.length;P++){let E=m[P],D=x(E,!0);u(E,S.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(m,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,S.__data)}}function u(S,A,v){typeof S=="number"||typeof S=="boolean"?A[v]=S:S.isMatrix3?(A[v]=S.elements[0],A[v+1]=S.elements[1],A[v+2]=S.elements[2],A[v+3]=0,A[v+4]=S.elements[3],A[v+5]=S.elements[4],A[v+6]=S.elements[5],A[v+7]=0,A[v+8]=S.elements[6],A[v+9]=S.elements[7],A[v+10]=S.elements[8],A[v+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-v),v):S.toArray(A,v)}function f(S,A,v,w){let y=S.value,m=A+"_"+v;if(Array.isArray(y)){w[m]===void 0&&(w[m]=[]);let M=w[m],P=!1;for(let E=0;E<y.length;E++)d(y[E],M,E)===!0&&(P=!0);return P}return d(y,w,m)}function d(S,A,v){if(A[v]===void 0)return typeof S=="number"||typeof S=="boolean"?A[v]=S:ArrayBuffer.isView(S)?A[v]=S.slice():A[v]=S.clone(),!0;{let w=A[v];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return A[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function g(S){let A=S.uniforms,v=0,w=16;for(let m=0,M=A.length;m<M;m++){let P=Array.isArray(A[m])?A[m]:[A[m]];for(let E=0,D=P.length;E<D;E++){let N=P[E],B=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(A[m])||Array.isArray(N.value),z=v;for(let F=0,Q=B.length;F<Q;F++){let H=B[F],R=x(H,I),j=v%w,xt=j%R.boundary,At=j+xt;v+=xt,At!==0&&w-At<R.storage&&(v+=w-At),F===0&&(z=v),v+=R.storage}let G=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new G((v-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}let y=v%w;return y>0&&(v+=w-y),S.__size=v,S.__cache={},this}function x(S,A){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(S){let A=S.target;A.removeEventListener("dispose",p),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function _(){for(let S in i)r.deleteBuffer(i[S]);i={},s={}}return{bind:a,update:o,dispose:_}}var lS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function cS(){return Ki===null&&(Ki=new Gl(lS,16,16,Hr,Bi),Ki.name="DFG_LUT",Ki.minFilter=Bn,Ki.magFilter=Bn,Ki.wrapS=Xi,Ki.wrapT=Xi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Jc=class{constructor(t={}){let{canvas:e=Bp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ui}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,p=new Set([mc,pc,dc]),_=new Set([ui,Fi,la,_s,uc,fc]),S=new Uint32Array(4),A=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,y=null,m=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,N=null,B=null,I=null,z=null;this._outputColorSpace=oi;let G=0,F=0,Q=null,H=-1,R=null,j=new we,xt=new we,At=null,q=new se(0),ot=0,_t=e.width,St=e.height,ut=1,Nt=null,xe=null,Et=new we(0,0,_t,St),Gt=new we(0,0,_t,St),Lt=!1,Ft=new ds,ce=new Hl,ae=!1,J=!1,$t=new Ne,Ye=new Z,Me=new we,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function We(){return Q===null?ut:1}let O=n;function ue(T,U){return e.getContext(T,U)}let oe,Vt,ft,he,Dt,Ot,C,b,V,st,it,ht,gt,W,tt,ct,L,K,$,dt,lt,pt,at;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),O===null){let U="webgl2";if(O=ue(U,T),O===null)throw ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(T){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),kt("WebGLRenderer: "+T.message),T}function mt(){oe=new yy(O),oe.init(),lt=new nS(O,oe),Vt=new cy(O,oe,t,lt),ft=new tS(O,oe),Vt.reversedDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),he=new by(O),Dt=new kM,Ot=new eS(O,oe,ft,Dt,Vt,lt,he),C=new vy(E),b=new w_(O),pt=new oy(O,b),V=new My(O,b,he,pt),st=new wy(O,V,b,pt,he),K=new Ty(O,Vt,Ot),tt=new hy(Dt),it=new zM(E,C,oe,Vt,pt,tt),ht=new aS(E,Dt),gt=new GM,W=new ZM(oe),L=new ay(E,C,ft,st,g,l),ct=new jM(E,st,Vt),at=new oS(O,he,Vt,ft),$=new ly(O,oe,he),dt=new Sy(O,oe,he),he.programs=it.programs,E.capabilities=Vt,E.extensions=oe,E.properties=Dt,E.renderLists=gt,E.shadowMap=ct,E.state=ft,E.info=he}x!==ui&&(P=new Ey(x,e.width,e.height,o,i,s));let rt=new ff(E,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(T){T!==void 0&&(ut=T,this.setSize(_t,St,!1))},this.getSize=function(T){return T.set(_t,St)},this.setSize=function(T,U,Y=!0){if(rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=T,St=U,e.width=Math.floor(T*ut),e.height=Math.floor(U*ut),Y===!0&&(e.style.width=T+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(_t*ut,St*ut).floor()},this.setDrawingBufferSize=function(T,U,Y){_t=T,St=U,ut=Y,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===ui){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,U,Y,k){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,U,Y,k),ft.viewport(j.copy(Et).multiplyScalar(We()).round())},this.getScissor=function(T){return T.copy(Gt)},this.setScissor=function(T,U,Y,k){T.isVector4?Gt.set(T.x,T.y,T.z,T.w):Gt.set(T,U,Y,k),ft.scissor(xt.copy(Gt).multiplyScalar(We()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){ft.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){Nt=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let k=0;if(T){let X=!1;if(Q!==null){let Mt=Q.texture.format;X=p.has(Mt)}if(X){let Mt=Q.texture.type,Rt=_.has(Mt),yt=L.getClearColor(),wt=L.getClearAlpha(),Ut=yt.r,Wt=yt.g,Qt=yt.b;Rt?(S[0]=Ut,S[1]=Wt,S[2]=Qt,S[3]=wt,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Ut,A[1]=Wt,A[2]=Qt,A[3]=wt,O.clearBufferiv(O.COLOR,0,A))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),gt.dispose(),W.dispose(),Ot.dispose(),Dt.dispose(),C.dispose(),st.dispose(),V.dispose(),pt.dispose(),at.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Se),rt.removeEventListener("sessionend",pe),en.stop()};function et(T){T.preventDefault(),Xu("WebGLRenderer: Context Lost."),D=!0}function vt(){Xu("WebGLRenderer: Context Restored."),D=!1;let T=he.autoReset,U=ct.enabled,Y=ct.autoUpdate,k=ct.needsUpdate,X=ct.type;mt(),he.autoReset=T,ct.enabled=U,ct.autoUpdate=Y,ct.needsUpdate=k,ct.type=X}function nt(T){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){let U=T.target;U.removeEventListener("dispose",Tt),Kt(U)}function Kt(T){Ht(T),Dt.remove(T)}function Ht(T){let U=Dt.get(T).programs;U!==void 0&&(U.forEach(function(Y){it.releaseProgram(Y)}),T.isShaderMaterial&&it.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,k,X,Mt){U===null&&(U=ee);let Rt=X.isMesh&&X.matrixWorld.determinantAffine()<0,yt=vi(T,U,Y,k,X);ft.setMaterial(k,Rt);let wt=Y.index,Ut=1;if(k.wireframe===!0){if(wt=V.getWireframeAttribute(Y),wt===void 0)return;Ut=2}let Wt=Y.drawRange,Qt=Y.attributes.position,Pt=Wt.start*Ut,jt=(Wt.start+Wt.count)*Ut;Mt!==null&&(Pt=Math.max(Pt,Mt.start*Ut),jt=Math.min(jt,(Mt.start+Mt.count)*Ut)),wt!==null?(Pt=Math.max(Pt,0),jt=Math.min(jt,wt.count)):Qt!=null&&(Pt=Math.max(Pt,0),jt=Math.min(jt,Qt.count));let $e=jt-Pt;if($e<0||$e===1/0)return;pt.setup(X,k,yt,Y,wt);let Ee,Te=$;if(wt!==null&&(Ee=b.get(wt),Te=dt,Te.setIndex(Ee)),X.isMesh)k.wireframe===!0?(ft.setLineWidth(k.wireframeLinewidth*We()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(X.isLine){let bn=k.linewidth;bn===void 0&&(bn=1),ft.setLineWidth(bn*We()),X.isLineSegments?Te.setMode(O.LINES):X.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else X.isPoints?Te.setMode(O.POINTS):X.isSprite&&Te.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Te.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let bn=X._multiDrawStarts,It=X._multiDrawCounts,Fn=X._multiDrawCount,fe=wt?b.get(wt).bytesPerElement:1,rs=Dt.get(k).currentProgram.getUniforms();for(let Tn=0;Tn<Fn;Tn++)rs.setValue(O,"_gl_DrawID",Tn),Te.render(bn[Tn]/fe,It[Tn])}else if(X.isInstancedMesh)Te.renderInstances(Pt,$e,X.count);else if(Y.isInstancedBufferGeometry){let bn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,bn);Te.renderInstances(Pt,$e,It)}else Te.render(Pt,$e)};function Pe(T,U,Y,k){N!==null&&T.isNodeMaterial&&N.setObject(k,T),ae===!0&&tt.setState(T,Y,!1),T.transparent===!0&&T.side===Ji&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,ri(T,U,k),T.side=Vr,T.needsUpdate=!0,ri(T,U,k),T.side=Ji):ri(T,U,k)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),N!==null&&N.renderStart(T,U,Y),y=W.get(Y),y.init(U),M.push(y),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),T!==Y&&T.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights(),N!==null&&N.updateLights(y.state.lightsArray),J=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,J),ae===!0&&tt.setGlobalState(this.clippingPlanes,U),N!==null&&ct.render(y.state.shadowsArray,Y,U);let k=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Mt=X.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){let yt=Mt[Rt];Pe(yt,Y,U,X),k.add(yt)}else Pe(Mt,Y,U,X),k.add(Mt)}),y=M.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(T,U,Y=null){let k=this.compile(T,U,Y);return new Promise(X=>{function Mt(){if(k.forEach(function(Rt){let wt=Dt.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&k.delete(Rt)}),k.size===0){X(T);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ze=null;function Ie(T){Ze&&Ze(T)}function Se(){en.stop()}function pe(){en.start()}let en=new pm;en.setAnimationLoop(Ie),typeof self!="undefined"&&en.setContext(self),this.setAnimationLoop=function(T){Ze=T,rt.setAnimationLoop(T),T===null?en.stop():en.start()},rt.addEventListener("sessionstart",Se),rt.addEventListener("sessionend",pe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(T,U);let Y=rt.enabled===!0&&rt.isPresenting===!0,k=P!==null&&(Q===null||Y)&&P.begin(E,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,U,Q),y=W.get(T,M.length),y.init(U),y.state.textureUnits=Ot.getTextureUnits(),M.push(y),$t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ce.setFromArrayCamera(U):Ft.setFromProjectionMatrix($t,Mi,U.reversedDepth),J=this.localClippingEnabled,ae=tt.init(this.clippingPlanes,J),w=gt.get(T,m.length),w.init(),m.push(w),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Rt=E.xr.getDepthSensingMesh();Rt!==null&&be(Rt,U,-1/0,E.sortObjects)}be(T,U,0,E.sortObjects),w.finish(),N!==null&&N.updateLights(y.state.lightsArray),E.sortObjects===!0&&w.sort(Nt,xe),Be=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Be&&L.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),ae===!0&&tt.beginShadows();let X=y.state.shadowsArray;if(ct.render(X,T,U),ae===!0&&tt.endShadows(),(k&&P.hasRenderPass())===!1){let Rt=w.opaque,yt=w.transmissive;if(y.setupLights(),U.isArrayCamera){let wt=U.cameras;if(yt.length>0)for(let Ut=0,Wt=wt.length;Ut<Wt;Ut++){let Qt=wt[Ut];ii(Rt,yt,T,Qt)}Be&&L.render(T);for(let Ut=0,Wt=wt.length;Ut<Wt;Ut++){let Qt=wt[Ut];Sn(w,T,Qt,Qt.viewport)}}else yt.length>0&&ii(Rt,yt,T,U),Be&&L.render(T),Sn(w,T,U)}Q!==null&&F===0&&(Ot.updateMultisampleRenderTarget(Q),Ot.updateRenderTargetMipmap(Q)),k&&P.end(E),T.isScene===!0&&T.onAfterRender(E,T,U),pt.resetDefaultState(),H=-1,R=null,M.pop(),M.length>0?(y=M[M.length-1],Ot.setTextureUnits(y.state.textureUnits),ae===!0&&tt.setGlobalState(E.clippingPlanes,y.state.camera)):y=null,m.pop(),m.length>0?w=m[m.length-1]:w=null,N!==null&&N.renderEnd()};function be(T,U,Y,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){let Rt=U.isArrayCamera?ce:Ft;if(!T.frustumCulled||T.intersectsFrustum(Rt)){k&&Me.setFromMatrixPosition(T.matrixWorld).applyMatrix4($t);let yt=st.update(T),wt=T.material;wt.visible&&w.push(T,yt,wt,Y,Me.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Rt=U.isArrayCamera?ce:Ft;if(!T.frustumCulled||T.intersectsFrustum(Rt)){let yt=st.update(T),wt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Me.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Me.copy(yt.boundingSphere.center)),Me.applyMatrix4(T.matrixWorld).applyMatrix4($t)),Array.isArray(wt)){let Ut=yt.groups;for(let Wt=0,Qt=Ut.length;Wt<Qt;Wt++){let Pt=Ut[Wt],jt=wt[Pt.materialIndex];jt&&jt.visible&&w.push(T,yt,jt,Y,Me.z,Pt,U)}}else wt.visible&&w.push(T,yt,wt,Y,Me.z,null,U)}}}let Mt=T.children;for(let Rt=0,yt=Mt.length;Rt<yt;Rt++)be(Mt[Rt],U,Y,k)}function Sn(T,U,Y,k){let{opaque:X,transmissive:Mt,transparent:Rt}=T;y.setupLightsView(Y),ae===!0&&tt.setGlobalState(E.clippingPlanes,Y),k&&ft.viewport(j.copy(k)),X.length>0&&ze(X,U,Y),Mt.length>0&&ze(Mt,U,Y),Rt.length>0&&ze(Rt,U,Y),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ii(T,U,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){let Pt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new li(1,1,{generateMipmaps:!0,type:Pt?Bi:ui,minFilter:pr,samples:Math.max(4,Vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let Mt=y.state.transmissionRenderTarget[k.id],Rt=k.viewport||j;Mt.setSize(Rt.z*E.transmissionResolutionScale,Rt.w*E.transmissionResolutionScale);let yt=E.getRenderTarget(),wt=E.getActiveCubeFace(),Ut=E.getActiveMipmapLevel();E.setRenderTarget(Mt),E.getClearColor(q),ot=E.getClearAlpha(),ot<1&&E.setClearColor(16777215,.5),E.clear(),Be&&L.render(Y);let Wt=E.toneMapping;E.toneMapping=$i;let Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),ae===!0&&tt.setGlobalState(E.clippingPlanes,k),ze(T,Y,k),Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let jt=0,$e=U.length;jt<$e;jt++){let Ee=U[jt],{object:Te,geometry:bn,material:It,group:Fn}=Ee;if(It.side===Ji&&Te.layers.test(k.layers)){let fe=It.side;It.side=zn,It.needsUpdate=!0,Je(Te,Y,k,bn,It,Fn),It.side=fe,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt))}E.setRenderTarget(yt,wt,Ut),E.setClearColor(q,ot),Qt!==void 0&&(k.viewport=Qt),E.toneMapping=Wt}function ze(T,U,Y){let k=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Mt=T.length;X<Mt;X++){let Rt=T[X],{object:yt,geometry:wt,group:Ut}=Rt,Wt=Rt.material;Wt.allowOverride===!0&&k!==null&&(Wt=k),yt.layers.test(Y.layers)&&Je(yt,U,Y,wt,Wt,Ut)}}function Je(T,U,Y,k,X,Mt){N!==null&&X.isNodeMaterial&&N.setObject(T,X),T.onBeforeRender(E,U,Y,k,X,Mt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(E,U,Y,k,T,Mt),X.transparent===!0&&X.side===Ji&&X.forceSinglePass===!1?(X.side=zn,X.needsUpdate=!0,E.renderBufferDirect(Y,U,k,X,T,Mt),X.side=Vr,X.needsUpdate=!0,E.renderBufferDirect(Y,U,k,X,T,Mt),X.side=Ji):E.renderBufferDirect(Y,U,k,X,T,Mt),T.onAfterRender(E,U,Y,k,X,Mt)}function nn(T){let U=0;for(let Y of T)Y.texture!==null&&U++;return U}function ri(T,U,Y){U.isScene!==!0&&(U=ee);let k=Dt.get(T),X=y.state.lights,Mt=y.state.shadowsArray,Rt=X.state.version,yt=it.getParameters(T,X.state,Mt,U,Y,y.state.lightProbeGridArray),wt=it.getProgramCacheKey(yt),Ut=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Wt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=C.get(T.envMap||k.environment,Wt),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Tt),Ut=new Map,k.programs=Ut,k.programVariants=new Map);let Qt=Ut.get(wt);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===Rt)return ke(T,yt),Qt}else yt.uniforms=it.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Y,yt),T.onBeforeCompile(yt,E),Qt=it.acquireProgram(yt,wt),Ut.set(wt,Qt),k.uniforms=yt.uniforms;let Pt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),ke(T,yt),k.needsLights=el(T),k.lightsStateVersion=Rt,k.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.sunLights.value=X.state.sun,Pt.sunLightShadows.value=X.state.sunShadow,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.sunShadowMatrix.value=X.state.sunShadowMatrix,Pt.sunShadowCascade.value=X.state.sunShadowCascade,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotLightMatrix.value=X.state.spotLightMatrix,Pt.spotLightMap.value=X.state.spotLightMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix),k.numLightProbeGrids=nn(y.state.lightProbeGridArray),k.currentProgram=Qt,k.uniformsList=null,Qt}function zs(T,U,Y,k,X){let Mt=Dt.get(T),Rt=Mt.currentProgram.id+","+k+","+X,yt=Mt.programVariants.get(Rt);return yt===void 0?(yt=ri(T,U,Y),Mt.programVariants.set(Rt,yt)):(Mt.currentProgram=yt,Mt.uniformsList=null,Mt.outputColorSpace=k,Mt.toneMapping=X),yt}function rn(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ca.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function ke(T,U){let Y=Dt.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function vi(T,U,Y,k,X){U.isScene!==!0&&(U=ee),Ot.resetTextureUnits();let Mt=U.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,yt=Q===null?E.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:te.workingColorSpace,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ut=C.get(k.envMap||Rt,wt),Wt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qt=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,$e=!!Y.morphAttributes.color,Ee=$i;k.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ee=E.toneMapping);let Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bn=Te!==void 0?Te.length:0,It=Dt.get(k),Fn=y.state.lights;if(ae===!0&&(J===!0||T!==R)){let De=T===R&&k.id===H;tt.setState(k,T,De)}let fe=!1,rs=!1;k.version===It.__version?It.needsLights&&It.lightsStateVersion!==Fn.state.version||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Ut||k.fog===!0&&It.fog!==Mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==Wt||It.vertexTangents!==Qt||It.morphTargets!==Pt||It.morphNormals!==jt||It.morphColors!==$e||It.morphTargetsCount!==bn||It.numLightProbeGrids!==nn(y.state.lightProbeGridArray)?fe=!0:(It.outputColorSpace!==yt||It.toneMapping!==Ee)&&(rs=!0):(fe=!0,It.__version=k.version);let Tn=It.currentProgram;(fe===!0||rs===!0)&&(Tn=rs===!0?zs(k,U,X,yt,Ee):ri(k,U,X),N&&k.isNodeMaterial&&N.onUpdateProgram(k,Tn,It));let nl=!1,Cr=!1,ss=!1,le=Tn.getUniforms(),xn=It.uniforms;if(ft.useProgram(Tn.program)&&(nl=!0,Cr=!0,ss=!0),k.id!==H&&(H=k.id,Cr=!0),nl||R!==T){ft.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),le.setValue(O,"projectionMatrix",T.projectionMatrix),le.setValue(O,"viewMatrix",T.matrixWorldInverse);let fn=le.map.cameraPosition;fn!==void 0&&fn.setValue(O,Ye.setFromMatrixPosition(T.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Cr=!0,ss=!0)}if(It.needsLights&&(Fn.state.sunShadowMap.length>0&&le.setValue(O,"sunShadowMap",Fn.state.sunShadowMap,Ot),Fn.state.directionalShadowMap.length>0&&le.setValue(O,"directionalShadowMap",Fn.state.directionalShadowMap,Ot),Fn.state.spotShadowMap.length>0&&le.setValue(O,"spotShadowMap",Fn.state.spotShadowMap,Ot),Fn.state.pointShadowMap.length>0&&le.setValue(O,"pointShadowMap",Fn.state.pointShadowMap,Ot)),X.isSkinnedMesh){le.setOptional(O,X,"bindMatrix"),le.setOptional(O,X,"bindMatrixInverse");let De=X.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),le.setValue(O,"boneTexture",De.boneTexture,Ot))}X.isBatchedMesh&&(le.setOptional(O,X,"batchingTexture"),le.setValue(O,"batchingTexture",X._matricesTexture,Ot),le.setOptional(O,X,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",X._indirectTexture,Ot),le.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",X._colorsTexture,Ot));let Pi=Y.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&K.update(X,Y,Tn),(Cr||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,le.setValue(O,"receiveShadow",X.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=cS()),Cr){if(le.setValue(O,"toneMappingExposure",E.toneMappingExposure),It.needsLights&&Oa(xn,ss),Mt&&k.fog===!0&&ht.refreshFogUniforms(xn,Mt),ht.refreshMaterialUniforms(xn,k,ut,St,y.state.transmissionRenderTarget[T.id]),It.needsLights&&It.numLightProbeGrids>0){let De=v,fn=0;for(let sr of y.state.lightProbeGridArray)sr.texture!==null&&(De.textures[fn]=sr.texture,De.min[fn]=sr.boundingBox.min,De.max[fn]=sr.boundingBox.max,De.resolution[fn]=sr.resolution,fn++);for(let sr in De)De[sr].length=fn;xn.probesSH.value=De.textures,xn.probesMin.value=De.min,xn.probesMax.value=De.max,xn.probesResolution.value=De.resolution}ca.upload(O,rn(It),xn,Ot)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ca.upload(O,rn(It),xn,Ot),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(O,"center",X.center),le.setValue(O,"modelViewMatrix",X.modelViewMatrix),le.setValue(O,"normalMatrix",X.normalMatrix),le.setValue(O,"modelMatrix",X.matrixWorld),k.uniformsGroups!==void 0){let De=k.uniformsGroups;for(let fn=0,sr=De.length;fn<sr;fn++){let Ud=De[fn];at.update(Ud,Tn),at.bind(Ud,Tn)}}return Tn}function Oa(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function el(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,U,Y){let k=Dt.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Dt.get(T.texture).__webglTexture=U,Dt.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Y=Dt.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){Q=T,G=U,F=Y;let k=null,X=!1,Mt=!1;if(T){let yt=Dt.get(T);if(yt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(O.FRAMEBUFFER,yt.__webglFramebuffer),j.copy(T.viewport),xt.copy(T.scissor),At=T.scissorTest,ft.viewport(j),ft.scissor(xt),ft.setScissorTest(At),H=-1;return}else if(yt.__webglFramebuffer===void 0)Ot.setupRenderTarget(T);else if(yt.__hasExternalTextures)Ot.rebindTextures(T,Dt.get(T.texture).__webglTexture,Dt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Wt=T.depthTexture;if(yt.__boundDepthTexture!==Wt){if(Wt!==null&&Dt.has(Wt)&&(T.width!==Wt.image.width||T.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(T)}}let wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);let Ut=Dt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?k=Ut[U][Y]:k=Ut[U],X=!0):T.samples>0&&Ot.useMultisampledRTT(T)===!1?k=Dt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[Y]:k=Ut,j.copy(T.viewport),xt.copy(T.scissor),At=T.scissorTest}else j.copy(Et).multiplyScalar(ut).floor(),xt.copy(Gt).multiplyScalar(ut).floor(),At=Lt;if(Y!==0&&(k=B),ft.bindFramebuffer(O.FRAMEBUFFER,k)&&ft.drawBuffers(T,k),ft.viewport(j),ft.scissor(xt),ft.setScissorTest(At),X){let yt=Dt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Y)}else if(Mt){let yt=U;for(let wt=0;wt<T.textures.length;wt++){let Ut=Dt.get(T.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Y,yt)}}else if(T!==null&&Y!==0){let yt=Dt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,Y)}H=-1};function Er(T){let U=Dt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Vt.textureFormatReadable(T.format),U.__typeReadable=Vt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,k,X,Mt,Rt,yt=0){if(!(T&&T.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){ft.bindFramebuffer(O.FRAMEBUFFER,wt);try{let Ut=T.textures[yt],Wt=Ut.format,Qt=Ut.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Pt=Er(Ut);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&Y>=0&&Y<=T.height-X&&O.readPixels(U,Y,k,X,lt.convert(Wt),lt.convert(Qt),Mt)}finally{let Ut=Q!==null?Dt.get(Q).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,k,X,Mt,Rt,yt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=T.width-k&&Y>=0&&Y<=T.height-X){ft.bindFramebuffer(O.FRAMEBUFFER,wt);let Ut=T.textures[yt],Wt=Ut.format,Qt=Ut.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Pt=Er(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,jt),O.bufferData(O.PIXEL_PACK_BUFFER,Mt.byteLength,O.STREAM_READ),O.readPixels(U,Y,k,X,lt.convert(Wt),lt.convert(Qt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $e=Q!==null?Dt.get(Q).__webglFramebuffer:null;ft.bindFramebuffer(O.FRAMEBUFFER,$e);let Ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await kp(O,Ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,jt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(jt),O.deleteSync(Ee),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){let k=Math.pow(2,-Y),X=Math.floor(T.image.width*k),Mt=Math.floor(T.image.height*k),Rt=U!==null?U.x:0,yt=U!==null?U.y:0;Ot.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Rt,yt,X,Mt),ft.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,k=null,X=0,Mt=0){let Rt,yt,wt,Ut,Wt,Qt,Pt,jt,$e,Ee=T.isCompressedTexture?T.mipmaps[Mt]:T.image;if(Y!==null)Rt=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,Wt=Y.min.y,Qt=Y.isBox3?Y.min.z:0;else{let le=Math.pow(2,-X);Rt=Math.floor(Ee.width*le),yt=Math.floor(Ee.height*le),T.isDataArrayTexture?wt=Ee.depth:T.isData3DTexture?wt=Math.floor(Ee.depth*le):wt=1,Ut=0,Wt=0,Qt=0}k!==null?(Pt=k.x,jt=k.y,$e=k.z):(Pt=0,jt=0,$e=0);let Te=lt.convert(U.format),bn=lt.convert(U.type),It;U.isData3DTexture?(Ot.setTexture3D(U,0),It=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ot.setTexture2DArray(U,0),It=O.TEXTURE_2D_ARRAY):(Ot.setTexture2D(U,0),It=O.TEXTURE_2D),ft.activeTexture(O.TEXTURE0),ft.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),ft.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ft.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Fn=ft.getParameter(O.UNPACK_ROW_LENGTH),fe=ft.getParameter(O.UNPACK_IMAGE_HEIGHT),rs=ft.getParameter(O.UNPACK_SKIP_PIXELS),Tn=ft.getParameter(O.UNPACK_SKIP_ROWS),nl=ft.getParameter(O.UNPACK_SKIP_IMAGES);ft.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),ft.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),ft.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),ft.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),ft.pixelStorei(O.UNPACK_SKIP_IMAGES,Qt);let Cr=T.isDataArrayTexture||T.isData3DTexture,ss=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let le=Dt.get(T),xn=Dt.get(U),Pi=Dt.get(le.__renderTarget),De=Dt.get(xn.__renderTarget);ft.bindFramebuffer(O.READ_FRAMEBUFFER,Pi.__webglFramebuffer),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let fn=0;fn<wt;fn++)Cr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.get(T).__webglTexture,X,Qt+fn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,Mt,$e+fn)),O.blitFramebuffer(Ut,Wt,Ut+Rt,Wt+yt,Pt,jt,Pt+Rt,jt+yt,O.DEPTH_BUFFER_BIT,O.NEAREST);ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Dt.has(T)){let le=Dt.get(T),xn=Dt.get(U);ft.bindFramebuffer(O.READ_FRAMEBUFFER,I),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Pi=0;Pi<wt;Pi++)Cr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,le.__webglTexture,X,Qt+Pi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,le.__webglTexture,X),ss?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xn.__webglTexture,Mt,$e+Pi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xn.__webglTexture,Mt),X!==0?O.blitFramebuffer(Ut,Wt,Ut+Rt,Wt+yt,Pt,jt,Pt+Rt,jt+yt,O.COLOR_BUFFER_BIT,O.NEAREST):ss?O.copyTexSubImage3D(It,Mt,Pt,jt,$e+Pi,Ut,Wt,Rt,yt):O.copyTexSubImage2D(It,Mt,Pt,jt,Ut,Wt,Rt,yt);ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ss?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(It,Mt,Pt,jt,$e,Rt,yt,wt,Te,bn,Ee.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(It,Mt,Pt,jt,$e,Rt,yt,wt,Te,Ee.data):O.texSubImage3D(It,Mt,Pt,jt,$e,Rt,yt,wt,Te,bn,Ee):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Mt,Pt,jt,Rt,yt,Te,bn,Ee.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Mt,Pt,jt,Ee.width,Ee.height,Te,Ee.data):O.texSubImage2D(O.TEXTURE_2D,Mt,Pt,jt,Rt,yt,Te,bn,Ee);ft.pixelStorei(O.UNPACK_ROW_LENGTH,Fn),ft.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe),ft.pixelStorei(O.UNPACK_SKIP_PIXELS,rs),ft.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),ft.pixelStorei(O.UNPACK_SKIP_IMAGES,nl),Mt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(It),ft.unbindTexture()},this.initRenderTarget=function(T){Dt.get(T).__webglFramebuffer===void 0&&Ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ot.setTextureCube(T,0):T.isData3DTexture?Ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ot.setTexture2DArray(T,0):Ot.setTexture2D(T,0),ft.unbindTexture()},this.resetState=function(){G=0,F=0,Q=null,ft.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Dm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wo={duration:.5,overwrite:!1,delay:0},Cf,vn,Le,wi=1e8,ye=1/wi,yf=Math.PI*2,hS=yf/4,uS=0,Nm=Math.sqrt,fS=Math.cos,dS=Math.sin,on=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},vr=function(t){return typeof t=="number"},ch=function(t){return typeof t=="undefined"},er=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},Rf=function(){return typeof window!="undefined"},Qc=function(t){return Ve(t)||on(t)},Um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,pS=/random\([^)]+\)/g,mS=/,\s*/g,wm=/(?:-?\.?\d|\.)+/gi,Pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,df=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,If=/[+-]=-?[.\d]+/,gS=/[^,'"\[\]\s]+/gi,_S=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,ji,Mf,Lf,di={},nh={},Fm,Om=function(t){return(nh=fa(t,di))&&Pn},hh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ao=function(t,e){return!e&&console.warn(t)},Bm=function(t,e){return t&&(di[t]=e)&&nh&&(nh[t]=e)||di},Eo=function(){return 0},xS={suppressEvents:!0,isStart:!0,kill:!1},jc={suppressEvents:!0,kill:!1},vS={suppressEvents:!0},Df={},Xr=[],Sf={},zm,Jn={},pf={},Am=30,th=[],Nf="",Uf=function(t){var e=t[0],n,i;if(er(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=th.length;i--&&!th[i].targetTest(e););n=th[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new zf(t[i],n)))||t.splice(i,1);return t},qr=function(t){return t._gsap||Uf(Ai(t))[0]._gsap},Ff=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():ch(n)&&t.getAttribute&&t.getAttribute(e)||n},kn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},bs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},yS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ih=function(){var t=Xr.length,e=Xr.slice(0),n,i;for(Sf={},Xr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Of=function(t){return!!(t._initted||t._startAt||t.add)},km=function(t,e,n,i){Xr.length&&!vn&&ih(),t.render(e,n,i||!!(vn&&e<0&&Of(t))),Xr.length&&!vn&&ih()},Vm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gS).length<2?e:on(t)?t.trim():t},Gm=function(t){return t},pi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},MS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},fa=function(t,e){for(var n in e)t[n]=e[n];return t},Em=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=er(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},rh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},So=function(t){var e=t.parent||Fe,n=t.keyframes?MS(Rn(t.keyframes)):pi;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},SS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Hm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},uh=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Yr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},bS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bf=function(t,e,n,i){return t._startAt&&(vn?t._startAt.revert(jc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},TS=function r(t){return!t||t._ts&&r(t.parent)},Cm=function(t){return t._repeat?da(t._tTime,t=t.duration()+t._rDelay)*t:0},da=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},sh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},fh=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},dh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),fh(t),n._dirty||vs(n,t)),t},Wm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=sh(t.rawTime(),e),(!e._dur||Io(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),vs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},tr=function(t,e,n,i){return e.parent&&Yr(e),e._start=Ue((vr(n)?n:!n&&ah(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Fe?Ti(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hm(t,e,"_first","_last",t._sort?"_start":0),ah(e)||(t._recent=e),i||Wm(t,e),t._ts<0&&dh(t,t._tTime),t},Xm=function(t,e){return(di.ScrollTrigger||hh("scrollTrigger",e))&&di.ScrollTrigger.create(e,t)},qm=function(t,e,n,i,s){if(Gf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zm!==$n.frame)return Xr.push(t),t._lazy=[s,i],1},wS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ah=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},AS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&wS(t)&&!(!t._initted&&ah(t))||(t._ts<0||t._dp._ts<0)&&!ah(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Io(0,t._tDur,e),h=da(l,o),t._yoyo&&h&1&&(a=1-a),h!==da(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||vn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&qm(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&bf(t,e,n,!0),t._onUpdate&&!n&&fi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&fi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Yr(t,1),!n&&!vn&&(fi(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ES=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},pa=function(t,e,n,i){var s=t._repeat,a=Ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ue(a*(s+1)+t._rDelay*s):a,o>0&&!i&&dh(t,t._tTime=t._tDur*o),t.parent&&fh(t),n||vs(t.parent,t),t},Rm=function(t){return t instanceof Cn?vs(t):pa(t,t._dur)},CS={_start:0,endTime:Eo,totalDuration:Eo},Ti=function r(t,e,n){var i=t.labels,s=t._recent||CS,a=t.duration()>=wi?s.endTime(!1):t._dur,o,l,c;return on(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},bo=function(t,e,n){var i=vr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;a.immediateRender=Kn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Xe(e[0],a,e[s+1])},Zr=function(t,e){return t||t===0?e(t):e},Io=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!on(t)||!(e=_S.exec(t))?"":e[1]},RS=function(t,e,n){return Zr(n,function(i){return Io(t,e,i)})},Tf=[].slice,Ym=function(t,e){return t&&er(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&er(t[0]))&&!t.nodeType&&t!==ji},PS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return on(i)&&!e||Ym(i,1)?(s=n).push.apply(s,Ai(i)):n.push(i)})||n},Ai=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):on(t)&&!n&&(Mf||!ma())?Tf.call((e||Lf).querySelectorAll(t),0):Rn(t)?PS(t,n):Ym(t)?Tf.call(t,0):t?[t]:[]},wf=function(t){return t=Ai(t)[0]||Ao("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ai(e,n.querySelectorAll?n:n===t?Ao("Invalid scope")||Lf.createElement("div"):t)}},Zm=function(t){return t.sort(function(){return .5-Math.random()})},Jm=function(t){if(Ve(t))return t;var e=er(t)?t:{each:t},n=ys(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return on(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var x=(g||e).length,p=a[x],_,S,A,v,w,y,m,M,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,wi])[1],!P){for(m=-wi;m<(m=g[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=a[x]=[],_=l?Math.min(P,x)*h-.5:i%P,S=P===wi?0:l?x*u/P-.5:i/P|0,m=0,M=wi,y=0;y<x;y++)A=y%P-_,v=S-(y/P|0),p[y]=w=c?Math.abs(c==="y"?v:A):Nm(A*A+v*v),w>m&&(m=w),w<M&&(M=w);i==="random"&&Zm(p),p.max=m-M,p.min=M,p.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),p.b=x<0?s-x:s,p.u=yn(e.amount||e.each)||0,n=n&&x<0?HS(n):n}return x=(p[f]-p.min)/p.max||0,Ue(p.b+(n?n(x):x)*p.v)+p.u}},Af=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vr(n)?0:yn(n))}},$m=function(t,e){var n=Rn(t),i,s;return!n&&er(t)&&(i=n=t.radius||wi,t.values?(t=Ai(t.values),(s=!vr(t[0]))&&(i*=i)):t=Af(t.increment)),Zr(e,n?Ve(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=wi,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||vr(a)?h:h+yn(a)}:Af(t))},Km=function(t,e,n,i){return Zr(Rn(t)?!e:n===!0?!!(n=0):!i,function(){return Rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},IS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},LS=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},DS=function(t,e,n){return jm(t,e,0,1,n)},Qm=function(t,e,n){return Zr(n,function(i){return t[~~e(i)]})},NS=function r(t,e,n){var i=e-t;return Rn(t)?Qm(t,r(0,t.length),e):Zr(n,function(s){return(i+(s-t)%i)%i+t})},US=function r(t,e,n){var i=e-t,s=i*2;return Rn(t)?Qm(t,r(0,t.length-1),e):Zr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ga=function(t){return t.replace(pS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(mS);return Km(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},jm=function(t,e,n,i,s){var a=e-t,o=i-n;return Zr(s,function(l){return n+((l-t)/a*o||0)})},FS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=on(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Rn(t)&&!Rn(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var x=Math.min(f,~~g);return h[x](g-x)},n=e}else i||(t=fa(Rn(t)?[]:{},t));if(!h){for(l in e)kf.call(o,t,l,"get",e[l]);s=function(g){return Xf(g,o)||(a?t.p:t)}}}return Zr(n,s)},Pm=function(t,e,n){var i=t.labels,s=wi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},fi=function(t,e,n){var i=t.vars,s=i[e],a=Le,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Xr.length&&ih(),o&&(Le=o),h=l?s.apply(c,l):s.call(c),Le=a,h},yo=function(t){return Yr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!vn),t.progress()<1&&fi(t,"onInterrupt"),t},ua,tg=[],eg=function(t){if(t)if(t=!t.name&&t.default||t,Rf()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Eo,render:Xf,add:kf,kill:jS,modifier:QS,rawVars:0},a={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(ma(),t!==i){if(Jn[e])return;pi(i,pi(rh(t,s),a)),fa(i.prototype,fa(s,rh(t,a))),Jn[i.prop=e]=i,t.targetTest&&(th.push(i),Df[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bm(e,i),t.register&&t.register(Pn,i,Vn)}else tg.push(t)},Ae=255,Mo={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},mf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ae+.5|0},ng=function(t,e,n){var i=t?vr(t)?[t>>16,t>>8&Ae,t&Ae]:0:Mo.black,s,a,o,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Mo[t])i=Mo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ae,i&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(wm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=mf(l+1/3,s,a),i[1]=mf(l,s,a),i[2]=mf(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Pf),n&&i.length<4&&(i[3]=1),i}else i=t.match(wm)||Mo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ae,a=i[1]/Ae,o=i[2]/Ae,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ig=function(t){var e=[],n=[],i=-1;return t.split(xr).forEach(function(s){var a=s.match(Ss)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Im=function(t,e,n){var i="",s=(t+i).match(xr),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=ng(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ig(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(xr,"1").split(Ss),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(xr),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Mo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),OS=/hsl[a]?\(/,Bf=function(t){var e=t.join(" "),n;if(xr.lastIndex=0,xr.test(e))return n=OS.test(e),t[1]=Im(t[1],n),t[0]=Im(t[0],n,ig(t[1])),!0},Co,$n=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,g=function x(p){var _=r()-i,S=p===!0,A,v,w,y;if((_>t||_<0)&&(n+=_-e),i+=_,w=i-n,A=w-a,(A>0||S)&&(y=++u.frame,f=w-u.time*1e3,u.time=w=w/1e3,a+=A+(A>=s?0:s-A),v=1),S||(l=c(x)),v)for(d=0;d<o.length;d++)o[d](w,f,y,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Fm&&(!Mf&&Rf()&&(ji=Mf=window,Lf=ji.document||{},di.gsap=Pn,(ji.gsapVersions||(ji.gsapVersions=[])).push(Pn.version),Om(nh||ji.GreenSockGlobals||!ji.gsap&&ji||{}),tg.forEach(eg)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Co=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Co=0,c=Eo},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,_,S){var A=_?function(v,w,y,m){p(v,w,y,m),u.remove(A)}:p;return u.remove(p),o[S?"unshift":"push"](A),ma(),A},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},u})(),ma=function(){return!Co&&$n.wake()},re={},BS=/^[\d.\-M][\d.\-,\s]/,zS=/["']/g,kS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(zS,"").trim():+c,i=l.substr(o+1).trim();return e},VS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},GS=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[kS(e[1])]:VS(t).split(",").map(Vm)):re._CE&&BS.test(t)?re._CE("",t):n},HS=function(t){return function(e){return 1-t(1-e)}},ys=function(t,e){return t&&(Ve(t)?t:re[t]||GS(t))||e},Ts=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return kn(t,function(o){re[o]=di[o]=s,re[a=o.toLowerCase()]=n;for(var l in s)re[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=s[l]}),s},rg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},gf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/yf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*dS((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:rg(o);return s=yf/s,l.config=function(c,h){return r(t,c,h)},l},_f=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:rg(n);return i.config=function(s){return r(t,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ts(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Ts("Elastic",gf("in"),gf("out"),gf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ts("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ts("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ts("Circ",function(r){return-(Nm(1-r*r)-1)});Ts("Sine",function(r){return r===1?1:-fS(r*hS)+1});Ts("Back",_f("in"),_f("out"),_f());re.SteppedEase=re.steps=di.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ye;return function(o){return((i*Io(0,a,o)|0)+s)*n}}};wo.ease=re["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nf+=r+","+r+"Params,"});var zf=function(t,e){this.id=uS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ff,this.set=e?e.getSetter:ph},Ro=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,pa(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),Co||$n.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,pa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ma(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dh(this,n),!s._dp||s.parent||Wm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),km(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?da(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sh(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Io(-Math.abs(this._delay),o,s),i!==!1),fh(this),bS(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ma(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ye,a;if(s)for(this._tTime-=ye,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ye){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vS);var i=vn;return vn=n,Of(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ti(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ve(n)?n:Gm,l=function(){var h=i.then;i.then=null,s&&s(),Ve(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){yo(this)},r})();pi(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){Dm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),Fe&&tr(n.parent||Fe,_r(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Xm(_r(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return bo(0,arguments,this),this},e.from=function(i,s,a){return bo(1,arguments,this),this},e.fromTo=function(i,s,a,o){return bo(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,So(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(i,s,Ti(this,a),1),this},e.call=function(i,s,a){return tr(this,Xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xe(i,a,Ti(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,So(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,So(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ue(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,x,p,_,S,A,v,w,y,m;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,A=this._ts,_=!A,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(y=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Ue(h%p),h===l?(x=this._repeat,f=c):(w=Ue(h/p),x=~~w,x&&x===w&&(f=c,x--),f>c&&(f=c)),w=da(this._tTime,p),!o&&this._tTime&&w!==x&&this._tTime-w*p-this._dur<=0&&(w=x),y&&x&1&&(f=c-f,m=1),x!==w&&!this._lock){var M=y&&w&1,P=M===(y&&x&1);if(x<w&&(M=!M),o=M?0:h%c?c:h,this._lock=1,this.render(o||(m?0:Ue(x*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&fi(this,"onRepeat"),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1,w=x),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ES(this,Ue(o),Ue(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!w&&(fi(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=-ye);break}}d=g}else{d=this._last;for(var E=i<0?i:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,a||vn&&Of(d)),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=E?-ye:ye);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-ye)._zTime=f>=o?1:-1,this._ts))return this._start=v,fh(this),this.render(i,s,a);this._onUpdate&&!s&&fi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(fi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(vr(s)||(s=Ti(this,s,i)),!(i instanceof Ro)){if(Rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(on(i))return this.addLabel(i,s);if(Ve(i))i=Xe.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-wi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return on(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&uh(this,i),i===this._recent&&(this._recent=this._last),vs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ti(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Xe.delayedCall(0,s||Eo,a);return o.data="isPause",this._hasPause=1,tr(this,o,Ti(this,i))},e.removePause=function(i){var s=this._first;for(i=Ti(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Ai(i),l=this._first,c=vr(s),h;l;)l instanceof Xe?yS(l._targets,o)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Ti(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Xe.to(a,pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ye,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&pa(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,pi({startAt:{time:Ti(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pm(this,Ti(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pm(this,Ti(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return vs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vs(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=wi,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Ue(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;pa(a,a===Fe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Fe._ts&&(km(Fe,sh(i,Fe)),zm=$n.frame),$n.frame>=Am){Am+=Qn.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},t})(Ro);pi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var WS=function(t,e,n,i,s,a,o){var l=new Vn(this._pt,t,e,0,1,Wf,null,s),c=0,h=0,u,f,d,g,x,p,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ga(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(df)||[];u=df.exec(i);)g=u[0],x=i.substring(c,u.index),d?d=(d+1)%5:x.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:p,c:g.charAt(1)==="="?bs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=df.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(If.test(i)||_)&&(l.e=0),this._pt=l,l},kf=function(t,e,n,i,s,a,o,l,c,h){Ve(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:Ve(u)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ve(u)?c?JS:ag:Hf,g;if(on(i)&&(~i.indexOf("random(")&&(i=ga(i)),i.charAt(1)==="="&&(g=bs(f,i)+(yn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Ef)return!isNaN(f*i)&&i!==""?(g=new Vn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?KS:og,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&hh(e,i),WS.call(this,t,e,f,i,d,l||Qn.stringFilter,c))},XS=function(t,e,n,i,s){if(Ve(t)&&(t=To(t,s,e,n,i)),!er(t)||t.style&&t.nodeType||Rn(t)||Um(t))return on(t)?To(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=To(t[o],s,e,n,i);return a},Vf=function(t,e,n,i,s,a){var o,l,c,h;if(Jn[t]&&(o=new Jn[t]).init(s,o.rawVars?e[t]:XS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Vn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ua))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Wr,Ef,Gf=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,x=t._startAt,p=t._targets,_=t.parent,S=_&&_.data==="nested"?_.vars.targets:p,A=t._overwrite==="auto"&&!Cf,v=t.timeline,w=i.easeReverse||u,y,m,M,P,E,D,N,B,I,z,G,F,Q;if(v&&(!f||!s)&&(s="none"),t._ease=ys(s,wo.ease),t._rEase=w&&(ys(w)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(B=p[0]?qr(p[0]).harness:0,F=B&&i[B.prop],y=rh(i,Df),x&&(x._zTime<0&&x.progress(1),e<0&&h&&o&&!d?x.render(-1,!0):x.revert(h&&g?jc:xS),x._lazy=0),a){if(Yr(t._startAt=Xe.set(p,pi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return fi(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vn||!o&&!d)&&t._startAt.revert(jc),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!x){if(e&&(o=!1),M=pi({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Kn(l),immediateRender:o,stagger:0,parent:_},y),F&&(M[B.prop]=F),Yr(t._startAt=Xe.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vn?t._startAt.revert(jc):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Kn(l)||l&&!g,m=0;m<p.length;m++){if(E=p[m],N=E._gsap||Uf(p)[m]._gsap,t._ptLookup[m]=z={},Sf[N.id]&&Xr.length&&ih(),G=S===p?m:S.indexOf(E),B&&(I=new B).init(E,F||y,t,G,S)!==!1&&(t._pt=P=new Vn(t._pt,E,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){z[H]=P}),I.priority&&(D=1)),!B||F)for(M in y)Jn[M]&&(I=Vf(M,y,t,G,E,S))?I.priority&&(D=1):z[M]=P=kf.call(t,E,M,"get",y[M],G,S,0,i.stringFilter);t._op&&t._op[m]&&t.kill(E,t._op[m]),A&&t._pt&&(Wr=t,Fe.killTweensOf(E,z,t.globalTime(e)),Q=!t.parent,Wr=0),t._pt&&l&&(Sf[N.id]=1)}D&&qf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,f&&e<=0&&v.render(wi,!0,!0)},qS=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ef=1,t.vars[e]="+=0",Gf(t,o),Ef=0,l?Ao(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ge(n)+yn(u.e)),u.b&&(u.b=h.s+yn(u.b))},YS=function(t,e){var n=t[0]?qr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=fa({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ZS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Rn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},To=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):on(t)&&~t.indexOf("random(")?ga(t):t},oh=Nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sg={};kn(oh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return sg[r]=1});oh=oh.split(",");var Xe=(function(r){Dm(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:So(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,x=l.defaults,p=l.scrollTrigger,_=i.parent||Fe,S=(Rn(n)||Um(n)?vr(n[0]):"length"in i)?[n]:Ai(n),A,v,w,y,m,M,P,E;if(o._targets=S.length?Uf(S):Ao("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Qc(c)||Qc(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(A=o.timeline=new Cn({data:"nested",defaults:x||{},targets:_&&_.data==="nested"?_.vars.targets:S}),A.kill(),A.parent=A._dp=_r(o),A._start=0,f||Qc(c)||Qc(h)){if(y=S.length,P=f&&Jm(f),er(f))for(m in f)~oh.indexOf(m)&&(E||(E={}),E[m]=f[m]);for(v=0;v<y;v++)w=rh(i,sg),w.stagger=0,D&&(w.easeReverse=D),E&&fa(w,E),M=S[v],w.duration=+To(c,_r(o),v,M,S),w.delay=(+To(h,_r(o),v,M,S)||0)-o._delay,!f&&y===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),A.to(M,w,P?P(v,M,S):0),A._ease=re.none;A.duration()?c=h=0:o.timeline=0}else if(g){So(pi(A.vars.defaults,{ease:"none"})),A._ease=ys(g.ease||i.ease||"none");var N=0,B,I,z;if(Rn(g))g.forEach(function(G){return A.to(S,G,">")}),A.duration();else{w={};for(m in g)m==="ease"||m==="easeEach"||ZS(m,g[m],w,g.easeEach);for(m in w)for(B=w[m].sort(function(G,F){return G.t-F.t}),N=0,v=0;v<B.length;v++)I=B[v],z={ease:I.e,duration:(I.t-(v?B[v-1].t:0))/100*c},z[m]=I.v,A.to(S,z,N),N+=z.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return d===!0&&!Cf&&(Wr=_r(o),Fe.killTweensOf(S),Wr=0),tr(_,_r(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Ue(_._time)&&Kn(u)&&TS(_r(o))&&_.data!=="nested")&&(o._tTime=-ye,o.render(Math.max(0,-h)||0)),p&&Xm(_r(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ye&&!h?l:i<ye?0:i,f,d,g,x,p,_,S,A;if(!c)AS(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,A=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,s,a);if(f=Ue(u%x),u===l?(g=this._repeat,f=c):(p=Ue(u/x),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),_=this._yoyo&&g&1,_&&(f=c-f),p=da(this._tTime,x),f===o&&!a&&this._initted&&g===p)return this._tTime=u,this;g!==p&&this.vars.repeatRefresh&&!_&&!this._lock&&f!==x&&this._initted&&(this._lock=a=1,this.render(Ue(x*g),!0).invalidate()._lock=0)}if(!this._initted){if(qm(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=f<o;if(v!==this._inv){var w=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!p&&(fi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&bf(this,i,s,a),fi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&fi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&bf(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(h&&!o)&&(u||o||_)&&(fi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Co||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Gf(this,c),h=this._ease(c/this._dur),qS(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(dh(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||yo(this),this.parent&&a!==this.timeline.totalDuration()&&pa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ai(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,x,p,_;if((!s||s==="all")&&SS(o,l))return s==="all"&&(this._pt=0),yo(this);for(u=this._op=this._op||[],s!=="all"&&(on(s)&&(x={},kn(s,function(S){return x[S]=1}),s=x),s=YS(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],s==="all"?(u[_]=s,g=f,d={}):(d=u[_]=u[_]||{},g=s);for(x in g)p=f&&f[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&uh(this,p,"_pt"),delete f[x]),d!=="all"&&(d[x]=1)}return this._initted&&!this._pt&&h&&yo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return bo(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return bo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Fe.killTweensOf(i,s,a)},t})(Ro);pi(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(r){Xe[r]=function(){var t=new Cn,e=Tf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Hf=function(t,e,n){return t[e]=n},ag=function(t,e,n){return t[e](n)},JS=function(t,e,n,i){return t[e](i.fp,n)},$S=function(t,e,n){return t.setAttribute(e,n)},ph=function(t,e){return Ve(t[e])?ag:ch(t[e])&&t.setAttribute?$S:Hf},og=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},KS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Xf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},QS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},jS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?uh(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qf=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Vn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||og,this.d=l||this,this.set=c||Hf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tb,this.m=n,this.mt=s,this.tween=i},r})();kn(Nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Df[r]=1});di.TweenMax=di.TweenLite=Xe;di.TimelineLite=di.TimelineMax=Cn;Fe=new Cn({sortChildren:!1,defaults:wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Bf;var Ms=[],eh={},eb=[],Lm=0,nb=0,xf=function(t){return(eh[t]||eb).map(function(e){return e()})},Po=function(){var t=Date.now(),e=[];t-Lm>2&&(xf("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ji.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),xf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Lm=t,xf("matchMedia"))},lg=(function(){function r(e,n){this.selector=n&&wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var a=this,o=function(){var c=Le,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=wf(s)),Le=a,u=i.apply(a,arguments),Ve(u)&&a._r.push(u),Le=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ve?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Po):o.removeEventListener("change",Po)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),ib=(function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){er(n)||(n={matches:n});var a=new lg(0,s||this.scope),o=a.conditions={},l,c,h;Le&&!a.selector&&(a.selector=Le.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ji.matchMedia(n[c]),l&&(Ms.indexOf(a)<0&&Ms.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Po):l.addEventListener("change",Po),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),lh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return eg(i)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=Ai(t)[0]);var s=qr(t||{}).get,a=n?Gm:Vm;return n==="native"&&(n=""),t&&(e?a((Jn[e]&&Jn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Jn[o]&&Jn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Ai(t),t.length>1){var i=t.map(function(h){return Pn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=Jn[e],o=qr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ua._pt=0,u.init(t,n?h+n:h,ua,0,[t]),u.render(1,u),ua._pt&&Xf(1,ua)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Pn.to(t,pi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ys(t.ease,wo.ease)),Em(wo,t||{})},config:function(t){return Em(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jn[o]&&!di[o]&&Ao(e+" effect requires "+o+" plugin.")}),pf[e]=function(o,l,c){return n(Ai(o),pi(l||{},s),c)},a&&(Cn.prototype[e]=function(o,l,c){return this.add(pf[e](o,er(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=ys(e)},parseEase:function(t,e){return arguments.length?ys(t,e):re},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),i,s;for(n.smoothChildTiming=Kn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Fe,n,0),n},context:function(t,e){return t?new lg(t,e):Le},matchMedia:function(t){return new ib(t)},matchMediaRefresh:function(){return Ms.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Po()},addEventListener:function(t,e){var n=eh[t]||(eh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=eh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:NS,wrapYoyo:US,distribute:Jm,random:Km,snap:$m,normalize:DS,getUnit:yn,clamp:RS,splitColor:ng,toArray:Ai,selector:wf,mapRange:jm,pipe:IS,unitize:LS,interpolate:FS,shuffle:Zm},install:Om,effects:pf,ticker:$n,updateRoot:Cn.updateRoot,plugins:Jn,globalTimeline:Fe,core:{PropTween:Vn,globals:Bm,Tween:Xe,Timeline:Cn,Animation:Ro,getCache:qr,_removeLinkedListItem:uh,reverting:function(){return vn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Cf=t}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return lh[r]=Xe[r]});$n.add(Cn.updateRoot);ua=lh.to({},{duration:0});var rb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},sb=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=rb(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},vf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(on(s)&&(l={},kn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}sb(o,s)}}}},Pn=lh.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},vf("roundProps",Af),vf("modifiers"),vf("snap",$m))||lh;Xe.version=Cn.version=Pn.version="3.15.1";Fm=1;Rf()&&ma();var ab=re.Power0,ob=re.Power1,lb=re.Power2,cb=re.Power3,hb=re.Power4,ub=re.Linear,fb=re.Quad,db=re.Cubic,pb=re.Quart,mb=re.Quint,gb=re.Strong,_b=re.Elastic,xb=re.Back,vb=re.SteppedEase,yb=re.Bounce,Mb=re.Sine,Sb=re.Expo,bb=re.Circ;var cg,Jr,xa,Qf,Cs,Tb,hg,jf,wb=function(){return typeof window!="undefined"},Mr={},Es=180/Math.PI,va=Math.PI/180,_a=Math.atan2,ug=1e8,td=/([A-Z])/g,Ab=/(left|right|width|margin|padding|x)/i,Eb=/[\s,\(]\S/,nr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ib=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lb=function(t,e,n){return t.style[e]=n},Db=function(t,e,n){return t.style.setProperty(e,n)},Nb=function(t,e,n){return t._gsap[e]=n},Ub=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Fb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Ob=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Oe="transform",jn=Oe+"Origin",Bb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=nr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=yr(i,o)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===jn&&(this.tfm.zOrigin=a.zOrigin);else return nr.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Oe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=Oe}(s||e)&&this.props.push(t,e,s[t])},Mg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(td,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=jf(),(!s||!s.isStart)&&!n[Oe]&&(Mg(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Sg=function(t,e){var n={target:t,props:[],revert:zb,save:Bb};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},bg,Jf=function(t,e){var n=Jr.createElementNS?Jr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Jr.createElement(t);return n&&n.style?n:Jr.createElement(t)},mi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(td,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ya(e)||e,1)||""},fg="O,Moz,ms,Ms,Webkit".split(","),ya=function(t,e,n){var i=e||Cs,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(fg[a]+t in s););return a<0?null:(a===3?"ms":a>=0?fg[a]:"")+t},$f=function(){wb()&&window.document&&(cg=window,Jr=cg.document,xa=Jr.documentElement,Cs=Jf("div")||{style:{}},Tb=Jf("div"),Oe=ya(Oe),jn=Oe+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!ya("perspective"),jf=Pn.core.reverting,Qf=1)},dg=function(t){var e=t.ownerSVGElement,n=Jf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),xa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),xa.removeChild(n),s},pg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tg=function(t){var e,n;try{e=t.getBBox()}catch{e=dg(t),n=1}return e&&(e.width||e.height)||n||(e=dg(t)),e&&!e.width&&!e.x&&!e.y?{x:+pg(t,["x","cx","x1"])||0,y:+pg(t,["y","cy","y1"])||0,width:0,height:0}:e},wg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tg(t))},Kr=function(t,e){if(e){var n=t.style,i;e in Mr&&e!==jn&&(e=Oe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(td,"-$1").toLowerCase())):n.removeAttribute(e)}},$r=function(t,e,n,i,s,a){var o=new Vn(t._pt,e,n,0,1,a?yg:vg);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},mg={deg:1,rad:1,turn:1},kb={grid:1,flex:1},Qr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Cs.style,l=Ab.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,x,p,_;if(i===a||!s||mg[i]||mg[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),_=t.getCTM&&wg(t),(d||a==="%")&&(Mr[e]||~e.indexOf("adius")))return g=_?t.getBBox()[l?"width":"height"]:t[h],Ge(d?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Jr||!x.appendChild)&&(x=Jr.body),p=x._gsap,p&&d&&p.width&&l&&p.time===$n.time&&!p.uncache)return Ge(s/p.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,g=t[h],S?t.style[e]=S:Kr(t,e)}else(d||a==="%")&&!kb[mi(x,"display")]&&(o.position=mi(t,"position")),x===t&&(o.position="static"),x.appendChild(Cs),g=Cs[h],x.removeChild(Cs),o.position="absolute";return l&&d&&(p=qr(x),p.time=$n.time,p.width=x[h]),Ge(f?g*s/u:g&&s?u/g*s:0)},yr=function(t,e,n,i){var s;return Qf||$f(),e in nr&&e!=="transform"&&(e=nr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Mr[e]&&e!=="transform"?(s=No(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:gh(mi(t,jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=mh[e]&&mh[e](t,e,n)||mi(t,e)||Ff(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(t,e,s,n)+n:s},Vb=function(t,e,n,i){if(!n||n==="none"){var s=ya(e,t,1),a=s&&mi(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=mi(t,"borderTopColor"))}var o=new Vn(this._pt,t.style,e,0,1,Wf),l=0,c=0,h,u,f,d,g,x,p,_,S,A,v,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=mi(t,e)||i,x?t.style[e]=x:Kr(t,e)),h=[n,i],Bf(h),n=h[0],i=h[1],f=n.match(Ss)||[],w=i.match(Ss)||[],w.length){for(;u=Ss.exec(i);)p=u[0],S=i.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(x=f[c++]||"")&&(d=parseFloat(x)||0,v=x.substr((d+"").length),p.charAt(1)==="="&&(p=bs(d,p)+v),_=parseFloat(p),A=p.substr((_+"").length),l=Ss.lastIndex-A.length,A||(A=A||Qn.units[e]||v,l===i.length&&(i+=A,o.e+=A)),v!==A&&(d=Qr(t,e,x,A)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:_-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?yg:vg;return If.test(i)&&(o.e=0),this._pt=o,o},gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=gg[n]||n,e[1]=gg[i]||i,e.join(" ")},Hb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Mr[o]&&(l=1,o=o==="transformOrigin"?jn:Oe),Kr(n,o);l&&(Kr(n,Oe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",No(n,1),a.uncache=1,Mg(i)))}},mh={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Vn(t._pt,e,n,0,0,Hb);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Do=[1,0,0,1,0,0],Ag={},Eg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_g=function(t){var e=mi(t,Oe);return Eg(e)?Do:e.substr(7).match(Pf).map(Ge)},ed=function(t,e){var n=t._gsap||qr(t),i=t.style,s=_g(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Do:s):(s===Do&&!t.offsetParent&&t!==xa&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,xa.appendChild(t)),s=_g(t),l?i.display=l:Kr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):xa.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kf=function(t,e,n,i,s,a){var o=t._gsap,l=s||ed(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],x=l[2],p=l[3],_=l[4],S=l[5],A=e.split(" "),v=parseFloat(A[0])||0,w=parseFloat(A[1])||0,y,m,M,P;n?l!==Do&&(m=d*p-g*x)&&(M=v*(p/m)+w*(-x/m)+(x*S-p*_)/m,P=v*(-g/m)+w*(d/m)-(d*S-g*_)/m,v=M,w=P):(y=Tg(t),v=y.x+(~A[0].indexOf("%")?v/100*y.width:v),w=y.y+(~(A[1]||A[0]).indexOf("%")?w/100*y.height:w)),i||i!==!1&&o.smooth?(_=v-c,S=w-h,o.xOffset=u+(_*d+S*x)-_,o.yOffset=f+(_*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=w,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[jn]="0px 0px",a&&($r(a,o,"xOrigin",c,v),$r(a,o,"yOrigin",h,w),$r(a,o,"xOffset",u,o.xOffset),$r(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},No=function(t,e){var n=t._gsap||new zf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=mi(t,jn)||"0",h,u,f,d,g,x,p,_,S,A,v,w,y,m,M,P,E,D,N,B,I,z,G,F,Q,H,R,j,xt,At,q,ot;return h=u=f=x=p=_=S=A=v=0,d=g=1,n.svg=!!(t.getCTM&&wg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Oe]!=="none"?l[Oe]:"")),i.scale=i.rotate=i.translate="none"),m=ed(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Kf(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,m)),w=n.xOrigin||0,y=n.yOrigin||0,m!==Do&&(D=m[0],N=m[1],B=m[2],I=m[3],h=z=m[4],u=G=m[5],m.length===6?(d=Math.sqrt(D*D+N*N),g=Math.sqrt(I*I+B*B),x=D||N?_a(N,D)*Es:0,S=B||I?_a(B,I)*Es+x:0,S&&(g*=Math.abs(Math.cos(S*va))),n.svg&&(h-=w-(w*D+y*B),u-=y-(w*N+y*I))):(ot=m[6],At=m[7],R=m[8],j=m[9],xt=m[10],q=m[11],h=m[12],u=m[13],f=m[14],M=_a(ot,xt),p=M*Es,M&&(P=Math.cos(-M),E=Math.sin(-M),F=z*P+R*E,Q=G*P+j*E,H=ot*P+xt*E,R=z*-E+R*P,j=G*-E+j*P,xt=ot*-E+xt*P,q=At*-E+q*P,z=F,G=Q,ot=H),M=_a(-B,xt),_=M*Es,M&&(P=Math.cos(-M),E=Math.sin(-M),F=D*P-R*E,Q=N*P-j*E,H=B*P-xt*E,q=I*E+q*P,D=F,N=Q,B=H),M=_a(N,D),x=M*Es,M&&(P=Math.cos(M),E=Math.sin(M),F=D*P+N*E,Q=z*P+G*E,N=N*P-D*E,G=G*P-z*E,D=F,z=Q),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,_=180-_),d=Ge(Math.sqrt(D*D+N*N+B*B)),g=Ge(Math.sqrt(G*G+ot*ot)),M=_a(z,G),S=Math.abs(M)>2e-4?M*Es:0,v=q?1/(q<0?-q:q):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Eg(mi(t,Oe)),F&&t.setAttribute("transform",F))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=x<=0?180:-180,x+=x<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ge(d),n.scaleY=Ge(g),n.rotation=Ge(x)+o,n.rotationX=Ge(p)+o,n.rotationY=Ge(_)+o,n.skewX=S+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[jn]=gh(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?Xb:bg?Cg:Wb,n.uncache=0,n},gh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yf=function(t,e,n){var i=yn(e);return Ge(parseFloat(e)+parseFloat(Qr(t,"x",n+"px",i)))+i},Wb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cg(t,e)},ws="0deg",Lo="0px",As=") ",Cg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,x=n.scaleY,p=n.transformPerspective,_=n.force3D,S=n.target,A=n.zOrigin,v="",w=_==="auto"&&t&&t!==1||_===!0;if(A&&(u!==ws||h!==ws)){var y=parseFloat(h)*va,m=Math.sin(y),M=Math.cos(y),P;y=parseFloat(u)*va,P=Math.cos(y),a=Yf(S,a,m*P*-A),o=Yf(S,o,-Math.sin(y)*-A),l=Yf(S,l,M*P*-A+A)}p!==Lo&&(v+="perspective("+p+As),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||a!==Lo||o!==Lo||l!==Lo)&&(v+=l!==Lo||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+As),c!==ws&&(v+="rotate("+c+As),h!==ws&&(v+="rotateY("+h+As),u!==ws&&(v+="rotateX("+u+As),(f!==ws||d!==ws)&&(v+="skew("+f+", "+d+As),(g!==1||x!==1)&&(v+="scale("+g+", "+x+As),S.style[Oe]=v||"translate(0, 0)"},Xb=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,x=n.yOrigin,p=n.xOffset,_=n.yOffset,S=n.forceCSS,A=parseFloat(a),v=parseFloat(o),w,y,m,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=va,c*=va,w=Math.cos(l)*u,y=Math.sin(l)*u,m=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=va,P=Math.tan(c-h),P=Math.sqrt(1+P*P),m*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),w*=P,y*=P)),w=Ge(w),y=Ge(y),m=Ge(m),M=Ge(M)):(w=u,M=f,y=m=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=Qr(d,"x",a,"px"),v=Qr(d,"y",o,"px")),(g||x||p||_)&&(A=Ge(A+g-(g*w+x*m)+p),v=Ge(v+x-(g*y+x*M)+_)),(i||s)&&(P=d.getBBox(),A=Ge(A+i/100*P.width),v=Ge(v+s/100*P.height)),P="matrix("+w+","+y+","+m+","+M+","+A+","+v+")",d.setAttribute("transform",P),S&&(d.style[Oe]=P)},qb=function(t,e,n,i,s){var a=360,o=on(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Es:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*ug)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*ug)%a-~~(c/a)*a)),t._pt=f=new Vn(t._pt,e,n,i,c,Cb),f.e=h,f.u="deg",t._props.push(n),f},xg=function(t,e){for(var n in e)t[n]=e[n];return t},Yb=function(t,e,n){var i=xg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Oe]=e,o=No(n,1),Kr(n,Oe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Oe],a[Oe]=e,o=No(n,1),a[Oe]=c);for(l in Mr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=yn(c),g=yn(h),u=d!==g?Qr(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Vn(t._pt,o,l,u,f-u,Zf),t._pt.u=g||0,t._props.push(l));xg(o,i)};kn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});mh[t>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return yr(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,x){return d[g]=f[x]=f[x]||f[(x-1)/2|0]}),o.init(l,d,u)}});var nd={name:"css",register:$f,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,g,x,p,_,S,A,v,w,y,m,M,P;Qf||$f(),this.styles=this.styles||Sg(t),M=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(Jn[x]&&Vf(x,e,n,i,t,s)))){if(d=typeof h,g=mh[x],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ga(h)),g)g(this,t,x,h,n)&&(m=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",xr.lastIndex=0,xr.test(c)||(p=yn(c),_=yn(h),_?p!==_&&(c=Qr(t,x,c,_)+_):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,x),a.push(x),M.push(x,0,o[x]);else if(d!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,t,s):l[x],on(c)&&~c.indexOf("random(")&&(c=ga(c)),yn(c+"")||c==="auto"||(c+=Qn.units[x]||yn(yr(t,x))||""),(c+"").charAt(1)==="="&&(c=yr(t,x))):c=yr(t,x),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),x in nr&&(x==="autoAlpha"&&(f===1&&yr(t,"visibility")==="hidden"&&u&&(f=0),M.push("visibility",0,o.visibility),$r(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),x!=="scale"&&x!=="transform"&&(x=nr[x],~x.indexOf(",")&&(x=x.split(",")[0]))),A=x in Mr,A){if(this.styles.save(x),P=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=mi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=h,h=mi(t,"perspective"),E?t.style.perspective=E:Kr(t,"perspective")}u=parseFloat(h)}if(v||(w=t._gsap,w.renderTransform&&!e.parseTransform||No(t,e.parseTransform),y=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new Vn(this._pt,o,Oe,0,1,w.renderTransform,w,0,-1),v.dep=1),x==="scale")this._pt=new Vn(this._pt,w,"scaleY",w.scaleY,(S?bs(w.scaleY,S+u):u)-w.scaleY||0,Zf),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(jn,0,o[jn]),h=Gb(h),w.svg?Kf(t,h,0,y,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==w.zOrigin&&$r(this,w,"zOrigin",w.zOrigin,_),$r(this,o,x,gh(c),gh(h)));continue}else if(x==="svgOrigin"){Kf(t,h,1,y,0,this);continue}else if(x in Ag){qb(this,w,x,f,S?bs(f,S+h):h);continue}else if(x==="smoothOrigin"){$r(this,w,"smooth",w.smooth,h);continue}else if(x==="force3D"){w[x]=h;continue}else if(x==="transform"){Yb(this,h,t);continue}}else x in o||(x=ya(x)||x);if(A||(u||u===0)&&(f||f===0)&&!Eb.test(h)&&x in o)p=(c+"").substr((f+"").length),u||(u=0),_=yn(h)||(x in Qn.units?Qn.units[x]:p),p!==_&&(f=Qr(t,x,c,_)),this._pt=new Vn(this._pt,A?w:o,x,f,(S?bs(f,S+u):u)-f,!A&&(_==="px"||x==="zIndex")&&e.autoRound!==!1?Ib:Zf),this._pt.u=_||0,A&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Pb):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Rb);else if(x in o)Vb.call(this,t,x,c,S?S+h:h);else if(x in t)this.add(t,x,c||t[x],S?S+h:h,i,s);else if(x!=="parseTransform"){hh(x,h);continue}A||(x in o?M.push(x,0,o[x]):typeof t[x]=="function"?M.push(x,2,t[x]()):M.push(x,1,c||t[x])),a.push(x)}}m&&qf(this)},render:function(t,e){if(e.tween._time||!jf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:yr,aliases:nr,getSetter:function(t,e,n){var i=nr[e];return i&&i.indexOf(",")<0&&(e=i),e in Mr&&e!==jn&&(t._gsap.x||yr(t,"x"))?n&&hg===n?e==="scale"?Ub:Nb:(hg=n||{})&&(e==="scale"?Fb:Ob):t.style&&!ch(t.style[e])?Lb:~e.indexOf("-")?Db:ph(t,e)},core:{_removeProperty:Kr,_getMatrix:ed}};Pn.utils.checkPrefix=ya;Pn.core.getStyleSaver=Sg;(function(r,t,e,n){var i=kn(r+","+t+","+e,function(s){Mr[s]=1});kn(t,function(s){Qn.units[s]="deg",Ag[s]=1}),nr[i[13]]=r+","+t,kn(n,function(s){var a=s.split(":");nr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Pn.registerPlugin(nd);var ki=Pn.registerPlugin(nd)||Pn,bE=ki.core.Tween;function Rg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Zb(r,t,e){return t&&Rg(r.prototype,t),e&&Rg(r,e),r}var Mn,vh,Jb,ti,jr,ts,Sa,Ig,Rs,ba,Lg,Sr,Vi,Dg,Ng=function(){return Mn||typeof window!="undefined"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},Ug=1,Ma=[],qt=[],Gi=[],Fo=Date.now,id=function(t,e){return e},$b=function(){var t=ba.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,qt),i.push.apply(i,Gi),qt=n,Gi=i,id=function(a,o){return e[a](o)}},Tr=function(t,e){return~Gi.indexOf(t)&&Gi[Gi.indexOf(t)+1][e]},Oo=function(t){return!!~Lg.indexOf(t)},Hn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},_h="scrollLeft",xh="scrollTop",rd=function(){return Sr&&Sr.isPressed||qt.cache++},yh=function(t,e){var n=function i(s){if(s||s===0){Ug&&ti.history.scrollRestoration!=="manual"&&(ti.history.scrollRestoration="manual");var a=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),t(s),i.cacheID=qt.cache,a&&id("ss",s)}else(e||qt.cache!==i.cacheID||id("ref"))&&(i.cacheID=qt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},In={s:_h,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yh(function(r){return arguments.length?ti.scrollTo(r,Qe.sc()):ti.pageXOffset||jr[_h]||ts[_h]||Sa[_h]||0})},Qe={s:xh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:yh(function(r){return arguments.length?ti.scrollTo(In.sc(),r):ti.pageYOffset||jr[xh]||ts[xh]||Sa[xh]||0})},Wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Mn.utils.toArray)(t)[0]||(typeof t=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Kb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},br=function(t,e){var n=e.s,i=e.sc;Oo(t)&&(t=jr.scrollingElement||ts);var s=qt.indexOf(t),a=i===Qe.sc?1:2;!~s&&(s=qt.push(t)-1),qt[s+a]||Hn(t,"scroll",rd);var o=qt[s+a],l=o||(qt[s+a]=yh(Tr(t,n),!0)||(Oo(t)?i:yh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Mn.getProperty(t,"scrollBehavior")==="smooth"),l},Mh=function(t,e,n){var i=t,s=t,a=Fo(),o=a,l=e||50,c=Math.max(500,l*3),h=function(g,x){var p=Fo();x||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},u=function(){s=i=n?0:i,o=a=0},f=function(g){var x=o,p=s,_=Fo();return(g||g===0)&&g!==i&&h(g),a===o||_-o>c?0:(i+(n?p:-p))/((n?_:a)-x)*1e3};return{update:h,reset:u,getVelocity:f}},Uo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Pg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Fg=function(){ba=Mn.core.globals().ScrollTrigger,ba&&ba.core&&$b()},Og=function(t){return Mn=t||Ng(),!vh&&Mn&&typeof document!="undefined"&&document.body&&(ti=window,jr=document,ts=jr.documentElement,Sa=jr.body,Lg=[ti,jr,ts,Sa],Jb=Mn.utils.clamp,Dg=Mn.core.context||function(){},Rs="onpointerenter"in Sa?"pointer":"mouse",Ig=He.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vi=He.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ug=0},500),vh=1),ba||Fg(),vh};In.op=Qe;qt.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){vh||Og(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),ba||Fg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,x=n.event,p=n.onDragStart,_=n.onDragEnd,S=n.onDrag,A=n.onPress,v=n.onRelease,w=n.onRight,y=n.onLeft,m=n.onUp,M=n.onDown,P=n.onChangeX,E=n.onChangeY,D=n.onChange,N=n.onToggleX,B=n.onToggleY,I=n.onHover,z=n.onHoverEnd,G=n.onMove,F=n.ignoreCheck,Q=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,xt=n.onEnable,At=n.onDisable,q=n.onClick,ot=n.scrollSpeed,_t=n.capture,St=n.allowClicks,ut=n.lockAxis,Nt=n.onLockAxis;this.target=o=Wn(o)||ts,this.vars=n,d&&(d=Mn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ot=ot||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(Sa).lineHeight)||22);var xe,Et,Gt,Lt,Ft,ce,ae,J=this,$t=0,Ye=0,Me=n.passive||!h&&n.passive!==!1,ee=br(o,In),Be=br(o,Qe),We=ee(),O=Be(),ue=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Vi[0]==="pointerdown",oe=Oo(o),Vt=o.ownerDocument||jr,ft=[0,0,0],he=[0,0,0],Dt=0,Ot=function(){return Dt=Fo()},C=function(mt,rt){return(J.event=mt)&&d&&Kb(mt.target,d)||rt&&ue&&mt.pointerType!=="touch"||F&&F(mt,rt)},b=function(){J._vx.reset(),J._vy.reset(),Et.pause(),u&&u(J)},V=function(){var mt=J.deltaX=Pg(ft),rt=J.deltaY=Pg(he),et=Math.abs(mt)>=i,vt=Math.abs(rt)>=i;D&&(et||vt)&&D(J,mt,rt,ft,he),et&&(w&&J.deltaX>0&&w(J),y&&J.deltaX<0&&y(J),P&&P(J),N&&J.deltaX<0!=$t<0&&N(J),$t=J.deltaX,ft[0]=ft[1]=ft[2]=0),vt&&(M&&J.deltaY>0&&M(J),m&&J.deltaY<0&&m(J),E&&E(J),B&&J.deltaY<0!=Ye<0&&B(J),Ye=J.deltaY,he[0]=he[1]=he[2]=0),(Lt||Gt)&&(G&&G(J),Gt&&(p&&Gt===1&&p(J),S&&S(J),Gt=0),Lt=!1),ce&&!(ce=!1)&&Nt&&Nt(J),Ft&&(j(J),Ft=!1),xe=0},st=function(mt,rt,et){ft[et]+=mt,he[et]+=rt,J._vx.update(mt),J._vy.update(rt),c?xe||(xe=requestAnimationFrame(V)):V()},it=function(mt,rt){ut&&!ae&&(J.axis=ae=Math.abs(mt)>Math.abs(rt)?"x":"y",ce=!0),ae!=="y"&&(ft[2]+=mt,J._vx.update(mt,!0)),ae!=="x"&&(he[2]+=rt,J._vy.update(rt,!0)),c?xe||(xe=requestAnimationFrame(V)):V()},ht=function(mt){if(!C(mt,1)){mt=Uo(mt,h);var rt=mt.clientX,et=mt.clientY,vt=rt-J.x,nt=et-J.y,Tt=J.isDragging;J.x=rt,J.y=et,(Tt||(vt||nt)&&(Math.abs(J.startX-rt)>=s||Math.abs(J.startY-et)>=s))&&(Gt||(Gt=Tt?2:1),Tt||(J.isDragging=!0),it(vt,nt))}},gt=J.onPress=function(at){C(at,1)||at&&at.button||(J.axis=ae=null,Et.pause(),J.isPressed=!0,at=Uo(at),$t=Ye=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),Hn(Q?o:Vt,Vi[1],ht,Me,!0),J.deltaX=J.deltaY=0,A&&A(J))},W=J.onRelease=function(at){if(!C(at,1)){Gn(Q?o:Vt,Vi[1],ht,!0);var mt=!isNaN(J.y-J.startY),rt=J.isDragging,et=rt&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),vt=Uo(at);!et&&mt&&(J._vx.reset(),J._vy.reset(),h&&St&&Mn.delayedCall(.08,function(){if(Fo()-Dt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Vt.createEvent){var nt=Vt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,ti,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,u&&rt&&!Q&&Et.restart(!0),Gt&&V(),_&&rt&&_(J),v&&v(J,et)}},tt=function(mt){return mt.touches&&mt.touches.length>1&&(J.isGesturing=!0)&&H(mt,J.isDragging)},ct=function(){return(J.isGesturing=!1)||R(J)},L=function(mt){if(!C(mt)){var rt=ee(),et=Be();st((rt-We)*ot,(et-O)*ot,1),We=rt,O=et,u&&Et.restart(!0)}},K=function(mt){if(!C(mt)){mt=Uo(mt,h),j&&(Ft=!0);var rt=(mt.deltaMode===1?l:mt.deltaMode===2?ti.innerHeight:1)*g;st(mt.deltaX*rt,mt.deltaY*rt,0),u&&!Q&&Et.restart(!0)}},$=function(mt){if(!C(mt)){var rt=mt.clientX,et=mt.clientY,vt=rt-J.x,nt=et-J.y;J.x=rt,J.y=et,Lt=!0,u&&Et.restart(!0),(vt||nt)&&it(vt,nt)}},dt=function(mt){J.event=mt,I(J)},lt=function(mt){J.event=mt,z(J)},pt=function(mt){return C(mt)||Uo(mt,h)&&q(J)};Et=J._dc=Mn.delayedCall(f||.25,b).pause(),J.deltaX=J.deltaY=0,J._vx=Mh(0,50,!0),J._vy=Mh(0,50,!0),J.scrollX=ee,J.scrollY=Be,J.isDragging=J.isGesturing=J.isPressed=!1,Dg(this),J.enable=function(at){return J.isEnabled||(Hn(oe?Vt:o,"scroll",rd),a.indexOf("scroll")>=0&&Hn(oe?Vt:o,"scroll",L,Me,_t),a.indexOf("wheel")>=0&&Hn(o,"wheel",K,Me,_t),(a.indexOf("touch")>=0&&Ig||a.indexOf("pointer")>=0)&&(Hn(o,Vi[0],gt,Me,_t),Hn(Vt,Vi[2],W),Hn(Vt,Vi[3],W),St&&Hn(o,"click",Ot,!0,!0),q&&Hn(o,"click",pt),H&&Hn(Vt,"gesturestart",tt),R&&Hn(Vt,"gestureend",ct),I&&Hn(o,Rs+"enter",dt),z&&Hn(o,Rs+"leave",lt),G&&Hn(o,Rs+"move",$)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Lt=Gt=!1,J._vx.reset(),J._vy.reset(),We=ee(),O=Be(),at&&at.type&&gt(at),xt&&xt(J)),J},J.disable=function(){J.isEnabled&&(Ma.filter(function(at){return at!==J&&Oo(at.target)}).length||Gn(oe?Vt:o,"scroll",rd),J.isPressed&&(J._vx.reset(),J._vy.reset(),Gn(Q?o:Vt,Vi[1],ht,!0)),Gn(oe?Vt:o,"scroll",L,_t),Gn(o,"wheel",K,_t),Gn(o,Vi[0],gt,_t),Gn(Vt,Vi[2],W),Gn(Vt,Vi[3],W),Gn(o,"click",Ot,!0),Gn(o,"click",pt),Gn(Vt,"gesturestart",tt),Gn(Vt,"gestureend",ct),Gn(o,Rs+"enter",dt),Gn(o,Rs+"leave",lt),Gn(o,Rs+"move",$),J.isEnabled=J.isPressed=J.isDragging=!1,At&&At(J))},J.kill=J.revert=function(){J.disable();var at=Ma.indexOf(J);at>=0&&Ma.splice(at,1),Sr===J&&(Sr=0)},Ma.push(J),Q&&Oo(o)&&(Sr=J),J.enable(x)},Zb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.1";He.create=function(r){return new He(r)};He.register=Og;He.getAll=function(){return Ma.slice()};He.getById=function(r){return Ma.filter(function(t){return t.vars.id===r})[0]};Ng()&&Mn.registerPlugin(He);var Ct,Ea,Jt,ve,xi,ge,xd,Oh,$o,Wo,zo,Sh,Ln,kh,ud,qn,Bg,zg,Ca,e0,sd,n0,Xn,fd,i0,r0,es,dd,vd,Ra,yd,ns,pd,ad,bh=1,Dn=Date.now,od=Dn(),Ri=0,ko=0,kg=function(t,e,n){var i=_i(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Vg=function(t,e){return e&&(!_i(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qb=function r(){return ko&&requestAnimationFrame(r)},Gg=function(){return kh=1},Hg=function(){return kh=0},ir=function(t){return t},Vo=function(t){return Math.round(t*1e5)/1e5||0},s0=function(){return typeof window!="undefined"},a0=function(){return Ct||s0()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},Us=function(t){return!!~xd.indexOf(t)},o0=function(t){return(t==="Height"?yd:Jt["inner"+t])||xi["client"+t]||ge["client"+t]},l0=function(t){return Tr(t,"getBoundingClientRect")||(Us(t)?function(){return Fh.width=Jt.innerWidth,Fh.height=yd,Fh}:function(){return wr(t)})},jb=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Tr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?o0(s):t["client"+s])||0}},t1=function(t,e){return!e||~Gi.indexOf(t)?l0(t):function(){return Fh}},rr=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Tr(t,n))?a()-l0(t)()[s]:Us(t)?(xi[n]||ge[n])-o0(i):t[n]-t["offset"+i])},Th=function(t,e){for(var n=0;n<Ca.length;n+=3)(!e||~e.indexOf(Ca[n+1]))&&t(Ca[n],Ca[n+1],Ca[n+2])},_i=function(t){return typeof t=="string"},Nn=function(t){return typeof t=="function"},Go=function(t){return typeof t=="number"},Ps=function(t){return typeof t=="object"},Bo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ta=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},wa=Math.abs,c0="left",h0="top",Md="right",Sd="bottom",Ls="width",Ds="height",Xo="Right",qo="Left",Yo="Top",Zo="Bottom",je="padding",Ei="margin",Ia="Width",bd="Height",ln="px",Ci=function(t){return Jt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},e1=function(t){var e=Ci(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Wg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wr=function(t,e){var n=e&&Ci(t)[ud]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Bh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},u0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},n1=function(t){return function(e){return Ct.utils.snap(u0(t),e)}},Td=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},i1=function(t){return function(e,n){return Td(u0(t))(e,n.direction)}},wh=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ah=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Xg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Eh={toggleActions:"play",anticipatePin:0},zh={top:0,left:0,center:.5,bottom:1,right:1},Lh=function(t,e){if(_i(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in zh?zh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ch=function(t,e,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,g=ve.createElement("div"),x=Us(n)||Tr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,_=x?ge:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,A=S?c:h,v="border-color:"+A+";font-size:"+u+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(v+=(i===Qe?Md:Sd)+":"+(a+parseFloat(f))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Dh(g,0,i,S),g},Dh=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ia]=1,s["border"+o+Ia]=0,s[n.p]=e+"px",Ct.set(t,s)},Zt=[],md={},Ko,qg=function(){return Dn()-Ri>34&&(Ko||(Ko=requestAnimationFrame(Ar)))},Aa=function(){(!Xn||!Xn.isPressed||Xn.startX>ge.clientWidth)&&(qt.cache++,Xn?Ko||(Ko=requestAnimationFrame(Ar)):Ar(),Ri||Os("scrollStart"),Ri=Dn())},ld=function(){r0=Jt.innerWidth,i0=Jt.innerHeight},Ho=function(t){qt.cache++,(t===!0||!Ln&&!n0&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!fd||r0!==Jt.innerWidth||Math.abs(Jt.innerHeight-i0)>Jt.innerHeight*.25))&&Oh.restart(!0)},Fs={},r1=[],f0=function r(){return gn(Yt,"scrollEnd",r)||Is(!0)},Os=function(t){return Fs[t]&&Fs[t].map(function(e){return e()})||r1},gi=[],d0=function(t){for(var e=0;e<gi.length;e+=5)(!t||gi[e+4]&&gi[e+4].query===t)&&(gi[e].style.cssText=gi[e+1],gi[e].getBBox&&gi[e].setAttribute("transform",gi[e+2]||""),gi[e+3].uncache=1)},p0=function(){qt.cache++,qt.forEach(function(t){return Nn(t)&&(t.rec=t())})},wd=function(t,e){var n;for(qn=0;qn<Zt.length;qn++)n=Zt[qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ns=!0,e&&d0(e),e||Os("revert")},m0=function(t,e){qt.cache++,(e||!Yn)&&qt.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),_i(t)&&(vd=t,Jt.history.scrollRestoration!==t&&(Jt.history.scrollRestoration=t))},Yn,Ns=0,Yg,s1=function(){if(Yg!==Ns){var t=Yg=Ns;requestAnimationFrame(function(){return t===Ns&&Is(!0)})}},g0=function(){ge.appendChild(Ra),yd=!Xn&&Ra.offsetHeight||Jt.innerHeight,ge.removeChild(Ra)},Zg=function(t){return $o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Is=function(t,e){if(xi=ve.documentElement,ge=ve.body,xd=[Jt,ve,xi,ge],Ri&&!t&&!ns){_n(Yt,"scrollEnd",f0);return}g0(),Yn=Yt.isRefreshing=!0,ns||p0();var n=Os("refreshInit");e0&&Yt.sort(),e||wd(),qt.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Zt.slice(0).forEach(function(i){return i.refresh()}),ns=!1,Zt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),pd=1,Zg(!0),Zt.forEach(function(i){var s=rr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Zg(!1),pd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),qt.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),m0(vd,1),Oh.pause(),Ns++,Yn=2,Ar(2),Zt.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=Yt.isRefreshing=!1,Os("refresh")},gd=0,Nh=1,Jo,Ar=function(t){if(t===2||!Yn&&!ns){Yt.isUpdating=!0,Jo&&Jo.update(0);var e=Zt.length,n=Dn(),i=n-od>=50,s=e&&Zt[0].scroll();if(Nh=gd>s?-1:1,Yn||(gd=s),i&&(Ri&&!kh&&n-Ri>200&&(Ri=0,Os("scrollEnd")),zo=od,od=n),Nh<0){for(qn=e;qn-- >0;)Zt[qn]&&Zt[qn].update(0,i);Nh=1}else for(qn=0;qn<e;qn++)Zt[qn]&&Zt[qn].update(0,i);Yt.isUpdating=!1}Ko=0},_d=[c0,h0,Sd,Md,Ei+Zo,Ei+Xo,Ei+Yo,Ei+qo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uh=_d.concat([Ls,Ds,"boxSizing","max"+Ia,"max"+bd,"position",Ei,je,je+Yo,je+Xo,je+Zo,je+qo]),a1=function(t,e,n){Pa(n);var i=t._gsap;if(i.spacerIsNative)Pa(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},cd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=_d.length,a=e.style,o=t.style,l;s--;)l=_d[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Sd]=o[Md]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ls]=Bh(t,In)+ln,a[Ds]=Bh(t,Qe)+ln,a[je]=o[Ei]=o[h0]=o[c0]="0",Pa(i),o[Ls]=o["max"+Ia]=n[Ls],o[Ds]=o["max"+bd]=n[Ds],o[je]=n[je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},o1=/([A-Z])/g,Pa=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(o1,"-$1").toLowerCase())}},Rh=function(t){for(var e=Uh.length,n=t.style,i=[],s=0;s<e;s++)i.push(Uh[s],n[Uh[s]]);return i.t=t,i},l1=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Fh={left:0,top:0},Jg=function(t,e,n,i,s,a,o,l,c,h,u,f,d,g){Nn(t)&&(t=t(l)),_i(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Lh("0"+t.substr(3),n):0));var x=d?d.time():0,p,_,S;if(d&&d.seek(0),isNaN(t)||(t=+t),Go(t))d&&(t=Ct.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),o&&Dh(o,n,i,!0);else{Nn(e)&&(e=e(l));var A=(t||"0").split(" "),v,w,y,m;S=Wn(e,l)||ge,v=wr(S)||{},(!v||!v.left&&!v.top)&&Ci(S).display==="none"&&(m=S.style.display,S.style.display="block",v=wr(S),m?S.style.display=m:S.style.removeProperty("display")),w=Lh(A[0],v[i.d]),y=Lh(A[1]||"0",n),t=v[i.p]-c[i.p]-h+w+s-y,o&&Dh(o,y,i,n-y<20||o._isStart&&y>20),n-=n-y}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var M=t+n,P=a._isStart;p="scroll"+i.d2,Dh(a,M,i,P&&M>20||!P&&(u?Math.max(ge[p],xi[p]):a.parentNode[p])<=M+1),u&&(c=wr(o),u&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+ln))}return d&&S&&(p=wr(S),d.seek(f),_=wr(S),d._caScrollDist=p[i.p]-_[i.p],t=t/d._caScrollDist*f),d&&d.seek(x),d?t:Math.round(t)},c1=/(webkit|moz|length|cssText|inset)/i,$g=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===ge){t._stOrig=s.cssText,o=Ci(t);for(a in o)!+a&&!c1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},_0=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Ph=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},Kg=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function a(o,l,c,h,u){var f=a.tween,d=l.onComplete,g={};c=c||n();var x=_0(n,c,function(){f.kill(),a.tween=0});return u=h&&u||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return x(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){qt.cache++,a.tween&&Ar()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Ct.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(t,"wheel",n.wheelHandler),Yt.isTouch&&_n(t,"touchmove",n.wheelHandler),s},Yt=(function(){function r(e,n){Ea||r.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dd(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ko){this.update=this.refresh=this.kill=ir;return}n=Wg(_i(n)||Go(n)||n.nodeType?{trigger:n}:n,Eh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,S=s.onSnapComplete,A=s.once,v=s.snap,w=s.pinReparent,y=s.pinSpacer,m=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:Qe,D=!u&&u!==0,N=Wn(n.scroller||Jt),B=Ct.core.getCache(N),I=Us(N),z=("pinType"in n?n.pinType:Tr(N,"pinType")||I&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=D&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Eh.markers,H=I?0:parseFloat(Ci(N)["border"+E.p2+Ia])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},xt=jb(N,I,E),At=t1(N,I),q=0,ot=0,_t=0,St=br(N,E),ut,Nt,xe,Et,Gt,Lt,Ft,ce,ae,J,$t,Ye,Me,ee,Be,We,O,ue,oe,Vt,ft,he,Dt,Ot,C,b,V,st,it,ht,gt,W,tt,ct,L,K,$,dt,lt;if(R._startClamp=R._endClamp=!1,R._dir=E,p*=45,R.scroller=N,R.scroll=m?m.time.bind(m):St,Et=St(),ns&&St.rec==null&&(St.rec=Et),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(e0=1,n.refreshPriority===-9999&&(Jo=R)),B.tweenScroll=B.tweenScroll||{top:Kg(N,Qe),left:Kg(N,In)},R.tweenTo=ut=B.tweenScroll[E.p],R.scrubDuration=function(et){tt=Go(et)&&et,tt?W?W.duration(et):W=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return _&&_(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(u),ht=0,l||(l=i.vars.id)),v&&((!Ps(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ge.style&&Ct.set(I?[ge,xi]:N,{scrollBehavior:"auto"}),qt.forEach(function(et){return Nn(et)&&et.target===(I?ve.scrollingElement||xi:N)&&(et.smooth=!1)}),xe=Nn(v.snapTo)?v.snapTo:v.snapTo==="labels"?n1(i):v.snapTo==="labelsDirectional"?i1(i):v.directional!==!1?function(et,vt){return Td(v.snapTo)(et,Dn()-ot<500?0:vt.direction)}:Ct.utils.snap(v.snapTo),ct=v.duration||{min:.1,max:2},ct=Ps(ct)?Wo(ct.min,ct.max):Wo(ct,ct),L=Ct.delayedCall(v.delay||tt/2||.1,function(){var et=St(),vt=Dn()-ot<500,nt=ut.tween;if((vt||Math.abs(R.getVelocity())<10)&&!nt&&!kh&&q!==et){var Tt=(et-Lt)/ee,Kt=i&&!D?i.totalProgress():Tt,Ht=vt?0:(Kt-gt)/(Dn()-zo)*1e3||0,Pe=Ct.utils.clamp(-Tt,1-Tt,wa(Ht/2)*Ht/.185),Ze=Tt+(v.inertia===!1?0:Pe),Ie,Se,pe=v,en=pe.onStart,be=pe.onInterrupt,Sn=pe.onComplete;if(Ie=xe(Ze,R),Go(Ie)||(Ie=Ze),Se=Math.max(0,Math.round(Lt+Ie*ee)),et<=Ft&&et>=Lt&&Se!==et){if(nt&&!nt._initted&&nt.data<=wa(Se-et))return;v.inertia===!1&&(Pe=Ie-Tt),ut(Se,{duration:ct(wa(Math.max(wa(Ze-Kt),wa(Ie-Kt))*.185/Ht/.05||0)),ease:v.ease||"power3",data:wa(Se-et),onInterrupt:function(){return L.restart(!0)&&be&&Ta(R,be)},onComplete:function(){R.update(),q=St(),i&&!D&&(W?W.resetTo("totalProgress",Ie,i._tTime/i._tDur):i.progress(Ie)),ht=gt=i&&!D?i.totalProgress():R.progress,S&&S(R),Sn&&Ta(R,Sn)}},et,Pe*ee,Se-et-Pe*ee),en&&Ta(R,en,ut.tween)}}else R.isActive&&q!==et&&L.restart(!0)}).pause()),l&&(md[l]=R),f=R.trigger=Wn(f||d!==!0&&d),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(R)),d=d===!0?f:Wn(d),_i(o)&&(o={targets:f,className:o}),d&&(g===!1||g===Ei||(g=!g&&d.parentNode&&d.parentNode.style&&Ci(d.parentNode).display==="flex"?!1:je),R.pin=d,Nt=Ct.core.getCache(d),Nt.spacer?Be=Nt.pinState:(y&&(y=Wn(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),Nt.spacerIsNative=!!y,y&&(Nt.spacerState=Rh(y))),Nt.spacer=ue=y||ve.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),Nt.pinState=Be=Rh(d)),n.force3D!==!1&&Ct.set(d,{force3D:!0}),R.spacer=ue=Nt.spacer,it=Ci(d),Ot=it[g+E.os2],Vt=Ct.getProperty(d),ft=Ct.quickSetter(d,E.a,ln),cd(d,ue,it),O=Rh(d)),Q){Ye=Ps(Q)?Wg(Q,Xg):Xg,J=Ch("scroller-start",l,N,E,Ye,0),$t=Ch("scroller-end",l,N,E,Ye,0,J),oe=J["offset"+E.op.d2];var pt=Wn(Tr(N,"content")||N);ce=this.markerStart=Ch("start",l,pt,E,Ye,oe,0,m),ae=this.markerEnd=Ch("end",l,pt,E,Ye,oe,0,m),m&&(dt=Ct.quickSetter([ce,ae],E.a,ln)),!z&&!(Gi.length&&Tr(N,"fixedMarkers")===!0)&&(e1(I?ge:N),Ct.set([J,$t],{force3D:!0}),b=Ct.quickSetter(J,E.a,ln),st=Ct.quickSetter($t,E.a,ln))}if(m){var at=m.vars.onUpdate,mt=m.vars.onUpdateParams;m.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(m,mt||[])})}if(R.previous=function(){return Zt[Zt.indexOf(R)-1]},R.next=function(){return Zt[Zt.indexOf(R)+1]},R.revert=function(et,vt){if(!vt)return R.kill(!0);var nt=et!==!1||!R.enabled,Tt=Ln;nt!==R.isReverted&&(nt&&(K=Math.max(St(),R.scroll.rec||0),_t=R.progress,$=i&&i.progress()),ce&&[ce,ae,J,$t].forEach(function(Kt){return Kt.style.display=nt?"none":"block"}),nt&&(Ln=R,R.update(nt)),d&&(!w||!R.isActive)&&(nt?a1(d,ue,Be):cd(d,ue,Ci(d),C)),nt||R.update(nt),Ln=Tt,R.isReverted=nt)},R.refresh=function(et,vt,nt,Tt){if(!((Ln||!R.enabled)&&!vt)){if(d&&et&&Ri){_n(r,"scrollEnd",f0);return}!Yn&&j&&j(R),Ln=R,ut.tween&&!nt&&(ut.tween.kill(),ut.tween=0),W&&W.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Kt=xt(),Ht=At(),Pe=m?m.duration():rr(N,E),Ze=ee<=.01||!ee,Ie=0,Se=Tt||0,pe=Ps(nt)?nt.end:n.end,en=n.endTrigger||f,be=Ps(nt)?nt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Sn=R.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,R),ii=f&&Math.max(0,Zt.indexOf(R))||0,ze=ii,Je,nn,ri,zs,rn,ke,vi,Oa,el,Er,T,U,Y;for(Q&&Ps(nt)&&(U=Ct.getProperty(J,E.p),Y=Ct.getProperty($t,E.p));ze-- >0;)ke=Zt[ze],ke.end||ke.refresh(0,1)||(Ln=R),vi=ke.pin,vi&&(vi===f||vi===d||vi===Sn)&&!ke.isReverted&&(Er||(Er=[]),Er.unshift(ke),ke.revert(!0,!0)),ke!==Zt[ze]&&(ii--,ze--);for(Nn(be)&&(be=be(R)),be=kg(be,"start",R),Lt=Jg(be,f,Kt,E,St(),ce,J,R,Ht,H,z,Pe,m,R._startClamp&&"_startClamp")||(d?-.001:0),Nn(pe)&&(pe=pe(R)),_i(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(_i(be)?be.split(" ")[0]:"")+pe:(Ie=Lh(pe.substr(2),Kt),pe=_i(be)?be:(m?Ct.utils.mapRange(0,m.duration(),m.scrollTrigger.start,m.scrollTrigger.end,Lt):Lt)+Ie,en=f)),pe=kg(pe,"end",R),Ft=Math.max(Lt,Jg(pe||(en?"100% 0":Pe),en,Kt,E,St()+Ie,ae,$t,R,Ht,H,z,Pe,m,R._endClamp&&"_endClamp"))||-.001,Ie=0,ze=ii;ze--;)ke=Zt[ze]||{},vi=ke.pin,vi&&ke.start-ke._pinPush<=Lt&&!m&&ke.end>0&&(Je=ke.end-(R._startClamp?Math.max(0,ke.start):ke.start),(vi===f&&ke.start-ke._pinPush<Lt||vi===Sn)&&isNaN(be)&&(Ie+=Je*(1-ke.progress)),vi===d&&(Se+=Je));if(Lt+=Ie,Ft+=Ie,R._startClamp&&(R._startClamp+=Ie),R._endClamp&&!Yn&&(R._endClamp=Ft||-.001,Ft=Math.min(Ft,rr(N,E))),ee=Ft-Lt||(Lt-=.01)&&.001,Ze&&(_t=Ct.utils.clamp(0,1,Ct.utils.normalize(Lt,Ft,K))),R._pinPush=Se,ce&&Ie&&(Je={},Je[E.a]="+="+Ie,Sn&&(Je[E.p]="-="+St()),Ct.set([ce,ae],Je)),d&&!(pd&&R.end>=rr(N,E)))Je=Ci(d),zs=E===Qe,ri=St(),he=parseFloat(Vt(E.a))+Se,!Pe&&Ft>1&&(T=(I?ve.scrollingElement||xi:N).style,T={style:T,value:T["overflow"+E.a.toUpperCase()]},I&&Ci(ge)["overflow"+E.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+E.a.toUpperCase()]="scroll")),cd(d,ue,Je),O=Rh(d),nn=wr(d,!0),Oa=z&&br(N,zs?In:Qe)(),g?(C=[g+E.os2,ee+Se+ln],C.t=ue,ze=g===je?Bh(d,E)+ee+Se:0,ze&&(C.push(E.d,ze+ln),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=ze+ln)),Pa(C),Sn&&Zt.forEach(function(k){k.pin===Sn&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),z&&St(K)):(ze=Bh(d,E),ze&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=ze+ln)),z&&(rn={top:nn.top+(zs?ri-Lt:Oa)+ln,left:nn.left+(zs?Oa:ri-Lt)+ln,boxSizing:"border-box",position:"fixed"},rn[Ls]=rn["max"+Ia]=Math.ceil(nn.width)+ln,rn[Ds]=rn["max"+bd]=Math.ceil(nn.height)+ln,rn[Ei]=rn[Ei+Yo]=rn[Ei+Xo]=rn[Ei+Zo]=rn[Ei+qo]="0",rn[je]=Je[je],rn[je+Yo]=Je[je+Yo],rn[je+Xo]=Je[je+Xo],rn[je+Zo]=Je[je+Zo],rn[je+qo]=Je[je+qo],We=l1(Be,rn,w),Yn&&St(0)),i?(el=i._initted,sd(1),i.render(i.duration(),!0,!0),Dt=Vt(E.a)-he+ee+Se,V=Math.abs(ee-Dt)>1,z&&V&&We.splice(We.length-2,2),i.render(0,!0,!0),el||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),sd(0)):Dt=ee,T&&(T.value?T.style["overflow"+E.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+E.a));else if(f&&St()&&!m)for(nn=f.parentNode;nn&&nn!==ge;)nn._pinOffset&&(Lt-=nn._pinOffset,Ft-=nn._pinOffset),nn=nn.parentNode;Er&&Er.forEach(function(k){return k.revert(!1,!0)}),R.start=Lt,R.end=Ft,Et=Gt=Yn?K:St(),!m&&!Yn&&!ns&&(Et<K&&St(K),R.scroll.rec=0),R.revert(!1,!0),ot=Dn(),L&&(q=-1,L.restart(!0)),Ln=0,i&&D&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),(Ze||_t!==R.progress||m||x||i&&!i._initted)&&(i&&!D&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(m&&Lt<-.001&&!_t?Ct.utils.normalize(Lt,Ft,0):_t,!0),R.progress=Ze||(Et-Lt)/ee===_t?0:_t),d&&g&&(ue._pinOffset=Math.round(R.progress*Dt)),W&&W.invalidate(),isNaN(U)||(U-=Ct.getProperty(J,E.p),Y-=Ct.getProperty($t,E.p),Ph(J,E,U),Ph(ce,E,U-(Tt||0)),Ph($t,E,Y),Ph(ae,E,Y-(Tt||0))),Ze&&!Yn&&R.update(),h&&!Yn&&!Me&&(Me=!0,h(R),Me=!1)}},R.getVelocity=function(){return(St()-Gt)/(Dn()-zo)*1e3||0},R.endAnimation=function(){Bo(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?D||Bo(i,R.direction<0,1):Bo(i,i.reversed()))},R.labelToScroll=function(et){return i&&i.labels&&(Lt||R.refresh()||Lt)+i.labels[et]/i.duration()*ee||0},R.getTrailing=function(et){var vt=Zt.indexOf(R),nt=R.direction>0?Zt.slice(0,vt).reverse():Zt.slice(vt+1);return(_i(et)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===et}):nt).filter(function(Tt){return R.direction>0?Tt.end<=Lt:Tt.start>=Ft})},R.update=function(et,vt,nt){if(!(m&&!nt&&!et)){var Tt=Yn===!0?K:R.scroll(),Kt=et?0:(Tt-Lt)/ee,Ht=Kt<0?0:Kt>1?1:Kt||0,Pe=R.progress,Ze,Ie,Se,pe,en,be,Sn,ii;if(vt&&(Gt=Et,Et=m?St():Tt,v&&(gt=ht,ht=i&&!D?i.totalProgress():Ht)),p&&d&&!Ln&&!bh&&Ri&&(!Ht&&Lt<Tt+(Tt-Gt)/(Dn()-zo)*p?Ht=1e-4:Ht===1&&Ft>Tt+(Tt-Gt)/(Dn()-zo)*p&&(Ht=.9999)),Ht!==Pe&&R.enabled){if(Ze=R.isActive=!!Ht&&Ht<1,Ie=!!Pe&&Pe<1,be=Ze!==Ie,en=be||!!Ht!=!!Pe,R.direction=Ht>Pe?1:-1,R.progress=Ht,en&&!Ln&&(Se=Ht&&!Pe?0:Ht===1?1:Pe===1?2:3,D&&(pe=!be&&F[Se+1]!=="none"&&F[Se+1]||F[Se],ii=i&&(pe==="complete"||pe==="reset"||pe in i))),P&&(be||ii)&&(ii||u||!i)&&(Nn(P)?P(R):R.getTrailing(P).forEach(function(ri){return ri.endAnimation()})),D||(W&&!Ln&&!bh?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Ht,i._tTime/i._tDur):(W.vars.totalProgress=Ht,W.invalidate().restart())):i&&i.totalProgress(Ht,!!(Ln&&(ot||et)))),d){if(et&&g&&(ue.style[g+E.os2]=Ot),!z)ft(Vo(he+Dt*Ht));else if(en){if(Sn=!et&&Ht>Pe&&Ft+1>Tt&&Tt+1>=rr(N,E),w)if(!et&&(Ze||Sn)){var ze=wr(d,!0),Je=Tt-Lt;$g(d,ge,ze.top+(E===Qe?Je:0)+ln,ze.left+(E===Qe?0:Je)+ln)}else $g(d,ue);Pa(Ze||Sn?We:O),V&&Ht<1&&Ze||ft(he+(Ht===1&&!Sn?Dt:0))}}v&&!ut.tween&&!Ln&&!bh&&L.restart(!0),o&&(be||A&&Ht&&(Ht<1||!ad))&&$o(o.targets).forEach(function(ri){return ri.classList[Ze||A?"add":"remove"](o.className)}),a&&!D&&!et&&a(R),en&&!Ln?(D&&(ii&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),a&&a(R)),(be||!ad)&&(c&&be&&Ta(R,c),G[Se]&&Ta(R,G[Se]),A&&(Ht===1?R.kill(!1,1):G[Se]=0),be||(Se=Ht===1?1:3,G[Se]&&Ta(R,G[Se]))),M&&!Ze&&Math.abs(R.getVelocity())>(Go(M)?M:2500)&&(Bo(R.callbackAnimation),W?W.progress(1):Bo(i,pe==="reverse"?1:!Ht,1))):D&&a&&!Ln&&a(R)}if(st){var nn=m?Tt/m.duration()*(m._caScrollDist||0):Tt;b(nn+(J._isFlipped?1:0)),st(nn)}dt&&dt(-Tt/m.duration()*(m._caScrollDist||0))}},R.enable=function(et,vt){R.enabled||(R.enabled=!0,_n(N,"resize",Ho),I||_n(N,"scroll",Aa),j&&_n(r,"refreshInit",j),et!==!1&&(R.progress=_t=0,Et=Gt=q=St()),vt!==!1&&R.refresh())},R.getTween=function(et){return et&&ut?ut.tween:W},R.setPositions=function(et,vt,nt,Tt){if(m){var Kt=m.scrollTrigger,Ht=m.duration(),Pe=Kt.end-Kt.start;et=Kt.start+Pe*et/Ht,vt=Kt.start+Pe*vt/Ht}R.refresh(!1,!1,{start:Vg(et,nt&&!!R._startClamp),end:Vg(vt,nt&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(et){if(C&&et){var vt=C.indexOf(E.d)+1;C[vt]=parseFloat(C[vt])+et+ln,C[1]=parseFloat(C[1])+et+ln,Pa(C)}},R.disable=function(et,vt){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,vt||W&&W.pause(),K=0,Nt&&(Nt.uncache=1),j&&gn(r,"refreshInit",j),L&&(L.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!I)){for(var nt=Zt.length;nt--;)if(Zt[nt].scroller===N&&Zt[nt]!==R)return;gn(N,"resize",Ho),I||gn(N,"scroll",Aa)}},R.kill=function(et,vt){R.disable(et,vt),W&&!vt&&W.kill(),l&&delete md[l];var nt=Zt.indexOf(R);nt>=0&&Zt.splice(nt,1),nt===qn&&Nh>0&&qn--,nt=0,Zt.forEach(function(Tt){return Tt.scroller===R.scroller&&(nt=1)}),nt||Yn||ns||(R.scroll.rec=0),i&&(i.scrollTrigger=null,et&&i.revert({kill:!1}),vt||i.kill()),ce&&[ce,ae,J,$t].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Jo===R&&(Jo=0),d&&(Nt&&(Nt.uncache=1),nt=0,Zt.forEach(function(Tt){return Tt.pin===d&&nt++}),nt||(Nt.spacer=0)),n.onKill&&n.onKill(R)},Zt.push(R),R.enable(!1,!1),lt&&lt(R),i&&i.add&&!ee){var rt=R.update;R.update=function(){R.update=rt,qt.cache++,Lt||Ft||R.refresh()},Ct.delayedCall(.01,R.update),ee=.01,Lt=Ft=0}else R.refresh();d&&s1()},r.register=function(n){return Ea||(Ct=n||a0(),s0()&&window.document&&r.enable(),Ea=ko),Ea},r.defaults=function(n){if(n)for(var i in n)Eh[i]=n[i];return Eh},r.disable=function(n,i){ko=0,Zt.forEach(function(a){return a[i?"kill":"disable"](n)}),gn(Jt,"wheel",Aa),gn(ve,"scroll",Aa),clearInterval(Sh),gn(ve,"touchcancel",ir),gn(ge,"touchstart",ir),wh(gn,ve,"pointerdown,touchstart,mousedown",Gg),wh(gn,ve,"pointerup,touchend,mouseup",Hg),Oh.kill(),Th(gn);for(var s=0;s<qt.length;s+=3)Ah(gn,qt[s],qt[s+1]),Ah(gn,qt[s],qt[s+2])},r.enable=function(){if(Jt=window,ve=document,xi=ve.documentElement,ge=ve.body,Ct){if($o=Ct.utils.toArray,Wo=Ct.utils.clamp,dd=Ct.core.context||ir,sd=Ct.core.suppressOverwrites||ir,vd=Jt.history.scrollRestoration||"auto",gd=Jt.pageYOffset||0,Ct.core.globals("ScrollTrigger",r),ge){ko=1,Ra=document.createElement("div"),Ra.style.height="100vh",Ra.style.position="absolute",g0(),Qb(),He.register(Ct),r.isTouch=He.isTouch,es=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fd=He.isTouch===1,_n(Jt,"wheel",Aa),xd=[Jt,ve,xi,ge],Ct.matchMedia?(r.matchMedia=function(h){var u=Ct.matchMedia(),f;for(f in h)u.add(f,h[f]);return u},Ct.addEventListener("matchMediaInit",function(){p0(),wd()}),Ct.addEventListener("matchMediaRevert",function(){return d0()}),Ct.addEventListener("matchMedia",function(){Is(0,1),Os("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return ld(),ld})):console.warn("Requires GSAP 3.11.0 or later"),ld(),_n(ve,"scroll",Aa);var n=ge.hasAttribute("style"),i=ge.style,s=i.borderTopStyle,a=Ct.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=wr(ge),Qe.m=Math.round(o.top+Qe.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Sh=setInterval(qg,250),Ct.delayedCall(.5,function(){return bh=0}),_n(ve,"touchcancel",ir),_n(ge,"touchstart",ir),wh(_n,ve,"pointerdown,touchstart,mousedown",Gg),wh(_n,ve,"pointerup,touchend,mouseup",Hg),ud=Ct.utils.checkPrefix("transform"),Uh.push(ud),Ea=Dn(),Oh=Ct.delayedCall(.2,Is).pause(),Ca=[ve,"visibilitychange",function(){var h=Jt.innerWidth,u=Jt.innerHeight;ve.hidden?(Bg=h,zg=u):(Bg!==h||zg!==u)&&Ho()},ve,"DOMContentLoaded",Is,Jt,"load",Is,Jt,"resize",Ho],Th(_n),Zt.forEach(function(h){return h.enable(0,1)}),l=0;l<qt.length;l+=3)Ah(gn,qt[l],qt[l+1]),Ah(gn,qt[l],qt[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ad=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sh)||(Sh=i)&&setInterval(qg,i),"ignoreMobileResize"in n&&(fd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Th(gn)||Th(_n,n.autoRefreshEvents||"none"),n0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Wn(n),a=qt.indexOf(s),o=Us(s);~a&&qt.splice(a,o?6:2),i&&(o?Gi.unshift(Jt,i,ge,i,xi,i):Gi.unshift(s,i))},r.clearMatchMedia=function(n){Zt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(_i(n)?Wn(n):n).getBoundingClientRect(),o=a[s?Ls:Ds]*i||0;return s?a.right-o>0&&a.left+o<Jt.innerWidth:a.bottom-o>0&&a.top+o<Jt.innerHeight},r.positionInViewport=function(n,i,s){_i(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[s?Ls:Ds],l=i==null?o/2:i in zh?zh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Jt.innerWidth:(a.top+l)/Jt.innerHeight},r.killAll=function(n){if(Zt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(s){return s()})}},r})();Yt.version="3.15.1";Yt.saveStyles=function(r){return r?$o(r).forEach(function(t){if(t&&t.style){var e=gi.indexOf(t);e>=0&&gi.splice(e,5),gi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),dd())}}):gi};Yt.revert=function(r,t){return wd(!r,t)};Yt.create=function(r,t){return new Yt(r,t)};Yt.refresh=function(r){return r?Ho(!0):(Ea||Yt.register())&&Is(!0)};Yt.update=function(r){return++qt.cache&&Ar(r===!0?2:0)};Yt.clearScrollMemory=m0;Yt.maxScroll=function(r,t){return rr(r,t?In:Qe)};Yt.getScrollFunc=function(r,t){return br(Wn(r),t?In:Qe)};Yt.getById=function(r){return md[r]};Yt.getAll=function(){return Zt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Yt.isScrolling=function(){return!!Ri};Yt.snapDirectional=Td;Yt.addEventListener=function(r,t){var e=Fs[r]||(Fs[r]=[]);~e.indexOf(t)||e.push(t)};Yt.removeEventListener=function(r,t){var e=Fs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Yt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,h){var u=[],f=[],d=Ct.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(g){u.length||d.restart(!0),u.push(g.trigger),f.push(g),s<=u.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Nn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Nn(s)&&(s=s(),_n(Yt,"refresh",function(){return s=t.batchMax()})),$o(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Yt.create(c))}),e};var Qg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},hd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===xi&&r(ge,e)},Ih={auto:1,scroll:1},h1=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Ct.core.getCache(s),o=Dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ih[(l=Ci(s)).overflowY]||Ih[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Us(s)&&(Ih[(l=Ci(s)).overflowY]||Ih[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},x0=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&h1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(ve,He.eventTypes[0],t0,!1,!0)},onDisable:function(){return gn(ve,He.eventTypes[0],t0,!0)}})},u1=/(input|label|select|textarea)/i,jg,t0=function(t){var e=u1.test(t.target.tagName);(e||jg)&&(t._gsapAllow=!0,jg=e)},f1=function(t){Ps(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Wn(t.target)||xi,h=Ct.core.globals().ScrollSmoother,u=h&&h.get(),f=es&&(t.content&&Wn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=br(c,Qe),g=br(c,In),x=1,p=(He.isTouch&&Jt.visualViewport?Jt.visualViewport.scale*Jt.visualViewport.width:Jt.outerWidth)/Jt.innerWidth,_=0,S=Nn(i)?function(){return i(o)}:function(){return i||2.8},A,v,w=x0(c,t.type,!0,s),y=function(){return v=!1},m=ir,M=ir,P=function(){l=rr(c,Qe),M=Wo(es?1:0,l),n&&(m=Wo(0,rr(c,In))),A=Ns},E=function(){f._gsap.y=Vo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(v){requestAnimationFrame(y);var Q=Vo(o.deltaY/2),H=M(d.v-Q);if(f&&H!==d.v+d.offset){d.offset=H-d.v;var R=Vo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=qt.cache,Ar()}return!0}d.offset&&E(),v=!0},N,B,I,z,G=function(){P(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ct.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return es&&F.type==="touchmove"&&D(F)||x>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){v=!1;var F=x;x=Vo((Jt.visualViewport&&Jt.visualViewport.scale||1)/p),N.pause(),F!==x&&hd(c,x>1.01?!0:n?!1:"x"),B=g(),I=d(),P(),A=Ns},t.onRelease=t.onGestureStart=function(F,Q){if(d.offset&&E(),!Q)z.restart(!0);else{qt.cache++;var H=S(),R,j;n&&(R=g(),j=R+H*.05*-F.velocityX/.227,H*=Qg(g,R,j,rr(c,In)),N.vars.scrollX=m(j)),R=d(),j=R+H*.05*-F.velocityY/.227,H*=Qg(d,R,j,rr(c,Qe)),N.vars.scrollY=M(j),N.invalidate().duration(H).play(.01),(es&&N.vars.scrollY>=l||R>=l-1)&&Ct.to({},{onUpdate:G,duration:H})}a&&a(F)},t.onWheel=function(){N._ts&&N.pause(),Dn()-_>1e3&&(A=0,_=Dn())},t.onChange=function(F,Q,H,R,j){if(Ns!==A&&P(),Q&&n&&g(m(R[2]===Q?B+(F.startX-F.x):g()+Q-R[1])),H){d.offset&&E();var xt=j[2]===H,At=xt?I+F.startY-F.y:d()+H-j[1],q=M(At);xt&&At!==q&&(I+=q-At),d(q)}(H||Q)&&Ar()},t.onEnable=function(){hd(c,n?!1:"x"),Yt.addEventListener("refresh",G),_n(Jt,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},t.onDisable=function(){hd(c,!0),gn(Jt,"resize",G),Yt.removeEventListener("refresh",G),w.kill()},t.lockAxis=t.lockAxis!==!1,o=new He(t),o.iOS=es,es&&!d()&&d(1),es&&Ct.ticker.add(ir),z=o._dc,N=Ct.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:_0(d,d(),function(){return N.pause()})},onUpdate:Ar,onComplete:z.vars.onComplete}),o};Yt.sort=function(r){if(Nn(r))return Zt.sort(r);var t=Jt.pageYOffset||0;return Yt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Jt.innerHeight}),Zt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Yt.observe=function(r){return new He(r)};Yt.normalizeScroll=function(r){if(typeof r=="undefined")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var t=r instanceof He?r:f1(r);return Xn&&Xn.target===t.target&&Xn.kill(),Us(t.target)&&(Xn=t),t};Yt.core={_getVelocityProp:Mh,_inputObserver:x0,_scrollers:qt,_proxies:Gi,bridge:{ss:function(){Ri||Os("scrollStart"),Ri=Dn()},ref:function(){return Ln}}};a0()&&Ct.registerPlugin(Yt);function v0(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ed={W:2,H:.92};function y0(r,t){let e=[],{W:n,H:i}=Ed,s=(c,h)=>(i+h)*Math.pow(Math.max(0,1-(c/(n+h*1.3))**2),1.05),a=[{s:1,e:0,d:1},{s:1,e:.085,d:.55},{s:1,e:.2,d:.38},{s:-1,e:0,d:1},{s:-1,e:.08,d:.42}];for(let c of a){let h=n+c.e*1.3,u=.011/(r*c.d);for(let f=-h;f<=h;f+=u)e.push([f,c.s*s(f,c.e)+(t()-.5)*.006,(t()-.5)*.05,1,c.e,0,0])}let o=Math.round(96*Math.sqrt(r)),l=.015/Math.sqrt(r);for(let c=0;c<o;c++){let h=c/o*Math.PI*2;for(let u=.335;u<.77;u+=l){let f=h+.06*Math.sin(u*16+c*.9);e.push([Math.cos(f)*u,Math.sin(f)*u,.02,2,u,0,0])}}return[[.43,24],[.565,30],[.69,36]].forEach(([c,h],u)=>{let f=Math.round(2*Math.PI*c/(.009/r));for(let d=0;d<f;d++){let g=d/f*Math.PI*2,x=c+.02*Math.sin(h*g+u);e.push([Math.cos(g)*x,Math.sin(g)*x,.03,2,x,0,0])}}),[.78,.8].forEach(c=>{let h=Math.round(2*Math.PI*c/(.0075/r));for(let u=0;u<h;u++){let f=u/h*Math.PI*2;e.push([Math.cos(f)*c,Math.sin(f)*c,.02,2,c,0,0])}}),[.3,.316].forEach(c=>{let h=Math.round(2*Math.PI*c/(.0075/r));for(let u=0;u<h;u++){let f=u/h*Math.PI*2;e.push([Math.cos(f)*c,Math.sin(f)*c,.04,3,c,0,0])}}),[.215,.235].forEach((c,h)=>{let u=Math.round(34*r);for(let f=0;f<u;f++){let d=1.95+f/u*(.75-h*.15);e.push([Math.cos(d)*c,Math.sin(d)*c,.05,4,0,0,0])}}),{primary:e,secondary:[]}}var is={PW:1.3,PH:1.838};function M0(r,t){let e=[],n=[],{PW:i,PH:s}=is,a=.24,o=.0125/Math.sqrt(r),l=.011/r,c={},h=(v,w,y,m,M,P,E,D=0,N=0)=>{let B=Math.hypot(m-w,M-y),I=Math.max(2,Math.round(B/P));for(let z=0;z<=I;z++){let G=z/I;v.push([w+(m-w)*G,y+(M-y)*G,N,E,D,0,0])}},u=(v,w,y,m,M=2,P=0,E={})=>{var G,F,Q,H,R;let D=w,N=w+m,B=(G=E.type)!=null?G:2,I=(F=E.z)!=null?F:0,z=(Q=E.sp)!=null?Q:o;for(;D<N-.015;){let j=(H=E.word)!=null?H:.05+t()*.2;D+j>N&&(j=N-D);for(let xt=D;xt<=D+j;xt+=z)for(let At=0;At<M;At++)v.push([xt+(t()-.5)*.002,y+(At-(M-1)/2)*z*.95,I,B,P,0,0]);D+=j+((R=E.gap)!=null?R:.034)}return N},f=(v,w,y,m,M)=>{let P=o*1.15;for(let E=v;E<=w;E+=P)for(let D=y-m/2;D<=y+m/2;D+=P)e.push([E+(t()-.5)*.006,D+(t()-.5)*.006,-.01,3,M,0,0])};h(e,-i,s,i-a,s,l,1),h(e,i-a,s,i,s-a,l,1),h(e,i,s-a,i,-s,l,1),h(e,i,-s,-i,-s,l,1),h(e,-i,-s,-i,s,l,1),h(e,i-a,s,i-a,s-a,l*1.7,1),h(e,i-a,s-a,i,s-a,l*1.7,1);let d=Math.round(150*r);for(let v=0;v<d;v++){let w=t()*6.283,y=.11*Math.sqrt(t());e.push([-.99+Math.cos(w)*y,1.56+Math.sin(w)*y,0,2,0,0,0])}u(e,-.78,1.62,.62,3),u(e,-.78,1.555,.48),u(e,-.78,1.5,.55),u(e,.42,1.6,.68,5,0,{word:.68}),u(e,.42,1.4,.26),u(e,.78,1.4,.32,2,0,{word:.045,gap:.012}),u(e,.42,1.33,.2,2,1);let g=u(e,.78,1.33,.3,2,1,{word:.045,gap:.012});u(e,.42,1.26,.22),u(e,.78,1.26,.3,2,0,{word:.045,gap:.012}),f(.38,g+.04,1.33,.085,1),c.g1=[g+.08,1.33,0],u(e,-1.1,1.3,.62),u(e,-1.1,1.24,.5),u(e,-1.1,1.18,.56),u(e,-1.1,1.12,.36),u(e,-1.1,.95,1.2,3),u(e,-1.1,.86,2.18),u(e,-1.1,.8,1.55),u(e,-1.1,.64,.5,3),u(e,.36,.64,.14,3),u(e,.6,.64,.2,3),u(e,.9,.64,.2,3),h(e,-1.1,.585,1.1,.585,l*1.2,2);for(let v=0;v<5;v++){let w=.5-v*.095;u(e,-1.1,w,.55+t()*.55),u(e,.4,w,.05,2,0,{word:.05}),u(e,.6,w,.2,2,0,{word:.045,gap:.012}),u(e,.9,w,.2,2,0,{word:.045,gap:.012})}h(e,.36,0,1.1,0,l*1.2,2),u(e,.36,-.08,.36),u(e,.9,-.08,.2,2,0,{word:.045,gap:.012}),u(e,.36,-.15,.3),u(e,.9,-.15,.2,2,0,{word:.045,gap:.012}),u(e,.36,-.27,.26,3,2);let x=u(e,.8,-.27,.3,3,2,{word:.048,gap:.012});f(.32,x+.04,-.27,.095,2),c.g2=[x+.08,-.27,0],h(e,.36,-.33,1.1,-.33,l*1.3,2),h(e,.36,-.345,1.1,-.345,l*1.3,2),u(e,-1.1,-.52,.5,3),u(e,-1.1,-.6,.86),u(e,-1.1,-.68,.22,2,3);let p=u(e,-.82,-.68,1.02,2,3,{word:.05,gap:.03});f(-1.14,p+.04,-.68,.085,3),c.g3=[p+.08,-.68,0],u(e,-1.1,-.76,.6),u(e,-1.1,-.84,.8),u(e,-1.1,-1.02,2.12),u(e,-1.1,-1.08,1.38);let _=Math.round(300*r);for(let v=0;v<_;v++){let w=v/_;e.push([-1.05+w*.72+.03*Math.sin(w*40),-1.36+.07*Math.sin(w*9.5)+.035*Math.sin(w*27),0,2,0,0,0])}h(e,-1.1,-1.47,-.3,-1.47,l*1.3,2),u(e,-1.1,-1.53,.45),[[.2,.0085],[.17,.009],[.06,.012]].forEach(([v,w])=>{let y=Math.round(2*Math.PI*v/(w/r));for(let m=0;m<y;m++){if(t()<.16)continue;let M=m/y*Math.PI*2;e.push([.74+Math.cos(M)*v,-1.36+Math.sin(M)*v,0,2,0,0,0])}});let S=Math.round(200*r);for(let v=0;v<S;v++){let w=t()*Math.PI*2,y=.1+t()*.045;t()<.35||e.push([.74+Math.cos(w)*y,-1.36+Math.sin(w)*y,0,2,0,0,0])}u(e,-1.1,-1.72,.5,1),u(e,-.3,-1.72,.5,1),u(e,.5,-1.72,.5,1);let A=.008/r;for(let v=-1.5;v<=1.5;v+=A)e.push([v,0,.06,4,0,0,0]),t()<.6&&e.push([v+A*.5,0,.06,4,0,0,0]);return[[1,.16,.12,-.6],[2,.32,.24,-1.2]].forEach(([v,w,y,m])=>{let M=l*2.2,P=-i+w,E=i+w,D=-s+y,N=s+y;h(n,P,N,E,N,M,5,v,m),h(n,E,N,E,D,M,5,v,m);for(let B=0;B<22;B++){let I=N-.25-B*.14;u(n,E-.32,I,.26*t()+.06,1,v,{type:5,z:m,sp:o*1.6})}}),{primary:e,secondary:n,anchors:c}}function S0(r,t,e){let n=[],i=[],s=e?3:1.95,a=e?1.72:1.9,o=e?[1.62,-.42]:[.62,-.78],l=e?.56:.5,c=[];for(let y=0;y<6;y++){let m=y/6*Math.PI*2+.35;c.push({x:o[0]+Math.cos(m)*l,y:o[1]+Math.sin(m)*l*.86,z:(t()-.5)*.3,r:.06+t()*.025,cl:1})}let h=e?26:17,u=0;for(;c.length-6<h&&u<8e3;){u++;let y=(t()*2-1)*s,m=(t()*2-1)*a;(y/s)**2+(m/a)**2>1||Math.hypot(y-o[0],m-o[1])<l+.42||c.some(M=>Math.hypot(M.x-y,M.y-m)<(e?.44:.4))||c.push({x:y,y:m,z:(t()-.5)*.9,r:.03+t()*.055,cl:0})}let f=(y,m)=>Math.hypot(c[y].x-c[m].x,c[y].y-c[m].y),d=[],g=new Set,x=(y,m,M)=>{let P=y<m?y+"-"+m:m+"-"+y;g.has(P)||(g.add(P),d.push({a:y,b:m,cl:M}))},p=c.map((y,m)=>m).filter(y=>!c[y].cl);p.forEach(y=>{p.filter(m=>m!==y).sort((m,M)=>f(y,m)-f(y,M)).slice(0,2).forEach(m=>x(y,m,0))});for(let y=0;y<6;y++)x(y,(y+1)%6,1);x(1,4,1),[0,3].forEach(y=>{let m=p.slice().sort((M,P)=>f(y,M)-f(y,P))[0];m!==void 0&&x(m,y,0)}),c.forEach(y=>{let m=Math.round(2*Math.PI*y.r/(.0095/Math.sqrt(r)));for(let M=0;M<m;M++){let P=M/m*Math.PI*2;n.push([y.x+Math.cos(P)*y.r,y.y+Math.sin(P)*y.r,y.z,1,0,y.cl,0])}for(let M=0;M<5;M++)n.push([y.x+(t()-.5)*.02,y.y+(t()-.5)*.02,y.z,1,0,y.cl,0])});let _=[],S=.019/Math.sqrt(r);d.forEach(y=>{let m=c[y.a],M=c[y.b],P=(m.x+M.x)/2,E=(m.y+M.y)/2,D=M.x-m.x,N=M.y-m.y,B=Math.hypot(D,N),I=-N/B,z=D/B,G=t()<.5?1:-1;y.cl&&(G=(P+I*.1-o[0])**2+(E+z*.1-o[1])**2>(P-o[0])**2+(E-o[1])**2?1:-1);let F=B*(y.cl?.2:.14)*G,Q=P+I*F,H=E+z*F,R=Math.max(6,Math.round(B*1.05/S)),j=(.18+t()*.3)*(y.cl||t()<.5?1:-1);for(let xt=1;xt<R;xt++){let At=xt/R,q=1-At,ot=q*q*m.x+2*q*At*Q+At*At*M.x,_t=q*q*m.y+2*q*At*H+At*At*M.y,St=q*m.z+At*M.z;Math.hypot(ot-m.x,_t-m.y)<m.r+.02||Math.hypot(ot-M.x,_t-M.y)<M.r+.02||n.push([ot,_t,St,2,At,y.cl,j])}if(y.cl&&Math.abs(y.b-y.a)===1||y.cl&&Math.abs(y.b-y.a)===5){let q=.25*m.x+.5*Q+.25*M.x,ot=.5*.5*m.y+2*.5*.5*H+.5*.5*M.y,_t=q-o[0],St=ot-o[1],ut=Math.hypot(_t,St)||1;_.push([q+_t/ut*.25,ot+St/ut*.17,0])}});let A=[],v=s*1.7,w=a*1.6;for(let y=0;y<150;y++){let m=(t()*2-1)*v,M=(t()*2-1)*w;A.push({x:m,y:M,z:-1.6+t()*1})}return A.forEach((y,m)=>{for(let E=0;E<4;E++)i.push([y.x+(t()-.5)*.03,y.y+(t()-.5)*.03,y.z,3,0,0,0]);let M=-1,P=1e9;if(A.forEach((E,D)=>{if(D===m)return;let N=Math.hypot(E.x-y.x,E.y-y.y);N<P&&(P=N,M=D)}),M>=0&&P<1.2){let E=A[M],D=Math.round(P/(.05/Math.sqrt(r)));for(let N=1;N<D;N++){let B=N/D;i.push([y.x+(E.x-y.x)*B,y.y+(E.y-y.y)*B,y.z+(E.z-y.z)*B,3,B,0,.15])}}}),{primary:n,secondary:i,anchors:{amounts:_,cluster:[o[0],o[1]-l-.22,0],clusterCenter:[o[0],o[1],0]}}}function Vh(r,t,e,n){let i=r.primary.slice();Ad(i,e),i.length>t&&(i.length=t);let s=r.secondary.slice();Ad(s,e);for(let a=0;i.length<t&&a<s.length;a++)i.push(s[a]);for(;i.length<t;)i.push([(e()*2-1)*n[0],(e()*2-1)*n[1],n[2]+e()*(n[3]-n[2]),0,e(),0,0]);return Ad(i,e),i}function Ad(r,t){for(let e=r.length-1;e>0;e--){let n=Math.floor(t()*(e+1)),i=r[e];r[e]=r[n],r[n]=i}return r}var b0=`
precision highp float;
uniform float uTime, uM, uOpen, uScan, uAlarm, uFade, uPx, uSize, uReduced;
uniform vec3 uHi;
uniform vec2 uLook;
uniform vec2 uView;
uniform float uRows;
uniform vec4 uTA, uTB, uTC;
uniform mat3 uRA, uRB, uRC;
uniform vec3 cPaper, cAmber, cRed, cDust;

attribute vec3 aDoc;
attribute vec3 aNet;
attribute vec4 aRnd;
attribute vec2 aEyeI;
attribute vec2 aDocI;
attribute vec4 aNetI;

varying vec3 vCol;
varying float vA;

float ease(float t) { return t * t * (3.0 - 2.0 * t); }

vec3 drift(vec3 p, float amt) {
  return p + amt * vec3(
    sin(uTime * 0.21 + aRnd.y * 6.283),
    cos(uTime * 0.17 + aRnd.z * 6.283),
    sin(uTime * 0.13 + aRnd.w * 6.283));
}

void main() {
  /* ---------------- eye ---------------- */
  vec3 e = position;
  float eT = aEyeI.x;
  float eA = 0.0, eS = 1.0;
  vec3 eC = cPaper;
  const float W = 2.0;
  const float H = 0.92;
  if (eT < 0.5) {
    e = drift(e, 0.12);
    eA = 0.2; eS = 0.75; eC = cDust;
  } else if (eT < 1.5) {
    float closedY = -0.07 * (1.0 - (e.x / 2.3) * (e.x / 2.3));
    e.y = mix(closedY, e.y, uOpen);
    eA = 0.92 - aEyeI.y * 1.8;
  } else {
    e.xy += uLook;
    float lid = uOpen * H * pow(max(0.0, 1.0 - (e.x / W) * (e.x / W)), 1.05);
    float vis = 1.0 - smoothstep(lid - 0.035, lid + 0.005, abs(e.y));
    if (eT < 2.5) {
      // iris: brighter towards the rim
      eA = vis * (0.45 + 0.5 * smoothstep(0.3, 0.8, aEyeI.y));
    } else if (eT < 3.5) {
      eA = vis * 0.95;
    } else {
      eA = vis * 0.9; eS = 1.0;
    }
  }
  vec3 pA = uRA * e * uTA.w + uTA.xyz;

  /* ---------------- document ---------------- */
  vec3 b = aDoc;
  float bT = aDocI.x;
  float g = aDocI.y;
  float bA = 0.0, bS = 1.0;
  vec3 bC = cPaper;
  float scanY = mix(1.95, -1.95, uScan);
  float hiRaw = g < 0.5 ? 0.0 : (g < 1.5 ? uHi.x : (g < 2.5 ? uHi.y : uHi.z));
  float u = (b.x + 1.3) / 2.6;
  float hi = clamp(hiRaw * 1.8 - u * 0.8, 0.0, 1.0);
  if (bT < 0.5) {
    b = drift(b, 0.1);
    bA = 0.12; bS = 0.7; bC = cDust;
  } else if (bT < 1.5) {
    bA = 0.55;
  } else if (bT < 2.5) {
    float scanned = step(scanY, b.y) * step(0.001, uScan);
    bA = 0.5 + 0.3 * scanned;
    bC = mix(cPaper, cAmber, hi * step(0.5, g));
    bA = mix(bA, 1.0, hi * step(0.5, g));
  } else if (bT < 3.5) {
    bC = cAmber; bA = 0.34 * hi; bS = 1.3;
  } else if (bT < 4.5) {
    b.y = scanY + (aRnd.y - 0.5) * 0.018;
    float on = smoothstep(0.0, 0.03, uScan) * (1.0 - smoothstep(0.97, 1.0, uScan));
    bA = 0.95 * on; bS = 1.15;
  } else {
    bA = g < 1.5 ? 0.24 : 0.13; bS = 0.85;
  }
  float near = exp(-pow((b.y - scanY) * 13.0, 2.0)) * step(1.5, bT) * step(bT, 2.5) * step(0.001, uScan) * (1.0 - step(0.999, uScan));
  bA = min(1.0, bA + near * 0.45);
  bS += near * 0.5;
  vec3 pB = uRB * b * uTB.w + uTB.xyz;

  /* ---------------- network ---------------- */
  vec3 c = aNet;
  float cT = aNetI.x;
  float tt = aNetI.y;
  float cl = aNetI.z;
  float sp = aNetI.w;
  float cA = 0.0, cS = 1.0;
  vec3 cC = cPaper;
  if (cT < 0.5) {
    c = drift(c, 0.12);
    cA = 0.12; cS = 0.7; cC = cDust;
  } else if (cT < 1.5) {
    cA = 0.9; cS = 1.1;
  } else if (cT < 2.5) {
    float t2 = sp >= 0.0 ? tt : 1.0 - tt;
    float speed = abs(sp) * (1.0 + 2.2 * uAlarm * cl);
    float ph = fract(t2 * 1.6 - uTime * speed);
    float pulse = pow(ph, 7.0);
    cA = 0.32 + 0.68 * pulse;
    cS = 0.95 + 0.9 * pulse;
  } else {
    cA = 0.16; cS = 0.75; cC = cDust;
  }
  float alarmPulse = 0.5 + 0.5 * sin(uTime * 5.0);
  cC = mix(cC, cRed, uAlarm * cl);
  cS *= 1.0 + 0.3 * uAlarm * cl * alarmPulse;
  cA = mix(cA, max(cA, 0.85), uAlarm * cl * step(0.5, cT));
  cA *= 1.0 - 0.5 * uAlarm * (1.0 - cl);
  vec3 pC = uRC * c * uTC.w + uTC.xyz;

  /* ---------------- mix ---------------- */
  vec3 p;
  float a, s;
  vec3 col;
  if (uReduced > 0.5) {
    float wA = 1.0 - smoothstep(0.35, 0.5, uM);
    float wB = smoothstep(0.5, 0.65, uM) * (1.0 - smoothstep(1.35, 1.5, uM));
    float wC = smoothstep(1.5, 1.65, uM);
    p = uM < 0.5 ? pA : (uM < 1.5 ? pB : pC);
    a = eA * wA + bA * wB + cA * wC;
    s = uM < 0.5 ? eS : (uM < 1.5 ? bS : cS);
    col = uM < 0.5 ? eC : (uM < 1.5 ? bC : cC);
  } else {
    float d = aRnd.x * 0.14;
    float tAB = clamp((uM - d) / 0.86, 0.0, 1.0);
    float tBC = clamp((uM - 1.0 - d) / 0.86, 0.0, 1.0);
    // colour / alpha weights
    float kAB = ease(tAB), kBC = ease(tBC);
    float wA = 1.0 - kAB;
    float wC = kBC;
    float wB = kAB - kBC;
    // paths: shape -> full-screen pattern -> shape
    vec3 from, to, mid;
    float t;
    if (uM <= 1.0) {
      from = pA; to = pB; t = tAB;
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
      from = pB; to = pC; t = tBC;
      // the whole screen becomes a ledger: rows of amounts in columns
      float rows2 = floor(uRows * 0.62);
      float row = floor(aRnd.z * rows2);
      float col = floor(aRnd.y * 6.0);
      float f = fract(aRnd.y * 6.0);
      float cellW = uView.x * 2.1 / 6.0;
      float len = 0.25 + 0.6 * fract(sin(row * 12.9898 + col * 78.233) * 43758.5453);
      float x0 = -uView.x * 1.05 + col * cellW;
      mid = vec3(x0 + cellW * (0.9 - len * f), mix(-0.92, 0.74, row / (rows2 - 1.0)) * uView.y, 0.0);
    }
    // travel, hold the full-screen pattern for a moment, travel on
    if (t < 0.4) {
      p = mix(from, mid, ease(t / 0.4));
    } else if (t < 0.6) {
      p = mid;
    } else {
      p = mix(mid, to, ease((t - 0.6) / 0.4));
    }
    float bell = sin(3.14159 * tAB) + sin(3.14159 * tBC);
    p.x += sin(aRnd.w * 12.57 + uTime * 0.6) * 0.05 * bell;
    a = eA * wA + bA * wB + cA * wC;
    a = max(a, 0.5 * bell);
    s = eS * wA + bS * wB + cS * wC;
    col = eC * wA + bC * wB + cC * wC;
    col = mix(col, cPaper, 0.6 * bell * (1.0 - step(0.5, uAlarm)));
  }

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * s * uPx * (12.0 / -mv.z);
  vCol = col;
  vA = a * uFade;
}
`,T0=`
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
`;ki.registerPlugin(Yt);Yt.config({ignoreMobileResize:!0});var Ua=(r,t=document)=>t.querySelector(r),Fa=(r,t=document)=>[...t.querySelectorAll(r)],Na=document.documentElement,hn=matchMedia("(prefers-reduced-motion: reduce)").matches,P0=matchMedia("(pointer: coarse)").matches;hn&&Na.classList.add("is-reduced");var _e={heroOut:.6,morph1:.7,docIn:1.9,scan:2.5,scanDur:3,docOut:6,morph2:6.2,netIn:7.4,alarm:8.3,end:10,total:10.8,ch2:1.6,ch3:6.3},un={m:0,open:hn?1:0,scan:0,h1:0,h2:0,h3:0,alarm:0,fade:1},ei={x:0,y:0,tx:0,ty:0};function I0(){let r=innerWidth,t=innerHeight;return r<760||r/t<.95?"stacked":r>=1180&&r/t>=1.2?"wide":"medium"}var Un=I0();Na.dataset.mode=Un;var d1=Ua("#gl"),ni;try{ni=new Jc({canvas:d1,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{ni=null}ni||Na.classList.add("no-gl");var tl=new On(30,innerWidth/innerHeight,.1,100);tl.position.z=12;var L0=new Ja,Gh,w0,jo,Bs={},A0=(navigator.hardwareConcurrency||8)<=4,qe={uTime:{value:0},uM:{value:0},uOpen:{value:un.open},uScan:{value:0},uHi:{value:new Z},uAlarm:{value:0},uFade:{value:1},uLook:{value:new ie},uPx:{value:1},uSize:{value:2.2},uView:{value:new ie(5,3)},uRows:{value:50},uReduced:{value:hn?1:0},uTA:{value:new we(0,0,0,1)},uTB:{value:new we(0,0,0,1)},uTC:{value:new we(0,0,0,1)},uRA:{value:new Bt},uRB:{value:new Bt},uRC:{value:new Bt},cPaper:{value:new Z(.925,.894,.824)},cAmber:{value:new Z(.941,.655,.227)},cRed:{value:new Z(.886,.333,.247)},cDust:{value:new Z(.56,.6,.7)}};function p1(){return Un==="stacked"?A0?5200:6800:A0?9e3:14e3}function D0(){let r=p1(),t=r/14e3,e=v0(7),n=Vh(y0(t,e),r,e,[8.5,5.5,-4,1.2]),i=M0(t,e),s=Vh(i,r,e,[5.5,4.2,-5,-.5]),a=S0(t,e,Un!=="stacked"),o=Vh(a,r,e,[6,4.4,-5,-.8]);Bs={doc:i.anchors,net:a.anchors};let l=new Float32Array(r*3),c=new Float32Array(r*3),h=new Float32Array(r*3),u=new Float32Array(r*4),f=new Float32Array(r*2),d=new Float32Array(r*2),g=new Float32Array(r*4);for(let p=0;p<r;p++){let _=n[p],S=s[p],A=o[p];l.set([_[0],_[1],_[2]],p*3),c.set([S[0],S[1],S[2]],p*3),h.set([A[0],A[1],A[2]],p*3),f.set([_[3],_[4]],p*2),d.set([S[3],S[4]],p*2),g.set([A[3],A[4],A[5],A[6]],p*4),u.set([e(),e(),e(),e()],p*4)}let x=new Ui;return x.setAttribute("position",new pn(l,3)),x.setAttribute("aDoc",new pn(c,3)),x.setAttribute("aNet",new pn(h,3)),x.setAttribute("aRnd",new pn(u,4)),x.setAttribute("aEyeI",new pn(f,2)),x.setAttribute("aDocI",new pn(d,2)),x.setAttribute("aNetI",new pn(g,4)),x}function m1(){ni&&(w0=new bi({uniforms:qe,vertexShader:b0,fragmentShader:T0,transparent:!0,depthWrite:!1,depthTest:!1,blending:Gr}),jo=D0(),Gh=new ja(jo,w0),Gh.frustumCulled=!1,L0.add(Gh),ni.outputColorSpace=us,ni.setClearColor(0,0))}var Ce={eye:{x:0,y:0,s:1,rx:0,ry:0},doc:{x:0,y:0,s:1,rx:0,ry:0},net:{x:0,y:0,s:1,rx:0,ry:0}},tn=innerWidth,cn=innerHeight,Hi=1,Rd=[tn/2,cn/2];function Pd(){tn=innerWidth,cn=innerHeight,tl.aspect=tn/cn,tl.updateProjectionMatrix(),Hi=24*Math.tan(15*Math.PI/180)/cn;let t=(s,a)=>[(s-tn/2)*Hi,(cn/2-a)*Hi],e=2*(Ed.W+.3),n=2*is.PH,i=2*is.PW;if(qe.uView.value.set(tn/2*Hi,cn/2*Hi),qe.uRows.value=Math.max(18,Math.round(cn/17)),Un==="stacked"){let a=cn*.5,o=(96+a)/2;Rd=[tn/2,o];let[l,c]=t(tn/2,o);Ce.eye={x:l,y:c,s:Math.min(tn*.94,(a-96)*2.2)*Hi/e,rx:0,ry:0};let h=Math.min(a-96-10,tn*.7*(n/i));Ce.doc={x:l,y:c+.02,s:h*Hi/n,rx:.05,ry:-.12};let u=Math.min(tn*.96,(a-96)*1.02);Ce.net={x:l,y:c,s:u*Hi/4,rx:0,ry:0}}else{let s=tn*.72,a=Math.min(tn*(Un==="wide"?.5:.48),cn*1);Rd=[s,cn*.47];let[o,l]=t(s,cn*.47);Ce.eye={x:o,y:l,s:a*Hi/e,rx:0,ry:0};let c=Math.min(Math.max(tn*.38,420),560),h=Un==="wide"?tn-330:tn-48,u=h-c,f=Math.min(cn*.8,u*.92*(n/i)),[d,g]=t((c+h)/2,cn*.53);Ce.doc={x:d,y:g,s:f*Hi/n,rx:.06,ry:-.2};let x=Math.min(tn-c-40,cn*.8*1.75),[p,_]=t(c+(tn-c-20)/2,cn*.52);Ce.net={x:p,y:_,s:x*Hi/6.2,rx:0,ry:0}}if(ni){let s=Math.min(devicePixelRatio||1,Un==="stacked"?1.6:1.75);ni.setPixelRatio(s),ni.setSize(tn,cn,!1),qe.uPx.value=s,qe.uSize.value=Un==="stacked"?2:2.3}N0()}var UE=new Bt;function Cd(r,t,e){let n=Math.cos(r),i=Math.sin(r),s=Math.cos(t),a=Math.sin(t);return e.set(s,a*i,a*n,0,n,-i,-a,s*i,s*n),e}function N0(){qe.uTA.value.set(Ce.eye.x,Ce.eye.y,0,Ce.eye.s),qe.uTB.value.set(Ce.doc.x,Ce.doc.y,0,Ce.doc.s),qe.uTC.value.set(Ce.net.x,Ce.net.y,0,Ce.net.s),Cd(Ce.eye.rx,Ce.eye.ry,qe.uRA.value),Cd(Ce.doc.rx,Ce.doc.ry,qe.uRB.value),Cd(Ce.net.rx,Ce.net.ry,qe.uRC.value)}var La=new Z;function Qo(r,t,e){let n=Ce[r];return La.set(t[0],t[1],t[2]).applyMatrix3(e).multiplyScalar(n.s),La.x+=n.x,La.y+=n.y,La.project(tl),[(La.x+1)*.5*tn,(1-La.y)*.5*cn]}var g1=Fa(".pin[data-g]"),U0=Fa(".side-note"),F0=Fa(".connector"),_1=Fa(".amount"),x1=Ua(".flag-tag"),Id=[];function Ld(){Id=U0.map(r=>r.firstElementChild.offsetHeight||80)}function v1(){if(!ni||!Bs.doc)return;let r=qe.uRB.value,t=qe.uRC.value,e=["g1","g2","g3"].map(s=>Qo("doc",Bs.doc[s],r));if(g1.forEach((s,a)=>{let[o,l]=e[a];s.style.transform=`translate3d(${o.toFixed(1)}px,${l.toFixed(1)}px,0)`}),Un==="wide"){let a=Math.max(Qo("doc",[is.PW,is.PH,0],r)[0],Qo("doc",[is.PW,-is.PH,0],r)[0])+46,o=-1e9;U0.forEach((l,c)=>{let h=e[c][1]-14;h<o+18&&(h=o+18),h=Math.min(h,cn-Id[c]-24),o=h+Id[c],l.style.transform=`translate3d(${a.toFixed(1)}px,${h.toFixed(1)}px,0)`;let u=F0[c],f=e[c][0]+13,d=e[c][1],g=a-6,x=h+14,p=Math.hypot(g-f,x-d),_=Math.atan2(x-d,g-f);u.style.width=`${Math.max(0,p).toFixed(1)}px`,u.style.transform=`translate3d(${f.toFixed(1)}px,${d.toFixed(1)}px,0) rotate(${_}rad)`})}_1.forEach((s,a)=>{let o=Bs.net.amounts[a];if(!o){s.style.display="none";return}let[l,c]=Qo("net",o,t);s.style.transform=`translate3d(${l.toFixed(1)}px,${c.toFixed(1)}px,0)`});let[n,i]=Qo("net",Bs.net.cluster,t);x1.style.transform=`translate3d(${n.toFixed(1)}px,${i.toFixed(1)}px,0)`}var de,O0=Ua("#story");function B0(){let r=Un==="stacked"?66:78;O0.style.height=`calc(${(_e.total*r).toFixed(0)}vh + 100vh)`}function y1(r){return _e.scan+(1.95-r)/3.9*_e.scanDur}function z0(){de&&(de.scrollTrigger.kill(),de.kill()),ki.set([".p-doc .panel-in",".p-net .panel-in",".pin .badge",".side-note .note",".connector",".notes-inline li",".amount span",".flag-tag span",".alarm"],{autoAlpha:0}),ki.set(".p-hero .panel-in",{autoAlpha:1,y:0});let r=hn?0:26;de=ki.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:O0,start:"top top",end:"bottom bottom",scrub:hn?!0:.9,onUpdate:e=>k0(e.progress*_e.total)}}),de.to(".p-hero .panel-in",{autoAlpha:0,y:-r,duration:.45},_e.heroOut),de.to(".scroll-cue",{autoAlpha:0,duration:.3},_e.heroOut-.2),de.to(un,{m:1,duration:1.6,ease:"power1.inOut"},_e.morph1),de.fromTo(".p-doc .panel-in",{autoAlpha:0,y:r},{autoAlpha:1,y:0,duration:.5},_e.docIn),de.to(un,{scan:1,duration:_e.scanDur},_e.scan),[["g1","h1"],["g2","h2"],["g3","h3"]].forEach(([e,n],i)=>{let s=y1(Bs.doc?Bs.doc[e][1]:1-i);de.to(un,{[n]:1,duration:.35},s),de.fromTo(`.pin[data-g="${i+1}"] .badge`,{autoAlpha:0,scale:hn?1:.4},{autoAlpha:1,scale:1,duration:.2},s+.1),de.fromTo(`.side-note[data-g="${i+1}"] .note`,{autoAlpha:0,x:hn?0:-12},{autoAlpha:1,x:0,duration:.3},s+.18),de.fromTo(F0[i],{autoAlpha:0},{autoAlpha:.75,duration:.25},s+.15),de.fromTo(`.notes-inline li[data-g="${i+1}"]`,{autoAlpha:0,y:hn?0:10},{autoAlpha:1,y:0,duration:.3},s+.18),i===0&&Un==="stacked"&&de.to(".p-doc .collapse",{autoAlpha:0,height:0,marginBottom:0,duration:.3},s)}),de.to([".p-doc .panel-in",".pin .badge",".side-note .note",".connector"],{autoAlpha:0,duration:.45},_e.docOut),de.to(un,{m:2,duration:1.6,ease:"power1.inOut"},_e.morph2),de.fromTo(".p-net .panel-in",{autoAlpha:0,y:r},{autoAlpha:1,y:0,duration:.5},_e.netIn),de.to(un,{alarm:1,duration:.7},_e.alarm),de.fromTo(".flag-tag span",{autoAlpha:0},{autoAlpha:1,duration:.3},_e.alarm+.35),de.fromTo(".amount span",{autoAlpha:0},{autoAlpha:1,duration:.3,stagger:.06},_e.alarm+.25),de.fromTo(".alarm",{autoAlpha:0,y:hn?0:10},{autoAlpha:1,y:0,duration:.35},_e.alarm+.45),Un==="stacked"&&de.to(".p-net .collapse",{autoAlpha:0,height:0,marginBottom:0,duration:.3},_e.alarm+.2),de.to([".p-net .panel-in",".amount span",".flag-tag span"],{autoAlpha:0,duration:.5},_e.end),de.to(un,{fade:Un==="stacked"?.14:.24,duration:.8},_e.end),de.set({},{},_e.total)}var M1=Ua(".chapter-num"),S1=Ua(".chapter-name"),b1=Fa(".progress i"),T1=["The eye","The document","The money"],E0=-1;function k0(r){[r/_e.ch2,(r-_e.ch2)/(_e.ch3-_e.ch2),(r-_e.ch3)/(_e.total-_e.ch3)].forEach((n,i)=>{b1[i].style.transform=`scaleX(${Math.min(1,Math.max(0,n)).toFixed(3)})`});let e=r<_e.ch2?0:r<_e.ch3?1:2;e!==E0&&(E0=e,M1.textContent=`${e+1} / 7`,S1.textContent=T1[e])}function w1(r){if(!de)return;let t=de.scrollTrigger,e=t.start+(t.end-t.start)*(r/de.duration());window.scrollTo({top:e,behavior:hn?"auto":"smooth"})}window.__pythiaGoto=r=>{let t=de.scrollTrigger;window.scrollTo({top:t.start+(t.end-t.start)*(r/de.duration()),behavior:"auto"})};Fa("[data-goto]").forEach(r=>{r.addEventListener("click",t=>{let e=parseFloat(r.dataset.goto);Number.isNaN(e)||(t.preventDefault(),w1(e))})});addEventListener("pointermove",r=>{if(P0)return;let[t,e]=Rd;ei.tx=Math.max(-1,Math.min(1,(r.clientX-t)/(tn*.4))),ei.ty=Math.max(-1,Math.min(1,(r.clientY-e)/(cn*.45)))},{passive:!0});function A1(){if(hn){un.open=1;return}ki.to(un,{open:1,duration:2,ease:"power3.out",delay:.35}),ki.from(".p-hero .reveal",{autoAlpha:0,y:18,duration:1,ease:"power3.out",stagger:.12,delay:.9});let r=()=>{un.m<.05&&!document.hidden&&ki.to(un,{open:.06,duration:.09,ease:"power2.in",yoyo:!0,repeat:1}),ki.delayedCall(4.5+Math.random()*4,r)};ki.delayedCall(5,r)}var Dd=performance.now(),Da=0,Hh=!0;function Nd(r){if(!Hh)return;let t=Math.min(.05,(r-Dd)/1e3);Dd=r,hn||(Da+=t),P0&&!hn&&(ei.tx=Math.sin(Da*.37)*.55,ei.ty=Math.sin(Da*.23+1)*.35);let e=hn?1:1-Math.pow(.001,t);ei.x+=(ei.tx-ei.x)*e,ei.y+=(ei.ty-ei.y)*e,qe.uTime.value=Da,qe.uM.value=un.m,qe.uOpen.value=un.open,qe.uScan.value=un.scan,qe.uHi.value.set(un.h1,un.h2,un.h3),qe.uAlarm.value=un.alarm,qe.uFade.value=un.fade,qe.uLook.value.set(hn?0:ei.x*.17,hn?0:-ei.y*.1),Ce.eye.ry=hn?0:ei.x*.12,Ce.eye.rx=hn?0:ei.y*.08,hn||(Ce.net.ry=Math.sin(Da*.12)*.16,Ce.net.rx=Math.sin(Da*.09)*.05),N0(),v1(),ni.render(L0,tl),requestAnimationFrame(Nd)}document.addEventListener("visibilitychange",()=>{document.hidden?Hh=!1:!Hh&&ni&&(Hh=!0,Dd=performance.now(),requestAnimationFrame(Nd))});var C0;addEventListener("resize",()=>{clearTimeout(C0),C0=setTimeout(()=>{let r=I0();r!==Un?(Un=r,Na.dataset.mode=Un,ni&&(jo.dispose(),jo=D0(),Gh.geometry=jo),B0(),Pd(),Ld(),z0(),Yt.refresh()):(Pd(),Ld())},150)});function R0(){m1(),B0(),Pd(),Ld(),z0(),k0(0);let r=Ua("#more"),t=()=>Na.classList.toggle("is-after",r.getBoundingClientRect().top<110);addEventListener("scroll",t,{passive:!0}),t(),A1(),ni&&requestAnimationFrame(Nd),Na.classList.add("is-ready")}document.fonts&&document.fonts.ready?document.fonts.ready.then(R0):R0();})();
