import React from 'react';
import Main from './components/main/Main';
import { useState } from 'react';
import Stack from './components/StackPage/Stack';
import ProjectsPage from './components/projects/ProjectsPage';
import Contacts from './components/contacts/Contacts';
import instaIcon from '../src/img/icons/instagram.png';
import gitIcon from '../src/img/icons/github.png';
import gmailIcon from '../src/img/icons/gmail.png';
import ModalState from './stateModal/ModalState';

function App() {
    const [mainPageState, setMainPageState] = useState(true);
    const [stackPageState, setStackPageState] = useState(false);
    const [projectsPageState, setProjectsPageState] = useState(false);
    const [contactsPageState, setContactsPageState] = useState(false);
    const [underline, setUnderline] = useState(1);
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [animateClose, setAnimateClose] = useState(false);
    const [toogle, setToogle] = useState(false);

    const openNavBar = () => {
        if (toogle) {
            return setToogle(false);
        }
        setToogle(true);
    };
    const closeNavBar = () => {
        setToogle(false);
    };

    const showMainPage = () => {
        setMainPageState(true);
        setStackPageState(false);
        setProjectsPageState(false);
        setContactsPageState(false);
        setUnderline(1);
        if (toogle) {
            setToogle(false);
        }
    };

    const showStackPage = () => {
        setStackPageState(true);
        setMainPageState(false);
        setProjectsPageState(false);
        setContactsPageState(false);
        setUnderline(2);
        if (toogle) {
            setToogle(false);
        }
    };

    const showProjectsPage = () => {
        setMainPageState(false);
        setStackPageState(false);
        setProjectsPageState(true);
        setContactsPageState(false);
        setUnderline(3);
        if (toogle) {
            setToogle(false);
        }
    };

    const showContactsPage = () => {
        setUnderline(4);
        setModal(true);
        setBackdrop(false);
    };

    const hideContactsPage = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setModal(false);

            setBackdrop(false);
        }, 450);

        mainPageState && setUnderline(1);
        stackPageState && setUnderline(2);
        projectsPageState && setUnderline(3);

        setTimeout(() => {
            setAnimateClose(false);
        }, 500);
        setToogle(false);
    };

    return (
        <ModalState.Provider value={{ isModal: toogle }}>
            {mainPageState && (
                <Main
                    hideContactsPage={hideContactsPage}
                    showContactsPage={showContactsPage}
                    showStackPage={showStackPage}
                    showProjectsPage={showProjectsPage}
                    underline={underline}
                    openNavBar={openNavBar}
                    closeNavBar={closeNavBar}
                />
            )}

            {stackPageState && (
                <Stack
                    showContactsPage={showContactsPage}
                    showMainPage={showMainPage}
                    showProjectsPage={showProjectsPage}
                    underline={underline}
                    openNavBar={openNavBar}
                    closeNavBar={closeNavBar}
                />
            )}

            {projectsPageState && (
                <ProjectsPage
                    showContactsPage={showContactsPage}
                    showStackPage={showStackPage}
                    showMainPage={showMainPage}
                    underline={underline}
                    openNavBar={openNavBar}
                    closeNavBar={closeNavBar}
                />
            )}
            {
                <Contacts
                    modal={modal}
                    hideContactsPage={hideContactsPage}
                    instaIcon={instaIcon}
                    gitIcon={gitIcon}
                    gmailIcon={gmailIcon}
                    animateClose={animateClose}
                />
            }
        </ModalState.Provider>
    );
}

export default App;
