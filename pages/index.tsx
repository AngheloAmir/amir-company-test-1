import LandingComponent from '../components/landing';
import CardSimple       from '../components/cardssimple';
import Carousel         from '../components/carousel';

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
      
      <Carousel
        { ...homejson.slideshow }
      />


    <p style={{width: '100px', margin: 'auto'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias dignissimos voluptates harum pariatur accusamus magnam quos aut non eius atque exercitationem dolor excepturi architecto optio provident iure blanditiis odio, illum eos fuga ducimus itaque amet! Maiores ipsam velit praesentium debitis, aliquid vel, nulla ea inventore obcaecati ducimus quas. Libero sunt explicabo ad non iusto assumenda laborum reprehenderit a. Aliquam illum dolorem enim! Corporis similique voluptatum optio fugit necessitatibus soluta ab esse cumque distinctio, possimus placeat excepturi veritatis magnam facere aliquid eum, suscipit labore! Alias officia eum perspiciatis eaque, omnis ratione corporis molestias officiis repellat deleniti quas expedita accusantium quaerat.
    </p>
    </div>
  )
}
