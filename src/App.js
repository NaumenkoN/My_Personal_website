import React from 'react';
import Main from './components/main/Main';
import { useState } from 'react';
import Stack from './components/StackPage/Stack';

function App() {
    const [mainPageSate, setMainPageState] = useState(true);
    const [stackPageSate, setStackPageState] = useState(false);

    const showStackPage = () => {
        setStackPageState(true);
        setMainPageState(false);
    };

    const showMainPage = () => {
        setMainPageState(true);
        setStackPageState(false);
    };

    return (
        <React.Fragment>
            {mainPageSate && <Main showStackPage={showStackPage} />}
            {stackPageSate && <Stack showStackPage={showStackPage} showMainPage={showMainPage} />}
        </React.Fragment>
    );
}

export default App;
