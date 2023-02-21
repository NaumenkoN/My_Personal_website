import styles from './StackItems.module.css';

const StackItems = props => {
    return <div className={styles.cards}>{props.children}</div>;
};

export default StackItems;
