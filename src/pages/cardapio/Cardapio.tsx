import React from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.tsx'
import { Card } from '../../components/card/card.tsx'
import {dataProdutos} from '../../service/data'

export default function Cardapio() {
  return (<>
    <Header item={0} valueCount={0}/>

    <section className="cardSection">
      {dataProdutos.map((item)=>{
        return(
            <Card  key={item.id} title={item.titulo} description={item.descricao} price={item.price} imgUrl={item.image}/>
          )
        })}
    </section>
  </>
  )
}
