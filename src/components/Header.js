import styles from './Header.module.css';
import background from '../img/back-ground1.jpg';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={background} alt='computer'></img>;
            <NavBar />;
        </div>
    );
};

export default Header;
