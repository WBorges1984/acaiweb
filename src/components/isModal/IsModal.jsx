
import { Dock } from 'react-dock';
import './ismodal.css'
import { useContext, useEffect, useState } from 'react';
import { ShopCar } from '../../context/ContextValueCar';

export function IsModal(props){
const [show, setShow] = useState(false)
const {cartItems, totalCart, AddItemCart, RemoveItemCart} = useContext(ShopCar)


    useEffect(()=>{
        window.addEventListener('openSideBar', function(){
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


    function ConverteValor(vl){
      
      return new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(vl);
    }


    return(
        <>
        <Dock position='right'
            isVisible={show}
            fluid={false}
            size={310}
            onVisibleChange={(visible) =>{
                setShow(visible);
            }}>

            <div className='ModalProd' >
              <h1>Items do pedido</h1>
               {cartItems.map((item)=>{
                return(
                  <div className="ModalProdCard" key={item.id}>
                    <div className="modalContainer">
                      <div className="imgProdIModal">
                        <img src={item.foto} alt="" />
                      </div>
                      <div className="descriptionModal">
                        <div className="titleModal">{item.nome}</div>
                        <div className="priceOldModal">{ConverteValor(item.preco)}</div>
                        <div className="qtdPrice">
                          <div className='quantidade'>
                            <button onClick={()=>RemoveItemCart(item.id)} className='btn-sun-up'><span>-</span></button>
                            <span>{item.qtd}</span>
                            <button onClick={()=>AddItem(item.id,item.nome,item.preco,item.foto)} className='btn-sun-down'><span>+</span></button>
                          </div>
                          <div className="priceModal">{ConverteValor(item.preco * item.qtd)}</div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                )
               })} 
              
            </div>
              <div className="totSacola">Total: {ConverteValor(totalCart)}</div>
              <div className="btnFooter">
                <button className='btn btn-acai '>FINALIZAR</button>
              </div>


            </Dock>
        </>
    )
} 