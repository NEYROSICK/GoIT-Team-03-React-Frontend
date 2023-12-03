import{s,g as Rn,_ as N,c as H,d as Ve,e as Je,r as u,R as Ln,f as Ie,j as r,h as C,i as xn,k as Me,l as mn,m as Bn,n as Pe,o as Un,p as $n,q as Wn,b as Kn,t as j,L as Nn,v as Hn,w as Yn,C as qn}from"./index-c7579de4.js";import{F as Gn,a as Xn,c as Vn,b as ue,d as Jn,e as Qn}from"./index.esm-2ab63cc7.js";import{L as Zn}from"./Loader-f731eb83.js";s.div`
  margin-bottom: 32px;
  position: relative;
  img {
    width: 140px;
    height: 135px;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 20%;
    max-width: 100%;
  }
`;s.div`
  
`;s.div`
  position: relative;
`;s.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;const et=s(Gn)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media screen and (min-width: 768px) {
  flex-direction:row-reverse;
  @media screen and (max-width: 1280px) {
  gap: 70px;
  }
  }
  @media screen and (min-width: 1280px) {
  flex-direction: column;
  }
`,nt=s.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  @media screen and (min-width: 768px) {
  gap: 15px 0px;
  }
`,tt=s.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  color:var(--clr-primary);
  @media screen and (min-width: 768px) {
  width: 354px;
  gap: 10px;
  }
`,J=s.li`
  display: flex;
  flex-direction:column;
  width: 100%;
`,Q=s.div`
  display:flex; 
  justify-content: space-between;
  
`,Z=s.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.56px;
  margin: auto;
  margin-top:10px;
  color: var(--clr-brand-red);
  &UserFormInput{
  border-color: var(--clr-brand-red);
  }
`,ee=s.label`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
  font-size: 18px;
  letter-spacing: 0.72px;
  }
`,ne=s(Xn)`
  outline: 0;
  background: none;

  flex: 1 1 auto;

  max-width: 190px;
  height: 28px;
  padding: 4px 12px;
  background: var(--clr-brand-blue);
  background: none;

  border: 1px solid var(--clr-brand-blue);
  border-radius: 40px;

  font-size: 12px;
  letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
  max-width: 255px;
  font-size:16px;
  letter-spacing: 0.64px;
  }
`,rt=s.button`
  gap: 0px 11px;
  align-items: center;
  display: flex;
  background-color:transparent;
  cursor: pointer;
  border: none;
  font-size: 18px;
  width: 121px;
  border: 1px solid var(--clr-brand-blue);
  border-radius:40px;
  padding: 4px 10px;
  @media screen and (min-width: 768px) {
  justify-content:flex-end;
  
  }
    transition: all 300ms;

  &:hover{
    background-color:var(--clr-brand-blue);
    color: var(--clr-bcg);
    p{
      color: var(--clr-bcg);
    }
    svg{
          stroke: var(--clr-bcg);
    }
  }

`,it=s.button`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 6px 107px;
  box-sizing:border-box;
  margin: auto;

  border-radius: 40px;
  border: 1px solid var(--clr-primary-inv);
  color: var(--clr-primary-inv);
  background-color:var(--clr-brand-blue);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;

  transition: all 300ms ;

  cursor: pointer;
  @media screen and (min-width: 768px) {
      font-size: 16px;
    max-width: 255px;
    margin-right:  0px;
    margin-left:auto;
    padding: 5px 108px;
  }
  &:hover{
    background-color:transparent;
    color: var(--clr-brand-blue);
    border: 1px solid var(--clr-brand-blue);
    border-radius:40px;
  }
`,ot=s.p`
  color: var(--clr-brand-blue);

  font-size: 16px;
  font-style: normal;
  letter-spacing: 0.64px;
  transition:color 300ms;
`,at=s.svg`
  width: 24px;
  height: 24px;
  stroke: #54adff;
  fill: none;
  transition: stroke 300ms; 
`,st=s.svg`
  stroke: var(--clr-bcg-user);
  fill: none;
  width: 24px;
  height: 24px;
  transition: stroke 300ms;
`,lt=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,ct=s.div`
    background-color:var(--clr-bcg-user);
    border-radius:20px;
    padding: 70px  12px 60px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:5;
    @media screen and (min-width: 768px) {
    padding: 108px  155px 109px;
    width: 608px;
  }
`,pt=s.h3`
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;
margin-bottom:44px;

  @media screen and (min-width: 768px) {
  font-size: 36px;
  letter-spacing: 1.44px;
  margin-bottom:48px;
  }
`,dt=s.button`
  position:absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color:transparent;
  @media screen and (min-width: 768px) {
  top: 24px;
  right: 24px;
  }
  transition: transform 300ms  ;
  &:hover{
    transform: scale(1.2);
  }
`,ut=s.div`
  display: flex;
  flex-direction:column;
  gap:8px 0px ;
  @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:center;
    gap: 0px  17px;
  }
`,ft=s.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;


  background-color:transparent;
  color:var(--clr-brand-blue);
  border:   2px solid var(--clr-brand-blue);
  border-radius: 40px;
  padding: 8px 20px;
  transition:all 300ms;
  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  }
  &:hover{
    background-color:var(--clr-brand-blue);
    color:var(--clr-bcg);

  }
