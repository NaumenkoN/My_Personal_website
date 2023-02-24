import styles from './NavBar.module.css';
import { useState } from 'react';
const NavBar = ({ showStackPage, showMainPage, showProjectsPage, showContactsPage, underline }) => {
    const logoIcon = '</>';

    const [sideBar, setSideBar] = useState(false);

    const openSideBar = () => {
        if (sideBar) {
            return setSideBar(false);
        }
        setSideBar(true);
    };

    return (
        <>
            <div className={styles['nav-bar']}>
                <h1 onClick={showMainPage}>
                    WEB <span>{logoIcon}</span> DEVELOPMENT
                </h1>
                <div className={styles.menu} onClick={openSideBar}>
                    <div className={styles['menu-button']}></div>
                    <div className={styles['menu-button']}></div>
                    <div className={styles['menu-button']}></div>
                </div>
                <div className={`${sideBar ? '' : styles.hidden}  ${styles['side-bar']}`}>
                    <a id={`${underline === 1 ? styles.underlines : ' '}`} href='#main' onClick={showMainPage}>
                        Main
                    </a>
                    <a id={`${underline === 2 ? styles.underlines : ' '}`} href='/#stack' onClick={showStackPage}>
                        Technology Stack
                    </a>
                    <a id={`${underline === 3 ? styles.underlines : ' '}`} href='#projects' onClick={showProjectsPage}>
                        Projects
                    </a>
                    <a id={`${underline === 4 ? styles.underlines : ' '}`} href='#contacts' onClick={showContactsPage}>
                        Contacts
                    </a>
                </div>
                <div className={styles['header-links']}>
                    <a id={`${underline === 1 ? styles.underlines : ' '}`} href='#main' onClick={showMainPage}>
                        Main
                    </a>
                    <a id={`${underline === 2 ? styles.underlines : ' '}`} href='/#stack' onClick={showStackPage}>
                        Technology Stack
                    </a>
                    <a id={`${underline === 3 ? styles.underlines : ' '}`} href='#projects' onClick={showProjectsPage}>
                        Projects
                    </a>
                    <a id={`${underline === 4 ? styles.underlines : ' '}`} href='#contacts' onClick={showContactsPage}>
                        Contacts
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
