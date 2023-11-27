import{n as r,L as B,u as w,a as q,j as e,r as d,b as o,c as L,d as E,C as T,O as G}from"./index-669a6707.js";import{N as M}from"./NoticesSearch-19824f2f.js";import{s as Q}from"./selectors-9c63f203.js";const U=r.div`
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
`,A=r(B)`
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
`;let m=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const H=[{id:m(),to:"/notices/sell",text:"sell"},{id:m(),to:"/notices/lost-found",text:"lost/found"},{id:m(),to:"/notices/in-good-hands",text:"in good hands"}],_=[{id:m(),to:"/notices/favorite",text:"favorite ads"},{id:m(),to:"/notices/my-ads",text:"my ads"}],J={publicCategories:H,userCategories:_},{publicCategories:K,userCategories:W}=J,X=()=>{const{search:n}=w(),t=w(),i=q(Q);return e.jsxs(U,{children:[e.jsx(F,{children:K.map(({id:a,to:s,text:c})=>e.jsx(C,{children:e.jsx(A,{to:{pathname:s,search:n},active:t.pathname===s?"true":void 0,children:c})},a))}),i&&e.jsx(F,{children:W.map(({id:a,to:s,text:c})=>e.jsx(C,{children:e.jsx(A,{to:{pathname:s,search:n},active:t.pathname===s?"true":void 0,children:c})},a))})]})},Y=r.button`
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
`,P=r.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${n=>n.active&&"12px"};
`,R=r.button`
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
`,h=r.label`
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
`,I=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transform: ${n=>n.active&&"rotate(180deg)"};
  transition: 300ms;
  `,u=r.svg`
    width: 24px;
    height: 24px;
    stroke: var(--clr-brand-blue);
    fill: none;
    opacity: 1;
    opacity: ${n=>n.check&&"0"};
    transition: 300ms;
    
  `,f=r.svg`
  width: 24px;
    height: 24px;
    stroke: var(--clr-brand-blue);
    fill: none;
    opacity: 0;
    opacity: ${n=>n.check&&"1"};
    position: absolute;
    transition: 300ms;
  `,z=(n,t)=>t&&!n?{sex:"male"}:n&&!t?{sex:"female"}:{};//! I AM AN UPGRADE
const $=(n,t,i)=>n&&!t&&!i?{age:"to-1"}:!n&&t&&!i?{age:"to-2"}:!n&&!t&&i?{age:"from-2"}:n&&t&&!i?{age:"to-1-to-2"}:!n&&t&&i?{age:"to-2-from-2"}:n&&!t&&i?{age:"to-1-from-2"}:{},ie=(n,t,i,a,s)=>n&&t&&i||!n&&!t&&!i?{...z(a,s)}:s&&a||!s&&!a?{...$(n,t,i)}:{...$(n,t,i),...z(a,s)},re=({checkboxValue:n,setCheckboxValue:t})=>{const[i,a]=d.useState(!1),[s,c]=d.useState(!1),[p,y]=d.useState(!1),[j,b]=d.useState(!1),S=()=>{a(l=>!l)},O=()=>{c(l=>!l)},D=()=>{y(l=>!l)},x=l=>{const{name:k}=l.target;t(v=>({...v,[k]:!v[k]})),b(v=>!v)};return e.jsxs("div",{children:[e.jsxs(Y,{type:"button",onClick:S,children:[e.jsx(V,{children:"Filter"}),e.jsx(Z,{children:e.jsx("use",{href:o+"#iconFilters3"})})]}),i&&e.jsx(ee,{active:!0,children:e.jsxs(ne,{children:[e.jsx(te,{children:"Filters"}),e.jsxs(P,{active:s?!0:void 0,children:[e.jsxs(R,{type:"button",onClick:O,"aria-label":"toggle age options",children:[e.jsx(I,{active:s?!0:void 0,children:e.jsx("use",{href:o+"#iconChevronDown"})}),"By age"]}),s&&e.jsxs(N,{children:[e.jsxs(h,{children:[e.jsx(u,{check:n.to1,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(f,{check:n.to1,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(g,{onChange:x,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(h,{children:[e.jsx(u,{check:n.to2,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(f,{check:n.to2,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(g,{onChange:x,type:"checkbox",name:"to2",checked:[n.to2,j]}),"up to 2 years"]}),e.jsxs(h,{children:[e.jsx(u,{check:n.from2,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(f,{check:n.from2,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(g,{onChange:x,type:"checkbox",name:"from2",checked:[n.from2,j]}),"from 2 years"]})]})]}),e.jsxs(P,{active:p?!0:void 0,children:[e.jsxs(R,{type:"button",onClick:D,"aria-label":"toggle gender options",children:[e.jsx(I,{active:p?!0:void 0,children:e.jsx("use",{href:o+"#iconChevronDown"})}),"By gender"]}),p&&e.jsxs(N,{children:[e.jsxs(h,{children:[e.jsx(u,{check:n.male,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(f,{check:n.male,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(g,{onChange:x,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(h,{children:[e.jsx(u,{check:n.female,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(f,{check:n.female,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(g,{onChange:x,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})})]})},se=r.div`
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
`,oe=r.h1`
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
`,ce=r(B)`
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
`,he=()=>{const n=w();L();const t=n.pathname+n.search,i=()=>{console.log("Sign in to add your own notice.")};return e.jsxs(ce,{onClick:i,to:"/add-pet",state:{from:t},children:[e.jsx(le,{children:e.jsx("use",{href:o+"#iconPlus"})}),e.jsx(xe,{children:"Add Pet"}),e.jsx(pe,{children:e.jsx("use",{href:o+"#iconPlusSmall"})})]})},ge={to1:!1,to2:!1,from2:!1,female:!1,male:!1},je=()=>{const[n,t]=E(),[i,a]=d.useState(ge),s=n.get("query"),c=L(),p=w();d.useEffect(()=>{t({...ie(i.to1,i.to2,i.from2,i.female,i.male)})},[i]),d.useEffect(()=>{c("/notices/sell",{replace:!0})},[]);const y=({query:S})=>{n.set("query",S),t(n),b()},j=()=>{n.delete("query",s),t(n),b()},b=d.useCallback(()=>{t(n)},[n,t]);return e.jsx(T,{children:e.jsxs(se,{children:[e.jsx(oe,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(M,{onSubmit:y,onClear:j})}),e.jsxs(ae,{children:[e.jsx(X,{searchParams:n}),e.jsx("div",{children:e.jsxs(de,{children:[e.jsx(re,{setCheckboxValue:a,checkboxValue:i}),e.jsx(he,{state:{from:p}})]})})]}),e.jsx(d.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(G,{})})]})})};export{je as default};
