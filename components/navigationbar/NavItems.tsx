import Link from 'next/link'
import {NavItemsInterface, NavItem } from './interface';
import styles from './navigationbar.module.scss';

export default function NavItems( props :NavItemsInterface ) {
    return (
        <div className={styles.navigationItemsContainer}>
            <ul >
            { props.items.map((item :NavItem, index :number) => {
                return (
                    <li key={index}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                );
            })
            }
            </ul>
        </div>
    );
}
