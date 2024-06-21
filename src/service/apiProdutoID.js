export const fetchProdutosID = async (id) => {
    const prod = id;

    const urlBase = `//localhost:3030/produtos/${prod}`;
    try {
      const response = await fetch();
      if (!response.ok) {
        throw new Error('Falha ao carregar os dados');
      }
      const data = await response.json();
      return data.data; // Retorna o produto
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
      throw error; // Repassa o erro para ser tratado pelo chamador
    }
  };