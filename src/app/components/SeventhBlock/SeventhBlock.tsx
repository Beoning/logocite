import Image from 'next/image';
import style from './SeventhBlock.module.scss';
import kidsOne from '../../../../public/kids1.jpeg';
import kidsTwo from '../../../../public/kids2.png';

const SeventhBlock = () => {
  return (
    <section className={style.block}>
      <h2>Прогресс на службе специалистов</h2>
      <p>
        В нашей повседневной работе мы используем современное
        <br /> электронное оборудование для “прокачки” способностей мозга <br />
        ребенка
      </p>
      <section>
        <div className={style.info}>
          <Image src={kidsOne} alt="Дети на уроке" width={500} height={294} />
          <div>
            <h3>Современные Методы</h3>
            <p>
              Мы используем все <br />
              современные методы коррекции
              <br /> и формирования чёткой речи
              <br /> ребенка
            </p>
          </div>
        </div>
        <div className={style.info}>
          <Image src={kidsTwo} alt="Дети радуются" width={500} height={294} />
          <div>
            <h3>Современное Пространство</h3>
            <p>
              Мы подготовили очень уютные и <br />
              современные помещения для занятий
              <br />
              детишек. Детки во всем должны <br /> ощущать прогресс.
              <br /> Даже в окружающей обстановке
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SeventhBlock;
