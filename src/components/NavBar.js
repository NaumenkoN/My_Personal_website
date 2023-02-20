import styles from './NavBar.module.css';
const NavBar = () => {
    const logoIcon = '</>';
    const logo = `WEB ${logoIcon} DEVELOPMENT`;
    return (
        <>
            <div className={styles['nav-bar']}>
                <h1>
                    WEB <span>{logoIcon}</span> DEVELOPMENT
                </h1>
                <div className={styles['header-links']}>
                    <a href='#stack'>Stack of Technologies</a>
                    <a href='#works'>Works</a>
                    <a href='#contacts'>Contacts</a>
                </div>
            </div>
            ;
        </>
    );
};

export default NavBar;
