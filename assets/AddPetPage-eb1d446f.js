import{n as N,j as e,s as j,r as y,m as re,B as oe,D as le,C as ie}from"./index-e06992a8.js";import{a as x,b as F,F as $,E as u}from"./formik.esm-fb73d020.js";import{c as A,a as f,d as W,e as ce}from"./index.esm-a3220143.js";import{s as d}from"./sprite-30046adb.js";const L=N(x)`
  display: none;
`,de=N.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  color: var(--clr-brand-blue);

  margin-bottom: 95px;

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
`,me=N.p`
  position: absolute;
  bottom: -20px;
  left: 10px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,q="24px",V="24px",xe=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`,pe=N.div`
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-bottom: 20px;
`,he=N.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;
`,ue=N.ul`
  display: flex;
  gap: 12px;
  color: var(--clr-secondary);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 13.66px;
  letter-spacing: 0.1px;
  margin-bottom: 24px;

  & > li {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 80px;

    &:after {
      content: '';
      display: block;
      position: static;
      height: 8px;
      width: 80px;
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
`,v=N.button`
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

  &.buttonNext {
    margin-bottom: 10px;
    background-color: var(--clr-brand-blue);
    border: none;
    border-radius: 40px;
    color: var(--clr-primary-inv);
  }

  &.buttonBack {
    color: var(--clr-brand-blue);
    background: none;
    border: none;
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
`,C=N.svg`
  width: ${q};
  height: ${q};
  fill: var(--clr-primary-inv);
`,T=N.svg`
  width: ${V};
  height: ${V};
  stroke: var(--clr-brand-blue);
`,be=A({category:f().required("Select a category")}),ge=r=>{const t=()=>{console.log("Cancel")},s=o=>{r.next(o),console.log(o)};return e.jsx(F,{initialValues:r.data,validationSchema:be,onSubmit:s,children:e.jsxs($,{children:[e.jsxs(de,{children:[e.jsx(L,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(L,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(L,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(L,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(u,{name:"category",component:me})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:t,children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Сancel"]})]})})},_=N.div`
  margin-bottom: 24px;

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
  }

  & input {
    padding: 8px 16px;
    height: 40px;

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
`,P=N.p`
  position: absolute;
  bottom: -16px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,fe=A({title:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Title must be at least 2 characters").max(16,"Title must be at most 2 characters").required("Enter a title for add"),name:f().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 2 characters").required("Enter a name pet"),date:W().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 2 characters").required("Enter a type of pet")}),je=r=>{const t=s=>{r.next(s),console.log(s)};return e.jsx(F,{initialValues:r.data,validationSchema:fe,onSubmit:t,children:({values:s,touched:o,errors:l})=>e.jsxs($,{children:[e.jsxs(_,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(x,{type:"text",name:"title",placeholder:"Type name pet",className:`${o.title&&l.title?"is-invalid":""}`}),e.jsx(u,{name:"title",component:P})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(x,{type:"text",name:"name",placeholder:"Type name pet",className:`${o.name&&l.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:P})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(x,{name:"date",type:"date",placeholder:"Type date of birth",className:`${o.date&&l.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:P})]}),e.jsxs("label",{children:["Type",e.jsx(x,{type:"text",name:"type",placeholder:"Type of pet",className:`${o.type&&l.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:P})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(s),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},ye=A({name:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 2 characters").required("Enter a name pet"),date:W().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 2 characters").required("Enter a type of pet")}),ve=r=>{const t=s=>{r.next(s),console.log(s)};return e.jsx(F,{initialValues:r.data,validationSchema:ye,onSubmit:t,children:({values:s,touched:o,errors:l})=>e.jsxs($,{children:[e.jsxs(_,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(x,{type:"text",name:"name",placeholder:"Type name pet",className:`${o.name&&l.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:P})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(x,{type:"date",name:"date",placeholder:"Type date of birth",className:`${o.date&&l.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:P})]}),e.jsxs("label",{children:["Type",e.jsx(x,{type:"text",name:"type",placeholder:"Type of pet",className:`${o.type&&l.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:P})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(s),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},B=j.img`
  background: var(--clr-brand-blue-lt);
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 20px;
`,O=j.label`
  background: var(--clr-brand-blue-lt);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: relative;
  width: 100vh;
  height: 100vw;
  max-width: 112px;
  max-height: 112px;
  border: 3px solid transparent;
  border-radius: 20px;
  margin-right: 29.3%;

  transition:
    border-color 0.3s,
    scale 0.3s;

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
  }

  &:hover::after {
    border-color: var(--clr-brand-blue);
  }
`,R=j.input`
  display: none;
`,U=j.div`
  color: var(--clr-brand-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Z=j.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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
  }
`,Y=j.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`,G=j.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);
`,J=j.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`,H=j.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`,K=j.div`
  position: relative;
`,Q=j.div`
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
`,E=j.p`
  position: absolute;
  bottom: 0px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,X=j.p`
  position: absolute;
  bottom: -18px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,Ne=A({comments:f().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Se=r=>{const[t,s]=y.useState(r.selectedFile||null),[o,l]=y.useState(!1),[g,S]=y.useState(""),p=i=>{const n=i.target.files[0];n&&(n.type==="image/jpeg"||n.type==="image/png")?(s(n),S("")):(s(null),S("Please select a JPEG or PNG"))},k=i=>{if(!t){l(!0);return}r.next(i,!0,t)};return e.jsx(F,{initialValues:r.data,validationSchema:Ne,onSubmit:k,children:({values:i,touched:n,errors:c})=>e.jsx($,{children:e.jsxs(Z,{children:[e.jsxs(Y,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:g!==""||o&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(G,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),g&&e.jsx(U,{children:g}),e.jsxs("label",{children:["Comments",e.jsx(x,{as:"textarea",type:"text",name:"comments",placeholder:"Type of pet",className:`${n.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:E})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(i,t),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},ke=A({sex:f().required("Select a sex"),location:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),comments:f().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Pe=r=>{const[t,s]=y.useState(r.selectedFile||null),[o,l]=y.useState(!1),[g,S]=y.useState(""),p=i=>{const n=i.target.files[0];n&&(n.type==="image/jpeg"||n.type==="image/png")?(s(n),S("")):(s(null),S("Please select a JPEG or PNG"))},k=i=>{if(!t){l(!0);return}r.next(i,!0,t)};return e.jsx(F,{initialValues:r.data,validationSchema:ke,onSubmit:k,children:({values:i,touched:n,errors:c})=>e.jsx($,{children:e.jsxs(Z,{children:[e.jsxs(K,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(Q,{children:[e.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(J,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(H,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:X})]})]}),e.jsxs(Y,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:g!==""||o&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(G,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),g&&e.jsx(U,{children:g}),e.jsxs("label",{children:["Location",e.jsx(x,{className:`${n.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:E})]}),e.jsxs("label",{children:["Comments",e.jsx(x,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`${n.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:E})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(i,t),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},Ee=A({sex:f().required("Select a sex"),location:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),price:ce().typeError("Type a valid number").required("Enter a price"),comments:f().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Fe=r=>{const[t,s]=y.useState(r.selectedFile||null),[o,l]=y.useState(!1),[g,S]=y.useState(""),p=i=>{const n=i.target.files[0];n&&(n.type==="image/jpeg"||n.type==="image/png")?(s(n),S("")):(s(null),S("Please select a JPEG or PNG"))},k=i=>{if(!t){l(!0);return}r.next(i,!0,t)};return e.jsx(F,{initialValues:r.data,validationSchema:Ee,onSubmit:k,children:({values:i,touched:n,errors:c})=>e.jsxs($,{children:[e.jsxs(Z,{children:[e.jsxs(K,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(Q,{children:[e.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(J,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(H,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:X})]})]}),e.jsxs(Y,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:g!==""||o&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(G,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),g&&e.jsx(U,{children:g}),e.jsxs("label",{children:["Location",e.jsx(x,{className:`${n.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:E})]}),e.jsxs("label",{children:["Price",e.jsx(x,{type:"text",name:"price",placeholder:"Type of price",className:`${n.price&&c.price?"is-invalid":""}`}),e.jsx(u,{name:"price",component:E})]}),e.jsxs("label",{children:["Comments",e.jsx(x,{className:`${n.comments&&c.comments?"is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(u,{name:"comments",component:E})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(i,t),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},$e=()=>{const r=re(),[t,s]=y.useState(0),[o,l]=y.useState(null),[g]=oe(),[S]=le(),[p,k]=y.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),i=a=>{k({category:a,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},n=(a,h)=>{const m=new FormData,b=I=>{const w=new Date(I),ae=String(w.getDate()).padStart(2,"0"),se=String(w.getMonth()+1).padStart(2,"0"),ne=w.getFullYear();return`${ae}-${se}-${ne}`};let z={};a.category==="your-pet"&&(z={name:a.name,date:b(a.date),type:a.type,comments:a.comments,image:h}),a.category==="sell"&&(z={category:a.category,title:a.title,name:a.name,date:b(a.date),type:a.type,sex:a.sex,location:a.location,comments:a.comments,price:a.price,image:h}),(a.category==="lost-found"||a.category==="in-good-hands")&&(z={category:a.category,title:a.title,name:a.name,date:b(a.date),type:a.type,sex:a.sex,location:a.location,comments:a.comments,image:h}),console.log(z);for(const[I,w]of Object.entries(z))m.append(I,w);a.category==="your-pet"?g(m):S(m),i(""),console.log("Send request");const te=m.category==="your-pet"?"/user":"/notices";r(te)},c=(a,h=!1,m="")=>{if(k(b=>({...b,...a})),h){n(a,m);return}switch(a.category){case"your-pet":s(b=>b+1),t===0&&a.category!==p.category&&(i(a.category),l(null));break;case"sell":t===0&&(a.category!==p.category&&(i(a.category),l(null)),s(b=>b+3)),t===3&&s(b=>b+2);break;default:t===0&&(a.category!==p.category&&(i(a.category),l(null)),s(b=>b+3)),t===3&&s(b=>b+1)}},M=(a,h="")=>{switch(k(m=>({...m,...a})),a.category){case"your-pet":s(m=>m-1),h!==""&&l(h);break;case"sell":t===3&&(s(m=>m-3),h!==""&&l(h)),t===5&&(s(m=>m-2),h!==""&&l(h));break;default:t===3&&(s(m=>m-3),h!==""&&l(h)),t===4&&(s(m=>m-1),h!==""&&l(h))}},D=[e.jsx(ge,{next:c,data:p,selectedFile:o}),e.jsx(ve,{next:c,prev:M,data:p,selectedFile:o}),e.jsx(Se,{next:c,prev:M,data:p,selectedFile:o}),e.jsx(je,{next:c,prev:M,data:p,selectedFile:o}),e.jsx(Pe,{next:c,prev:M,data:p,selectedFile:o}),e.jsx(Fe,{next:c,prev:M,data:p,selectedFile:o})],ee=()=>{switch(p.category){case"your pet":return"Add pet";case"sell":return"Add pet for sale";case"lost/found":return"Add lost pet";case"in good hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(ie,{children:e.jsx(xe,{children:e.jsxs(pe,{children:[e.jsxs("div",{children:[e.jsx(he,{children:t===0?"Add pet":ee()}),e.jsxs(ue,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]})]}),D[t]]})})})})},ze=()=>e.jsx($e,{});export{ze as default};
