import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={styles.item}>
      <div>
        <div className={styles.title}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <div>
          <MealItemForm></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
