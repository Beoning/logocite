'use client';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import style from './SwiperComponent.module.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FC, ReactElement, useLayoutEffect, useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import Slide from '../Slide/Slide';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent: FC<{
  images: StaticImageData[];
}> = ({ images }) => {
  const ref = useRef<null | SwiperRef>(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    //@ts-ignore
    setWidth(ref.current?.offsetWidth);
  }, []);

  return (
    <Swiper
      ref={ref}
      style={{
        //@ts-ignore
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      enabled={true}
      spaceBetween={50}
      slidesPerView={width > 400 ? 3 : 1}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
      className={style.swiper}
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index} className={style['swiper-slide']}>
            <Slide img={img} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
