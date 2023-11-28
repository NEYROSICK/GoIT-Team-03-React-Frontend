import{n as a,j as e,d as g,r as o,t as v}from"./index-769dd8d3.js";import{S as y}from"./StyledPagination.styled-bc9e5dfa.js";import{N as S}from"./NoticesSearch-17aef307.js";const k=a.div`
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
`,P=a.h1`
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
`,N=a.a`
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
`,C=a.img`
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
`,E=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`,z=a.div`
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
`,L=a.p`
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
`,A=a.p`
  width: 160px;
  height: 22px;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`;function M({image:t,title:n,description:s,date:p,url:c}){const d=p,i=new Date(d),l=i.getDate().toString().padStart(2,"0"),h=(i.getMonth()+1).toString().padStart(2,"0"),m=i.getFullYear(),r=`${l}/${h}/${m}`;return e.jsxs(N,{href:c,children:[e.jsx(C,{src:t}),e.jsxs(E,{children:[e.jsx(z,{children:n}),e.jsx(L,{children:s}),e.jsx(A,{children:r})]})]})}const D=a.ul`
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
`;function O(){const[t]=g(),n=Object.fromEntries(t.entries()),[s,p]=o.useState(1),[c,d]=o.useState(12);o.useEffect(()=>{const r=()=>{const x=window.innerWidth;x<=768?d(11):x<=1024?d(10):d(12)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const{data:i,error:l,isLoading:h}=v({params:{page:s,limit:c,...n}}),m=(r,x)=>{p(x)};return e.jsxs(D,{children:[h&&e.jsx("div",{children:"Loading..."}),i?e.jsxs(e.Fragment,{children:[i.news.map(({_id:r,imgUrl:x,title:w,text:f,date:u,url:b,id:j})=>e.jsx(M,{id:j,image:x,title:w,description:f,date:u,url:b},r)),i.length===0&&e.jsx("div",{children:"No News Found"}),i.length!==0&&e.jsx(y,{count:Math.ceil(i.totalCount/c),page:s,onChange:m,color:"primary"})]}):e.jsx("div",{children:"No News Found"}),l&&e.jsx("div",{children:l.message})]})}function I(){const[t,n]=g();o.useState(Object.fromEntries(t).query||"");const[s,p]=o.useState({}),c=o.useMemo(()=>Object.fromEntries([...t]),[t]),d=o.useCallback(()=>{n(t)},[t,n]),i=h=>{p(h?{query:h}:{})};o.useEffect(()=>{n({...s})},[c,n,s,t]);const l=()=>{t.delete("query",query),n(t),d()};return e.jsxs(k,{children:[e.jsx(P,{children:"News"}),e.jsx(S,{onSubmit:i,onClear:l}),e.jsx(O,{})]})}export{I as default};
