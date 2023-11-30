import{s,g as Rn,_ as K,c as N,d as Ve,e as Je,r as u,R as Ln,f as Ie,j as r,h as C,i as Me,k as xn,l as Bn,m as Pe,n as Un,b as $n,o as Wn,p as D,L as Kn,q as Nn,t as Hn,C as Yn}from"./index-a5fa65c1.js";import{F as qn,a as Gn,c as Xn,b as de,d as Vn,e as Jn}from"./index.esm-4683303f.js";import{L as Qn}from"./Loader-e6a79978.js";import{s as mn}from"./selectors-51ca07e4.js";s.div`
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
`;const Zn=s(qn)`
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
  gap: 10px;
  }
`,V=s.li`
  display: flex;
  flex-direction:column;
  width: 100%;
`,J=s.div`
  display:flex; 
  justify-content: space-between;
  
`,Q=s.div`
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
`,ee=s(Gn)`
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
`,tt=s.button`
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

`,rt=s.button`
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
`,it=s.p`
  color: var(--clr-brand-blue);

  font-size: 16px;
  font-style: normal;
  letter-spacing: 0.64px;
  transition:color 300ms;
`,ot=s.svg`
  width: 24px;
  height: 24px;
  stroke: #54adff;
  fill: none;
  transition: stroke 300ms; 
`,at=s.svg`
  stroke: var(--clr-bcg-user);
  fill: none;
  width: 24px;
  height: 24px;
  transition: stroke 300ms;
`,st=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,lt=s.div`
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
`,ct=s.h3`
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
`,pt=s.button`
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
`,dt=s.div`
  display: flex;
  flex-direction:column;
  gap:8px 0px ;
  @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:center;
    gap: 0px  17px;
  }
`,ut=s.button`
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
`,ft=s.button`
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
`;var gn={exports:{}},xt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mt=xt,gt=mt;function hn(){}function bn(){}bn.resetWarningCache=hn;var ht=function(){function e(i,o,l,c,d,g){if(g!==gt){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:bn,resetWarningCache:hn};return t.PropTypes=t,t};gn.exports=ht();var bt=gn.exports;const x=Rn(bt);var yt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,n){var t=vt(e);if(typeof t.path!="string"){var i=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof n=="string"?n:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function vt(e){var n=e.name,t=n&&n.lastIndexOf(".")!==-1;if(t&&!e.type){var i=n.split(".").pop().toLowerCase(),o=yt.get(i);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var wt=[".DS_Store","Thumbs.db"];function jt(e){return K(this,void 0,void 0,function(){return N(this,function(n){return xe(e)&&Dt(e.dataTransfer)?[2,At(e.dataTransfer,e.type)]:kt(e)?[2,Et(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Ft(e)]:[2,[]]})})}function Dt(e){return xe(e)}function kt(e){return xe(e)&&xe(e.target)}function xe(e){return typeof e=="object"&&e!==null}function Et(e){return Oe(e.target.files).map(function(n){return te(n)})}function Ft(e){return K(this,void 0,void 0,function(){var n;return N(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(i){return i.getFile()}))];case 1:return n=t.sent(),[2,n.map(function(i){return te(i)})]}})})}function At(e,n){return K(this,void 0,void 0,function(){var t,i;return N(this,function(o){switch(o.label){case 0:return e.items?(t=Oe(e.items).filter(function(l){return l.kind==="file"}),n!=="drop"?[2,t]:[4,Promise.all(t.map(Ct))]):[3,2];case 1:return i=o.sent(),[2,Qe(yn(i))];case 2:return[2,Qe(Oe(e.files).map(function(l){return te(l)}))]}})})}function Qe(e){return e.filter(function(n){return wt.indexOf(n.name)===-1})}function Oe(e){if(e===null)return[];for(var n=[],t=0;t<e.length;t++){var i=e[t];n.push(i)}return n}function Ct(e){if(typeof e.webkitGetAsEntry!="function")return Ze(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?vn(n):Ze(e)}function yn(e){return e.reduce(function(n,t){return Ve(Ve([],Je(n),!1),Je(Array.isArray(t)?yn(t):[t]),!1)},[])}function Ze(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=te(n);return Promise.resolve(t)}function Pt(e){return K(this,void 0,void 0,function(){return N(this,function(n){return[2,e.isDirectory?vn(e):Ot(e)]})})}function vn(e){var n=e.createReader();return new Promise(function(t,i){var o=[];function l(){var c=this;n.readEntries(function(d){return K(c,void 0,void 0,function(){var g,v,F;return N(this,function(y){switch(y.label){case 0:if(d.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=y.sent(),t(g),[3,4];case 3:return v=y.sent(),i(v),[3,4];case 4:return[3,6];case 5:F=Promise.all(d.map(Pt)),o.push(F),l(),y.label=6;case 6:return[2]}})})},function(d){i(d)})}l()})}function Ot(e){return K(this,void 0,void 0,function(){return N(this,function(n){return[2,new Promise(function(t,i){e.file(function(o){var l=te(o,e.fullPath);t(l)},function(o){i(o)})})]})})}var St=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),i=e.name||"",o=(e.type||"").toLowerCase(),l=o.replace(/\/.*$/,"");return t.some(function(c){var d=c.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?l===d.replace(/\/.*$/,""):o===d})}return!0};function en(e){return _t(e)||Tt(e)||jn(e)||zt()}function zt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return Se(e)}function nn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function tn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nn(Object(t),!0).forEach(function(i){wn(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function wn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e,n){return Rt(e)||Mt(e,n)||jn(e,n)||It()}function It(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jn(e,n){if(e){if(typeof e=="string")return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}}function Se(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Mt(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,c,d;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(i.push(c.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,d=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw d}}return i}}function Rt(e){if(Array.isArray(e))return e}var Lt="file-invalid-type",Bt="file-too-large",Ut="file-too-small",$t="too-many-files",Wt=function(n){n=Array.isArray(n)&&n.length===1?n[0]:n;var t=Array.isArray(n)?"one of ".concat(n.join(", ")):n;return{code:Lt,message:"File type must be ".concat(t)}},rn=function(n){return{code:Bt,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},on=function(n){return{code:Ut,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Kt={code:$t,message:"Too many files"};function Dn(e,n){var t=e.type==="application/x-moz-file"||St(e,n);return[t,t?null:Wt(n)]}function kn(e,n,t){if(R(e.size))if(R(n)&&R(t)){if(e.size>t)return[!1,rn(t)];if(e.size<n)return[!1,on(n)]}else{if(R(n)&&e.size<n)return[!1,on(n)];if(R(t)&&e.size>t)return[!1,rn(t)]}return[!0,null]}function R(e){return e!=null}function Nt(e){var n=e.files,t=e.accept,i=e.minSize,o=e.maxSize,l=e.multiple,c=e.maxFiles,d=e.validator;return!l&&n.length>1||l&&c>=1&&n.length>c?!1:n.every(function(g){var v=Dn(g,t),F=ne(v,1),y=F[0],O=kn(g,i,o),S=ne(O,1),I=S[0],f=d?d(g):null;return y&&I&&!f})}function me(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ue(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function an(e){e.preventDefault()}function Ht(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Yt(e){return e.indexOf("Edge/")!==-1}function qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ht(e)||Yt(e)}function P(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(i){for(var o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];return n.some(function(d){return!me(i)&&d&&d.apply(void 0,[i].concat(l)),me(i)})}}function Gt(){return"showOpenFilePicker"in window}function Xt(e){if(R(e)){var n=Object.entries(e).filter(function(t){var i=ne(t,2),o=i[0],l=i[1],c=!0;return En(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(l)||!l.every(Fn))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,i){var o=ne(i,2),l=o[0],c=o[1];return tn(tn({},t),{},wn({},l,c))},{});return[{description:"Files",accept:n}]}return e}function Vt(e){if(R(e))return Object.entries(e).reduce(function(n,t){var i=ne(t,2),o=i[0],l=i[1];return[].concat(en(n),[o],en(l))},[]).filter(function(n){return En(n)||Fn(n)}).join(",")}function Jt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Qt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function En(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Fn(e){return/^.*\.[\w]+$/.test(e)}var Zt=["children"],er=["open"],nr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],tr=["refKey","onChange","onClick"];function rr(e){return ar(e)||or(e)||An(e)||ir()}function ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ar(e){if(Array.isArray(e))return ze(e)}function Ce(e,n){return cr(e)||lr(e,n)||An(e,n)||sr()}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function An(e,n){if(e){if(typeof e=="string")return ze(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ze(e,n)}}function ze(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function lr(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i=[],o=!0,l=!1,c,d;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(i.push(c.value),!(n&&i.length===n));o=!0);}catch(g){l=!0,d=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(l)throw d}}return i}}function cr(e){if(Array.isArray(e))return e}function sn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sn(Object(t),!0).forEach(function(i){Te(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function Te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ge(e,n){if(e==null)return{};var t=pr(e,n),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function pr(e,n){if(e==null)return{};var t={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Re=u.forwardRef(function(e,n){var t=e.children,i=ge(e,Zt),o=Pn(i),l=o.open,c=ge(o,er);return u.useImperativeHandle(n,function(){return{open:l}},[l]),Ln.createElement(u.Fragment,null,t(m(m({},c),{},{open:l})))});Re.displayName="Dropzone";var Cn={disabled:!1,getFilesFromEvent:jt,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Re.defaultProps=Cn;Re.propTypes={children:x.func,accept:x.objectOf(x.arrayOf(x.string)),multiple:x.bool,preventDropOnDocument:x.bool,noClick:x.bool,noKeyboard:x.bool,noDrag:x.bool,noDragEventsBubbling:x.bool,minSize:x.number,maxSize:x.number,maxFiles:x.number,disabled:x.bool,getFilesFromEvent:x.func,onFileDialogCancel:x.func,onFileDialogOpen:x.func,useFsAccessApi:x.bool,autoFocus:x.bool,onDragEnter:x.func,onDragLeave:x.func,onDragOver:x.func,onDrop:x.func,onDropAccepted:x.func,onDropRejected:x.func,onError:x.func,validator:x.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Pn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=m(m({},Cn),e),t=n.accept,i=n.disabled,o=n.getFilesFromEvent,l=n.maxSize,c=n.minSize,d=n.multiple,g=n.maxFiles,v=n.onDragEnter,F=n.onDragLeave,y=n.onDragOver,O=n.onDrop,S=n.onDropAccepted,I=n.onDropRejected,f=n.onFileDialogCancel,w=n.onFileDialogOpen,H=n.useFsAccessApi,L=n.autoFocus,z=n.preventDropOnDocument,_=n.noClick,Y=n.noKeyboard,re=n.noDrag,T=n.noDragEventsBubbling,he=n.onError,q=n.validator,G=u.useMemo(function(){return Vt(t)},[t]),Le=u.useMemo(function(){return Xt(t)},[t]),be=u.useMemo(function(){return typeof w=="function"?w:ln},[w]),ie=u.useMemo(function(){return typeof f=="function"?f:ln},[f]),j=u.useRef(null),A=u.useRef(null),Sn=u.useReducer(dr,_e),Be=Ce(Sn,2),ye=Be[0],k=Be[1],zn=ye.isFocused,Ue=ye.isFileDialogActive,oe=u.useRef(typeof window<"u"&&window.isSecureContext&&H&&Gt()),$e=function(){!oe.current&&Ue&&setTimeout(function(){if(A.current){var p=A.current.files;p.length||(k({type:"closeDialog"}),ie())}},300)};u.useEffect(function(){return window.addEventListener("focus",$e,!1),function(){window.removeEventListener("focus",$e,!1)}},[A,Ue,ie,oe]);var B=u.useRef([]),We=function(p){j.current&&j.current.contains(p.target)||(p.preventDefault(),B.current=[])};u.useEffect(function(){return z&&(document.addEventListener("dragover",an,!1),document.addEventListener("drop",We,!1)),function(){z&&(document.removeEventListener("dragover",an),document.removeEventListener("drop",We))}},[j,z]),u.useEffect(function(){return!i&&L&&j.current&&j.current.focus(),function(){}},[j,L,i]);var M=u.useCallback(function(a){he?he(a):console.error(a)},[he]),Ke=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a),B.current=[].concat(rr(B.current),[a.target]),ue(a)&&Promise.resolve(o(a)).then(function(p){if(!(me(a)&&!T)){var h=p.length,b=h>0&&Nt({files:p,accept:G,minSize:c,maxSize:l,multiple:d,maxFiles:g,validator:q}),E=h>0&&!b;k({isDragAccept:b,isDragReject:E,isDragActive:!0,type:"setDraggedFiles"}),v&&v(a)}}).catch(function(p){return M(p)})},[o,v,M,T,G,c,l,d,g,q]),Ne=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a);var p=ue(a);if(p&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return p&&y&&y(a),!1},[y,T]),He=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a);var p=B.current.filter(function(b){return j.current&&j.current.contains(b)}),h=p.indexOf(a.target);h!==-1&&p.splice(h,1),B.current=p,!(p.length>0)&&(k({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ue(a)&&F&&F(a))},[j,F,T]),ae=u.useCallback(function(a,p){var h=[],b=[];a.forEach(function(E){var X=Dn(E,G),W=Ce(X,2),we=W[0],je=W[1],De=kn(E,c,l),pe=Ce(De,2),ke=pe[0],Ee=pe[1],Fe=q?q(E):null;if(we&&ke&&!Fe)h.push(E);else{var Ae=[je,Ee];Fe&&(Ae=Ae.concat(Fe)),b.push({file:E,errors:Ae.filter(function(Mn){return Mn})})}}),(!d&&h.length>1||d&&g>=1&&h.length>g)&&(h.forEach(function(E){b.push({file:E,errors:[Kt]})}),h.splice(0)),k({acceptedFiles:h,fileRejections:b,type:"setFiles"}),O&&O(h,b,p),b.length>0&&I&&I(b,p),h.length>0&&S&&S(h,p)},[k,d,G,c,l,g,O,S,I,q]),se=u.useCallback(function(a){a.preventDefault(),a.persist(),ce(a),B.current=[],ue(a)&&Promise.resolve(o(a)).then(function(p){me(a)&&!T||ae(p,a)}).catch(function(p){return M(p)}),k({type:"reset"})},[o,ae,M,T]),U=u.useCallback(function(){if(oe.current){k({type:"openDialog"}),be();var a={multiple:d,types:Le};window.showOpenFilePicker(a).then(function(p){return o(p)}).then(function(p){ae(p,null),k({type:"closeDialog"})}).catch(function(p){Jt(p)?(ie(p),k({type:"closeDialog"})):Qt(p)?(oe.current=!1,A.current?(A.current.value=null,A.current.click()):M(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):M(p)});return}A.current&&(k({type:"openDialog"}),be(),A.current.value=null,A.current.click())},[k,be,ie,H,ae,M,Le,d]),Ye=u.useCallback(function(a){!j.current||!j.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),U())},[j,U]),qe=u.useCallback(function(){k({type:"focus"})},[]),Ge=u.useCallback(function(){k({type:"blur"})},[]),Xe=u.useCallback(function(){_||(qt()?setTimeout(U,0):U())},[_,U]),$=function(p){return i?null:p},ve=function(p){return Y?null:$(p)},le=function(p){return re?null:$(p)},ce=function(p){T&&p.stopPropagation()},Tn=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,b=a.role,E=a.onKeyDown,X=a.onFocus,W=a.onBlur,we=a.onClick,je=a.onDragEnter,De=a.onDragOver,pe=a.onDragLeave,ke=a.onDrop,Ee=ge(a,nr);return m(m(Te({onKeyDown:ve(P(E,Ye)),onFocus:ve(P(X,qe)),onBlur:ve(P(W,Ge)),onClick:$(P(we,Xe)),onDragEnter:le(P(je,Ke)),onDragOver:le(P(De,Ne)),onDragLeave:le(P(pe,He)),onDrop:le(P(ke,se)),role:typeof b=="string"&&b!==""?b:"presentation"},h,j),!i&&!Y?{tabIndex:0}:{}),Ee)}},[j,Ye,qe,Ge,Xe,Ke,Ne,He,se,Y,re,i]),_n=u.useCallback(function(a){a.stopPropagation()},[]),In=u.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=a.refKey,h=p===void 0?"ref":p,b=a.onChange,E=a.onClick,X=ge(a,tr),W=Te({accept:G,multiple:d,type:"file",style:{display:"none"},onChange:$(P(b,se)),onClick:$(P(E,_n)),tabIndex:-1},h,A);return m(m({},W),X)}},[A,t,d,se,i]);return m(m({},ye),{},{isFocused:zn&&!i,getRootProps:Tn,getInputProps:In,rootRef:j,inputRef:A,open:$(U)})}function dr(e,n){switch(n.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},_e),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return m({},_e);default:return e}}function ln(){}const cn=s.div`
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
`,ur=s.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`,fr=s.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`,xr=s.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`,mr=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-height: 224px;
`,gr=s.div`
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
`,hr=s.svg`
  width: 24px;
  height: 24px;
  stroke:var(--clr-brand-blue);
`,br=s.svg`
  fill: none;

`,yr=s.svg`
  fill: none;
  stroke:var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,vr=s.svg`
  stroke:var(--clr-brand-red);
  width: 24px;
  height: 24px;
