import styles from './NavBar.module.css';
const NavBar = ({ showStackPage, showMainPage, showProjectsPage, underline }) => {
    const logoIcon = '</>';

    return (
        <>
            <div className={styles['nav-bar']}>
                <h1 onClick={showMainPage}>
                    WEB <span>{logoIcon}</span> DEVELOPMENT
                </h1>
                <div className={styles['header-links']}>
                    <a id={`${underline === 1 ? styles.underlines : ' '}`} href='#main' onClick={showMainPage}>
                        Main
                    </a>
                    <a id={`${underline === 2 ? styles.underlines : ' '}`} href='/#stack' onClick={showStackPage}>
                        Technology Stack
                    </a>
                    <a id={`${underline === 3 ? styles.underlines : ' '}`} href='#works' onClick={showProjectsPage}>
                        Projects
                    </a>
                    <a id={`${underline === 3 ? styles.underlines : ' '}`} href='#contacts'>
                        Contacts
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
