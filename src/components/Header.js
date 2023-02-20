import styles from './Header.module.css';
import background from '../img/back-ground1.jpg';
import personal from '../img/personal.png';
import NavBar from './NavBar';
import HeaderContext from './HeaderContent';

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.background} src={background} alt='computer'></img>
            <NavBar />
            <img className={styles.personal} src={personal} alt='my_photo'></img>
            <HeaderContext />
        </div>
    );
};

export default Header;
