import { CardsSimpleInterface, CardItem } from './interface';
import Card from './Card';
import styles from './cardssimple.module.scss';

/**
  A simple list of cards that has green background.
  @example
  <CardsSimple

  />
 */
export default function CardsSimple(props :CardsSimpleInterface) {
    return (
      <div className={styles.cardsContainer}>
        <h1> { props.title }</h1>
        <div className={styles.cards}>
          { props.items.map((card :CardItem, index :number) => {
              return (
                <Card key={index} { ...card } />
              )
            })
          }
        </div>
      </div>
    )
}
