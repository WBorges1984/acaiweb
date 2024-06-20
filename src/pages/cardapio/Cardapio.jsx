import React, { useContext, useEffect, useState } from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.jsx'
import { Card } from '../../components/card/card.jsx'
import {dataProdutos} from '../../service/data.js'

import { ShopCar } from '../../context/ContextValueCar'


export default function Cardapio() {

  const [data, setData] = useState({});
  
  const {items, setItems, valuesItems, setValuesItems} = useContext(ShopCar);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3030/produtos');
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        setData(data); // Define os produtos no estado
        console.log(data)
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

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
