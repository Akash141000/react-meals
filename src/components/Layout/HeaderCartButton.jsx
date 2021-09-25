
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <>
      <button className={styles.button}>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    </>
  );
};


export default HeaderCartButton;