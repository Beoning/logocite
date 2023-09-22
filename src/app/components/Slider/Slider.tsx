'use client';

import style from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import first from '../../../../public/slider/firstslide.jpg';
import second from '../../../../public/slider/secondslide.jpg';
import third from '../../../../public/slider/thirdslide.jpg';
import fourth from '../../../../public/slider/fourthslide.jpg';
import fifth from '../../../../public/slider/fifthslide.jpg';
import sixth from '../../../../public/slider/sixthslide.jpg';
import seventh from '../../../../public/slider/seventhslide.jpg';
import { Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide/Slide';

const images = [first, second, third, fourth, fifth, sixth, seventh];

const Slider = () => {
  return (
    <section className={style.block} id="services">
      <h2>Мы предлагаем следующие виды услуг</h2>
      <Swiper
        style={{
          //@ts-ignore
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
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
        modules={[Pagination, Navigation]}
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
    </section>
  );
};

export default Slider;
