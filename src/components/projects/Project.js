import styles from './Project.module.css';

const Project = ({ src, href, alt, header, comment, href2 }) => {
    return (
        <div className={styles.content}>
            <img className={styles['project-img']} src={src} alt={alt}></img>

            <div className={styles.description}>
                <h2 className={styles.desch2}>{header}</h2>
                <a className={styles.desca} href={href} target='blank'>
                    {href}
                </a>
                <a className={styles.desca} href={href2} target='blank'>
                    {href2}
                </a>
                <p className={styles.descp}>{comment}</p>
            </div>
        </div>
    );
};

export default Project;
