import { TopPageContactLinks } from './interface';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import styles from './toppage.module.scss';

/**
 * A component that is part of the TopPage.tsx. This component appears in the rightside of the screen
 */
export default function Contacts(props :TopPageContactLinks) {
    return (
        <div className={styles.contactsContainer}>
            <div className={styles.item}>
                <MdMail className={styles.icon}/>
                <p> {props.emailtext} </p>
            </div>
            <div className={styles.item}>
                <FaPhoneAlt className={styles.icon}/>
                <p> {props.phonestext} </p>
            </div>
        </div>
    )
}
