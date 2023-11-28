import{s as i,N as m,a as h,c as u,k as g,x as b,j as e,C as w,b as t}from"./index-92198771.js";import{c as f,b as a,u as v}from"./index.esm-318046fb.js";import{n as j}from"./notiflix-notify-aio-c455de27.js";import{s as y}from"./selectors-9c63f203.js";const k=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
`,C=i.form`
  font-family: Manrope, sans-serif;
  width: 280px;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 608px;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 75px;
    padding-right: 75px;
  }
`,P=i.input`
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
`,s=i.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`,E=i.div`
  position: relative;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,z=i.div`
  margin-bottom: 110px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`,L=i.input`
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
`,F=i.button`
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
`,N=i.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-secondary);
  text-align: center;
`,S=i.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,V=i(m)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,n=i.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,$=i.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width: 24px;
  height: 24px;
  fill: none;
`,l=i.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`,A=()=>{const d=h(y),p=u(),c=g(),x=f({email:a().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:a().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),o=v({initialValues:{email:"",password:""},validationSchema:x,onSubmit:r=>{if(c(b({email:r.email.toLowerCase(),password:r.password})),d)p("/user");else return j.Notify.failure("Wrong login or password")}});return e.jsx(w,{children:e.jsx(k,{children:e.jsxs(C,{onSubmit:o.handleSubmit,children:[e.jsx(S,{children:"Login"}),e.jsxs(E,{children:[e.jsx(P,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:o.handleChange,value:o.values.email,className:`${!o.touched.email||!o.errors.email?"":"invalid"}`}),o.touched.email&&o.errors.email?e.jsxs(e.Fragment,{children:[o.values.email&&e.jsx(n,{type:"button",onClick:()=>{o.setFieldValue("email",""),o.setFieldTouched("email",!1)},children:e.jsx($,{children:e.jsx("use",{href:t+"#iconCross"})})}),e.jsx(s,{children:o.errors.email})]}):null]}),e.jsxs(z,{children:[e.jsx(L,{id:"password",name:"password",type:o.values.showPassword?"text":"password",placeholder:"Password",onChange:o.handleChange,value:o.values.password,className:`${!o.touched.password||!o.errors.password?"":"invalid"}`}),e.jsx(n,{type:"button",onClick:()=>{o.setFieldTouched("password",!1),o.setFieldValue("showPassword",!o.values.showPassword)},children:o.values.showPassword?e.jsx(l,{children:e.jsx("use",{href:t+"#iconEyeOpen"})}):e.jsx(l,{children:e.jsx("use",{href:t+"#iconEyeClosed"})})}),o.touched.password&&o.errors.password?e.jsx(s,{children:o.errors.password}):null]}),e.jsx(F,{type:"submit",children:"Login"}),e.jsxs(N,{children:["Dont have an account? ",e.jsx(V,{to:"/register",children:"Register"})]})]})})})},q=A;function M(){return e.jsx(q,{})}export{M as default};