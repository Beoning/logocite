import Image from 'next/image';
import style from './FormContainer.module.scss';
import formKid from '../../../../../public/formkid.jpg';
import Form from '../Form';

const FormContainer = () => {
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
      <Form />
    </section>
  );
};

export default FormContainer;
