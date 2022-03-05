import LandingComponent from '../components/landing';
import CardSimple       from '../components/cardssimple';
import Carousel         from '../components/carousel';
import Consultation     from '../components/consultation';

import homejson from '../appdata/home.json';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div id={styles.pageContainer}>
      <LandingComponent { ...homejson.landing } onclick={() => alert('clicked learn more')}/>
      <CardSimple       { ...homejson.cards } />
      <Carousel         { ...homejson.slideshow }/>
      <Consultation     { ...homejson.consultation }/>
    </div>
  );
}
