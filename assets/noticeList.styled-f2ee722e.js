import{n as t,r as g,l as Q,j as e,s as i,N,b as s,B as V,D as J,E as Z,F as ee,a as te}from"./index-769dd8d3.js";import{n as M}from"./notiflix-notify-aio-b01079a7.js";import{s as ne}from"./selectors-9c63f203.js";const S="min-width: 768px",W="min-width: 1280px",oe=t.li`
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

  @media (${S}) {
    width: 336px;
  }

  @media (${W}) {
    width: 288px;
  }
`,ie=t.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  background-color: #fff;

  width: 100%;
  height: 288px;

  overflow: hidden;
  transition: 300ms;
`,re=t.img`
  position: absolute;
  object-position: center;
  object-fit: cover;

  width: 100%;
  height: 100%;

  transition: 300ms;
`,ae=t.p`
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
`,se=t.button`
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
`,le=t.button`
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
`,B=t.svg`
  stroke: var(--clr-brand-blue);
  fill: ${o=>o.isFavorite?"var(--clr-brand-blue)":"var(--clr-brand-blue-lt)"};

  width: 24px;
  height: 24px;

  transition: 300ms;
`,pe=t.div`
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

  @media (${S}) {
    gap: 24px;
  }

  @media (${W}) {
    gap: 12px;
  }
`,I=t.p`
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
`,A=t.svg`
  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;
`,ce=t.h3`
  width: 231px;
  height: 66px;
  margin: 20px 0 0 20px;

  overflow-y: scroll;

  color: var(--clr-primary);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,de=t.button`
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
`,xe=t.svg`
  opacity: 0;
  stroke: var(--clr-primary-inv);
  fill: var(--clr-primary-inv);

  width: 0;
  height: 0;

  transition: 300ms;
`,he=t.div`
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

  z-index: 1000;

  opacity: ${o=>o.showModal?"1":"0"};

  transition: 300ms;
`,fe=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  opacity: ${o=>o.showModal?"1":"0"};

  transition: 300ms;
`,ge=document.querySelector("#modal-root"),me=({onClose:o,showModal:r,children:p})=>{const[c,u]=g.useState(!1);g.useEffect(()=>{u(r)},[r]);const d=g.useMemo(()=>l=>{l.code==="Escape"&&o()},[o]);g.useEffect(()=>(window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="auto"}),[d]);const n=l=>{l.currentTarget===l.target&&o()};return Q.createPortal(e.jsx(he,{onClick:n,showModal:c,children:e.jsx(fe,{showModal:c,children:p})}),ge)},$="min-width: 768px",ue=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 445px;
  padding: 60px 20px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (${$}) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;

    border-radius: 40px;
  }
`,we=t.svg`
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

  @media (${$}) {
    top: 24px;
    right: 24px;
  }
`,be=t.h3`
  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  @media (${$}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`,ye=t.p`
  margin-top: 20px;

  color: var(--, #111);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;

  @media (${$}) {
    color: var(--, #111);
    text-align: center;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,T="min-width: 768px",ve=i.ul`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 12px;

  margin: 40px auto 0 auto;

  @media (${T}) {
    flex-direction: row;
  }
`,je=i.li`
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

  @media (${T}) {
    width: 165px;
  }
`,ke=i.li`
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

  @media (${T}) {
    width: 142px;
  }
`,Me=i(N)`
  color: var(--clr-primary-inv);
  display: flex;
  justify-content: center;
`,$e=i(N)`
  color: var(--clr-brand-yellow);
`,De=i.svg`
  fill: var(--clr-bcg);
  margin-left: 12px;
  width: 24px;
  height: 24px;

  transition: 300ms;
`,Le=()=>e.jsxs(ve,{children:[e.jsx(je,{children:e.jsxs(Me,{to:"/login",children:["Log IN",e.jsx(De,{children:e.jsx("use",{href:s+"#iconPaw"})})]})}),e.jsx(ke,{children:e.jsx($e,{to:"/register",children:"Registration"})})]}),Ie=({setShowModal:o,sprite:r})=>e.jsxs(ue,{children:[e.jsx(we,{onClick:()=>{o(!1)},children:e.jsx("use",{href:r+"#iconCross"})}),e.jsx(be,{children:"Attention"}),e.jsx(ye,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsx(Le,{})]}),m="min-width: 768px",Ae=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 389px;
  padding: 60px 12px;

  border-radius: 20px;
  background: #fff;

  @media (${m}) {
    width: 608px;
    height: 352px;
    padding: 60px 110px;

    border-radius: 40px;
  }
`,Te=i.svg`
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

  @media (${m}) {
    top: 24px;
    right: 24px;
  }
`,Ce=i.h3`
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

  @media (${m}) {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 288px;
  }
`,ze=i.p`
  margin: 14px auto 0 auto;

  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 240px;

  @media (${m}) {
    color: #000;
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.16px;
    width: 393px;
    height: 66px;
  }
`,Ee=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 44px;

  @media (${m}) {
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-top: 48px;
  }
