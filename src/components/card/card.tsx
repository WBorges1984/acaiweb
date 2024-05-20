import React from "react";
import './card.css'

interface CardProps{
    imgUrl?: string,
    title?: string,
    description?: string,
    price?: string
}

export const Card = (props: CardProps)=>{
    return(
        <>
            <article className="cardProd">
                <div className="imgProd"><img src="https://as1.ftcdn.net/v2/jpg/02/57/20/54/1000_F_257205476_oti53SUaluLi7Gu6h4IBgJCVoTMDhjqL.jpg" alt="food" /></div>
                <div className="titleProd">2 Mcofertas Médias</div>
                <div className="descriptionProd">São 2 Mcofertas Médias Clássicas para você compartilhar com quem preferir #Méquinosofá.</div>
                <p className="priceProd">A partir de R$ <span>16,90</span></p>

            </article>
        </>
    )
}