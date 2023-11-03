'use client';

import Image from 'next/image';
import style from './UseCases.module.scss';
import kidsOne from '../../../../public/kids1.jpeg';
import kidsTwo from '../../../../public/kids2.png';
import { motion } from 'framer-motion';

const Section = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={style.info}
      >
        <Image src={kidsOne} alt="Дети на уроке" width={500} height={294} />
        <div>
          <h3>Современные Методы</h3>
          <p>
            Мы используем все <br />
            современные методы коррекции
            <br /> и формирования чёткой речи
            <br /> ребенка
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={style.info}
      >
        <Image src={kidsTwo} alt="Дети радуются" width={500} height={294} />
        <div>
          <h3>Современное Пространство</h3>
          <p>
            Мы подготовили очень уютные и <br />
            современные помещения для занятий
            <br />
            детишек. Детки во всем должны <br /> ощущать прогресс.
            <br /> Даже в окружающей обстановке
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Section;
