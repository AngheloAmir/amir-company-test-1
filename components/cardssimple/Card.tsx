import { CardItem } from './interface';
import styles from './cardssimple.module.scss';

export default function Card(props :CardItem) {
    return (
        <div  className={styles.card}>
            <img src={props.image} />
            <h3> {props.title} </h3>
            <p>  {props.text} </p>
        </div>
    );
}