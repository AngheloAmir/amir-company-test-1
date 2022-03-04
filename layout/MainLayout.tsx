import Head from 'next/head';

import NavigationBar from   '../components/navigationbar';
import SocialContacts from  '../components/socialcontacts';
import mainjson from        '../appdata/main.json';
import styles from          '../styles/mainlayout.module.scss';

/**
 * Defines the navigation bar and the footer that will be shown accross the website
 */
export default function MainLayout({children}) {
    return (
    <>
        <Head>
            <title>Brevas Majalah</title>
            <meta name="description" content="Brevas Majula home page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <header id={styles.headingContainer}>
            <SocialContacts {...mainjson.toppage} />
        </header>
        <NavigationBar {...mainjson.navigation} />
        
        <div className={styles.spacer} />
        <hr />

        { children } 

        <footer>
            footer here
        </footer>
    </> 
    );
}
