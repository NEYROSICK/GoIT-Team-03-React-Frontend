import{s,g as Mn,_ as K,e as N,f as Je,h as Qe,r as u,R as Rn,i as Ie,j as r,b as A,k as Me,l as Ln,m as Pe,o as Bn,c as Un,p as $n,a as Wn,n as D,L as Kn,q as Nn,C as Hn}from"./index-bc72f8a7.js";import{F as Yn,a as qn,c as Gn,b as de,d as Vn,e as Jn}from"./index.esm-6be6aa88.js";import{L as Qn}from"./Loader-16e43ba4.js";import{a as Xn}from"./selectors-9c63f203.js";s.div`
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
  position: relative;
`;s.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;const Zn=s(Yn)`
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
`,et=s.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  @media screen and (min-width: 768px) {
  gap: 15px 0px;
  }
`,nt=s.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  color:var(--clr-primary);
  @media screen and (min-width: 768px) {
  width: 354px;
  }
`,J=s.li`
  display: flex;
  flex-direction:column;
  width: 100%;
`,Q=s.div`
  display:flex; 
  justify-content: space-between;
  
`,X=s.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.56px;
  margin: auto;
  margin-top:10px;
  color: var(--clr-brand-red);
  &UserFormInput{
  border-color: var(--clr-brand-red);
  }
`,Z=s.label`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
  font-size: 18px;
  letter-spacing: 0.72px;
  }
`,ee=s(qn)`
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
  }
`,Xe=s.button`
  align-items: center;
  display: flex;
  justify-content:center;
  background-color:transparent;
  height: 31px;
  padding: 0px;
  cursor: pointer;
  border: none;
  font-size: 18px;
  @media screen and (min-width: 768px) {
  justify-content:flex-end;
  
  }

`,tt=s.button`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 248px;
  flex: 1 1 auto;
  text-align: center;
  padding: 8px 12px;
  box-sizing:border-box;

  border-radius: 40px;
  border: 1px solid var(--clr-primary-inv);
  color: var(--clr-primary-inv);
  background-color:var(--clr-brand-blue);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;

  transition: all 250ms ease-in-out;

  cursor: pointer;
  @media screen and (min-width: 768px) {
  max-width: 255px;
  }
`,rt=s.p`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  gap: 10px;

  color: var(--clr-secondary);

  padding: 10px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.64px;
`,it=s.svg`
  width: 24px;
  height: 24px;
  stroke: #54adff;
  fill: none;

  transition: transform 300ms;

  &:hover{
    transform: scale(1.1);
  }
`,ot=s.svg`
  stroke: var(--clr-bcg-user);
  fill: none;
  width: 24px;
  height: 24px;
`,at=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,st=s.div`
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
`,lt=s.h3`
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
`,ct=s.button`
  position:absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color:transparent;
  @media screen and (min-width: 768px) {
  top: 24px;
  right: 24px;
  }
`,pt=s.div`
  display: flex;
  flex-direction:column;
  gap:8px 0px ;
  @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:center;
    gap: 0px  17px;
  }
`,dt=s.button`
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
  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  }
