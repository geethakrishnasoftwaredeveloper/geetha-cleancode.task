import React, { useState } from 'react';

import './App.css';


function App1() {

  const [fullName,setFullName]=useState({
    fname:"",
    lname:"",
    email:" ",
    mobile:" ",
  });
 
  
  function inputEvent (event){
    console.log(event.target.value);

    const value = event.target.value;
    const name = event.target.name;

    setFullName( function (preValue)  {
      if (name ==="fname"){
        return {
          fname: value,
          lname: preValue.lname,
          email:preValue.email,
          mobile:preValue.mobile,
        };
      }

      else if (name === "lname")  {
        return {
          fname: preValue.fname,
          lname: value,
          email:preValue.email,
          mobile:preValue.mobile,

        };
      }

      else if (name === "email")  {
        return {
          fname: preValue.fname,
          lname:  preValue.lname,
          email:value,
          mobile:preValue.mobile,

        };
      }

      else if (name === "mobile")  {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          mobile:value,

        };
      };




    });
   
  };

  
  function onSubmit (event){
    event.preventDefault();
    alert("form submitted")
    
  };

  return (
   <>
   <form onSubmit={onSubmit}>
<div>    
  <h1>hello {fullName.fname} {fullName.lname} {fullName.email} {fullName.mobile}</h1>
  <input type="text" 
    placeholder="enter your name"
    name="fname"
    onChange={inputEvent}
    value={fullName.fname}
  />
  <input type="text"
   placeholder="enter your password"
   name="lname"
    onChange={inputEvent}
      value={fullName.lname}
    />

<input type="email"
   placeholder="enter your email"
   name="email"
    onChange={inputEvent}
      value={fullName.email}
    />

<input type="number"
   placeholder="enter your mobile"
   name="mobile"
    onChange={inputEvent}
      value={fullName.mobile}
    />
  <button type="submit">click me</button>
</div>
</form>






   </>
  );
}

export default App1;
