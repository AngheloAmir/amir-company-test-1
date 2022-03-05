import LandingPageMain from '../components/landing';
import BeamVSmall      from '../components/beamvsmall';

import aboutjson    from '../appdata/about.json';
import styles       from '../styles/index.module.scss';

export default function About() {
    return (
        <div id={styles.pageContainer}>
            <LandingPageMain
                { ...aboutjson.landing }
            />
            <BeamVSmall
                imagepath="/assets/about/mission.jpg"
                title="MISSION"
                text="To create a significant township community beyond the expectation"
            />
            <BeamVSmall
                imagepath="/assets/about/landing.jpg"
                title="VISION"
                text="To deliver memorable township community"
                isReverse={true}
            />
        </div>
    )
}