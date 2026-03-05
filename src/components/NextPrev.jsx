import React, { useState } from "react";

const NextPrev = () => {
  let [item, setItem] = useState(false);
  return <div>
    <ol>
        <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Apple</li>
        <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Mango</li>
        <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Banana</li>
        <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Watermellon</li>
        <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Strawberry</li>
    </ol>
  </div>;
};

export default NextPrev;
