import{s,g as Mn,_ as K,e as N,f as Je,h as Qe,r as u,R as Rn,i as Ie,j as r,b as C,k as Me,l as Ln,m as Oe,o as Bn,c as Un,p as $n,a as Wn,n as v,L as Kn,q as Nn}from"./index-e285596f.js";import{F as qn,a as Hn,c as Yn,b as de,d as Gn,e as Vn}from"./index.esm-926f1133.js";import{a as Jn}from"./selectors-9c63f203.js";s.div`
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
`;const Qn=s(qn)`
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
`,Xn=s.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  @media screen and (min-width: 768px) {
  gap: 15px 0px;
  }
`,Zn=s.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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
`,ee=s(Hn)`
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
  cursor: pointer;
  border: none;
  font-size: 18px;
  @media screen and (min-width: 768px) {
  justify-content:flex-end;
  
  }

`,et=s.button`
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
`,nt=s.p`
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
`,tt=s.svg`
  width: 24px;
  height: 24px;
  stroke: #54adff;
  fill: none;
`,rt=s.svg`
  stroke: var(--clr-bcg-user);
  fill: none;
  width: 24px;
  height: 24px;
`,it=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,ot=s.div`
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
`,at=s.h3`
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
`,st=s.button`
  position:absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color:transparent;
  @media screen and (min-width: 768px) {
  top: 24px;
  right: 24px;
  }
`,lt=s.div`
  display: flex;
  flex-direction:column;
  gap:8px 0px ;
  @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:center;
    gap: 0px  17px;
  }
`,ct=s.button`
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
`,pt=s.button`
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
`;var mn={exports:{}},dt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ut=dt,ft=ut;function gn(){}function hn(){}hn.resetWarningCache=gn;var xt=function(){function e(i,o,l,c,d,g){if(g!==ft){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:hn,resetWarningCache:gn};return t.PropTypes=t,t};mn.exports=xt();var mt=mn.exports;const x=Mn(mt);var gt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,n){var t=ht(e);if(typeof t.path!="string"){var i=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof n=="string"?n:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function ht(e){var n=e.name,t=n&&n.lastIndexOf(".")!==-1;if(t&&!e.type){var i=n.split(".").pop().toLowerCase(),o=gt.get(i);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var yt=[".DS_Store","Thumbs.db"];function bt(e){return K(this,void 0,void 0,function(){return N(this,function(n){return xe(e)&&vt(e.dataTransfer)?[2,Ft(e.dataTransfer,e.type)]:wt(e)?[2,jt(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Dt(e)]:[2,[]]})})}function vt(e){return xe(e)}function wt(e){return xe(e)&&xe(e.target)}function xe(e){return typeof e=="object"&&e!==null}function jt(e){return Pe(e.target.files).map(function(n){return te(n)})}function Dt(e){return K(this,void 0,void 0,function(){var n;return N(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(i){return i.getFile()}))];case 1:return n=t.sent(),[2,n.map(function(i){return te(i)})]}})})}function Ft(e,n){return K(this,void 0,void 0,function(){var t,i;return N(this,function(o){switch(o.label){case 0:return e.items?(t=Pe(e.items).filter(function(l){return l.kind==="file"}),n!=="drop"?[2,t]:[4,Promise.all(t.map(Et))]):[3,2];case 1:return i=o.sent(),[2,Ze(yn(i))];case 2:return[2,Ze(Pe(e.files).map(function(l){return te(l)}))]}})})}function Ze(e){return e.filter(function(n){return yt.indexOf(n.name)===-1})}function Pe(e){if(e===null)return[];for(var n=[],t=0;t<e.length;t++){var i=e[t];n.push(i)}return n}function Et(e){if(typeof e.webkitGetAsEntry!="function")return en(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?bn(n):en(e)}function yn(e){return e.reduce(function(n,t){return Je(Je([],Qe(n),!1),Qe(Array.isArray(t)?yn(t):[t]),!1)},[])}function en(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=te(n);return Promise.resolve(t)}function kt(e){return K(this,void 0,void 0,function(){return N(this,function(n){return[2,e.isDirectory?bn(e):At(e)]})})}function bn(e){var n=e.createReader();return new Promise(function(t,i){var o=[];function l(){var c=this;n.readEntries(function(d){return K(c,void 0,void 0,function(){var g,w,k;return N(this,function(b){switch(b.label){case 0:if(d.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=b.sent(),t(g),[3,4];case 3:return w=b.sent(),i(w),[3,4];case 4:return[3,6];case 5:k=Promise.all(d.map(kt)),o.push(k),l(),b.label=6;case 6:return[2]}})})},function(d){i(d)})}l()})}function At(e){return K(this,void 0,void 0,function(){return N(this,function(n){return[2,new Promise(function(t,i){e.file(function(o){var l=te(o,e.fullPath);t(l)},function(o){i(o)})})]})})}var Ct=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),i=e.name||"",o=(e.type||"").toLowerCase(),l=o.replace(/\/.*$/,"");return t.some(function(c){var d=c.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?l===d.replace(/\/.*$/,""):o===d})}return!0};function nn(e){return St(e)||Pt(e)||wn(e)||Ot()}function Ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function St(e){if(Array.isArray(e))return Se(e)}function tn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?tn(Object(t),!0).forEach(function(i){vn(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function vn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e,n){return zt(e)||_t(e,n)||wn(e,n)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wn(e,n){if(e){if(typeof e=="string")return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}}function Se(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function _t(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,c,d;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(i.push(c.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,d=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw d}}return i}}function zt(e){if(Array.isArray(e))return e}var It="file-invalid-type",Mt="file-too-large",Rt="file-too-small",Lt="too-many-files",Bt=function(n){n=Array.isArray(n)&&n.length===1?n[0]:n;var t=Array.isArray(n)?"one of ".concat(n.join(", ")):n;return{code:It,message:"File type must be ".concat(t)}},on=function(n){return{code:Mt,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},an=function(n){return{code:Rt,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Ut={code:Lt,message:"Too many files"};function jn(e,n){var t=e.type==="application/x-moz-file"||Ct(e,n);return[t,t?null:Bt(n)]}function Dn(e,n,t){if(L(e.size))if(L(n)&&L(t)){if(e.size>t)return[!1,on(t)];if(e.size<n)return[!1,an(n)]}else{if(L(n)&&e.size<n)return[!1,an(n)];if(L(t)&&e.size>t)return[!1,on(t)]}return[!0,null]}function L(e){return e!=null}function $t(e){var n=e.files,t=e.accept,i=e.minSize,o=e.maxSize,l=e.multiple,c=e.maxFiles,d=e.validator;return!l&&n.length>1||l&&c>=1&&n.length>c?!1:n.every(function(g){var w=jn(g,t),k=ne(w,1),b=k[0],P=Dn(g,i,o),S=ne(P,1),I=S[0],f=d?d(g):null;return b&&I&&!f})}function me(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ue(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function sn(e){e.preventDefault()}function Wt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Kt(e){return e.indexOf("Edge/")!==-1}function Nt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Wt(e)||Kt(e)}function O(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(i){for(var o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];return n.some(function(d){return!me(i)&&d&&d.apply(void 0,[i].concat(l)),me(i)})}}function qt(){return"showOpenFilePicker"in window}function Ht(e){if(L(e)){var n=Object.entries(e).filter(function(t){var i=ne(t,2),o=i[0],l=i[1],c=!0;return Fn(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(l)||!l.every(En))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,i){var o=ne(i,2),l=o[0],c=o[1];return rn(rn({},t),{},vn({},l,c))},{});return[{description:"Files",accept:n}]}return e}function Yt(e){if(L(e))return Object.entries(e).reduce(function(n,t){var i=ne(t,2),o=i[0],l=i[1];return[].concat(nn(n),[o],nn(l))},[]).filter(function(n){return Fn(n)||En(n)}).join(",")}function Gt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Vt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Fn(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function En(e){return/^.*\.[\w]+$/.test(e)}var Jt=["children"],Qt=["open"],Xt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Zt=["refKey","onChange","onClick"];function er(e){return rr(e)||tr(e)||kn(e)||nr()}function nr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rr(e){if(Array.isArray(e))return Te(e)}function Ce(e,n){return ar(e)||or(e,n)||kn(e,n)||ir()}function ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(e,n){if(e){if(typeof e=="string")return Te(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Te(e,n)}}function Te(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function or(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,c,d;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(i.push(c.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,d=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw d}}return i}}function ar(e){if(Array.isArray(e))return e}function ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ln(Object(t),!0).forEach(function(i){_e(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ln(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function _e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ge(e,n){if(e==null)return{};var t=sr(e,n),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function sr(e,n){if(e==null)return{};var t={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Re=u.forwardRef(function(e,n){var t=e.children,i=ge(e,Jt),o=Cn(i),l=o.open,c=ge(o,Qt);return u.useImperativeHandle(n,function(){return{open:l}},[l]),Rn.createElement(u.Fragment,null,t(m(m({},c),{},{open:l})))});Re.displayName="Dropzone";var An={disabled:!1,getFilesFromEvent:bt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Re.defaultProps=An;Re.propTypes={children:x.func,accept:x.objectOf(x.arrayOf(x.string)),multiple:x.bool,preventDropOnDocument:x.bool,noClick:x.bool,noKeyboard:x.bool,noDrag:x.bool,noDragEventsBubbling:x.bool,minSize:x.number,maxSize:x.number,maxFiles:x.number,disabled:x.bool,getFilesFromEvent:x.func,onFileDialogCancel:x.func,onFileDialogOpen:x.func,useFsAccessApi:x.bool,autoFocus:x.bool,onDragEnter:x.func,onDragLeave:x.func,onDragOver:x.func,onDrop:x.func,onDropAccepted:x.func,onDropRejected:x.func,onError:x.func,validator:x.func};var ze={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Cn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=m(m({},An),e),t=n.accept,i=n.disabled,o=n.getFilesFromEvent,l=n.maxSize,c=n.minSize,d=n.multiple,g=n.maxFiles,w=n.onDragEnter,k=n.onDragLeave,b=n.onDragOver,P=n.onDrop,S=n.onDropAccepted,I=n.onDropRejected,f=n.onFileDialogCancel,j=n.onFileDialogOpen,q=n.useFsAccessApi,M=n.autoFocus,T=n.preventDropOnDocument,z=n.noClick,H=n.noKeyboard,re=n.noDrag,_=n.noDragEventsBubbling,he=n.onError,Y=n.validator,G=u.useMemo(function(){return Yt(t)},[t]),Le=u.useMemo(function(){return Ht(t)},[t]),ye=u.useMemo(function(){return typeof j=="function"?j:cn},[j]),ie=u.useMemo(function(){return typeof f=="function"?f:cn},[f]),D=u.useRef(null),A=u.useRef(null),Pn=u.useReducer(lr,ze),Be=Ce(Pn,2),be=Be[0],F=Be[1],Sn=be.isFocused,Ue=be.isFileDialogActive,oe=u.useRef(typeof window<"u"&&window.isSecureContext&&q&&qt()),$e=function(){!oe.current&&Ue&&setTimeout(function(){if(A.current){var p=A.current.files;p.length||(F({type:"closeDialog"}),ie())}},300)};u.useEffect(function(){return window.addEventListener("focus",$e,!1),function(){window.removeEventListener("focus",$e,!1)}},[A,Ue,ie,oe]);var B=u.useRef([]),We=function(p){D.current&&D.current.contains(p.target)||(p.preventDefault(),B.current=[])};u.useEffect(function(){return T&&(document.addEventListener("dragover",sn,!1),document.addEventListener("drop",We,!1)),function(){T&&(document.removeEventListener("dragover",sn),document.removeEventListener("drop",We))}},[D,T]),u.useEffect(function(){return!i&&M&&D.current&&D.current.focus(),function(){}},[D,M,i]);var R=u.useCallback(function(a){he?he(a):console.error(a)},[he]),Ke=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a),B.current=[].concat(er(B.current),[a.target]),ue(a)&&Promise.resolve(o(a)).then(function(p){if(!(me(a)&&!_)){var h=p.length,y=h>0&&$t({files:p,accept:G,minSize:c,maxSize:l,multiple:d,maxFiles:g,validator:Y}),E=h>0&&!y;F({isDragAccept:y,isDragReject:E,isDragActive:!0,type:"setDraggedFiles"}),w&&w(a)}}).catch(function(p){return R(p)})},[o,w,R,_,G,c,l,d,g,Y]),Ne=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a);var p=ue(a);if(p&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return p&&b&&b(a),!1},[b,_]),qe=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a);var p=B.current.filter(function(y){return D.current&&D.current.contains(y)}),h=p.indexOf(a.target);h!==-1&&p.splice(h,1),B.current=p,!(p.length>0)&&(F({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ue(a)&&k&&k(a))},[D,k,_]),ae=u.useCallback(function(a,p){var h=[],y=[];a.forEach(function(E){var V=jn(E,G),W=Ce(V,2),we=W[0],je=W[1],De=Dn(E,c,l),pe=Ce(De,2),Fe=pe[0],Ee=pe[1],ke=Y?Y(E):null;if(we&&Fe&&!ke)h.push(E);else{var Ae=[je,Ee];ke&&(Ae=Ae.concat(ke)),y.push({file:E,errors:Ae.filter(function(In){return In})})}}),(!d&&h.length>1||d&&g>=1&&h.length>g)&&(h.forEach(function(E){y.push({file:E,errors:[Ut]})}),h.splice(0)),F({acceptedFiles:h,fileRejections:y,type:"setFiles"}),P&&P(h,y,p),y.length>0&&I&&I(y,p),h.length>0&&S&&S(h,p)},[F,d,G,c,l,g,P,S,I,Y]),se=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a),B.current=[],ue(a)&&Promise.resolve(o(a)).then(function(p){me(a)&&!_||ae(p,a)}).catch(function(p){return R(p)}),F({type:"reset"})},[o,ae,R,_]),U=u.useCallback(function(){if(oe.current){F({type:"openDialog"}),ye();var a={multiple:d,types:Le};window.showOpenFilePicker(a).then(function(p){return o(p)}).then(function(p){ae(p,null),F({type:"closeDialog"})}).catch(function(p){Gt(p)?(ie(p),F({type:"closeDialog"})):Vt(p)?(oe.current=!1,A.current?(A.current.value=null,A.current.click()):R(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):R(p)});return}A.current&&(F({type:"openDialog"}),ye(),A.current.value=null,A.current.click())},[F,ye,ie,q,ae,R,Le,d]),He=u.useCallback(function(a){!D.current||!D.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),U())},[D,U]),Ye=u.useCallback(function(){F({type:"focus"})},[]),Ge=u.useCallback(function(){F({type:"blur"})},[]),Ve=u.useCallback(function(){z||(Nt()?setTimeout(U,0):U())},[z,U]),$=function(p){return i?null:p},ve=function(p){return H?null:$(p)},le=function(p){return re?null:$(p)},ce=function(p){_&&p.stopPropagation()},Tn=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,y=a.role,E=a.onKeyDown,V=a.onFocus,W=a.onBlur,we=a.onClick,je=a.onDragEnter,De=a.onDragOver,pe=a.onDragLeave,Fe=a.onDrop,Ee=ge(a,Xt);return m(m(_e({onKeyDown:ve(O(E,He)),onFocus:ve(O(V,Ye)),onBlur:ve(O(W,Ge)),onClick:$(O(we,Ve)),onDragEnter:le(O(je,Ke)),onDragOver:le(O(De,Ne)),onDragLeave:le(O(pe,qe)),onDrop:le(O(Fe,se)),role:typeof y=="string"&&y!==""?y:"presentation"},h,D),!i&&!H?{tabIndex:0}:{}),Ee)}},[D,He,Ye,Ge,Ve,Ke,Ne,qe,se,H,re,i]),_n=u.useCallback(function(a){a.stopPropagation()},[]),zn=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,y=a.onChange,E=a.onClick,V=ge(a,Zt),W=_e({accept:G,multiple:d,type:"file",style:{display:"none"},onChange:$(O(y,se)),onClick:$(O(E,_n)),tabIndex:-1},h,A);return m(m({},W),V)}},[A,t,d,se,i]);return m(m({},be),{},{isFocused:Sn&&!i,getRootProps:Tn,getInputProps:zn,rootRef:D,inputRef:A,open:$(U)})}function lr(e,n){switch(n.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},ze),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return m({},ze);default:return e}}function cn(){}const pn=s.div`
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
`,cr=s.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`,pr=s.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`,dr=s.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ur=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-height: 224px;
`,fr=s.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`,xr=s.svg`
  width: 24px;
  height: 24px;
  stroke:var(--clr-brand-blue);
`,mr=s.svg`
  fill: none;

`,gr=s.svg`
  fill: none;
  stroke:var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,hr=s.svg`
  stroke:var(--clr-brand-red);
  width: 24px;
  height: 24px;
