import style from './FirstBlock.module.scss';

const FirstBlock = () => {
  return (
    <section className={style.block}>
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

export default FirstBlock;
