import{u as E,d as F,r as n,y as S,a as C,i as O,j as e,b as l}from"./index-31538252.js";import{L as b,N as z,a as f}from"./Loader-a3efc33e.js";import{s as I}from"./selectors-9c63f203.js";import{N as M,a as G}from"./noticeList.styled-85187d94.js";import{S as Q}from"./StyledPagination.styled-a2664efe.js";import"./notiflix-notify-aio-5819487b.js";import"./AttentionModalWrapper-6bc68f33.js";function H(){const{pathname:g}=E(),p=g.split("/")[2],[j]=F(),x=Object.fromEntries(j.entries()),[i,N]=n.useState(1),[c,a]=n.useState(12);n.useEffect(()=>{const t=()=>{const s=window.innerWidth;s<=768?a(11):s<=1024?a(10):a(12)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const{data:r,error:u,isLoading:d}=S({category:p,params:{page:i,limit:c,...x},refetchOnMountOrArgChange:!0}),m=C(I),{data:o}=O(void 0,{skip:!m});let h=[];m&&o&&o.user&&(h=o.user.favoritesArr);const P=(t,s)=>{N(s)};return e.jsxs(e.Fragment,{children:[d&&e.jsx(b,{}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(M,{children:r.notices.length>0?r.notices.map(({_id:t,title:s,category:v,date:w,sex:y,location:L,avatarURL:A})=>e.jsx(G,{id:t,title:s,category:v,date:w,sex:y,location:L,avatarUrl:A,userFavoritesArr:h},t)):e.jsxs(z,{children:[e.jsx(f,{children:e.jsx("use",{href:l+"#iconPaw"})})," ","No Notices found"," ",e.jsx(f,{children:e.jsx("use",{href:l+"#iconPaw"})})]})}),r.notices.length!==0&&e.jsx(Q,{count:Math.floor(r.totalCount/c),page:i,onChange:P,color:"primary"})]}),u&&u.message]})}export{H as default};