`,ut=s.button`
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
`;var mn={exports:{}},ft="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xt=ft,mt=xt;function gn(){}function hn(){}hn.resetWarningCache=gn;var gt=function(){function e(i,o,l,c,d,g){if(g!==mt){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:hn,resetWarningCache:gn};return t.PropTypes=t,t};mn.exports=gt();var ht=mn.exports;const x=Mn(ht);var yt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,n){var t=bt(e);if(typeof t.path!="string"){var i=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof n=="string"?n:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function bt(e){var n=e.name,t=n&&n.lastIndexOf(".")!==-1;if(t&&!e.type){var i=n.split(".").pop().toLowerCase(),o=yt.get(i);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var vt=[".DS_Store","Thumbs.db"];function wt(e){return K(this,void 0,void 0,function(){return N(this,function(n){return xe(e)&&jt(e.dataTransfer)?[2,kt(e.dataTransfer,e.type)]:Dt(e)?[2,Et(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Ft(e)]:[2,[]]})})}function jt(e){return xe(e)}function Dt(e){return xe(e)&&xe(e.target)}function xe(e){return typeof e=="object"&&e!==null}function Et(e){return Oe(e.target.files).map(function(n){return te(n)})}function Ft(e){return K(this,void 0,void 0,function(){var n;return N(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(i){return i.getFile()}))];case 1:return n=t.sent(),[2,n.map(function(i){return te(i)})]}})})}function kt(e,n){return K(this,void 0,void 0,function(){var t,i;return N(this,function(o){switch(o.label){case 0:return e.items?(t=Oe(e.items).filter(function(l){return l.kind==="file"}),n!=="drop"?[2,t]:[4,Promise.all(t.map(Ct))]):[3,2];case 1:return i=o.sent(),[2,Ze(yn(i))];case 2:return[2,Ze(Oe(e.files).map(function(l){return te(l)}))]}})})}function Ze(e){return e.filter(function(n){return vt.indexOf(n.name)===-1})}function Oe(e){if(e===null)return[];for(var n=[],t=0;t<e.length;t++){var i=e[t];n.push(i)}return n}function Ct(e){if(typeof e.webkitGetAsEntry!="function")return en(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?bn(n):en(e)}function yn(e){return e.reduce(function(n,t){return Je(Je([],Qe(n),!1),Qe(Array.isArray(t)?yn(t):[t]),!1)},[])}function en(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=te(n);return Promise.resolve(t)}function At(e){return K(this,void 0,void 0,function(){return N(this,function(n){return[2,e.isDirectory?bn(e):Pt(e)]})})}function bn(e){var n=e.createReader();return new Promise(function(t,i){var o=[];function l(){var c=this;n.readEntries(function(d){return K(c,void 0,void 0,function(){var g,v,k;return N(this,function(b){switch(b.label){case 0:if(d.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=b.sent(),t(g),[3,4];case 3:return v=b.sent(),i(v),[3,4];case 4:return[3,6];case 5:k=Promise.all(d.map(At)),o.push(k),l(),b.label=6;case 6:return[2]}})})},function(d){i(d)})}l()})}function Pt(e){return K(this,void 0,void 0,function(){return N(this,function(n){return[2,new Promise(function(t,i){e.file(function(o){var l=te(o,e.fullPath);t(l)},function(o){i(o)})})]})})}var Ot=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),i=e.name||"",o=(e.type||"").toLowerCase(),l=o.replace(/\/.*$/,"");return t.some(function(c){var d=c.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?l===d.replace(/\/.*$/,""):o===d})}return!0};function nn(e){return _t(e)||Tt(e)||wn(e)||St()}function St(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return Se(e)}function tn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tn(Object(t),!0).forEach(function(i){vn(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function vn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e,n){return Mt(e)||It(e,n)||wn(e,n)||zt()}function zt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wn(e,n){if(e){if(typeof e=="string")return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}}function Se(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function It(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,c,d;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(i.push(c.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,d=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw d}}return i}}function Mt(e){if(Array.isArray(e))return e}var Rt="file-invalid-type",Lt="file-too-large",Bt="file-too-small",Ut="too-many-files",$t=function(n){n=Array.isArray(n)&&n.length===1?n[0]:n;var t=Array.isArray(n)?"one of ".concat(n.join(", ")):n;return{code:Rt,message:"File type must be ".concat(t)}},on=function(n){return{code:Lt,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},an=function(n){return{code:Bt,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Wt={code:Ut,message:"Too many files"};function jn(e,n){var t=e.type==="application/x-moz-file"||Ot(e,n);return[t,t?null:$t(n)]}function Dn(e,n,t){if(R(e.size))if(R(n)&&R(t)){if(e.size>t)return[!1,on(t)];if(e.size<n)return[!1,an(n)]}else{if(R(n)&&e.size<n)return[!1,an(n)];if(R(t)&&e.size>t)return[!1,on(t)]}return[!0,null]}function R(e){return e!=null}function Kt(e){var n=e.files,t=e.accept,i=e.minSize,o=e.maxSize,l=e.multiple,c=e.maxFiles,d=e.validator;return!l&&n.length>1||l&&c>=1&&n.length>c?!1:n.every(function(g){var v=jn(g,t),k=ne(v,1),b=k[0],O=Dn(g,i,o),S=ne(O,1),I=S[0],f=d?d(g):null;return b&&I&&!f})}function me(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ue(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function sn(e){e.preventDefault()}function Nt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Ht(e){return e.indexOf("Edge/")!==-1}function Yt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Nt(e)||Ht(e)}function P(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(i){for(var o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];return n.some(function(d){return!me(i)&&d&&d.apply(void 0,[i].concat(l)),me(i)})}}function qt(){return"showOpenFilePicker"in window}function Gt(e){if(R(e)){var n=Object.entries(e).filter(function(t){var i=ne(t,2),o=i[0],l=i[1],c=!0;return En(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(l)||!l.every(Fn))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,i){var o=ne(i,2),l=o[0],c=o[1];return rn(rn({},t),{},vn({},l,c))},{});return[{description:"Files",accept:n}]}return e}function Vt(e){if(R(e))return Object.entries(e).reduce(function(n,t){var i=ne(t,2),o=i[0],l=i[1];return[].concat(nn(n),[o],nn(l))},[]).filter(function(n){return En(n)||Fn(n)}).join(",")}function Jt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Qt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function En(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Fn(e){return/^.*\.[\w]+$/.test(e)}var Xt=["children"],Zt=["open"],er=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],nr=["refKey","onChange","onClick"];function tr(e){return or(e)||ir(e)||kn(e)||rr()}function rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function or(e){if(Array.isArray(e))return Te(e)}function Ae(e,n){return lr(e)||sr(e,n)||kn(e,n)||ar()}function ar(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(e,n){if(e){if(typeof e=="string")return Te(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Te(e,n)}}function Te(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function sr(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,c,d;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(i.push(c.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,d=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw d}}return i}}function lr(e){if(Array.isArray(e))return e}function ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(t),!0).forEach(function(i){_e(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ln(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function _e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ge(e,n){if(e==null)return{};var t=cr(e,n),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function cr(e,n){if(e==null)return{};var t={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Re=u.forwardRef(function(e,n){var t=e.children,i=ge(e,Xt),o=An(i),l=o.open,c=ge(o,Zt);return u.useImperativeHandle(n,function(){return{open:l}},[l]),Rn.createElement(u.Fragment,null,t(m(m({},c),{},{open:l})))});Re.displayName="Dropzone";var Cn={disabled:!1,getFilesFromEvent:wt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Re.defaultProps=Cn;Re.propTypes={children:x.func,accept:x.objectOf(x.arrayOf(x.string)),multiple:x.bool,preventDropOnDocument:x.bool,noClick:x.bool,noKeyboard:x.bool,noDrag:x.bool,noDragEventsBubbling:x.bool,minSize:x.number,maxSize:x.number,maxFiles:x.number,disabled:x.bool,getFilesFromEvent:x.func,onFileDialogCancel:x.func,onFileDialogOpen:x.func,useFsAccessApi:x.bool,autoFocus:x.bool,onDragEnter:x.func,onDragLeave:x.func,onDragOver:x.func,onDrop:x.func,onDropAccepted:x.func,onDropRejected:x.func,onError:x.func,validator:x.func};var ze={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function An(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=m(m({},Cn),e),t=n.accept,i=n.disabled,o=n.getFilesFromEvent,l=n.maxSize,c=n.minSize,d=n.multiple,g=n.maxFiles,v=n.onDragEnter,k=n.onDragLeave,b=n.onDragOver,O=n.onDrop,S=n.onDropAccepted,I=n.onDropRejected,f=n.onFileDialogCancel,w=n.onFileDialogOpen,H=n.useFsAccessApi,L=n.autoFocus,T=n.preventDropOnDocument,z=n.noClick,Y=n.noKeyboard,re=n.noDrag,_=n.noDragEventsBubbling,he=n.onError,q=n.validator,G=u.useMemo(function(){return Vt(t)},[t]),Le=u.useMemo(function(){return Gt(t)},[t]),ye=u.useMemo(function(){return typeof w=="function"?w:cn},[w]),ie=u.useMemo(function(){return typeof f=="function"?f:cn},[f]),j=u.useRef(null),C=u.useRef(null),On=u.useReducer(pr,ze),Be=Ae(On,2),be=Be[0],E=Be[1],Sn=be.isFocused,Ue=be.isFileDialogActive,oe=u.useRef(typeof window<"u"&&window.isSecureContext&&H&&qt()),$e=function(){!oe.current&&Ue&&setTimeout(function(){if(C.current){var p=C.current.files;p.length||(E({type:"closeDialog"}),ie())}},300)};u.useEffect(function(){return window.addEventListener("focus",$e,!1),function(){window.removeEventListener("focus",$e,!1)}},[C,Ue,ie,oe]);var B=u.useRef([]),We=function(p){j.current&&j.current.contains(p.target)||(p.preventDefault(),B.current=[])};u.useEffect(function(){return T&&(document.addEventListener("dragover",sn,!1),document.addEventListener("drop",We,!1)),function(){T&&(document.removeEventListener("dragover",sn),document.removeEventListener("drop",We))}},[j,T]),u.useEffect(function(){return!i&&L&&j.current&&j.current.focus(),function(){}},[j,L,i]);var M=u.useCallback(function(a){he?he(a):console.error(a)},[he]),Ke=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a),B.current=[].concat(tr(B.current),[a.target]),ue(a)&&Promise.resolve(o(a)).then(function(p){if(!(me(a)&&!_)){var h=p.length,y=h>0&&Kt({files:p,accept:G,minSize:c,maxSize:l,multiple:d,maxFiles:g,validator:q}),F=h>0&&!y;E({isDragAccept:y,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),v&&v(a)}}).catch(function(p){return M(p)})},[o,v,M,_,G,c,l,d,g,q]),Ne=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a);var p=ue(a);if(p&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return p&&b&&b(a),!1},[b,_]),He=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a);var p=B.current.filter(function(y){return j.current&&j.current.contains(y)}),h=p.indexOf(a.target);h!==-1&&p.splice(h,1),B.current=p,!(p.length>0)&&(E({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ue(a)&&k&&k(a))},[j,k,_]),ae=u.useCallback(function(a,p){var h=[],y=[];a.forEach(function(F){var V=jn(F,G),W=Ae(V,2),we=W[0],je=W[1],De=Dn(F,c,l),pe=Ae(De,2),Ee=pe[0],Fe=pe[1],ke=q?q(F):null;if(we&&Ee&&!ke)h.push(F);else{var Ce=[je,Fe];ke&&(Ce=Ce.concat(ke)),y.push({file:F,errors:Ce.filter(function(In){return In})})}}),(!d&&h.length>1||d&&g>=1&&h.length>g)&&(h.forEach(function(F){y.push({file:F,errors:[Wt]})}),h.splice(0)),E({acceptedFiles:h,fileRejections:y,type:"setFiles"}),O&&O(h,y,p),y.length>0&&I&&I(y,p),h.length>0&&S&&S(h,p)},[E,d,G,c,l,g,O,S,I,q]),se=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a),B.current=[],ue(a)&&Promise.resolve(o(a)).then(function(p){me(a)&&!_||ae(p,a)}).catch(function(p){return M(p)}),E({type:"reset"})},[o,ae,M,_]),U=u.useCallback(function(){if(oe.current){E({type:"openDialog"}),ye();var a={multiple:d,types:Le};window.showOpenFilePicker(a).then(function(p){return o(p)}).then(function(p){ae(p,null),E({type:"closeDialog"})}).catch(function(p){Jt(p)?(ie(p),E({type:"closeDialog"})):Qt(p)?(oe.current=!1,C.current?(C.current.value=null,C.current.click()):M(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):M(p)});return}C.current&&(E({type:"openDialog"}),ye(),C.current.value=null,C.current.click())},[E,ye,ie,H,ae,M,Le,d]),Ye=u.useCallback(function(a){!j.current||!j.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),U())},[j,U]),qe=u.useCallback(function(){E({type:"focus"})},[]),Ge=u.useCallback(function(){E({type:"blur"})},[]),Ve=u.useCallback(function(){z||(Yt()?setTimeout(U,0):U())},[z,U]),$=function(p){return i?null:p},ve=function(p){return Y?null:$(p)},le=function(p){return re?null:$(p)},ce=function(p){_&&p.stopPropagation()},Tn=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,y=a.role,F=a.onKeyDown,V=a.onFocus,W=a.onBlur,we=a.onClick,je=a.onDragEnter,De=a.onDragOver,pe=a.onDragLeave,Ee=a.onDrop,Fe=ge(a,er);return m(m(_e({onKeyDown:ve(P(F,Ye)),onFocus:ve(P(V,qe)),onBlur:ve(P(W,Ge)),onClick:$(P(we,Ve)),onDragEnter:le(P(je,Ke)),onDragOver:le(P(De,Ne)),onDragLeave:le(P(pe,He)),onDrop:le(P(Ee,se)),role:typeof y=="string"&&y!==""?y:"presentation"},h,j),!i&&!Y?{tabIndex:0}:{}),Fe)}},[j,Ye,qe,Ge,Ve,Ke,Ne,He,se,Y,re,i]),_n=u.useCallback(function(a){a.stopPropagation()},[]),zn=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,y=a.onChange,F=a.onClick,V=ge(a,nr),W=_e({accept:G,multiple:d,type:"file",style:{display:"none"},onChange:$(P(y,se)),onClick:$(P(F,_n)),tabIndex:-1},h,C);return m(m({},W),V)}},[C,t,d,se,i]);return m(m({},be),{},{isFocused:Sn&&!i,getRootProps:Tn,getInputProps:zn,rootRef:j,inputRef:C,open:$(U)})}function pr(e,n){switch(n.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},ze),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return m({},ze);default:return e}}function cn(){}const pn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,dn=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`,un=s.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`,fn=s.div`
  display: flex;
  align-items: center;
