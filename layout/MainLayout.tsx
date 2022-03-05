import Head from 'next/head';

import NavigationBar from   '../components/navigationbar';
import SocialContacts from  '../components/socialcontacts';
import BMFooter from '../components/footer';

import mainjson from        '../appdata/main.json';
import styles from          '../styles/mainlayout.module.scss';

/**
 * Defines the navigation bar and the footer that will be shown accross the website
 */
export default function MainLayout({children}) {
    return (
    <>
        <Head>
            <title>Brevas Majulah</title>
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

        <BMFooter
            bottomtext="(c) BM Website created by Amir for testing"
            columns={[
                {
                    image: "/assets/logo.png",
                    paragraphs: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum expedita recusandae deserunt sint,"]
                },
                {
                    paragraphs: [
                        "Office contact: 1231323a",
                        "",
                        "Whats app: asdasdasdasdsd",
                        "Smart: asdasdasdasdasd",
                        "Globe: asdasdasdasd"
                    ]
                },
                {
                    paragraphs: [
                        "one two",
                        "",
                        "one two"
                    ]
                }
            ]}
        />
    </> 
    );
}
