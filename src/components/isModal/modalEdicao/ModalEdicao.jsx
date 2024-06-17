import React, { useContext, useEffect, useState } from 'react'
import { Dock } from 'react-dock';
import { ShopCar } from '../../../context/ContextValueCar';
import {itemEdicao } from '../../../service/itemEdicao.js'


function ModalEdicao(props) {
    const [show, setShow] = useState(false);
    const {cartItems, totalCart, AddItemCart, RemoveItemCart} = useContext(ShopCar)

    function ConverteValor(vl){
      
        return new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(vl);
      }
    
    useEffect(()=>{
        window.addEventListener('openModalEdicao', function(){
            setShow(true);
        })
    },[]);

    function AddItem(id,nome,preco,foto){
        const item = {
          
            id: id, 
            nome,
            preco,
            foto,
            qtd: 1
      }
        
        AddItemCart(item)
      }

  return (
    <>
        <Dock position='bottom'
            isVisible={show}
            fluid={false}
            size={500}
            onVisibleChange={(visible) =>{
                setShow(visible);
            }}>
                <div className='ModalProd' >
              <h1>Items do pedido</h1>
               
                  <div className="ModalProdCard">
                    <div className="modalContainer">
                      <div className="imgProdIModal">
                        <img src={itemEdicao.foto} alt="" />
                      </div>
                      <div className="descriptionModal">
                        <div className="titleModal">{itemEdicao.nome}</div>
                        <div className="priceOldModal">{ConverteValor(itemEdicao.preco)}</div>
                        <div className="qtdPrice">
                          <div className='quantidade'>
                            <button onClick={()=>RemoveItemCart(itemEdicao.id)} className='btn-sun-up'><span>-</span></button>
                            <span>{props.qtd}</span>
                            <button onClick={()=>AddItem(props.id,props.nome,props.preco,itemEdicao[0].foto)} className='btn-sun-down'><span>+</span></button>
                          </div>
                          <div className="priceModal">{ConverteValor(props.preco * props.qtd)}</div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                
                
              
            </div>
              <div className="totSacola">Total: {ConverteValor(totalCart)}</div>
              <div className="btnFooter">
                <button className='btn btn-acai '>FINALIZAR</button>
              </div>


            </Dock>
    
    </>
  )
}

export default ModalEdicao