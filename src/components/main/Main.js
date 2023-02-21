import styles from './Main.module.css';
import personal from '../../img//personal.png';
import NavBar from './NavBar';
import HeaderContext from './HeaderContent';
import Background from './Background';

const Main = ({ showStackPage, showMainPage }) => {
    return (
        <div className={styles.header}>
            <Background />
            <NavBar showStackPage={showStackPage} showMainPage={showMainPage} />
            <img className={styles.personal} src={personal} alt='my_photo'></img>
            <HeaderContext />
        </div>
    );
};

export default Main;
