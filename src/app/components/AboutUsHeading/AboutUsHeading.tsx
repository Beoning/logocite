import style from './AboutUsHeading.module.scss';

const AboutUsHeading = () => {
  return (
    <section className={style.block}>
      <h2>
        Это мы - логопеды из CHIC<span>A</span>GA
      </h2>
      <p>
        Наша команда профессионалов с радостью
        <br /> поможет вашим детям успешно достичь невероятных результатов
      </p>
    </section>
  );
};

export default AboutUsHeading;
