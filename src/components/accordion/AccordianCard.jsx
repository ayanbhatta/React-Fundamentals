import React, { useState } from 'react'

const AccordianCard = ({question, answer}) => {
    let [show, setShow] = useState(false)
    console.log(question)
  return (
    <div>
     <h2 onClick={()=> setShow(!show)}>{question}</h2> 
     {show && <p>{answer}</p>}
    </div>
  )
}

export default AccordianCard
