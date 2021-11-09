import { useState } from "react"
import App3 from "./App3"

function App4(){
const [item, setItem]=useState("")
const [data, setData]=useState([])

function inputEvent(e){
    setItem(e.target.value)
}

function gk(){
    setData((preValue) => { return[...preValue,item]},
    setItem(" "))
}
 const gk1 = (id) =>{
     setData ((preValue) => {return preValue.filter((arrElem,index) => {return index !==id })})
 }

    return (
        <>

        <input type="search" placeholder="searc"/>
        <input type="text" onChange={inputEvent} value={item}/>
        <button onClick={gk}>send</button>
        
            {
                data.map((itemval,index) =>{return( <> <App3 onselect={gk1} text={itemval}key={index} id={index}/> </>)})
            }
        
        </>
    )
}

export default App4