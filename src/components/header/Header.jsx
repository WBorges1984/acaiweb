import React, { useContext, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { number } from 'prop-types'
import { ShopCar } from '../../context/ContextValueCar'


export default function Header(props) {
    
    const {items, setItems, valuesItems, setValuesItems} = useContext(ShopCar);

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
                <label>R${valuesItems},00</label>
                <label>{items}{items > 1 ? ' itens':' item'}</label>
            </div>
        </div>
    </header>
  
  </>
  )
}
