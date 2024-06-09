import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { ShopCar } from '../../context/ContextValueCar';
import { IsModal } from '../isModal/IsModal';

export default function Header() {
    const { items, cartItems, valuesItems,totalCart } = useContext(ShopCar);
    const qtdItems = cartItems.length;
    const openSideBar = () => {
        const event = new CustomEvent('openSideBar');
        window.dispatchEvent(event);
        console.log('open');
    };

    return (
        <>
            <header className='header-Header'>
                <div>
                    <img className='mb-4' src="images/logoRed2.png" alt="Logo da marca" />
                </div>
                <nav>
                    <Link to=''>Inicio</Link>
                    <Link to=''>Açaí</Link>
                    <Link to=''>Doces</Link>
                    <Link to=''>Picolé</Link>
                </nav>
                <div className='lupaInput'>
                    <img className='mb-4' src="images/lupa.png" alt="Lupa" />
                    <input type="text" placeholder='Procura no Cardápio' />
                </div>
                <div className="shopcar" onClick={openSideBar}>
                    <img className='mb-4' src="images/buy.png" alt="Carrinho de compras" />
                    <div>
                        <label>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(totalCart)}</label>
                        <label>{qtdItems} {qtdItems > 1 ? 'itens' : 'item'}</label>
                    </div>
                </div>
            </header>
            <IsModal />
        </>
    );
}