`,Be=i.button`
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

  @media (${m}) {
    width: 129px;
    margin: 0;
  }
`,Fe=i.p`
  color: var(--clr-brand-blue);
  z-index: 2;
  transition: 300ms;
`,Ne=V`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,Se=i.button`
  position: relative;
  display: flex;
  color: #fff;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #54adff;
  outline: none;
  border: none;
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
    animation: ${Ne} 0.5s ease;
  }

  @media (${m}) {
    width: 129px;
    margin: 0;
  }
`,We=i.p`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
`,Pe=i.svg`
  stroke: #fff;
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
`,_e=({setShowModal:o,sprite:r,handleDeleteClick:p})=>e.jsxs(Ae,{children:[e.jsx(Te,{onClick:()=>{o(!1)},children:e.jsx("use",{href:r+"#iconCross"})}),e.jsx(Ce,{children:"Delete adverstiment?"}),e.jsxs(ze,{children:["Are you sure you want to delete ",e.jsx("b",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(Ee,{children:[e.jsx(Be,{onClick:()=>{o(!1)},children:e.jsx(Fe,{children:"Cancel"})}),e.jsx(Se,{children:e.jsxs(We,{children:["Yes",e.jsx(Pe,{type:"submit",onClick:p,children:e.jsx("use",{href:r+"#iconTrash"})})]})})]})]}),a="min-width: 768px",Re=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 90vh;
  padding: 44px 12px 16px 12px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  overflow-y: auto;
  overflow-x: hidden;

  @media (${a}) {
    flex-direction: row;
    flex-wrap: wrap;

    width: 681px;
    height: 540px;
    padding: 32px 32px 24px 32px;

    border-radius: 40px;
    overflow: hidden;
  }
`,Ye=t.div`
  position: relative;
  width: 240px;
  height: 240px;
  min-height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  margin: 0 auto;

  @media (${a}) {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`,Xe=t.img`
  width: 100%;
  height: 100%;
`,Ke=t.p`
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
`,Oe=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;

  @media (${a}) {
    margin: 0 0 0 24px;
    width: 280px;
    height: 298px;
  }
`,He=t.h3`
  color: #000;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  @media (${a}) {
    height: 76px;
    margin-bottom: 12px;
  }
`,h=t.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,f=t.b`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${a}) {
    font-size: 16px;
  }
`,v=t.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${a}) {
    font-size: 16px;
  }
`,F=t.a`
  color: var(--yellow, #ffc107);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;

  @media (${a}) {
    font-size: 16px;
  }
`,Ue=t.p`
  /* overflow: hidden; */
  margin: 12px auto;
  width: 256px;
  height: 95px;
  text-overflow: ellipsis;

  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  @media (${a}) {
    width: 618px;
    height: 48px;
    font-size: 16px;
  }
`,qe=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (${a}) {
    width: 100%;
    height: 40px;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 17px;
  }
`,Ge=t.a`
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 40px;
  border: 2px solid var(--unnamed, #54adff);
  outline: none;
  background: #fff;

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: 300ms;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 5px var(--clr-brand-blue);
  }

  @media (${a}) {
    width: 129px;
    height: 40px;
  }
`,Qe=t.button`
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 40px;
  background: var(--unnamed, #54adff);
  outline: none;
  border: none;

  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: 300ms;

  &:active svg {
    scale: 0.8;
  }

  &:hover {
    box-shadow: 5px 5px 5px var(--clr-brand-blue);
  }

  @media (${a}) {
    width: 129px;
    height: 40px;
  }
`,Ve=t.svg`
  stroke: #fff;
  fill: ${o=>o.isFavorite?"#fff":"var(--clr-brand-blue)"};

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;
`,Je=t.svg`
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

  @media (${a}) {
    top: 24px;
    right: 24px;
  }
`,Ze=({_id:o,sprite:r,isFavorite:p,handleFavoriteClick:c,category:u,setShowModal:d})=>{const{data:n,isLoading:l,error:j}=J(o);return e.jsxs(Re,{children:[l&&e.jsx("div",{children:"Loading..."}),(n==null?void 0:n.notice)&&(n==null?void 0:n.owner)&&e.jsxs(e.Fragment,{children:[e.jsx(Je,{onClick:()=>{d(!1)},children:e.jsx("use",{href:r+"#iconCross"})}),e.jsxs(Ye,{children:[e.jsx(Xe,{src:n.notice.avatarURL}),e.jsx(Ke,{children:u})]}),e.jsxs(Oe,{children:[e.jsx(He,{children:n.notice.title}),e.jsxs(h,{children:[e.jsx(f,{children:"Name:"}),e.jsx(v,{children:n.notice.name})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Bitrhdate:"}),e.jsx(v,{children:n.notice.date})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Type:"}),e.jsx(v,{children:n.notice.type})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Place:"}),e.jsx(v,{children:n.notice.location})]}),e.jsxs(h,{children:[e.jsx(f,{children:"The sex:"}),e.jsx(v,{children:n.notice.sex})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Email:"}),e.jsx(F,{href:`mailto:${n.owner&&n.owner.email}`,children:n.owner&&n.owner.email})]}),e.jsxs(h,{children:[e.jsx(f,{children:"Phone:"}),e.jsx(F,{href:`tel:${n.owner&&n.owner.phone}`,children:n.owner&&n.owner.phone})]})]}),e.jsxs(Ue,{children:["Comments: ",n.notice.comments]}),e.jsxs(qe,{children:[e.jsx(Ge,{href:`tel:${n.owner&&n.owner.phone}`,children:"Contact"}),e.jsxs(Qe,{onClick:c,children:["Add to",e.jsx(Ve,{isFavorite:p,children:e.jsx("use",{href:r+"#iconHeart"})})]})]})]}),j&&e.jsx("div",{children:j.message})]})},rt=({id:o,title:r,date:p,category:c,sex:u,location:d,avatarUrl:n,userFavoritesArr:l,showDelete:j})=>{const[D,b]=g.useState(!1),[L,k]=g.useState(""),[C,P]=g.useState(l.includes(o)),[_]=Z(),[R]=ee(),Y=new Date,X=new Date(p.split("-").reverse().join("-")),z=Y.getFullYear()-X.getFullYear(),K=z%2?"year":"years",O=te(ne),w=()=>{b(y=>!y)},E=async y=>{if(y.preventDefault(),O)try{const x=await _(o);x.data&&x.data.message&&M.Notify.success("Success!"),P(G=>!G)}catch{M.Notify.failure("Failed to update favorite status")}else D?(w(),k("attention"),w()):(k("attention"),w())},H=async y=>{y.preventDefault();try{const x=await R(o);x.data&&M.Notify.success(x.data.name+" was deleted successfully")}catch{M.Notify.failure("Failed to delete notice")}w()},U=()=>{k("delete"),w()},q=()=>{k("learnmore"),w()};return e.jsxs(oe,{children:[e.jsxs(ie,{children:[e.jsx(re,{src:n}),e.jsx(ae,{children:c}),e.jsx(se,{type:"submit",onClick:E,children:e.jsx(B,{isFavorite:C,children:e.jsx("use",{href:s+"#iconHeart"})})}),j&&e.jsx(le,{onClick:U,children:e.jsx(B,{children:e.jsx("use",{href:s+"#iconTrash"})})}),e.jsxs(pe,{children:[e.jsxs(I,{children:[e.jsx(A,{children:e.jsx("use",{href:s+"#iconLocation"})}),d]}),e.jsxs(I,{children:[e.jsx(A,{children:e.jsx("use",{href:s+"#iconClock"})}),z," ",K]}),e.jsxs(I,{children:[e.jsx(A,{children:e.jsx("use",{href:u==="male"?s+"#iconMale":s+"#iconFemale"})}),u]})]})]}),e.jsx(ce,{children:r}),e.jsxs(de,{onClick:q,children:["Learn more",e.jsx(xe,{children:e.jsx("use",{href:s+"#iconPaw"})})]}),D&&e.jsxs(me,{onClose:()=>{b(!1)},showModal:D,children:[L==="attention"&&e.jsx(Ie,{setShowModal:b,sprite:s}),L==="delete"&&e.jsx(_e,{setShowModal:b,sprite:s,handleDeleteClick:H}),L==="learnmore"&&e.jsx(Ze,{_id:o,sprite:s,isFavorite:C,handleFavoriteClick:E,category:c,setShowModal:b})]})]},o)},et="min-width: 768px",tt="min-width: 1280px",at=t.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 24px;

  width: 280px;

  @media (${et}) {
    column-gap: 32px;

    width: 768px;
  }

  @media (${tt}) {
    width: 1280px;
  }

  height: 100%;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;export{at as N,rt as a};
