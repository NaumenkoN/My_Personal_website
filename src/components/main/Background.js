import styles from './Background.module.css';

const Background = ({ underline }) => {
    return <div className={`${underline === 2 ? styles.gradient : ''} ${underline === 3 ? styles.gradient2 : ''} ${styles.img}`}></div>;
};

export default Background;
