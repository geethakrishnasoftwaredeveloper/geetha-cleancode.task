import React, { useEffect, useState } from "react";


function App2(){

    var [fullName,setFullName]=useState({fname:" ",lname:" ",})
    var [fullName1,setFullName1]=useState({fname:" ",lname:" ",})
   // useEffect(function (){setFullName(" ")})

function InputEvent(e){
const value=e.target.value;
const name=e.target.name;

setFullName(function (preValue) {if(name === "fname"){ return { fname:value,lname:preValue.lname}} else if(name=="lname"){return {fname:preValue.fname,lname:value}}})

}

function ons (e){
    e.preventDefault()
  // setFullName(fullName.fname)
  setFullName1(fullName)

  

}


    return (
        <>
        <form onSubmit={ons}>
        <input type="text" placeholder="first name" name="fname" value={fullName.fname} onChange={InputEvent}/>
        <input type="text" placeholder="first name"  name="lname" value={fullName.lname} onChange={InputEvent}/>
        <button type="submit">submit</button>
</form>
<li>{fullName1.fname}</li>
<li>{fullName1.lname}</li>
<button onClick={() =>{setFullName1("")}}> del</button>
        </>
    )
}

export default App2