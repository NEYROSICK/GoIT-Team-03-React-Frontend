import{n as e,r as l,l as W,j as t,s as n,N as k,b as i,A as K,B as O,D as Y,a as q}from"./index-a27fbc10.js";import{n as w}from"./notiflix-notify-aio-a4700007.js";import{s as H}from"./selectors-9c63f203.js";const M="min-width: 768px",I="min-width: 1280px",U=e.li`
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 40px 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  width: 280px;
  height: 456px;
  padding-bottom: 22px;

  overflow: hidden;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);

    & img {
      scale: 1.1;
    }
  }

  @media (${M}) {
    width: 336px;
  }

  @media (${I}) {
    width: 288px;
  }
`,G=e.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  background-color: #fff;

  width: 100%;
  height: 288px;

  overflow: hidden;
  transition: 300ms;
`,J=e.img`
  position: absolute;
  object-position: center;
  object-fit: cover;

  width: 100%;
  height: 100%;

  transition: 300ms;
`,Q=e.p`
  position: absolute;
  top: 16px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: var(--clr-brand-blue-lt);

  padding: 6.5px 12.98px;

  color: #111;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,V=e.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;

  &:hover svg {
    scale: 1.2;
  }
`,Z=e.button`
  position: absolute;
  top: 58px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border-radius: 100%;
  border: none;
  outline: none;

  padding: 9px 8px 7px 8px;

  &:hover svg {
    scale: 1.2;
  }
`,j=e.svg`
  stroke: var(--clr-brand-blue);
  fill: ${o=>o.isFavorite?"var(--clr-brand-blue)":"var(--clr-brand-blue-lt)"};

  width: 24px;
  height: 24px;

  transition: 300ms;
`,tt=e.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 12px;

  /* background-color: rgba(0, 0, 0, 0.2); */
  /* backdrop-filter: blur(5px); */

  width: 100%;
  height: 28px;

  z-index: 2;

  @media (${M}) {
    gap: 24px;
  }

  @media (${I}) {
    gap: 12px;
  }
`,m=e.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: var(--clr-brand-blue-lt);

  width: 80px;

  overflow: hidden;

  color: var(--clr-primary);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`,b=e.svg`
  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;
`,et=e.h3`
  width: 231px;
  height: 66px;
  margin: 20px 0 0 20px;

  overflow-y: scroll;

  color: var(--clr-primary);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,nt=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 248px;
  height: 40px;
  margin: auto auto 0 auto;
  padding: 8px 28px;

  background-color: #fff;
  border: 2px solid var(--clr-brand-blue);
  border-radius: 40px;
  outline: none;

  color: var(--clr-brand-blue);

  transition: 300ms;

  &:hover {
    background-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);

    & svg {
      opacity: 1;
      width: 24px;
      height: 24px;
    }
  }
`,ot=e.svg`
  opacity: 0;
  stroke: var(--clr-primary-inv);
  fill: var(--clr-primary-inv);

  width: 0;
  height: 0;

  transition: 300ms;
`,it=e.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;

  z-index: 2;
`,rt=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  transition: 300ms;
`,at=document.querySelector("#modal-root"),st=({onClose:o,children:a})=>{const s=l.useMemo(()=>r=>{r.code==="Escape"&&o()},[o]);l.useEffect(()=>(window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow="auto"}),[s]);const d=r=>{r.currentTarget===r.target&&o()};return W.createPortal(t.jsx(it,{onClick:d,children:t.jsx(rt,{children:a})}),at)},p="min-width: 768px",lt=e.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 445px;
  padding: 60px 20px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (${p}) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;

    border-radius: 40px;
  }
`,pt=e.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    stroke: var(--clr-brand-yellow);
  }

  @media (${p}) {
    top: 24px;
    right: 24px;
  }
`,ct=e.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  @media (${p}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`,dt=e.p`
  margin-top: 20px;

  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;

  @media (${p}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,y="min-width: 768px",xt=n.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 12px;

  margin: 40px auto 0 auto;

  @media (${y}) {
    flex-direction: row;
  }
`,ht=n.li`
  font-weight: 700;
  background-color: var(--clr-brand-yellow);
  border-radius: 40px;
  padding: 8px 20px;
  gap: 8px;
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${y}) {
    width: 165px;
  }
`,ft=n.li`
  display: flex;
  justify-content: center;

  background: #fff;
  font-weight: 600;
  border-radius: 40px;
  padding: 7px 20px;
  border: 2px solid var(--clr-brand-yellow);
  width: 240px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 3px 3px 3px var(--clr-brand-yellow);
  }

  @media (${y}) {
    width: 142px;
  }
`,gt=n(k)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
`,ut=n(k)`
  color: var(--clr-brand-yellow);
