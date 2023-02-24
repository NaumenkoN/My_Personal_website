import styles from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <>
            <h1 className={styles.greetings}>
                <span className={styles.im}>I`M</span>
                <span className={styles.opacity}> NIKOLAI</span>
                <br />
                <span className={styles.opacity}>WEB </span>
                <span className={styles.developer}>DEVELOPER</span>
            </h1>
            <p className={styles.explanation}>Helping you and your busines to grow up</p>
        </>
    );
};

export default MainInfo;
