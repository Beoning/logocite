import Image from 'next/image';
import style from './WelcomeBlock.module.scss';
import back from '../../../../public/firstblockback.png';

const WelcomeBlock = () => {
  return (
    <section className={style.block}>
      <Image
        src={back}
        alt="Фон блока"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <h1>
        Современный <br /> центр <br /> Логопеды из <br /> CHIC<span>A</span>GA
      </h1>
      <section>
        <p>
          Формируем{' '}
          <span>
            чёткую и <br /> уверенную речь
          </span>
        </p>
        <p>
          СОВРЕМЕННЫЙ ПОДХОД <br />
          <span>
            УЛУЧШЕНИЯ УСПЕВАЕМОСТИ <br />В ШКОЛЕ
          </span>
        </p>
        <p>
          ВСЕ ВИДЫ <br /> <span>ЛОГОПЕДИЧЕСКОГО МАССАЖА</span>
        </p>
      </section>
    </section>
  );
};

export default WelcomeBlock;
