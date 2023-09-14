import Image from 'next/image';
import style from './Footer.module.scss';
import tg from '../../../../public/telegram.svg';
import wa from '../../../../public/wa.svg';
import vk from '../../../../public/vk.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="tel:+79526676161">+7 (952) 667-61-61</a>
      <h3>info@logopeeed.ru</h3>
      <p>Мы в социальных сетях</p>
      <section>
        <a href="https://t.me/logopedchicaga">
          <Image src={tg} alt="" width={40} height={40} />
        </a>
        <a href="https://wa.me/+79526676161">
          <Image src={wa} alt="" width={40} height={40} />
        </a>
        <a href="https://vk.com/chicaga_logoped">
          <Image src={vk} alt="" width={40} height={40} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