`,xt=s.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  display: flex;
  justify-content: center;
  align-items:center;
  gap:0px 8px;


  background-color:var(--clr-brand-blue);
  color:var(--clr-primary-inv);
  border: none;
  border-radius: 40px;
  padding: 8px 20px;

  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  } 
  transition: all 300ms;

  &:hover{
    background-color: transparent;
    color:var(--clr-brand-blue);
    border: 2px solid var(--clr-brand-blue);
    svg{
    stroke:var(--clr-brand-blue);
    }
  }
`;var gn={exports:{}},mt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gt=mt,ht=gt;function hn(){}function bn(){}bn.resetWarningCache=hn;var bt=function(){function e(i,o,l,d,c,g){if(g!==ht){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:bn,resetWarningCache:hn};return t.PropTypes=t,t};gn.exports=bt();var yt=gn.exports;const x=Rn(yt);var vt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function re(e,n){var t=wt(e);if(typeof t.path!="string"){var i=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof n=="string"?n:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function wt(e){var n=e.name,t=n&&n.lastIndexOf(".")!==-1;if(t&&!e.type){var i=n.split(".").pop().toLowerCase(),o=vt.get(i);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var jt=[".DS_Store","Thumbs.db"];function Dt(e){return N(this,void 0,void 0,function(){return H(this,function(n){return me(e)&&kt(e.dataTransfer)?[2,Ct(e.dataTransfer,e.type)]:Et(e)?[2,Ft(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,At(e)]:[2,[]]})})}function kt(e){return me(e)}function Et(e){return me(e)&&me(e.target)}function me(e){return typeof e=="object"&&e!==null}function Ft(e){return Oe(e.target.files).map(function(n){return re(n)})}function At(e){return N(this,void 0,void 0,function(){var n;return H(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(i){return i.getFile()}))];case 1:return n=t.sent(),[2,n.map(function(i){return re(i)})]}})})}function Ct(e,n){return N(this,void 0,void 0,function(){var t,i;return H(this,function(o){switch(o.label){case 0:return e.items?(t=Oe(e.items).filter(function(l){return l.kind==="file"}),n!=="drop"?[2,t]:[4,Promise.all(t.map(Pt))]):[3,2];case 1:return i=o.sent(),[2,Qe(yn(i))];case 2:return[2,Qe(Oe(e.files).map(function(l){return re(l)}))]}})})}function Qe(e){return e.filter(function(n){return jt.indexOf(n.name)===-1})}function Oe(e){if(e===null)return[];for(var n=[],t=0;t<e.length;t++){var i=e[t];n.push(i)}return n}function Pt(e){if(typeof e.webkitGetAsEntry!="function")return Ze(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?vn(n):Ze(e)}function yn(e){return e.reduce(function(n,t){return Ve(Ve([],Je(n),!1),Je(Array.isArray(t)?yn(t):[t]),!1)},[])}function Ze(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=re(n);return Promise.resolve(t)}function Ot(e){return N(this,void 0,void 0,function(){return H(this,function(n){return[2,e.isDirectory?vn(e):St(e)]})})}function vn(e){var n=e.createReader();return new Promise(function(t,i){var o=[];function l(){var d=this;n.readEntries(function(c){return N(d,void 0,void 0,function(){var g,v,F;return H(this,function(y){switch(y.label){case 0:if(c.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=y.sent(),t(g),[3,4];case 3:return v=y.sent(),i(v),[3,4];case 4:return[3,6];case 5:F=Promise.all(c.map(Ot)),o.push(F),l(),y.label=6;case 6:return[2]}})})},function(c){i(c)})}l()})}function St(e){return N(this,void 0,void 0,function(){return H(this,function(n){return[2,new Promise(function(t,i){e.file(function(o){var l=re(o,e.fullPath);t(l)},function(o){i(o)})})]})})}var zt=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),i=e.name||"",o=(e.type||"").toLowerCase(),l=o.replace(/\/.*$/,"");return t.some(function(d){var c=d.trim().toLowerCase();return c.charAt(0)==="."?i.toLowerCase().endsWith(c):c.endsWith("/*")?l===c.replace(/\/.*$/,""):o===c})}return!0};function en(e){return It(e)||_t(e)||jn(e)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function It(e){if(Array.isArray(e))return Se(e)}function nn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function tn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nn(Object(t),!0).forEach(function(i){wn(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function wn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e,n){return Lt(e)||Rt(e,n)||jn(e,n)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jn(e,n){if(e){if(typeof e=="string")return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}}function Se(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Rt(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,d,c;try{for(t=t.call(e);!(o=(d=t.next()).done)&&(i.push(d.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,c=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw c}}return i}}function Lt(e){if(Array.isArray(e))return e}var Bt="file-invalid-type",Ut="file-too-large",$t="file-too-small",Wt="too-many-files",Kt=function(n){n=Array.isArray(n)&&n.length===1?n[0]:n;var t=Array.isArray(n)?"one of ".concat(n.join(", ")):n;return{code:Bt,message:"File type must be ".concat(t)}},rn=function(n){return{code:Ut,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},on=function(n){return{code:$t,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Nt={code:Wt,message:"Too many files"};function Dn(e,n){var t=e.type==="application/x-moz-file"||zt(e,n);return[t,t?null:Kt(n)]}function kn(e,n,t){if(B(e.size))if(B(n)&&B(t)){if(e.size>t)return[!1,rn(t)];if(e.size<n)return[!1,on(n)]}else{if(B(n)&&e.size<n)return[!1,on(n)];if(B(t)&&e.size>t)return[!1,rn(t)]}return[!0,null]}function B(e){return e!=null}function Ht(e){var n=e.files,t=e.accept,i=e.minSize,o=e.maxSize,l=e.multiple,d=e.maxFiles,c=e.validator;return!l&&n.length>1||l&&d>=1&&n.length>d?!1:n.every(function(g){var v=Dn(g,t),F=te(v,1),y=F[0],O=kn(g,i,o),S=te(O,1),I=S[0],M=c?c(g):null;return y&&I&&!M})}function ge(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function fe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function an(e){e.preventDefault()}function Yt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function qt(e){return e.indexOf("Edge/")!==-1}function Gt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Yt(e)||qt(e)}function P(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(i){for(var o=arguments.length,l=new Array(o>1?o-1:0),d=1;d<o;d++)l[d-1]=arguments[d];return n.some(function(c){return!ge(i)&&c&&c.apply(void 0,[i].concat(l)),ge(i)})}}function Xt(){return"showOpenFilePicker"in window}function Vt(e){if(B(e)){var n=Object.entries(e).filter(function(t){var i=te(t,2),o=i[0],l=i[1],d=!0;return En(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),d=!1),(!Array.isArray(l)||!l.every(Fn))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),d=!1),d}).reduce(function(t,i){var o=te(i,2),l=o[0],d=o[1];return tn(tn({},t),{},wn({},l,d))},{});return[{description:"Files",accept:n}]}return e}function Jt(e){if(B(e))return Object.entries(e).reduce(function(n,t){var i=te(t,2),o=i[0],l=i[1];return[].concat(en(n),[o],en(l))},[]).filter(function(n){return En(n)||Fn(n)}).join(",")}function Qt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Zt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function En(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Fn(e){return/^.*\.[\w]+$/.test(e)}var er=["children"],nr=["open"],tr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],rr=["refKey","onChange","onClick"];function ir(e){return sr(e)||ar(e)||An(e)||or()}function or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sr(e){if(Array.isArray(e))return ze(e)}function Ce(e,n){return pr(e)||cr(e,n)||An(e,n)||lr()}function lr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function An(e,n){if(e){if(typeof e=="string")return ze(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ze(e,n)}}function ze(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function cr(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,d,c;try{for(t=t.call(e);!(o=(d=t.next()).done)&&(i.push(d.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,c=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw c}}return i}}function pr(e){if(Array.isArray(e))return e}function sn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sn(Object(t),!0).forEach(function(i){Te(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function Te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function he(e,n){if(e==null)return{};var t=dr(e,n),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function dr(e,n){if(e==null)return{};var t={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Re=u.forwardRef(function(e,n){var t=e.children,i=he(e,er),o=Pn(i),l=o.open,d=he(o,nr);return u.useImperativeHandle(n,function(){return{open:l}},[l]),Ln.createElement(u.Fragment,null,t(m(m({},d),{},{open:l})))});Re.displayName="Dropzone";var Cn={disabled:!1,getFilesFromEvent:Dt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Re.defaultProps=Cn;Re.propTypes={children:x.func,accept:x.objectOf(x.arrayOf(x.string)),multiple:x.bool,preventDropOnDocument:x.bool,noClick:x.bool,noKeyboard:x.bool,noDrag:x.bool,noDragEventsBubbling:x.bool,minSize:x.number,maxSize:x.number,maxFiles:x.number,disabled:x.bool,getFilesFromEvent:x.func,onFileDialogCancel:x.func,onFileDialogOpen:x.func,useFsAccessApi:x.bool,autoFocus:x.bool,onDragEnter:x.func,onDragLeave:x.func,onDragOver:x.func,onDrop:x.func,onDropAccepted:x.func,onDropRejected:x.func,onError:x.func,validator:x.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Pn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=m(m({},Cn),e),t=n.accept,i=n.disabled,o=n.getFilesFromEvent,l=n.maxSize,d=n.minSize,c=n.multiple,g=n.maxFiles,v=n.onDragEnter,F=n.onDragLeave,y=n.onDragOver,O=n.onDrop,S=n.onDropAccepted,I=n.onDropRejected,M=n.onFileDialogCancel,f=n.onFileDialogOpen,D=n.useFsAccessApi,Y=n.autoFocus,R=n.preventDropOnDocument,_=n.noClick,z=n.noKeyboard,ie=n.noDrag,T=n.noDragEventsBubbling,q=n.onError,G=n.validator,X=u.useMemo(function(){return Jt(t)},[t]),Le=u.useMemo(function(){return Vt(t)},[t]),be=u.useMemo(function(){return typeof f=="function"?f:ln},[f]),oe=u.useMemo(function(){return typeof M=="function"?M:ln},[M]),w=u.useRef(null),A=u.useRef(null),Sn=u.useReducer(ur,_e),Be=Ce(Sn,2),ye=Be[0],k=Be[1],zn=ye.isFocused,Ue=ye.isFileDialogActive,ae=u.useRef(typeof window<"u"&&window.isSecureContext&&D&&Xt()),$e=function(){!ae.current&&Ue&&setTimeout(function(){if(A.current){var p=A.current.files;p.length||(k({type:"closeDialog"}),oe())}},300)};u.useEffect(function(){return window.addEventListener("focus",$e,!1),function(){window.removeEventListener("focus",$e,!1)}},[A,Ue,oe,ae]);var U=u.useRef([]),We=function(p){w.current&&w.current.contains(p.target)||(p.preventDefault(),U.current=[])};u.useEffect(function(){return R&&(document.addEventListener("dragover",an,!1),document.addEventListener("drop",We,!1)),function(){R&&(document.removeEventListener("dragover",an),document.removeEventListener("drop",We))}},[w,R]),u.useEffect(function(){return!i&&Y&&w.current&&w.current.focus(),function(){}},[w,Y,i]);var L=u.useCallback(function(a){q?q(a):console.error(a)},[q]),Ke=u.useCallback(function(a){a.preventDefault(),a.persist(),pe(a),U.current=[].concat(ir(U.current),[a.target]),fe(a)&&Promise.resolve(o(a)).then(function(p){if(!(ge(a)&&!T)){var h=p.length,b=h>0&&Ht({files:p,accept:X,minSize:d,maxSize:l,multiple:c,maxFiles:g,validator:G}),E=h>0&&!b;k({isDragAccept:b,isDragReject:E,isDragActive:!0,type:"setDraggedFiles"}),v&&v(a)}}).catch(function(p){return L(p)})},[o,v,L,T,X,d,l,c,g,G]),Ne=u.useCallback(function(a){a.preventDefault(),a.persist(),pe(a);var p=fe(a);if(p&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return p&&y&&y(a),!1},[y,T]),He=u.useCallback(function(a){a.preventDefault(),a.persist(),pe(a);var p=U.current.filter(function(b){return w.current&&w.current.contains(b)}),h=p.indexOf(a.target);h!==-1&&p.splice(h,1),U.current=p,!(p.length>0)&&(k({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),fe(a)&&F&&F(a))},[w,F,T]),se=u.useCallback(function(a,p){var h=[],b=[];a.forEach(function(E){var V=Dn(E,X),K=Ce(V,2),we=K[0],je=K[1],De=kn(E,d,l),de=Ce(De,2),ke=de[0],Ee=de[1],Fe=G?G(E):null;if(we&&ke&&!Fe)h.push(E);else{var Ae=[je,Ee];Fe&&(Ae=Ae.concat(Fe)),b.push({file:E,errors:Ae.filter(function(Mn){return Mn})})}}),(!c&&h.length>1||c&&g>=1&&h.length>g)&&(h.forEach(function(E){b.push({file:E,errors:[Nt]})}),h.splice(0)),k({acceptedFiles:h,fileRejections:b,type:"setFiles"}),O&&O(h,b,p),b.length>0&&I&&I(b,p),h.length>0&&S&&S(h,p)},[k,c,X,d,l,g,O,S,I,G]),le=u.useCallback(function(a){a.preventDefault(),a.persist(),pe(a),U.current=[],fe(a)&&Promise.resolve(o(a)).then(function(p){ge(a)&&!T||se(p,a)}).catch(function(p){return L(p)}),k({type:"reset"})},[o,se,L,T]),$=u.useCallback(function(){if(ae.current){k({type:"openDialog"}),be();var a={multiple:c,types:Le};window.showOpenFilePicker(a).then(function(p){return o(p)}).then(function(p){se(p,null),k({type:"closeDialog"})}).catch(function(p){Qt(p)?(oe(p),k({type:"closeDialog"})):Zt(p)?(ae.current=!1,A.current?(A.current.value=null,A.current.click()):L(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):L(p)});return}A.current&&(k({type:"openDialog"}),be(),A.current.value=null,A.current.click())},[k,be,oe,D,se,L,Le,c]),Ye=u.useCallback(function(a){!w.current||!w.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),$())},[w,$]),qe=u.useCallback(function(){k({type:"focus"})},[]),Ge=u.useCallback(function(){k({type:"blur"})},[]),Xe=u.useCallback(function(){_||(Gt()?setTimeout($,0):$())},[_,$]),W=function(p){return i?null:p},ve=function(p){return z?null:W(p)},ce=function(p){return ie?null:W(p)},pe=function(p){T&&p.stopPropagation()},Tn=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,b=a.role,E=a.onKeyDown,V=a.onFocus,K=a.onBlur,we=a.onClick,je=a.onDragEnter,De=a.onDragOver,de=a.onDragLeave,ke=a.onDrop,Ee=he(a,tr);return m(m(Te({onKeyDown:ve(P(E,Ye)),onFocus:ve(P(V,qe)),onBlur:ve(P(K,Ge)),onClick:W(P(we,Xe)),onDragEnter:ce(P(je,Ke)),onDragOver:ce(P(De,Ne)),onDragLeave:ce(P(de,He)),onDrop:ce(P(ke,le)),role:typeof b=="string"&&b!==""?b:"presentation"},h,w),!i&&!z?{tabIndex:0}:{}),Ee)}},[w,Ye,qe,Ge,Xe,Ke,Ne,He,le,z,ie,i]),_n=u.useCallback(function(a){a.stopPropagation()},[]),In=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,b=a.onChange,E=a.onClick,V=he(a,rr),K=Te({accept:X,multiple:c,type:"file",style:{display:"none"},onChange:W(P(b,le)),onClick:W(P(E,_n)),tabIndex:-1},h,A);return m(m({},K),V)}},[A,t,c,le,i]);return m(m({},ye),{},{isFocused:zn&&!i,getRootProps:Tn,getInputProps:In,rootRef:w,inputRef:A,open:W($)})}function ur(e,n){switch(n.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},_e),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return m({},_e);default:return e}}function ln(){}const cn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,pn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`,dn=s.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`,un=s.div`
  display: flex;
  align-items: center;
`,fr=s.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`,xr=s.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`,mr=s.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`,gr=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-height: 224px;
`,hr=s.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  transition: transform 300ms;

  &:hover{
  transform: scale(1.1);
  }
`,br=s.svg`
  width: 24px;
  height: 24px;
  stroke:var(--clr-brand-blue);
`,yr=s.svg`
  fill: none;

`,vr=s.svg`
  fill: none;
  stroke:var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,wr=s.svg`
  stroke:var(--clr-brand-red);
  width: 24px;
  height: 24px;
`,jr=({isUserUpdate:e,setUserPhoto:n})=>{const{data:t=[],isLoading:i}=Ie(),[o,l]=u.useState(null),[d,c]=u.useState(!1),g=S=>{l(S[0])},{getRootProps:v,getInputProps:F,isDragActive:y}=Pn({onDrop:g,accept:{"image/jpeg":[],"image/png":[]}});u.useEffect(()=>{c(!1)},[o]);const O=()=>{n(o),c(!0)};return r.jsx(r.Fragment,{children:i?r.jsx("h1",{children:"loading.."}):r.jsx(cn,{children:r.jsxs(cn,{children:[r.jsx("input",{type:"file",name:"image",...F()}),r.jsxs(gr,{children:[o?r.jsx(pn,{children:r.jsx(dn,{src:URL.createObjectURL(o),alt:"User's file",style:{maxWidth:"300px"}})}):r.jsx(pn,{children:r.jsx(dn,{src:t.user.avatarURL?t.user.avatarURL:"https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png",alt:"Default avatar",style:{maxWidth:"300px"}})}),!e&&r.jsx(un,{children:o&&!d?r.jsxs(un,{children:[r.jsx(fr,{type:"button",onClick:O,children:r.jsx(vr,{children:r.jsx("use",{href:C+"#iconCheck"})})}),r.jsx(xr,{children:"Confirm"}),r.jsx(mr,{type:"button",onClick:()=>l(null),children:r.jsx(wr,{children:r.jsx("use",{href:C+"#iconCross"})})})]}):r.jsxs(hr,{...v(),className:`dropzone ${y?"active":""}`,type:"button",children:[r.jsx(br,{children:r.jsx(yr,{children:r.jsx("use",{href:C+"#iconCamera"})})}),"Edit photo"]})})]})]})})})},Dr=s.div`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--clr-backdrop);
    z-index:101;
`;function On({children:e,isOpen:n}){const t=xn(),i=Me(mn),[o,l]=u.useState(!0),d=c=>{c.target.id==="4"&&(console.log(c.target.id),i&&l(!1)(t(Pe(!1))),n&&n(!1))};return o&&Bn.createPortal(r.jsx(Dr,{id:"4",onClick:c=>d(c),children:e}),document.getElementById("modal-root"))}const kr=({isUserUpdate:e,setIsUserUpdate:n})=>{const t=Me(Un),[i,o]=u.useState(!1),[l,d]=u.useState(null),{data:c,isLoading:g}=Ie(),[v]=$n(),[F]=Wn(),y=Kn(),O=f=>{f.date.split("-").reverse().join("-");const D=new FormData,Y=_=>{const z=new Date(_),ie=String(z.getDate()).padStart(2,"0"),T=String(z.getMonth()+1).padStart(2,"0"),q=z.getFullYear();return`${ie}-${T}-${q}`};let R;l?R={name:f.name,email:f.email,date:Y(f.date),phone:f.phone,city:f.city,image:l}:R={name:f.name,email:f.email,date:Y(f.date),phone:f.phone,city:f.city},Object.entries(R).forEach(([_,z])=>{D.append(_,z)}),v(D).unwrap(),n(_=>!_)},S=()=>{o(!0)},I=async()=>{await F(t).unwrap(),y("/login"),localStorage.removeItem("persist:auth"),window.location.reload()};u.useEffect(()=>{const f=D=>{D.keyCode===27&&o(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const M=Vn({name:ue().min(3,"Name Too Short!").max(16,"Too Long!").required("Required"),date:Jn().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),email:ue().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),city:ue().min(3,"City Too Short!").required("Required"),phone:ue().matches(/^\+\d{12}$/,"Phone must have + and length 12").min(13,"Phone Too Short!").max(13,"Phone Too long").required("Required")});return r.jsxs(r.Fragment,{children:[g?r.jsx(Zn,{}):r.jsx(Qn,{initialValues:{name:c.user.name?c.user.name:"",date:c.user.date?c.user.date.split("-").reverse().join("-"):"",email:c.user.email?c.user.email:"",city:(c.user.city,c.user.city),phone:c.user.phone?c.user.phone:""},validationSchema:M,onSubmit:O,children:({errors:f,touched:D})=>r.jsxs(et,{children:[r.jsx(jr,{isUserUpdate:e,setUserPhoto:d}),r.jsxs(nt,{children:[r.jsxs(tt,{children:[r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(ee,{htmlFor:"name",children:"Name:"}),r.jsx(ne,{type:"text",name:"name",id:"name",placeholder:"Anna",disabled:e})]}),f.name&&D.name?r.jsx(Z,{children:f.name}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(ee,{htmlFor:"email",children:"Email:"}),r.jsx(ne,{name:"email",id:"email",placeholder:"anna00@gmail.com|",disabled:e,className:`${D.name&&f.name?"is-invalid":""}`})]}),f.email&&D.email?r.jsx(Z,{children:f.email}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(ee,{htmlFor:"birthDate",children:"Birthday:"}),r.jsx(ne,{type:"date",name:"date",id:"date",placeholder:"00-00-0000",disabled:e})]}),f.date&&D.date?r.jsx(Z,{children:f.date}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(ee,{htmlFor:"phone",children:"Phone:"}),r.jsx(ne,{type:"phone",name:"phone",id:"phone",placeholder:"+38000000000",disabled:e})]}),f.phone&&D.phone?r.jsx(Z,{children:f.phone}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(ee,{htmlFor:"city",children:"City:"}),r.jsx(ne,{type:"text",name:"city",id:"city",placeholder:"Kyiv",disabled:e})]}),f.city&&D.city?r.jsx(Z,{children:f.city}):null]})]}),e?r.jsxs(rt,{type:"button",onClick:S,children:[r.jsx(at,{children:r.jsx("use",{href:C+"#iconLogout"})}),r.jsx(ot,{children:"Log Out"})]}):r.jsx(it,{type:"submit",children:"Save"})]})]})}),i?r.jsx(On,{isOpen:o,children:r.jsxs(ct,{children:[r.jsx(pt,{children:"Already leaving?"}),r.jsxs(ut,{children:[r.jsx(ft,{onClick:()=>o(!1),children:"Cancel"}),r.jsxs(xt,{onClick:()=>I(),children:["Yes",r.jsx(st,{children:r.jsx("use",{href:C+"#iconLogout"})})]})]}),r.jsx(dt,{onClick:()=>o(!1),children:r.jsx(lt,{children:r.jsx("use",{href:C+"#iconCross"})})})]})}):r.jsx("div",{})]})},Er=s.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 46px;
  @media screen and (min-width: 375px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
      gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 394px;
    margin-bottom: 16px;
  }
