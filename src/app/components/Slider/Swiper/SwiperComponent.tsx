'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import style from './SwiperComponent.module.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FC } from 'react';
import { StaticImageData } from 'next/image';
import Slide from '../Slide/Slide';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent: FC<{
  images: StaticImageData[];
}> = ({ images }) => {
  return (
    <Swiper
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
      slidesPerView={3}
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
