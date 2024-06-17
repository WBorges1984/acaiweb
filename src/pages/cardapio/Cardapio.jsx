import React, { useContext, useState } from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.jsx'
import { Card } from '../../components/card/card.jsx'
import {dataProdutos} from '../../service/data.js'

import { ShopCar } from '../../context/ContextValueCar'


export default function Cardapio() {
  
  const {items, setItems, valuesItems, setValuesItems} = useContext(ShopCar);


  return (<>
  
    <Header item={0} valueCount={0}/>

    <section className="cardSection">
      {dataProdutos.map((item)=>{
        return(
        <div key={item.id} >
            <Card itemId={item.id} title={item.title} description={item.description} price={item.price} imgUrl={item.imgUrl}/>
        </div>
            
          )
        })}
      
    </section>
  </>
  )
}
