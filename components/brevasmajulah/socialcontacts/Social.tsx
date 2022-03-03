import { SocialLinks } from './interface';
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from 'react-icons/fa';
import styles from './socialcontacts.module.scss';

/**
 * A component that is part of the TopPage.tsx. This component appears in the leftside of the screen
 */
export default function Social(props :SocialLinks) {
    return (
        <div className={styles.socialContainer}>
            <a href={props.facebook}>
                <FaFacebookF className={styles.socialButtons} />
            </a>
            <a href={props.instagram}>
                <FaInstagram className={styles.socialButtons} />
            </a>
            <a href={props.linkedin}>
                <FaLinkedinIn className={styles.socialButtons}/>
            </a>
        </div>
    )
}
