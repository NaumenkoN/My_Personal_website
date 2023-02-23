import styles from './ContactsPage.module.css';
import NavBar from '../main/NavBar';
import Background from '../main/Background';
const ContactsPage = ({ showStackPage, showProjectsPage, showMainPage, underline }) => {
    return (
        <div>
            <Background />
            <NavBar showStackPage={showStackPage} showProjectsPage={showProjectsPage} showMainPage={showMainPage} underline={underline} />
        </div>
    );
};

export default ContactsPage;
