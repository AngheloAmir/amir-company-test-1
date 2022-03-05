import { BMFooterProps, Columns } from './interface';
import styles from './bmfooter.module.scss';

export default function Column(props :Columns) {
    return (
        <div className={styles.column}>
            {
                props .image && <img src={props.image} />
            }
            <div className={styles.textcontainer}>
                {
                    props.paragraphs.map((para :string, i :number) => {
                        return (
                            <p key={i}>
                                { para }
                            </p>
                        )
                    })
                }
            </div>
        </div>
    );
}