`,Fr=s.h2`
  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-weight: 500;
  line-height: normal;
    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`,Ar=s.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 20px 8px;

  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-right: 76px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 24px 21px 16px;
  }
`,fn=s.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;

  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`,Cr=s.svg`
  fill: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Pr=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Or=s.svg`
  fill: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
`,Sr=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;s.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  gap: 11px;
  width: 94px;
  padding: 0;
  background-color: transparent;
  border: none;
  margin-bottom: 22px;
  cursor: pointer;
`;s.label`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;

  cursor: pointer;
`;const zr=s.h3`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;
    margin-bottom: 52px;
  }
`,Tr=s.p`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 0.94px;
    margin-bottom: 60px;
  }
`,_r=s.button`
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 12px;
  color: var(--clr-bcg);
  border-radius: 40px;
  border: none;
  background: var(--blue-links, #54adff);
`,Ir=s.div`
  background-color: var(--clr-bcg-user);
  border-radius: 20px;
  padding: 68px 16px 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 5;
  @media screen and (min-width: 768px) {
    padding: 60px 129px 60px;
    width: 608px;
  }
`,Mr=s.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`,Rr=()=>{const e=xn(),n=Me(mn);u.useEffect(()=>{const l=d=>{d.keyCode===27&&e(Pe(!1))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e]);const[t,i]=u.useState(!0),o=()=>{e(Pe(!1))};return r.jsx(r.Fragment,{children:r.jsxs(Er,{children:[r.jsx(Fr,{children:"My information:"}),r.jsxs(Ar,{children:[t?r.jsx(fn,{onClick:()=>i(l=>!l),children:r.jsx(Cr,{children:r.jsx("use",{href:C+"#iconEdit"})})}):r.jsx(fn,{onClick:()=>i(l=>!l),children:r.jsx(Pr,{children:r.jsx("use",{href:C+"#iconCross"})})}),r.jsx(kr,{isUserUpdate:t,setIsUserUpdate:i}),n&&r.jsx(On,{children:r.jsxs(Ir,{children:[r.jsx(zr,{children:"Congrats!"}),r.jsx(Tr,{children:"Youre registration is success"}),r.jsxs(_r,{onClick:()=>{o()},type:"button",children:["Go to profile",r.jsx(Or,{children:r.jsx("use",{href:C+"#iconPaw"})})]}),r.jsx(Mr,{onClick:()=>{o()},children:r.jsx(Sr,{children:r.jsx("use",{href:C+"#iconCross"})})})]})})]})]})})},Lr=j.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right:auto;
    @media only screen and (min-width: 768px) {
        font-size: 28px;
    }
`,Br=j.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`;j.li`
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 703px;
    padding: 20px 20px 0 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 40px;
  }
  @media only screen and (min-width: 1280px) {
    width: 821px;
    height: 100%;
    padding: 20px 28px 20px 20px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`;j.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`;j.li`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: 0.64px;
    line-height: 1.375;
  }

  h3 {
    display: inline;
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
      font-family: Manrope-SemiBold, sans-serif;
      font-weight: 600;
    }
  }
  p {
    display: inline;
    font-family: Manrope-Regular, sans-serif;
    font-weight: 400;
    @media only screen and (min-width: 768px) {
      font-family: Manrope-Regular, sans-serif;
      font-weight: 400;
    }
  }
