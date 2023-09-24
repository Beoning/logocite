'use client';

import style from './Header.module.scss';
import logo from '../../../../public/logo.svg';
import Image from 'next/image';

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="#">
        <Image src={logo} alt="Логотип" width={100} height={100} />
      </a>

      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <div>
          <a href="#about">О Нас</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
        </div>
        <a href="tel:+79526676161">+7 (952) 667-61-61</a>
      </motion.nav>
    </header>
  );
};

export default Header;
