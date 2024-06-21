import React, { useContext, useEffect, useState } from 'react'
import './cardapio.css'
import Header from '../../components/header/Header.jsx'
import { Card } from '../../components/card/card.jsx'
import {dataProdutos} from '../../service/data.js'

import { ShopCar } from '../../context/ContextValueCar'
import { fetchProdutosAll } from '../../service/apiProdutosAll.js'
import { PostPedido } from '../../service/postPedido.js'


export default function Cardapio() {

  const [data, setData] = useState([]);
  
  const {items, setItems, valuesItems, setValuesItems} = useContext(ShopCar);

  useEffect(() => {
    const getData = async () => {
      try {
        const produtos = await fetchProdutosAll();
        setData(produtos); // Define os produtos no estado
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    };
    getData();
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
