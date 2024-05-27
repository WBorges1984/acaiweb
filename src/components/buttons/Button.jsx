import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'



const Button = (props) => {
  return (
    <Link target={props.blank ? '_blank' : '_self' } 
        to={props.url} 
        className={props.nameClass}>
            {props.text}
    </Link>
  )
}

export default Button