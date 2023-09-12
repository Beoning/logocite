import style from './Header.module.scss';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={style.header}>
      <Image src={logo} alt="Логотип" width={100} height={100} />
      <nav>
        <a href="">О Нас</a>
      </nav>
      <a href="tel:+79531613787">89531613787</a>
    </header>
  );
};

export default Header;
