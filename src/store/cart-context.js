import { createContext, useState } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    deleteItem: () => {},
});

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const addItemHandler = (item) => {
        setCartItems((prevItems) => {
            for (let prevItem of prevItems) {
                if (prevItem.id === item.id) {
                    prevItem.quantity += item.quantity;
                    const newCartList = [...prevItems];
                    return newCartList;
                }
            }
            const newCartList = [...prevItems, item];
            return newCartList;
        });
        setTotalAmount((prevAmount) => {
            return prevAmount + item.price;
        });
    };
    const removeItemHandler = (id) => {};
    const cartContext = {
        items: cartItems,
        totalAmount: totalAmount,
        addItem: addItemHandler,
        deleteItem: removeItemHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
