import{n as r,L as G,u as y,a as O,j as e,r as d,b as a,c as $,d as Q,C as T,O as U}from"./index-bf3374d0.js";import{N as H}from"./NoticesSearch-2d83ddaf.js";import{s as B}from"./selectors-9c63f203.js";import{F as K,A as W}from"./AttentionModalWrapper-3eb4acb9.js";const _=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 205px;

  height: 121px;

  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    // max-width: 319px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 540px;
    height: 35px;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 24px;
  }
`,C=r.ul`
  // width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }
`,A=r.li`
  display: flex;
  border: none;
  flex-wrap: no-wrap;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-brand-blue-lt);
  border-radius: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: 300ms;
`,R=r(G)`
  padding: 8px 16px;
  text-decoration: none;
  color: var(--clr-brand-blue);
  color: ${n=>n.active&&"var(--clr-primary-inv)"};
  background-color: ${n=>n.active&&"var(--clr-brand-blue)"};
  border-radius: 40px;
  transition: 300ms;
  
  &:hover {
    color: var(--clr-primary-inv);
    background-color: var(--clr-brand-blue);
  }
`;let v=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const J=[{id:v(),to:"/notices/sell",text:"sell"},{id:v(),to:"/notices/lost-found",text:"lost/found"},{id:v(),to:"/notices/in-good-hands",text:"in good hands"}],X=[{id:v(),to:"/notices/favorite",text:"favorite ads"},{id:v(),to:"/notices/my-ads",text:"my ads"}],Y={publicCategories:J,userCategories:X},{publicCategories:Z,userCategories:q}=Y,V=()=>{const{search:n}=y(),t=y(),i=O(B);return e.jsxs(_,{children:[e.jsx(C,{children:Z.map(({id:o,to:s,text:c})=>e.jsx(A,{children:e.jsx(R,{to:{pathname:s,search:n},active:t.pathname===s?"true":void 0,children:c})},o))}),i&&e.jsx(C,{children:q.map(({id:o,to:s,text:c})=>e.jsx(A,{children:e.jsx(R,{to:{pathname:s,search:n},active:t.pathname===s?"true":void 0,children:c})},o))})]})},ee=r.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  background-color: #c5dff6;
  color: var(--clr-brand-blue);

  &:hover,
  &:focus {
    color: var(--clr-bcg-user);
    background-image: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border: none;
  }
  @media screen and (min-width: 768px) {
    padding: 9px 38px;
    width: 152px;
    border: 2px solid var(--clr-brand-blue);
    border-radius: 40px;
    color: #54adff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: transparent;
    transition: 300ms;
  }
`,ne=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
`,te=r.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,ie=r.div`
  width: 152px;
  position: absolute;
  right: 0;
  margin-top: 16px;
  padding: 8px;
  padding: ${n=>n.active&&"14px 8px"};
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  z-index: 30;
  transition: opacity 400ms;

  @media screen and (min-width: 768px) {
    right: auto;
  }
`,re=r.div``,se=r.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`,P=r.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${n=>n.active&&"12px"};
`,E=r.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--clr-brand-blue);
  transition: 300ms;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`,L=r.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`,f=r.label`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #54adff;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,g=r.input`
  appearance: none;
`,N=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transform: ${n=>n.active&&"rotate(180deg)"};
  transition: 300ms;
`,m=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 1;
  opacity: ${n=>n.check&&"0"};
  transition: 300ms;
