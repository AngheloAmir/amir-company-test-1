import LandingPageMain from '../components/landing';
import ProjectsGallery from '../components/projectgallery';

import projectsjson from '../appdata/projects.json';
import styles from '../styles/index.module.scss';


export default function Projects() {
    return (
        <div id={styles.pageContainer}>
            <LandingPageMain { ...projectsjson.landing } />
            <ProjectsGallery { ...projectsjson.projects} />
        </div>
    )
}
