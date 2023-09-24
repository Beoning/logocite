import style from './YandexMap.module.scss';

const YandexMap = () => {
  return (
    <section className={style.block}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6de5b77a5e794e1939ed316a3882578faad46f11c0c53c1bc57d8807a73311e2&amp;source=constructor"
        width="100%"
        height="620"
        frameBorder="0"
      />
    </section>
  );
};

export default YandexMap;
