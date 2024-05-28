import React, { useState } from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.jsx'
import { Card } from '../../components/card/card.jsx'
import {dataProdutos} from '../../service/data.js'


export default function Cardapio() {
  const [isModal, setIsModal] = useState(false);

  function SetModalTrue(){
    setIsModal(true)
  }
  function SetModalfalse(){
    setIsModal(false)
  }

  return (<>
  {isModal ? 
            <div className='ModalProd' >
              <div className="modalClose" onClick={SetModalfalse}></div>
              <div className="ModalProdCard">
                <div className="imgProd">
                  {/* <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202404081346_6575_i.jpg" alt="" /> */}
                </div>
                <div className="descriptionModal">
                  <div className="titleModal"></div>
                  <div className="descModal"></div>
                  <div className="priceModal"></div>
                </div>
              </div>
              
            </div>
           
            : ''}
    <Header item={0} valueCount={0}/>

    <section className="cardSection">
      {dataProdutos.map((item)=>{
        return(<>
            <Card SetModalTrue={SetModalTrue} key={item.id} title={item.titulo} description={item.descricao} price={item.price} imgUrl={item.image}/>
            </>
          )
        })}
      
    </section>
  </>
  )
}
