import{s as a,N as h,k as g,i as x,o as w,j as r,p as f,q as b}from"./index-a581f74b.js";import{c as P,a as o,b as j}from"./index.esm-7e282745.js";import{u as v}from"./formik.esm-064f8d36.js";import{s as N}from"./selectors-87b94965.js";const y=a.form`
  margin-left: auto;
  margin-right: auto;
  font-family: Manrope, sans-serif;
  min-height: 200px;
  max-width: 280px;
  background-color: var(--clr-bcg-user);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
`,n=a.div`
  margin-bottom: 14px;
`,C=a.div`
  margin-bottom: 40px;
`,q=a.h1`
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
`,t=a.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
`,i=a.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
`,k=a.input`
  display: flex;

  padding-left: 15px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border: solid 1px var(--clr-brand-blue);
`,R=a.button`
  font-weight: 600;
  margin-bottom: 8px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 40px;
  color: var(--clr-bcg-user);
  background-color: var(--clr-brand-blue);
`,A=a.p`
  font-weight: 400;
  text-align: center;
  color: var(--clr-secondary);
`,I=a(h)`
  font-weight: 400;
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
`;function S(){const d=g(),l=x(),c=w(N),m=P({userName:o().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only letters and spaces").required("Name is required"),email:o().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:o().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain at least one digit, one lowercase letter, and one uppercase letter").required("Password is required"),confirmPassword:o().oneOf([j("password"),null],"Passwords must match").required("Confirm Password is required")}),e=v({initialValues:{userName:"",email:"",password:"",confirmPassword:""},validationSchema:m,onSubmit:async(s,{resetForm:p})=>{try{console.log(s.password),console.log(s.confirmPassword),s.password===s.confirmPassword?(await d(f({name:s.userName,email:s.email,password:s.password})),await d(b({email:s.email,password:s.password})),p(),c&&l("/user")):alert("Passwords do not match. Please ensure that both password fields contain the same value.")}catch(u){console.error("Registration error:",u)}}});return r.jsxs(y,{onSubmit:e.handleSubmit,children:[r.jsx(q,{children:"Registration"}),r.jsxs(n,{children:[r.jsx(i,{id:"userName",name:"userName",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.userName}),e.touched.userName&&e.errors.userName?r.jsx(t,{children:e.errors.userName}):null]}),r.jsxs(n,{children:[r.jsx(i,{id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email}),e.touched.email&&e.errors.email?r.jsx(t,{children:e.errors.email}):null]}),r.jsxs(n,{children:[r.jsx(i,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password}),e.touched.password&&e.errors.password?r.jsx(t,{children:e.errors.password}):null]}),r.jsxs(C,{children:[r.jsx(k,{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:"Confirm password",onChange:e.handleChange,value:e.values.confirmPassword}),e.touched.confirmPassword&&e.errors.confirmPassword?r.jsx(t,{children:e.errors.confirmPassword}):null]}),r.jsx(R,{type:"submit",children:"Registration"}),r.jsxs(A,{children:[" ","Already have an account?",r.jsx(I,{to:"/login",children:"Login"})]})]})}function L(){return r.jsx(S,{})}export{L as default};