`,wr=({isUserUpdate:e,setUserPhoto:n})=>{const{data:t=[],isLoading:i}=Ie(),[o,l]=u.useState(null),[c,d]=u.useState(!1),g=S=>{l(S[0])},{getRootProps:v,getInputProps:F,isDragActive:y}=Pn({onDrop:g,accept:{"image/jpeg":[],"image/png":[]}});u.useEffect(()=>{d(!1)},[o]);const O=()=>{n(o),d(!0)};return r.jsx(r.Fragment,{children:i?r.jsx("h1",{children:"loading.."}):r.jsx(cn,{children:r.jsxs(cn,{children:[r.jsx("input",{type:"file",name:"image",...F()}),r.jsxs(mr,{children:[o?r.jsx(pn,{children:r.jsx(dn,{src:URL.createObjectURL(o),alt:"User's file",style:{maxWidth:"300px"}})}):r.jsx(pn,{children:r.jsx(dn,{src:t.user.avatarURL?t.user.avatarURL:"https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png",alt:"Default avatar",style:{maxWidth:"300px"}})}),!e&&r.jsx(un,{children:o&&!c?r.jsxs(un,{children:[r.jsx(ur,{type:"button",onClick:O,children:r.jsx(yr,{children:r.jsx("use",{href:C+"#iconCheck"})})}),r.jsx(fr,{children:"Confirm"}),r.jsx(xr,{type:"button",onClick:()=>l(null),children:r.jsx(vr,{children:r.jsx("use",{href:C+"#iconCross"})})})]}):r.jsxs(gr,{...v(),className:`dropzone ${y?"active":""}`,type:"button",children:[r.jsx(hr,{children:r.jsx(br,{children:r.jsx("use",{href:C+"#iconCamera"})})}),"Edit photo"]})})]})]})})})},jr=s.div`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--clr-backdrop);
    z-index:101;
