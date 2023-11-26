import{n as r,L as N,u as v,a as B,j as e,r as l,b as O,C as I,O as $}from"./index-6053f046.js";import{N as D}from"./NoticesSearch-48d7c8c4.js";import{s as q}from"./selectors-9c63f203.js";import{s as g}from"./sprite-aa7412ec.js";const E=r.div`
  max-width: 205px;
  height: 121px;

  @media screen and (min-width: 768px) {
    max-width: 319px;
  }
`,G=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction:  row;
    flex-wrap: wrap;
    gap: 12px;
  }
`,M=r.ul`
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
`,w=r.li`
display: flex;
border: none;
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

&:hover,
&:focus {
    
    color: var(--clr-primary-inv);
    
}
`,j=r(N)`
padding: 8px 16px;
text-decoration: none;
color: var(--clr-brand-blue);
color: ${n=>n.active&&"var(--clr-primary-inv)"};
background-color: ${n=>n.active&&"var(--clr-brand-blue)"};
border-radius: 40px;
&:focus, &:hover {
    color: var(--clr-primary-inv);
    background-color: var(--clr-brand-blue);
}
`;let h=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const Q=[{id:h(),to:"/notices/sell",text:"sell"},{id:h(),to:"/notices/lost-found",text:"lost/found"},{id:h(),to:"/notices/in-good-hands",text:"in good hands"}],T=[{id:h(),to:"/notices/favorite",text:"favorite ads"},{id:h(),to:"/notices/my-ads",text:"my ads"}],U={publicCategories:Q,userCategories:T},{publicCategories:R,userCategories:H}=U,_=()=>{const{search:n}=v(),t=v(),i=B(q);return e.jsxs(E,{children:[e.jsx(G,{children:R.map(({id:a,to:o,text:s})=>e.jsx(w,{children:e.jsx(j,{to:{pathname:o,search:n},active:t.pathname===o?!0:void 0,children:s})},a))}),i&&e.jsx(M,{children:H.map(({id:a,to:o,text:s})=>e.jsx(w,{children:e.jsx(j,{to:{pathname:o,search:n},active:t.pathname===o?!0:void 0,children:s})},a))})]})},J=r.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #c5dff6;
  color: var(--clr-brand-blue);

  &:hover,
  &:focus {
    color: var(--clr-bcg-user);
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
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

    &:hover,
    &:focus {
      color: var(--clr-primary-inv);
      border: none;
      background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    }
  }

  @media screen and (min-width: 1280px) {
  }
`,K=r.svg`
  stroke: currentColor;
  fill: none;
`,V=r.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,W=r.div`
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
`,X=r.div``,Y=r.h4`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--clr-brand-blue);
`,y=r.div`
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
  transition: 300ms;
  padding: 8px;
  padding: ${n=>n.active&&"14px"};
`,S=r.button`
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
`,k=r.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #54adff;
`,x=r.label`
  display: flex;
  gap: 12px;
  color: #54adff;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
`,C=r.input``,F=r.svg`
  stroke: currentColor;
  fill: none;
  width: 24px;
  height: 24px;
  display: ${n=>n.active&&"none"};
  `,Z=({checkboxValue:n,setCheckboxValue:t})=>{const[i,a]=l.useState(!1),[o,s]=l.useState(!1),[c,u]=l.useState(!1),m=()=>{a(d=>!d)},z=()=>{s(d=>!d)},L=()=>{u(d=>!d)},p=d=>{const{name:f}=d.target;t(b=>({...b,[f]:!b[f]}))};return e.jsxs("div",{children:[e.jsxs(J,{type:"button",onClick:m,children:[e.jsx(V,{children:"Filter"}),e.jsx(K,{children:e.jsx("use",{href:g+"#iconFilters3"})})]}),i&&e.jsx(W,{active:!0,children:e.jsxs(X,{children:[e.jsx(Y,{children:"Filters"}),e.jsxs(y,{active:o?!0:void 0,children:[e.jsxs(S,{type:"button",onClick:z,"aria-label":"toggle age options",children:[e.jsx(F,{active:o?!0:void 0,children:e.jsx("use",{href:g+"#iconChevronDown"})}),"By age"]}),o&&e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx("input",{onChange:p,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(x,{children:[e.jsx("input",{onChange:p,type:"checkbox",name:"to2",checked:n.to2}),"up to 2 years"]}),e.jsxs(x,{children:[e.jsx("input",{onChange:p,type:"checkbox",name:"from2",checked:n.from2}),"from 2 years"]})]})]}),e.jsxs(y,{active:c?!0:void 0,children:[e.jsxs(S,{type:"button",onClick:L,"aria-label":"toggle gender options",children:[e.jsx(F,{active:c?!0:void 0,children:e.jsx("use",{href:g+"#iconChevronDown"})}),"By gender"]}),c&&e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx(C,{onChange:p,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(x,{children:[e.jsx(C,{onChange:p,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})})]})},ee=r.div`
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
`,ne=r.h1`
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
`,te=r.div`
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
`,ie=r.div`
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
`,re=r(N)`
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
`,oe=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,ae=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
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

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`,de=()=>{const n=()=>{console.log("Sign in to add your own notice.")};return e.jsxs(re,{onClick:n,to:"/add-pet",children:[e.jsx(oe,{children:e.jsx("use",{href:g+"#iconPlus"})}),e.jsx(se,{children:"Add Pet"}),e.jsx(ae,{children:e.jsx("use",{href:g+"#iconPlusSmall"})})]})},A=(n,t)=>{if(t)return{sex:"male"};if(n)return{sex:"female"}};//! I AM AN UPGRADE
const P=(n,t,i)=>{if(n)return{age:"to-1"};if(t)return{age:"to-2"};if(i)return{age:"from-2"};if(n&&t)return{age:"to-2"};if(n&&i)return{age:"to-1-from-2"}},le=(n,t,i,a,o)=>n&&t&&i||!n&&!t&&!i?{...A(a,o)}:o&&a||!o&&!a?{...P(n,t,i)}:{...P(n,t,i),...A(a,o)},ce={to1:!1,to2:!1,from2:!1,female:!1,male:!1},ue=()=>{const[n,t]=O(),[i,a]=l.useState(ce),o=n.get("query");l.useEffect(()=>{t({...le(i.to1,i.to2,i.from2,i.female,i.male)})},[i]);const s=({query:m})=>{n.set("query",m),t(n),u()},c=()=>{n.delete("query",o),t(n),u()},u=l.useCallback(()=>{t(n)},[n,t]);return e.jsx(I,{children:e.jsxs(ee,{children:[e.jsx(ne,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(D,{onSubmit:s,onClear:c})}),e.jsxs(te,{children:[e.jsx(_,{searchParams:n}),e.jsx("div",{children:e.jsxs(ie,{children:[e.jsx(Z,{setCheckboxValue:a,checkboxValue:i}),e.jsx(de,{})]})})]}),e.jsx(l.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx($,{})})]})})};export{ue as default};
