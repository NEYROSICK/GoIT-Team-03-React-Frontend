import{n as x,s as i,r as a,j as n,v as g}from"./index-e31ebc1a.js";const j=x.div`
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
`,u=x.section`
      padding-top:20px ;
        @media only screen and (min-width: 1280px) {
        padding-top:40px ;
        padding-bottom:60px
        }

`,w=x.h1`
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
`,y=i.ul`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    gap: 20px 0px;

    @media only screen and (min-width: 768px) {
    flex-direction:row;
    flex-wrap:wrap;
    gap: 32px;
    justify-content: flex-start;
    }
        @media only screen and (min-width: 768px) {
        justify-content: center;
        }
`,b=i.li`
    
    padding: 16px 17px 16px 12px;
    width: 280px;

    background-color:var(--clr-bcg-user);
    border-radius: 40px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

      @media only screen and (min-width: 768px) {
    width: 336px;
  }
    @media only screen and (min-width: 768px) {
    width: 394px;
}

`,v=i.h2`
    color: var(--clr-brand-blue);
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    
    margin-bottom:16px;
    @media only screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    }
`,F=i.img`
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

`,T=i.div`
    display: flex;
    gap:  0px 12px;

    font-size: 12px;
    font-style: normal;
    line-height: normal;
        @media only screen and (min-width: 768px) {
        gap:  0px 20px;
        font-size: 14px;
        }
        @media only screen and (min-width: 1280px) {
        font-size: 16px;
        }

`,z=i.ul`
    display: flex;
    flex-direction:column;
    gap: 12px 0px;
  a {
    color: inherit;
    text-decoration: none;
  }
`,r=i.p`
    font-weight:600;
`,C=i.div`
  margin-bottom: 12px;
`,I=i.div`
  position: relative;
`,S=i.ul`
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
`,U=i.li`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,O=i.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`,P=({workDays:t})=>{const[e,o]=a.useState(!1),p=["MN","TU","WE","TH","FR","SA","SU"],[l]=a.useState(m()),c=()=>{o(!e)},h=s=>{s.stopPropagation()};function m(){if(t&&t.length>0){const s=t[0],d=s.from?s.from:"11:00",f=s.to?s.to:"16:00";return`${d} - ${f}`}else return"Day and night"}return n.jsxs(C,{children:[n.jsx("div",{onClick:c,children:n.jsxs(O,{children:[n.jsx("p",{children:"Time:"}),n.jsxs("p",{children:[" ",l]})]})}),e&&n.jsx(I,{children:(t==null?void 0:t.length)>0?n.jsx("div",{onClick:h,children:n.jsx(S,{children:t.map((s,d)=>n.jsxs(U,{children:[n.jsx("p",{children:p[d]}),n.jsxs("p",{children:[s.from,"-",s.to]})]},d))})}):n.jsx("div",{})})]})},E=()=>{const{data:t}=g();return n.jsx(y,{children:t&&t.map((e,o)=>n.jsxs(b,{children:[n.jsx(v,{children:e.title?e.title:""}),n.jsxs(T,{children:[n.jsx(F,{src:e.imageUrl?e.imageUrl:"",alt:""}),n.jsxs(z,{children:[n.jsx("li",{children:n.jsx(P,{workDays:e.workDays})}),n.jsxs("li",{children:[n.jsx(r,{children:"Address:"}),n.jsx("a",{href:e.addressUrl?e.addressUrl:"",target:"blank",children:e.address?e.address:""})]}),n.jsxs("li",{children:[n.jsx(r,{children:"Email:"}),e.email?n.jsx("a",{href:"mailto:"+e.email,children:e.email}):n.jsx("p",{children:"phone only"})]}),n.jsxs("li",{children:[n.jsx(r,{children:"Phone:"}),e.phone?n.jsx("a",{href:"tel:"+e.phone,children:e.phone}):n.jsx("p",{children:"website only"})]})]})]})]},o))})};function L(){return n.jsx(j,{children:n.jsxs(u,{children:[n.jsx(w,{children:"Our Friends"}),n.jsx(E,{})]})})}export{L as default};
