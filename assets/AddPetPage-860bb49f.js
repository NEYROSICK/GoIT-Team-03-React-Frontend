import{n as y,c as J,u as oe,j as e,b as c,s as f,r as v,J as le,K as ce,C as de}from"./index-a69cd479.js";import{a as m,c as E,b as j,e as F,F as $,E as u,d as _,g as me}from"./index.esm-da4b4a95.js";const I=y(m)`
  display: none;
`,xe=y.div`
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
`,pe=y.p`
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
`,B="24px",W="24px",he=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`,ue=y.div`
  width: 100%;
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 458px;
    padding: 20px 34px;
  }
`,ge=y.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 0;
  }
`,be=y.ul`
  display: flex;
  gap: 12px;
  color: var(--clr-secondary);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.66px;
  letter-spacing: 0.1px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 26.5px; /* 165.625% */
    letter-spacing: 0.1px;
    gap: 16px;
    margin-bottom: 16px;
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
      /* width: 80px; */
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
`,A=y.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`,N=y.button`
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
  transition: gap 0.3s;

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

    &:hover {
      flex-grow: 2;
    }
  }

  & svg {
    width: 0;
    transition: width 0.3s;
  }

  &:hover {
    gap: 12px;
    & svg {
      width: ${B};
    }
  }
`,C=y.svg`
  width: ${B};
  height: ${B};
  fill: var(--clr-primary-inv);
`,z=y.svg`
  width: ${W};
  height: ${W};
  stroke: var(--clr-brand-blue);