`,dr=s.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`,ur=s.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`,fr=s.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`,xr=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-height: 224px;
`,mr=s.div`
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
`,gr=s.svg`
  width: 24px;
  height: 24px;
  stroke:var(--clr-brand-blue);
`,hr=s.svg`
  fill: none;

`,yr=s.svg`
  fill: none;
  stroke:var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,br=s.svg`
  stroke:var(--clr-brand-red);
  width: 24px;
  height: 24px;
`,vr=({isUserUpdate:e,setUserPhoto:n})=>{const{data:t=[],isLoading:i}=Ie(),[o,l]=u.useState(null),[c,d]=u.useState(!1),g=S=>{l(S[0])},{getRootProps:v,getInputProps:k,isDragActive:b}=An({onDrop:g,accept:{"image/jpeg":[],"image/png":[]}});u.useEffect(()=>{d(!1)},[o]);const O=()=>{n(o),d(!0)};return r.jsx(r.Fragment,{children:i?r.jsx("h1",{children:"loading.."}):r.jsx(pn,{children:r.jsxs(pn,{children:[r.jsx("input",{type:"file",name:"image",...k()}),r.jsxs(xr,{children:[o?r.jsx(dn,{children:r.jsx(un,{src:URL.createObjectURL(o),alt:"User's file",style:{maxWidth:"300px"}})}):r.jsx(dn,{children:r.jsx(un,{src:t.user.avatarURL?t.user.avatarURL:"https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png",alt:"Default avatar",style:{maxWidth:"300px"}})}),!e&&r.jsx(fn,{children:o&&!c?r.jsxs(fn,{children:[r.jsx(dr,{type:"button",onClick:O,children:r.jsx(yr,{children:r.jsx("use",{href:A+"#iconCheck"})})}),r.jsx(ur,{children:"Confirm"}),r.jsx(fr,{type:"button",onClick:()=>l(null),children:r.jsx(br,{children:r.jsx("use",{href:A+"#iconCross"})})})]}):r.jsxs(mr,{...v(),className:`dropzone ${b?"active":""}`,type:"button",children:[r.jsx(gr,{children:r.jsx(hr,{children:r.jsx("use",{href:A+"#iconCamera"})})}),"Edit photo"]})})]})]})})})},wr=s.div`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--clr-backdrop);
    z-index:2;
`;function Pn({children:e,isOpen:n}){const t=Me(),[i,o]=u.useState(!0),l=c=>{c.target.id==="4"&&(console.log(c.target.id),o(!1)(t(Pe(!1))),n&&n(!1))};return i&&Ln.createPortal(r.jsx(wr,{id:"4",onClick:c=>l(c),children:e}),document.getElementById("modal-root"))}const jr=({isUserUpdate:e,setIsUserUpdate:n})=>{const[t,i]=u.useState(!1),[o,l]=u.useState(null),{data:c,isLoading:d}=Ie(),[g]=Bn(),v=Un(),k=Me(),b=f=>{f.date.split("-").reverse().join("-");const w=new FormData,H=T=>{const z=new Date(T),Y=String(z.getDate()).padStart(2,"0"),re=String(z.getMonth()+1).padStart(2,"0"),_=z.getFullYear();return`${Y}-${re}-${_}`};let L;o?L={name:f.name,email:f.email,date:H(f.date),phone:f.phone,city:f.city,image:o}:L={name:f.name,email:f.email,date:H(f.date),phone:f.phone,city:f.city},Object.entries(L).forEach(([T,z])=>{w.append(T,z)}),g(w).unwrap(),n(T=>!T)},O=()=>{i(!0)},S=()=>{k($n()),v("/login"),localStorage.removeItem("persist:auth"),window.location.reload()};u.useEffect(()=>{const f=w=>{w.keyCode===27&&i(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const I=Gn({name:de().min(3,"Name Too Short!").max(16,"Too Long!").required("Required"),date:Vn().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),email:de().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),city:de().min(3,"City Too Short!").required("Required"),phone:de().matches(/^\+\d{12}$/,"Phone must have + and length 12").min(13,"Phone Too Short!").max(13,"Phone Too long").required("Required")});return r.jsxs(r.Fragment,{children:[d?r.jsx(Qn,{}):r.jsx(Jn,{initialValues:{name:c.user.name?c.user.name:"",date:c.user.date?c.user.date.split("-").reverse().join("-"):"",email:c.user.email?c.user.email:"",city:(c.user.city,c.user.city),phone:c.user.phone?c.user.phone:""},validationSchema:I,onSubmit:b,children:({errors:f,touched:w})=>r.jsxs(Zn,{children:[r.jsx(vr,{isUserUpdate:e,setUserPhoto:l}),r.jsxs(et,{children:[r.jsxs(nt,{children:[r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"name",children:"Name:"}),r.jsx(ee,{type:"text",name:"name",id:"name",placeholder:"Anna",disabled:e})]}),f.name&&w.name?r.jsx(X,{children:f.name}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"email",children:"Email:"}),r.jsx(ee,{name:"email",id:"email",placeholder:"anna00@gmail.com|",disabled:e,className:`${w.name&&f.name?"is-invalid":""}`})]}),f.email&&w.email?r.jsx(X,{children:f.email}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"birthDate",children:"Birthday:"}),r.jsx(ee,{type:"date",name:"date",id:"date",placeholder:"00-00-0000",disabled:e})]}),f.date&&w.date?r.jsx(X,{children:f.date}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"phone",children:"Phone:"}),r.jsx(ee,{type:"phone",name:"phone",id:"phone",placeholder:"+38000000000",disabled:e})]}),f.phone&&w.phone?r.jsx(X,{children:f.phone}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"city",children:"City:"}),r.jsx(ee,{type:"text",name:"city",id:"city",placeholder:"Kyiv",disabled:e})]}),f.city&&w.city?r.jsx(X,{children:f.city}):null]})]}),e?r.jsxs(Xe,{type:"button",onClick:O,children:[r.jsx(it,{children:r.jsx("use",{href:A+"#iconLogout"})}),r.jsx(rt,{children:"Log Out"})]}):r.jsx(Xe,{children:r.jsx(tt,{type:"submit",children:"Save"})})]})]})}),t?r.jsx(Pn,{isOpen:i,children:r.jsxs(st,{children:[r.jsx(lt,{children:"Already leaving?"}),r.jsxs(pt,{children:[r.jsx(dt,{onClick:()=>i(!1),children:"Cancel"}),r.jsxs(ut,{onClick:()=>S(),children:["Yes",r.jsx(ot,{children:r.jsx("use",{href:A+"#iconLogout"})})]})]}),r.jsx(ct,{onClick:()=>i(!1),children:r.jsx(at,{children:r.jsx("use",{href:A+"#iconCross"})})})]})}):r.jsx("div",{})]})},Dr=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  }
  @media screen and (min-width: 1280px) {
    max-width: 394px;
    margin-bottom: 16px;
  }
