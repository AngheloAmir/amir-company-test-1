import { ConsultationProps } from './inteface';
import styles from './consultation.module.scss';

/**
 * A design specific component for the Brevas Majulah website
 * @example
    <BrevasMajulahConsultation
        firstparagraph="Lorem 1234"
        secondparagraph="Lorem 1234"
        thirdparagraph="Lorem 1234"
        btntext="Request apointment"
        image="assets/worker.png"
    />
 */
export default function BrevasMajulahConsultation(props :ConsultationProps) {
    function handleBtnClick() {
        alert('Please wait....')
    }

    return (
        <section id={styles.consultation}>
            <div className={styles.textContainer}>
                <p> {props.firstparagraph} </p>
                <p> {props.secondparagraph} </p>
                <p> {props.thirdparagraph} </p>
                <button onClick={handleBtnClick}>
                    {props.btntext}
                </button>
            </div>

            <img src={props.image} />
        </section>
    )
}