import styles from './NavBar.module.css';
const NavBar = () => {
    const logo = 'WEB</>DEVELOPMENT';
    return (
        <>
            <div className={styles['nav-bar']}>
                <h1>{logo}</h1>
            </div>
            ;
        </>
    );
};

export default NavBar;