`,yr=({isUserUpdate:e,setUserPhoto:n})=>{const{data:t=[],isLoading:i}=Ie(),[o,l]=u.useState(null),[c,d]=u.useState(!1),g=S=>{l(S[0])},{getRootProps:w,getInputProps:k,isDragActive:b}=Cn({onDrop:g,accept:{"image/jpeg":[],"image/png":[]}});u.useEffect(()=>{d(!1)},[o]);const P=()=>{n(o),d(!0)};return console.log(i),r.jsx(r.Fragment,{children:i?r.jsx("h1",{children:"loading.."}):r.jsx(pn,{children:r.jsxs(pn,{children:[r.jsx("input",{type:"file",name:"image",...k()}),r.jsxs(ur,{children:[o?r.jsx(dn,{children:r.jsx(un,{src:URL.createObjectURL(o),alt:"User's file",style:{maxWidth:"300px"}})}):r.jsx(dn,{children:r.jsx(un,{src:t.user.avatarURL?t.user.avatarURL:"https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png",alt:"Default avatar",style:{maxWidth:"300px"}})}),!e&&r.jsx(fn,{children:o&&!c?r.jsxs(fn,{children:[r.jsx(cr,{type:"button",onClick:P,children:r.jsx(gr,{children:r.jsx("use",{href:C+"#iconCheck"})})}),r.jsx(pr,{children:"Confirm"}),r.jsx(dr,{type:"button",onClick:()=>l(null),children:r.jsx(hr,{children:r.jsx("use",{href:C+"#iconCross"})})})]}):r.jsxs(fr,{...w(),className:`dropzone ${b?"active":""}`,type:"button",children:[r.jsx(xr,{children:r.jsx(mr,{children:r.jsx("use",{href:C+"#iconCamera"})})}),"Edit photo"]})})]})]})})})},br=s.div`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--clr-backdrop);
    z-index:2;
