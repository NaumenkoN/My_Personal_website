import styles from './Main.module.css';
import personal from '../../img//personal.png';
import NavBar from './NavBar';
import HeaderContext from './HeaderContent';
import Background from './Background';

const Main = ({ showStackPage, showProjectsPage, underline }) => {
    return (
        <div className={styles.header}>
            <Background />
            <NavBar showStackPage={showStackPage} showProjectsPage={showProjectsPage} underline={underline} />
            <img className={styles.personal} src={personal} alt='my_photo'></img>
            <HeaderContext />
        </div>
    );
};

export default Main;
