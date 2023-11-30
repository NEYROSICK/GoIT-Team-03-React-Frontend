import{s,N as g,i as f,b,k as v,j as r,C as j,h as o,x as P,y as C}from"./index-0d46be5b.js";import{c as y,b as i,f as N,u as k}from"./index.esm-ae729fdb.js";import{a as F}from"./selectors-51ca07e4.js";const E=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: calc(100vh - 64px);
`,$=s.form`
  /* margin-left: auto;
  margin-right: auto; */
  font-family: Manrope, sans-serif;
  min-height: 420px;
  width: 280px;

  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 608px;
    padding: 60px 75px;
  }
`,l=s.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,q=s.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 52px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 40px;
  }
`,V=s.h1`
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,t=s.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`,n=s.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,c=s.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.is-invalid {
    border-color: var(--clr-brand-red);
  }
`,L=s.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.is-invalid {
    border-color: var(--clr-brand-red);
  }
`,R=s.button`
  font-weight: 600;
  margin-bottom: 8px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 40px;
  color: var(--clr-bcg-user);

  background-color: var(--clr-brand-blue);
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`,h=s.svg`
  stroke: var(--clr-brand-red);
  fill: none;
  width: 24px;
  height: 24px;
`,d=s.svg`
  stroke: var(--clr-brand-blue);
  fill: none;
  width: 24px;
  height: 24px;
`,S=s.p`
  font-weight: 400;
  text-align: center;
  color: var(--clr-secondary);
`,A=s(g)`
  font-weight: 400;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;function T(){const m=f(),p=b(),u=v(F),x=y({userName:i().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:i().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:i().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required"),confirmPassword:i().oneOf([N("password"),null],"Passwords must match").required("Confirm Password is required")}),e=k({initialValues:{userName:"",email:"",password:"",confirmPassword:""},validationSchema:x,onSubmit:async a=>{try{a.password===a.confirmPassword?(await m(P({name:a.userName,email:a.email.toLocaleLowerCase(),password:a.password})),await m(C({email:a.email.toLocaleLowerCase(),password:a.password})),u&&p("/user")):alert("Passwords do not match. Please ensure that both password fields contain the same value.")}catch(w){console.error("Registration error:",w)}}});return r.jsx(j,{children:r.jsx(E,{children:r.jsxs($,{onSubmit:e.handleSubmit,children:[r.jsx(V,{children:"Registration"}),r.jsxs(l,{children:[r.jsx(c,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.userName,className:`${e.touched.userName&&e.errors.userName?"is-invalid":""}`}),e.touched.userName&&e.errors.userName?r.jsxs(r.Fragment,{children:[e.values.userName&&r.jsx(n,{type:"button",onClick:()=>{e.setFieldValue("userName",""),e.setFieldTouched("userName",!1)},children:r.jsx(h,{children:r.jsx("use",{href:o+"#iconCross"})})}),r.jsx(t,{children:e.errors.userName})]}):null]}),r.jsxs(l,{children:[r.jsx(c,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email,className:`${e.touched.email&&e.errors.email?"is-invalid":""}`}),e.touched.email&&e.errors.email?r.jsxs(r.Fragment,{children:[e.values.email&&r.jsx(n,{type:"button",onClick:()=>{e.setFieldValue("email",""),e.setFieldTouched("email",!1)},children:r.jsx(h,{children:r.jsx("use",{href:o+"#iconCross"})})}),r.jsx(t,{children:e.errors.email})]}):null]}),r.jsxs(l,{children:[r.jsx(c,{id:"password",name:"password",type:e.values.showPassword?"text":"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,className:`${e.touched.password&&e.errors.password?"is-invalid":""}`}),r.jsx(n,{type:"button",onClick:()=>{e.setFieldTouched("password",!1),e.setFieldValue("showPassword",!e.values.showPassword)},children:e.values.showPassword?r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeOpen"})}):r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeClosed"})})}),e.touched.password&&e.errors.password?r.jsx(t,{children:e.errors.password}):null]}),r.jsxs(q,{children:[r.jsx(L,{id:"confirmPassword",name:"confirmPassword",type:e.values.showConfirmPassword?"text":"password",placeholder:"Confirm password",onChange:e.handleChange,value:e.values.confirmPassword,className:`${e.touched.confirmPassword&&e.errors.confirmPassword?"is-invalid":""}`}),r.jsx(n,{type:"button",onClick:()=>{e.setFieldTouched("confirmPassword",!1),e.setFieldValue("showConfirmPassword",!e.values.showConfirmPassword)},children:e.values.showConfirmPassword?r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeOpen"})}):r.jsx(d,{children:r.jsx("use",{href:o+"#iconEyeClosed"})})}),e.touched.confirmPassword&&e.errors.confirmPassword?r.jsx(t,{children:e.errors.confirmPassword}):null]}),r.jsx(R,{type:"submit",children:"Registration"}),r.jsxs(S,{children:[" ","Already have an account?",r.jsx(A,{to:"/login",children:"Login"})]})]})})})}function Z(){return r.jsx(T,{})}export{Z as default};