`,fe=E({category:j().required("Select a category")}),je=i=>{const t=J(),n=oe(),o=()=>{n.state?t(n.state.from):t("/user")},r=g=>{i.next(g)};return e.jsx(F,{initialValues:i.data,validationSchema:fe,onSubmit:r,children:e.jsxs($,{children:[e.jsxs(xe,{children:[e.jsx(I,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(I,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(I,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(I,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(u,{name:"category",component:pe})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:o,to:n.state.from,children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Сancel"]})]})]})})},K=y.div`
  margin-bottom: 36.95px;

  @media (min-width: 768px) {
    margin-bottom: 34.8px;
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
`,w=y.p`
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
`,ye=E({title:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Title must be at least 2 characters").max(50,"Title must be at most 50 characters").required("Enter a title for add"),name:j().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").required("Enter a name pet"),date:_().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 16 characters").required("Enter a type of pet")}),ve=i=>{const t=n=>{i.next(n)};return e.jsx(F,{initialValues:i.data,validationSchema:ye,onSubmit:t,children:({values:n,touched:o,errors:r})=>e.jsxs($,{children:[e.jsxs(K,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(m,{type:"text",name:"title",placeholder:"Title of ad",className:`${o.title&&r.title?"is-invalid":""}`}),e.jsx(u,{name:"title",component:w})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(m,{type:"text",name:"name",placeholder:"Type name pet",className:`${o.name&&r.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:w})]}),e.jsxs("label",{children:["Date of birth",e.jsx(m,{name:"date",type:"date",placeholder:"Type date of birth",className:`${o.date&&r.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:w})]}),e.jsxs("label",{children:["Type",e.jsx(m,{type:"text",name:"type",placeholder:"Type of pet",className:`${o.type&&r.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:w})]})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(n),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})},Ne=E({name:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 16 characters").required("Enter a name pet"),date:_().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 16 characters").required("Enter a type of pet")}),Se=i=>{const t=n=>{i.next(n)};return e.jsx(F,{initialValues:i.data,validationSchema:Ne,onSubmit:t,children:({values:n,touched:o,errors:r})=>e.jsxs($,{children:[e.jsxs(K,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(m,{type:"text",name:"name",placeholder:"Type name pet",className:`${o.name&&r.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:w})]}),e.jsxs("label",{children:["Date of birth",e.jsx(m,{type:"date",name:"date",placeholder:"Type date of birth",className:`${o.date&&r.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:w})]}),e.jsxs("label",{children:["Type",e.jsx(m,{type:"text",name:"type",placeholder:"Type of pet",className:`${o.type&&r.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:w})]})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(n),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})},O=f.img`
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
`,R=f.label`
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
  margin-right: 29.3%;

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
    z-index: 100;
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
`,U=f.input`
  display: none;
`,Z=f.div`
  color: var(--clr-brand-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Y=f.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (min-width: 768px) {
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
    gap: 4px;
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
    margin-bottom: 23.15px;

    @media (min-width: 768px) {
      height: 79px;
      margin-bottom: 20px;
    }
  }
`,G=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    gap: 10px;
    margin-bottom: 24.1px;
  }
`,V=f.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);

  @media (min-width: 768px) {
    display: none;
  }
`,ke=f.svg`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 58px;
    height: 58px;
    stroke: var(--clr-brand-blue);
  }
`,H=f.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`,Q=f.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`,X=f.div`
  position: relative;
`,D=f.div`
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
`,P=f.p`
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
    bottom: -4px;
  }
`,ee=f.p`
  position: absolute;
  bottom: -18px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,we=E({comments:j().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Pe=i=>{const[t,n]=v.useState(i.selectedFile||null),[o,r]=v.useState(!1),[g,S]=v.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(n(s),S("")):(n(null),S("Please select a JPEG or PNG"))},k=l=>{if(!t){r(!0);return}i.next(l,!0,t)};return e.jsx(F,{initialValues:i.data,validationSchema:we,onSubmit:k,children:({values:l,touched:s,errors:d})=>e.jsx($,{children:e.jsxs(Y,{children:[e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(R,{className:g!==""||o&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(O,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("use",{href:c+"#iconPlusAvatar"})}),e.jsx(ke,{children:e.jsx("use",{href:c+"#iconPlus"})})]}),e.jsx(U,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),g&&e.jsx(Z,{children:g}),e.jsxs("label",{children:["Comments",e.jsx(m,{as:"textarea",type:"text",name:"comments",placeholder:"Type of pet",className:`${s.comments&&d.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:P})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(l,t),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})})},Ee=E({sex:j().required("Select a sex"),location:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),comments:j().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Fe=i=>{const[t,n]=v.useState(i.selectedFile||null),[o,r]=v.useState(!1),[g,S]=v.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(n(s),S("")):(n(null),S("Please select a JPEG or PNG"))},k=l=>{if(!t){r(!0);return}i.next(l,!0,t)};return e.jsx(F,{initialValues:i.data,validationSchema:Ee,onSubmit:k,children:({values:l,touched:s,errors:d})=>e.jsx($,{children:e.jsxs(Y,{children:[e.jsxs(X,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(D,{children:[e.jsx(m,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(H,{className:"iconFemale",children:e.jsx("use",{href:c+"#iconFemale"})}),"Female"]}),e.jsx(m,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(Q,{className:"iconMale",children:e.jsx("use",{href:c+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:ee})]})]}),e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(R,{className:g!==""||o&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(O,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:c+"#iconPlusAvatar"})}),e.jsx(U,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),g&&e.jsx(Z,{children:g}),e.jsxs("label",{children:["Location",e.jsx(m,{className:`${s.location&&d.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:P})]}),e.jsxs("label",{children:["Comments",e.jsx(m,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`${s.comments&&d.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:P})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(l,t),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})})},$e=E({sex:j().required("Select a sex"),location:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),price:me().typeError("Type a valid number").required("Enter a price"),comments:j().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Ae=i=>{const[t,n]=v.useState(i.selectedFile||null),[o,r]=v.useState(!1),[g,S]=v.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(n(s),S("")):(n(null),S("Please select a JPEG or PNG"))},k=l=>{if(!t){r(!0);return}i.next(l,!0,t)};return e.jsx(F,{initialValues:i.data,validationSchema:$e,onSubmit:k,children:({values:l,touched:s,errors:d})=>e.jsxs($,{children:[e.jsxs(Y,{children:[e.jsxs(X,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(D,{children:[e.jsx(m,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(H,{className:"iconFemale",children:e.jsx("use",{href:c+"#iconFemale"})}),"Female"]}),e.jsx(m,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(Q,{className:"iconMale",children:e.jsx("use",{href:c+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:ee})]})]}),e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(R,{className:g!==""||o&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(O,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:c+"#iconPlusAvatar"})}),e.jsx(U,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),g&&e.jsx(Z,{children:g}),e.jsxs("label",{children:["Location",e.jsx(m,{className:`${s.location&&d.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:P})]}),e.jsxs("label",{children:["Price",e.jsx(m,{type:"text",name:"price",placeholder:"Type of price",className:`${s.price&&d.price?"is-invalid":""}`}),e.jsx(u,{name:"price",component:P})]}),e.jsxs("label",{children:["Comments",e.jsx(m,{className:`${s.comments&&d.comments?"is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(u,{name:"comments",component:P})]})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(l,t),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})},Ce=()=>{const i=J(),[t,n]=v.useState(0),[o,r]=v.useState(null),[g]=le(),[S]=ce(),[p,k]=v.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),l=a=>{k({category:a,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},s=(a,h)=>{const x=new FormData,b=q=>{const M=new Date(q),se=String(M.getDate()).padStart(2,"0"),ie=String(M.getMonth()+1).padStart(2,"0"),re=M.getFullYear();return`${se}-${ie}-${re}`};let L={};a.category==="your-pet"&&(L={name:a.name,date:b(a.date),type:a.type,comments:a.comments,image:h}),a.category==="sell"&&(L={category:a.category,title:a.title,name:a.name,date:b(a.date),type:a.type,sex:a.sex,location:a.location,comments:a.comments,price:a.price,image:h}),(a.category==="lost-found"||a.category==="in-good-hands")&&(L={category:a.category,title:a.title,name:a.name,date:b(a.date),type:a.type,sex:a.sex,location:a.location,comments:a.comments,image:h});for(const[q,M]of Object.entries(L))x.append(q,M);a.category==="your-pet"?g(x):S(x);const ne=a.category==="your-pet"?"/user":`/notices/${a.category}`;i(ne),l("")},d=(a,h=!1,x="")=>{if(k(b=>({...b,...a})),h){s(a,x);return}switch(a.category){case"your-pet":n(b=>b+1),t===0&&a.category!==p.category&&(l(a.category),r(null));break;case"sell":t===0&&(a.category!==p.category&&(l(a.category),r(null)),n(b=>b+3)),t===3&&n(b=>b+2);break;default:t===0&&(a.category!==p.category&&(l(a.category),r(null)),n(b=>b+3)),t===3&&n(b=>b+1)}},T=(a,h="")=>{switch(k(x=>({...x,...a})),a.category){case"your-pet":n(x=>x-1),h!==""&&r(h);break;case"sell":t===3&&(n(x=>x-3),h!==""&&r(h)),t===5&&(n(x=>x-2),h!==""&&r(h));break;default:t===3&&(n(x=>x-3),h!==""&&r(h)),t===4&&(n(x=>x-1),h!==""&&r(h))}},te=[e.jsx(je,{next:d,data:p,selectedFile:o}),e.jsx(Se,{next:d,prev:T,data:p,selectedFile:o}),e.jsx(Pe,{next:d,prev:T,data:p,selectedFile:o}),e.jsx(ve,{next:d,prev:T,data:p,selectedFile:o}),e.jsx(Fe,{next:d,prev:T,data:p,selectedFile:o}),e.jsx(Ae,{next:d,prev:T,data:p,selectedFile:o})],ae=()=>{switch(p.category){case"your pet":return"Add pet";case"sell":return"Add pet for sale";case"lost/found":return"Add lost pet";case"in good hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(de,{children:e.jsx(he,{children:e.jsxs(ue,{children:[e.jsx(ge,{children:t===0?"Add pet":ae()}),e.jsxs(be,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]}),te[t]]})})})})},Me=()=>e.jsx(Ce,{});export{Me as default};
