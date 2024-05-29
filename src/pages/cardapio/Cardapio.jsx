import React, { useState } from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.jsx'
import { Card } from '../../components/card/card.jsx'
import {dataProdutos} from '../../service/data.js'
import { IsModal } from '../../components/isModal/IsModal.jsx'


export default function Cardapio() {
  const [isModal, setIsModal] = useState(false);
  const num = [1,2,3,4,5,6]
  function SetModalTrue(){
    setIsModal(true)
  }
  function SetModalfalse(){
    setIsModal(false)
  }

  return (<>
  {isModal ? 
  
    <IsModal SetModalfalse={SetModalfalse}
             urlImg='https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403081153_8HPM_i.jpg'
             titulo='Picolé WHITE 75G'
             priceOld='50,00'
             qtd={3}
             priceFull='150,00'
              />
    
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
