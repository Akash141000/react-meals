import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import stylesForm from "./MealItemForm.module.css"

const MealItemForm = (props) => {
  return (
    <form className={stylesForm.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={styles.btn}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
