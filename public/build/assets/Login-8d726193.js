import{a as e,_ as f,r as h,j as a,n as b,d as x}from"./app-f8bd0deb.js";import{G as w}from"./GuestLayout-5c985dff.js";import{T as l,I as i}from"./TextInput-987af5bb.js";import{I as d}from"./InputLabel-4a09f15c.js";import{P as N}from"./PrimaryButton-5be4a997.js";import"./ApplicationLogo-7d14db7c.js";function y({className:r="",...t}){return e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function L({status:r,canResetPassword:t}){const{data:o,setData:c,post:u,processing:p,errors:n,reset:g}=f({email:"",password:"",remember:""});h.useEffect(()=>()=>{g("password")},[]);const m=s=>{c(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(w,{children:[e(b,{title:"Log in"}),r&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),a("form",{onSubmit:s=>{s.preventDefault(),u(route("login"))},children:[a("div",{children:[e(d,{htmlFor:"email",value:"Email"}),e(l,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:m}),e(i,{message:n.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(d,{htmlFor:"password",value:"Password"}),e(l,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:m}),e(i,{message:n.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(y,{name:"remember",value:o.remember,onChange:m}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[t&&e(x,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(N,{className:"ml-4",disabled:p,children:"Log in"})]})]})]})}export{L as default};
