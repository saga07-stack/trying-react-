import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";

const  App = () => {
  return (
    <div>
      <li>
     <FaInstagram size={100} color='orange' />
     <FaLine size={100} color='green' />
     <FaViber size={100} color='purple' 
      />
      <button> <GrLike size={100} color='blue' /> </button>
      </li>
    </div>
  )
}

export default  App