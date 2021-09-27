import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const addItem = "ADD_ITEM";
const removeItem = "REMOVE_ITEM";

const cartReducer = (state, action) => {
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.quantity;
  if (action.type === addItem) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;

    if (existingCartItemIndex >= 0) {
      const existingCartItem = state.items[existingCartItemIndex];

      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
        price: existingCartItem.price + action.item.price,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === removeItem) {
    //
  }

  return {
    items: state.items,
    totalAmount: state.totalAmount,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: addItem,
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
