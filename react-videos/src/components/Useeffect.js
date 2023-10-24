import React, { useEffect, useState } from "react";

const Forms = () => {
    const [count, setCount] = useState(1)
    useEffect(()=>{
        console.warn(count)
    },[count == 5])
    return (
        <div>
            <h1>Use Effect {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    );
};

Forms.PropTypes = {

};

export default Forms;