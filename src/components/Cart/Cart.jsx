import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import Card from "../UI/Card";

const Cart = (props) => {
  const cartItems = (
    <ul style={{"listStyle":"none","fontSize":"1.5rem","padding":"0.25rem"}}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 },].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
        <Card>
      {cartItems}
      <div>
        <span className={styles.total}>Total Amount</span>
        <span className={styles.price}>35.62</span>
      </div>
      <div className={styles.cartButtons}>
        <button onClick={props.onHideCart} >Close</button>
        <button>Order</button>
      </div>
      </Card>
    </Modal>
  );
};

export default Cart;
