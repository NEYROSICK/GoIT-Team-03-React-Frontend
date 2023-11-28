import{n as o,r as a,l as g,j as t,s as n,N as p,b as u}from"./index-4b56af25.js";const m=o.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;

  z-index: 1000;

  opacity: ${e=>e.showModal?"1":"0"};

  transition: 300ms;
`,y=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  opacity: ${e=>e.showModal?"1":"0"};

  transition: 300ms;
`,w=document.querySelector("#modal-root"),S=({onClose:e,showModal:i,children:x})=>{const[c,h]=a.useState(!1);a.useEffect(()=>{h(i)},[i]);const l=a.useMemo(()=>r=>{r.code==="Escape"&&e()},[e]);a.useEffect(()=>(window.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",l),document.body.style.overflow="auto"}),[l]);const f=r=>{r.currentTarget===r.target&&e()};return g.createPortal(t.jsx(m,{onClick:f,showModal:c,children:t.jsx(y,{showModal:c,children:x})}),w)},s="min-width: 768px",v=o.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 445px;
  padding: 60px 20px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (${s}) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;

    border-radius: 40px;
  }
`,b=o.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    stroke: var(--clr-brand-yellow);
  }

  @media (${s}) {
    top: 24px;
    right: 24px;
  }
`,j=o.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  @media (${s}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`,k=o.p`
  margin-top: 20px;

  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;

  @media (${s}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,d="min-width: 768px",A=n.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 12px;

  margin: 40px auto 0 auto;

  @media (${d}) {
    flex-direction: row;
  }
`,M=n.li`
  font-weight: 700;
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  padding: 8px 20px;
  gap: 8px;
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${d}) {
    width: 165px;
  }
`,E=n.li`
  display: flex;
  justify-content: center;

  background: #fff;
  font-weight: 600;
  border-radius: 40px;
  padding: 7px 20px;
  border: 2px solid var(--clr-brand-yellow);
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${d}) {
    width: 142px;
  }
`,L=n(p)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
`,$=n(p)`
  color: var(--clr-brand-yellow);
`,z=n.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;

  transition: 300ms;
`,I=()=>t.jsxs(A,{children:[t.jsx(M,{children:t.jsxs(L,{to:"/login",children:["Log IN",t.jsx(z,{children:t.jsx("use",{href:u+"#iconPaw"})})]})}),t.jsx(E,{children:t.jsx($,{to:"/register",children:"Registration"})})]}),B=({setShowModal:e,sprite:i})=>t.jsxs(v,{children:[t.jsx(b,{onClick:()=>{e(!1)},children:t.jsx("use",{href:i+"#iconCross"})}),t.jsx(j,{children:"Attention"}),t.jsx(k,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),t.jsx(I,{})]});export{B as A,S as F};
