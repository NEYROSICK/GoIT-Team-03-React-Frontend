import{n as r,L as z,u as w,a as D,j as e,r as d,b as s,c as q,d as T,C as E,O as G}from"./index-258cd1de.js";import{N as M}from"./NoticesSearch-200bf893.js";import{s as Q}from"./selectors-9c63f203.js";const U=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 205px;

  height: 121px;

  @media screen and (min-width: 768px) {
    // max-width: 319px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 540px;
    height: 35px;
    flex-direction: row;
    gap: 12px;
  }
`,k=r.ul`
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
`;r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex-direction: row;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    flex-wrap: wrap;
    gap: 12px;
  }
`;const C=r.li`
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
`,S=r(z)`
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
`;let j=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const H=[{id:j(),to:"/notices/sell",text:"sell"},{id:j(),to:"/notices/lost-found",text:"lost/found"},{id:j(),to:"/notices/in-good-hands",text:"in good hands"}],_=[{id:j(),to:"/notices/favorite",text:"favorite ads"},{id:j(),to:"/notices/my-ads",text:"my ads"}],J={publicCategories:H,userCategories:_},{publicCategories:K,userCategories:W}=J,X=()=>{const{search:n}=w(),t=w(),i=D(Q);return e.jsxs(U,{children:[e.jsx(k,{children:K.map(({id:a,to:o,text:c})=>e.jsx(C,{children:e.jsx(S,{to:{pathname:o,search:n},active:t.pathname===o?"true":void 0,children:c})},a))}),i&&e.jsx(k,{children:W.map(({id:a,to:o,text:c})=>e.jsx(C,{children:e.jsx(S,{to:{pathname:o,search:n},active:t.pathname===o?"true":void 0,children:c})},a))})]})},Y=r.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;S
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

`,Z=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
`,V=r.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,ee=r.div`
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
`,ne=r.div``,te=r.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`,F=r.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${n=>n.active&&"12px"};
`,A=r.button`
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
`,P=r.form`
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
`,u=r.input`
appearance: none;
`,R=r.svg`
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
    
  `,m=r.svg`
  width: 24px;
    height: 24px;
    stroke: var(--clr-brand-blue);
    fill: none;
    opacity: 0;
    opacity: ${n=>n.check&&"1"};
    position: absolute;
    transition: 300ms;
  `,N=(n,t)=>t&&!n?{sex:"male"}:n&&!t?{sex:"female"}:{};//! I AM AN UPGRADE
const I=(n,t,i)=>{if(n)return{age:"to-1"};if(t)return{age:"to-2"};if(i)return{age:"from-2"};if(n&&t)return{age:"to-2"};if(n&&i)return{age:"to-1-from-2"}},ie=(n,t,i,a,o)=>n&&t&&i||!n&&!t&&!i?{...N(a,o)}:o&&a||!o&&!a?{...I(n,t,i)}:{...I(n,t,i),...N(a,o)},re=({checkboxValue:n,setCheckboxValue:t})=>{const[i,a]=d.useState(!1),[o,c]=d.useState(!1),[p,b]=d.useState(!1),[x,$]=d.useState(!1),B=()=>{a(l=>!l)},L=()=>{c(l=>!l)},O=()=>{b(l=>!l)},h=l=>{const{name:y}=l.target;t(v=>({...v,[y]:!v[y]})),$(v=>!v),console.log(x)};return e.jsxs("div",{children:[e.jsxs(Y,{type:"button",onClick:B,children:[e.jsx(V,{children:"Filter"}),e.jsx(Z,{children:e.jsx("use",{href:s+"#iconFilters3"})})]}),i&&e.jsx(ee,{active:!0,children:e.jsxs(ne,{children:[e.jsx(te,{children:"Filters"}),e.jsxs(F,{active:o?!0:void 0,children:[e.jsxs(A,{type:"button",onClick:L,"aria-label":"toggle age options",children:[e.jsx(R,{active:o?!0:void 0,children:e.jsx("use",{href:s+"#iconChevronDown"})}),"By age"]}),o&&e.jsxs(P,{children:[e.jsxs(g,{children:[e.jsx(f,{check:n.to1,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(m,{check:n.to1,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(u,{onChange:h,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(g,{children:[e.jsx(f,{check:n.to2,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(m,{check:n.to2,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(u,{onChange:h,type:"checkbox",name:"to2",checked:[n.to2,x]}),"up to 2 years"]}),e.jsxs(g,{children:[e.jsx(f,{check:n.from2,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(m,{check:n.from2,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(u,{onChange:h,type:"checkbox",name:"from2",checked:[n.from2,x]}),"from 2 years"]})]})]}),e.jsxs(F,{active:p?!0:void 0,children:[e.jsxs(A,{type:"button",onClick:O,"aria-label":"toggle gender options",children:[e.jsx(R,{active:p?!0:void 0,children:e.jsx("use",{href:s+"#iconChevronDown"})}),"By gender"]}),p&&e.jsxs(P,{children:[e.jsxs(g,{children:[e.jsx(f,{check:n.male,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(m,{check:n.male,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(u,{onChange:h,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(g,{children:[e.jsx(f,{check:n.female,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(m,{check:n.female,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(u,{onChange:h,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})})]})},oe=r.div`
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
`,se=r.h1`
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
`,ae=r.div`
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
`,de=r.div`
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
`,ce=r(z)`
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
`,le=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,pe=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,xe=r.span`
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
`,he=()=>{const n=w();q();const t=n.pathname+n.search,i=()=>{console.log("Sign in to add your own notice.")};return e.jsxs(ce,{onClick:i,to:"/add-pet",state:{from:t},children:[e.jsx(le,{children:e.jsx("use",{href:s+"#iconPlus"})}),e.jsx(xe,{children:"Add Pet"}),e.jsx(pe,{children:e.jsx("use",{href:s+"#iconPlusSmall"})})]})},ge={to1:!1,to2:!1,from2:!1,female:!1,male:!1},je=()=>{const[n,t]=T(),[i,a]=d.useState(ge),o=n.get("query");d.useEffect(()=>{t({...ie(i.to1,i.to2,i.from2,i.female,i.male)})},[i]);const c=({query:x})=>{n.set("query",x),t(n),b()},p=()=>{n.delete("query",o),t(n),b()},b=d.useCallback(()=>{t(n)},[n,t]);return e.jsx(E,{children:e.jsxs(oe,{children:[e.jsx(se,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(M,{onSubmit:c,onClear:p})}),e.jsxs(ae,{children:[e.jsx(X,{searchParams:n}),e.jsx("div",{children:e.jsxs(de,{children:[e.jsx(re,{setCheckboxValue:a,checkboxValue:i}),e.jsx(he,{})]})})]}),e.jsx(d.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(G,{})})]})})};export{je as default};
