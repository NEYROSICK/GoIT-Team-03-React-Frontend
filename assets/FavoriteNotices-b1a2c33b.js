import{i as j,d as x,x as p,a as v,j as e}from"./index-f70267fe.js";import{N as g,a as A}from"./NoticeItem-cd745c1d.js";import{s as N}from"./selectors-9c63f203.js";function b(){const{data:o}=j(),[c]=x(),n=Object.fromEntries(c.entries()),{data:s,error:t,isLoading:a}=p({params:{page:1,limit:12,...n}});let r=[];return v(N)&&(r=o.user.favoritesArr),e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{children:"Loading..."}),!a&&e.jsx(g,{children:s.length>0?s.map(({_id:i,title:u,category:d,date:m,sex:h,location:l,avatarURL:f})=>e.jsx(A,{id:i,title:u,category:d,date:m,sex:h,location:l,avatarUrl:f,userFavoritesArr:r},i)):e.jsx("div",{children:"No Notices found"})}),t&&t.message]})}export{b as default};
