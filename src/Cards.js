import react, { useEffect, useState } from 'react'
import reactDom from 'react-dom'
import App1 from './App1'
import "./index.css"

function Cards (){
   const [name,setName] =useState("") 
   const [fullName,setFullName] =useState("") 
   const [email,setEmail] =useState("") 
   const [fullEmail,setFullEmail] =useState("") 

   function fun(e){
       setName(e.target.value)
   }
   function funny(f){
    setEmail(f.target.value)
}

   function fun2(e){
       e.preventDefault()
    setFullName(name)
    setFullEmail(email)
}
   

return (
    <>
    <form onSubmit={fun2}>
    <div>
<input type="text" onChange={fun}/>
<br/>
<input type="password" onChange={funny}/>
<button type="submit">submit</button>
</div>
</form>
<div className="box">
<li>{fullName}</li>
<button onClick={() =>{setFullName("")}}> del</button>
<li>{fullEmail}</li>
<button onClick={() =>{setFullEmail("")}}> del</button>
</div>
    </>
)
}

export default Cards