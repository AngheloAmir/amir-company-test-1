import { CardsSimpleInterface, CardItem } from './interface';
import Card from './Card';
import styles from './cardssimple.module.scss';

/**
  A simple list of cards that has green background.
  @example
  <CardsSimple
    title="SERVICES"
    items={[
      {
          "image"   : "/assets/1.png",
          "title"   :"Card title",
          "text"    :"Card text"
      },
      {
          "image"   : "/assets/2.png",
          "title"   :"Card title",
          "text"    :"Card text"
      }]
    }
  />
 */
export default function CardsSimple(props :CardsSimpleInterface) {
    return (
      <section className={styles.cardsContainer} aria-label="cards">
        <h1> { props.title }</h1>
        <div className={styles.cards}>
          { props.items.map((card :CardItem, index :number) => {
              return (
                <Card key={index} { ...card } />
              )
            })
          }
        </div>
      </section>
    )
}
