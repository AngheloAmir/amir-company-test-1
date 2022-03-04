import React from 'react';
import { CarouselProps, SlideItemsProps } from './interface';
import styles from './carousel.module.scss';

import SlideItem from './SlideItem';
/**
 * A Stand-alone carousel for Next.js created by Amir. Optimize to be used with BM website.
 * 
 * @example
    <Carousel 
        slides={[
            {
                image   :"assets/slide1.png";
                title   :"First SLIDE";
                text    :"lorem lorem lorem";
            }
        ]}
    />
 */
export default function Carousel(props :CarouselProps) {
    const [currentSlide, setSlide] = React.useState<number>(0);
    const MAXSLIDES = props.slides.length;

    function nextSlide() {
        if((currentSlide + 1) < MAXSLIDES)
        setSlide(currentSlide + 1);
    }

    function prevSlide() {
        if(currentSlide > 0)
        setSlide(currentSlide - 1);
    }
    
    function isCurrentSlide(i :number) {
        if( i == currentSlide)
            return styles.slideItem;
        return styles.slideItem + styles.fade;
    }

    function willDisplayThisSlide(i :number) {
        if( i == currentSlide )
            return { display: 'flex'};
        return { display: 'none'};
    }

    return (
        <section id={styles.carousel} aria-label="galary">
            <div className={styles.slideContainer}>
                { props.slides.map((slide :SlideItemsProps, index :number) => {
                    return (
                        <div key={index}
                            className={isCurrentSlide(index)}
                            style={willDisplayThisSlide(index)}>
                            <SlideItem { ...slide } />
                        </div>
                    )
                })}
            </div>
            
            <div className={styles.buttons}>
                <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
                <button className={styles.next} onClick={nextSlide}>&#10095;</button>
            </div>
        </section>
    );
}
