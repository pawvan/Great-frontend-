import React, { useState } from "react";
export default function Counter(){
const [counter,setCounter] =useState(0);
const handle =(counter)=>{
    setCounter(counter+1)
}
return (
    <>
    <button onClick={}>INcrease me</button>
    <p>
        {counter}
    </p>
    
    </>

)
}
