import React from 'react';
import styles from './bmform.module.scss';


export interface BMFormProps {
    title   :string;
    text    :string;
}

/**
 * BM specific design form
 */
export default function BMForm(props :BMFormProps) {
    return (
        <section id={styles.bmformContainer}>
            <div className={styles.textContainer}>
                <h1> { props.title } </h1>
                <p>  {props.text } </p>
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={(e :React.SyntheticEvent ) => { e.preventDefault(); alert('submmiting')} }>
                    <div>
                        <label >Name </label>
                        <input type="text" name="text" />
                    </div>
                    
                    <div>
                        <label >Email </label>
                        <input type="email" name="email" />
                    </div>
                    
                    <div>
                        <label >Contact </label>
                        <input type="number" name="contact" />
                    </div>

                    <div>
                        <label >Message </label>
                        <textarea />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}
