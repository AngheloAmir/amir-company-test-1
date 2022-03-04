import styles from './bmfooter.module.scss';

/**
 Non resuable footer component which includes the data in it.
 */
export default function BMFooter() {
    return (
        <footer id={styles.bmfooter}>
            <div className={styles.columnsContainer}>
                <div className={styles.firstColumn}>
                    <img src='/assets/logo.png' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum expedita recusandae deserunt sint,</p>
                </div>

                <div className={styles.middleColumn}>
                    <p>Office contact: 1231323a</p>
                    <br />
                    <p>Office contact: 1231323a</p>
                    <p>Office contact: 1231323a</p>
                    <p>Office contact: 1231323a</p>
                </div>

                <div>
                    <p>Email: </p>
                    <p>info@adasdasdasd.com </p>
                </div>
            </div>

            <h3>Copyright amir asdasdasdasd asd asdas das das</h3>
        </footer>
    );
}
