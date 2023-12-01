import{s as r,N as g,i as f,b,k as v,j as s,C as j,h as o,x as P,y}from"./index-4267a640.js";import{c as C,b as i,f as N,u as k}from"./index.esm-ae7f3920.js";import{a as F}from"./selectors-51ca07e4.js";const E=r.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 68px);

  @media (min-width: 768px) {
    min-height: calc(100% - 92px);
  }

  @media (min-width: 1280px) {
    min-height: calc(100% - 88px);
  }
`,$=r.form`
  /* margin-left: auto;
  margin-right: auto; */
  margin: 0 auto;
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
`,d=r.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,q=r.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`,R=r.h1`
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,t=r.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`,n=r.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,c=r.input`
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
`,S=r.input`
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
`,V=r.button`
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
`,h=r.svg`
  stroke: var(--clr-brand-red);
  fill: none;
  width: 24px;
  height: 24px;
`,l=r.svg`
  stroke: var(--clr-brand-blue);
  fill: none;
  width: 24px;
  height: 24px;
`,L=r.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  text-align: center;
  color: var(--clr-secondary);
`,z=r(g)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;function A(){const m=f(),p=b(),u=v(F),x=C({userName:i().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:i().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:i().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required"),confirmPassword:i().oneOf([N("password"),null],"Passwords must match").required("Confirm Password is required")}),e=k({initialValues:{userName:"",email:"",password:"",confirmPassword:""},validationSchema:x,onSubmit:async a=>{try{a.password===a.confirmPassword?(await m(P({name:a.userName,email:a.email.toLocaleLowerCase(),password:a.password})),await m(y({email:a.email.toLocaleLowerCase(),password:a.password})),u&&p("/user")):alert("Passwords do not match. Please ensure that both password fields contain the same value.")}catch(w){console.error("Registration error:",w)}}});return s.jsx(E,{children:s.jsx(j,{children:s.jsxs($,{onSubmit:e.handleSubmit,children:[s.jsx(R,{children:"Registration"}),s.jsxs(d,{children:[s.jsx(c,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.userName,className:`${e.touched.userName&&e.errors.userName?"is-invalid":""}`}),e.touched.userName&&e.errors.userName?s.jsxs(s.Fragment,{children:[e.values.userName&&s.jsx(n,{type:"button",onClick:()=>{e.setFieldValue("userName",""),e.setFieldTouched("userName",!1)},children:s.jsx(h,{children:s.jsx("use",{href:o+"#iconCross"})})}),s.jsx(t,{children:e.errors.userName})]}):null]}),s.jsxs(d,{children:[s.jsx(c,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email,className:`${e.touched.email&&e.errors.email?"is-invalid":""}`}),e.touched.email&&e.errors.email?s.jsxs(s.Fragment,{children:[e.values.email&&s.jsx(n,{type:"button",onClick:()=>{e.setFieldValue("email",""),e.setFieldTouched("email",!1)},children:s.jsx(h,{children:s.jsx("use",{href:o+"#iconCross"})})}),s.jsx(t,{children:e.errors.email})]}):null]}),s.jsxs(d,{children:[s.jsx(c,{id:"password",name:"password",type:e.values.showPassword?"text":"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,className:`${e.touched.password&&e.errors.password?"is-invalid":""}`}),s.jsx(n,{type:"button",onClick:()=>{e.setFieldTouched("password",!1),e.setFieldValue("showPassword",!e.values.showPassword)},children:e.values.showPassword?s.jsx(l,{children:s.jsx("use",{href:o+"#iconEyeOpen"})}):s.jsx(l,{children:s.jsx("use",{href:o+"#iconEyeClosed"})})}),e.touched.password&&e.errors.password?s.jsx(t,{children:e.errors.password}):null]}),s.jsxs(q,{children:[s.jsx(S,{id:"confirmPassword",name:"confirmPassword",type:e.values.showConfirmPassword?"text":"password",placeholder:"Confirm password",onChange:e.handleChange,value:e.values.confirmPassword,className:`${e.touched.confirmPassword&&e.errors.confirmPassword?"is-invalid":""}`}),s.jsx(n,{type:"button",onClick:()=>{e.setFieldTouched("confirmPassword",!1),e.setFieldValue("showConfirmPassword",!e.values.showConfirmPassword)},children:e.values.showConfirmPassword?s.jsx(l,{children:s.jsx("use",{href:o+"#iconEyeOpen"})}):s.jsx(l,{children:s.jsx("use",{href:o+"#iconEyeClosed"})})}),e.touched.confirmPassword&&e.errors.confirmPassword?s.jsx(t,{children:e.errors.confirmPassword}):null]}),s.jsx(V,{type:"submit",children:"Registration"}),s.jsxs(L,{children:[" ","Already have an account?",s.jsx(z,{to:"/login",children:"Login"})]})]})})})}function Z(){return s.jsx(A,{})}export{Z as default};
