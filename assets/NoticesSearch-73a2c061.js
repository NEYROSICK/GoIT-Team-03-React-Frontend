import{n as o,d as x,r as h,j as e,b as i}from"./index-92198771.js";const l=o.form`
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
`,u=o.input`
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
  transition: 300ms;

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
`,m=o.svg`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 10px;
  transition: 250ms;
  right: ${r=>r.active&&"47px"};
  stroke: var(--clr-brand-blue);
  fill: var(--clr-brand-blue);
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,g=o.svg`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 13px;
  top: 10px;
  stroke: var(--clr-brand-yellow);
  &:hover,
  &:focus {
    cursor: pointer;
  }
`,f=({onSubmit:r})=>{const[s]=x(),[a,n]=h.useState(Object.fromEntries(s).query||""),p=t=>{n(t.target.value.toLowerCase())},c=()=>{n(""),r("")},d=t=>{t.preventDefault(),r(a)};return e.jsxs(l,{onSubmit:d,children:[e.jsx(u,{type:"text",name:"searchQuery",required:!0,value:a,onChange:t=>p(t),placeholder:"Search"}),e.jsxs(m,{type:"submit","aria-label":"submit",active:a&&!0,children:[" ",e.jsx("use",{href:i+"#iconSearch"})]}),a&&e.jsx(g,{type:"button",onClick:c,"aria-label":"clear",children:e.jsx("use",{href:i+"#iconCross"})})]})};export{f as N};
