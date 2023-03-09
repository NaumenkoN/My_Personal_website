import styles from './ProjectsPage.module.css';
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
        header: 'First commercial',
        id: Math.random(),
        comment: 'Made using vanilla JS. Responsive for 80% devices.',
    },
    {
        src: myFirtWS,
        alt: 'web site logo',
        href: 'http://toseeworld.net/',
        href2: 'https://github.com/NaumenkoN/toseeworld',
        header: 'Consecrate to my travelings',
        id: Math.random(),
        comment: 'Made using vanilla JS. Implemented the function wich changing language localy. ',
    },
    {
        src: mySecondWS,
        alt: 'web site logo',
        href: 'http://nikolai-web.dev/',
        href2: 'https://github.com/NaumenkoN/My_Personal_website',
        header: 'Personal',
        id: Math.random(),
        comment: 'My main website about me as a web-developer. Made with React.',
    },
    {
        src: advertisement,
        alt: 'web site logo',
        href: '',
        href2: '',
        header: 'Here can be your website! Contact with me to disscus it.',
        id: Math.random(),
        comment: '',
    },
];

const ProjectPage = ({ showStackPage, showMainPage, showContactsPage, underline, openNavBar, closeNavBar }) => {
    return (
        <div>
            <Background underline={underline} />
            <NavBar
                showContactsPage={showContactsPage}
                showStackPage={showStackPage}
                showMainPage={showMainPage}
                underline={underline}
                openNavBar={openNavBar}
            />
            <div className={styles.grid} onClick={closeNavBar}>
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
