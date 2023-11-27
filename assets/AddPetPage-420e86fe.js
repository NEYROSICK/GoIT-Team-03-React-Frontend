import{n as y,c as _,u as re,j as e,b as c,s as f,r as v,D as le,E as ce,C as de}from"./index-84b88ec2.js";import{a as p,c as E,b as j,e as F,F as $,E as g,d as J,g as me}from"./index.esm-7c9c3408.js";const I=y(p)`
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
    bottom: -26px;
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
`,fe=E({category:j().required("Select a category")}),je=i=>{const t=_(),a=re(),r=()=>{const m=a.state.from;t(m)},o=m=>{i.next(m),console.log(m)};return e.jsx(F,{initialValues:i.data,validationSchema:fe,onSubmit:o,children:e.jsxs($,{children:[e.jsxs(xe,{children:[e.jsx(I,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(I,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(I,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(I,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(g,{name:"category",component:pe})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:r,children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Сancel"]})]})]})})},H=y.div`
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
`,ye=E({title:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Title must be at least 2 characters").max(16,"Title must be at most 2 characters").required("Enter a title for add"),name:j().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 2 characters").required("Enter a name pet"),date:J().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 2 characters").required("Enter a type of pet")}),ve=i=>{const t=a=>{i.next(a),console.log(a)};return e.jsx(F,{initialValues:i.data,validationSchema:ye,onSubmit:t,children:({values:a,touched:r,errors:o})=>e.jsxs($,{children:[e.jsxs(H,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(p,{type:"text",name:"title",placeholder:"Title of ad",className:`${r.title&&o.title?"is-invalid":""}`}),e.jsx(g,{name:"title",component:k})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(p,{type:"text",name:"name",placeholder:"Type name pet",className:`${r.name&&o.name?"is-invalid":""}`}),e.jsx(g,{name:"name",component:k})]}),e.jsxs("label",{children:["Date of birth",e.jsx(p,{name:"date",type:"date",placeholder:"Type date of birth",className:`${r.date&&o.date?"is-invalid":""}`}),e.jsx(g,{name:"date",component:k})]}),e.jsxs("label",{children:["Type",e.jsx(p,{type:"text",name:"type",placeholder:"Type of pet",className:`${r.type&&o.type?"is-invalid":""}`}),e.jsx(g,{name:"type",component:k})]})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(a),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})},Ne=E({name:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 2 characters").required("Enter a name pet"),date:J().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 2 characters").required("Enter a type of pet")}),Se=i=>{const t=a=>{i.next(a),console.log(a)};return e.jsx(F,{initialValues:i.data,validationSchema:Ne,onSubmit:t,children:({values:a,touched:r,errors:o})=>e.jsxs($,{children:[e.jsxs(H,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(p,{type:"text",name:"name",placeholder:"Type name pet",className:`${r.name&&o.name?"is-invalid":""}`}),e.jsx(g,{name:"name",component:k})]}),e.jsxs("label",{children:["Date of birth",e.jsx(p,{type:"date",name:"date",placeholder:"Type date of birth",className:`${r.date&&o.date?"is-invalid":""}`}),e.jsx(g,{name:"date",component:k})]}),e.jsxs("label",{children:["Type",e.jsx(p,{type:"text",name:"type",placeholder:"Type of pet",className:`${r.type&&o.type?"is-invalid":""}`}),e.jsx(g,{name:"type",component:k})]})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(a),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})},O=f.img`
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
`,we=f.svg`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 58px;
    height: 58px;
    stroke: var(--clr-brand-blue);
  }
`,K=f.svg`
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
`,ke=E({comments:j().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Pe=i=>{const[t,a]=v.useState(i.selectedFile||null),[r,o]=v.useState(!1),[m,S]=v.useState(""),h=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),S("")):(a(null),S("Please select a JPEG or PNG"))},w=l=>{if(!t){o(!0);return}i.next(l,!0,t)};return e.jsx(F,{initialValues:i.data,validationSchema:ke,onSubmit:w,children:({values:l,touched:s,errors:d})=>e.jsx($,{children:e.jsxs(Y,{children:[e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(R,{className:m!==""||r&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(O,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("use",{href:c+"#iconPlusAvatar"})}),e.jsx(we,{children:e.jsx("use",{href:c+"#iconPlus"})})]}),e.jsx(U,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:h})]})]}),m&&e.jsx(Z,{children:m}),e.jsxs("label",{children:["Comments",e.jsx(p,{as:"textarea",type:"text",name:"comments",placeholder:"Type of pet",className:`${s.comments&&d.comments?"is-invalid":""}`}),e.jsx(g,{name:"comments",component:P})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(l,t),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})})},Ee=E({sex:j().required("Select a sex"),location:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),comments:j().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Fe=i=>{const[t,a]=v.useState(i.selectedFile||null),[r,o]=v.useState(!1),[m,S]=v.useState(""),h=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),S("")):(a(null),S("Please select a JPEG or PNG"))},w=l=>{if(!t){o(!0);return}i.next(l,!0,t)};return e.jsx(F,{initialValues:i.data,validationSchema:Ee,onSubmit:w,children:({values:l,touched:s,errors:d})=>e.jsx($,{children:e.jsxs(Y,{children:[e.jsxs(X,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(D,{children:[e.jsx(p,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(K,{className:"iconFemale",children:e.jsx("use",{href:c+"#iconFemale"})}),"Female"]}),e.jsx(p,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(Q,{className:"iconMale",children:e.jsx("use",{href:c+"#iconMale"})}),"Male"]}),e.jsx(g,{name:"sex",component:ee})]})]}),e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(R,{className:m!==""||r&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(O,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:c+"#iconPlusAvatar"})}),e.jsx(U,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:h})]})]}),m&&e.jsx(Z,{children:m}),e.jsxs("label",{children:["Location",e.jsx(p,{className:`${s.location&&d.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(g,{name:"location",component:P})]}),e.jsxs("label",{children:["Comments",e.jsx(p,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`${s.comments&&d.comments?"is-invalid":""}`}),e.jsx(g,{name:"comments",component:P})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(l,t),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})})},$e=E({sex:j().required("Select a sex"),location:j().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),price:me().typeError("Type a valid number").required("Enter a price"),comments:j().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Ae=i=>{const[t,a]=v.useState(i.selectedFile||null),[r,o]=v.useState(!1),[m,S]=v.useState(""),h=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),S("")):(a(null),S("Please select a JPEG or PNG"))},w=l=>{if(!t){o(!0);return}i.next(l,!0,t)};return e.jsx(F,{initialValues:i.data,validationSchema:$e,onSubmit:w,children:({values:l,touched:s,errors:d})=>e.jsxs($,{children:[e.jsxs(Y,{children:[e.jsxs(X,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(D,{children:[e.jsx(p,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(K,{className:"iconFemale",children:e.jsx("use",{href:c+"#iconFemale"})}),"Female"]}),e.jsx(p,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&d.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(Q,{className:"iconMale",children:e.jsx("use",{href:c+"#iconMale"})}),"Male"]}),e.jsx(g,{name:"sex",component:ee})]})]}),e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(R,{className:m!==""||r&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(O,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:c+"#iconPlusAvatar"})}),e.jsx(U,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:h})]})]}),m&&e.jsx(Z,{children:m}),e.jsxs("label",{children:["Location",e.jsx(p,{className:`${s.location&&d.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(g,{name:"location",component:P})]}),e.jsxs("label",{children:["Price",e.jsx(p,{type:"text",name:"price",placeholder:"Type of price",className:`${s.price&&d.price?"is-invalid":""}`}),e.jsx(g,{name:"price",component:P})]}),e.jsxs("label",{children:["Comments",e.jsx(p,{className:`${s.comments&&d.comments?"is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(g,{name:"comments",component:P})]})]}),e.jsxs(A,{children:[e.jsxs(N,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:c+"#iconPaw"})})]}),e.jsxs(N,{className:"buttonBack",type:"button",onClick:()=>i.prev(l,t),children:[e.jsx(z,{children:e.jsx("use",{href:c+"#iconArrowLeft"})}),"Back"]})]})]})})},Ce=()=>{const i=_(),[t,a]=v.useState(0),[r,o]=v.useState(null),[m]=le(),[S]=ce(),[h,w]=v.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),l=n=>{w({category:n,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},s=(n,u)=>{const x=new FormData,b=q=>{const L=new Date(q),se=String(L.getDate()).padStart(2,"0"),ie=String(L.getMonth()+1).padStart(2,"0"),oe=L.getFullYear();return`${se}-${ie}-${oe}`};let M={};n.category==="your-pet"&&(M={name:n.name,date:b(n.date),type:n.type,comments:n.comments,image:u}),n.category==="sell"&&(M={category:n.category,title:n.title,name:n.name,date:b(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,price:n.price,image:u}),(n.category==="lost-found"||n.category==="in-good-hands")&&(M={category:n.category,title:n.title,name:n.name,date:b(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,image:u}),console.log(M);for(const[q,L]of Object.entries(M))x.append(q,L);n.category==="your-pet"?m(x):S(x),l(""),console.log("Send request");const ae=x.category==="your-pet"?"/user":"/notices";i(ae)},d=(n,u=!1,x="")=>{if(w(b=>({...b,...n})),u){s(n,x);return}switch(n.category){case"your-pet":a(b=>b+1),t===0&&n.category!==h.category&&(l(n.category),o(null));break;case"sell":t===0&&(n.category!==h.category&&(l(n.category),o(null)),a(b=>b+3)),t===3&&a(b=>b+2);break;default:t===0&&(n.category!==h.category&&(l(n.category),o(null)),a(b=>b+3)),t===3&&a(b=>b+1)}},T=(n,u="")=>{switch(w(x=>({...x,...n})),n.category){case"your-pet":a(x=>x-1),u!==""&&o(u);break;case"sell":t===3&&(a(x=>x-3),u!==""&&o(u)),t===5&&(a(x=>x-2),u!==""&&o(u));break;default:t===3&&(a(x=>x-3),u!==""&&o(u)),t===4&&(a(x=>x-1),u!==""&&o(u))}},te=[e.jsx(je,{next:d,data:h,selectedFile:r}),e.jsx(Se,{next:d,prev:T,data:h,selectedFile:r}),e.jsx(Pe,{next:d,prev:T,data:h,selectedFile:r}),e.jsx(ve,{next:d,prev:T,data:h,selectedFile:r}),e.jsx(Fe,{next:d,prev:T,data:h,selectedFile:r}),e.jsx(Ae,{next:d,prev:T,data:h,selectedFile:r})],ne=()=>{switch(h.category){case"your pet":return"Add pet";case"sell":return"Add pet for sale";case"lost/found":return"Add lost pet";case"in good hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(de,{children:e.jsx(he,{children:e.jsxs(ue,{children:[e.jsx(ge,{children:t===0?"Add pet":ne()}),e.jsxs(be,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]}),te[t]]})})})})},Me=()=>e.jsx(Ce,{});export{Me as default};
