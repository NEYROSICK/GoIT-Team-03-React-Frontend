import{d as j,y as l,j as e}from"./index-43796fd4.js";import{N as g,a as x}from"./noticeList.styled-4794c6c7.js";function N(){const[i]=j(),o=Object.fromEntries(i.entries()),{data:s,error:r,isLoading:t}=l({params:{page:1,limit:12,...o},refetchOnMountOrArgChange:!0});return e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{children:"Loading..."}),!t&&e.jsx(g,{children:s.length>0?s.map(({_id:a,title:n,category:c,date:m,sex:d,location:h,avatarURL:u})=>e.jsx(x,{id:a,title:n,category:c,date:m,sex:d,location:h,avatarUrl:u,showDelete:!0},a)):e.jsx("div",{children:"No Notices found"})}),r&&r.message]})}export{N as default};
