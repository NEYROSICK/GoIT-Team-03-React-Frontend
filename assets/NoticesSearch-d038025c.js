import{n as r,r as g,j as t}from"./index-e06992a8.js";import{s as x}from"./sprite-30046adb.js";const b=r.form`
  position: relative;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 43px;
  }
`,f=r.input`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 80px;
  border: none;
  border-radius: 24px;

  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-align: left;

  box-shadow: 3px 8px 14px 0px #88c6fd30;
  color: var(--clr-secondary);

  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0px #74b1e83d;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    line-height: 24px;
  }
`,v=r.svg`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 10px;
  transition: 250ms;
  right: ${i=>i.active&&"47px"};
  stroke: var(--clr-brand-blue);
  fill: var(--clr-brand-blue);

`,w=r.svg`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 13px;
  top: 10px;
  stroke: var(--clr-brand-yellow);

`,e={query:""},j=({onSubmit:i,onClear:c})=>{const[n,a]=g.useState({...e}),l=s=>{const{name:u,value:d}=s.target;if(!d){p();return}a(m=>({...m,[u]:d}))},p=()=>{a({...e}),c({...e})},h=s=>{if(s.preventDefault(),n.query.trim()===""){a({...e});return}i({...n})},{query:o}=n;return t.jsxs(b,{onSubmit:h,children:[t.jsx(f,{type:"text",name:"query",required:!0,value:o,onChange:l,placeholder:"Search"}),t.jsxs(v,{type:"submit","aria-label":"submit",active:o&&!0,children:["   ",t.jsx("use",{href:x+"#iconSearch"})]}),o&&t.jsx(w,{type:"button",onClick:p,"aria-label":"clear",children:t.jsx("use",{href:x+"#iconCross"})})]})};export{j as N};