`;j.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54adff;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;j.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: 24px;
  font-family: Manrope-Bold, sans-serif;
  font-weight: 700;
  letter-spacing: 0.96px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;j.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: 14px;
  font-family: Manrope-Medium, sans-serif;
  font-weight: 500;
  letter-spacing: -0.14px;
  span {
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
  }
  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }
`;j.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;j.button`
  position: absolute;
  top: 272px;
  right: 16px;

  border: none;
  background-color: transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;const Ur=j.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 31px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 20px;
    max-width: 704px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
    max-width: 821px;
  }
`,$r=j(Nn)`
  border-radius: 50%;
  padding: 20px 18px 16px;
  color: var(--clr-primary-inv);
  background-color: var(--clr-brand-blue);
  margin-left: auto;
  font-size: 12px;

  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px 0px;

  position: fixed;
  bottom: 30px;
  z-index: 2;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media only screen and (min-width: 768px) {
    position: static;
    padding: 8px 20px;
    border-radius: 40px;

    bottom: auto;
    right: auto;

    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.64px;
    transition: 300ms;
    flex-shrink: 0;
    outline: none;

    div {
      flex-direction: row;
      gap: 8px;
      z-index: 2;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      width: 136px;
      height: 100%;
      background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);

      border-radius: 40px;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 0;
      
    }

    &:hover:before {
      opacity: 1;
    }

    /* &:hover div {
      color: var(--clr-primary-inv);
      z-index: 2;
    } */
  }
`;j.svg`
  fill: none;
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;const Wr=j.svg`
  stroke: var(--clr-bcg);
  width: 24px;
  height: 24px;
