import{u as h,b as j,t as x,j as s}from"./index-77519cfc.js";import{N,a as f}from"./NoticeItem-fc264bc0.js";import"./sprite-fa127c97.js";function v(){const{pathname:o}=h(),i=o.split("/")[2],[c]=j(),n=Object.fromEntries(c.entries()),{data:t,error:a,isLoading:e}=x({category:i,params:{page:1,limit:12,...n}});return s.jsxs(s.Fragment,{children:[e&&s.jsx("div",{children:"Loading..."}),!e&&s.jsx(N,{children:t.length>0?t.map(({_id:r,title:m,category:d,date:l,sex:p,location:u,avatarURL:g})=>s.jsx(f,{id:r,title:m,category:d,date:l,sex:p,location:u,avatarUrl:g},r)):s.jsx("div",{children:"No Notices found"})}),a&&a.message]})}export{v as default};
