import { PermitProps } from './interface';
import styles from './permit.module.scss';

/**
 * The permit component for the BM website which appears in the about page
 */

export default function Permit(props :PermitProps) {
    return (
        <section id={styles.permitContainer}>
            <div className={styles.imageContainer}>
                <img src={props.image} />
            </div>

            <div className={styles.contentContainer}>
                <h1>{props.title}</h1>
                <div>
                    <button>{props.btntext}</button>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
    );
}
