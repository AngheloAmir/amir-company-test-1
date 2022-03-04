import { useRef, FC, SyntheticEvent} from 'react';
import styles from './navigationbar.module.scss';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
    const textinputref = useRef<HTMLInputElement>(null);

    function handleSearch(e :SyntheticEvent) {
        e.preventDefault();
        if(!textinputref.current) return;
        alert(`You search for: ${textinputref.current.value}`);
    }

    return (
        <form className={styles.searchbarContainer}>
            <button
                type="submit"
                onClick={handleSearch}
            >
                <BiSearch className={styles.icon} />
            </button>
            <input
                type="text"
                placeholder="Search.."
                name="search"
                ref={textinputref}
            />
        </form>
    )
}