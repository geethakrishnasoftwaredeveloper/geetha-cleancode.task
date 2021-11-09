
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App9() {
  //const [inputValue, setInputValue] = useState("");
  const lName = useRef(null);
function gk(e){
    e.preventDefault()
    console.log(lName)
}
 
  return (
    <>
    <div>
    {/* <label htmlFor="lName">enter</label> */}
     
     <form onSubmit={gk}> <input
        type="text"
      id="lName" ref={lName} onChange={()=>{}}
      />
      <button type="submit">submit</button>
      </form>
      <h1>RenderinputValue: {lName.current.value}</h1>
      </div>
    </>
  );
}
 export default App9