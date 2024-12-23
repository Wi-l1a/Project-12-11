import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Slider.module.scss';
import './Slider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery-bundle.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


interface SwiperProps {
    data?: string[]
    image: any
    className?: string;
}

export const Slider = ({ className, image, data }: SwiperProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const handleGalleryOpen = () => {
        document.body.style.overflow = `hidden`;
    };
    const handleGalleryClose = () => {
        document.body.style.overflow = `auto`;
    };

    return (
        <div className={classNames(s.Swiper, {}, [className])}>
            {
                image && data.length > 0 &&
                <>
                    <LightGallery
                        selector='.gallery-item'
                        elementClassNames={s.custom_wrapper_class}
                        speed={500}
                        plugins={[lgThumbnail]}
                        download={false}
                        counter={false}
                        onAfterOpen={handleGalleryOpen}
                        onAfterClose={handleGalleryClose}
                    >
                        <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={s.SwiperHero}
                        >
                            <SwiperSlide className={`${s.SwiperSlide} lg-item`} data-src={image} >
                                <a className='gallery-item' href={image}>
                                    <img src={image} alt={`Main product`} />
                                </a>
                            </SwiperSlide>
                            {data?.map((e, index) => (
                                <SwiperSlide className={`${s.SwiperSlide} lg-item`} key={index} data-src={e} >
                                    <a className='gallery-item' href={e}>
                                        <img src={e} alt={`${index}`} />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </LightGallery>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
                        className={s.SwiperMini}
                        grabCursor
                        breakpoints={{
                            300: {
                                slidesPerView: 3.6,
                                slidesPerGroup: 3.6,
                            },
                        }}
                        mousewheel

                    >
                        <SwiperSlide className={s.SwiperSlide}>
                            <img src={image} alt={`Thumb ${image}`} />
                        </SwiperSlide>
                        {data.map((e, index) => (
                            <SwiperSlide className={s.SwiperSlide} key={index}>
                                <img src={e} alt={`Thumb ${e}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            }
        </div>
    );
};