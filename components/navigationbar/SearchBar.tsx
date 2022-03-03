import styles from './navigationbar.module.scss';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
    return (
        <form className={styles.searchbarContainer}>
            <button type="submit">
                <BiSearch className={styles.icon} />
            </button>
            <input type="text" placeholder="Search.." name="search" />
            
        </form>
    )
}