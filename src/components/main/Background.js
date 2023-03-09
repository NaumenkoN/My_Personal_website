import styles from './Background.module.css';
import personal2 from '../../img/personal3.png';

const Background = ({ underline, closeNavBar }) => {
    return (
        <>
            <div
                className={`${underline === 2 ? styles.gradient : ''} ${underline === 3 ? styles.gradient2 : ''} ${styles.img}`}
                onClick={closeNavBar}
            >
                {underline === 1 && <img onClick={closeNavBar} className={styles.personal2} src={personal2} alt='my_photo'></img>}
            </div>
        </>
    );
};

export default Background;
