import styles from './NavBar.module.css';
import { useState, useContext } from 'react';
import ModalState from '../../stateModal/ModalState';

const NavBar = ({ showStackPage, showMainPage, showProjectsPage, showContactsPage, underline, openNavBar }) => {
    const logoIcon = '< / >';

    const a = useContext(ModalState);

    return (
        <>
            <div className={`${styles['nav-bar']} `}>
                <h1 onClick={showMainPage}>
                    WEB <span>{logoIcon}</span> DEVELOPMENT
                </h1>
                <div className={styles.menu} onClick={openNavBar}>
                    <div className={styles['menu-button']}></div>
                    <div className={styles['menu-button']}></div>
                    <div className={styles['menu-button']}></div>
                </div>
                {
                    <div className={`${a.isModal ? '' : styles.hidden}  ${styles['side-bar']} $`}>
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
                }
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
