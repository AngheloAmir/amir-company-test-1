import Head from 'next/head';
import { FaBeer, FaFacebookF} from 'react-icons/fa';

import NavigationBar from   '../components/navigationbar';
import TopPage from         '../components/brevasmajulah/socialcontacts/SocialContacts';
import mainjson from        '../appdata/main.json';

export default function MainLayout({children}) {
    return (
    <>
        <Head>
            <title>Brevas Majalah</title>
            <meta name="description" content="Brevas Majula home page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div>
            <TopPage
                {...mainjson.toppage}
            />
            <NavigationBar />
            { children }
        </div>   
    </> 
    )
}
