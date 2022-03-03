import Head from 'next/head';

import NavigationBar from   '../components/navigationbar';
import SocialContacts from  '../components/socialcontacts';
import mainjson from        '../appdata/main.json';
import styles from          '../styles/mainlayout.module.scss';

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
            <div className={styles.spacer} />
            <NavigationBar {...mainjson.navigation} />
        </header>
        
        <div className={styles.spacer} />
        <hr />

        { children } 
    </> 
    );
}
