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

const Stack = ({ showProjectsPage, showMainPage, showContactsPage, underline }) => {
    let data = [
        {
            src: imgHtml,
            alt: 'html icon',
            icon: good,
            id: Math.random(),
            comment: 'dfwwfwe fdwdwd wjhsd nw jhdebw uhdbwhdbj hscnjw hdbw jhdbwjh',
        },
        {
            src: imgCss,
            alt: 'css icon',
            icon: good,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgJs,
            alt: 'JS icon',
            icon: good,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgReact,
            alt: 'React icon',
            icon: normal,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgGit,
            alt: 'git icon',
            icon: good,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgBootStrap,
            alt: 'bootstrap icon',
            icon: good,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgNodeJs,
            alt: 'nodejs icon',
            icon: sad,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgSQL,
            alt: 'sql icon',
            icon: sad,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgSASS,
            alt: 'sass icon',
            icon: sad,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
        {
            src: imgJquery,
            alt: 'jquery icon',
            icon: sad,
            id: Math.random(),
            comment: 'skfjn wwkfddjn je n  jeejn dwkdjn sj',
        },
    ];

    return (
        <div>
            <Background underline={underline} />
            <NavBar showContactsPage={showContactsPage} showProjectsPage={showProjectsPage} showMainPage={showMainPage} underline={underline} />
            <StackItems>
                {data.map((item, index) => {
                    return (
                        <StackItem
                            /* style={data[index].style} */
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            icon={item.icon}
                            comment={item.comment}
                        />
                    );
                })}
            </StackItems>
        </div>
    );
};

export default Stack;
