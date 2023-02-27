import styles from './Main.module.css';
import personal from '../../img//personal3.png';

import NavBar from './NavBar';
import HeaderContext from './HeaderContent';
import Background from './Background';

const Main = ({ showStackPage, showProjectsPage, showContactsPage, underline, showMainPage, hideContactsPage }) => {
    return (
        <div>
            <Background underline={underline} />

            <NavBar
                hideContactsPage={hideContactsPage}
                showContactsPage={showContactsPage}
                showStackPage={showStackPage}
                showProjectsPage={showProjectsPage}
                underline={underline}
                showMainPage={showMainPage}
            />

            <img className={styles.personal} src={personal} alt='my_photo'></img>

            <HeaderContext />
        </div>
    );
};

export default Main;
