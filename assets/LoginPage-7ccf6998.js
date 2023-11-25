import{s as r,N as p,a as m,k as x,l as u,q as h,j as e}from"./index-77519cfc.js";import{u as g}from"./formik.esm-0302ab4d.js";import{c as f,a as t}from"./index.esm-8d2af913.js";import{s as b}from"./selectors-87b94965.js";const w=r.form`
  font-family: Manrope, sans-serif;
  width: 280px;
  height: 425px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 20px;
  background-color: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin-left: auto;
  margin-right: auto;
`,v=r.input`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: 1px solid var(--clr-brand-blue);
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,i=r.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-brand-red);
  margin-left: 15px;
`,j=r.div`
  margin-bottom: 14px;
`,z=r.div`
  margin-bottom: 110px;
`,y=r.input`
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: 1px solid var(--clr-brand-blue);
  padding-left: 16px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,P=r.button`
  font-size: 20px;
  font-weight: 600;
  border-radius: 40px;
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  border: none;
  color: var(--clr-bcg-user);
  background-color: var(--clr-brand-blue);
`,k=r.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--clr-secondary);
  text-align: center;
`,L=r.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  color: var(--clr-primary);
`,E=r(p)`
  color: var(--clr-brand-blue);
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
`,q=()=>{const s=m(b),n=x(),l=u(),d=f({email:t().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),password:t().min(6,"Password must be at least 6 characters long").max(16,"Password can be at most 16 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Password must contain at least one digit, one lowercase letter, and one uppercase letter").required("Password is required")}),a=g({initialValues:{email:"",password:""},validationSchema:d,onSubmit:(o,{resetForm:c})=>{l(h({email:o.email,password:o.password})),c(),s&&n("/user")}});return e.jsxs(w,{onSubmit:a.handleSubmit,children:[e.jsx(L,{children:"Login"}),e.jsxs(j,{children:[e.jsx(v,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:a.handleChange,value:a.values.email}),a.touched.email&&a.errors.email?e.jsx(i,{children:a.errors.email}):null]}),e.jsxs(z,{children:[e.jsx(y,{id:"password",name:"password",type:"password",placeholder:"Password",onChange:a.handleChange,value:a.values.password}),a.touched.password&&a.errors.password?e.jsx(i,{children:a.errors.password}):null]}),e.jsx(P,{type:"submit",children:"Login"}),e.jsxs(k,{children:["Dont have an account? ",e.jsx(E,{to:"/register",children:"Register"})]})]})},S=q;function I(){return e.jsx(S,{})}export{I as default};
