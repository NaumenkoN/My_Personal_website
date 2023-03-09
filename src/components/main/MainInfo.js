import styles from './MainInfo.module.css';

const MainInfo = ({ closeNavBar }) => {
    return (
        <>
            <h1 className={styles.greetings} onClick={closeNavBar}>
                <div>
                    <span className={styles.im}>I`M</span>
                    <span className={styles.opacity}> NIKOLAI</span>
                </div>

                <div className={styles.formargin}>
                    <span className={styles.opacity2}>WEB </span>
                    <span className={styles.developer}>DEVELOPER</span>
                </div>
            </h1>
            <p className={styles.explanation}>Helping you and your busines to grow up</p>
        </>
    );
};

export default MainInfo;
