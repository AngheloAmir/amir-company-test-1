import Img from 'next/image';
import { BrandingProps } from "./interface";
import styles from './navigationbar.module.scss';

/**
 * Display an image or "styled" text in the navigation bar
 */
export default function Branding( props :BrandingProps ) {
    return (
        <>
        { props.isUseText ?
            <div className={styles.brandingContainer}>
                <h3>{ props.brandname } </h3>
                <h3>{ props.brandtitle } </h3>
            </div>
          :
          <div style={{margin: 0}}>
            { props.brandicon &&
                <Img src={props.brandicon}
                    width={240}
                    height={40}
                />
            }
          </div>
        }
        </>
    );
}
