import React from 'react';
import { SlideItemsProps } from './interface';
import styles from './carousel.module.scss';

export default function SlideItem(props :SlideItemsProps) {
    return (
        <>
            <img src={props.image} />
            <div className={styles.textContainer}>
                <h1> {props.title} </h1>
                <p> {props.text} </p>
            </div>
        </>
    );
}
