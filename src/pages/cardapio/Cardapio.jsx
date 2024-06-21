import React, { useContext, useEffect, useState } from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.jsx'
import { Card } from '../../components/card/card.jsx'
import {dataProdutos} from '../../service/data.js'

import { ShopCar } from '../../context/ContextValueCar'


export default function Cardapio() {

  const [data, setData] = useState([]);
  
  const {items, setItems, valuesItems, setValuesItems} = useContext(ShopCar);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3030/produtos');
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        setData(data.data); // Define os produtos no estado
        
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (<>
       
    <Header item={0} valueCount={0}/>

    <section className="cardSection">
    {data.map((produto) => (
        <div key={produto.id_produto}>
          <Card itemId={produto.id_produto} title={produto.nome} description={produto.descricao} price={produto.preco} imgUrl={produto.img}/>
        </div>
      ))}      
    </section>
  </>
  )
}
