import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { number } from 'prop-types'

interface HeaderProps{
    item: number
    valueCount: number
}

export default function Header(props : HeaderProps) {
    const[itemCount, setItemCount] = useState(2)
    const[valueCount, setIValueCount] = useState(21)

  return (<>
    <header className='header-Header'>
        <div>
            <img className={'mb-4'} src="images/logoRed2.png" alt="Logo da marca"/>
        </div>
        <div>
            <a href="">Inicio</a>
            <a href="">Açaí</a>
            <a href="">Doces</a>
            <a href="">Picolé</a>
        </div>
        <div className='lupaInput'>
       
            <img className={'mb-4'} src="images/lupa.png" alt="Logo da marca"/>
            
            <input type="text" placeholder='Procura no Cardápio' />
        </div>
        <div className="shopcar">
                <img className={'mb-4'} src="images/buy.png" alt="Logo da marca"/>
            <div>
                <label>R${valueCount},00</label>
                <label>{itemCount}{itemCount > 1 ? ' itens':' item'}</label>
            </div>
        </div>
    </header>
  
  </>
  )
}
