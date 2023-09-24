import style from './Slider.module.scss';
import first from '../../../../public/slider/firstslide.jpg';
import second from '../../../../public/slider/secondslide.jpg';
import third from '../../../../public/slider/thirdslide.jpg';
import fourth from '../../../../public/slider/fourthslide.jpg';
import fifth from '../../../../public/slider/fifthslide.jpg';
import sixth from '../../../../public/slider/sixthslide.jpg';
import seventh from '../../../../public/slider/seventhslide.jpg';
import SwiperComponent from './Swiper/SwiperComponent';

const images = [first, second, third, fourth, fifth, sixth, seventh];

const Slider = () => {
  return (
    <section className={style.block} id="services">
      <h2>Мы предлагаем следующие виды услуг</h2>
      <SwiperComponent images={images} />
    </section>
  );
};

export default Slider;
