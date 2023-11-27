import{n as r,L as P,u as f,a as B,j as e,r as l,b as h,c as O,d as I,C as $,O as D}from"./index-2b3eb367.js";import{N as q}from"./NoticesSearch-2b785872.js";import{s as T}from"./selectors-9c63f203.js";const E=r.div`
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
`,j=r(P)`
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
`;let g=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const Q=[{id:g(),to:"/notices/sell",text:"sell"},{id:g(),to:"/notices/lost-found",text:"lost/found"},{id:g(),to:"/notices/in-good-hands",text:"in good hands"}],U=[{id:g(),to:"/notices/favorite",text:"favorite ads"},{id:g(),to:"/notices/my-ads",text:"my ads"}],R={publicCategories:Q,userCategories:U},{publicCategories:H,userCategories:_}=R,J=()=>{const{search:n}=f(),t=f(),i=B(T);return e.jsxs(E,{children:[e.jsx(G,{children:H.map(({id:a,to:o,text:s})=>e.jsx(w,{children:e.jsx(j,{to:{pathname:o,search:n},active:t.pathname===o?"true":void 0,children:s})},a))}),i&&e.jsx(M,{children:_.map(({id:a,to:o,text:s})=>e.jsx(w,{children:e.jsx(j,{to:{pathname:o,search:n},active:t.pathname===o?"true":void 0,children:s})},a))})]})},K=r.button`
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
`,V=r.svg`
  stroke: currentColor;
  fill: none;
`,W=r.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,X=r.div`
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
`,Y=r.div``,Z=r.h4`
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
  `,ee=({checkboxValue:n,setCheckboxValue:t})=>{const[i,a]=l.useState(!1),[o,s]=l.useState(!1),[c,u]=l.useState(!1),m=()=>{a(d=>!d)},z=()=>{s(d=>!d)},L=()=>{u(d=>!d)},p=d=>{const{name:b}=d.target;t(v=>({...v,[b]:!v[b]}))};return e.jsxs("div",{children:[e.jsxs(K,{type:"button",onClick:m,children:[e.jsx(W,{children:"Filter"}),e.jsx(V,{children:e.jsx("use",{href:h+"#iconFilters3"})})]}),i&&e.jsx(X,{active:!0,children:e.jsxs(Y,{children:[e.jsx(Z,{children:"Filters"}),e.jsxs(y,{active:o?!0:void 0,children:[e.jsxs(S,{type:"button",onClick:z,"aria-label":"toggle age options",children:[e.jsx(F,{active:o?!0:void 0,children:e.jsx("use",{href:h+"#iconChevronDown"})}),"By age"]}),o&&e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx("input",{onChange:p,type:"checkbox",name:"to1",checked:n.to1}),"up to 1 year"]}),e.jsxs(x,{children:[e.jsx("input",{onChange:p,type:"checkbox",name:"to2",checked:n.to2}),"up to 2 years"]}),e.jsxs(x,{children:[e.jsx("input",{onChange:p,type:"checkbox",name:"from2",checked:n.from2}),"from 2 years"]})]})]}),e.jsxs(y,{active:c?!0:void 0,children:[e.jsxs(S,{type:"button",onClick:L,"aria-label":"toggle gender options",children:[e.jsx(F,{active:c?!0:void 0,children:e.jsx("use",{href:h+"#iconChevronDown"})}),"By gender"]}),c&&e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx(C,{onChange:p,type:"checkbox",name:"male",checked:n.male}),"male"]}),e.jsxs(x,{children:[e.jsx(C,{onChange:p,type:"checkbox",name:"female",checked:n.female}),"female"]})]})]})]})})]})},ne=r.div`
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
`,te=r.h1`
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
`,ie=r.div`
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
`,re=r.div`
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
`,oe=r(P)`
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
`,ae=r.svg`
  stroke: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,se=r.svg`
  display: none;
  stroke: var(--clr-primary-inv);
  @media screen and (min-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--clr-primary-inv);
  }
`,de=r.span`
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
`,le=()=>{const n=f();O();const t=n.pathname+n.search,i=()=>{console.log("Sign in to add your own notice.")};return e.jsxs(oe,{onClick:i,to:"/add-pet",state:{from:t},children:[e.jsx(ae,{children:e.jsx("use",{href:h+"#iconPlus"})}),e.jsx(de,{children:"Add Pet"}),e.jsx(se,{children:e.jsx("use",{href:h+"#iconPlusSmall"})})]})},A=(n,t)=>{if(t)return{sex:"male"};if(n)return{sex:"female"}};//! I AM AN UPGRADE
const N=(n,t,i)=>{if(n)return{age:"to-1"};if(t)return{age:"to-2"};if(i)return{age:"from-2"};if(n&&t)return{age:"to-2"};if(n&&i)return{age:"to-1-from-2"}},ce=(n,t,i,a,o)=>n&&t&&i||!n&&!t&&!i?{...A(a,o)}:o&&a||!o&&!a?{...N(n,t,i)}:{...N(n,t,i),...A(a,o)},pe={to1:!1,to2:!1,from2:!1,female:!1,male:!1},ue=()=>{const[n,t]=I(),[i,a]=l.useState(pe),o=n.get("query");l.useEffect(()=>{t({...ce(i.to1,i.to2,i.from2,i.female,i.male)})},[i]);const s=({query:m})=>{n.set("query",m),t(n),u()},c=()=>{n.delete("query",o),t(n),u()},u=l.useCallback(()=>{t(n)},[n,t]);return e.jsx($,{children:e.jsxs(ne,{children:[e.jsx(te,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(q,{onSubmit:s,onClear:c})}),e.jsxs(ie,{children:[e.jsx(J,{searchParams:n}),e.jsx("div",{children:e.jsxs(re,{children:[e.jsx(ee,{setCheckboxValue:a,checkboxValue:i}),e.jsx(le,{})]})})]}),e.jsx(l.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(D,{})})]})})};export{ue as default};
