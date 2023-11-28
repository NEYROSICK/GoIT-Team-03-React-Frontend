import{s as o,N as m,a as h,c as u,k as g,x as w,j as e,C as b,b as t}from"./index-915085f2.js";import{c as f,b as a,u as v}from"./index.esm-099a2614.js";import{n as j}from"./notiflix-notify-aio-bffb5a79.js";import{s as y}from"./selectors-9c63f203.js";const k=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
`,C=o.form`
  font-family: Manrope, sans-serif;
  width: 280px;
  margin-top: 20px;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  @media (min-width: 768px) {
    width: 608px;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 75px;
    padding-right: 75px;
    margin-top: 48px;
  }
  @media (min-width: 1200px) {
    margin-top: 64px;
  }
`,P=o.input`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: solid 1px var(--clr-brand-blue);
  &.invalid {
    border-color: var(--clr-brand-red);
  }

  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,s=o.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`,E=o.div`
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
`,L=o.input`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
  &.invalid {
    border-color: var(--clr-brand-red);
  }

  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,F=o.button`
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
`,N=o.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-secondary);
  text-align: center;
`,S=o.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,V=o(m)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,n=o.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,$=o.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width: 24px;
  height: 24px;
  fill: none;
`,d=o.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`,A=()=>{const l=h(y),p=u(),c=g(),x=f({email:a().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:a().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=v({initialValues:{email:"",password:""},validationSchema:x,onSubmit:r=>{if(c(w({email:r.email.toLowerCase(),password:r.password})),l)p("/user");else return j.Notify.failure("Wrong login or password")}});return e.jsx(b,{children:e.jsx(k,{children:e.jsxs(C,{onSubmit:i.handleSubmit,children:[e.jsx(S,{children:"Login"}),e.jsxs(E,{children:[e.jsx(P,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${!i.touched.email||!i.errors.email?"":"invalid"}`}),i.touched.email&&i.errors.email?e.jsxs(e.Fragment,{children:[i.values.email&&e.jsx(n,{type:"button",onClick:()=>{i.setFieldValue("email",""),i.setFieldTouched("email",!1)},children:e.jsx($,{children:e.jsx("use",{href:t+"#iconCross"})})}),e.jsx(s,{children:i.errors.email})]}):null]}),e.jsxs(z,{children:[e.jsx(L,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${!i.touched.password||!i.errors.password?"":"invalid"}`}),e.jsx(n,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?e.jsx(d,{children:e.jsx("use",{href:t+"#iconEyeOpen"})}):e.jsx(d,{children:e.jsx("use",{href:t+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?e.jsx(s,{children:i.errors.password}):null]}),e.jsx(F,{type:"submit",children:"Login"}),e.jsxs(N,{children:["Dont have an account? ",e.jsx(V,{to:"/register",children:"Register"})]})]})})})},q=A;function M(){return e.jsx(q,{})}export{M as default};