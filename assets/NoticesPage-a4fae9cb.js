import{n as r,L as G,u as y,a as O,j as e,r as c,b as o,c as $,d as Q,C as T,O as U}from"./index-8cb78a69.js";import{N as H}from"./NoticesSearch-6646fdad.js";import{s as M}from"./selectors-9c63f203.js";import{F as W,A as _}from"./AttentionModalWrapper-8eec2ab2.js";const J=r.div`
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
`;let j=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((i,t)=>(t&=63,t<36?i+=t.toString(36):t<62?i+=(t-26).toString(36).toUpperCase():t>62?i+="-":i+="_",i),"");const K=[{id:j(),to:"/notices/sell",text:"sell"},{id:j(),to:"/notices/lost-found",text:"lost/found"},{id:j(),to:"/notices/in-good-hands",text:"in good hands"}],X=[{id:j(),to:"/notices/favorite",text:"favorite ads"},{id:j(),to:"/notices/my-ads",text:"my ads"}],Y={publicCategories:K,userCategories:X},{publicCategories:Z,userCategories:q}=Y,V=()=>{const{search:n}=y(),i=y(),t=O(M);return e.jsxs(J,{children:[e.jsx(C,{children:Z.map(({id:a,to:s,text:d})=>e.jsx(A,{children:e.jsx(R,{to:{pathname:s,search:n},active:i.pathname===s?"true":void 0,children:d})},a))}),t&&e.jsx(C,{children:q.map(({id:a,to:s,text:d})=>e.jsx(A,{children:e.jsx(R,{to:{pathname:s,search:n},active:i.pathname===s?"true":void 0,children:d})},a))})]})},ee=r.button`
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
`,re=r.h4`
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
`,N=r.button`
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
`,z=r.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`,u=r.label`
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
`,f=r.input`
  appearance: none;
`,B=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transform: ${n=>n.active&&"rotate(180deg)"};
  transition: 300ms;
`,g=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 1;
  opacity: ${n=>n.check&&"0"};
  transition: 300ms;
`,m=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 0;
  opacity: ${n=>n.check&&"1"};
  position: absolute;
  transition: 300ms;
`,I=(n,i)=>i&&!n?{sex:"male"}:n&&!i?{sex:"female"}:{};//! I AM AN UPGRADE
const L=(n,i,t)=>n&&!i&&!t?{age:"to-1"}:!n&&i&&!t?{age:"to-2"}:!n&&!i&&t?{age:"from-2"}:n&&i&&!t?{age:"to-2"}:n&&!i&&t?{age:"to-1-from-2"}:void 0,se=(n,i,t,a,s)=>n&&i&&t||!n&&!i&&!t?{...I(a,s)}:s&&a||!s&&!a?{...L(n,i,t)}:{...L(n,i,t),...I(a,s)},oe=({checkboxValue:n,setCheckboxValue:i})=>{const[t,a]=c.useState(!1),[s,d]=c.useState(!1),[p,S]=c.useState(!1),[b,k]=c.useState(!1),v=()=>{a(!t)},E=()=>{d(l=>!l)},D=()=>{S(l=>!l)},x=l=>{const{name:h}=l.target;i(w=>({...w,[h]:!w[h]})),k(w=>!w)};c.useEffect(()=>{const l=h=>{F.current&&!F.current.contains(h.target)&&!filterBtn.contains(h.target)&&a(!1)};return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[]);const F=c.useRef(null);return e.jsxs("div",{children:[e.jsxs(ee,{id:"filterBtn",type:"button",onClick:v,children:[e.jsx(te,{children:"Filter"}),e.jsx(ne,{children:e.jsx("use",{href:o+"#iconFilters3"})})]}),t&&e.jsxs(ie,{id:"filtersMenu",active:!0,ref:F,children:[e.jsx(re,{children:"Filters"}),e.jsxs(P,{active:s?!0:void 0,children:[e.jsxs(N,{type:"button",onClick:E,"aria-label":"toggle age options",children:[e.jsx(B,{active:s?!0:void 0,children:e.jsx("use",{href:o+"#iconChevronDown"})}),"By age"]}),s&&e.jsxs(z,{children:[e.jsxs(u,{children:[e.jsx(g,{check:n.to1,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(m,{check:n.to1,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(f,{onChange:x,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(u,{children:[e.jsx(g,{check:n.to2,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(m,{check:n.to2,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(f,{onChange:x,type:"checkbox",name:"to2",checked:[n.to2,b]}),"up to 2 years"]}),e.jsxs(u,{children:[e.jsx(g,{check:n.from2,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(m,{check:n.from2,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(f,{onChange:x,type:"checkbox",name:"from2",checked:[n.from2,b]}),"from 2 years"]})]})]}),e.jsxs(P,{active:p?!0:void 0,children:[e.jsxs(N,{type:"button",onClick:D,"aria-label":"toggle gender options",children:[e.jsx(B,{active:p?!0:void 0,children:e.jsx("use",{href:o+"#iconChevronDown"})}),"By gender"]}),p&&e.jsxs(z,{children:[e.jsxs(u,{children:[e.jsx(g,{check:n.male,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(m,{check:n.male,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(f,{onChange:x,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(u,{children:[e.jsx(g,{check:n.female,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(m,{check:n.female,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(f,{onChange:x,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})]})},ae=r.div`
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
`,le=r.div`
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
`,pe=r.button`
  position: fixed;
  bottom: 30px;
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
`,xe=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,he=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,ue=r.span`
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
`,fe=()=>{const[n,i]=c.useState(!1),t=y(),a=$(),s=O(M),d=()=>{if(!s){i(!0);return}a("/add-pet",{state:{from:t}})};return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{onClick:d,children:[e.jsx(xe,{children:e.jsx("use",{href:o+"#iconPlus"})}),e.jsx(ue,{children:"Add Pet"}),e.jsx(he,{children:e.jsx("use",{href:o+"#iconPlusSmall"})})]}),n&&e.jsx(W,{onClose:()=>{i(!1)},showModal:n,children:e.jsx(_,{setShowModal:i,sprite:o})})]})},ge={to1:!1,to2:!1,from2:!1,female:!1,male:!1},me=()=>{const[n,i]=Q(),[t,a]=c.useState(ge),[s,d]=c.useState({}),p=y(),S=$(),b=c.useMemo(()=>Object.fromEntries([...n]),[n]);c.useEffect(()=>{i({...s,...se(t.to1,t.to2,t.from2,t.female,t.male)})},[t,b,i,s,n]),c.useEffect(()=>{p.pathname==="/notices"&&S("/notices/sell")},[]);const k=v=>{d(v?{query:v}:{})};return e.jsx(T,{children:e.jsxs(ae,{children:[e.jsx(ce,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(H,{onSubmit:k})}),e.jsxs(de,{children:[e.jsx(V,{searchParams:n}),e.jsx("div",{children:e.jsxs(le,{children:[e.jsx(oe,{setCheckboxValue:a,checkboxValue:t}),e.jsx(fe,{state:{from:p}})]})})]}),e.jsx(c.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(U,{})})]})})};function ye(){return e.jsx(me,{})}export{ye as default};
