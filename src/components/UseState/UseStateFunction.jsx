import React, {useState} from 'react'

const UseStateFunction = () => {
    const [count, setCount] = useState(0);

    const handleUpdate = ()=>{
        setCount(count+1);
    }

  return (
    <div>
        <p> you clicked {count} times</p>
     <button onClick={()=>{
            setCount(count+1);
        }}> 
            Click me
        </button>

        <button onClick={()=> setCount(count+1)}>
            Click me
        </button>
        <button onClick={handleUpdate}>
            Click me
        </button>
    </div>
  )
}

export default UseStateFunction