import{s as o,N as g,b,i as f,B as l,j as e,C as w,h as t}from"./index-655ad311.js";import{c as v,b as d,u as j}from"./index.esm-0784ee8c.js";import{n as a}from"./notiflix-notify-aio-46e38489.js";const y=o.section`
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
`,k=o.form`
  margin: 0 auto;
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
`,C=o.input`
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
`,p=o.p`
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
  border: solid 1px var(--clr-brand-blue);
  &.invalid {
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
`,N=o.p`
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
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,S=o(g)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,c=o.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,V=o.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width: 24px;
  height: 24px;
  fill: none;
`,x=o.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`,$=()=>{const m=b(),h=f(),u=v({email:d().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:d().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),i=j({initialValues:{email:"",password:""},validationSchema:u,onSubmit:s=>{h(l({email:s.email.toLowerCase(),password:s.password})).then(n=>{if(l.fulfilled.match(n))m("/user"),a.Notify.success("Login successful");else{const r=n.payload;r&&r.response&&r.response.status===401?a.Notify.failure(r.message||"Unauthorized user"):a.Notify.failure("An error occurred during login")}})}});return e.jsx(y,{children:e.jsx(w,{children:e.jsxs(k,{onSubmit:i.handleSubmit,children:[e.jsx(F,{children:"Login"}),e.jsxs(P,{children:[e.jsx(C,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:`${!i.touched.email||!i.errors.email?"":"invalid"}`}),i.touched.email&&i.errors.email?e.jsxs(e.Fragment,{children:[i.values.email&&e.jsx(c,{type:"button",onClick:()=>{i.setFieldValue("email",""),i.setFieldTouched("email",!1)},children:e.jsx(V,{children:e.jsx("use",{href:t+"#iconCross"})})}),e.jsx(p,{children:i.errors.email})]}):null]}),e.jsxs(z,{children:[e.jsx(E,{id:"password",name:"password",type:i.values.showPassword?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,className:`${!i.touched.password||!i.errors.password?"":"invalid"}`}),e.jsx(c,{type:"button",onClick:()=>{i.setFieldTouched("password",!1),i.setFieldValue("showPassword",!i.values.showPassword)},children:i.values.showPassword?e.jsx(x,{children:e.jsx("use",{href:t+"#iconEyeOpen"})}):e.jsx(x,{children:e.jsx("use",{href:t+"#iconEyeClosed"})})}),i.touched.password&&i.errors.password?e.jsx(p,{children:i.errors.password}):null]}),e.jsx(L,{type:"submit",children:"Login"}),e.jsxs(N,{children:["Dont have an account? ",e.jsx(S,{to:"/register",children:"Register"})]})]})})})},q=$;function D(){return e.jsx(q,{})}export{D as default};
