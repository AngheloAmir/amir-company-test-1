import { TopPageContactLinks } from './interface';

import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export default function Contacts(props :TopPageContactLinks) {
    return (
        <div>
            <MdMail />
            <FaPhoneAlt />
        </div>
    )
}
