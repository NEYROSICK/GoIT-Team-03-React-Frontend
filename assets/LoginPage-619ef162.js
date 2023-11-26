import{s as o,N as h,a as u,m as g,f as b,t as w,j as r,C as f}from"./index-6053f046.js";import{u as v}from"./formik.esm-f14511e9.js";import{c as j,a as s}from"./index.esm-8220933b.js";import{s as i}from"./sprite-aa7412ec.js";import{s as y}from"./selectors-9c63f203.js";const k=o.form`
  font-family: Manrope, sans-serif;
  max-width: 280px;
  margin-top: 20px;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 608px;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 75px;
    padding-right: 75px;
    margin-top: 48px;
  }
  @media (min-width: 1200px) {
    margin-top: 64px;
  }
`,C=o.input`

  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: solid 1px
    ${({isValid:a})=>a?"var(--clr-brand-blue)":"var(--clr-brand-red)"};
  &:invalid {
    border-color: var(--clr-brand-red);
  }
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,n=o.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`,P=o.div`
  position: relative;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,z=o.div`
  margin-bottom: 110px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`,E=o.input`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  outline: none;
  border: solid 1px
    ${({isValid:a})=>a?"var(--clr-brand-blue)":"var(--clr-brand-red)"};

  &:invalid {
    border-color: var(--clr-brand-red);
  }
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,L=o.button`
  font-size: 20px;
  font-weight: 600;
  border-radius: 40px;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  border: none;
  color: var(--clr-bcg-user);
  background-color: var(--clr-brand-blue);
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`,V=o.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-secondary);
  text-align: center;
`,F=o.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width:768px){
    margin-bottom: 40px;
  }
`,S=o(h)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,d=o.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 15px;
  left: 84%;
  @media (min-width: 768px) {
    top: 20%;
    left: 90%;
  }
`,$=o.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width:24px;
  height: 24px;
  fill:none;
  
`,l=o.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`,q=()=>{const a=u(y),p=g(),c=b(),m=j({email:s().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:s().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),e=v({initialValues:{email:"",password:""},validationSchema:m,onSubmit:(t,{resetForm:x})=>{c(w({email:t.email,password:t.password})),x(),a&&p("/user")}});return r.jsx(f,{children:r.jsxs(k,{onSubmit:e.handleSubmit,children:[r.jsx(F,{children:"Login"}),r.jsxs(P,{children:[r.jsx(C,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email.toLocaleLowerCase(),isValid:!e.touched.email||!e.errors.email}),e.touched.email&&e.errors.email?r.jsxs(r.Fragment,{children:[e.values.email&&r.jsx(d,{type:"button",onClick:()=>{e.setFieldValue("email",""),e.setFieldTouched("email",!1)},children:r.jsx($,{children:r.jsx("use",{href:i+"#iconCross"})})}),r.jsx(n,{children:e.errors.email})]}):null]}),r.jsxs(z,{children:[r.jsx(E,{id:"password",name:"password",type:e.values.showPassword?"text":"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,isValid:!e.touched.password||!e.errors.password}),r.jsx(d,{type:"button",onClick:()=>{e.setFieldTouched("password",!1),e.setFieldValue("showPassword",!e.values.showPassword)},children:e.values.showPassword?r.jsx(l,{children:r.jsx("use",{href:i+"#iconEyeOpen"})}):r.jsx(l,{children:r.jsx("use",{href:i+"#iconEyeClosed"})})}),e.touched.password&&e.errors.password?r.jsx(n,{children:e.errors.password}):null]}),r.jsx(L,{type:"submit",children:"Login"}),r.jsxs(V,{children:["Dont have an account? ",r.jsx(S,{to:"/register",children:"Register"})]})]})})},A=q;function R(){return r.jsx(A,{})}export{R as default};
