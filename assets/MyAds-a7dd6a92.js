import{d as l,y as u,j as e}from"./index-f70267fe.js";import{N as x,a as p}from"./NoticeItem-cd745c1d.js";function N(){const[i]=l(),o=Object.fromEntries(i.entries()),{data:s,error:a,isLoading:r}=u({params:{page:1,limit:12,...o}});return e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{children:"Loading..."}),!r&&e.jsx(x,{children:s.length>0?s.map(({_id:t,title:n,category:c,date:m,sex:d,location:h,avatarURL:j})=>e.jsx(p,{id:t,title:n,category:c,date:m,sex:d,location:h,avatarUrl:j,showDelete:!0},t)):e.jsx("div",{children:"No Notices found"})}),a&&a.message]})}export{N as default};
