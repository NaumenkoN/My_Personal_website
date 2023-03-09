import React, { useState } from 'react';
import NavBar from '../main/NavBar';
import Background from '../main/Background';
import StackItems from './StackItems';
import StackItem from './StackItem';

import good from '../../img/icons/smile.png';
import normal from '../../img/icons/confused.png';
import sad from '../../img/icons/sad.png';

import imgHtml from '../../img/icons/html-5.png';
import imgCss from '../../img/icons/css.png';
import imgJs from '../../img/icons/java-script.png';
import imgReact from '../../img/icons/react.png';
import imgGit from '../../img/icons/github.png';
import imgBootStrap from '../../img/icons/bootstrap.png';
import imgJquery from '../../img/icons/jquery.png';
import imgNodeJs from '../../img/icons/nodejs.png';
import imgSQL from '../../img/icons/sql.png';
import imgSASS from '../../img/icons/sass.png';

const Stack = ({ showProjectsPage, showMainPage, showContactsPage, underline, openNavBar, closeNavBar }) => {
    let data = [
        {
            src: imgJs,
            alt: 'JS icon',
            icon: good,
            id: Math.random(),
            comment: 'All basics. Many new conception of JS ES6+: asynchronous JS, destructuring, API, DOM and more.',
        },
        {
            src: imgHtml,
            alt: 'html icon',
            icon: good,
            id: Math.random(),
            comment: 'All basics conceptions of HTML5 to create semantic right websites. ',
        },
        {
            src: imgCss,
            alt: 'css icon',
            icon: good,
            id: Math.random(),
            comment: 'All basics conceptions of CSS3. Includs Grid, Flex and responsive design.',
        },

        {
            src: imgReact,
            alt: 'React icon',
            icon: normal,
            id: Math.random(),
            comment: 'All basics of JSX. Includs useState, useEffect, useRef, usePortal, useContext.',
        },
        {
            src: imgGit,
            alt: 'git icon',
            icon: good,
            id: Math.random(),
            comment: 'All needed to work in a team.',
        },
        {
            src: imgBootStrap,
            alt: 'bootstrap icon',
            icon: normal,
            id: Math.random(),
            comment: 'Connect library, find and set some features.',
        },
        {
            src: imgNodeJs,
            alt: 'nodejs icon',
            icon: sad,
            id: Math.random(),
            comment: 'I have some experience to use Node, but its still not enough for creating a server side. ',
        },
        {
            src: imgSQL,
            alt: 'sql icon',
            icon: sad,
            id: Math.random(),
            comment: 'I have some experience to use SQL, getting to know more right now.',
        },
        {
            src: imgSASS,
            alt: 'sass icon',
            icon: sad,
            id: Math.random(),
            comment: 'Never use, but ready to learn fast.',
        },
        {
            src: imgJquery,
            alt: 'jquery icon',
            icon: sad,
            id: Math.random(),
            comment: 'Never use, learning right now.',
        },
    ];

    return (
        <div>
            <Background underline={underline} />
            <NavBar
                showContactsPage={showContactsPage}
                showProjectsPage={showProjectsPage}
                showMainPage={showMainPage}
                underline={underline}
                openNavBar={openNavBar}
            />
            <StackItems>
                {data.map((item, index) => {
                    return <StackItem closeNavBar={closeNavBar} key={index} src={item.src} alt={item.alt} icon={item.icon} comment={item.comment} />;
                })}
            </StackItems>
        </div>
    );
};

export default Stack;
