import HeaderCartButton from "./HeaderCartButton"
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = props =>{

    return (
        <>
        <nav className={styles.header}>
            <h1>React Meals</h1>
           <HeaderCartButton></HeaderCartButton>
        </nav>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Meals" />

        </div>
        </>
    );
    
};
export default Header;