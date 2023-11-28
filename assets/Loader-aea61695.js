import{s as Jt,R as J,I as pr,r as Ae,J as nt,j as dr}from"./index-bf3374d0.js";const mr="min-width: 768px",Ye="min-width: 1280px",fn=Jt.h2`
  font-size: 24px;
  color: #000;

  @media (${mr}) {
    font-size: 32px;
  }

  @media (${Ye}) {
    font-size: 38px;
  }
`,hn=Jt.svg`
  stroke: #ffc107;
  fill: #ffc107;

  width: 24px;
  height: 24px;

  transition: 300ms;

  &:first-child {
    transform: rotateY(180deg);
  }

  @media (${Ye}) {
    width: 32px;
    height: 32px;
  }

  @media (${Ye}) {
    width: 36px;
    height: 36px;
  }
`;var vr=function(e){return{display:e?"flex":"none"}},at="#4fa94d",yr={"aria-busy":!0,role:"status"},st=globalThis&&globalThis.__assign||function(){return st=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},st.apply(this,arguments)},ot=globalThis&&globalThis.__assign||function(){return ot=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ot.apply(this,arguments)},it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},it.apply(this,arguments)},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ct.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},lt.apply(this,arguments)},ut=globalThis&&globalThis.__assign||function(){return ut=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ut.apply(this,arguments)},ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ft.apply(this,arguments)},qt={exports:{}},x={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=Symbol.for("react.element"),Ke=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),br=Symbol.for("react.server_context"),Re=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),_r=Symbol.for("react.offscreen"),er;er=Symbol.for("react.module.reference");function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xe:switch(e=e.type,e){case Te:case $e:case Pe:case Ne:case ze:return e;default:switch(e=e&&e.$$typeof,e){case br:case Ie:case Re:case Le:case De:case Ee:return e;default:return t}}case Ke:return t}}}x.ContextConsumer=Ie;x.ContextProvider=Ee;x.Element=Xe;x.ForwardRef=Re;x.Fragment=Te;x.Lazy=Le;x.Memo=De;x.Portal=Ke;x.Profiler=$e;x.StrictMode=Pe;x.Suspense=Ne;x.SuspenseList=ze;x.isAsyncMode=function(){return!1};x.isConcurrentMode=function(){return!1};x.isContextConsumer=function(e){return V(e)===Ie};x.isContextProvider=function(e){return V(e)===Ee};x.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xe};x.isForwardRef=function(e){return V(e)===Re};x.isFragment=function(e){return V(e)===Te};x.isLazy=function(e){return V(e)===Le};x.isMemo=function(e){return V(e)===De};x.isPortal=function(e){return V(e)===Ke};x.isProfiler=function(e){return V(e)===$e};x.isStrictMode=function(e){return V(e)===Pe};x.isSuspense=function(e){return V(e)===Ne};x.isSuspenseList=function(e){return V(e)===ze};x.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Te||e===$e||e===Pe||e===Ne||e===ze||e===_r||typeof e=="object"&&e!==null&&(e.$$typeof===Le||e.$$typeof===De||e.$$typeof===Ee||e.$$typeof===Ie||e.$$typeof===Re||e.$$typeof===er||e.getModuleId!==void 0)};x.typeOf=V;qt.exports=x;var tr=qt.exports;function wr(e){function t(f,l,u,d,s){for(var k=0,o=0,E=0,S=0,C,m,L=0,W=0,O,B=O=C=0,j=0,F=0,de=0,M=0,Oe=u.length,me=Oe-1,X,g="",N="",Fe="",Me="",ae;j<Oe;){if(m=u.charCodeAt(j),j===me&&o+S+E+k!==0&&(o!==0&&(m=o===47?10:47),S=E=k=0,Oe++,me++),o+S+E+k===0){if(j===me&&(0<F&&(g=g.replace(I,"")),0<g.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:g+=u.charAt(j)}m=59}switch(m){case 123:for(g=g.trim(),C=g.charCodeAt(0),O=1,M=++j;j<Oe;){switch(m=u.charCodeAt(j)){case 123:O++;break;case 125:O--;break;case 47:switch(m=u.charCodeAt(j+1)){case 42:case 47:e:{for(B=j+1;B<me;++B)switch(u.charCodeAt(B)){case 47:if(m===42&&u.charCodeAt(B-1)===42&&j+2!==B){j=B+1;break e}break;case 10:if(m===47){j=B+1;break e}}j=B}}break;case 91:m++;case 40:m++;case 34:case 39:for(;j++<me&&u.charCodeAt(j)!==m;);}if(O===0)break;j++}switch(O=u.substring(M,j),C===0&&(C=(g=g.replace(A,"").trim()).charCodeAt(0)),C){case 64:switch(0<F&&(g=g.replace(I,"")),m=g.charCodeAt(1),m){case 100:case 109:case 115:case 45:F=l;break;default:F=he}if(O=t(l,F,O,m,s+1),M=O.length,0<H&&(F=r(he,g,de),ae=h(3,O,F,l,Z,Y,M,m,s,d),g=F.join(""),ae!==void 0&&(M=(O=ae.trim()).length)===0&&(m=0,O="")),0<M)switch(m){case 115:g=g.replace(re,i);case 100:case 109:case 45:O=g+"{"+O+"}";break;case 107:g=g.replace(w,"$1 $2"),O=g+"{"+O+"}",O=G===1||G===2&&c("@"+O,3)?"@-webkit-"+O+"@"+O:"@"+O;break;default:O=g+O,d===112&&(O=(N+=O,""))}else O="";break;default:O=t(l,r(l,g,de),O,d,s+1)}Fe+=O,O=de=F=B=C=0,g="",m=u.charCodeAt(++j);break;case 125:case 59:if(g=(0<F?g.replace(I,""):g).trim(),1<(M=g.length))switch(B===0&&(C=g.charCodeAt(0),C===45||96<C&&123>C)&&(M=(g=g.replace(" ",":")).length),0<H&&(ae=h(1,g,l,f,Z,Y,N.length,d,s,d))!==void 0&&(M=(g=ae.trim()).length)===0&&(g="\0\0"),C=g.charCodeAt(0),m=g.charCodeAt(1),C){case 0:break;case 64:if(m===105||m===99){Me+=g+u.charAt(j);break}default:g.charCodeAt(M-1)!==58&&(N+=n(g,C,m,g.charCodeAt(2)))}de=F=B=C=0,g="",m=u.charCodeAt(++j)}}switch(m){case 13:case 10:o===47?o=0:1+C===0&&d!==107&&0<g.length&&(F=1,g+="\0"),0<H*ce&&h(0,g,l,f,Z,Y,N.length,d,s,d),Y=1,Z++;break;case 59:case 125:if(o+S+E+k===0){Y++;break}default:switch(Y++,X=u.charAt(j),m){case 9:case 32:if(S+k+o===0)switch(L){case 44:case 58:case 9:case 32:X="";break;default:m!==32&&(X=" ")}break;case 0:X="\\0";break;case 12:X="\\f";break;case 11:X="\\v";break;case 38:S+o+k===0&&(F=de=1,X="\f"+X);break;case 108:if(S+o+k+ee===0&&0<B)switch(j-B){case 2:L===112&&u.charCodeAt(j-3)===58&&(ee=L);case 8:W===111&&(ee=W)}break;case 58:S+o+k===0&&(B=j);break;case 44:o+E+S+k===0&&(F=1,X+="\r");break;case 34:case 39:o===0&&(S=S===m?0:S===0?m:S);break;case 91:S+o+E===0&&k++;break;case 93:S+o+E===0&&k--;break;case 41:S+o+k===0&&E--;break;case 40:if(S+o+k===0){if(C===0)switch(2*L+3*W){case 533:break;default:C=1}E++}break;case 64:o+E+S+k+B+O===0&&(O=1);break;case 42:case 47:if(!(0<S+k+E))switch(o){case 0:switch(2*m+3*u.charCodeAt(j+1)){case 235:o=47;break;case 220:M=j,o=42}break;case 42:m===47&&L===42&&M+2!==j&&(u.charCodeAt(M+2)===33&&(N+=u.substring(M,j+1)),X="",o=0)}}o===0&&(g+=X)}W=L,L=m,j++}if(M=N.length,0<M){if(F=l,0<H&&(ae=h(2,N,F,f,Z,Y,M,d,s,d),ae!==void 0&&(N=ae).length===0))return Me+N+Fe;if(N=F.join(",")+"{"+N+"}",G*ee!==0){switch(G!==2||c(N,2)||(ee=0),ee){case 111:N=N.replace($,":-moz-$1")+N;break;case 112:N=N.replace(D,"::-webkit-input-$1")+N.replace(D,"::-moz-$1")+N.replace(D,":-ms-input-$1")+N}ee=0}}return Me+N+Fe}function r(f,l,u){var d=l.trim().split(p);l=d;var s=d.length,k=f.length;switch(k){case 0:case 1:var o=0;for(f=k===0?"":f[0]+" ";o<s;++o)l[o]=a(f,l[o],u).trim();break;default:var E=o=0;for(l=[];o<s;++o)for(var S=0;S<k;++S)l[E++]=a(f[S]+" ",d[o],u).trim()}return l}function a(f,l,u){var d=l.charCodeAt(0);switch(33>d&&(d=(l=l.trim()).charCodeAt(0)),d){case 38:return l.replace(T,"$1"+f.trim());case 58:return f.trim()+l.replace(T,"$1"+f.trim());default:if(0<1*u&&0<l.indexOf("\f"))return l.replace(T,(f.charCodeAt(0)===58?"":"$1")+f.trim())}return f+l}function n(f,l,u,d){var s=f+";",k=2*l+3*u+4*d;if(k===944){f=s.indexOf(":",9)+1;var o=s.substring(f,s.length-1).trim();return o=s.substring(0,f).trim()+o+";",G===1||G===2&&c(o,1)?"-webkit-"+o+o:o}if(G===0||G===2&&!c(s,1))return s;switch(k){case 1015:return s.charCodeAt(10)===97?"-webkit-"+s+s:s;case 951:return s.charCodeAt(3)===116?"-webkit-"+s+s:s;case 963:return s.charCodeAt(5)===110?"-webkit-"+s+s:s;case 1009:if(s.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(s.charCodeAt(8)===45)return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(ie,"$1-webkit-$2")+s;break;case 932:if(s.charCodeAt(4)===45)switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(s.charCodeAt(8)!==99)break;return o=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+o+"-webkit-"+s+"-ms-flex-pack"+o+s;case 1005:return b.test(s)?s.replace(z,":-webkit-")+s.replace(z,":-moz-")+s:s;case 1e3:switch(o=s.substring(13).trim(),l=o.indexOf("-")+1,o.charCodeAt(0)+o.charCodeAt(l)){case 226:o=s.replace(R,"tb");break;case 232:o=s.replace(R,"tb-rl");break;case 220:o=s.replace(R,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+o+s;case 1017:if(s.indexOf("sticky",9)===-1)break;case 975:switch(l=(s=f).length-10,o=(s.charCodeAt(l)===33?s.substring(0,l):s).substring(f.indexOf(":",7)+1).trim(),k=o.charCodeAt(0)+(o.charCodeAt(7)|0)){case 203:if(111>o.charCodeAt(8))break;case 115:s=s.replace(o,"-webkit-"+o)+";"+s;break;case 207:case 102:s=s.replace(o,"-webkit-"+(102<k?"inline-":"")+"box")+";"+s.replace(o,"-webkit-"+o)+";"+s.replace(o,"-ms-"+o+"box")+";"+s}return s+";";case 938:if(s.charCodeAt(5)===45)switch(s.charCodeAt(6)){case 105:return o=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+o+"-ms-flex-"+o+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(U,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(U,"")+s}break;case 973:case 989:if(s.charCodeAt(3)!==45||s.charCodeAt(4)===122)break;case 931:case 953:if(ne.test(f)===!0)return(o=f.substring(f.indexOf(":")+1)).charCodeAt(0)===115?n(f.replace("stretch","fill-available"),l,u,d).replace(":fill-available",":stretch"):s.replace(o,"-webkit-"+o)+s.replace(o,"-moz-"+o.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(s.charCodeAt(5)===102?"-ms-"+s:"")+s,u+d===211&&s.charCodeAt(13)===105&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+s}return s}function c(f,l){var u=f.indexOf(l===1?":":"{"),d=f.substring(0,l!==3?u:10);return u=f.substring(u+1,f.length-1),ge(l!==2?d:d.replace(q,"$1"),u,l)}function i(f,l){var u=n(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return u!==l+";"?u.replace(oe," or ($1)").substring(4):"("+l+")"}function h(f,l,u,d,s,k,o,E,S,C){for(var m=0,L=l,W;m<H;++m)switch(W=Q[m].call(P,f,L,u,d,s,k,o,E,S,C)){case void 0:case!1:case!0:case null:break;default:L=W}if(L!==l)return L}function y(f){switch(f){case void 0:case null:H=Q.length=0;break;default:if(typeof f=="function")Q[H++]=f;else if(typeof f=="object")for(var l=0,u=f.length;l<u;++l)y(f[l]);else ce=!!f|0}return y}function v(f){return f=f.prefix,f!==void 0&&(ge=null,f?typeof f!="function"?G=1:(G=2,ge=f):G=0),v}function P(f,l){var u=f;if(33>u.charCodeAt(0)&&(u=u.trim()),pe=u,u=[pe],0<H){var d=h(-1,l,u,u,Z,Y,0,0,0,0);d!==void 0&&typeof d=="string"&&(l=d)}var s=t(he,u,l,0,0);return 0<H&&(d=h(-2,s,u,u,Z,Y,s.length,0,0,0),d!==void 0&&(s=d)),pe="",ee=0,Y=Z=1,s}var A=/^\0+/g,I=/[\0\r\f]/g,z=/: */g,b=/zoo|gra/,_=/([,: ])(transform)/g,p=/,\r+?/g,T=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,$=/:(read-only)/g,R=/[svh]\w+-[tblr]{2}/,re=/\(\s*(.*)\s*\)/g,oe=/([\s\S]*?);/g,U=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ne=/stretch|:\s*\w+\-(?:conte|avail)/,ie=/([^-])(image-set\()/,Y=1,Z=1,ee=0,G=1,he=[],Q=[],H=0,ge=null,ce=0,pe="";return P.use=y,P.set=v,e!==void 0&&v(e),P}var Or={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var ht=function(e,t){for(var r=[e[0]],a=0,n=t.length;a<n;a+=1)r.push(t[a],e[a+1]);return r},Ue=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!tr.typeOf(e)},Ce=Object.freeze([]),se=Object.freeze({});function be(e){return typeof e=="function"}function gt(e){return e.displayName||e.name||"Component"}function Je(e){return e&&typeof e.styledComponentId=="string"}var ue=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",qe=typeof window<"u"&&"HTMLElement"in window,kr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function _e(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var Sr=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var a=0,n=0;n<r;n++)a+=this.groupSizes[n];return a},t.insertRules=function(r,a){if(r>=this.groupSizes.length){for(var n=this.groupSizes,c=n.length,i=c;r>=i;)(i<<=1)<0&&_e(16,""+r);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var h=c;h<i;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(r+1),v=0,P=a.length;v<P;v++)this.tag.insertRule(y,a[v])&&(this.groupSizes[r]++,y++)},t.clearGroup=function(r){if(r<this.length){var a=this.groupSizes[r],n=this.indexOfGroup(r),c=n+a;this.groupSizes[r]=0;for(var i=n;i<c;i++)this.tag.deleteRule(n)}},t.getGroup=function(r){var a="";if(r>=this.length||this.groupSizes[r]===0)return a;for(var n=this.groupSizes[r],c=this.indexOfGroup(r),i=c+n,h=c;h<i;h++)a+=this.tag.getRule(h)+`/*!sc*/
`;return a},e}(),je=new Map,xe=new Map,ve=1,ke=function(e){if(je.has(e))return je.get(e);for(;xe.has(ve);)ve++;var t=ve++;return je.set(e,t),xe.set(t,e),t},jr=function(e){return xe.get(e)},Ar=function(e,t){t>=ve&&(ve=t+1),je.set(e,t),xe.set(t,e)},Cr="style["+ue+'][data-styled-version="5.3.11"]',xr=new RegExp("^"+ue+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Tr=function(e,t,r){for(var a,n=r.split(","),c=0,i=n.length;c<i;c++)(a=n[c])&&e.registerName(t,a)},Pr=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),a=[],n=0,c=r.length;n<c;n++){var i=r[n].trim();if(i){var h=i.match(xr);if(h){var y=0|parseInt(h[1],10),v=h[2];y!==0&&(Ar(v,y),Tr(e,v,h[3]),e.getTag().insertRules(y,a)),a.length=0}else a.push(i)}}},$r=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},rr=function(e){var t=document.head,r=e||t,a=document.createElement("style"),n=function(h){for(var y=h.childNodes,v=y.length;v>=0;v--){var P=y[v];if(P&&P.nodeType===1&&P.hasAttribute(ue))return P}}(r),c=n!==void 0?n.nextSibling:null;a.setAttribute(ue,"active"),a.setAttribute("data-styled-version","5.3.11");var i=$r();return i&&a.setAttribute("nonce",i),r.insertBefore(a,c),a},Er=function(){function e(r){var a=this.element=rr(r);a.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var c=document.styleSheets,i=0,h=c.length;i<h;i++){var y=c[i];if(y.ownerNode===n)return y}_e(17)}(a),this.length=0}var t=e.prototype;return t.insertRule=function(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var a=this.sheet.cssRules[r];return a!==void 0&&typeof a.cssText=="string"?a.cssText:""},e}(),Ir=function(){function e(r){var a=this.element=rr(r);this.nodes=a.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,a){if(r<=this.length&&r>=0){var n=document.createTextNode(a),c=this.nodes[r];return this.element.insertBefore(n,c||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Rr=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,a){return r<=this.length&&(this.rules.splice(r,0,a),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),pt=qe,Nr={isServer:!qe,useCSSOMInjection:!kr},nr=function(){function e(r,a,n){r===void 0&&(r=se),a===void 0&&(a={}),this.options=te({},Nr,{},r),this.gs=a,this.names=new Map(n),this.server=!!r.isServer,!this.server&&qe&&pt&&(pt=!1,function(c){for(var i=document.querySelectorAll(Cr),h=0,y=i.length;h<y;h++){var v=i[h];v&&v.getAttribute(ue)!=="active"&&(Pr(c,v),v.parentNode&&v.parentNode.removeChild(v))}}(this))}e.registerId=function(r){return ke(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,a){return a===void 0&&(a=!0),new e(te({},this.options,{},r),this.gs,a&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(a=this.options).isServer,c=a.useCSSOMInjection,i=a.target,r=n?new Rr(i):c?new Er(i):new Ir(i),new Sr(r)));var r,a,n,c,i},t.hasNameForId=function(r,a){return this.names.has(r)&&this.names.get(r).has(a)},t.registerName=function(r,a){if(ke(r),this.names.has(r))this.names.get(r).add(a);else{var n=new Set;n.add(a),this.names.set(r,n)}},t.insertRules=function(r,a,n){this.registerName(r,a),this.getTag().insertRules(ke(r),n)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(ke(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var a=r.getTag(),n=a.length,c="",i=0;i<n;i++){var h=jr(i);if(h!==void 0){var y=r.names.get(h),v=a.getGroup(i);if(y&&v&&y.size){var P=ue+".g"+i+'[id="'+h+'"]',A="";y!==void 0&&y.forEach(function(I){I.length>0&&(A+=I+",")}),c+=""+v+P+'{content:"'+A+`"}/*!sc*/
`}}}return c}(this)},e}(),zr=/(a)(d)/gi,dt=function(e){return String.fromCharCode(e+(e>25?39:97))};function He(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=dt(t%52)+r;return(dt(t%52)+r).replace(zr,"$1-$2")}var le=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ar=function(e){return le(5381,e)};function Dr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(be(r)&&!Je(r))return!1}return!0}var Lr=ar("5.3.11"),Fr=function(){function e(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&Dr(t),this.componentId=r,this.baseHash=le(Lr,r),this.baseStyle=a,nr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,a){var n=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(t,r,a)),this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(n,this.staticRulesId))c.push(this.staticRulesId);else{var i=fe(this.rules,t,r,a).join(""),h=He(le(this.baseHash,i)>>>0);if(!r.hasNameForId(n,h)){var y=a(i,"."+h,void 0,n);r.insertRules(n,h,y)}c.push(h),this.staticRulesId=h}else{for(var v=this.rules.length,P=le(this.baseHash,a.hash),A="",I=0;I<v;I++){var z=this.rules[I];if(typeof z=="string")A+=z;else if(z){var b=fe(z,t,r,a),_=Array.isArray(b)?b.join(""):b;P=le(P,_+I),A+=_}}if(A){var p=He(P>>>0);if(!r.hasNameForId(n,p)){var T=a(A,"."+p,void 0,n);r.insertRules(n,p,T)}c.push(p)}}return c.join(" ")},e}(),Mr=/^\s*\/\/.*$/gm,Br=[":","[",".","#"];function Gr(e){var t,r,a,n,c=e===void 0?se:e,i=c.options,h=i===void 0?se:i,y=c.plugins,v=y===void 0?Ce:y,P=new wr(h),A=[],I=function(_){function p(T){if(T)try{_(T+"}")}catch{}}return function(T,w,D,$,R,re,oe,U,q,ne){switch(T){case 1:if(q===0&&w.charCodeAt(0)===64)return _(w+";"),"";break;case 2:if(U===0)return w+"/*|*/";break;case 3:switch(U){case 102:case 112:return _(D[0]+w),"";default:return w+(ne===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(p)}}}(function(_){A.push(_)}),z=function(_,p,T){return p===0&&Br.indexOf(T[r.length])!==-1||T.match(n)?_:"."+t};function b(_,p,T,w){w===void 0&&(w="&");var D=_.replace(Mr,""),$=p&&T?T+" "+p+" { "+D+" }":D;return t=w,r=p,a=new RegExp("\\"+r+"\\b","g"),n=new RegExp("(\\"+r+"\\b){2,}"),P(T||!p?"":p,$)}return P.use([].concat(v,[function(_,p,T){_===2&&T.length&&T[0].lastIndexOf(r)>0&&(T[0]=T[0].replace(a,z))},I,function(_){if(_===-2){var p=A;return A=[],p}}])),b.hash=v.length?v.reduce(function(_,p){return p.name||_e(15),le(_,p.name)},5381).toString():"",b}var sr=J.createContext();sr.Consumer;var or=J.createContext(),Wr=(or.Consumer,new nr),Ve=Gr();function Yr(){return Ae.useContext(sr)||Wr}function Ur(){return Ae.useContext(or)||Ve}var ir=function(){function e(t,r){var a=this;this.inject=function(n,c){c===void 0&&(c=Ve);var i=a.name+c.hash;n.hasNameForId(a.id,i)||n.insertRules(a.id,i,c(a.rules,i,"@keyframes"))},this.toString=function(){return _e(12,String(a.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=Ve),this.name+t.hash},e}(),Hr=/([A-Z])/,Vr=/([A-Z])/g,Zr=/^ms-/,Qr=function(e){return"-"+e.toLowerCase()};function mt(e){return Hr.test(e)?e.replace(Vr,Qr).replace(Zr,"-ms-"):e}var vt=function(e){return e==null||e===!1||e===""};function fe(e,t,r,a){if(Array.isArray(e)){for(var n,c=[],i=0,h=e.length;i<h;i+=1)(n=fe(e[i],t,r,a))!==""&&(Array.isArray(n)?c.push.apply(c,n):c.push(n));return c}if(vt(e))return"";if(Je(e))return"."+e.styledComponentId;if(be(e)){if(typeof(v=e)!="function"||v.prototype&&v.prototype.isReactComponent||!t)return e;var y=e(t);return fe(y,t,r,a)}var v;return e instanceof ir?r?(e.inject(r,a),e.getName(a)):e:Ue(e)?function P(A,I){var z,b,_=[];for(var p in A)A.hasOwnProperty(p)&&!vt(A[p])&&(Array.isArray(A[p])&&A[p].isCss||be(A[p])?_.push(mt(p)+":",A[p],";"):Ue(A[p])?_.push.apply(_,P(A[p],p)):_.push(mt(p)+": "+(z=p,(b=A[p])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||z in Or||z.startsWith("--")?String(b).trim():b+"px")+";"));return I?[I+" {"].concat(_,["}"]):_}(e):e.toString()}var yt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function cr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return be(e)||Ue(e)?yt(fe(ht(Ce,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:yt(fe(ht(e,r)))}var Xr=function(e,t,r){return r===void 0&&(r=se),e.theme!==r.theme&&e.theme||t||r.theme},Kr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jr=/(^-|-$)/g;function Be(e){return e.replace(Kr,"-").replace(Jr,"")}var lr=function(e){return He(ar(e)>>>0)};function Se(e){return typeof e=="string"&&!0}var Ze=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},qr=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function en(e,t,r){var a=e[r];Ze(t)&&Ze(a)?ur(a,t):e[r]=t}function ur(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(var n=0,c=r;n<c.length;n++){var i=c[n];if(Ze(i))for(var h in i)qr(h)&&en(e,i[h],h)}return e}var fr=J.createContext();fr.Consumer;var Ge={};function hr(e,t,r){var a=Je(e),n=!Se(e),c=t.attrs,i=c===void 0?Ce:c,h=t.componentId,y=h===void 0?function(w,D){var $=typeof w!="string"?"sc":Be(w);Ge[$]=(Ge[$]||0)+1;var R=$+"-"+lr("5.3.11"+$+Ge[$]);return D?D+"-"+R:R}(t.displayName,t.parentComponentId):h,v=t.displayName,P=v===void 0?function(w){return Se(w)?"styled."+w:"Styled("+gt(w)+")"}(e):v,A=t.displayName&&t.componentId?Be(t.displayName)+"-"+t.componentId:t.componentId||y,I=a&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,z=t.shouldForwardProp;a&&e.shouldForwardProp&&(z=t.shouldForwardProp?function(w,D,$){return e.shouldForwardProp(w,D,$)&&t.shouldForwardProp(w,D,$)}:e.shouldForwardProp);var b,_=new Fr(r,A,a?e.componentStyle:void 0),p=_.isStatic&&i.length===0,T=function(w,D){return function($,R,re,oe){var U=$.attrs,q=$.componentStyle,ne=$.defaultProps,ie=$.foldedComponentIds,Y=$.shouldForwardProp,Z=$.styledComponentId,ee=$.target,G=function(d,s,k){d===void 0&&(d=se);var o=te({},s,{theme:d}),E={};return k.forEach(function(S){var C,m,L,W=S;for(C in be(W)&&(W=W(o)),W)o[C]=E[C]=C==="className"?(m=E[C],L=W[C],m&&L?m+" "+L:m||L):W[C]}),[o,E]}(Xr(R,Ae.useContext(fr),ne)||se,R,U),he=G[0],Q=G[1],H=function(d,s,k,o){var E=Yr(),S=Ur(),C=s?d.generateAndInjectStyles(se,E,S):d.generateAndInjectStyles(k,E,S);return C}(q,oe,he),ge=re,ce=Q.$as||R.$as||Q.as||R.as||ee,pe=Se(ce),f=Q!==R?te({},R,{},Q):R,l={};for(var u in f)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?l.as=f[u]:(Y?Y(u,nt,ce):!pe||nt(u))&&(l[u]=f[u]));return R.style&&Q.style!==R.style&&(l.style=te({},R.style,{},Q.style)),l.className=Array.prototype.concat(ie,Z,H!==Z?H:null,R.className,Q.className).filter(Boolean).join(" "),l.ref=ge,Ae.createElement(ce,l)}(b,w,D,p)};return T.displayName=P,(b=J.forwardRef(T)).attrs=I,b.componentStyle=_,b.displayName=P,b.shouldForwardProp=z,b.foldedComponentIds=a?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ce,b.styledComponentId=A,b.target=a?e.target:e,b.withComponent=function(w){var D=t.componentId,$=function(re,oe){if(re==null)return{};var U,q,ne={},ie=Object.keys(re);for(q=0;q<ie.length;q++)U=ie[q],oe.indexOf(U)>=0||(ne[U]=re[U]);return ne}(t,["componentId"]),R=D&&D+"-"+(Se(w)?w:Be(gt(w)));return hr(w,te({},$,{attrs:I,componentId:R}),r)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=a?ur({},e.defaultProps,w):w}}),Object.defineProperty(b,"toString",{value:function(){return"."+b.styledComponentId}}),n&&pr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var Qe=function(e){return function t(r,a,n){if(n===void 0&&(n=se),!tr.isValidElementType(a))return _e(1,String(a));var c=function(){return r(a,n,cr.apply(void 0,arguments))};return c.withConfig=function(i){return t(r,a,te({},n,{},i))},c.attrs=function(i){return t(r,a,te({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},c}(hr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Qe[e]=Qe(e)});function et(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var n=cr.apply(void 0,[e].concat(r)).join(""),c=lr(n);return new ir(c,n)}const we=Qe;var gr=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},K=242.776657104492,tn=1.6,rn=et(bt||(bt=gr([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),K*.14,K,K*.11,K*.35,K,K*.35,K*.01,K,K*.99);we.path(_t||(_t=gr([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),K*.01,K,rn,tn);var bt,_t,wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},wt.apply(this,arguments)},Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ot.apply(this,arguments)},ye=globalThis&&globalThis.__assign||function(){return ye=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ye.apply(this,arguments)},We=20,nn=function(e){return["M"+e+" 0c0-9.94-8.06",e,e,e].join("-")},an=function(e,t,r){var a=Math.max(e,t),n=-r-a/2+1,c=r*2+a;return[n,n,c,c].join(" ")},sn=function(e){var t=e.height,r=t===void 0?80:t,a=e.width,n=a===void 0?80:a,c=e.color,i=c===void 0?at:c,h=e.secondaryColor,y=h===void 0?at:h,v=e.ariaLabel,P=v===void 0?"oval-loading":v,A=e.wrapperStyle,I=e.wrapperClass,z=e.visible,b=z===void 0?!0:z,_=e.strokeWidth,p=_===void 0?2:_,T=e.strokeWidthSecondary;return J.createElement("div",ye({style:ye(ye({},vr(b)),A),className:I,"data-testid":"oval-loading","aria-label":P},yr),J.createElement("svg",{width:n,height:r,viewBox:an(Number(p),Number(T||p),We),xmlns:"http://www.w3.org/2000/svg",stroke:i,"data-testid":"oval-svg"},J.createElement("g",{fill:"none",fillRule:"evenodd"},J.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(T||p),"data-testid":"oval-secondary-group"},J.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:We,stroke:y,strokeWidth:p}),J.createElement("path",{d:nn(We)},J.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))))},kt=globalThis&&globalThis.__assign||function(){return kt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},kt.apply(this,arguments)},St=globalThis&&globalThis.__assign||function(){return St=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},St.apply(this,arguments)},jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},jt.apply(this,arguments)},At=globalThis&&globalThis.__assign||function(){return At=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},At.apply(this,arguments)},on=function(t,r){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[t]<"u")return a[t];if(t&&t.indexOf(".")>0){for(var n=t.split("."),c=n.length,i=a[n[0]],h=1;i!=null&&h<c;)i=i[n[h]],h+=1;if(typeof i<"u")return i}return r}},tt=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ct=globalThis&&globalThis.__assign||function(){return Ct=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ct.apply(this,arguments)},cn=et(xt||(xt=tt([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));we.svg(Tt||(Tt=tt([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),cn,on("speed","0.75"));we.polyline(Pt||(Pt=tt([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var xt,Tt,Pt,$t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$t.apply(this,arguments)},Et=globalThis&&globalThis.__assign||function(){return Et=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Et.apply(this,arguments)},It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},It.apply(this,arguments)},rt=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Rt.apply(this,arguments)},ln=et(Nt||(Nt=rt([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));we.polygon(zt||(zt=rt([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),ln);we.svg(Dt||(Dt=rt([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Nt,zt,Dt,Lt=globalThis&&globalThis.__assign||function(){return Lt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Lt.apply(this,arguments)},Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ft.apply(this,arguments)},Mt=globalThis&&globalThis.__assign||function(){return Mt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Mt.apply(this,arguments)},Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Bt.apply(this,arguments)},Gt=globalThis&&globalThis.__assign||function(){return Gt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Gt.apply(this,arguments)},Wt=globalThis&&globalThis.__assign||function(){return Wt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Wt.apply(this,arguments)},Yt=globalThis&&globalThis.__assign||function(){return Yt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Yt.apply(this,arguments)},Ut=globalThis&&globalThis.__assign||function(){return Ut=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ut.apply(this,arguments)},Ht=globalThis&&globalThis.__assign||function(){return Ht=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ht.apply(this,arguments)},Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Vt.apply(this,arguments)},Zt=globalThis&&globalThis.__assign||function(){return Zt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Zt.apply(this,arguments)},Qt=globalThis&&globalThis.__assign||function(){return Qt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Qt.apply(this,arguments)},Xt=globalThis&&globalThis.__assign||function(){return Xt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Xt.apply(this,arguments)},Kt=globalThis&&globalThis.__assign||function(){return Kt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Kt.apply(this,arguments)};const gn=()=>dr.jsx(sn,{height:80,width:80,color:"#54adff",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#cce4fb",strokeWidth:8,strokeWidthSecondary:6});export{gn as L,fn as N,hn as a};