`,Er=s.h2`
  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`,Fr=s.div`
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
`,xn=s.button`
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
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`,kr=s.svg`
  fill: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Cr=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Ar=s.svg`
  fill: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
`,Pr=s.svg`
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
`;const Or=s.h3`
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
`,Sr=s.p`
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
`,Tr=s.button`
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
`,_r=s.div`
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
`,zr=s.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`,Ir=()=>{const e=Me(),n=Wn(Xn);u.useEffect(()=>{const l=c=>{c.keyCode===27&&e(Pe(!1))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e]);const[t,i]=u.useState(!0),o=()=>{e(Pe(!1))};return r.jsx(r.Fragment,{children:r.jsxs(Dr,{children:[r.jsx(Er,{children:"My information:"}),r.jsxs(Fr,{children:[t?r.jsx(xn,{onClick:()=>i(l=>!l),children:r.jsx(kr,{children:r.jsx("use",{href:A+"#iconEdit"})})}):r.jsx(xn,{onClick:()=>i(l=>!l),children:r.jsx(Cr,{children:r.jsx("use",{href:A+"#iconCross"})})}),r.jsx(jr,{isUserUpdate:t,setIsUserUpdate:i}),n&&r.jsx(Pn,{children:r.jsxs(_r,{children:[r.jsx(Or,{children:"Congrats!"}),r.jsx(Sr,{children:"Youre registration is success"}),r.jsxs(Tr,{onClick:()=>{o()},type:"button",children:["Go to profile",r.jsx(Ar,{children:r.jsx("use",{href:A+"#iconPaw"})})]}),r.jsx(zr,{onClick:()=>{o()},children:r.jsx(Pr,{children:r.jsx("use",{href:A+"#iconCross"})})})]})})]})]})})},Mr=D.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Rr=D.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`;D.li`
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
`;D.img`
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
`;D.li`
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
`;D.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54adff;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;D.h3`
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
`;D.p`
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
`;D.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;D.button`
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
`;const Lr=D.div`
  position: relative;
  display: flex;
  margin-bottom: 31px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
    max-width: 704px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
    max-width: 821px;
  }
`,Br=D(Kn)`
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
  right: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media only screen and (min-width: 768px) {
    position: relative;
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
      width: 100%;
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
`;D.svg`
  fill: none;
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;const Ur=D.svg`
  stroke: var(--clr-bcg);
  width: 24px;
  height: 24px;
