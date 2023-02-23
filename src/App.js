import React from 'react';
import Main from './components/main/Main';
import { useState } from 'react';
import Stack from './components/StackPage/Stack';
import ProjectPage from './components/projects/ProjectPage';
import ContactsPage from './components/contacts/ContactsPage';

function App() {
    const [mainPageState, setMainPageState] = useState(true);
    const [stackPageState, setStackPageState] = useState(false);
    const [projectsPageState, setProjectsPageState] = useState(false);
    const [contactsPageState, setContactsPageState] = useState(false);
    const [underline, setUnderline] = useState(1);

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
        setMainPageState(false);
        setStackPageState(false);
        setProjectsPageState(false);
        setContactsPageState(true);
        setUnderline(4);
    };

    return (
        <React.Fragment>
            {mainPageState && (
                <Main showContactsPage={showContactsPage} showStackPage={showStackPage} showProjectsPage={showProjectsPage} underline={underline} />
            )}

            {stackPageState && (
                <Stack showContactsPage={showContactsPage} showMainPage={showMainPage} showProjectsPage={showProjectsPage} underline={underline} />
            )}

            {projectsPageState && (
                <ProjectPage showContactsPage={showContactsPage} showStackPage={showStackPage} showMainPage={showMainPage} underline={underline} />
            )}

            {contactsPageState && (
                <ContactsPage showStackPage={showStackPage} showProjectsPage={showProjectsPage} showMainPage={showMainPage} underline={underline} />
            )}
        </React.Fragment>
    );
}

export default App;