`,mt=n.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;

  transition: 300ms;
`,bt=()=>t.jsxs(xt,{children:[t.jsx(ht,{children:t.jsxs(gt,{to:"/login",children:["Log IN",t.jsx(mt,{children:t.jsx("use",{href:i+"#iconPaw"})})]})}),t.jsx(ft,{children:t.jsx(ut,{to:"/register",children:"Registration"})})]}),yt=({setShowModal:o,sprite:a})=>t.jsxs(lt,{children:[t.jsx(pt,{onClick:()=>{o(!1)},children:t.jsx("use",{href:a+"#iconCross"})}),t.jsx(ct,{children:"Attention"}),t.jsx(dt,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),t.jsx(bt,{})]}),c="min-width: 768px";n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 389px;
  padding: 60px 12px;

  border-radius: 20px;
  background: #fff;

  @media (${c}) {
    /* width: 608px;
    height: 429px;
    padding: 60px 40px;

    border-radius: 40px; */
  }
`;n.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    scale: 1.2;
  }

  @media (${c}) {
    top: 24px;
    right: 24px;
  }
`;n.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
  width: 200px;
  margin: 0 auto;

  @media (${c}) {
    /* color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px; */
  }
`;n.p`
  margin: 14px auto 0 auto;

  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  width: 200px;

  @media (${c}) {
    /* color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px; */
  }
`;n.button`
  position: relative;
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #54adff;
  outline: none;
  margin-top: 44px;
  background: #fff;
  transition: 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover p {
    color: #fff;
  }
`;n.p`
  color: var(--clr-brand-blue);
  z-index: 2;
  transition: 300ms;
`;const vt=K`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;n.button`
  position: relative;
  display: flex;
  color: #fff;
  width: 256px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;
  outline: none;
  border: none;
  margin-top: 8px;
  transition: 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover svg {
    animation: ${vt} 0.5s ease;
  }
`;n.p`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
`;n.svg`
  stroke: #fff;
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;const $t=({id:o,title:a,date:s,category:d,sex:r,location:A,avatarUrl:$,userFavoritesArr:E,showDelete:D})=>{const[T,x]=l.useState(!1),[kt,h]=l.useState(""),[L,z]=l.useState(E.includes(o)),[B]=O();Y();const C=new Date,F=new Date(s),v=C.getFullYear()-F.getFullYear(),S=v%2?"year":"years",N=q(H),f=()=>{x(g=>!g)},P=async g=>{if(g.preventDefault(),N)try{const u=await B(o);u.data&&u.data.message&&w.Notify.success("Success!"),z(X=>!X)}catch{w.Notify.failure("Failed to update favorite status")}else h("attention"),f()},_=()=>{h("delete"),f()},R=()=>{h("learnmore"),f()};return t.jsxs(U,{children:[t.jsxs(G,{children:[t.jsx(J,{src:$}),t.jsx(Q,{children:d}),t.jsx(V,{type:"submit",onClick:P,children:t.jsx(j,{isFavorite:L,children:t.jsx("use",{href:i+"#iconHeart"})})}),D&&t.jsx(Z,{onClick:_,children:t.jsx(j,{children:t.jsx("use",{href:i+"#iconTrash"})})}),t.jsxs(tt,{children:[t.jsxs(m,{children:[t.jsx(b,{children:t.jsx("use",{href:i+"#iconLocation"})}),A]}),t.jsxs(m,{children:[t.jsx(b,{children:t.jsx("use",{href:i+"#iconClock"})}),v," ",S]}),t.jsxs(m,{children:[t.jsx(b,{children:t.jsx("use",{href:r==="male"?i+"#iconMale":i+"#iconFemale"})}),r]})]})]}),t.jsx(et,{children:a}),t.jsxs(nt,{onClick:R,children:["Learn more",t.jsx(ot,{children:t.jsx("use",{href:i+"#iconPaw"})})]}),T&&t.jsx(st,{onClose:()=>{x(!1)},children:t.jsx(yt,{setShowModal:x,sprite:i})})]},o)},wt="min-width: 768px",jt="min-width: 1280px",Et=e.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 24px;

  width: 280px;

  @media (${wt}) {
    column-gap: 32px;

    width: 768px;
  }

  @media (${jt}) {
    width: 1280px;
  }

  height: 100%;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;export{Et as N,$t as a};