`,Kr=s.p`
  margin: 0 auto 130px;
  text-align: center;
      @media only screen and (min-width: 1280px) {
      width: 821px;
    }

`,Nr=()=>r.jsx(r.Fragment,{children:r.jsx(Kr,{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})}),Hr=s.li`
  padding: 16px 20px 40px;
  border-radius: 20px;
  background:var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
  margin: auto;
  @media only screen and (min-width: 768px) {
    display:flex;
    width: 703px;
    padding: 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 40px;
  }
  @media only screen and (min-width: 1280px) {  
    width: 821px;;
    height: 100%;
    padding: 20px 28px 20px 20px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`,Yr=s.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
    border-radius: 40px;
  }
`,xe=s.li`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 1280px) {
    font-size:16px;
    letter-spacing: 0.64px;
    line-height: 1.375;
  }
  
  h3 {
    display: inline;
    font-weight: 700;
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-weight: 600;
        font-size: 14px;
    }
        @media only screen and (min-width: 1280px) {
        font-size:16px;
    }
  }
  p {
    display: inline;
    word-break: break-all;
    white-space: normal;
    font-weight: 400;
    @media only screen and (min-width: 1280px) {
        font-size:16px;
    }
  }
`;s.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54ADFF;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;s.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: 24px;
  font-family: Manrope-Bold, sans-serif;
  font-weight: 700;
  letter-spacing: 0.96px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;s.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: 14px;
  font-family: Manrope-Medium, sans-serif;
  font-weight: 500;
  letter-spacing: -0.14px;
  span {
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
  }
  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }
