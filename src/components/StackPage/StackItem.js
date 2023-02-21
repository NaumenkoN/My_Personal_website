import styles from './StackItem.module.css';

const StackItem = ({ src, alt, icon }) => {
    return (
        <div className={styles.card}>
            <img src={src} alt={alt}></img>
            <h3>status</h3>
            <img src={icon}></img>
        </div>
    );
};

export default StackItem;
