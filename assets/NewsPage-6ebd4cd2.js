import{n,j as e,d as g,r as x,t as y}from"./index-e31ebc1a.js";import{S as v}from"./StyledPagination.styled-9e564d2a.js";import{N as S}from"./NoticesSearch-8715457c.js";const k=n.div`
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
`,P=n.h1`
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
`,N=n.a`
  position: relative;
  width: 280px;
  height: 578px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: white;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  transition: 300ms;

  overflow: hidden;
  &:hover img {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -20px;

    width: 100%;
    height: 8px;

    border-radius: 40px;
    background: var(
      --gr-blue,
      linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%)
    );

    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);
  }
`,C=n.img`
  transition: 300ms;
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
`,z=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`,L=n.div`
  color: inherit;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  width: 100%;
  height: 66px;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */

  @media screen and (min-width: 768px) {
    width: 310px;
  }
`,A=n.p`
  color: inherit;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;

  width: 100%;
  height: 154px;
  overflow: hidden;
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */

  @media screen and (min-width: 768px) {
    height: 132px;
    -webkit-line-clamp: 6;
    line-clamp: 6;
  }

  @media screen and (min-width: 1280px) {
    height: 110px;
    -webkit-line-clamp: 5;
    line-clamp: 5;
  }
`,E=n.p`
  width: 160px;
  height: 22px;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`;function q({image:t,title:a,description:s,date:d,url:p}){const r=d,i=new Date(r),c=i.getDate().toString().padStart(2,"0"),h=(i.getMonth()+1).toString().padStart(2,"0"),m=i.getFullYear(),o=`${c}/${h}/${m}`;return e.jsxs(N,{href:p,children:[e.jsx(C,{src:t}),e.jsxs(z,{children:[e.jsx(L,{children:a}),e.jsx(A,{children:s}),e.jsx(E,{children:o})]})]})}const D=n.ul`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
  flex-wrap: wrap;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    row-gap: 46px;
    column-gap: 32px;
    width: 704px;
    margin-top: 62px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 31px;
    width: 1247px;
    margin-top: 82px;
  }
`;function M(){const[t]=g(),a=Object.fromEntries(t.entries()),[s,d]=x.useState(1),[p,r]=x.useState(12);x.useEffect(()=>{const o=()=>{const l=window.innerWidth;l<=768?r(11):l<=1024?r(10):r(12)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]);const{data:i,error:c,isLoading:h}=y({params:{page:s,limit:p,...a}}),m=(o,l)=>{d(l)};return e.jsxs(D,{children:[h&&e.jsx("div",{children:"Loading..."}),i?e.jsxs(e.Fragment,{children:[i.news.map(({_id:o,imgUrl:l,title:w,text:f,date:u,url:b,id:j})=>e.jsx(q,{id:j,image:l,title:w,description:f,date:u,url:b},o)),i.length===0&&e.jsx("div",{children:"No News Found"}),i.length!==0&&e.jsx(v,{count:Math.ceil(i.totalCount/p),page:s,onChange:m,color:"primary"})]}):e.jsx("div",{children:"No News Found"}),c&&e.jsx("div",{children:c.message})]})}function I(){const[t,a]=g(),s=t.get("query"),d=x.useCallback(()=>{a(t)},[t,a]),p=({query:i})=>{t.set("query",i),a(t),d()},r=()=>{t.delete("query",s),a(t),d()};return e.jsxs(k,{children:[e.jsx(P,{children:"News"}),e.jsx(S,{onSubmit:p,onClear:r}),e.jsx(M,{})]})}export{I as default};
