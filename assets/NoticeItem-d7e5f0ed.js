import{n as f,y as _,r as K,z as O,A as tt,j as r}from"./index-e06992a8.js";import{s as w}from"./sprite-30046adb.js";const et="min-width: 768px",ot="min-width: 1280px",yt=f.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 24px;

  width: 280px;

  @media (${et}) {
    column-gap: 32px;

    width: 768px;
  }

  @media (${ot}) {
    width: 1280px;
  }

  height: 100%;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;var V={exports:{}};(function(h){(function(a,N){h.exports=N(a)})(typeof _<"u"?_:typeof window<"u"?window:_,function(a){if(typeof a>"u"&&typeof a.document>"u")return!1;var N="Notiflix",T=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,A='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',u={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},t,m={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},j=function(o){return console.error("%c "+N+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+o+T)},I=function(o){return o||(o="head"),a.document[o]===null?(j(`
Notiflix needs to be appended to the "<`+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1):!0},S=function(o,i){if(!I("head"))return!1;if(o()!==null&&!a.document.getElementById(i)){var n=a.document.createElement("style");n.id=i,n.innerHTML=o(),a.document.head.appendChild(n)}},g=function(){var o={},i=!1,n=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(i=arguments[0],n++);for(var b=function(x){for(var s in x)Object.prototype.hasOwnProperty.call(x,s)&&(i&&Object.prototype.toString.call(x[s])==="[object Object]"?o[s]=g(o[s],x[s]):o[s]=x[s])};n<arguments.length;n++)b(arguments[n]);return o},M=function(o){var i=a.document.createElement("div");return i.innerHTML=o,i.textContent||i.innerText||""},D=function(){var o='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return o||null},v=0,k=function(o,i,n,b){if(!I("body"))return!1;t||C.Notify.init({});var x=g(!0,t,{});if(typeof n=="object"&&!Array.isArray(n)||typeof b=="object"&&!Array.isArray(b)){var s={};typeof n=="object"?s=n:typeof b=="object"&&(s=b),t=g(!0,t,s)}var c=t[o.toLocaleLowerCase("en")];v++,typeof i!="string"&&(i="Notiflix "+o),t.plainText&&(i=M(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=g(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(c.fontAwesomeIconColor=c.background),t.cssAnimation||(t.cssAnimationDuration=0);var e=a.document.getElementById(m.wrapID)||a.document.createElement("div");if(e.id=m.wrapID,e.style.width=t.width,e.style.zIndex=t.zindex,e.style.opacity=t.opacity,t.position==="center-center"?(e.style.left=t.distance,e.style.top=t.distance,e.style.right=t.distance,e.style.bottom=t.distance,e.style.margin="auto",e.classList.add("nx-flex-center-center"),e.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",e.style.display="flex",e.style.flexWrap="wrap",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.pointerEvents="none"):t.position==="center-top"?(e.style.left=t.distance,e.style.right=t.distance,e.style.top=t.distance,e.style.bottom="auto",e.style.margin="auto"):t.position==="center-bottom"?(e.style.left=t.distance,e.style.right=t.distance,e.style.bottom=t.distance,e.style.top="auto",e.style.margin="auto"):t.position==="right-bottom"?(e.style.right=t.distance,e.style.bottom=t.distance,e.style.top="auto",e.style.left="auto"):t.position==="left-top"?(e.style.left=t.distance,e.style.top=t.distance,e.style.right="auto",e.style.bottom="auto"):t.position==="left-bottom"?(e.style.left=t.distance,e.style.bottom=t.distance,e.style.top="auto",e.style.right="auto"):(e.style.right=t.distance,e.style.top=t.distance,e.style.left="auto",e.style.bottom="auto"),t.backOverlay){var p=a.document.getElementById(m.overlayID)||a.document.createElement("div");p.id=m.overlayID,p.style.width="100%",p.style.height="100%",p.style.position="fixed",p.style.zIndex=t.zindex-1,p.style.left=0,p.style.top=0,p.style.right=0,p.style.bottom=0,p.style.background=c.backOverlayColor||t.backOverlayColor,p.className=t.cssAnimation?"nx-with-animation":"",p.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",a.document.getElementById(m.overlayID)||a.document.body.appendChild(p)}a.document.getElementById(m.wrapID)||a.document.body.appendChild(e);var l=a.document.createElement("div");l.id=t.ID+"-"+v,l.className=t.className+" "+c.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof n!="function"?"nx-with-close-button":"")+" "+(typeof n=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),l.style.fontSize=t.fontSize,l.style.color=c.textColor,l.style.background=c.background,l.style.borderRadius=t.borderRadius,l.style.pointerEvents="all",t.rtl&&(l.setAttribute("dir","rtl"),l.classList.add("nx-rtl-on")),l.style.fontFamily='"'+t.fontFamily+'", '+A,t.cssAnimation&&(l.style.animationDuration=t.cssAnimationDuration+"ms");var W="";if(t.closeButton&&typeof n!="function"&&(W='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+c.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)l.innerHTML='<i style="color:'+c.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+c.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?W:"");else{var z="";o===u.Success?z='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+c.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':o===u.Failure?z='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+c.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':o===u.Warning?z='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+c.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':o===u.Info&&(z='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+c.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),l.innerHTML=z+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?W:"")}else l.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?W:"");if(t.position==="left-bottom"||t.position==="right-bottom"){var U=a.document.getElementById(m.wrapID);U.insertBefore(l,U.firstChild)}else a.document.getElementById(m.wrapID).appendChild(l);var d=a.document.getElementById(l.id);if(d){var E,L,F=function(){d.classList.add("nx-remove");var y=a.document.getElementById(m.overlayID);y&&e.childElementCount<=0&&y.classList.add("nx-remove"),clearTimeout(E)},H=function(){if(d&&d.parentNode!==null&&d.parentNode.removeChild(d),e.childElementCount<=0&&e.parentNode!==null){e.parentNode.removeChild(e);var y=a.document.getElementById(m.overlayID);y&&y.parentNode!==null&&y.parentNode.removeChild(y)}clearTimeout(L)};if(t.closeButton&&typeof n!="function"){var Z=a.document.getElementById(l.id).querySelector("span.nx-close-button");Z.addEventListener("click",function(){F();var y=setTimeout(function(){H(),clearTimeout(y)},t.cssAnimationDuration)})}if((typeof n=="function"||t.clickToClose)&&d.addEventListener("click",function(){typeof n=="function"&&n(),F();var y=setTimeout(function(){H(),clearTimeout(y)},t.cssAnimationDuration)}),!t.closeButton&&typeof n!="function"){var Y=function(){E=setTimeout(function(){F()},t.timeout),L=setTimeout(function(){H()},t.timeout+t.cssAnimationDuration)};Y(),t.pauseOnHover&&(d.addEventListener("mouseenter",function(){d.classList.add("nx-paused"),clearTimeout(E),clearTimeout(L)}),d.addEventListener("mouseleave",function(){d.classList.remove("nx-paused"),Y()}))}}if(t.showOnlyTheLastOne&&v>0)for(var q=a.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+v+"])"),$=0;$<q.length;$++){var P=q[$];P.parentNode!==null&&P.parentNode.removeChild(P)}t=g(!0,t,x)},C={Notify:{init:function(o){t=g(!0,m,o),S(D,"NotiflixNotifyInternalCSS")},merge:function(o){if(t)t=g(!0,t,o);else return j("You have to initialize the Notify module before call Merge function."),!1},success:function(o,i,n){k(u.Success,o,i,n)},failure:function(o,i,n){k(u.Failure,o,i,n)},warning:function(o,i,n){k(u.Warning,o,i,n)},info:function(o,i,n){k(u.Info,o,i,n)}}};return typeof a.Notiflix=="object"?g(!0,a.Notiflix,{Notify:C.Notify}):{Notify:C.Notify}})})(V);var B=V.exports;const J="min-width: 768px",X="min-width: 1280px",it=f.li`
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 40px 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  width: 280px;
  height: 456px;
  padding-bottom: 22px;

  overflow: hidden;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);

    & img {
      scale: 1.1;
    }
  }

  @media (${J}) {
    width: 336px;
  }

  @media (${X}) {
    width: 288px;
  }
`,nt=f.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  background-color: #fff;

  width: 100%;
  height: 288px;

  overflow: hidden;
  transition: 300ms;
`,at=f.img`
  position: absolute;
  object-position: center;
  object-fit: cover;

  width: 100%;
  height: 100%;

  transition: 300ms;
`,rt=f.p`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: var(--clr-brand-blue-lt);

  padding: 6.5px 12.98px;

  color: #111;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,st=f.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;
`,lt=f.button`
  position: absolute;
  top: 58px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;
`,Q=f.svg`
  stroke: var(--clr-brand-blue);
  fill: ${h=>h.isFavorite?"var(--clr-brand-blue)":"none"};

  width: 24px;
  height: 24px;
`,ct=f.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 12px;

  /* background-color: rgba(0, 0, 0, 0.2); */
  /* backdrop-filter: blur(5px); */

  width: 100%;
  height: 28px;

  z-index: 2;

  @media (${J}) {
    gap: 24px;
  }

  @media (${X}) {
    gap: 12px;
  }
`,G=f.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: var(--clr-brand-blue-lt);

  width: 80px;

  overflow: hidden;

  color: var(--clr-primary);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`,R=f.svg`
  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;
`,ft=f.h3`
  width: 231px;
  height: 66px;
  margin: 20px 0 0 20px;

  overflow-y: scroll;

  color: var(--clr-primary);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,mt=f.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 248px;
  height: 40px;
  margin: auto auto 0 auto;
  padding: 8px 28px;

  background-color: #fff;
  border: 2px solid var(--clr-brand-blue);
  border-radius: 40px;
  outline: none;

  color: var(--clr-brand-blue);

  transition: 300ms;

  &:hover {
    background-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);

    & svg {
      opacity: 1;
      width: 24px;
      height: 24px;
    }
  }
`,pt=f.svg`
  opacity: 0;
  stroke: var(--clr-primary-inv);
  fill: var(--clr-primary-inv);

  width: 0;
  height: 0;

  transition: 300ms;
`,ut=({id:h,title:a,date:N,category:T,sex:A,location:u,avatarUrl:t,userFavoritesArr:m,showDelete:j})=>{const[I,S]=K.useState(m.includes(h)),[g]=O(),[M]=tt(),[D,v]=K.useState(""),k=new Date,C=new Date(N),o=k.getFullYear()-C.getFullYear(),i=o%2?"year":"years",n=async x=>{x.preventDefault();try{const s=await g(h);s.data&&s.data.message&&await v(s.data.message),B.Notify.success(D),S(c=>!c)}catch{v("Failed to update favorite status"),B.Notify.failure(D)}},b=async x=>{x.preventDefault();try{const s=await M(h);s.data&&B.Notify.success(s.data.name+" was deleted successfully")}catch{B.Notify.failure("Failed to delete notice")}};return r.jsxs(it,{children:[r.jsxs(nt,{children:[r.jsx(at,{src:t}),r.jsx(rt,{children:T}),r.jsx(st,{type:"submit",onClick:n,children:r.jsx(Q,{isFavorite:I,children:r.jsx("use",{href:w+"#iconHeart"})})}),j&&r.jsx(lt,{type:"submit",onClick:b,children:r.jsx(Q,{isFavorite:I,children:r.jsx("use",{href:w+"#iconTrash"})})}),r.jsxs(ct,{children:[r.jsxs(G,{children:[r.jsx(R,{children:r.jsx("use",{href:w+"#iconLocation"})}),u]}),r.jsxs(G,{children:[r.jsx(R,{children:r.jsx("use",{href:w+"#iconClock"})}),o," ",i]}),r.jsxs(G,{children:[r.jsx(R,{children:r.jsx("use",{href:A==="male"?w+"#iconMale":w+"#iconFemale"})}),A]})]})]}),r.jsx(ft,{children:a}),r.jsxs(mt,{children:["Learn more",r.jsx(pt,{children:r.jsx("use",{href:w+"#iconPaw"})})]})]},h)};export{yt as N,ut as a};
