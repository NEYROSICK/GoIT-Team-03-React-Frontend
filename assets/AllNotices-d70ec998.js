import{u as N,d as A,r as i,y as E,a as S,i as C,j as e}from"./index-915085f2.js";import{s as F}from"./selectors-9c63f203.js";import{N as z,a as b}from"./noticeList.styled-102f4245.js";import{S as G}from"./StyledPagination.styled-cafd3fa0.js";import"./notiflix-notify-aio-bffb5a79.js";function k(){const{pathname:h}=N(),g=h.split("/")[2],[p]=A(),f=Object.fromEntries(p.entries()),[n,j]=i.useState(1),[c,a]=i.useState(12);i.useEffect(()=>{const t=()=>{const s=window.innerWidth;s<=768?a(11):s<=1024?a(10):a(12)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const{data:r,error:d,isLoading:u}=E({category:g,params:{page:n,limit:c,...f}}),m=S(F),{data:o}=C(void 0,{skip:!m});let l=[];m&&o&&o.user&&(l=o.user.favoritesArr);const v=(t,s)=>{j(s)};return e.jsxs(e.Fragment,{children:[u&&e.jsx("div",{children:"Loading..."}),!u&&e.jsxs(e.Fragment,{children:[e.jsx(z,{children:r.notices.length>0?r.notices.map(({_id:t,title:s,category:x,date:y,sex:P,location:w,avatarURL:L})=>e.jsx(b,{id:t,title:s,category:x,date:y,sex:P,location:w,avatarUrl:L,userFavoritesArr:l},t)):e.jsx("div",{children:"No Notices found"})}),r.notices.length!==0&&e.jsx(G,{count:Math.floor(r.totalCount/c),page:n,onChange:v,color:"primary"})]}),d&&d.message]})}export{k as default};
