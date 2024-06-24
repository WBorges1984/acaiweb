import React from 'react'
import './checkout.css'
import Header from '../../components/header/Header'

function Checkout() {
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
                        <input type="text"  placeholder='Somente números'/>
                    </div>
                    <div>
                        <label htmlFor="rua">Rua:</label>
                        <input type="text"  id='rua'/>
                    </div>
                    <div>
                        <label htmlFor="numero">Nr:</label>
                        <input type="text"  id='nr'/>
                    </div>
                    <div>
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text"  />
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="cidade">Referencia:</label>
                        <input type="text" id='referencia' />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button className='btn btn-acai'>Pagamento</button>
        </div>

    </section>
    
    

   
   </div>
  )
}

export default Checkout