import styles from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <>
            <h1 className={styles.greetings}>
                <span>I`M</span> NIKOLAI
                <br />
                WEB <span>DEVELOPER</span>
            </h1>
            <p className={styles.explanation}>Helping you and your busines to grow up</p>
        </>
    );
};

export default MainInfo;
