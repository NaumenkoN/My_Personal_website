import React from 'react';
import Main from './components/main/Main';
import { useState } from 'react';
import Stack from './components/StackPage/Stack';
import ProjectsPage from './components/projects/ProjectsPage';
import Contacts from './components/contacts/Contacts';
import instaIcon from '../src/img/icons/instagram.png';
import gitIcon from '../src/img/icons/github.png';
import gmailIcon from '../src/img/icons/gmail.png';

function App() {
    const [mainPageState, setMainPageState] = useState(true);
    const [stackPageState, setStackPageState] = useState(false);
    const [projectsPageState, setProjectsPageState] = useState(false);
    const [contactsPageState, setContactsPageState] = useState(false);
    const [underline, setUnderline] = useState(1);
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const showMainPage = () => {
        setMainPageState(true);
        setStackPageState(false);
        setProjectsPageState(false);
        setContactsPageState(false);
        setUnderline(1);
    };

    const showStackPage = () => {
        setStackPageState(true);
        setMainPageState(false);
        setProjectsPageState(false);
        setContactsPageState(false);
        setUnderline(2);
    };

    const showProjectsPage = () => {
        setMainPageState(false);
        setStackPageState(false);
        setProjectsPageState(true);
        setContactsPageState(false);
        setUnderline(3);
    };

    const showContactsPage = () => {
        setUnderline(4);
        setModal(true);
        setBackdrop(false);
    };

    const hideContactsPage = () => {
        setModal(false);
        setBackdrop(false);
        mainPageState && setUnderline(1);
        stackPageState && setUnderline(2);
        projectsPageState && setUnderline(3);
    };

    return (
        <React.Fragment>
            {mainPageState && (
                <Main
                    hideContactsPage={hideContactsPage}
                    showContactsPage={showContactsPage}
                    showStackPage={showStackPage}
                    showProjectsPage={showProjectsPage}
                    underline={underline}
                />
            )}

            {stackPageState && (
                <Stack showContactsPage={showContactsPage} showMainPage={showMainPage} showProjectsPage={showProjectsPage} underline={underline} />
            )}

            {projectsPageState && (
                <ProjectsPage showContactsPage={showContactsPage} showStackPage={showStackPage} showMainPage={showMainPage} underline={underline} />
            )}
            {<Contacts modal={modal} hideContactsPage={hideContactsPage} instaIcon={instaIcon} gitIcon={gitIcon} gmailIcon={gmailIcon} />}
        </React.Fragment>
    );
}

export default App;
