import styles from './Contacts.module.css';

const Contacts = ({ modal, hideContactsPage, instaIcon, gitIcon, gmailIcon, animateClose }) => {
    return (
        <div className={modal ? '' : styles.hidden}>
            <div onClick={hideContactsPage} className={styles.modal}></div>
            <div className={`${styles.backdrop} ${animateClose && styles.animateclose}`}>
                <p className={styles['contact-text']}>
                    I've been learning web development for over 6 months now and I've made a lot of progress in that time. At the moment I can make
                    beautiful, animated and respovsive one-page and multi-page sites without a server part.
                    <br />
                    <br /> Working with databases and creating a server is my goal in the near future, as well as deepening into already mastered
                    technologies. To contact me about the development of the website or if you have job offers for me, please follow the links below.
                </p>
                <button onClick={hideContactsPage} className={`${styles['close-modal__button']} `}>
                    X
                </button>
                <div className={styles.contacts}>
                    <a href='https://www.instagram.com/ka_lyamba'>
                        <img className={styles['contacts-icons']} src={instaIcon} alt='#'></img>
                    </a>
                    <a href='https://github.com/NaumenkoN'>
                        <img className={styles['contacts-icons']} src={gitIcon} alt='#'></img>
                    </a>
                    <a href='mailto:kolia.aleko@gmail.com'>
                        <img className={styles['contacts-icons']} src={gmailIcon} alt='#'></img>
                    </a>
                </div>

                {/* <a href={instaIcon} download title='download'>
            <button className={styles.download}>download</button>
        </a> */}
            </div>
        </div>
    );
};

export default Contacts;
