
import LandingPageMain from '../components/landing';
import projectsjson from '../appdata/projects.json';

import styles from '../styles/index.module.scss';


export default function Projects() {
    return (
        <div id={styles.pageContainer}>
            <LandingPageMain
                { ...projectsjson.landing }
            />
            


            <h3>Welcome to project page</h3>
        </div>
    )
}