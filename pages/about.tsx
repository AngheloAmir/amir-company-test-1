import LandingPageMain from '../components/landing';
import BeamVSmall      from '../components/beamvsmall';
import Permit          from '../components/permit';

import aboutjson    from '../appdata/about.json';
import styles       from '../styles/index.module.scss';

export default function About() {
    return (
        <div id={styles.pageContainer}>
            <LandingPageMain { ...aboutjson.landing } />
            <BeamVSmall      { ...aboutjson.goals.mission} />
            <BeamVSmall      { ...aboutjson.goals.vission} />
            <Permit          { ...aboutjson.permit} />
        </div>
    )
}
