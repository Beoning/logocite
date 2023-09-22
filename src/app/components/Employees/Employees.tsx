import Image from 'next/image';
import style from './Employees.module.scss';
import olga from '../../../../public/olga.png';
import angelina from '../../../../public/angelinavasilieva.png';
import nadya from '../../../../public/nadya.png';
import sveta from '../../../../public/sveta.png';
import veronica from '../../../../public/veronica.png';

const Employees = () => {
  return (
    <section className={style.block} id="about">
      <section>
        <div>
          <Image
            className={style.img}
            src={olga}
            alt="Ольга Соколова"
            width={500}
            height={400}
          />
          <span>Ольга Соколова</span>
          <p>основатель и ведущий специалист</p>
        </div>
        <div>
          <h3>Давайте вместе!</h3>
          <p>
            Шаг за шагом Вы решительно продвигаетесь <br />в комплексном
            развитии Вашего любимого <br />
            ребенка. А мы созданы для того, чтобы <br />
            Ваше движение было максимально <br />
            современным, эффективным и <br />
            жизнерадостным.
          </p>
        </div>
      </section>
      <section>
        <div>
          <Image
            src={angelina}
            alt="Ангелина Васильева"
            width={267}
            height={317}
          />
          <span>Ангелина Васильева</span>
          <p>Логопед</p>
        </div>
        <div>
          <Image
            src={nadya}
            alt="Кузьминских Надежда"
            width={267}
            height={317}
          />
          <span>Кузьминских Надежда</span>
          <p>Логопед</p>
        </div>
        <div>
          <Image src={sveta} alt="Тихонова Светлана" width={267} height={317} />
          <span>Тихонова Светлана</span>
          <p>Логопед</p>
        </div>
        <div>
          <Image
            src={veronica}
            alt="Вероника Францева"
            width={267}
            height={317}
          />
          <span>Вероника Францева</span>
          <p>Логопед</p>
        </div>
      </section>
    </section>
  );
};

export default Employees;
