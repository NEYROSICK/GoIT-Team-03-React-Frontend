import{n as t,s as a,B as U,j as e,D as G,r as $,E as Q,F as q,a as J,b as r}from"./index-c136e85b.js";import{n as v}from"./notiflix-notify-aio-a1f3815a.js";import{s as V}from"./selectors-9c63f203.js";import{F as Z,A as ee}from"./AttentionModalWrapper-738e42bb.js";const F="min-width: 768px",E="min-width: 1280px",te=t.li`
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

  @media (${F}) {
    width: 336px;
  }

  @media (${E}) {
    width: 288px;
  }
`,ne=t.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  background-color: #fff;

  width: 100%;
  height: 288px;

  overflow: hidden;
  transition: 300ms;
`,ie=t.img`
  position: absolute;
  object-position: center;
  object-fit: cover;

  width: 100%;
  height: 100%;

  transition: 300ms;
`,oe=t.p`
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
`,re=t.button`
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
`,ae=t.button`
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
`,A=t.svg`
  stroke: var(--clr-brand-blue);
  fill: ${i=>i.isFavorite?"var(--clr-brand-blue)":"var(--clr-brand-blue-lt)"};

  width: 24px;
  height: 24px;

  transition: 300ms;
`,se=t.div`
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

  @media (${F}) {
    gap: 24px;
  }

  @media (${E}) {
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
`,L=t.svg`
  stroke: var(--clr-brand-blue);
  fill: none;

  width: 24px;
  height: 24px;
`,le=t.h3`
  width: 231px;
  height: 66px;
  margin: 20px 0 0 20px;

  overflow-y: scroll;

  color: var(--clr-primary);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,pe=t.button`
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
`,ce=t.svg`
  opacity: 0;
  stroke: var(--clr-primary-inv);
  fill: var(--clr-primary-inv);

  width: 0;
  height: 0;

  transition: 300ms;
`,x="min-width: 768px",xe=a.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 389px;
  padding: 60px 12px;

  border-radius: 20px;
  background: #fff;

  @media (${x}) {
    width: 608px;
    height: 352px;
    padding: 60px 110px;

    border-radius: 40px;
  }
`,de=a.svg`
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

  @media (${x}) {
    top: 24px;
    right: 24px;
  }
`,he=a.h3`
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

  @media (${x}) {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 288px;
  }
`,fe=a.p`
  margin: 14px auto 0 auto;

  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 240px;

  @media (${x}) {
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
`,ge=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 44px;

  @media (${x}) {
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-top: 48px;
  }
`,me=a.button`
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

  @media (${x}) {
    width: 129px;
    margin: 0;
  }
`,ue=a.p`
  color: var(--clr-brand-blue);
  z-index: 2;
  transition: 300ms;
`,be=U`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,we=a.button`
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
    animation: ${be} 0.5s ease;
  }

  @media (${x}) {
    width: 129px;
    margin: 0;
  }
`,ye=a.p`
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 2;
`,ve=a.svg`
  stroke: #fff;
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
`,je=({setShowModal:i,sprite:s,handleDeleteClick:h})=>e.jsxs(xe,{children:[e.jsx(de,{onClick:()=>{i(!1)},children:e.jsx("use",{href:s+"#iconCross"})}),e.jsx(he,{children:"Delete adverstiment?"}),e.jsxs(fe,{children:["Are you sure you want to delete ",e.jsx("b",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(ge,{children:[e.jsx(me,{onClick:()=>{i(!1)},children:e.jsx(ue,{children:"Cancel"})}),e.jsx(we,{children:e.jsxs(ye,{children:["Yes",e.jsx(ve,{type:"submit",onClick:h,children:e.jsx("use",{href:s+"#iconTrash"})})]})})]})]}),o="min-width: 768px",Me=t.div`
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

  @media (${o}) {
    flex-direction: row;
    flex-wrap: wrap;

    width: 681px;
    height: 540px;
    padding: 32px 32px 24px 32px;

    border-radius: 40px;
    overflow: hidden;
  }
`,ke=t.div`
  position: relative;
  width: 240px;
  height: 240px;
  min-height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  margin: 0 auto;

  @media (${o}) {
    margin: 0;
    width: 262px;
    height: 298px;
  }
`,De=t.img`
  width: 100%;
  height: 100%;
`,$e=t.p`
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
`,Ie=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;

  @media (${o}) {
    margin: 0 0 0 24px;
    width: 280px;
    height: 298px;
  }
`,Le=t.h3`
  color: #000;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;

  @media (${o}) {
    height: 76px;
    margin-bottom: 12px;
  }
`,p=t.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,c=t.b`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${o}) {
    font-size: 16px;
  }
`,m=t.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${o}) {
    font-size: 16px;
  }
