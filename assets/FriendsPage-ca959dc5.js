import{n as l,s as t,r as c,j as n,v as u,b as d}from"./index-31538252.js";import{L as w,N as b,a as x}from"./Loader-a3efc33e.js";const y=l.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0px 16px;
  }
`,v=l.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: auto;

  padding-top: 20px;
  @media only screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 60px;
    width: 1280px;
  }
`,F=l.h1`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,T=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px 0px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: flex-start;
    align-items: stretch;
  }
  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`,P=t.li`
  padding: 16px 17px 16px 12px;
  width: 280px;

  background-color: var(--clr-bcg-user);
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  transition: 300ms;

  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 394px;
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);
  }
`,z=t.h2`
  color: var(--clr-brand-blue);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
`,C=t.img`
  width: 100px;
  height: 68px;

  @media only screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
  }
  @media only screen and (min-width: 768px) {
    width: 146px;
    height: 104px;
  }
`,I=t.div`
  display: flex;
  gap: 0px 12px;

  font-size: 12px;
  font-style: normal;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    gap: 0px 20px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 16px;
  }
`,N=t.ul`
  display: flex;
  flex-direction: column;
  gap: 12px 0px;
  a {
    color: inherit;
    text-decoration: none;
  }
`,p=t.p`
  font-weight: 600;
`,L=t.div`
  margin-bottom: 12px;
`,S=t.div`
  position: relative;
`,U=t.ul`
  position: absolute;
  top: 0px;
  left: 0;
  width: 130px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border: 1px solid #54adff;
  border-radius: 8px;
  padding: 12px;
  gap: 4px 0px;
`,O=t.li`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,E=t.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`,k=({workDays:i})=>{const[o,e]=c.useState(!1),a=["MN","TU","WE","TH","FR","SA","SU"],[h]=c.useState(g()),m=()=>{e(!o)},f=s=>{s.stopPropagation()};function g(){if(i&&i.length>0){const s=i[0],r=s.from?s.from:"11:00",j=s.to?s.to:"16:00";return`${r} - ${j}`}else return"Day and night"}return n.jsxs(L,{children:[n.jsx("div",{onClick:m,children:n.jsxs(E,{children:[n.jsx("p",{children:"Time:"}),n.jsxs("p",{children:[" ",h]})]})}),o&&n.jsx(S,{children:(i==null?void 0:i.length)>0?n.jsx("div",{onClick:f,children:n.jsx(U,{children:i.map((s,r)=>n.jsxs(O,{children:[n.jsx("p",{children:a[r]}),n.jsxs("p",{children:[s.from,"-",s.to]})]},r))})}):n.jsx("div",{})})]})},W=()=>{const{data:i,isLoading:o}=u();return n.jsxs(T,{children:[o&&n.jsx(w,{}),i&&i.map((e,a)=>n.jsxs(P,{children:[n.jsx(z,{children:e.title?e.title:""}),n.jsxs(I,{children:[n.jsx(C,{src:e.imageUrl?e.imageUrl:"",alt:""}),n.jsxs(N,{children:[n.jsx("li",{children:n.jsx(k,{workDays:e.workDays})}),n.jsxs("li",{children:[n.jsx(p,{children:"Address:"}),n.jsx("a",{href:e.addressUrl?e.addressUrl:"",target:"blank",children:e.address?e.address:""})]}),n.jsxs("li",{children:[n.jsx(p,{children:"Email:"}),e.email?n.jsx("a",{href:"mailto:"+e.email,children:e.email}):n.jsx("p",{children:"phone only"})]}),n.jsxs("li",{children:[n.jsx(p,{children:"Phone:"}),e.phone?n.jsx("a",{href:"tel:"+e.phone,children:e.phone}):n.jsx("p",{children:"website only"})]})]})]})]},a)),i&&!i.length&&n.jsxs(b,{children:[n.jsx(x,{children:n.jsx("use",{href:d+"#iconPaw"})})," ","No news found"," ",n.jsx(x,{children:n.jsx("use",{href:d+"#iconPaw"})})]})]})};function $(){return n.jsx(y,{children:n.jsxs(v,{children:[n.jsxs(F,{children:[n.jsx(x,{children:n.jsx("use",{href:d+"#iconPaw"})})," ","Our friends"," ",n.jsx(x,{children:n.jsx("use",{href:d+"#iconPaw"})})]}),n.jsx(W,{})]})})}export{$ as default};
