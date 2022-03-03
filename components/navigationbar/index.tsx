import TopPage from '../brevasmajulah/TopPage/TopPage';
import mainjson from '../../appdata/main.json';

export default function NavigationBar() {
    return (
        <div>
            <TopPage
                {...mainjson.toppage}
            />
            <nav>
                
            </nav>
        </div>
    )
}
