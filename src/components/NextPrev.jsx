import React, { useState } from "react";

// const NextPrev = () => {
//   let [item, setItem] = useState(false);
//   return <div>
//     <ol>
//         <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Apple</li>
//         <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Mango</li>
//         <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Banana</li>
//         <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Watermellon</li>
//         <li style={{textDecorationLine: item? "line-through":"none"}} onClick={()=>setItem(!item)}>Strawberry</li>
//     </ol>
//   </div>;
// };
import React, { useState } from 'react';

// const NextPrev = () => {
//   // Store the index of the selected item. Initialize as null so nothing is struck out.
//   const [activeIndex, setActiveIndex] = useState(null);

//   const fruits = ["Apple", "Mango", "Banana", "Watermelon", "Strawberry"];

//   return (
//     <div>
//       <ol>
//         {fruits.map((fruit, index) => (
//           <li
//             key={index}
//             style={{ 
//               textDecorationLine: activeIndex === index ? "line-through" : "none",
//               cursor: "pointer" 
//             }}
//             onClick={() => setActiveIndex(index)}
//           >
//             {fruit}
//           </li>
//         ))}
//       </ol>
      
//       {/* Optional: Navigation logic from your previous request */}
//       <div style={{ marginTop: '10px' }}>
//         <button onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : fruits.length - 1))}>
//           Previous
//         </button>
//         <button onClick={() => setActiveIndex(prev => (prev < fruits.length - 1 ? prev + 1 : 0))}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };


export default NextPrev;
