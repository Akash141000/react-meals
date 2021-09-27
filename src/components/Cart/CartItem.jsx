import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.price;
  return (
    <li style={{"padding":"0.5rem"}}>
      <div className={styles.item} >
        <div className={styles.item} style={{ width: "60%" }}>
          <div className={styles.title}>
            <h4>{props.name}</h4>
            <span
              style={{
                color: "saddlebrown",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              ${price.toFixed(2)}
            </span>
          </div>
          <div className={styles.quantity} >
            <span>x{props.quantity}</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.inputs}>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
      <hr/>
    </li>
  );
};

export default CartItem;
