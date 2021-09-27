import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: amount,
    });
  };

  return (
    <li style={{"padding":"0.5rem"}}>
      <div className={styles.item}>
        <div>
          <div className={styles.title}>{props.name}</div>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
        </div>
      </div>
      <hr/>
    </li>
  );
};

export default MealItem;