`,B=t.a`
  color: var(--yellow, #ffc107);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;

  @media (${o}) {
    font-size: 16px;
  }
`,Ce=t.p`
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

  @media (${o}) {
    width: 618px;
    height: 48px;
    font-size: 16px;
  }
`,Te=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (${o}) {
    width: 100%;
    height: 40px;
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 17px;
  }
`,ze=t.a`
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

  @media (${o}) {
    width: 129px;
    height: 40px;
  }
`,Ae=t.button`
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

  @media (${o}) {
    width: 129px;
    height: 40px;
  }
`,Be=t.svg`
  stroke: #fff;
  fill: ${i=>i.isFavorite?"#fff":"var(--clr-brand-blue)"};

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;
`,Fe=t.svg`
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

  @media (${o}) {
    top: 24px;
    right: 24px;
  }
`,Ee=({_id:i,sprite:s,isFavorite:h,handleFavoriteClick:u,category:b,setShowModal:j})=>{const{data:n,isLoading:M,error:w}=G(i);return e.jsxs(Me,{children:[M&&e.jsx("div",{children:"Loading..."}),(n==null?void 0:n.notice)&&(n==null?void 0:n.owner)&&e.jsxs(e.Fragment,{children:[e.jsx(Fe,{onClick:()=>{j(!1)},children:e.jsx("use",{href:s+"#iconCross"})}),e.jsxs(ke,{children:[e.jsx(De,{src:n.notice.avatarURL}),e.jsx($e,{children:b})]}),e.jsxs(Ie,{children:[e.jsx(Le,{children:n.notice.title}),e.jsxs(p,{children:[e.jsx(c,{children:"Name:"}),e.jsx(m,{children:n.notice.name})]}),e.jsxs(p,{children:[e.jsx(c,{children:"Birthday:"}),e.jsx(m,{children:n.notice.date})]}),e.jsxs(p,{children:[e.jsx(c,{children:"Type:"}),e.jsx(m,{children:n.notice.type})]}),e.jsxs(p,{children:[e.jsx(c,{children:"Place:"}),e.jsx(m,{children:n.notice.location})]}),e.jsxs(p,{children:[e.jsx(c,{children:"The sex:"}),e.jsx(m,{children:n.notice.sex})]}),e.jsxs(p,{children:[e.jsx(c,{children:"Email:"}),e.jsx(B,{href:`mailto:${n.owner&&n.owner.email}`,children:n.owner&&n.owner.email})]}),e.jsxs(p,{children:[e.jsx(c,{children:"Phone:"}),e.jsx(B,{href:`tel:${n.owner&&n.owner.phone}`,children:n.owner&&n.owner.phone})]})]}),e.jsxs(Ce,{children:["Comments: ",n.notice.comments]}),e.jsxs(Te,{children:[e.jsx(ze,{href:`tel:${n.owner&&n.owner.phone}`,children:"Contact"}),e.jsxs(Ae,{onClick:u,children:["Add to",e.jsx(Be,{isFavorite:h,children:e.jsx("use",{href:s+"#iconHeart"})})]})]})]}),w&&e.jsx("div",{children:w.message})]})},Xe=({id:i,title:s,date:h,category:u,sex:b,location:j,avatarUrl:n,userFavoritesArr:M,showDelete:w})=>{const[k,f]=$.useState(!1),[D,y]=$.useState(""),[C,N]=$.useState(M.includes(i)),[W]=Q(),[S]=q(),P=new Date,Y=new Date(h.split("-").reverse().join("-")),T=P.getFullYear()-Y.getFullYear(),_=T%2?"year":"years",X=J(V),d=()=>{f(g=>!g)},z=async g=>{if(g.preventDefault(),X)try{const l=await W(i);l.data&&l.data.message&&v.Notify.success("Success!"),N(K=>!K)}catch{v.Notify.failure("Failed to update favorite status")}else k?(d(),y("attention"),d()):(y("attention"),d())},O=async g=>{g.preventDefault();try{const l=await S(i);l.data&&v.Notify.success(l.data.name+" was deleted successfully")}catch{v.Notify.failure("Failed to delete notice")}d()},R=()=>{y("delete"),d()},H=()=>{y("learnmore"),d()};return e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx(ie,{src:n}),e.jsx(oe,{children:u}),e.jsx(re,{type:"submit",onClick:z,children:e.jsx(A,{isFavorite:C,children:e.jsx("use",{href:r+"#iconHeart"})})}),w&&e.jsx(ae,{onClick:R,children:e.jsx(A,{children:e.jsx("use",{href:r+"#iconTrash"})})}),e.jsxs(se,{children:[e.jsxs(I,{children:[e.jsx(L,{children:e.jsx("use",{href:r+"#iconLocation"})}),j]}),e.jsxs(I,{children:[e.jsx(L,{children:e.jsx("use",{href:r+"#iconClock"})}),T," ",_]}),e.jsxs(I,{children:[e.jsx(L,{children:e.jsx("use",{href:b==="male"?r+"#iconMale":r+"#iconFemale"})}),b]})]})]}),e.jsx(le,{children:s}),e.jsxs(pe,{onClick:H,children:["Learn more",e.jsx(ce,{children:e.jsx("use",{href:r+"#iconPaw"})})]}),k&&e.jsxs(Z,{onClose:()=>{f(!1)},showModal:k,children:[D==="attention"&&e.jsx(ee,{setShowModal:f,sprite:r}),D==="delete"&&e.jsx(je,{setShowModal:f,sprite:r,handleDeleteClick:O}),D==="learnmore"&&e.jsx(Ee,{_id:i,sprite:r,isFavorite:C,handleFavoriteClick:z,category:u,setShowModal:f})]})]},i)},Ne="min-width: 768px",We="min-width: 1280px",Oe=t.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 24px;
  margin-top: 24px;
  width: 280px;

  @media (${Ne}) {
    column-gap: 32px;

    width: 768px;
  }

  @media (${We}) {
    width: 1280px;
  }

  height: 100%;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;export{Oe as N,Xe as a};
