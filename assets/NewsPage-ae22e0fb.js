import{p as a,j as e,u as f,r,v as S,h as g}from"./index-96ad932d.js";import{N as P,a as w}from"./AllNotices.styled-348db6cd.js";import{L as k}from"./Loader-d7b1e6ae.js";import{S as N}from"./StyledPagination.styled-b33cf9f5.js";import{N as C}from"./NoticesSearch-d99b5dfd.js";const E=a.div`
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
`,z=a.h1`
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
`,L=a.a`
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
`,A=a.img`
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
`,M=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`,D=a.div`
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
`,O=a.p`
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
`,F=a.p`
  width: 160px;
  height: 22px;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`;function I({image:t,title:n,description:s,date:d,url:c}){const p=d,i=new Date(p),l=i.getDate().toString().padStart(2,"0"),h=(i.getMonth()+1).toString().padStart(2,"0"),m=i.getFullYear(),o=`${l}/${h}/${m}`;return e.jsxs(L,{href:c,children:[e.jsx(A,{src:t,alt:"../../images/noImage.png"}),e.jsxs(M,{children:[e.jsx(D,{children:n}),e.jsx(O,{children:s}),e.jsx(F,{children:o})]})]})}const q=a.ul`
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
`;function $(){const[t]=f(),n=Object.fromEntries(t.entries()),[s,d]=r.useState(1),[c,p]=r.useState(12);r.useEffect(()=>{const o=()=>{const x=window.innerWidth;x<=768?p(11):x<=1024?p(10):p(12)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]);const{data:i,error:l,isLoading:h}=S({params:{page:s,limit:c,...n}}),m=(o,x)=>{d(x)};return e.jsxs(q,{children:[h&&e.jsx(k,{}),i&&e.jsxs(e.Fragment,{children:[i.news.map(({_id:o,imgUrl:x,title:u,text:b,date:j,url:y,id:v})=>e.jsx(I,{id:v,image:x,title:u,description:b,date:j,url:y},o)),i.news.length!==0&&e.jsx(N,{count:Math.ceil(i.totalCount/c),page:s,onChange:m,color:"primary"})]}),i&&!i.news.length&&e.jsxs(P,{children:[e.jsx(w,{children:e.jsx("use",{href:g+"#iconPaw"})})," ","No news found"," ",e.jsx(w,{children:e.jsx("use",{href:g+"#iconPaw"})})]}),l&&e.jsx("div",{children:l.message})]})}function W(){const[t,n]=f();r.useState(Object.fromEntries(t).query||"");const[s,d]=r.useState({}),c=r.useMemo(()=>Object.fromEntries([...t]),[t]),p=r.useCallback(()=>{n(t)},[t,n]),i=h=>{d(h?{query:h}:{})};r.useEffect(()=>{n({...s})},[c,n,s,t]);const l=()=>{t.delete("query",query),n(t),p()};return e.jsxs(E,{children:[e.jsx(z,{children:"News"}),e.jsx(C,{onSubmit:i,onClear:l}),e.jsx($,{})]})}export{W as default};