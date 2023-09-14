import style from './EighthBlock.module.scss';

const EighthBlock = () => {
  return (
    <section className={style.block}>
      <h2>
        Всех настроим! <br />
        Всех поправим!
      </h2>
      <input type="text" placeholder="Ваше имя" />
      <input type="number" placeholder="Номер телефона" />
      <button>Оставить заявку</button>
    </section>
  );
};

export default EighthBlock;
