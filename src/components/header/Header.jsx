import React, { useContext, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { number } from 'prop-types'
import { ShopCar } from '../../context/ContextValueCar'
import { IsModal } from '../isModal/IsModal'


export default function Header(props) {
    
    const {items, setItems, valuesItems, setValuesItems} = useContext(ShopCar);

    function openSideBar(){
        const event = new CustomEvent('openSideBar');
        window.dispatchEvent(event);
        console.log('open')
      }

  return (<>
    <header className='header-Header'>
        <div>
            <img className={'mb-4'} src="images/logoRed2.png" alt="Logo da marca"/>
        </div>
        <div>
            <Link to={''} >Inicio</Link>
            <Link to={''} >Açaí</Link>
            <Link to={''} >Doces</Link>
            <Link to={''} >Picolé</Link>
        </div>
        <div className='lupaInput'>
       
            <img className={'mb-4'} src="images/lupa.png" alt="Logo da marca"/>
            
            <input type="text" placeholder='Procura no Cardápio' />
        </div>
        <div className="shopcar" onClick={openSideBar}>
                <img className={'mb-4'} src="images/buy.png" alt="Logo da marca"/>
            <div>
                <label>R${valuesItems},00</label>
                <label>{items}{items > 1 ? ' itens':' item'}</label>
            </div>
        </div>
    </header>
    <IsModal />
  </>
  )
}