`;function On({children:e,isOpen:n}){const t=Me(),i=xn(mn),[o,l]=u.useState(!0),c=d=>{d.target.id==="4"&&(console.log(d.target.id),i&&l(!1)(t(Pe(!1))),n&&n(!1))};return o&&Bn.createPortal(r.jsx(jr,{id:"4",onClick:d=>c(d),children:e}),document.getElementById("modal-root"))}const Dr=({isUserUpdate:e,setIsUserUpdate:n})=>{const[t,i]=u.useState(!1),[o,l]=u.useState(null),{data:c,isLoading:d}=Ie(),[g]=Un(),v=$n(),F=Me(),y=f=>{f.date.split("-").reverse().join("-");const w=new FormData,H=z=>{const _=new Date(z),Y=String(_.getDate()).padStart(2,"0"),re=String(_.getMonth()+1).padStart(2,"0"),T=_.getFullYear();return`${Y}-${re}-${T}`};let L;o?L={name:f.name,email:f.email,date:H(f.date),phone:f.phone,city:f.city,image:o}:L={name:f.name,email:f.email,date:H(f.date),phone:f.phone,city:f.city},Object.entries(L).forEach(([z,_])=>{w.append(z,_)}),g(w).unwrap(),n(z=>!z)},O=()=>{i(!0)},S=()=>{F(Wn()),v("/login"),localStorage.removeItem("persist:auth"),window.location.reload()};u.useEffect(()=>{const f=w=>{w.keyCode===27&&i(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);const I=Xn({name:de().min(3,"Name Too Short!").max(16,"Too Long!").required("Required"),date:Vn().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),email:de().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),city:de().min(3,"City Too Short!").required("Required"),phone:de().matches(/^\+\d{12}$/,"Phone must have + and length 12").min(13,"Phone Too Short!").max(13,"Phone Too long").required("Required")});return r.jsxs(r.Fragment,{children:[d?r.jsx(Qn,{}):r.jsx(Jn,{initialValues:{name:c.user.name?c.user.name:"",date:c.user.date?c.user.date.split("-").reverse().join("-"):"",email:c.user.email?c.user.email:"",city:(c.user.city,c.user.city),phone:c.user.phone?c.user.phone:""},validationSchema:I,onSubmit:y,children:({errors:f,touched:w})=>r.jsxs(Zn,{children:[r.jsx(wr,{isUserUpdate:e,setUserPhoto:l}),r.jsxs(et,{children:[r.jsxs(nt,{children:[r.jsxs(V,{children:[r.jsxs(J,{children:[r.jsx(Z,{htmlFor:"name",children:"Name:"}),r.jsx(ee,{type:"text",name:"name",id:"name",placeholder:"Anna",disabled:e})]}),f.name&&w.name?r.jsx(Q,{children:f.name}):null]}),r.jsxs(V,{children:[r.jsxs(J,{children:[r.jsx(Z,{htmlFor:"email",children:"Email:"}),r.jsx(ee,{name:"email",id:"email",placeholder:"anna00@gmail.com|",disabled:e,className:`${w.name&&f.name?"is-invalid":""}`})]}),f.email&&w.email?r.jsx(Q,{children:f.email}):null]}),r.jsxs(V,{children:[r.jsxs(J,{children:[r.jsx(Z,{htmlFor:"birthDate",children:"Birthday:"}),r.jsx(ee,{type:"date",name:"date",id:"date",placeholder:"00-00-0000",disabled:e})]}),f.date&&w.date?r.jsx(Q,{children:f.date}):null]}),r.jsxs(V,{children:[r.jsxs(J,{children:[r.jsx(Z,{htmlFor:"phone",children:"Phone:"}),r.jsx(ee,{type:"phone",name:"phone",id:"phone",placeholder:"+38000000000",disabled:e})]}),f.phone&&w.phone?r.jsx(Q,{children:f.phone}):null]}),r.jsxs(V,{children:[r.jsxs(J,{children:[r.jsx(Z,{htmlFor:"city",children:"City:"}),r.jsx(ee,{type:"text",name:"city",id:"city",placeholder:"Kyiv",disabled:e})]}),f.city&&w.city?r.jsx(Q,{children:f.city}):null]})]}),e?r.jsxs(tt,{type:"button",onClick:O,children:[r.jsx(ot,{children:r.jsx("use",{href:C+"#iconLogout"})}),r.jsx(it,{children:"Log Out"})]}):r.jsx(rt,{type:"submit",children:"Save"})]})]})}),t?r.jsx(On,{isOpen:i,children:r.jsxs(lt,{children:[r.jsx(ct,{children:"Already leaving?"}),r.jsxs(dt,{children:[r.jsx(ut,{onClick:()=>i(!1),children:"Cancel"}),r.jsxs(ft,{onClick:()=>S(),children:["Yes",r.jsx(at,{children:r.jsx("use",{href:C+"#iconLogout"})})]})]}),r.jsx(pt,{onClick:()=>i(!1),children:r.jsx(st,{children:r.jsx("use",{href:C+"#iconCross"})})})]})}):r.jsx("div",{})]})},kr=s.div`
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
`,Er=s.h2`
  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-weight: 500;
  line-height: normal;
    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
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
`,Ar=s.svg`
  fill: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Cr=s.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Pr=s.svg`
  fill: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
`,Or=s.svg`
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
`;const Sr=s.h3`
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
`,zr=s.p`
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
`,Ir=s.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`,Mr=()=>{const e=Me(),n=xn(mn);u.useEffect(()=>{const l=c=>{c.keyCode===27&&e(Pe(!1))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e]);const[t,i]=u.useState(!0),o=()=>{e(Pe(!1))};return r.jsx(r.Fragment,{children:r.jsxs(kr,{children:[r.jsx(Er,{children:"My information:"}),r.jsxs(Fr,{children:[t?r.jsx(fn,{onClick:()=>i(l=>!l),children:r.jsx(Ar,{children:r.jsx("use",{href:C+"#iconEdit"})})}):r.jsx(fn,{onClick:()=>i(l=>!l),children:r.jsx(Cr,{children:r.jsx("use",{href:C+"#iconCross"})})}),r.jsx(Dr,{isUserUpdate:t,setIsUserUpdate:i}),n&&r.jsx(On,{children:r.jsxs(_r,{children:[r.jsx(Sr,{children:"Congrats!"}),r.jsx(zr,{children:"Youre registration is success"}),r.jsxs(Tr,{onClick:()=>{o()},type:"button",children:["Go to profile",r.jsx(Pr,{children:r.jsx("use",{href:C+"#iconPaw"})})]}),r.jsx(Ir,{onClick:()=>{o()},children:r.jsx(Or,{children:r.jsx("use",{href:C+"#iconCross"})})})]})})]})]})})},Rr=D.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    @media only screen and (min-width: 768px) {
        font-size: 28px;
    }
`,Lr=D.ul`
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
`;const Br=D.div`
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
`,Ur=D(Kn)`
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
`;D.svg`
  fill: none;
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;const $r=D.svg`
  stroke: var(--clr-bcg);
  width: 24px;
  height: 24px;
