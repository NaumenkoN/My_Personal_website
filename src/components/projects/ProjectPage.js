import styles from './ProjectPage.module.css';
import Background from '../main/Background';
import NavBar from '../main/NavBar';
import Project from './Project';

import annaSrc from '../../img/Annawebsite.jpg';
import myFirtWS from '../../img/mywebsite.jpg';
import mySecondWS from '../../img/Mywebsite2.jpg';
import advertisement from '../../img/joan.jpg';

const dataProjects = [
    {
        src: annaSrc,
        alt: 'web site logo',
        href: 'http://tvoypermanent.ru/',
        href2: 'https://github.com/NaumenkoN/tvoypermanent',
        header: 'First commercial website',
        id: Math.random(),
        comment: 'It is the first chargible web site I made for buisnes.',
    },
    {
        src: myFirtWS,
        alt: 'web site logo',
        href: 'http://toseeworld.net/',
        href2: 'https://github.com/NaumenkoN/toseeworld',
        header: 'Website consecrate to my travelings',
        id: Math.random(),
        comment: 'I like travel, I like shooting videos and editing.',
    },
    {
        src: mySecondWS,
        alt: 'web site logo',
        href: 'http://fsvd.net/',
        href2: 'https://github.com/NaumenkoN/fsvd.net',
        header: 'Personal website',
        id: Math.random(),
        comment: 'My main website about me as a web-developer.',
    },
    {
        src: advertisement,
        alt: 'web site logo',
        href: '',
        href2: '',
        header: 'Here can be your website! contact with me to disscus it.',
        id: Math.random(),
        comment: '',
    },
];

const ProjectPage = ({ showStackPage, showMainPage, underline }) => {
    return (
        <div>
            <Background />
            <NavBar showStackPage={showStackPage} showMainPage={showMainPage} underline={underline} />
            <div className={styles.grid}>
                {dataProjects.map(site => {
                    return (
                        <Project
                            src={site.src}
                            alt={site.alt}
                            href={site.href}
                            header={site.header}
                            key={site.id}
                            comment={site.comment}
                            href2={site.href2}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectPage;
