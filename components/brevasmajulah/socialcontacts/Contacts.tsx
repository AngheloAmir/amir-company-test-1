import { ContactLinks } from './interface';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import styles from './socialcontacts.module.scss';

/**
 * A component that is part of the .tsx. This component appears in the rightside of the screen
 */
export default function Contacts(props :ContactLinks) {
    return (
        <div className={styles.contactsContainer}>
            { props.email && props.emailtext &&
                <div className={styles.item}>
                    <MdMail className={styles.icon}/>
                    <p> {props.emailtext} </p>
                </div>
            }
            { props.phone && props.phonestext &&
                <div className={styles.item}>
                    <FaPhoneAlt className={styles.icon}/>
                    <p> {props.phonestext} </p>
                </div>
            }
        </div>
    )
}