`;function On({children:e,isOpen:n}){const t=Me(),[i,o]=u.useState(!0),l=c=>{c.target.id==="4"&&(console.log(c.target.id),o(!1)(t(Oe(!1))),n&&n(!1))};return i&&Ln.createPortal(r.jsx(br,{id:"4",onClick:c=>l(c),children:e}),document.getElementById("modal-root"))}const vr=({isUserUpdate:e,setIsUserUpdate:n})=>{const[t,i]=u.useState(!1),[o,l]=u.useState(null),{data:c,isLoading:d}=Ie(),[g]=Bn(),w=Un(),k=Me(),b=f=>{f.date.split("-").reverse().join("-");const j=new FormData,q=T=>{const z=new Date(T),H=String(z.getDate()).padStart(2,"0"),re=String(z.getMonth()+1).padStart(2,"0"),_=z.getFullYear();return`${H}-${re}-${_}`};let M;o?M={name:f.name,email:f.email,date:q(f.date),phone:f.phone,city:f.city,image:o}:M={name:f.name,email:f.email,date:q(f.date),phone:f.phone,city:f.city},Object.entries(M).forEach(([T,z])=>{j.append(T,z)}),console.log(M),console.log(o),g(j).unwrap(),n(T=>!T)},P=()=>{i(!0)},S=()=>{k($n()),w("/login"),localStorage.removeItem("persist:auth")};u.useEffect(()=>{const f=j=>{j.keyCode===27&&i(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const I=Yn({name:de().min(3,"Name Too Short!").max(16,"Too Long!").required("Required"),date:Gn().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),email:de().email("Invalid email").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Required"),city:de().min(2,"City Too Short!").required("Required"),phone:de().min(13,"Phone Too Short!").max(13).required("Required")});return r.jsxs(r.Fragment,{children:[d?r.jsx("h1",{children:"loading.."}):r.jsx(Vn,{initialValues:{name:c.user.name?c.user.name:"",date:c.user.date?c.user.date.split("-").reverse().join("-"):"",email:c.user.email?c.user.email:"",city:(c.user.city,c.user.city),phone:c.user.phone?c.user.phone:""},validationSchema:I,onSubmit:b,children:({errors:f,touched:j})=>r.jsxs(Qn,{children:[r.jsx(yr,{isUserUpdate:e,setUserPhoto:l}),r.jsxs(Xn,{children:[r.jsxs(Zn,{children:[r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"name",children:"Name:"}),r.jsx(ee,{type:"text",name:"name",id:"name",placeholder:"Anna",disabled:e})]}),f.name&&j.name?r.jsx(X,{children:f.name}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"email",children:"Email:"}),r.jsx(ee,{type:"email",name:"email",id:"email",placeholder:"anna00@gmail.com|",disabled:e,className:`${j.name&&f.name?"is-invalid":""}`})]}),f.email&&j.email?r.jsx(X,{children:f.email}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"birthDate",children:"Birthday:"}),r.jsx(ee,{type:"date",name:"date",id:"date",placeholder:"00-00-0000",disabled:e,minLength:"10",required:!0})]}),f.date&&j.date?r.jsx(X,{children:f.date}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"phone",children:"Phone:"}),r.jsx(ee,{type:"text",name:"phone",id:"phone",placeholder:"+38000000000",disabled:e,minLength:"11",maxLength:"17",pattern:"+[0-9]{3}-[0-9]{3}-[0-9]{7}",title:"+xx xxx xxxxxxx",required:!0})]}),f.phone&&j.phone?r.jsx(X,{children:f.phone}):null]}),r.jsxs(J,{children:[r.jsxs(Q,{children:[r.jsx(Z,{htmlFor:"city",children:"City:"}),r.jsx(ee,{type:"text",name:"city",id:"city",placeholder:"Kyiv",disabled:e,minLength:"3",required:!0})]}),f.city&&j.city?r.jsx(X,{children:f.city}):null]})]}),e?r.jsxs(Xe,{type:"button",onClick:P,children:[r.jsx(tt,{children:r.jsx("use",{href:C+"#iconLogout"})}),r.jsx(nt,{children:"Log Out"})]}):r.jsx(Xe,{children:r.jsx(et,{type:"submit",children:"Save"})})]})]})}),t?r.jsx(On,{isOpen:i,children:r.jsxs(ot,{children:[r.jsx(at,{children:"Already leaving?"}),r.jsxs(lt,{children:[r.jsx(ct,{onClick:()=>i(!1),children:"Cancel"}),r.jsxs(pt,{onClick:()=>S(),children:["Yes",r.jsx(rt,{children:r.jsx("use",{href:C+"#iconLogout"})})]})]}),r.jsx(st,{onClick:()=>i(!1),children:r.jsx(it,{children:r.jsx("use",{href:C+"#iconCross"})})})]})}):r.jsx("div",{})]})},wr=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:46px;
    @media screen and (min-width: 375px) {
      max-width: 320px;
  }
    @media screen and (min-width: 768px) {
      max-width: 704px;  
  }
    @media screen and (min-width: 1280px) {
      max-width: 394px;  
  }
`,jr=s.h2`
  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-weight: 500;
  line-height: normal;
`,Dr=s.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 20px 8px;

  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
      @media screen and (min-width: 768px) {
  padding: 20px ;
  padding-right:76px;
  }
  @media screen and (min-width: 1280px) {
  padding:20px 24px 21px 16px;
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
        @media screen and (min-width: 768px) {
  top: 18px;
  right: 18px;
  }
`,Fr=s.svg`
fill: var(--clr-brand-blue);
width: 24px;
height: 24px;
`,Er=s.svg`
stroke: var(--clr-brand-blue);
width: 24px;
height: 24px;
`,kr=s.svg`
fill: var(--clr-primary-inv);
width: 24px;
height: 24px;

`,Ar=s.svg`
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
`;const Cr=s.h3`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  margin-bottom:24px;

  @media screen and (min-width: 768px) {
  font-size: 36px;
  letter-spacing: 1.44px;
  margin-bottom:52px;
  }
`,Or=s.p`
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.64px;

margin-bottom:40px;

  @media screen and (min-width: 768px) {
  font-size: 24px;
  letter-spacing: 0.94px;
  margin-bottom:60px;
  }
`,Pr=s.button`
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  margin-left:auto;
  margin-right:auto;
  gap: 12px;
  color: var(--clr-bcg);
  border-radius: 40px;
  border:none;
  background: var(--blue-links, #54ADFF);
`,Sr=s.div`
    background-color:var(--clr-bcg-user);
    border-radius:20px;
    padding: 68px  16px 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:5;
    @media screen and (min-width: 768px) {
    padding: 60px  129px 60px;
    width: 608px;
  }
`,Tr=s.button`
    position:absolute;
    top: 16px;
    right: 16px;
    border: none;
    background-color:transparent;
      @media screen and (min-width: 768px) {
      top: 24px;
      right: 24px;
  }
`,_r=()=>{const e=Me(),n=Wn(Jn);u.useEffect(()=>{const l=c=>{c.keyCode===27&&(e(Oe(!1)),console.log("im here"))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]);const[t,i]=u.useState(!0),o=()=>{e(Oe(!1))};return r.jsx(r.Fragment,{children:r.jsxs(wr,{children:[r.jsx(jr,{children:"My information:"}),r.jsxs(Dr,{children:[t?r.jsx(xn,{onClick:()=>i(l=>!l),children:r.jsx(Fr,{children:r.jsx("use",{href:C+"#iconEdit"})})}):r.jsx(xn,{onClick:()=>i(l=>!l),children:r.jsx(Er,{children:r.jsx("use",{href:C+"#iconCross"})})}),r.jsx(vr,{isUserUpdate:t,setIsUserUpdate:i}),n&&r.jsx(On,{children:r.jsxs(Sr,{children:[r.jsx(Cr,{children:"Congrats!"}),r.jsx(Or,{children:"Youre registration is success"}),r.jsxs(Pr,{onClick:()=>{o()},type:"button",children:["Go to profile",r.jsx(kr,{children:r.jsx("use",{href:C+"#iconPaw"})})]}),r.jsx(Tr,{onClick:()=>{o()},children:r.jsx(Ar,{children:r.jsx("use",{href:C+"#iconCross"})})})]})})]})]})})},zr=v.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`,Ir=v.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column; 
  gap: 20px;
  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`;v.li`
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background:var(--clr-bcg-user);
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
`;v.img`
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
`;v.li`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 1280px) {
    font-size:16px;
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
`;v.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54ADFF;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;v.h3`
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
`;v.p`
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
`;v.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;v.button`
  position: absolute;
  top: 272px;
  right: 16px;
  
  border: none;
  background-color:transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
  top: 20px;
  right: 20px;
  }

`;const Mr=v.div`
  display: flex;
  margin-bottom: 31px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

`,Rr=v(Kn)`
  border-radius: 50%;
  padding: 20px 18px 16px;
  color: var(--clr-primary-inv);
  background:  var(--clr-brand-blue-grd);
  margin-left:auto;
  font-size: 12px;

  /* z-index: 44px; */

  border: none;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  gap: 4px 0px ;


  position: fixed;
  bottom:30px;
  right: 20px;
  z-index:1;
  @media only screen and (min-width: 768px) {
    position: static;
    
    flex-direction:row-reverse;
    padding: 8px 20px;
    gap: 0px 8px ;
    border-radius:40px;
    
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.64px;
  }

`;v.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`;const Lr=v.svg`
  stroke:var(--clr-bcg);
  width: 24px;
  height: 24px;

`,Br=s.p`
  width: 300px;
  margin: 0 auto 130px;
  text-align: center;
      @media only screen and (min-width: 1280px) {
      width: 821px;
    }

`,Ur=()=>r.jsx(r.Fragment,{children:r.jsx(Br,{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})}),$r=s.li`
  padding: 16px 20px 40px;
  border-radius: 20px;
  background:var(--clr-bcg-user);
 box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
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
`,Wr=s.img`
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
`;const Kr=s.button`
  position: absolute;
  top: 272px;
  right: 16px;
  
  border: none;
  background-color:transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
  top: 20px;
  right: 20px;
  }

`,Nr=s.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`;function qr({pets:e}){const[n]=Nn(),t=async i=>{await n(i).unwrap()};return r.jsxs($r,{children:[r.jsx(Kr,{onClick:()=>t(e._id),children:r.jsx(Nr,{children:r.jsx("use",{href:C+"#iconTrash"})})}),r.jsx(Wr,{src:e.avatarURL,alt:"user-pet"}),r.jsxs("ul",{children:[r.jsxs(fe,{children:[r.jsx("h3",{children:"Name: "}),r.jsx("p",{children:e.name})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:"Date of birth: "}),r.jsx("p",{children:e.date})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:"Type: "}),r.jsx("p",{children:e.type})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:" Comments: "}),r.jsx("p",{children:e.comments})]})]})]})}const Hr=()=>{var n,t;const{data:e=[]}=Ie();return console.log(e),r.jsxs("div",{children:[r.jsxs(Mr,{children:[r.jsx(zr,{children:"My pets:"}),r.jsxs(Rr,{to:"/add-pet",state:{from:"/user"},children:[r.jsx(Lr,{children:r.jsx("use",{href:C+"#iconPlusSmall"})}),"Add pet"]})]}),r.jsx(Ir,{children:e.pets&&((n=e.pets)==null?void 0:n.map(i=>r.jsx(qr,{pets:i},i._id)))}),((t=e.pets)==null?void 0:t.length)===0&&r.jsx(Ur,{})]})},Yr=v.div`
  @media only screen and (min-width: 1280px) {
    display:flex;
    gap:0px 32px; 
  }
`,Gr=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;function Xr(){return r.jsx(Gr,{children:r.jsxs(Yr,{children:[r.jsx(_r,{}),r.jsx(Hr,{})]})})}export{Xr as default};
