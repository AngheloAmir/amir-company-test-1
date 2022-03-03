import { NavigationBarProps } from './interface';
import Branding from './Branding';
import NavItems from './NavItems';
import SearchBar from './SearchBar';

import styles from './navigationbar.module.scss';

/**
 * A reusable navigation bar. The design is optimize to be used in Brevas Majalah landing page
 * @example
    <NavigationBar
        branding={{
            brandname: 'My Company',
            brandtitle: 'Web developer'
        }}
        navitems={{
            items: [
                { name: 'Home', link: '/' },
                { name: 'About', link: '/about' }
            ]
        }}
    />
 */
export default function NavigationBar(props :NavigationBarProps) {
    return (
        <nav id={styles.navcontainer}>
            <Branding
                {...props.branding}
            />
            <NavItems
                {...props.navitems}
            />
            <SearchBar
            />
        </nav>
    )
}
