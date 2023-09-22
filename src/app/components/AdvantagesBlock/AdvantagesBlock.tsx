import Image from 'next/image';
import style from './AdvantagesBlock.module.scss';
import kid from '../../../../public/kid.png';
import kidsInSchool from '../../../../public/kidsinschool.jpg';
import smileykid from '../../../../public/smile.png';

const AdvantagesBlock = () => {
  return (
    <section className={style.block}>
      <div>
        <h2>Запуск речи для малышей</h2>
        <p>
          Для ребёнка все занятия <br /> являются формой веселого <br />
          времяпрепровождения. <br />
          Дети с радостью бегут <br /> к нам на занятия
        </p>
      </div>
      <div>
        <Image
          src={kid}
          fill
          sizes="100%"
          style={{
            objectFit: 'cover',
          }}
          alt="Малыш"
        />
      </div>
      <div>
        <Image
          src={kidsInSchool}
          fill
          sizes="100%"
          style={{
            objectFit: 'cover',
          }}
          alt="Дети в школе"
        />
      </div>
      <div>
        <h2>Добрые, Отзывчивые Специалисты</h2>
        <p>
          Все наши сотрудники любят детей.
          <br /> Нам доставляет радость и <br />
          удовольствие видеть,
          <br /> как наши детки достигают реальных
          <br /> успехов в своих непростых целях
        </p>
      </div>
      <div>
        <h2>Многообразие Воздействия</h2>
        <p>
          Многообразные современные методы
          <br /> воздействия на речевой аппарат
          <br />
          ребёнка быстрее приводят к <br />
          желаемому результату
        </p>
      </div>
      <div>
        <Image
          src={smileykid}
          fill
          sizes="100%"
          style={{
            objectFit: 'cover',
          }}
          alt="Улыбающаяся девочка"
        />
      </div>
    </section>
  );
};

export default AdvantagesBlock;
