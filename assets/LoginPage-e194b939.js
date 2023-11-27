import{s as r,N as h,a as u,c as g,k as b,v as w,j as a,C as f,b as i}from"./index-258cd1de.js";import{c as v,b as s,u as j}from"./index.esm-8f43dc25.js";import{s as y}from"./selectors-9c63f203.js";const k=r.form`
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
`,C=r.input`

  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: solid 1px
    ${({isValid:o})=>o?"var(--clr-brand-blue)":"var(--clr-brand-red)"};
  &:invalid {
    border-color: var(--clr-brand-red);
  }
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,n=r.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`,P=r.div`
  position: relative;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,z=r.div`
  margin-bottom: 110px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`,E=r.input`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  outline: none;
  border: solid 1px
    ${({isValid:o})=>o?"var(--clr-brand-blue)":"var(--clr-brand-red)"};

  &:invalid {
    border-color: var(--clr-brand-red);
  }
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,L=r.button`
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
`,V=r.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-secondary);
  text-align: center;
`,F=r.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width:768px){
    margin-bottom: 40px;
  }
`,S=r(h)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,d=r.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 15px;
  left: 84%;
  @media (min-width: 768px) {
    top: 20%;
    left: 90%;
  }
`,$=r.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width:24px;
  height: 24px;
  fill:none;
  
`,l=r.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`,q=()=>{const o=u(y),p=g(),c=b(),x=v({email:s().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:s().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),e=j({initialValues:{email:"",password:""},validationSchema:x,onSubmit:(t,{resetForm:m})=>{c(w({email:t.email,password:t.password})),m(),o&&p("/user")}});return a.jsx(f,{children:a.jsxs(k,{onSubmit:e.handleSubmit,children:[a.jsx(F,{children:"Login"}),a.jsxs(P,{children:[a.jsx(C,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email.toLocaleLowerCase(),isValid:!e.touched.email||!e.errors.email}),e.touched.email&&e.errors.email?a.jsxs(a.Fragment,{children:[e.values.email&&a.jsx(d,{type:"button",onClick:()=>{e.setFieldValue("email",""),e.setFieldTouched("email",!1)},children:a.jsx($,{children:a.jsx("use",{href:i+"#iconCross"})})}),a.jsx(n,{children:e.errors.email})]}):null]}),a.jsxs(z,{children:[a.jsx(E,{id:"password",name:"password",type:e.values.showPassword?"text":"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,isValid:!e.touched.password||!e.errors.password}),a.jsx(d,{type:"button",onClick:()=>{e.setFieldTouched("password",!1),e.setFieldValue("showPassword",!e.values.showPassword)},children:e.values.showPassword?a.jsx(l,{children:a.jsx("use",{href:i+"#iconEyeOpen"})}):a.jsx(l,{children:a.jsx("use",{href:i+"#iconEyeClosed"})})}),e.touched.password&&e.errors.password?a.jsx(n,{children:e.errors.password}):null]}),a.jsx(L,{type:"submit",children:"Login"}),a.jsxs(V,{children:["Dont have an account? ",a.jsx(S,{to:"/register",children:"Register"})]})]})})},A=q;function B(){return a.jsx(A,{})}export{B as default};
