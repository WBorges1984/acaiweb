import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Dock } from 'react-dock';
import { ShopCar } from '../../../context/ContextValueCar';
import './modalEdicao.css'
import { fetchAdicionaisAll } from '../../../service/apiAdicionais';

function ModalEdicao(props) {
    const [show, setShow] = useState(false);
    const {edicaoItem, cartItemEdicao, setCartItemEdicao, cartItems, totalCart, AddItemCart, RemoveItemCart} = useContext(ShopCar)
    const [precoUn, setPrecoUn] = useState(cartItemEdicao.preco); 
    const [qtd, setQtd] = useState(0); 
    const [selectedSabor, setSelectedSabor] = useState('');
    const [dataAdicionais, setDataAdicionais] = useState([]);

    // RECHEIO RC
    const [semRecheio, setSemRecheio] = useState(false);
    const [recheioMeio, setRecheioMeio] = useState(0);

    const [amendoimrc, setAmendoimrc] = useState(false);
    const recheioObj = {
          pacocarc: false,
          aveiarc: false,
          granolarc: false,
          RCamendoim: amendoimrc,
          semrecheio: false
        }

    


    const handleSelectSabor = (fruit) => {
      setSelectedSabor(fruit);
    };

    function ConverteValor(vl){
      
        return new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(vl);
      }
    
    useEffect(()=>{
        window.addEventListener('openModalEdicao', function(){
            setShow(true);
            setQtd(1)
        })

        const getData = async () => {
          try {
            const adicionais = await fetchAdicionaisAll();
            setDataAdicionais(adicionais);
          } catch (error) {
            console.error('Erro ao carregar os adicionais:', error);
          }
        };
        getData();

       
    },[]);
   

    function SomarItem(){
      const quantidade = qtd + 1;
      setQtd(quantidade)

      const item = {
        itemId: cartItemEdicao.id, 
            title: cartItemEdicao.nome,
            price: cartItemEdicao.preco,
            imgUrl: cartItemEdicao.foto,
        qtd: quantidade
        }
        edicaoItem(item)

    }

      function SubtrairItem(){
          setQtd(qtd - 1);
      }


      function FinalizarEdicao(id,nome,preco,foto){

        console.log(selectedSabor)
        const item = {
          
            id: id, 
            nome,
            preco,
            foto,
            qtd: qtd
      }
        
        AddItemCart(item)
        setShow(false)
      }
      
      function FecharModal(){
        setShow(false);

      }

      function SelectRecheio(){
        setRecheioMeio(recheioMeio + 1)
      }



  return (
    <>
        <Dock position='bottom'
            isVisible={show}
            fluid={false}
            size={350}
            onVisibleChange={(visible) =>{
                setShow(visible);
            }}>
            <div className='container-complementos' >
              <h1 className=''>Escolha os complementos</h1>
                  <div className="container-edicao">
                    <div className="container-conteudo">
                      <div className="conteudoLeft">
                        <div className="nomeFoto">
                          <h2>{cartItemEdicao.nome}</h2>
                          <img id='imgProd' src={cartItemEdicao.foto} alt="" />
                        </div>
                        <div className="precoQtd">
                          {ConverteValor(cartItemEdicao.preco)}
                          <button onClick={SomarItem} className='btn-sun-down'><span>+</span></button>
                          <span>{qtd}</span>
                          {qtd == 1 ? <button onClick={FecharModal} className='btn-sun-up'><span>x</span></button> : 
                          <button onClick={SubtrairItem} className='btn-sun-up'><span>-</span></button>}
                        </div>
                      </div>
                      <div className="conteudoLeftAjuste"></div>
                      <div className="conteudoRight">
                        <div className='titleAdicional'>
                          <fieldset className='sabor'>
                            <legend>Sabor Açaí</legend>

                            <div className='opSabor'>
                              <img onClick={()=> handleSelectSabor('banana')} src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202404231217_D0OO_i.jpg" alt="" />
                              <input checked={selectedSabor === 'banana'} onChange={()=>handleSelectSabor('banana')} type="radio" id="banana" name="sabor" value="banana" />
                              <label onClick={()=>handleSelectSabor('banana')} htmlFor="banana">Banana</label>
                            </div>

                            <div className='opSabor'>
                              <img  onClick={()=> handleSelectSabor('morango')} src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202404282039_R0TK_i.jpg" alt="" />
                              <input checked={selectedSabor === 'morango'} onChange={()=>handleSelectSabor('morango')} type="radio" id="morango" name="sabor" value="morango" />
                              <label onClick={()=> handleSelectSabor('morango')} htmlFor="morango">Morango</label>
                            </div>

                            <div className='opSabor'>
                              <img onClick={()=> handleSelectSabor('natural')} src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202405100840_3BTT_i.jpg" alt="" />
                              <input checked={selectedSabor === 'natural'} onChange={()=>handleSelectSabor('natural')} type="radio" id="natural" name="sabor" value="natural" />
                              <label onClick={()=> handleSelectSabor('natural')} htmlFor="natural">Natural</label>
                            </div>
                          </fieldset>
                        </div>
                        
                        <div className='titleAdicional'>
                        <fieldset className='sabor'>
                          <legend><p>Com Recheio no Meio</p><em><span>Escolha pelo menos 1 opção.</span><span>{recheioMeio}/3 OBRIGATÓRIO</span></em></legend>
                          
                          <div className="">
          {/* RECHEIO */}
                            <div className='complemento'>
                                <input type="checkbox" name="semrecheio" id="semrecheio" onChange={(e)=>setSemRecheio(!semRecheio)}/>             
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141821_8AMO_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Sem recheio</h4>
                                    <p>Com essa seleção o açaí ira Sem Adicionais para colocar no meio.</p>
                                  </div>
                            </div>                           
                            <div className='complemento'>
                                <input type="checkbox" name="amendoimrc" id="amendoimrc" onClick={(e)=>setAmendoimrc(!amendoimrc)} disabled={semRecheio} checked={recheioObj.amendoimrc}/>
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141916_BTBE_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Amendoim RC</h4>
                                    <p>Irá uma porção em separado deste adicional. Ps. Foto meramente explicativa</p>
                                  </div>
                            </div>                           
                            <div className='complemento'>
                                <input type="checkbox" name="granolarc" id="granolarc" disabled={semRecheio}/>
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141917_15GI_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Granola RC</h4>
                                    <p>Irá uma porção em separado deste adicional. Ps. Foto meramente explicativa</p>
                                  </div>
                            </div>                           
                            <div className='complemento'>
                                <input type="checkbox" name="aveiarc" id="aveiarc" disabled={semRecheio}/>
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202404201515_BDY8_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Aveia RC</h4>
                                    <p>Irá uma porção em separado deste adicional. Ps. Foto meramente explicativa</p>
                                  </div>
                            </div> 
                            <div className='complemento'>
                                <input type="checkbox" name="pacocarc" id="pacocarc" disabled={semRecheio}/>
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202405172217_C503_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Paçoca RC</h4>
                                    <p>Irá uma porção em separado deste adicional. Ps. Foto meramente explicativa</p>
                                  </div>
                          </div> 
          {/* RECHEIO */}
                            
                            <legend><p>Com cobertura</p><em><span>Escolha pelo menos 1 opção.</span><span>0/3 OBRIGATÓRIO</span></em></legend>
                            {/* COM RECHEIO */}
                            <div className='complemento'>
                                <input type="checkbox" name="" id="" />
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141821_8AMO_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Sem cobertura</h4>
                                    <p>Essa opção ira o açaí sem cobertura como na foto. Ps. Foto meramente explicativa.</p>
                                  </div>
                            </div> 
                            <div className='complemento'>
                                <input type="checkbox" name="" id="" />
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141916_BTBE_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Amendoim Cb</h4>
                                    <p>Irá coberto de Amendoim</p>
                                  </div>
                            </div> 
                            <div className='complemento'>
                                <input type="checkbox" name="" id="" />
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141917_15GI_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Granola Cb</h4>
                                    <p>Irá coberto de Granola</p>
                                  </div>
                            </div> 
                            <div className='complemento'>
                                <input type="checkbox" name="" id="" />
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202404201515_BDY8_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Aveia Cb</h4>
                                    <p>Irá coberto de Aveia</p>
                                  </div>
                            </div> 


                            
                          <legend><p>Calda na Cobertura</p><em><span>Escolha pelo menos 1 opção.</span><span>0/1 OBRIGATÓRIO</span></em></legend>
                          <div className="">
                            {/* CALDA COBERTURA */}
                            <div className='complemento'>
                                <input type="checkbox" name="semrecheio" id="semrecheio" />             
                                <img src="https://static.ifood-static.com.br/image/upload/t_medium/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141821_8AMO_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Sem calda</h4>
                                    <p>Com essa seleção o açaí ira Sem calda na cobertura.</p>
                                  </div>
                            </div>   
                            <div className='complemento'>
                                <input type="checkbox" name="semrecheio" id="semrecheio" />             
                                <img src="https://static-images.ifood.com.br/image/upload/t_thumbnail/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403082241_P2K2_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Calda de Chocolate</h4>
                                    <p></p>
                                  </div>
                            </div>   
                            <div className='complemento'>
                                <input type="checkbox" name="semrecheio" id="semrecheio" />             
                                <img src="https://static-images.ifood.com.br/image/upload/t_thumbnail/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403082243_R2Q2_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>Calda de morango</h4>
                                    <p></p>
                                  </div>
                            </div>   
                            <div className='complemento'>
                                <input type="checkbox" name="semrecheio" id="semrecheio" />             
                                <img src="https://static-images.ifood.com.br/image/upload/t_thumbnail/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403082244_2FQA_i.jpg" alt="" />
                                  <div className='texto'>
                                    <h4>
                                    Cobertura de leite condensado</h4>
                                    <p></p>
                                  </div>
                            </div>   
                          </div>
                          <legend><p>Vai um Adicional?</p><em><span>Escolha até 10 opções.</span><span>0/10</span></em></legend>
                          <div className="">
                            {/*DESCARTAVEL */}
                            {dataAdicionais.map((item)=>{
                            return(
                              <div key={item.id_adicionais} className='complemento'>
                                  <input type="checkbox" name="semrecheio" id="semrecheio" />  
                                  <img src={item.url_img} alt="" />
                                    <div className='texto'>
                                  <b>{ConverteValor(item.preco)}</b>           
                                      <h4>{item.descricao}</h4>
                                      <p>{item.obs}</p>
                                    </div>
                              </div>)
                            }) }
                            </div>

                            <legend><p>Precisa de descartáveis?</p></legend>
                            <div className="">

                            <div className='complemento'>
                                  <input type="checkbox" name="semrecheio" id="semrecheio" />  
                                  <img src="https://static-images.ifood.com.br/image/upload/t_thumbnail/pratos/d8ed81ea-71da-43ea-baa5-f05001380037/202403141949_82JO_i.jpg" alt="" />
                                    <div className='texto'>
                                  <b>R$ 0,50</b>           
                                      <h4>Com descartáveis</h4>
                                      <p>Preciso de colher e guardanapo.</p>
                                    </div>
                              </div>
                            </div>     
                          </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
              <div className="totSacola">Total: {ConverteValor(cartItemEdicao.preco * qtd)}</div>
              <div className="btnFooter">
                <button onClick={(e)=>FinalizarEdicao(cartItemEdicao.id,cartItemEdicao.nome,cartItemEdicao.preco,cartItemEdicao.foto)} className='btn btn-acai '>FINALIZAR</button>
              </div>


            </Dock>
    
    </>
  )
}

export default ModalEdicao