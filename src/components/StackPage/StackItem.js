import styles from './StackItem.module.css';

const StackItem = ({ src, alt, icon, comment, closeNavBar }) => {
    return (
        <div onClick={closeNavBar} className={`${styles.card} ${styles.animation}`}>
            <img className={styles.icon1} src={src} alt={alt}></img>
            <div className={styles['content']}>
                <div className={styles['status-block']}>
                    <h3 className={styles.status}>Level:</h3>
                    <img className={styles.icon2} src={icon}></img>
                </div>
                <div className={styles['comment-block']}>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default StackItem;
