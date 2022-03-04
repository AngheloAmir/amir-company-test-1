import LandingComponent  from '../components/landing';
import CardSimple       from '../components/cardssimple';

import homejson from '../appdata/home.json';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div id={styles.home}>
      <LandingComponent
        { ...homejson.landing }
        onclick={() => alert('clicked learn more')}
      />

      <CardSimple
        { ...homejson.cards }
      />
      
      

  
    </div>
  )
}
