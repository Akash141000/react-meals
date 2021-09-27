import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (itemId) => {
    cartCtx.removeItem(itemId);
  };

  const cartItemAddHandler = (item) => {
    const itemToAdd = {
      ...item,
      quantity: 1,
    };
    cartCtx.addItem(itemToAdd);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul style={{ listStyle: "none", fontSize: "1.5rem", padding: "0.25rem" }}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      <Card>
        <div style={{ maxHeight: "25rem", overflow: "scroll" }}>
          {cartItems}
        </div>
        <div>
          <span className={styles.total}>Total Amount</span>
          <span className={styles.price}>{totalAmount}</span>
        </div>
        <div className={styles.cartButtons}>
          <button onClick={props.onHideCart}>Close</button>
          {hasItems && <button>Order</button>}
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
