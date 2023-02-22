import styles from './ProjectPage.module.css';
import Background from '../main/Background';
import NavBar from '../main/NavBar';
import Project from './Project';

import annaSrc from '../../img/Annawebsite.jpg';

const dataProjects = [
    {
        src: annaSrc,
        alt: 'web site logo',
        href: 'http://tvoypermanent.ru/',
        href2: 'https://',
        header: 'First commercial website',
        id: Math.random(),
        comment: 'It is the first chargible web site I made for buisnes.',
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