`,j=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 0;
  opacity: ${n=>n.check&&"1"};
  position: absolute;
  transition: 300ms;
`,z=(n,t)=>t&&!n?{sex:"male"}:n&&!t?{sex:"female"}:{};//! I AM AN UPGRADE
const I=(n,t,i)=>n&&!t&&!i?{age:"to-1"}:!n&&t&&!i?{age:"to-2"}:!n&&!t&&i?{age:"from-2"}:n&&t&&!i?{age:"to-2"}:n&&!t&&i?{age:"to-1-from-2"}:void 0,oe=(n,t,i,o,s)=>n&&t&&i||!n&&!t&&!i?{...z(o,s)}:s&&o||!s&&!o?{...I(n,t,i)}:{...I(n,t,i),...z(o,s)},ae=({checkboxValue:n,setCheckboxValue:t})=>{const[i,o]=d.useState(!1),[s,c]=d.useState(!1),[x,S]=d.useState(!1),[b,k]=d.useState(!1),w=()=>{o(l=>!l)},M=()=>{c(l=>!l)},D=()=>{S(l=>!l)},h=l=>{const{name:u}=l.target;t(p=>({...p,[u]:!p[u]})),k(p=>!p)};d.useEffect(()=>{const l=p=>{p.key==="Escape"&&o(!1)},u=p=>{F.current&&!F.current.contains(p.target)&&o(!1)};return document.addEventListener("keydown",l),document.addEventListener("mousedown",u),()=>{document.removeEventListener("keydown",l),document.removeEventListener("mousedown",u)}},[]);const F=d.useRef(null);return e.jsxs("div",{children:[e.jsxs(ee,{type:"button",onClick:w,children:[e.jsx(te,{children:"Filter"}),e.jsx(ne,{children:e.jsx("use",{href:a+"#iconFilters3"})})]}),i&&e.jsx(ie,{active:!0,ref:F,children:e.jsxs(re,{children:[e.jsx(se,{children:"Filters"}),e.jsxs(P,{active:s?!0:void 0,children:[e.jsxs(E,{type:"button",onClick:M,"aria-label":"toggle age options",children:[e.jsx(N,{active:s?!0:void 0,children:e.jsx("use",{href:a+"#iconChevronDown"})}),"By age"]}),s&&e.jsxs(L,{children:[e.jsxs(f,{children:[e.jsx(m,{check:n.to1,children:e.jsx("use",{href:a+"#iconRound"})}),e.jsx(j,{check:n.to1,children:e.jsx("use",{href:a+"#iconCheckRound"})}),e.jsx(g,{onChange:h,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(f,{children:[e.jsx(m,{check:n.to2,children:e.jsx("use",{href:a+"#iconRound"})}),e.jsx(j,{check:n.to2,children:e.jsx("use",{href:a+"#iconCheckRound"})}),e.jsx(g,{onChange:h,type:"checkbox",name:"to2",checked:[n.to2,b]}),"up to 2 years"]}),e.jsxs(f,{children:[e.jsx(m,{check:n.from2,children:e.jsx("use",{href:a+"#iconRound"})}),e.jsx(j,{check:n.from2,children:e.jsx("use",{href:a+"#iconCheckRound"})}),e.jsx(g,{onChange:h,type:"checkbox",name:"from2",checked:[n.from2,b]}),"from 2 years"]})]})]}),e.jsxs(P,{active:x?!0:void 0,children:[e.jsxs(E,{type:"button",onClick:D,"aria-label":"toggle gender options",children:[e.jsx(N,{active:x?!0:void 0,children:e.jsx("use",{href:a+"#iconChevronDown"})}),"By gender"]}),x&&e.jsxs(L,{children:[e.jsxs(f,{children:[e.jsx(m,{check:n.male,children:e.jsx("use",{href:a+"#iconRound"})}),e.jsx(j,{check:n.male,children:e.jsx("use",{href:a+"#iconCheckRound"})}),e.jsx(g,{onChange:h,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(f,{children:[e.jsx(m,{check:n.female,children:e.jsx("use",{href:a+"#iconRound"})}),e.jsx(j,{check:n.female,children:e.jsx("use",{href:a+"#iconCheckRound"})}),e.jsx(g,{onChange:h,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})})]})},de=r.div`
  padding-top: 40px;
  padding-bottom: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 209px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 112px;
  }
`,ce=r.h1`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: var(--clr-primary);

  @media screen and (min-width: 768px) {
    
      margin-bottom: 40px;
      font-size: 48px;
      line-height: 66px;
  
  }
`,le=r.div`
  position: relative;
  width: 280px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px; 
  }
`,pe=r.div`
  display: flex;
  flex-direction: column;
  gap: 211px;
  align-items: end;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`,xe=r.button`
  position: fixed;
  top: 460px;
  z-index: 5;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
  background: var(--clr-brand-blue);
  color: var(--clr-bcg-user);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
    border-radius: 40px;
    padding: 9px 16px;
    flex-direction: row;
    position: static;
  }
`,he=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ue=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,fe=r.span`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`,ge=()=>{const[n,t]=d.useState(!1),i=y(),o=$(),s=O(B),c=()=>{if(!s){t(!0);return}o("/add-pet",{state:{from:i}})};return e.jsxs(e.Fragment,{children:[e.jsxs(xe,{onClick:c,children:[e.jsx(he,{children:e.jsx("use",{href:a+"#iconPlus"})}),e.jsx(fe,{children:"Add Pet"}),e.jsx(ue,{children:e.jsx("use",{href:a+"#iconPlusSmall"})})]}),n&&e.jsx(K,{onClose:()=>{t(!1)},showModal:n,children:e.jsx(W,{setShowModal:t,sprite:a})})]})},me={to1:!1,to2:!1,from2:!1,female:!1,male:!1},je=()=>{const[n,t]=Q(),[i,o]=d.useState(me),[s,c]=d.useState({}),x=y(),S=$(),b=d.useMemo(()=>Object.fromEntries([...n]),[n]);d.useEffect(()=>{t({...s,...oe(i.to1,i.to2,i.from2,i.female,i.male)})},[i,b,t,s,n]),d.useEffect(()=>{x.pathname==="/notices"&&S("/notices/sell")},[]);const k=w=>{c(w?{query:w}:{})};return e.jsx(T,{children:e.jsxs(de,{children:[e.jsx(ce,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(H,{onSubmit:k})}),e.jsxs(le,{children:[e.jsx(V,{searchParams:n}),e.jsx("div",{children:e.jsxs(pe,{children:[e.jsx(ae,{setCheckboxValue:o,checkboxValue:i}),e.jsx(ge,{state:{from:x}})]})})]}),e.jsx(d.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(U,{})})]})})};function Se(){return e.jsx(je,{})}export{Se as default};
