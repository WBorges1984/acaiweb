

export const fetchProdutosAll = async () => {
    try {
      const response = await fetch('http://localhost:3030/produtos');
      if (!response.ok) {
        throw new Error('Falha ao carregar os dados');
      }
      const data = await response.json();
      return data.data; // Retorna os produtos
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
      throw error; // Repassa o erro para ser tratado pelo chamador
    }
  };