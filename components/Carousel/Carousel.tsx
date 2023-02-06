import React from "react";
import styles from "./Carousel.module.scss";

//
import useEmblaCarousel from "embla-carousel-react";
import { works } from "data/works";
import Prev from "svgrs/icon-arrow-left.svg";
import Next from "svgrs/icon-arrow-right.svg";
//
export const Carousel: React.FunctionComponent = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        startIndex: 2
    });
    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {works.map((work, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <img
                                alt={work.name}
                                src={work.image}
                                className={styles.embla__slide_img}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.btn_container}>
                <button
                    type="button"
                    title="previous"
                    className={styles.btn}
                    onClick={() => emblaApi && emblaApi.scrollPrev()}
                >
                    <Prev />
                </button>

                <button
                    type="button"
                    title="next"
                    className={styles.btn}
                    onClick={() => emblaApi && emblaApi.scrollNext()}
                >
                    <Next />
                </button>
            </div>
        </div>
    );
};
