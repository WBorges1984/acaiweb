import React, { useContext } from "react";
import './card.css'
import { ShopCar } from "../../context/ContextValueCar";


export const Card = (props)=>{
    
  const {cartItems, setCartItems, AddItemCart, RemoveItemCart,totalCart, setTotalCart} = useContext(ShopCar)

    const limitarDescricao = (descricao, limite) => {
        if (descricao.length > limite) {
          return descricao.slice(0, limite) + '...';
        }
        return descricao;
      };

      const precoFicticio = (price, percentual)=>{
        let calc = (parseFloat(price) * percentual)/100 
        return (parseFloat(price) + calc).toFixed(2);
      }

      function openSideBarItem(){
        const eventItem = new CustomEvent('openSideBarItem');
        window.dispatchEvent(eventItem);
        
        }


      function openSideBar(){
          const event = new CustomEvent('openSideBar');
          window.dispatchEvent(event);
          
          
        const item = {
           id: props.itemId, 
          nome: props.title,
          preco: props.price,
          foto: props.imgUrl,
          qtd: 1
      }
        AddItemCart(item)
        

        
      }

    return(
            <article className="cardItem"  >
                    <div className="div-description">
                    <div className="titleProd">{props.title}</div>
                    <div className="descriptionProd">{limitarDescricao(props.description, 100)}</div>
                    <div className="priceButton">
                      <div>
                        <p className="priceProd">A partir de <span>R$ {props.price} <em>R${precoFicticio(props.price, 20)}</em></span></p>
                      </div>
                      <div className="buttons-cart">
                        <button className="btn btn-edit" onClick={openSideBarItem}>Editar</button>
                        <button className="btn btn-acai" onClick={openSideBar}>Adicionar</button>

                      </div>
                    </div>
                </div>
                <div className="imgProd">
                    <img src={props.imgUrl} alt="food" />
                </div>
            </article>
    )
}