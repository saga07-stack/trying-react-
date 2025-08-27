import React from 'react'

const  Options = ({options, handelQuestionChange}) => {
  return (
    <div>
        {options.map((option)=>(
            <button
            style={{
                display:"flex",
                flexDirection:"column",
                gap: "20px",
                margin: "20px"
            }}
             key={option.id}
             onClick={()=>handelQuestionChange(option.text)} > 
             {option.text}
             
              </button>
        ))}
    </div>
  )
}

export default  Options