`,$r=s.p`
  width: 300px;
  margin: 0 auto 130px;
  text-align: center;
      @media only screen and (min-width: 1280px) {
      width: 821px;
    }

`,Wr=()=>r.jsx(r.Fragment,{children:r.jsx($r,{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})}),Kr=s.li`
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
`,Nr=s.img`
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
`,fe=s.li`
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
`;const Hr=s.button`
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
    transform: scale(1.1);
  }
  }

`,Yr=s.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`;function qr({pets:e}){const[n]=Nn(),t=async i=>{await n(i).unwrap()};return r.jsxs(Kr,{children:[r.jsx(Hr,{onClick:()=>t(e._id),children:r.jsx(Yr,{children:r.jsx("use",{href:A+"#iconTrash"})})}),r.jsx(Nr,{src:e.avatarURL,alt:"user-pet"}),r.jsxs("ul",{children:[r.jsxs(fe,{children:[r.jsx("h3",{children:"Name: "}),r.jsx("p",{children:e.name})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:"Date of birth: "}),r.jsx("p",{children:e.date})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:"Type: "}),r.jsx("p",{children:e.type})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:" Comments: "}),r.jsx("p",{children:e.comments})]})]})]})}const Gr=()=>{var n,t;const{data:e=[]}=Ie();return r.jsxs("div",{children:[r.jsxs(Lr,{children:[r.jsx(Mr,{children:"My pets:"}),r.jsx(Br,{to:"/add-pet",state:{from:"/user"},children:r.jsxs("div",{children:["Add pet",r.jsx(Ur,{children:r.jsx("use",{href:A+"#iconPlusSmall"})})]})})]}),r.jsx(Rr,{children:e.pets&&((n=e.pets)==null?void 0:n.map(i=>r.jsx(qr,{pets:i},i._id)))}),((t=e.pets)==null?void 0:t.length)===0&&r.jsx(Wr,{})]})},Vr=D.div`
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
`;function ei(){return r.jsx(Hn,{children:r.jsxs(Vr,{children:[r.jsx(Ir,{}),r.jsx(Gr,{})]})})}export{ei as default};
