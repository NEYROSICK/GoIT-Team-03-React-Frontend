import{n as t,j as e,d as x,t as w,r as f}from"./index-3c07e77e.js";import{N as u}from"./NoticesSearch-c6725933.js";const b=t.div`
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
`,j=t.h1`
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
`,y=t.a`
  width: 280px;
  height: 578px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;
  color: black;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  }
`,N=t.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 252px;
  background-color: rgba(230, 230, 230, 0.5);
  border-radius: 20px;
  margin-bottom: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`,P=t.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`,v=t.div`
  color: inherit;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 310px;
  }
`,p=t.p`
  color: inherit;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 768px) {
    height: 132px;
  }

  @media screen and (min-width: 1280px) {
    height: 110px;
  }
`;t.p`
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;function S({image:i,title:n,description:r,date:a,url:s}){return e.jsxs(y,{href:s,children:[e.jsx(N,{src:i}),e.jsxs(P,{children:[e.jsx(v,{children:n}),e.jsx(p,{children:r}),e.jsx(p,{children:a})]})]})}const q=t.ul`
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
`;function z(){const[i]=x(),n=Object.fromEntries(i.entries()),{data:r,error:a,isLoading:s}=w({params:{page:1,limit:12,...n}});return e.jsxs(q,{children:[s&&e.jsx("div",{children:"Loading..."}),r?r.map(({_id:o,imgUrl:d,title:c,text:h,date:l,url:m,id:g})=>e.jsx(S,{id:g,image:d,title:c,description:h,date:l,url:m},o)):e.jsx("div",{children:"No News Found"}),a&&e.jsx("div",{children:a.message})]})}function k(){const[i,n]=x(),r=i.get("query"),a=f.useCallback(()=>{n(i)},[i,n]),s=({query:d})=>{i.set("query",d),n(i),a()},o=()=>{i.delete("query",r),n(i),a()};return e.jsxs(b,{children:[e.jsx(j,{children:"News"}),e.jsx(u,{onSubmit:s,onClear:o}),e.jsx(z,{})]})}export{k as default};
