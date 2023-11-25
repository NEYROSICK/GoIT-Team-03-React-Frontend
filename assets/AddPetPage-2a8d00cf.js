import{n as v,j as e,s as S,r as j,i as te,A as ne,B as ae,C as se}from"./index-a581f74b.js";import{a as x,b as P,F,E as u}from"./formik.esm-064f8d36.js";import{c as $,a as f,d as V,e as re}from"./index.esm-7e282745.js";import{s as d}from"./sprite-183f090d.js";const L=v(x)`
  display: none;
`,ie=v.div`
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
`,oe=v.p`
  position: absolute;
  bottom: -26px;
  left: 18px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);
`,w="24px",G="24px",le=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`,ce=v.div`
  border-radius: 40px;
  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 16px 8px;
  margin-bottom: 20px;
`,de=v.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 12px;
`,me=v.ul`
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
`,y=v.button`
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
      width: ${w};
    }
  }
`,A=v.svg`
  width: ${w};
  height: ${w};
  fill: var(--clr-primary-inv);
`,C=v.svg`
  width: ${G};
  height: ${G};
  stroke: var(--clr-brand-blue);
`,xe=$({category:f().required("Select a category")}),pe=r=>{const t=()=>{console.log("Cancel")},a=i=>{r.next(i),console.log(i)};return e.jsx(P,{initialValues:r.data,validationSchema:xe,onSubmit:a,children:e.jsxs(F,{children:[e.jsxs(ie,{children:[e.jsx(L,{type:"radio",name:"category",id:"your-pet",value:"your-pet"}),e.jsx("label",{htmlFor:"your-pet",children:"your pet"}),e.jsx(L,{type:"radio",name:"category",id:"sell",value:"sell"}),e.jsx("label",{htmlFor:"sell",children:"sell"}),e.jsx(L,{type:"radio",name:"category",id:"lost-found",value:"lost-found"}),e.jsx("label",{htmlFor:"lost-found",children:"lost/found"}),e.jsx(L,{type:"radio",name:"category",id:"in-good-hands",value:"in-good-hands"}),e.jsx("label",{htmlFor:"in-good-hands",children:"in good hands"}),e.jsx(u,{name:"category",component:oe})]}),e.jsxs(y,{className:"buttonNext",type:"submit",children:["Next",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(y,{className:"buttonBack",type:"button",onClick:t,children:[e.jsx(C,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Сancel"]})]})})},W=v.div`
  margin-bottom: 24px;

  & label {
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

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
    
    &:focus{
      outline: none;
      border: 2px solid var(--clr-brand-blue);
    }
    
    &.is-invalid {
      border-color: var(--clr-brand-red);

      &:focus{
        outline: none;
        border: 2px solid var(--clr-brand-red);
      }
    }
  }
`,he=$({title:f().required("Enter a title for add"),name:f().min(2).max(16).required("Enter a name pet"),date:V().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().min(2).max(16).required("Enter a type of pet")}),ue=r=>{const t=a=>{r.next(a),console.log(a)};return e.jsx(P,{initialValues:r.data,validationSchema:he,onSubmit:t,children:({values:a,touched:i,errors:o})=>e.jsxs(F,{children:[e.jsxs(W,{children:[e.jsxs("label",{children:["Title of Ad",e.jsx(x,{type:"text",name:"title",placeholder:"Type name pet",className:`${i.title&&o.title?"is-invalid":""}`}),e.jsx(u,{name:"title",component:"div"})]}),e.jsxs("label",{children:["Pet’s name",e.jsx(x,{type:"text",name:"name",placeholder:"Type name pet",className:`${i.name&&o.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:"div"})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(x,{name:"date",type:"date",placeholder:"Type date of birth",className:`${i.date&&o.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:"div"})]}),e.jsxs("label",{children:["Type",e.jsx(x,{type:"text",name:"type",placeholder:"Type of pet",className:`${i.type&&o.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:"div"})]})]}),e.jsxs(y,{className:"buttonNext",type:"submit",children:["Next",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(y,{className:"buttonBack",type:"button",onClick:()=>r.prev(a),children:[e.jsx(C,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},ge=$({name:f().min(2).max(16).required("Enter a name pet"),date:V().required("Enter a date of birth").max(new Date,"Date cannot be in the future"),type:f().min(2).max(16).required("Enter a type of pet")}),be=r=>{const t=a=>{r.next(a),console.log(a)};return e.jsx(P,{initialValues:r.data,validationSchema:ge,onSubmit:t,children:({values:a,touched:i,errors:o})=>e.jsxs(F,{children:[e.jsxs(W,{children:[e.jsxs("label",{children:["Pet’s name",e.jsx(x,{type:"text",name:"name",placeholder:"Type name pet",className:`${i.name&&o.name?"is-invalid":""}`}),e.jsx(u,{name:"name",component:"div"})]}),e.jsxs("label",{children:["Date of Birth",e.jsx(x,{type:"date",name:"date",placeholder:"Type date of birth",className:`${i.date&&o.date?"is-invalid":""}`}),e.jsx(u,{name:"date",component:"div"})]}),e.jsxs("label",{children:["Type",e.jsx(x,{type:"text",name:"type",placeholder:"Type of pet",className:`${i.type&&o.type?"is-invalid":""}`}),e.jsx(u,{name:"type",component:"div"})]})]}),e.jsxs(y,{className:"buttonNext",type:"submit",children:["Next",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(y,{className:"buttonBack",type:"button",onClick:()=>r.prev(a),children:[e.jsx(C,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},B=S.img`
  background: var(--clr-brand-blue-lt);
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 20px;
`,I=S.label`
  background: var(--clr-brand-blue-lt);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100vh;
  height: 100vw;
  max-width: 112px;
  max-height: 112px;
  border-radius: 20px;
  margin-right: 29.3%;

  border: 5px solid transparent;
  transition: border-color 0.3s;

  &.no-image-selected {
    border: 2px solid var(--clr-brand-red);
  }

  & svg {
    transition:
      transform 0.3s,
      scale 0.3s;
  }

  &:hover {
    border-color: var(--clr-brand-blue);

    & svg {
      transform: rotate(180deg) scale(1.4);
    }
  }
`,z=S.input`
  display: none;
`,O=S.div`
  color: var(--clr-brand-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,R=S.div`
  & p {
    margin-bottom: 4px;
  }

  & p,
  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;
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
  }

  & textarea.commentsField {
    height: 92px;
    border-radius: 20px;
    resize: none;
  }
`,U=S.div`
  display: flex;
  align-items: center;
`,Y=S.svg`
  width: 40px;
  height: 40px;
  stroke: var(--clr-brand-blue);
`,_=S.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-red);
  fill: transparent;
`,J=S.svg`
  width: 24px;
  height: 24px;
  stroke: var(--clr-brand-blue);
  fill: transparent;
`,Z=S.div`
  display: flex;
  gap: 8px;

  & > label {
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
`,fe=$({comments:f().required("Enter a comment")}),je=r=>{const[t,a]=j.useState(r.selectedFile||null),[i,o]=j.useState(!1),[b,N]=j.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),N("")):(a(null),N("Please select a JPEG or PNG"))},k=l=>{if(!t){o(!0);return}r.next(l,!0,t)};return e.jsx(P,{initialValues:r.data,validationSchema:fe,onSubmit:k,children:({values:l,touched:s,errors:c})=>e.jsx(F,{children:e.jsxs(R,{children:[e.jsxs(U,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(I,{className:b!==""||i&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(Y,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(z,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),b&&e.jsx(O,{children:b}),e.jsxs("label",{children:["Comments",e.jsx(x,{type:"text",name:"comments",placeholder:"Type of pet",className:`${s.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:"div"})]}),e.jsxs(y,{className:"buttonNext",type:"submit",children:["Done",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(y,{className:"buttonBack",type:"button",onClick:()=>r.prev(l,t),children:[e.jsx(C,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},ye=$({sex:f().required("Select a sex"),location:f().required("Enter a location"),comments:f().required("Enter a comment")}),ve=r=>{const[t,a]=j.useState(r.selectedFile||null),[i,o]=j.useState(!1),[b,N]=j.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),N("")):(a(null),N("Please select a JPEG or PNG"))},k=l=>{if(!t){o(!0);return}r.next(l,!0,t)};return e.jsx(P,{initialValues:r.data,validationSchema:ye,onSubmit:k,children:({values:l,touched:s,errors:c})=>e.jsx(F,{children:e.jsxs(R,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(Z,{children:[e.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(_,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(J,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:"div"})]}),e.jsxs(U,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(I,{className:b!==""||i&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(Y,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(z,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),b&&e.jsx(O,{children:b}),e.jsxs("label",{children:["Location",e.jsx(x,{className:`${s.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:"div"})]}),e.jsxs("label",{children:["Comments",e.jsx(x,{type:"text",name:"comments",placeholder:"Type of pet",className:`${s.comments&&c.comments?"is-invalid":""}`}),e.jsx(u,{name:"comments",component:"div"})]}),e.jsxs(y,{className:"buttonNext",type:"submit",children:["Done",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(y,{className:"buttonBack",type:"button",onClick:()=>r.prev(l,t),children:[e.jsx(C,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})})},Ne=$({sex:f().required("Select a sex"),location:f().required("Enter a location"),price:re().min(1).required("Enter a price"),comments:f().required("Enter a comment")}),Se=r=>{const[t,a]=j.useState(r.selectedFile||null),[i,o]=j.useState(!1),[b,N]=j.useState(""),p=l=>{const s=l.target.files[0];s&&(s.type==="image/jpeg"||s.type==="image/png")?(a(s),N("")):(a(null),N("Please select a JPEG or PNG"))},k=l=>{if(!t){o(!0);return}r.next(l,!0,t)};return e.jsx(P,{initialValues:r.data,validationSchema:Ne,onSubmit:k,children:({values:l,touched:s,errors:c})=>e.jsxs(F,{children:[e.jsxs(R,{children:[e.jsx("p",{children:"The Sex"}),e.jsxs(Z,{children:[e.jsx(x,{type:"radio",name:"sex",id:"female",value:"female",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"female",children:[e.jsx(_,{className:"iconFemale",children:e.jsx("use",{href:d+"#iconFemale"})}),"Female"]}),e.jsx(x,{type:"radio",name:"sex",id:"male",value:"male",className:`${s.sex&&c.sex?"is-invalid":""}`}),e.jsxs("label",{htmlFor:"male",children:[e.jsx(J,{className:"iconMale",children:e.jsx("use",{href:d+"#iconMale"})}),"Male"]}),e.jsx(u,{name:"sex",component:"div"})]}),e.jsxs(U,{children:[e.jsx("p",{children:"Choose pet image:"}),e.jsxs(I,{className:b!==""||i&&!t?"no-image-selected":"",children:[t?e.jsx("div",{children:e.jsx(B,{src:URL.createObjectURL(t),alt:"User's file",style:{maxWidth:"300px"}})}):e.jsx(Y,{children:e.jsx("use",{href:d+"#iconPlusAvatar"})}),e.jsx(z,{type:"file",name:"image",accept:"image/jpeg, image/png",onChange:p})]})]}),b&&e.jsx(O,{children:b}),e.jsxs("label",{children:["Location",e.jsx(x,{className:`${s.location&&c.location?"is-invalid":""}`,type:"text",name:"location",placeholder:"Type of location"}),e.jsx(u,{name:"location",component:"div"})]}),e.jsxs("label",{children:["Price",e.jsx(x,{type:"text",name:"price",placeholder:"Type of price",className:`${s.price&&c.price?"is-invalid":""}`}),e.jsx(u,{name:"price",component:"div"})]}),e.jsxs("label",{children:["Comments",e.jsx(x,{className:`commentsField ${s.comments&&c.comments?"is-invalid":""}`,as:"textarea",type:"text",name:"comments",placeholder:"Type of pet"}),e.jsx(u,{name:"comments",component:"div"})]})]}),e.jsxs(y,{className:"buttonNext",type:"submit",children:["Done",e.jsx(A,{children:e.jsx("use",{href:d+"#iconPaw"})})]}),e.jsxs(y,{className:"buttonBack",type:"button",onClick:()=>r.prev(l,t),children:[e.jsx(C,{children:e.jsx("use",{href:d+"#iconArrowLeft"})}),"Back"]})]})})},ke=()=>{const r=te(),[t,a]=j.useState(0),[i,o]=j.useState(null),[b]=ne(),[N]=ae(),[p,k]=j.useState({category:"",title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""}),l=n=>{k({category:n,title:"",name:"",date:"",type:"",sex:"",location:"",price:"",comments:""})},s=(n,h)=>{const m=new FormData,g=q=>{const T=new Date(q),X=String(T.getDate()).padStart(2,"0"),D=String(T.getMonth()+1).padStart(2,"0"),ee=T.getFullYear();return`${X}-${D}-${ee}`};let M={};n.category==="your-pet"&&(M={name:n.name,date:g(n.date),type:n.type,comments:n.comments,image:h}),n.category==="sell"&&(M={category:n.category,title:n.title,name:n.name,date:g(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,price:n.price,image:h}),(n.category==="lost-found"||n.category==="in-good-hands")&&(M={category:n.category,title:n.title,name:n.name,date:g(n.date),type:n.type,sex:n.sex,location:n.location,comments:n.comments,image:h}),console.log(M);for(const[q,T]of Object.entries(M))m.append(q,T);n.category==="your-pet"?b(m):N(m),l(""),console.log("Send request");const Q=m.category==="your-pet"?"/user":"/notices";r(Q)},c=(n,h=!1,m="")=>{if(k(g=>({...g,...n})),h){s(n,m);return}switch(n.category){case"your-pet":a(g=>g+1),t===0&&n.category!==p.category&&(l(n.category),o(null));break;case"sell":t===0&&(n.category!==p.category&&(l(n.category),o(null)),a(g=>g+3)),t===3&&a(g=>g+2);break;default:t===0&&(n.category!==p.category&&(l(n.category),o(null)),a(g=>g+3)),t===3&&a(g=>g+1)}},E=(n,h="")=>{switch(k(m=>({...m,...n})),n.category){case"your-pet":a(m=>m-1),h!==""&&o(h);break;case"sell":t===3&&(a(m=>m-3),h!==""&&o(h)),t===5&&(a(m=>m-2),h!==""&&o(h));break;default:t===3&&(a(m=>m-3),h!==""&&o(h)),t===4&&(a(m=>m-1),h!==""&&o(h))}},H=[e.jsx(pe,{next:c,data:p,selectedFile:i}),e.jsx(be,{next:c,prev:E,data:p,selectedFile:i}),e.jsx(je,{next:c,prev:E,data:p,selectedFile:i}),e.jsx(ue,{next:c,prev:E,data:p,selectedFile:i}),e.jsx(ve,{next:c,prev:E,data:p,selectedFile:i}),e.jsx(Se,{next:c,prev:E,data:p,selectedFile:i})],K=()=>{switch(p.category){case"your pet":return"Add pet";case"sell":return"Add pet for sale";case"lost/found":return"Add lost pet";case"in good hands":return"In good hands";default:return"Add pet"}};return e.jsx(e.Fragment,{children:e.jsx(se,{children:e.jsx(le,{children:e.jsxs(ce,{children:[e.jsxs("div",{children:[e.jsx(de,{children:t===0?"Add pet":K()}),e.jsxs(me,{children:[e.jsxs("li",{className:t===0?"is-selected":"is-done",children:["Choose option"," "]}),e.jsx("li",{className:t===1||t===3?"is-selected":t===0?"":"is-done",children:"Personal details"}),e.jsx("li",{className:t===2||t===4||t===5?"is-selected":"",children:"More info"})]})]}),H[t]]})})})})},Ce=()=>e.jsx(ke,{});export{Ce as default};
