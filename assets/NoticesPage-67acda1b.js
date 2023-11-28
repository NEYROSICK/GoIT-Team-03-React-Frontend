import{n as r,L as O,u as y,a as D,j as e,r as d,b as s,c as M,d as T,C as G,O as Q}from"./index-a69cd479.js";import{N as U}from"./NoticesSearch-2327a1e3.js";import{s as H}from"./selectors-9c63f203.js";const K=r.div`
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
`,F=r.ul`
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
`,C=r.li`
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
`,R=r(O)`
  padding: 8px 16px;
  text-decoration: none;
  color: var(--clr-brand-blue);
  color: ${n=>n.active&&"var(--clr-primary-inv)"};
  background-color: ${n=>n.active&&"var(--clr-brand-blue)"};
  border-radius: 40px;
  transition: 300ms;
  &:focus,
  &:hover {
    color: var(--clr-primary-inv);
    background-color: var(--clr-brand-blue);
  }
`;let v=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((i,t)=>(t&=63,t<36?i+=t.toString(36):t<62?i+=(t-26).toString(36).toUpperCase():t>62?i+="-":i+="_",i),"");const _=[{id:v(),to:"/notices/sell",text:"sell"},{id:v(),to:"/notices/lost-found",text:"lost/found"},{id:v(),to:"/notices/in-good-hands",text:"in good hands"}],J=[{id:v(),to:"/notices/favorite",text:"favorite ads"},{id:v(),to:"/notices/my-ads",text:"my ads"}],W={publicCategories:_,userCategories:J},{publicCategories:X,userCategories:Y}=W,Z=()=>{const{search:n}=y(),i=y(),t=D(H);return e.jsxs(K,{children:[e.jsx(F,{children:X.map(({id:a,to:o,text:l})=>e.jsx(C,{children:e.jsx(R,{to:{pathname:o,search:n},active:i.pathname===o?"true":void 0,children:l})},a))}),t&&e.jsx(F,{children:Y.map(({id:a,to:o,text:l})=>e.jsx(C,{children:e.jsx(R,{to:{pathname:o,search:n},active:i.pathname===o?"true":void 0,children:l})},a))})]})},q=r.button`
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
`,V=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
`,ee=r.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,ne=r.div`
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
`,te=r.div``,ie=r.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`,A=r.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${n=>n.active&&"12px"};
`,L=r.button`
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
`,N=r.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`,g=r.label`
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
`,m=r.input`
  appearance: none;
`,P=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transform: ${n=>n.active&&"rotate(180deg)"};
  transition: 300ms;
`,f=r.svg`
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
`,E=(n,i)=>i&&!n?{sex:"male"}:n&&!i?{sex:"female"}:{};//! I AM AN UPGRADE
const I=(n,i,t)=>n&&!i&&!t?{age:"to-1"}:!n&&i&&!t?{age:"to-2"}:!n&&!i&&t?{age:"from-2"}:n&&i&&!t?{age:"to-2"}:n&&!i&&t?{age:"to-1-from-2"}:void 0,re=(n,i,t,a,o)=>n&&i&&t||!n&&!i&&!t?{...E(a,o)}:o&&a||!o&&!a?{...I(n,i,t)}:{...I(n,i,t),...E(a,o)},oe=({checkboxValue:n,setCheckboxValue:i})=>{const[t,a]=d.useState(!1),[o,l]=d.useState(!1),[x,S]=d.useState(!1),[b,w]=d.useState(!1),$=()=>{a(c=>!c)},z=()=>{l(c=>!c)},B=()=>{S(c=>!c)},h=c=>{const{name:u}=c.target;i(p=>({...p,[u]:!p[u]})),w(p=>!p)};d.useEffect(()=>{const c=p=>{p.key==="Escape"&&a(!1)},u=p=>{k.current&&!k.current.contains(p.target)&&a(!1)};return document.addEventListener("keydown",c),document.addEventListener("mousedown",u),()=>{document.removeEventListener("keydown",c),document.removeEventListener("mousedown",u)}},[]);const k=d.useRef(null);return e.jsxs("div",{children:[e.jsxs(q,{type:"button",onClick:$,children:[e.jsx(ee,{children:"Filter"}),e.jsx(V,{children:e.jsx("use",{href:s+"#iconFilters3"})})]}),t&&e.jsx(ne,{active:!0,ref:k,children:e.jsxs(te,{children:[e.jsx(ie,{children:"Filters"}),e.jsxs(A,{active:o?!0:void 0,children:[e.jsxs(L,{type:"button",onClick:z,"aria-label":"toggle age options",children:[e.jsx(P,{active:o?!0:void 0,children:e.jsx("use",{href:s+"#iconChevronDown"})}),"By age"]}),o&&e.jsxs(N,{children:[e.jsxs(g,{children:[e.jsx(f,{check:n.to1,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(j,{check:n.to1,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(m,{onChange:h,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(g,{children:[e.jsx(f,{check:n.to2,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(j,{check:n.to2,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(m,{onChange:h,type:"checkbox",name:"to2",checked:[n.to2,b]}),"up to 2 years"]}),e.jsxs(g,{children:[e.jsx(f,{check:n.from2,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(j,{check:n.from2,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(m,{onChange:h,type:"checkbox",name:"from2",checked:[n.from2,b]}),"from 2 years"]})]})]}),e.jsxs(A,{active:x?!0:void 0,children:[e.jsxs(L,{type:"button",onClick:B,"aria-label":"toggle gender options",children:[e.jsx(P,{active:x?!0:void 0,children:e.jsx("use",{href:s+"#iconChevronDown"})}),"By gender"]}),x&&e.jsxs(N,{children:[e.jsxs(g,{children:[e.jsx(f,{check:n.male,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(j,{check:n.male,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(m,{onChange:h,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(g,{children:[e.jsx(f,{check:n.female,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(j,{check:n.female,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(m,{onChange:h,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})})]})},se=r.div`
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
`,ae=r.h1`
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
`,de=r.div`
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
`,ce=r.div`
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
`,le=r(O)`
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
    
  }

  @media screen and (min-width: 1280px) {
  }
`,pe=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,xe=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,he=r.span`
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
`,ue=()=>{const n=y();M();const i=n.pathname+n.search,t=()=>{console.log("Sign in to add your own notice.")};return e.jsxs(le,{onClick:t,to:"/add-pet",state:{from:i},children:[e.jsx(pe,{children:e.jsx("use",{href:s+"#iconPlus"})}),e.jsx(he,{children:"Add Pet"}),e.jsx(xe,{children:e.jsx("use",{href:s+"#iconPlusSmall"})})]})},ge={to1:!1,to2:!1,from2:!1,female:!1,male:!1},me=()=>{const[n,i]=T(),[t,a]=d.useState(ge),[o,l]=d.useState({}),x=y(),S=d.useMemo(()=>Object.fromEntries([...n]),[n]);d.useEffect(()=>{i({...o,...re(t.to1,t.to2,t.from2,t.female,t.male)})},[t,S,i,o,n]);const b=w=>{l(w?{query:w}:{})};return e.jsx(G,{children:e.jsxs(se,{children:[e.jsx(ae,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(U,{onSubmit:b})}),e.jsxs(de,{children:[e.jsx(Z,{searchParams:n}),e.jsx("div",{children:e.jsxs(ce,{children:[e.jsx(oe,{setCheckboxValue:a,checkboxValue:t}),e.jsx(ue,{state:{from:x}})]})})]}),e.jsx(d.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(Q,{})})]})})};function be(){return e.jsx(me,{})}export{be as default};
