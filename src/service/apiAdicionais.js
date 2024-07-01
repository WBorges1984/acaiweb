// export const fetchAdicionaisAll = async () => {
//     try {
//       const response = await fetch('http://localhost:3030/adicionais');
//       if (!response.ok) {
//         throw new Error('Falha ao carregar os dados');
//       }
//       const data = await response.json();
//       return data.data; // Retorna os produtos
//     } catch (error) {
//       console.error('Erro ao carregar os produtos:', error);
//       throw error; // Repassa o erro para ser tratado pelo chamador
//     }
//   };

export const fetchAdicionaisAll = async () => {
    const allData = [];
    let currentPage = 1;
    const limit = 10;
    let totalPages = 1;
  
    try {
      while (currentPage <= totalPages) {
        const response = await fetch(`http://localhost:3030/adicionais?page=${currentPage}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        const data = await response.json();
        allData.push(...data.data);
  
        // Atualiza o total de páginas com base na resposta
        totalPages = data.paginacao.pages;
        currentPage += 1;
      }
  
      return allData; // Retorna todos os registros
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
      throw error; // Repassa o erro para ser tratado pelo chamador
    }
  };
  