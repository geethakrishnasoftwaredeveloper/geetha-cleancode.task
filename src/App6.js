import react from "react";

function App6(props){



    return( 
    <>
    <li >{props.text}</li> 
     <button onClick={()=>{props.onSelect(props.id)}}>-</button>
   

    </>
    )
}

export default App6