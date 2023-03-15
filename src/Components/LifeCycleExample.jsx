import { useEffect, useState } from "react";

function LifeCycleExample() {

    const[counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("I have been mounted");

        return () => {
            console.log("I have been unmounted")
        }

    }, [])

    useEffect(() => {
        console.log("I have been updated")
    }, [counter])
    
    return (
        <>
        <br/>
        <br/>
            <button onClick={() => setCounter((curr)=>curr + 1)}>Update</button>
            <h1>Clicked {counter} times</h1>
        </>
    )
}

export default LifeCycleExample;