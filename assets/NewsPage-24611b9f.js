import{n as t,j as e,a as o,r as p}from"./index-a581f74b.js";import{N as l}from"./NoticesSearch-438922fa.js";import"./sprite-183f090d.js";const m=t.div`
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
`,h=t.h1`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`,g=t.a`
  width: 280px;
  height: 566px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 544px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 522px;
  }
`,w=t.div`
  width: 280px;
  height: 252px;
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`,j=t.div`
  padding: 0 12px;
`,u=t.div`
  color: #111111;
  font-size: 24px;
  font-family: Manrope;
  font-weight: 700;
  word-wrap: break-word;
`;function a(){return e.jsxs(g,{href:"",className:"article",children:[e.jsx(w,{className:"article-image",children:e.jsx("img",{src:"",alt:""})}),e.jsxs(j,{className:"article-content",children:[e.jsx(u,{className:"article-title",children:e.jsx("h2",{children:"Lorem"})}),e.jsx("p",{className:"article-description"}),e.jsx("div",{className:"article-details",children:e.jsx("small",{children:e.jsx("b",{})})})]})]})}const b=t.ul`
  max-width: 280px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 696px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1233px;
  }
`;function f(){return e.jsxs(b,{children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})}function S(){const[i,n]=o(),r=i.get("query"),s=p.useCallback(()=>{n(i)},[i,n]),d=({query:c})=>{i.set("query",c),n(i),s()},x=()=>{i.delete("query",r),n(i),s()};return e.jsxs(m,{children:[e.jsx(h,{children:"News"}),e.jsx(l,{onSubmit:d,onClear:x}),e.jsx(f,{})]})}export{S as default};
