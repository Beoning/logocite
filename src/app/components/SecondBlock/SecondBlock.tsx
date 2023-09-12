import style from './SecondBlock.module.scss';

const SecondBlock = () => {
  return (
    <section className={style.block}>
      <div>
        <h2>Игровая Форма</h2>
        <p>
          Для ребёнка все занятия <br /> являются формой веселого <br />{' '}
          времяпрепровождения. <br />
          Дети с радостью бегут <br /> к нам на занятия
        </p>
      </div>
      <div className={style.image} />
      <div className={style.image} />
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
      <div className={style.image} />
    </section>
  );
};

export default SecondBlock;
