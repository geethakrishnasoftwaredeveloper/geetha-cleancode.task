import React from "react";

function App3(props){

    return (
        <>
<h1>{props.text}</h1>
 <li>{props.text}</li>
 <button > edit</button>
 <button onClick={()=>{return  props.onselect(props.id)}}>del</button>
        </>
    )
}

export default App3