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
    <Header item={0} valueCount={0}/>

    <section className="cardSection">
      {dataProdutos.map((item)=>{
        return(
        <div key={item.id}>
            <Card title={item.titulo} description={item.descricao} price={item.price} imgUrl={item.image}/>
        </div>
            
          )
        })}
      
    </section>
  </>
  )
}
