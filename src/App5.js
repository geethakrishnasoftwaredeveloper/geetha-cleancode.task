import React,{ useState } from "react"
import App6 from "./App6";

function App5(){
const [inputList, setInputList]=useState("");
const [items,setItems]=useState([]);

function InputEvent(e){
    setInputList(e.target.value); 
}

const gk= ()=>{
setItems((oldItems) =>{return [...oldItems,inputList];});
setInputList(" ");
};

function deleteItems(id){
    console.log("hai")
    setItems((prevalue)=>{return prevalue.filter((l,index)=>{ return index !== id})})
}
    return(
        <>
     <h1>to do list</h1>

     <input type="text"  value={inputList} onChange={InputEvent}/>
     <button onClick={gk}>+</button>
<ol start="100">
   { items.map((lavi,index) => {return <App6 onselect={deleteItems} text={lavi} id={index} key={index}/>})}</ol>

        </>
    )
}

export default App5