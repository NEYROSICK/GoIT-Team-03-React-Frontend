import{n as N,j as e,s as j,r as y,m as oe,B as re,D as ie,C as le}from"./index-ed3cebd4.js";import{a as m,b as $,F as C,E as u}from"./formik.esm-b50c93d3.js";import{c as E,a as f,d as _,e as ce}from"./index.esm-8bae87e7.js";import{s as d}from"./sprite-01337a18.js";const L=N(m)`
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
`,xe=N.p`
  position: absolute;
  bottom: -20px;
  left: 10px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,z="24px",W="24px",me=N.div`
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
      width: ${z};
    }
  }
`,A=N.svg`
  width: ${z};
  height: ${z};
  fill: var(--clr-primary-inv);
`,M=N.svg`
  width: ${W};
  height: ${W};
  stroke: var(--clr-brand-blue);
`,ge=E({category:f().required("Select a category")}),be=o=>{const t=()=>{console.log("Cancel")},a=r=>{o.next(r),console.log(r)};return e.jsx($,{initialValues:o.data,validationSchema:ge,onSubmit:a,children:e.jsxs(C,{children:[e.jsxs(de,{children:[e.jsx(L,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(L,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(L,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(L,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(u,{name:"category",component:xe})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:t,children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Сancel"]})]})})},J=N.div`
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
`,fe=E({title:f().required("Enter a title for add"),name:f().min(2).max(16).required("Enter a name pet"),date:_().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().min(2).max(16).required("Enter a type of pet")}),je=o=>{const t=a=>{o.next(a),console.log(a)};return e.jsx($,{initialValues:o.data,validationSchema:fe,onSubmit:t,children:({values:a,touched:r,errors:i})=>e.jsxs(C,{children:[e.jsxs(J,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(m,{type:"text",name:"title",placeholder:"Type name pet",className:`${r.title&&i.title?"is-invalid":""}`}),e.jsx(u,{name:"title",component:P})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(m,{type:"text",name:"name",placeholder:"Type name pet",className:`${r.name&&i.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:P})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(m,{name:"date",type:"date",placeholder:"Type date of birth",className:`${r.date&&i.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:P})]}),e.jsxs("label",{children:["Type",e.jsx(m,{type:"text",name:"type",placeholder:"Type of pet",className:`${r.type&&i.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:P})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>o.prev(a),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},ye=E({name:f().min(2).max(16).required("Enter a name pet"),date:_().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().min(2).max(16).required("Enter a type of pet")}),ve=o=>{const t=a=>{o.next(a),console.log(a)};return e.jsx($,{initialValues:o.data,validationSchema:ye,onSubmit:t,children:({values:a,touched:r,errors:i})=>e.jsxs(C,{children:[e.jsxs(J,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(m,{type:"text",name:"name",placeholder:"Type name pet",className:`${r.name&&i.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:P})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(m,{type:"date",name:"date",placeholder:"Type date of birth",className:`${r.date&&i.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:P})]}),e.jsxs("label",{children:["Type",e.jsx(m,{type:"text",name:"type",placeholder:"Type of pet",className:`${r.type&&i.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:P})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Next",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>o.prev(a),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},B=j.img`
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
`,Y=j.div`
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
`,G=j.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`,V=j.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);
`,Z=j.svg`
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
`,F=j.p`
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
`,Ne=E({comments:f().required("Enter a comment")}),Se=o=>{const[t,a]=y.useState(o.selectedFile||null),[r,i]=y.useState(!1),[b,S]=y.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),S("")):(a(null),S("Please select a JPEG or PNG"))},k=l=>{if(!t){i(!0);return}o.next(l,!0,t)};return e.jsx($,{initialValues:o.data,validationSchema:Ne,onSubmit:k,children:({values:l,touched:s,errors:c})=>e.jsx(C,{children:e.jsxs(Y,{children:[e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:b!==""||r&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),b&&e.jsx(U,{children:b}),e.jsxs("label",{children:["Comments",e.jsx(m,{as:"textarea",type:"text",name:"comments",placeholder:"Type of pet",className:`${s.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:F})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>o.prev(l,t),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},ke=E({sex:f().required("Select a sex"),location:f().required("Enter a location"),comments:f().required("Enter a comment")}),Pe=o=>{const[t,a]=y.useState(o.selectedFile||null),[r,i]=y.useState(!1),[b,S]=y.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),S("")):(a(null),S("Please select a JPEG or PNG"))},k=l=>{if(!t){i(!0);return}o.next(l,!0,t)};return e.jsx($,{initialValues:o.data,validationSchema:ke,onSubmit:k,children:({values:l,touched:s,errors:c})=>e.jsx(C,{children:e.jsxs(Y,{children:[e.jsxs(K,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(Q,{children:[e.jsx(m,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(Z,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(m,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(H,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:X})]})]}),e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:b!==""||r&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),b&&e.jsx(U,{children:b}),e.jsxs("label",{children:["Location",e.jsx(m,{className:`${s.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:F})]}),e.jsxs("label",{children:["Comments",e.jsx(m,{type:"text",as:"textarea",name:"comments",placeholder:"Type of pet",className:`${s.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:F})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>o.prev(l,t),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},Fe=E({sex:f().required("Select a sex"),location:f().required("Enter a location"),price:ce().min(1).required("Enter a price"),comments:f().required("Enter a comment")}),$e=o=>{const[t,a]=y.useState(o.selectedFile||null),[r,i]=y.useState(!1),[b,S]=y.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),S("")):(a(null),S("Please select a JPEG or PNG"))},k=l=>{if(!t){i(!0);return}o.next(l,!0,t)};return e.jsx($,{initialValues:o.data,validationSchema:Fe,onSubmit:k,children:({values:l,touched:s,errors:c})=>e.jsxs(C,{children:[e.jsxs(Y,{children:[e.jsxs(K,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(Q,{children:[e.jsx(m,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(Z,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(m,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(H,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:X})]})]}),e.jsxs(G,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(O,{className:b!==""||r&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(V,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(R,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),b&&e.jsx(U,{children:b}),e.jsxs("label",{children:["Location",e.jsx(m,{className:`${s.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:F})]}),e.jsxs("label",{children:["Price",e.jsx(m,{type:"text",name:"price",placeholder:"Type of price",className:`${s.price&&c.price?"is-invalid":""}`}),e.jsx(u,{name:"price",component:F})]}),e.jsxs("label",{children:["Comments",e.jsx(m,{className:`${s.comments&&c.comments?"is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(u,{name:"comments",component:F})]})]}),e.jsxs(v,{className:"buttonNext",type:"submit",children:["Done",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(v,{className:"buttonBack",type:"button",onClick:()=>o.prev(l,t),children:[e.jsx(M,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},Ce=()=>{const o=oe(),[t,a]=y.useState(0),[r,i]=y.useState(null),[b]=re(),[S]=ie(),[p,k]=y.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),l=n=>{k({category:n,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},s=(n,h)=>{const x=new FormData,g=q=>{const I=new Date(q),ne=String(I.getDate()).padStart(2,"0"),ae=String(I.getMonth()+1).padStart(2,"0"),se=I.getFullYear();return`${ne}-${ae}-${se}`};let w={};n.category==="your-pet"&&(w={name:n.name,date:g(n.date),type:n.type,comments:n.comments,image:h}),n.category==="sell"&&(w={category:n.category,title:n.title,name:n.name,date:g(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,price:n.price,image:h}),(n.category==="lost-found"||n.category==="in-good-hands")&&(w={category:n.category,title:n.title,name:n.name,date:g(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,image:h}),console.log(w);for(const[q,I]of Object.entries(w))x.append(q,I);n.category==="your-pet"?b(x):S(x),l(""),console.log("Send request");const te=x.category==="your-pet"?"/user":"/notices";o(te)},c=(n,h=!1,x="")=>{if(k(g=>({...g,...n})),h){s(n,x);return}switch(n.category){case"your-pet":a(g=>g+1),t===0&&n.category!==p.category&&(l(n.category),i(null));break;case"sell":t===0&&(n.category!==p.category&&(l(n.category),i(null)),a(g=>g+3)),t===3&&a(g=>g+2);break;default:t===0&&(n.category!==p.category&&(l(n.category),i(null)),a(g=>g+3)),t===3&&a(g=>g+1)}},T=(n,h="")=>{switch(k(x=>({...x,...n})),n.category){case"your-pet":a(x=>x-1),h!==""&&i(h);break;case"sell":t===3&&(a(x=>x-3),h!==""&&i(h)),t===5&&(a(x=>x-2),h!==""&&i(h));break;default:t===3&&(a(x=>x-3),h!==""&&i(h)),t===4&&(a(x=>x-1),h!==""&&i(h))}},D=[e.jsx(be,{next:c,data:p,selectedFile:r}),e.jsx(ve,{next:c,prev:T,data:p,selectedFile:r}),e.jsx(Se,{next:c,prev:T,data:p,selectedFile:r}),e.jsx(je,{next:c,prev:T,data:p,selectedFile:r}),e.jsx(Pe,{next:c,prev:T,data:p,selectedFile:r}),e.jsx($e,{next:c,prev:T,data:p,selectedFile:r})],ee=()=>{switch(p.category){case"your pet":return"Add pet";case"sell":return"Add pet for sale";case"lost/found":return"Add lost pet";case"in good hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(le,{children:e.jsx(me,{children:e.jsxs(pe,{children:[e.jsxs("div",{children:[e.jsx(he,{children:t===0?"Add pet":ee()}),e.jsxs(ue,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]})]}),D[t]]})})})})},we=()=>e.jsx(Ce,{});export{we as default};