`,Wr=s.p`
  width: 300px;
  margin: 0 auto 130px;
  text-align: center;
      @media only screen and (min-width: 1280px) {
      width: 821px;
    }

`,Kr=()=>r.jsx(r.Fragment,{children:r.jsx(Wr,{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})}),Nr=s.li`
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
`,Hr=s.img`
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
`;const Yr=Nn`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,qr=s.button`
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
    animation: ${Yr} 0.5s ease;
  }
  }

`,Gr=s.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`;function Xr({pets:e}){const[n]=Hn(),t=async i=>{await n(i).unwrap()};return r.jsxs(Nr,{children:[r.jsx(qr,{onClick:()=>t(e._id),children:r.jsx(Gr,{children:r.jsx("use",{href:C+"#iconTrash"})})}),r.jsx(Hr,{src:e.avatarURL,alt:"user-pet"}),r.jsxs("ul",{children:[r.jsxs(fe,{children:[r.jsx("h3",{children:"Name: "}),r.jsx("p",{children:e.name})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:"Date of birth: "}),r.jsx("p",{children:e.date})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:"Type: "}),r.jsx("p",{children:e.type})]}),r.jsxs(fe,{children:[r.jsx("h3",{children:" Comments: "}),r.jsx("p",{children:e.comments})]})]})]})}const Vr=()=>{var n,t;const{data:e=[]}=Ie();return r.jsxs("div",{children:[r.jsxs(Br,{children:[r.jsx(Rr,{children:"My pets:"}),r.jsx(Ur,{to:"/add-pet",state:{from:"/user"},children:r.jsxs("div",{children:["Add pet",r.jsx($r,{children:r.jsx("use",{href:C+"#iconPlusSmall"})})]})})]}),r.jsx(Lr,{children:e.pets&&((n=e.pets)==null?void 0:n.map(i=>r.jsx(Xr,{pets:i},i._id)))}),((t=e.pets)==null?void 0:t.length)===0&&r.jsx(Kr,{})]})},Jr=D.div`
  position: relative;
  margin-top: 20px;
  background-color: var(--clr-bcg);
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 42px;
    display: flex;
    gap: 0px 32px;
  }
`;function ti(){return r.jsx(Yn,{children:r.jsxs(Jr,{children:[r.jsx(Mr,{}),r.jsx(Vr,{})]})})}export{ti as default};
