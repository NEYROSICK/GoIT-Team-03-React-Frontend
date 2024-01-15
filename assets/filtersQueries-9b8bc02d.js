import{t as r,L as E,a as y,j as e,k as B,z as N,r as c,h as o,b as D}from"./index-7dda0c14.js";import{F as T,A as G}from"./AttentionModalWrapper-0ba5e056.js";const Q=r.div`
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
`,U=r.li`
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
`,H=r(E)`
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
`,W=({id:n,to:t,text:i,search:a})=>{const s=y();return e.jsx(U,{children:e.jsx(H,{to:{pathname:t,search:a},active:s.pathname===t?"true":void 0,children:i})},n)};let u=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const _=[{id:u(),to:"/notices/sell",text:"sell"},{id:u(),to:"/notices/lost-found",text:"lost/found"},{id:u(),to:"/notices/in-good-hands",text:"in good hands"}],q=[{id:u(),to:"/notices/favorite",text:"favorite ads"},{id:u(),to:"/notices/my-ads",text:"my ads"}],J={publicCategories:_,userCategories:q},{publicCategories:K,userCategories:X}=J,F=(n,t)=>n.map(({id:i,to:a,text:s})=>e.jsx(W,{to:a,text:s,search:t},i)),ce=()=>{const{search:n}=y(),t=B(N);return e.jsxs(Q,{children:[e.jsx(k,{children:F(K,n)}),t&&e.jsx(k,{children:F(X,n)})]})},Y=r.button`
  position: relative;
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
    /* background-image: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%); */
    border: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  & svg {
    stroke: #54adff;
  }

  &:hover svg {
    stroke: #fff;
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

    background-color: transparent;
    transition: 300ms;

    &:focus:hover {
      border: 2px solid #ffffff00;
    }

    &:hover {
      border: 2px solid #ffffff00;
    }

    &:focus {
      border: 2px solid var(--clr-brand-blue);
    }

    &:hover p {
      color: #fff;
    }
  }
`,Z=r.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #54adff;
  z-index: 2;
  transition: 300ms;
`,V=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transition: 300ms;
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

  /* display: flex;
  justify-content: center;
  align-items: center; */

  @media screen and (min-width: 768px) {
    right: auto;
  }
`,te=r.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`,S=r.div`
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
`,C=r.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`,x=r.label`
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
`,h=r.input`
  appearance: none;
`,z=r.svg`
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
`,g=r.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 0;
  opacity: ${n=>n.check&&"1"};
  position: absolute;
  transition: 300ms;
`,le=({checkboxValue:n,setCheckboxValue:t})=>{const[i,a]=c.useState(!1),[s,b]=c.useState(!1),[v,L]=c.useState(!1),[w,P]=c.useState(!1),$=()=>{a(!i)},M=()=>{b(d=>!d)},O=()=>{L(d=>!d)},l=d=>{const{name:p}=d.target;t(m=>({...m,[p]:!m[p]})),P(m=>!m)};c.useEffect(()=>{const d=p=>{j.current&&!j.current.contains(p.target)&&!filterBtn.contains(p.target)&&a(!1)};return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[]);const j=c.useRef(null);return e.jsxs("div",{children:[e.jsx(Y,{id:"filterBtn",type:"button",onClick:$,children:e.jsxs(Z,{children:[e.jsx(ee,{children:"Filter"}),e.jsx(V,{children:e.jsx("use",{href:o+"#iconFilters3"})})]})}),i&&e.jsxs(ne,{id:"filtersMenu",active:!0,ref:j,children:[e.jsx(te,{children:"Filters"}),e.jsxs(S,{active:s?!0:void 0,children:[e.jsxs(A,{type:"button",onClick:M,"aria-label":"toggle age options",children:[e.jsx(z,{active:s?!0:void 0,children:e.jsx("use",{href:o+"#iconChevronDown"})}),"By age"]}),s&&e.jsxs(C,{children:[e.jsxs(x,{children:[e.jsx(f,{check:n.to1,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(g,{check:n.to1,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(h,{onChange:l,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(x,{children:[e.jsx(f,{check:n.to2,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(g,{check:n.to2,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(h,{onChange:l,type:"checkbox",name:"to2",checked:[n.to2,w]}),"up to 2 years"]}),e.jsxs(x,{children:[e.jsx(f,{check:n.from2,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(g,{check:n.from2,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(h,{onChange:l,type:"checkbox",name:"from2",checked:[n.from2,w]}),"from 2 years"]})]})]}),e.jsxs(S,{active:v?!0:void 0,children:[e.jsxs(A,{type:"button",onClick:O,"aria-label":"toggle gender options",children:[e.jsx(z,{active:v?!0:void 0,children:e.jsx("use",{href:o+"#iconChevronDown"})}),"By gender"]}),v&&e.jsxs(C,{children:[e.jsxs(x,{children:[e.jsx(f,{check:n.male,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(g,{check:n.male,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(h,{onChange:l,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(x,{children:[e.jsx(f,{check:n.female,children:e.jsx("use",{href:o+"#iconRound"})}),e.jsx(g,{check:n.female,children:e.jsx("use",{href:o+"#iconCheckRound"})}),e.jsx(h,{onChange:l,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})]})},pe=r.div`
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
`,xe=r.h1`
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
`,he=r.div`
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
`,fe=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 211px;
  align-items: end;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`,ie=r.button`
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

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    width: 129px;
    height: 40px;
    border-radius: 40px;
    padding: 9px 16px;
    flex-direction: row;
  }
`,re=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,oe=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,se=r.span`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`,ge=()=>{const[n,t]=c.useState(!1),i=y(),a=D(),s=B(N),b=()=>{if(!s){t(!0);return}a("/add-pet",{state:{from:i}})};return e.jsxs(e.Fragment,{children:[e.jsxs(ie,{onClick:b,children:[e.jsx(re,{children:e.jsx("use",{href:o+"#iconPlus"})}),e.jsx(se,{children:"Add Pet"}),e.jsx(oe,{children:e.jsx("use",{href:o+"#iconPlusSmall"})})]}),n&&e.jsx(T,{onClose:()=>{t(!1)},showModal:n,children:e.jsx(G,{setShowModal:t,sprite:o})})]})},R=(n,t)=>t&&!n?{sex:"male"}:n&&!t?{sex:"female"}:{};//! I AM AN UPGRADE
const I=(n,t,i)=>n&&!t&&!i?{age:"to-1"}:!n&&t&&!i?{age:"to-2"}:!n&&!t&&i?{age:"from-2"}:n&&t&&!i?{age:"to-2"}:n&&!t&&i?{age:"to-1-from-2"}:void 0,ue=(n,t,i,a,s)=>n&&t&&i||!n&&!t&&!i?{...R(a,s)}:s&&a||!s&&!a?{...I(n,t,i)}:{...I(n,t,i),...R(a,s)};export{ue as A,he as F,pe as N,xe as P,ce as a,fe as b,le as c,ge as d};
