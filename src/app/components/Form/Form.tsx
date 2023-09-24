import Image from 'next/image';
import style from './Form.module.scss';
import formKid from '../../../../public/formkid.jpg';

const Form = () => {
  return (
    <section className={style.block} id="form">
      <Image
        src={formKid}
        fill
        sizes="100%"
        quality={100}
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
        alt="Ребенок на оранжевом фоне"
      />
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

export default Form;
