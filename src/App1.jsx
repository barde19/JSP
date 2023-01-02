import { useState } from "react";


function App1 ()
{
    let [val, setVal] = useState(10)
    let increaseVal = ()=> {
        setVal(val + 10)
    }

    return(
        <>
        <h1> {val} </h1>
        <button onClick={increaseVal}> increase value</button>
        </>);
}

export default App1;