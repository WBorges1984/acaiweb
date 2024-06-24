import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Dock } from 'react-dock';
import { ShopCar } from '../../../context/ContextValueCar';
import {itemEdit } from '../../../service/itemEdicao.js'
import './modalEdicao.css'
import { func } from 'prop-types';

function ModalEdicao(props) {
    const [show, setShow] = useState(false);
    const {edicaoItem, cartItemEdicao, setCartItemEdicao, cartItems, totalCart, AddItemCart, RemoveItemCart} = useContext(ShopCar)
    const [precoUn, setPrecoUn] = useState(cartItemEdicao.preco); 
    const [qtd, setQtd] = useState(0); 

    function ConverteValor(vl){
      
        return new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(vl);
      }
    
    useEffect(()=>{
        window.addEventListener('openModalEdicao', function(){
            setShow(true);
            setQtd(1)
            console.log(qtd)
        })
       
    },[]);

   

      function SomarItem(){
        const quantidade = qtd + 1;
        setQtd(quantidade)

        const item = {
          itemId: cartItemEdicao.id, 
             title: cartItemEdicao.nome,
             price: cartItemEdicao.preco,
             imgUrl: cartItemEdicao.foto,
          qtd: quantidade
         }
         edicaoItem(item)
  
      }

      function SubtrairItem(){
          setQtd(qtd - 1);
      }


      function FinalizarEdicao(id,nome,preco,foto){
        const item = {
          
            id: id, 
            nome,
            preco,
            foto,
            qtd: qtd
      }
        
        AddItemCart(item)
        setShow(false)
      }
      
      function FecharModal(){
        setShow(false);

      }

  return (
    <>
        <Dock position='bottom'
            isVisible={show}
            fluid={false}
            size={400}
            onVisibleChange={(visible) =>{
                setShow(visible);
            }}>
            <div className='container-complementos' >
              <h1 className=''>Escolha os complementos</h1>
                  <div className="container-edicao">
                    <div className="container-conteudo">
                      <div className="conteudoLeft">
                        <div className="nomeFoto">
                          <h2>{cartItemEdicao.nome}</h2>
                          <img src={cartItemEdicao.foto} alt="" />
                        </div>
                        <div className="precoQtd">
                          {ConverteValor(cartItemEdicao.preco)}
                          <button onClick={SomarItem} className='btn-sun-down'><span>+</span></button>
                          <span>{qtd}</span>
                          {qtd == 1 ? <button onClick={FecharModal} className='btn-sun-up'><span>x</span></button> : 
                          <button onClick={SubtrairItem} className='btn-sun-up'><span>-</span></button>}
                        </div>
                      </div>
                      <div className="conteudoRight"></div>
                    </div>
                  </div>
            </div>
              <div className="totSacola">Total: {ConverteValor(cartItemEdicao.preco * qtd)}</div>
              <div className="btnFooter">
                <button onClick={(e)=>FinalizarEdicao(cartItemEdicao.id,cartItemEdicao.nome,cartItemEdicao.preco,cartItemEdicao.foto)} className='btn btn-acai '>FINALIZAR</button>
              </div>


            </Dock>
    
    </>
  )
}

export default ModalEdicao