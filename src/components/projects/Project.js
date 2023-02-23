import styles from './Project.module.css';

const Project = ({ src, href, alt, header, comment, href2 }) => {
    return (
        <div className={styles.content}>
            <img src={src} alt={alt}></img>

            <div className={styles.description}>
                <h2>{header}</h2>
                <a>{href}</a>
                <a>{href2}</a>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Project;
