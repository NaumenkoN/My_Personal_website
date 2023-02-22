import React from 'react';
import Main from './components/main/Main';
import { useState } from 'react';
import Stack from './components/StackPage/Stack';
import ProjectPage from './components/projects/ProjectPage';

function App() {
    const [mainPageState, setMainPageState] = useState(true);
    const [stackPageState, setStackPageState] = useState(false);
    const [projectsPageState, setProjectsPageState] = useState(false);
    const [underline, setUnderline] = useState(1);

    const showStackPage = () => {
        setStackPageState(true);
        setMainPageState(false);
        setProjectsPageState(false);
        setUnderline(2);
    };

    const showMainPage = () => {
        setMainPageState(true);
        setStackPageState(false);
        setProjectsPageState(false);
        setUnderline(1);
    };

    const showProjectsPage = () => {
        setMainPageState(false);
        setStackPageState(false);
        setProjectsPageState(true);
        setUnderline(3);
    };

    return (
        <React.Fragment>
            {mainPageState && <Main showStackPage={showStackPage} showProjectsPage={showProjectsPage} underline={underline} />}

            {stackPageState && <Stack showMainPage={showMainPage} showProjectsPage={showProjectsPage} underline={underline} />}

            {projectsPageState && <ProjectPage showStackPage={showStackPage} showMainPage={showMainPage} underline={underline} />}
        </React.Fragment>
    );
}

export default App;
