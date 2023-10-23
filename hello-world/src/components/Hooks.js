import React, {useState} from 'react'

function App(){
const [count, setcount] = useState(0)
    return(
        <div>
            <h1>Hooks {count}</h1>
            <button onClick={() =>{setcount(count + 1 )}}>Increment</button>

        </div>
    )
}

export default App;