import{p as i,L as D,a as y,k as L,j as e,r as l,h as s,b as T}from"./index-dc97b1b7.js";import{a as N}from"./selectors-51ca07e4.js";import{F as G,A as Q}from"./AttentionModalWrapper-fb76a061.js";const U=i.div`
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
`,k=i.ul`
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
`,F=i.li`
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
`,S=i(D)`
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
`;let m=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const H=[{id:m(),to:"/notices/sell",text:"sell"},{id:m(),to:"/notices/lost-found",text:"lost/found"},{id:m(),to:"/notices/in-good-hands",text:"in good hands"}],W=[{id:m(),to:"/notices/favorite",text:"favorite ads"},{id:m(),to:"/notices/my-ads",text:"my ads"}],_={publicCategories:H,userCategories:W},{publicCategories:q,userCategories:J}=_,de=()=>{const{search:n}=y(),t=y(),r=L(N);return e.jsxs(U,{children:[e.jsx(k,{children:q.map(({id:a,to:o,text:c})=>e.jsx(F,{children:e.jsx(S,{to:{pathname:o,search:n},active:t.pathname===o?"true":void 0,children:c})},a))}),r&&e.jsx(k,{children:J.map(({id:a,to:o,text:c})=>e.jsx(F,{children:e.jsx(S,{to:{pathname:o,search:n},active:t.pathname===o?"true":void 0,children:c})},a))})]})},K=i.button`
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
`,X=i.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #54adff;
  z-index: 2;
  transition: 300ms;
`,Y=i.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transition: 300ms;
`,Z=i.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,V=i.div`
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
`,ee=i.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`,A=i.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${n=>n.active&&"12px"};
`,C=i.button`
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
`,z=i.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`,h=i.label`
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
`,f=i.input`
  appearance: none;
`,R=i.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  transform: ${n=>n.active&&"rotate(180deg)"};
  transition: 300ms;
`,g=i.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 1;
  opacity: ${n=>n.check&&"0"};
  transition: 300ms;
`,u=i.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: none;
  opacity: 0;
  opacity: ${n=>n.check&&"1"};
  position: absolute;
  transition: 300ms;
`,B=(n,t)=>t&&!n?{sex:"male"}:n&&!t?{sex:"female"}:{};//! I AM AN UPGRADE
const I=(n,t,r)=>n&&!t&&!r?{age:"to-1"}:!n&&t&&!r?{age:"to-2"}:!n&&!t&&r?{age:"from-2"}:n&&t&&!r?{age:"to-2"}:n&&!t&&r?{age:"to-1-from-2"}:void 0,ce=(n,t,r,a,o)=>n&&t&&r||!n&&!t&&!r?{...B(a,o)}:o&&a||!o&&!a?{...I(n,t,r)}:{...I(n,t,r),...B(a,o)},le=({checkboxValue:n,setCheckboxValue:t})=>{const[r,a]=l.useState(!1),[o,c]=l.useState(!1),[v,P]=l.useState(!1),[w,$]=l.useState(!1),M=()=>{a(!r)},O=()=>{c(d=>!d)},E=()=>{P(d=>!d)},p=d=>{const{name:x}=d.target;t(b=>({...b,[x]:!b[x]})),$(b=>!b)};l.useEffect(()=>{const d=x=>{j.current&&!j.current.contains(x.target)&&!filterBtn.contains(x.target)&&a(!1)};return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[]);const j=l.useRef(null);return e.jsxs("div",{children:[e.jsx(K,{id:"filterBtn",type:"button",onClick:M,children:e.jsxs(X,{children:[e.jsx(Z,{children:"Filter"}),e.jsx(Y,{children:e.jsx("use",{href:s+"#iconFilters3"})})]})}),r&&e.jsxs(V,{id:"filtersMenu",active:!0,ref:j,children:[e.jsx(ee,{children:"Filters"}),e.jsxs(A,{active:o?!0:void 0,children:[e.jsxs(C,{type:"button",onClick:O,"aria-label":"toggle age options",children:[e.jsx(R,{active:o?!0:void 0,children:e.jsx("use",{href:s+"#iconChevronDown"})}),"By age"]}),o&&e.jsxs(z,{children:[e.jsxs(h,{children:[e.jsx(g,{check:n.to1,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(u,{check:n.to1,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(f,{onChange:p,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(h,{children:[e.jsx(g,{check:n.to2,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(u,{check:n.to2,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(f,{onChange:p,type:"checkbox",name:"to2",checked:[n.to2,w]}),"up to 2 years"]}),e.jsxs(h,{children:[e.jsx(g,{check:n.from2,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(u,{check:n.from2,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(f,{onChange:p,type:"checkbox",name:"from2",checked:[n.from2,w]}),"from 2 years"]})]})]}),e.jsxs(A,{active:v?!0:void 0,children:[e.jsxs(C,{type:"button",onClick:E,"aria-label":"toggle gender options",children:[e.jsx(R,{active:v?!0:void 0,children:e.jsx("use",{href:s+"#iconChevronDown"})}),"By gender"]}),v&&e.jsxs(z,{children:[e.jsxs(h,{children:[e.jsx(g,{check:n.male,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(u,{check:n.male,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(f,{onChange:p,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(h,{children:[e.jsx(g,{check:n.female,children:e.jsx("use",{href:s+"#iconRound"})}),e.jsx(u,{check:n.female,children:e.jsx("use",{href:s+"#iconCheckRound"})}),e.jsx(f,{onChange:p,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})]})},pe=i.div`
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
`,xe=i.h1`
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
`,he=i.div`
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
`,fe=i.div`
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
`,ne=i.button`
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
`,te=i.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ie=i.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,re=i.span`
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
`,ge=()=>{const[n,t]=l.useState(!1),r=y(),a=T(),o=L(N),c=()=>{if(!o){t(!0);return}a("/add-pet",{state:{from:r}})};return e.jsxs(e.Fragment,{children:[e.jsxs(ne,{onClick:c,children:[e.jsx(te,{children:e.jsx("use",{href:s+"#iconPlus"})}),e.jsx(re,{children:"Add Pet"}),e.jsx(ie,{children:e.jsx("use",{href:s+"#iconPlusSmall"})})]}),n&&e.jsx(G,{onClose:()=>{t(!1)},showModal:n,children:e.jsx(Q,{setShowModal:t,sprite:s})})]})};export{ce as A,he as F,pe as N,xe as P,de as a,fe as b,le as c,ge as d};