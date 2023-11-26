import{n as N,c as W,u as oe,j as e,b as d,s as j,r as y,D as le,E as ie,C as ce}from"./index-f70267fe.js";import{a as p,c as F,b as f,e as $,F as A,E as b,d as _,g as de}from"./index.esm-e0970e53.js";const w=N(p)`
  display: none;
`,me=N.div`
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
`,xe=N.p`
  position: absolute;
  bottom: -20px;
  left: 10px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,q="24px",V="24px",pe=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`,he=N.div`
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-bottom: 20px;
`,ue=N.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;
`,be=N.ul`
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
`,ge=F({category:f().required("Select a category")}),fe=r=>{const t=W(),s=oe(),l=()=>{const m=s.state.from;t(m)},o=m=>{r.next(m),console.log(m)};return e.jsx($,{initialValues:r.data,validationSchema:ge,onSubmit:o,children:e.jsxs(A,{children:[e.jsxs(me,{children:[e.jsx(w,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(w,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(w,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(w,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(b,{name:"category",component:xe})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:l,children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Сancel"]})]})})},J=N.div`
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
`,je=F({title:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Title must be at least 2 characters").max(16,"Title must be at most 2 characters").required("Enter a title for add"),name:f().min(2,"Name must be at least 2 characters").max(16,"Name must be at most 2 characters").required("Enter a name pet"),date:_().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 2 characters").required("Enter a type of pet")}),ye=r=>{const t=s=>{r.next(s),console.log(s)};return e.jsx($,{initialValues:r.data,validationSchema:je,onSubmit:t,children:({values:s,touched:l,errors:o})=>e.jsxs(A,{children:[e.jsxs(J,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(p,{type:"text",name:"title",placeholder:"Type name pet",className:`${l.title&&o.title?"is-invalid":""}`}),e.jsx(b,{name:"title",component:P})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(p,{type:"text",name:"name",placeholder:"Type name pet",className:`${l.name&&o.name?"is-invalid":""}`}),e.jsx(b,{name:"name",component:P})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(p,{name:"date",type:"date",placeholder:"Type date of birth",className:`${l.date&&o.date?"is-invalid":""}`}),e.jsx(b,{name:"date",component:P})]}),e.jsxs("label",{children:["Type",e.jsx(p,{type:"text",name:"type",placeholder:"Type of pet",className:`${l.type&&o.type?"is-invalid":""}`}),e.jsx(b,{name:"type",component:P})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(s),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},ve=F({name:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Name must be at least 2 characters").max(16,"Name must be at most 2 characters").required("Enter a name pet"),date:_().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Type must be at least 2 characters").max(16,"Type must be at most 2 characters").required("Enter a type of pet")}),Ne=r=>{const t=s=>{r.next(s),console.log(s)};return e.jsx($,{initialValues:r.data,validationSchema:ve,onSubmit:t,children:({values:s,touched:l,errors:o})=>e.jsxs(A,{children:[e.jsxs(J,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(p,{type:"text",name:"name",placeholder:"Type name pet",className:`${l.name&&o.name?"is-invalid":""}`}),e.jsx(b,{name:"name",component:P})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(p,{type:"date",name:"date",placeholder:"Type date of birth",className:`${l.date&&o.date?"is-invalid":""}`}),e.jsx(b,{name:"date",component:P})]}),e.jsxs("label",{children:["Type",e.jsx(p,{type:"text",name:"type",placeholder:"Type of pet",className:`${l.type&&o.type?"is-invalid":""}`}),e.jsx(b,{name:"type",component:P})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(s),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},B=j.img`
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
`,H=j.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`,K=j.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`,Q=j.div`
  position: relative;
