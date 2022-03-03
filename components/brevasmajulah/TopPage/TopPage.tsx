import { TopPageProps } from './interface';
import styles from './toppage.module.scss';

import Social from './Social';
import Contacts from './Contacts';

/**
 * A specific component created for Brevas Majulah Landing page that appears in the top of the website.
 * 
 * @example
    <TopPage
        links={{
            facebook:  'https://facebook.com',
            instagram: 'https://instagram.com',
            linkedin:  'https://linkedin.com'
        }}
        contacts={{
            email:      'aaa@alias.com',
            emailtext:  'aaa@alias.com',
            phone:      123,
            phonestext: '(123) 123'
        }}
    />
 */
export default function TopPage( props :TopPageProps) {
    return (
        <div className={styles.container}>
            <Social     {...props.links} />
            <Contacts   {...props.contacts} />
        </div>
    )
}
