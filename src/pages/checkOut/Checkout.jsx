import React, { useState } from 'react'
import './checkout.css'
import Header from '../../components/header/Header'
import { apiCep } from '../../service/apiCep';

function Checkout() {
    const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
        logradouro:'',
        complemento: '',
        bairro: '',
        localidade: '',
  });
  const [error, setError] = useState('');
  const [nomeRua, setNomeRua] = useState('');

    const fetchAddress = async (cep) => {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
            console.log(address)
          }
          const data = await response.json();
          if (data.erro) {
            throw new Error('CEP not found');
          }
          setAddress({'logradouro':data.logradouro,
                      'complemento': data.complemento,
                      'bairro': data.bairro,
                      'localidade': data.localidade,
          })
          setError('');
        } catch (error) {
          setError(error.message);
          setAddress(null);
        }
      };

      const handleBlur = (event) => {
        const cepValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (cepValue.length === 8) {
          fetchAddress(cepValue);
        } else {
          setError('CEP inválido');
          setAddress(null);
        }
      };
    

  
  return (
   <div className='pagCheckout'>
    <header>
        <Header />
    </header>
    <section className='container-checkout'>
        <h1>Checkout</h1>
        <div className="body-checkout">
            <div className="item-pedido">
                <h2>Produtos</h2>
                <div className="listaItem">
                    <div className="item">
                        <img 
                        src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202404161059_G2ES_i.jpg" alt="" />
                    
                        <h4>Açaí no copo de 500ml</h4>
                        <span>Total: R$25,50</span>
                    </div>
                    <div className="complementos">
                        <div>
                            <h4>Sabor:</h4>
                            <p>Banana</p>
                        </div>
                        <div>
                            <h4>Recheio:</h4>
                            <p>1x Amendoim</p>
                            <p>1x Paçoca</p>
                            <p>1x Paçoca</p>
                        </div>
                        <div>
                            <h4>Cobertura:</h4>
                            <p>1x Amendoim</p>
                            <p>2x Paçoca</p>
                            <p>1x Aveia</p>
                        </div>
                        <div>
                            <h4>Calda:</h4>
                            <p>Morango</p>
                        </div>
                        <div>
                            <h4>Descartável:</h4>
                            <p>Sem descartáve</p>
                        </div>
                        <div>
                            <h4>Adicional:</h4>
                            <div className='adicional'>
                                <p>1x Aveia</p>
                                <p>1x Aveia</p>
                                <p>1x Aveia</p>
                                <p>1x Aveia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dados-client">
                <h2>Dados do consumidor</h2>
                <div className='forms-checkout'>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text"  placeholder='Somente números'/>
                    </div>
                    <div>
                        <label htmlFor="celular">Celular:</label>
                        <input type="text"  placeholder='Somente números'/>
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" onChange={(e)=>setCep(e.target.value)} onBlur={handleBlur} placeholder='Somente números'/>
                    </div>
                    <div>
                        <label htmlFor="rua">Rua:</label>
                        <input type="text"  id='rua' value={address != null ? address.logradouro : ''}/>
                    </div>
                    <div>
                        <label htmlFor="numero">Nr:</label>
                        <input type="text"  id='nr'/>
                    </div>
                    <div>
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text"  value={(e)=>setAddress()} />
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" value={address != null ? address.bairro: ''}/>
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" value={address != null ? address.localidade : ''}/>
                    </div>
                    <div id='referencia'>
                        <label htmlFor="cidade">Referencia:</label>
                        <input type="text" id='referencia' />
                    </div>
                </div>
            </div>
        </div>
        <div id='idCheckoutBtn'>
            <button className='btn btn-acai' id='btnCheckout' >Pagamento</button>
        </div>

    </section>
    
    

   
   </div>
  )
}

export default Checkout