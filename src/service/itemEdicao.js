import React, { useState } from 'react';

const ItemForm = () => {
  const [itemEdicao, setItemEdicao] = useState({
    "id": '',
    "title": '',
    "price": '',
    "imgUrl": '',
    "qtd": ''
  });

  // Função para atualizar o título do item
  const handleTitleChange = (event) => {
    setItemEdicao({
      ...itemEdicao,
      title: event.target.value
    });
  };

  // Função para atualizar o preço do item
  const handlePriceChange = (event) => {
    setItemEdicao({
      ...itemEdicao,
      price: event.target.value
    });
  };

};

export default ItemForm;
