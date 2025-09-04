import React, { memo } from 'react'

const  Child = memo( ({onclickBtn}) => {
    console.log("child-render")
  return (
    <div>
        <button onClick={onclickBtn} >Child</button>
    </div>
  )
})

export default  Child