import BMForm        from '../components/bmform';

import contactsjson     from '../appdata/contacts.json';
import styles           from '../styles/index.module.scss';


export default function Contacts() {
    return (
        <div id={styles.pageContainer}>
            <img src='./assets/contacts/map.jpg'
                style={{
                    width: '100%',
                    marginBottom: '2rem'
                }}
            />
            
            <BMForm { ...contactsjson.form } />
        </div>
    );
}
