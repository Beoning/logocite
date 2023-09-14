import Image from 'next/image';
import style from './TenthBlock.module.scss';
import metro from '../../../../public/metro.svg';

const TenthBlock = () => {
  return (
    <section className={style.block}>
      <h2>ЛОГОПЕДЫ из CHICAGA</h2>
      <p>Наши уютные мастерские находятся в 3-х минутах от метро</p>
      <section className={style.info}>
        <section>
          <Image src={metro} alt="Логотип метро" />
          <span>
            Филиал <br />
            АКАДЕМИЧЕСКИЙ
          </span>
          <p>
            пр. Науки, д.10, к.1 <br /> Вход справа, 2 этаж <br />
            ст. метро Академическая
          </p>
        </section>
        <section>
          <Image src={metro} alt="Логотип метро" />
          <span>
            Филиал <br />
            ОЗЕРКИ
          </span>
          <p>
            пр. Энгельса, д.124, к.1
            <br />5 вход 3 этаж <br />
            ст. метро Озерки
          </p>
        </section>
        <section>
          <Image src={metro} alt="Логотип метро" />
          <span>
            Филиал <br />
            ЛАДОЖСКАЯ
          </span>
          <p>
            ул. Осипенко д.2
            <br /> ст. метро Ладожская
          </p>
        </section>
      </section>
    </section>
  );
};

export default TenthBlock;
