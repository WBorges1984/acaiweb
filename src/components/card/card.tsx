import React from "react";
import './card.css'
import {dataProdutos} from '../../service/data'
interface CardProps{
    imgUrl?: string,
    title?: string,
    description?: string,
    price?: string
}

export const Card = (props: CardProps)=>{
    const repit = [1,2,3,4,5,6];
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
        <>
        <title>
            <h1>Cardápio</h1>
        </title>
        <section className="cardSection">
            {dataProdutos.map((item)=>{
                return(
                    <article onClick={()=>console.log(item)} className="cardItem" key={item.id}>
                <div className="div-description">
                    <div className="titleProd">{item.titulo}</div>
                    <div className="descriptionProd">{limitarDescricao(item.descricao, 100)}</div>
                    <p className="priceProd">A partir de <span>R$ {item.price} <em>R${precoFicticio(item.price, 20)}</em></span></p>
                </div>
                <div className="imgProd">
                    <img src={item.image} alt="food" />
                </div>
            </article>
                )
            })}       
        </section>
        </>
    )
}