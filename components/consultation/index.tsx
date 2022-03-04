import { ConsultationProps } from './inteface';
import styles from './consultation.module.scss';

/**
 * A design specific component for the Brevas Majulah website
 */
export default function BrevasMajulahConsultation(props :ConsultationProps) {
    function handleBtnClick() {
        alert('Please wait....')
    }

    return (
        <section id={styles.consultation}>
            <div className={styles.textContainer}>
                <p>Welcome the opportunity to re-imagine ypur home with you!</p>
                <p>Please let us known more by clicking the below button</p>
                <p>We will connect with you soon to answer your questions, discuss your ideas for your home, and more!</p>
                <button onClick={handleBtnClick}>
                    Schedule a consultation
                </button>
            </div>

            <img src='assets/worker.png' />
        </section>
    )
}