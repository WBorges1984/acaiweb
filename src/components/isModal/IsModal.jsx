import './ismodal.css'

export function IsModal(props){


    return(
        <>
            <div className='ModalProd' >
              <div className="modalClose" onClick={props.SetModalfalse}></div>
              <div className="ModalProdCard">
                <div className="modalContainer">
                  <div className="imgProd">
                    <img src={props.urlImg} alt="" />
                  </div>
                  <div className="descriptionModal">
                    <div className="titleModal">{props.titulo}</div>
                    <div className="priceOldModal">R$ {props.priceOld}</div>
                    <div className="qtdPrice">
                      <button className='btn-sun-up'><span>-</span></button>
                      <span>{props.qtd}</span>
                      <button className='btn-sun-down'><span>+</span></button>
                      <div className="priceModal">R$ {props.priceFull}</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
        
        </>
    )
} 