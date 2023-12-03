import{t as y,b as K,a as he,j as e,h as d,s as m,r as b,S as ue,U as ge,C as fe}from"./index-c7579de4.js";import{a as x,c as C,b as j,e as z,F as E,E as u,d as Q,g as be}from"./index.esm-2ab63cc7.js";const L=y(x)`
  display: none;
`,je=y.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--clr-brand-blue);

  margin-bottom: 88.35px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 137.1px;
  }

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: var(--clr-brand-blue-lt);
    border: 3px solid var(--clr-brand-blue-lt);
    transition:
      scale 0.3s,
      background-color 0.3s,
      border-color 0.2s,
      color 0.3s;
    cursor: pointer;

    &:hover {
      border-color: var(--clr-brand-blue);
    }

    &:active {
      scale: 0.9;
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }
`,ye=y.p`
  position: absolute;
  bottom: -20px;
  left: 10px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -20px;
  }
`,q="24px",H="24px",ve=y.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100% - 68px);

  @media (min-width: 768px) {
    min-height: calc(100% - 92px);
  }

  @media (min-width: 768px) {
    min-height: calc(100% - 88px);
  }
`,we=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 458px;
    padding: 20px 34px;
    &.centered {
      padding: 20px 75px;
      max-width: 100%;
    }
  }

  @media (min-width: 1280px) {
    &.centered {
      padding: 20px 75px;
      max-width: 822px;
    }
  }
`,Ne=y.h1`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 0;

    &.centered {
      align-self: center;
    }
  }
`,Se=y.ul`
  display: flex;
  gap: 12px;
  color: var(--clr-secondary);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.66px;
  letter-spacing: 0.1px;
  margin-bottom: 24px;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 26.5px; /* 165.625% */
    letter-spacing: 0.1px;
    gap: 16px;
    margin-bottom: 16px;
    width: 392px;
  }

  & > li {
    display: flex;
    flex-direction: column;
    flex-basis: calc((100% / 3));
    gap: 12px;

    &:after {
      content: '';
      display: block;
      position: static;
      height: 8px;
      background-color: var(--clr-brand-blue-lt);
      border-radius: 8px;
    }

    &.is-selected {
      color: var(--clr-brand-blue);
      &:after {
        background-color: var(--clr-brand-blue);
      }
    }

    &.is-done {
      color: var(--clr-brand-green);
      &:after {
        background-color: var(--clr-brand-green);
      }
    }
  }
`,F=y.div`
  width: 100vw;
  max-width: 264px;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    max-width: 390px;
  }
