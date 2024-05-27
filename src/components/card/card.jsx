import React, { useContext } from "react";
import './card.css'
import { ShopCar } from "../../context/ContextValueCar";


export const Card = (props)=>{
    
  const {items, setItems, ValuesItems, setValuesItems} = useContext(ShopCar)


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

    return(
            <article className="cardItem"  >
                    <div className="div-description">
                    <div className="titleProd">{props.title}</div>
                    <div className="descriptionProd">{limitarDescricao(props.description, 100)}</div>
                    <p className="priceProd">A partir de <span>R$ {props.price} <em>R${precoFicticio(props.price, 20)}</em></span></p>
                </div>
                <div className="imgProd">
                    <img src={props.imgUrl} alt="food" />
                </div>
            </article>
    )
}