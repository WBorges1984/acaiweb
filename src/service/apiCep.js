export const apiCep = async (cep) => {

    const cepValido = '';

    function formatCep(cep) {
        // Remove o ponto e o hífen
        let cleanedCep = cep.replace('.', '').replace('-', '');
    
        // Divide o CEP em duas partes
        let firstPart = cleanedCep.substring(0, 2);
        let secondPart = cleanedCep.substring(2);
    
        // Concatena as partes e retorna o resultado
        return cepValido = firstPart + secondPart;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepValido}/json/`);
      if (!response.ok) {
        throw new Error('Falha ao carregar os dados');
      }
      const data = await response.json();
      return data; // Retorna os produtos
    } catch (error) {
      console.error('Erro ao carregar os produtos:', error);
      throw error; // Repassa o erro para ser tratado pelo chamador
    }
  };