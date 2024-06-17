import { itemEdicao } from "../service/itemEdicao";


const { createContext, useState } = require("react");

const ShopCar = createContext({});



function ShopCarProvider(props){
    const [items, setItems] = useState(0);
    const [valuesItems, setValuesItems] = useState(0);

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    const [cartItemEdicao, setCartItemEdicao] = useState([]);

    

    let cartItemsNovo = [];
    let findItem = false;
    function CalcularTotal(items){
        let tot = 0;
        for(var item of items)
            tot = tot + (item.preco * item.qtd)

        setTotalCart(tot)
    }

    function AddItemCart(item){
        
        // cartItemsNovo.push(item)
        // setCartItems(cartItemsNovo);
        // console.log(cartItemsNovo)
        
        let cartItemsNovo = [];
        let findItem = false;

        
        for (var prod of cartItems){
            if(prod.id == item.id){
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItemsNovo.push(item);
            }else{
                cartItemsNovo.push(prod)
            }
        }

        if((findItem == false) || (cartItems.length == 0)){
            cartItemsNovo.push(item);
        }
        setCartItems(cartItemsNovo);
        CalcularTotal(cartItemsNovo)
    }

    function RemoveItemCart(id){
        
        let cartItemsNovo = [];

        for (var prod of cartItems){
            if(prod.id == id){
                    prod.qtd = prod.qtd - 1;
            }

            cartItemsNovo.push(prod)
        }

        cartItemsNovo = cartItemsNovo.filter((item)=>{
            return item.qtd > 0
        });
      
        setCartItems(cartItemsNovo);
        CalcularTotal(cartItemsNovo)
    }
 
    function edicaoItem(item){
        
        const  itemNovo = {
            id: item.itemId, 
            nome:item.title,
            preco:item.price,
            foto:item.imgUrl,
            qtd: item.qtd
        };
        
        const newItem = cartItemEdicao.map((item) => {
            if (item.id === itemNovo.id) {
              return { ...item, name: 'Dona Florinda' };
            }
            return item;
          });

        cartItemEdicao.push(newItem)

    
    }

    return <ShopCar.Provider value={{cartItemEdicao, edicaoItem,items, cartItems, setCartItems, AddItemCart, RemoveItemCart,totalCart, setTotalCart}}>
        
    {props.children}
    </ShopCar.Provider>
}

export {ShopCar, ShopCarProvider}