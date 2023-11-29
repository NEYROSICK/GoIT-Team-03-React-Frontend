import{s as i,N as g,c as b,k as f,x as l,j as e,C as w,b as s}from"./index-c136e85b.js";import{c as v,b as d,u as j}from"./index.esm-4fa9ff30.js";import{n as a}from"./notiflix-notify-aio-a1f3815a.js";const y=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
`,k=i.form`
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
`,C=i.input`
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
`,p=i.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`,P=i.div`
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
`,E=i.input`
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
`,L=i.button`
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
`,F=i.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,S=i(g)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,c=i.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 10px;
  left: 84%;
  @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  }
`,V=i.svg`
  stroke: var(--clr-brand-red);
  display: block;
  width: 24px;
  height: 24px;
  fill: none;
`,x=i.svg`
  stroke: var(--clr-brand-blue);
  display: block;
  width: 24px;
  height: 24px;

  fill: none;
`,$=()=>{const m=b(),h=f(),u=v({email:d().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:d().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain only English letters at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),o=j({initialValues:{email:"",password:""},validationSchema:u,onSubmit:t=>{h(l({email:t.email.toLowerCase(),password:t.password})).then(n=>{if(l.fulfilled.match(n))m("/user"),a.Notify.success("Login successful");else{const r=n.payload;r&&r.response&&r.response.status===401?a.Notify.failure(r.message||"Unauthorized user"):a.Notify.failure("An error occurred during login")}})}});return e.jsx(w,{children:e.jsx(y,{children:e.jsxs(k,{onSubmit:o.handleSubmit,children:[e.jsx(F,{children:"Login"}),e.jsxs(P,{children:[e.jsx(C,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:o.handleChange,value:o.values.email,className:`${!o.touched.email||!o.errors.email?"":"invalid"}`}),o.touched.email&&o.errors.email?e.jsxs(e.Fragment,{children:[o.values.email&&e.jsx(c,{type:"button",onClick:()=>{o.setFieldValue("email",""),o.setFieldTouched("email",!1)},children:e.jsx(V,{children:e.jsx("use",{href:s+"#iconCross"})})}),e.jsx(p,{children:o.errors.email})]}):null]}),e.jsxs(z,{children:[e.jsx(E,{id:"password",name:"password",type:o.values.showPassword?"text":"password",placeholder:"Password",onChange:o.handleChange,value:o.values.password,className:`${!o.touched.password||!o.errors.password?"":"invalid"}`}),e.jsx(c,{type:"button",onClick:()=>{o.setFieldTouched("password",!1),o.setFieldValue("showPassword",!o.values.showPassword)},children:o.values.showPassword?e.jsx(x,{children:e.jsx("use",{href:s+"#iconEyeOpen"})}):e.jsx(x,{children:e.jsx("use",{href:s+"#iconEyeClosed"})})}),o.touched.password&&o.errors.password?e.jsx(p,{children:o.errors.password}):null]}),e.jsx(L,{type:"submit",children:"Login"}),e.jsxs(N,{children:["Dont have an account? ",e.jsx(S,{to:"/register",children:"Register"})]})]})})})},q=$;function D(){return e.jsx(q,{})}export{D as default};
