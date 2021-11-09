 import React, { useState } from "react"
 import App8 from "./App8"
function App7 (){

const [inputlist, setInputList]=useState("")
const [items,setItems]=useState([])

function InputEvent(e){
setInputList(e.target.value)
}

function gk(){
setItems((prevalue)=>{return [...prevalue,inputlist]},
setInputList(" "))
}

function deleteItems(id){
    console.log("hai")
    setItems((prevalue)=>{return prevalue.filter((l,index)=>{ return index !== id})})
}


    return (
        <>
       <h1>todo list</h1>
       <input type="text" onChange={InputEvent} value= {inputlist}/>
       <button onClick={gk}>+</button>

   {
       items.map((f,index)=>{return <App8 onSelect={deleteItems} id={index} key={index} text={f}/>})
   }

        </>
    )
}
 export default App7