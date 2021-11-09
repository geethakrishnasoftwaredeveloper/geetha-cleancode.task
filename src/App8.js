import React from "react";

function App8(props){
    return (
        <>
    <li>{props.text}</li>
    <button onClick={()=>{return props.onSelect(props.id)}}>+</button>

        </>
    )
}

export default App8