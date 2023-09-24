'use client';

import Image from 'next/image';
import style from './WelcomeBlock.module.scss';
import back from '../../../../public/firstblockback.png';

import { motion } from 'framer-motion';

const WelcomeBlock = () => {
  return (
    <section className={style.block}>
      <Image
        src={back}
        alt="Фон блока"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        Современный <br /> центр <br /> Логопеды из <br /> CHIC<span>A</span>GA
      </motion.h1>
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
      >
        <p>
          Формируем{' '}
          <span>
            чёткую и <br /> уверенную речь
          </span>
        </p>
        <p>
          СОВРЕМЕННЫЙ ПОДХОД <br />
          <span>
            УЛУЧШЕНИЯ УСПЕВАЕМОСТИ <br />В ШКОЛЕ
          </span>
        </p>
        <p>
          ВСЕ ВИДЫ <br /> <span>ЛОГОПЕДИЧЕСКОГО МАССАЖА</span>
        </p>
      </motion.section>
    </section>
  );
};

export default WelcomeBlock;