`,v=y.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;

  width: 100%;
  height: 40px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition:
    gap 0.3s,
    box-shadow 0.3s;

  @media (min-width: 768px) {
    width: auto;
    flex-grow: 1;
    transition: flex-grow 0.3s;
  }

  &.buttonNext {
    margin-bottom: 10px;
    background-color: var(--clr-brand-blue);
    border: none;
    border-radius: 40px;
    color: var(--clr-primary-inv);

    &:hover {
      flex-grow: 2;
    }
  }

  &.buttonBack {
    color: var(--clr-brand-blue);
    background: none;
    border: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 40px;
      border-radius: 40px 0 0 40px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; /* transition: opacity 0.3s ease-in-out; */
      transition: opacity 0.3s;
      z-index: 0;
      pointer-events: none;
      opacity: 0;
    }

    &:hover {
      flex-grow: 2;

      &::before {
        opacity: 1;
      }
    }
  }

  & svg {
    width: 0;
    transition: width 0.3s;
  }

  &:hover {
    gap: 12px;
    & svg {
      width: ${q};
    }
  }
`,$=y.svg`
  width: ${q};
  height: ${q};
  fill: var(--clr-primary-inv);
`,I=y.svg`
  width: ${H};
  height: ${H};
  stroke: var(--clr-brand-blue);
`,ke=C({category:j().required("Select a category")}),Pe=i=>{const t=K(),a=he(),l=()=>{a.state?t(a.state.from):t("/user")},r=g=>{i.next(g)};return e.jsx(z,{initialValues:i.data,validationSchema:ke,onSubmit:r,children:e.jsxs(E,{children:[e.jsxs(je,{children:[e.jsx(L,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(L,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(L,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(L,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(u,{name:"category",component:ye})]}),e.jsxs(F,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx($,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:l,to:a.state.from,children:[e.jsx(I,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Сancel"]})]})]})})},X=y.div`
  margin-bottom: 36.95px;

  @media (min-width: 768px) {
    margin-bottom: 57.6px;
  }

  & label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26.5px; /* 132.5% */
      gap: 8px;

      margin-bottom: 24px;
    }
  }

  & input {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
    outline: 3px solid transparent;
    outline-offset: -3px;
    transition: outline-color 0.3s;

    @media (min-width: 768px) {
      padding: 12px 16px;
      height: 48px;

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.64px;
    }

    &:focus {
      outline: 3px solid var(--clr-brand-blue);
    }

    &.is-invalid {
      outline-color: var(--clr-brand-red);

      &:focus {
        outline: 3px solid var(--clr-brand-red);
      }
    }
  }

  & input[type='date'][value=''] {
    color: var(--clr-secondary);
  }
`,k=y.p`
  position: absolute;
  bottom: -16px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -20px;
    left: 13px;
  }
`,Ce=C({title:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Title must be at least 2 characters").max(50,"Title must be at most 50 characters").required("Enter a title for add"),name:j().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").required("Enter a name pet"),date:Q().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 16 characters").required("Enter a type of pet")}),ze=i=>{const t=a=>{i.next(a)};return e.jsx(z,{initialValues:i.data,validationSchema:Ce,onSubmit:t,children:({values:a,touched:l,errors:r})=>e.jsxs(E,{children:[e.jsxs(X,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(x,{type:"text",name:"title",placeholder:"Title of ad",className:`${l.title&&r.title?"is-invalid":""}`}),e.jsx(u,{name:"title",component:k})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(x,{type:"text",name:"name",placeholder:"Type name pet",className:`${l.name&&r.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:k})]}),e.jsxs("label",{children:["Date of birth",e.jsx(x,{name:"date",type:"date",placeholder:"Type date of birth",className:`${l.date&&r.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:k})]}),e.jsxs("label",{children:["Type",e.jsx(x,{type:"text",name:"type",placeholder:"Type of pet",className:`${l.type&&r.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:k})]})]}),e.jsxs(F,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx($,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>i.prev(a),children:[e.jsx(I,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})]})})},Ee=C({name:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").required("Enter a name pet"),date:Q().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 16 characters").required("Enter a type of pet")}),Fe=i=>{const t=a=>{i.next(a)};return e.jsx(z,{initialValues:i.data,validationSchema:Ee,onSubmit:t,children:({values:a,touched:l,errors:r})=>e.jsxs(E,{children:[e.jsxs(X,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(x,{type:"text",name:"name",placeholder:"Type name pet",className:`${l.name&&r.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:k})]}),e.jsxs("label",{children:["Date of birth",e.jsx(x,{type:"date",name:"date",placeholder:"Type date of birth",className:`${l.date&&r.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:k})]}),e.jsxs("label",{children:["Type",e.jsx(x,{type:"text",name:"type",placeholder:"Type of pet",className:`${l.type&&r.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:k})]})]}),e.jsxs(F,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx($,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>i.prev(a),children:[e.jsx(I,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})]})})},R=m.img`
  background: var(--clr-brand-blue-lt);
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`,U=m.label`
  background: var(--clr-brand-blue-lt);
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: relative;
  width: 112px;
  height: 112px;
  border: 3px solid transparent;
  border-radius: 20px;
  margin-right: 23.3%;

  transition:
    border-color 0.3s,
    scale 0.3s;

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    margin-right: 26.7%;
    border-radius: 40px;
  }

  &.no-image-selected {
    border-color: var(--clr-brand-red);
  }

  & svg {
    transition:
      transform 0.3s,
      scale 0.3s;
  }

  &:hover {
    & svg {
      transform: rotate(180deg) scale(1.4);
    }
  }

  &:active,
  &:active & svg {
    scale: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 112px;
    height: 112px;
    border: 3px solid transparent;
    z-index: 50;
    transition: border-color 0.3s;
    border-radius: inherit;

    @media (min-width: 768px) {
      width: 182px;
      height: 182px;
    }
  }

  &:hover::after {
    border-color: var(--clr-brand-blue);
  }
`,Z=m.input`
  display: none;
`,Y=m.div`
  color: var(--clr-brand-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,G=m.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
  }

  & p {
    margin-bottom: 4px;
  }

  & label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & input[type='text'],
  textarea {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
    margin-bottom: 20px;

    outline: 3px solid transparent;
    outline-offset: -3px;
    transition: outline-color 0.3s;

    @media (min-width: 768px) {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.64px;
      padding: 12px 16px;
      margin-bottom: 24px;
    }

    &:focus {
      outline: 3px solid var(--clr-brand-blue);
    }

    &.is-invalid {
      outline-color: var(--clr-brand-red);

      &:focus {
        outline: 3px solid var(--clr-brand-red);
      }
    }
  }

  & textarea {
    height: 92px;
    border-radius: 20px;
    resize: none;
    margin-bottom: 19.15px;

    @media (min-width: 768px) {
      height: 79px;
      margin-bottom: 32px;

      &.moreInfoNotices {
        height: 182px;
        margin-bottom: 36px;
      }

      &.moreInfoSell {
        height: 128px;
        margin-bottom: 36px;
      }
    }
  }
`,$e=m.label`
  width: 100%;
`,D=m.div`
  @media (min-width: 768px) {
    display: flex;
  }
`,ee=m.div`
  @media (min-width: 768px) {
    width: 395px;
  }
`,te=m.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 245px;

  @media (min-width: 1280px) {
    width: 280px;
  }
`,V=m.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    gap: 10px;
    margin-bottom: 24.1px;

    &.moreInfoSell,
    &.moreInfoNotices {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      & > p {
        margin-left: 0;
        margin-bottom: 8px;
      }

      & label {
        margin: 0;
      }
    }
  }
`,W=m.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);

  @media (min-width: 768px) {
    display: none;
  }
`,_=m.svg`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 58px;
    height: 58px;
    stroke: var(--clr-brand-blue);
  }
`,ne=m.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`,ie=m.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`,ae=m.div`
  position: relative;

  &.moreInfoNotices {
    width: 182px;
  }
`,se=m.div`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;

  & > label {
    touch-action: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 35px;
    width: 100%;
    padding: 8px 16px;
    border-radius: 40px;
    border: 3px solid transparent;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.64px;

    color: var(--clr-secondary);
    transition:
      background-color 0.3s,
      border-color 0.2s,
      scale 0.3s,
      color 0.3s;
    cursor: pointer;

    @media (min-width: 768px) {
      padding: 0;
      margin-top: 8px;
      height: 40px;
    }

    & > .iconMale {
      transition: transform 0.7s cubic-bezier(0.65, 1.79, 0.78, 1.02);
      transform-origin: 12px 16px;
    }

    & > .iconFemale {
      transition: transform 0.7s cubic-bezier(0.61, 0.7, 0.55, 1.24);
    }

    &:hover {
      border-color: var(--clr-brand-blue);

      & > .iconMale {
        transform: rotate(320deg);
      }

      & > .iconFemale {
        transform: rotate(-360deg);
      }
    }

    &:active {
      scale: 0.9;
    }
  }

  & input[type='radio']:checked + label {
    background-color: var(--clr-brand-blue);
    border-color: var(--clr-brand-blue);
    color: var(--clr-primary-inv);
  }

  & input[type='radio']:checked + label > svg {
    stroke: var(--clr-primary-inv);
  }

  & input {
    display: none;
  }

  & svg {
    transition: stroke 0.3s;
  }
`,O=m.p`
  position: absolute;
  bottom: 0px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
  }
`,J=m.p`
  position: absolute;
  bottom: 0px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    bottom: 12px;
    font-size: 12px;
  }
`,oe=m.p`
  position: absolute;
  bottom: -18px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    bottom: -14px;
    font-size: 12px;
  }
`,Ie=C({comments:j().min(2,"Comments must be at least 2 characters").max(120,"Comments must not exceed 120 characters").required("Enter a comment")}),Te=i=>{const[t,a]=b.useState(i.selectedFile||null),[l,r]=b.useState(!1),[g,w]=b.useState(""),S=o=>{const s=o.target.files[0],c=3*1024*1024;s.size<=c&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),w("")):(a(null),w("Please select a JPEG or PNG file within 3MB size limit"))},N=o=>{if(!t){r(!0);return}i.next(o,!0,t)};return e.jsx(z,{initialValues:i.data,validationSchema:Ie,onSubmit:N,children:({values:o,touched:s,errors:c})=>e.jsx(E,{children:e.jsxs(G,{children:[e.jsxs(V,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(U,{className:g!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(R,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(_,{children:e.jsx("use",{href:d+"#iconPlus"})})]}),e.jsx(Z,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:S})]})]}),g&&e.jsx(Y,{children:g}),e.jsxs($e,{children:["Comments",e.jsx(x,{as:"textarea",type:"text",name:"comments",placeholder:"Type of pet",className:`${s.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:J})]}),e.jsxs(F,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx($,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>i.prev(o,t),children:[e.jsx(I,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})]})})})},Ae=C({sex:j().required("Select a sex"),location:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),comments:j().min(2,"Comments must be at least 2 characters").max(120,"Comments must not exceed 120 characters").required("Enter a comment")}),Me=i=>{const[t,a]=b.useState(i.selectedFile||null),[l,r]=b.useState(!1),[g,w]=b.useState("");b.useEffect(()=>(i.setIsTitleCentered(!0),()=>{i.setIsTitleCentered(!1)}));const S=o=>{const s=o.target.files[0],c=3*1024*1024;s.size<=c&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),w("")):(a(null),w("Please select a JPEG or PNG file within 3MB size limit"))},N=o=>{if(!t){r(!0);return}i.next(o,!0,t)};return e.jsx(z,{initialValues:i.data,validationSchema:Ae,onSubmit:N,children:({values:o,touched:s,errors:c})=>e.jsx(E,{children:e.jsxs(G,{children:[e.jsxs(D,{children:[e.jsxs(te,{children:[e.jsxs(ae,{className:"moreInfoNotices",children:[e.jsx("p",{children:"The Sex"}),e.jsxs(se,{children:[e.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(ne,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(ie,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:oe})]})]}),e.jsxs(V,{className:"moreInfoNotices",children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(U,{className:g!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(R,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(_,{children:e.jsx("use",{href:d+"#iconPlus"})})]}),e.jsx(Z,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:S})]})]})]}),g&&e.jsx(Y,{children:g}),e.jsxs(ee,{children:[e.jsxs("label",{children:["Location",e.jsx(x,{className:`${s.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:O})]}),e.jsxs("label",{children:["Comments",e.jsx(x,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`moreInfoNotices${s.comments&&c.comments?" is-invalid":""}`}),e.jsx(u,{name:"comments",component:J})]})]})]}),e.jsxs(F,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx($,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>i.prev(o,t),children:[e.jsx(I,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})]})})})},Le=C({sex:j().required("Select a sex"),location:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),price:be().typeError("Type a valid number").required("Enter a price").min(.01,"Price must be more than 0"),comments:j().min(2,"Comments must be at least 2 characters").max(120,"Comments must not exceed 120 characters").required("Enter a comment")}),Be=i=>{const[t,a]=b.useState(i.selectedFile||null),[l,r]=b.useState(!1),[g,w]=b.useState("");b.useEffect(()=>(i.setIsTitleCentered(!0),()=>{i.setIsTitleCentered(!1)}));const S=o=>{const s=o.target.files[0],c=3*1024*1024;s.size<=c&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),w("")):(a(null),w("Please select a JPEG or PNG file within 3MB size limit"))},N=o=>{if(!t){r(!0);return}i.next(o,!0,t)};return e.jsx(z,{initialValues:i.data,validationSchema:Le,onSubmit:N,children:({values:o,touched:s,errors:c})=>e.jsx(E,{children:e.jsxs(G,{children:[e.jsxs(D,{children:[e.jsxs(te,{children:[e.jsxs(ae,{className:"moreInfoNotices",children:[e.jsx("p",{children:"The Sex"}),e.jsxs(se,{children:[e.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(ne,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(ie,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:oe})]})]}),e.jsxs(V,{className:"moreInfoNotices",children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(U,{className:g!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(R,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(_,{children:e.jsx("use",{href:d+"#iconPlus"})})]}),e.jsx(Z,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:S})]})]})]}),g&&e.jsx(Y,{children:g}),e.jsxs(ee,{children:[e.jsxs("label",{children:["Location",e.jsx(x,{className:`${s.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:O})]}),e.jsxs("label",{children:["Price",e.jsx(x,{type:"text",name:"price",placeholder:"Type of price",className:`${s.price&&c.price?"is-invalid":""}`}),e.jsx(u,{name:"price",component:O})]}),e.jsxs("label",{children:["Comments",e.jsx(x,{className:`moreInfoSell${s.comments&&c.comments?" is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(u,{name:"comments",component:J})]})]})]}),e.jsxs(F,{children:[e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx($,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>i.prev(o,t),children:[e.jsx(I,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})]})})})},qe=()=>{const i=K(),[t,a]=b.useState(0),[l,r]=b.useState(null),[g]=ue(),[w]=ge(),[S,N]=b.useState(!1),[o,s]=b.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),c=n=>{s({category:n,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},re=(n,h)=>{const p=new FormData,f=B=>{const A=new Date(B),me=String(A.getDate()).padStart(2,"0"),xe=String(A.getMonth()+1).padStart(2,"0"),pe=A.getFullYear();return`${me}-${xe}-${pe}`};let M={};n.category==="your-pet"&&(M={name:n.name,date:f(n.date),type:n.type,comments:n.comments,image:h}),n.category==="sell"&&(M={category:n.category,title:n.title,name:n.name,date:f(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,price:n.price,image:h}),(n.category==="lost-found"||n.category==="in-good-hands")&&(M={category:n.category,title:n.title,name:n.name,date:f(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,image:h});for(const[B,A]of Object.entries(M))p.append(B,A);n.category==="your-pet"?g(p):w(p);const de=n.category==="your-pet"?"/user":`/notices/${n.category}`;i(de),c("")},P=(n,h=!1,p="")=>{if(s(f=>({...f,...n})),h){re(n,p);return}switch(n.category){case"your-pet":a(f=>f+1),t===0&&n.category!==o.category&&(c(n.category),r(null));break;case"sell":t===0&&(n.category!==o.category&&(c(n.category),r(null)),a(f=>f+3)),t===3&&a(f=>f+2);break;default:t===0&&(n.category!==o.category&&(c(n.category),r(null)),a(f=>f+3)),t===3&&a(f=>f+1)}},T=(n,h="")=>{switch(s(p=>({...p,...n})),n.category){case"your-pet":a(p=>p-1),h!==""&&r(h);break;case"sell":t===3&&(a(p=>p-3),h!==""&&r(h)),t===5&&(a(p=>p-2),h!==""&&r(h));break;default:t===3&&(a(p=>p-3),h!==""&&r(h)),t===4&&(a(p=>p-1),h!==""&&r(h))}},le=[e.jsx(Pe,{next:P,data:o,selectedFile:l}),e.jsx(Fe,{next:P,prev:T,data:o,selectedFile:l}),e.jsx(Te,{next:P,prev:T,data:o,selectedFile:l,setIsTitleCentered:N}),e.jsx(ze,{next:P,prev:T,data:o,selectedFile:l}),e.jsx(Me,{next:P,prev:T,data:o,selectedFile:l,setIsTitleCentered:N}),e.jsx(Be,{next:P,prev:T,data:o,selectedFile:l,setIsTitleCentered:N})],ce=()=>{switch(o.category){case"your-pet":return"Add pet";case"sell":return"Add pet for sale";case"lost-found":return"Add lost pet";case"in-good-hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(ve,{children:e.jsx(fe,{children:e.jsxs(we,{className:S?"centered":"",children:[e.jsx(Ne,{className:S?"centered":"",children:t===0?"Add pet":ce()}),e.jsxs(Se,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]}),le[t]]})})})})},Ue=()=>e.jsx(qe,{});export{Ue as default};
