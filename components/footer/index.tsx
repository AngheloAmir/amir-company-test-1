import { BMFooterProps, Columns } from './interface';
import Column from './Columns';
import styles from './bmfooter.module.scss';

/**
    A resuable multi column footer notes (not responsive)
    @example
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
*/
export default function BMFooter(props :BMFooterProps) {
    return (
        <footer id={styles.bmfooter}>
            <div className={styles.columnsContainer}>
            { 
                props.columns.map((column :Columns, index :number) => {
                    return <Column { ...column}  key={index} />
                })
            }
            </div>
            <p> { props.bottomtext } </p>
        </footer>
    );
}
