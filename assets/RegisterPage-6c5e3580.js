import{s,N as f,f as b,m as v,a as j,j as r,C as P,q as C,t as y}from"./index-e06992a8.js";import{c as N,a as t,b as k}from"./index.esm-a3220143.js";import{u as F}from"./formik.esm-fb73d020.js";import{s as i}from"./sprite-30046adb.js";import{s as V}from"./selectors-9c63f203.js";const q=s.div`
display:flex;
align-items:center;

min-height:calc(100vh - 64px);`,E=s.form`

  margin-left: auto;
  margin-right: auto;
  font-family: Manrope, sans-serif;
  min-height: 420px;
  max-width: 280px;
 
  background-color: var(--clr-bcg-user);
   box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom:20px;
   @media (min-width: 768px) {
   
    max-width: 608px;
    padding: 60px 75px;
  }

`,c=s.div`
  margin-bottom: 14px;
  position: relative;
   @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,R=s.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 52px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 40px;

  }
`,S=s.h1`
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
   @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,n=s.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`,d=s.button`
 position: absolute;
 background-color: transparent;
 border: none;
 top: 15px;
  left: 84%;
   @media (min-width: 768px) {
   
top: 20%;
  left: 90%;
  }
`,m=s.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
 border: solid 1px ${({isValid:o})=>o?"var(--clr-brand-blue)":"var(--clr-brand-red)"};

  &:invalid {
    border-color: var(--clr-brand-red);
  }
`,$=s.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px ${({isValid:o})=>o?"var(--clr-brand-blue)":"var(--clr-brand-red)"};

  &:invalid {
    border-color: var(--clr-brand-red);
  }
 
`,A=s.button`
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
fill:none;
width:24px;
  height: 24px;
`,l=s.svg`
  stroke: var(--clr-brand-blue);
  fill: none;
  width: 24px;
  height: 24px;
`,T=s.p`
  font-weight: 400;
  text-align: center;
  color: var(--clr-secondary);
`,I=s(f)`
  font-weight: 400;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;function L(){const o=b(),p=v(),u=j(V),x=N({userName:t().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only letters and spaces").required("Name is required"),email:t().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:t().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain at least one digit, one lowercase letter, and one uppercase letter").required("Password is required"),confirmPassword:t().oneOf([k("password"),null],"Passwords must match").required("Confirm Password is required")}),e=F({initialValues:{userName:"",email:"",password:"",confirmPassword:""},validationSchema:x,onSubmit:async(a,{resetForm:w})=>{try{console.log(a.password),console.log(a.confirmPassword),a.password===a.confirmPassword?(await o(C({name:a.userName,email:a.email,password:a.password})),await o(y({email:a.email,password:a.password})),w(),u&&p("/user")):alert("Passwords do not match. Please ensure that both password fields contain the same value.")}catch(g){console.error("Registration error:",g)}}});return r.jsx(P,{children:r.jsx(q,{children:r.jsxs(E,{onSubmit:e.handleSubmit,children:[r.jsx(S,{children:"Registration"}),r.jsxs(c,{children:[r.jsx(m,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.userName,isValid:!e.touched.userName||!e.errors.userName}),e.touched.userName&&e.errors.userName?r.jsxs(r.Fragment,{children:[e.values.userName&&r.jsx(d,{type:"button",onClick:()=>{e.setFieldValue("userName",""),e.setFieldTouched("userName",!1)},children:r.jsx(h,{children:r.jsx("use",{href:i+"#iconCross"})})}),r.jsx(n,{children:e.errors.userName})]}):null]}),r.jsxs(c,{children:[r.jsx(m,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email.toLocaleLowerCase(),isValid:!e.touched.email||!e.errors.email}),e.touched.email&&e.errors.email?r.jsxs(r.Fragment,{children:[e.values.email&&r.jsx(d,{type:"button",onClick:()=>{e.setFieldValue("email",""),e.setFieldTouched("email",!1)},children:r.jsx(h,{children:r.jsx("use",{href:i+"#iconCross"})})}),r.jsx(n,{children:e.errors.email})]}):null]}),r.jsxs(c,{children:[r.jsx(m,{id:"password",name:"password",type:e.values.showPassword?"text":"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,isValid:!e.touched.password||!e.errors.password}),r.jsx(d,{type:"button",onClick:()=>{e.setFieldTouched("password",!1),e.setFieldValue("showPassword",!e.values.showPassword)},children:e.values.showPassword?r.jsx(l,{children:r.jsx("use",{href:i+"#iconEyeOpen"})}):r.jsx(l,{children:r.jsx("use",{href:i+"#iconEyeClosed"})})}),e.touched.password&&e.errors.password?r.jsx(n,{children:e.errors.password}):null]}),r.jsxs(R,{children:[r.jsx($,{id:"confirmPassword",name:"confirmPassword",type:e.values.showConfirmPassword?"text":"password",placeholder:"Confirm password",onChange:e.handleChange,value:e.values.confirmPassword,isValid:!e.touched.confirmPassword||!e.errors.confirmPassword}),r.jsx(d,{type:"button",onClick:()=>{e.setFieldTouched("confirmPassword",!1),e.setFieldValue("showConfirmPassword",!e.values.showConfirmPassword)},children:e.values.showConfirmPassword?r.jsx(l,{children:r.jsx("use",{href:i+"#iconEyeOpen"})}):r.jsx(l,{children:r.jsx("use",{href:i+"#iconEyeClosed"})})}),e.touched.confirmPassword&&e.errors.confirmPassword?r.jsx(n,{children:e.errors.confirmPassword}):null]}),r.jsx(A,{type:"submit",children:"Registration"}),r.jsxs(T,{children:[" ","Already have an account?",r.jsx(I,{to:"/login",children:"Login"})]})]})})})}function D(){return r.jsx(L,{})}export{D as default};
