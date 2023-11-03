import Section from './Section';
import style from './UseCases.module.scss';

const UseCases = () => {
  return (
    <section className={style.block}>
      <h2>Прогресс на службе специалистов</h2>
      <p>
        В нашей повседневной работе мы используем современное
        <br /> электронное оборудование для “прокачки” способностей мозга <br />
        ребенка
      </p>
      <Section />
    </section>
  );
};

export default UseCases;