`,X=j.div`
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
`,D=j.p`
  position: absolute;
  bottom: -18px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,Se=F({comments:f().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),ke=r=>{const[t,s]=y.useState(r.selectedFile||null),[l,o]=y.useState(!1),[m,S]=y.useState(""),h=i=>{const n=i.target.files[0];n&&(n.type==="image/jpeg"||n.type==="image/png")?(s(n),S("")):(s(null),S("Please select a JPEG or PNG"))},k=i=>{if(!t){o(!0);return}r.next(i,!0,t)};return e.jsx($,{initialValues:r.data,validationSchema:Se,onSubmit:k,children:({values:i,touched:n,errors:c})=>e.jsx(A,{children:e.jsxs(Z,{children:[e.jsxs(Y,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:m!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(G,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:h})]})]}),m&&e.jsx(U,{children:m}),e.jsxs("label",{children:["Comments",e.jsx(p,{as:"textarea",type:"text",name:"comments",placeholder:"Type of pet",className:`${n.comments&&c.comments?"is-invalid":""}`}),e.jsx(b,{name:"comments",component:E})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(i,t),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},Pe=F({sex:f().required("Select a sex"),location:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),comments:f().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),Ee=r=>{const[t,s]=y.useState(r.selectedFile||null),[l,o]=y.useState(!1),[m,S]=y.useState(""),h=i=>{const n=i.target.files[0];n&&(n.type==="image/jpeg"||n.type==="image/png")?(s(n),S("")):(s(null),S("Please select a JPEG or PNG"))},k=i=>{if(!t){o(!0);return}r.next(i,!0,t)};return e.jsx($,{initialValues:r.data,validationSchema:Pe,onSubmit:k,children:({values:i,touched:n,errors:c})=>e.jsx(A,{children:e.jsxs(Z,{children:[e.jsxs(Q,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(X,{children:[e.jsx(p,{type:"radio",name:"sex",id:"female",value:"female",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(H,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(p,{type:"radio",name:"sex",id:"male",value:"male",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(K,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(b,{name:"sex",component:D})]})]}),e.jsxs(Y,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:m!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(G,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:h})]})]}),m&&e.jsx(U,{children:m}),e.jsxs("label",{children:["Location",e.jsx(p,{className:`${n.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(b,{name:"location",component:E})]}),e.jsxs("label",{children:["Comments",e.jsx(p,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`${n.comments&&c.comments?"is-invalid":""}`}),e.jsx(b,{name:"comments",component:E})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(i,t),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},Fe=F({sex:f().required("Select a sex"),location:f().matches(/^[a-zA-Z\s]+$/,"Enter only English letters").min(2,"Location must be at least 2 characters").required("Enter a location"),price:de().typeError("Type a valid number").required("Enter a price"),comments:f().min(2,"Comments must be at least 2 characters").required("Enter a comment")}),$e=r=>{const[t,s]=y.useState(r.selectedFile||null),[l,o]=y.useState(!1),[m,S]=y.useState(""),h=i=>{const n=i.target.files[0];n&&(n.type==="image/jpeg"||n.type==="image/png")?(s(n),S("")):(s(null),S("Please select a JPEG or PNG"))},k=i=>{if(!t){o(!0);return}r.next(i,!0,t)};return e.jsx($,{initialValues:r.data,validationSchema:Fe,onSubmit:k,children:({values:i,touched:n,errors:c})=>e.jsxs(A,{children:[e.jsxs(Z,{children:[e.jsxs(Q,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(X,{children:[e.jsx(p,{type:"radio",name:"sex",id:"female",value:"female",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(H,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(p,{type:"radio",name:"sex",id:"male",value:"male",className:`${n.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(K,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(b,{name:"sex",component:D})]})]}),e.jsxs(Y,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:m!==""||l&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(G,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:h})]})]}),m&&e.jsx(U,{children:m}),e.jsxs("label",{children:["Location",e.jsx(p,{className:`${n.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(b,{name:"location",component:E})]}),e.jsxs("label",{children:["Price",e.jsx(p,{type:"text",name:"price",placeholder:"Type of price",className:`${n.price&&c.price?"is-invalid":""}`}),e.jsx(b,{name:"price",component:E})]}),e.jsxs("label",{children:["Comments",e.jsx(p,{className:`${n.comments&&c.comments?"is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(b,{name:"comments",component:E})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(C,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>r.prev(i,t),children:[e.jsx(T,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},Ae=()=>{const r=W(),[t,s]=y.useState(0),[l,o]=y.useState(null),[m]=le(),[S]=ie(),[h,k]=y.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),i=a=>{k({category:a,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},n=(a,u)=>{const x=new FormData,g=I=>{const L=new Date(I),se=String(L.getDate()).padStart(2,"0"),ne=String(L.getMonth()+1).padStart(2,"0"),re=L.getFullYear();return`${se}-${ne}-${re}`};let z={};a.category==="your-pet"&&(z={name:a.name,date:g(a.date),type:a.type,comments:a.comments,image:u}),a.category==="sell"&&(z={category:a.category,title:a.title,name:a.name,date:g(a.date),type:a.type,sex:a.sex,location:a.location,comments:a.comments,price:a.price,image:u}),(a.category==="lost-found"||a.category==="in-good-hands")&&(z={category:a.category,title:a.title,name:a.name,date:g(a.date),type:a.type,sex:a.sex,location:a.location,comments:a.comments,image:u}),console.log(z);for(const[I,L]of Object.entries(z))x.append(I,L);a.category==="your-pet"?m(x):S(x),i(""),console.log("Send request");const ae=x.category==="your-pet"?"/user":"/notices";r(ae)},c=(a,u=!1,x="")=>{if(k(g=>({...g,...a})),u){n(a,x);return}switch(a.category){case"your-pet":s(g=>g+1),t===0&&a.category!==h.category&&(i(a.category),o(null));break;case"sell":t===0&&(a.category!==h.category&&(i(a.category),o(null)),s(g=>g+3)),t===3&&s(g=>g+2);break;default:t===0&&(a.category!==h.category&&(i(a.category),o(null)),s(g=>g+3)),t===3&&s(g=>g+1)}},M=(a,u="")=>{switch(k(x=>({...x,...a})),a.category){case"your-pet":s(x=>x-1),u!==""&&o(u);break;case"sell":t===3&&(s(x=>x-3),u!==""&&o(u)),t===5&&(s(x=>x-2),u!==""&&o(u));break;default:t===3&&(s(x=>x-3),u!==""&&o(u)),t===4&&(s(x=>x-1),u!==""&&o(u))}},ee=[e.jsx(fe,{next:c,data:h,selectedFile:l}),e.jsx(Ne,{next:c,prev:M,data:h,selectedFile:l}),e.jsx(ke,{next:c,prev:M,data:h,selectedFile:l}),e.jsx(ye,{next:c,prev:M,data:h,selectedFile:l}),e.jsx(Ee,{next:c,prev:M,data:h,selectedFile:l}),e.jsx($e,{next:c,prev:M,data:h,selectedFile:l})],te=()=>{switch(h.category){case"your pet":return"Add pet";case"sell":return"Add pet for sale";case"lost/found":return"Add lost pet";case"in good hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(ce,{children:e.jsx(pe,{children:e.jsxs(he,{children:[e.jsxs("div",{children:[e.jsx(ue,{children:t===0?"Add pet":te()}),e.jsxs(be,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]})]}),ee[t]]})})})})},Me=()=>e.jsx(Ae,{});export{Me as default};
