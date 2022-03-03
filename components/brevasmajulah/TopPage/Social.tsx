import { TopPageSocialLinks } from './interface';
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from 'react-icons/fa';


/**
 * A component that is part of the TopPage.tsx. This component appears in the leftside of the screen
 *  
 */
export default function Social(props :TopPageSocialLinks) {
    return (
        <div>
            <a href={props.facebook}>
                <FaFacebookF />
            </a>
            <a href={props.instagram}>
                <FaInstagram />
            </a>
            <a href={props.linkedin}>
                <FaLinkedinIn />
            </a>
        </div>
    )
}
