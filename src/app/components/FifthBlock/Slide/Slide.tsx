import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useSwiperSlide } from 'swiper/react';
import style from './Slide.module.scss';

const Slide: React.FC<{
  img: StaticImageData;
}> = ({ img }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div className={style.card}>
      <Image src={img} alt="Слайд" width={686} height={691} />
    </div>
  );
};

export default Slide;
