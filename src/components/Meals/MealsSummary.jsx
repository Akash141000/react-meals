import styles from "./MealsSummary.module.css"

const MealsSummary = () => {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>Delicious Food,Delivered To You</h2>
            <p className={styles.para}>
                Choose your favourtie meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p className={styles.para}>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chiefs!
            </p>
        </section>
    );
};

export default MealsSummary;