`;s.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;const qr=Hn`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,Gr=s.button`
  position: absolute;
  top: 272px;
  right: 16px;
  
  border: none;
  background-color:transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
  top: 20px;
  right: 20px;

  transition: transform 300ms;

  &:hover{
    animation: ${qr} 0.5s ease;
  }
  }

`,Xr=s.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`;function Vr({pets:e}){const[n]=Yn(),t=async i=>{await n(i).unwrap()};return r.jsxs(Hr,{children:[r.jsx(Gr,{onClick:()=>t(e._id),children:r.jsx(Xr,{children:r.jsx("use",{href:C+"#iconTrash"})})}),r.jsx(Yr,{src:e.avatarURL,alt:"user-pet"}),r.jsxs("ul",{children:[r.jsxs(xe,{children:[r.jsx("h3",{children:"Name: "}),r.jsx("p",{children:e.name})]}),r.jsxs(xe,{children:[r.jsx("h3",{children:"Date of birth: "}),r.jsx("p",{children:e.date})]}),r.jsxs(xe,{children:[r.jsx("h3",{children:"Type: "}),r.jsx("p",{children:e.type})]}),r.jsxs(xe,{children:[r.jsx("h3",{children:" Comments: "}),r.jsx("p",{children:e.comments})]})]})]})}const Jr=()=>{var n,t;const{data:e=[]}=Ie();return r.jsxs("div",{children:[r.jsxs(Ur,{children:[r.jsx(Lr,{children:"My pets:"}),r.jsx($r,{to:"/add-pet",state:{from:"/user"},children:r.jsxs("div",{children:["Add pet",r.jsx(Wr,{children:r.jsx("use",{href:C+"#iconPlusSmall"})})]})})]}),r.jsx(Br,{children:e.pets&&((n=e.pets)==null?void 0:n.map(i=>r.jsx(Vr,{pets:i},i._id)))}),((t=e.pets)==null?void 0:t.length)===0&&r.jsx(Nr,{})]})},Qr=j.div`
  position: relative;
  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 42px;
    display: flex;
    gap: 0px 32px;
  }
`;function ti(){return r.jsx(qn,{children:r.jsxs(Qr,{children:[r.jsx(Rr,{}),r.jsx(Jr,{})]})})}export{ti as default};
