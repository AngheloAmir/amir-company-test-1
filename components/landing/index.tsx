import styles from './landing.module.scss';

export interface LandingPageMainProps {
    image       :string;
    heading     :string;
    paragraph   :string;
    btntext?    :string;
    onclick?    :() => void;
}

/**
 * A resuable landing page for Next.js
 * 
 * @example
 * <LandingPageMain
        image="/icon.png"
        heading="lorem"
        paragraph="lorem lorem lorem"
        btntext="Yes"
    />
 */
export default function LandingPageMain(props :LandingPageMainProps) {
    return (
        <main id={styles.landingContainer}>
           <img src={props.image} />
            <div className={styles.textContainer}>
                <h1>{ props.heading }</h1>
                <p> { props.paragraph} </p>

                { props.btntext &&
                    <button onClick={props.onclick}>
                        { props.btntext }
                    </button>
                }
                
            </div>
        </main>
    );
}
