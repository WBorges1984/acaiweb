const { createContext, useState } = require("react");

const ShopCar = createContext({});



function ShopCarProvider(props){
    const [items, setItems] = useState(0);
    const [valuesItems, setValuesItems] = useState(0);

    return <ShopCar.Provider value={{items, setItems, valuesItems, setValuesItems}}>
        {props.children}
    </ShopCar.Provider>
}

export {ShopCar, ShopCarProvider}