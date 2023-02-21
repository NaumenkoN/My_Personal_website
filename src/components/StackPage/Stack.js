import React from 'react';
import NavBar from '../main/NavBar';
import Background from '../main/Background';
import StackItems from './StackItems';
import StackItem from './StackItem';

import good from '../../img/icons/smile.png';
import imgHtml from '../../img/icons/html-5.png';

const Stack = ({ showStackPage, showMainPage }) => {
    const data = [
        {
            src: imgHtml,
            alt: 'html icon',
            icon: good,
            key: 1,
        },
        {
            src: imgHtml,
            alt: 'html icon',
            icon: good,
            key: 1,
        },
    ];

    return (
        <React.Fragment>
            <Background></Background>
            <NavBar showStackPage={showStackPage} showMainPage={showMainPage} />
            <StackItems>
                {data.map(item => (
                    <StackItem src={item.src} alt={item.alt} icon={item.icon} />
                ))}
            </StackItems>
        </React.Fragment>
    );
};

export default Stack;
