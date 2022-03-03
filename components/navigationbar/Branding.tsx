import { BrandingProps } from "./interface";
import styles from './navigationbar.module.scss';

export default function Branding( props :BrandingProps ) {
    return (
        <div className={styles.brandingContainer}>
            <h3>{ props.brandname } </h3>
            <h3>{ props.brandtitle } </h3>
        </div>
    );
}
