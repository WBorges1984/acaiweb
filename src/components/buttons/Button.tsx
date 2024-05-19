import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'


interface ButtonProps{
  text: String,
  url: string,
  blank?: boolean,
  nameClass: 'writePurple' | 'purpleWrite'
}

const Button = (props: ButtonProps) => {
  return (
    <Link target={props.blank ? '_blank' : '_self' } 
        to={props.url} 
        className={props.nameClass}>
            {props.text}
    </Link>
  )
}

export default Button