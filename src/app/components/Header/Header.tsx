import style from './Header.module.scss';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="#">
        <Image src={logo} alt="Логотип" width={100} height={100} />
      </a>

      <nav>
        <div>
          <a href="#about">О Нас</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
        </div>
        <a href="tel:+79526676161">+7 (952) 667-61-61</a>
      </nav>
    </header>
  );
};

export default Header;
