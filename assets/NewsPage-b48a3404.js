import{t as r,r as a,j as e,u as j,x as N,h as f}from"./index-6555f7ab.js";import{N as P,a as u}from"./AllNotices.styled-1607361a.js";import{L as k}from"./Loader-ca3920f0.js";import{S as E}from"./StyledPagination.styled-baa8adcf.js";import{N as C}from"./NoticesSearch-61c48f0b.js";const I=r.div`
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
`,z=r.h1`
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
`,L=r.a`
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
`,b=r.img`
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
`,A=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`,M=r.div`
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
`,O=r.p`
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
`,D=r.p`
  width: 160px;
  height: 22px;
  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 40px;
`,F="/GoIT-Team-03-React-Frontend/assets/NOIMG-5d575749.png";function T({image:t,title:i,description:p,date:l,url:x}){const[c,n]=a.useState(!1),h=l,o=new Date(h),m=o.getDate().toString().padStart(2,"0"),s=(o.getMonth()+1).toString().padStart(2,"0"),d=o.getFullYear(),g=`${m}/${s}/${d}`,w=()=>{n(!0)};return e.jsxs(L,{href:x,children:[c?e.jsx(b,{src:F,alt:"No Image Available"}):e.jsx(b,{src:t,onError:w,alt:i}),e.jsxs(A,{children:[e.jsx(M,{children:i}),e.jsx(O,{children:p}),e.jsx(D,{children:g})]})]})}const q=r.ul`
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
`;function G(){const[t]=j(),i=Object.fromEntries(t.entries()),[p,l]=a.useState(1),[x,c]=a.useState(12);a.useEffect(()=>{const s=()=>{const d=window.innerWidth;d<=768?c(11):d<=1024?c(10):c(12)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const{data:n,error:h,isLoading:o}=N({params:{page:p,limit:x,...i}}),m=(s,d)=>{l(d)};return e.jsxs(q,{children:[o&&e.jsx(k,{}),n&&e.jsxs(e.Fragment,{children:[n.news.map(({_id:s,imgUrl:d,title:g,text:w,date:y,url:v,id:S})=>e.jsx(T,{id:S,image:d,title:g,description:w,date:y,url:v},s)),n.news.length!==0&&e.jsx(E,{count:Math.ceil(n.totalCount/x),page:p,onChange:m,color:"primary"})]}),n&&!n.news.length&&e.jsxs(P,{children:[e.jsx(u,{children:e.jsx("use",{href:f+"#iconPaw"})})," ","No news found"," ",e.jsx(u,{children:e.jsx("use",{href:f+"#iconPaw"})})]}),h&&e.jsx("div",{children:h.message})]})}function Y(){const[t,i]=j();a.useState(Object.fromEntries(t).query||"");const[p,l]=a.useState({}),x=a.useMemo(()=>Object.fromEntries([...t]),[t]),c=a.useCallback(()=>{i(t)},[t,i]),n=o=>{l(o?{query:o}:{})};a.useEffect(()=>{i({...p})},[x,i,p,t]);const h=()=>{t.delete("query",query),i(t),c()};return e.jsxs(I,{children:[e.jsx(z,{children:"News"}),e.jsx(C,{onSubmit:n,onClear:h}),e.jsx(G,{})]})}export{Y as default};
