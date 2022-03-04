export interface CarouselProps {
    slides  :Array<SlideItemsProps>;
}

export interface SlideItemsProps {
    image   :string;
    title   :string;
    text    :string;
}
