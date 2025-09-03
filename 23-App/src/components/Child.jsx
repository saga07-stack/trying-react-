import React from 'react'

const  Child = ({onClickBtn}) => {
  return (
    <div>
        <button onClick={onClickBtn} >Click me</button>
    </div>
  )
}

export default  Child