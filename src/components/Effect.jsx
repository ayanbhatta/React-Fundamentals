import React, { useEffect, useState } from 'react'

const Effect = () => {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    //!dependency
    useEffect(()=>{
        console.log("Executed")
    },[count2])
  return (
    <div>
      <h1>Count 1 is {count1}</h1>
      <h1>Count 2 is {count2}</h1>
      <button onClick={()=> setCount1(count1 +1)}>Inc 1</button>
      <button onClick={()=> setCount2(count2 +1)}>Inc 2</button>
    </div>
  )
}

export default Effect
