import FirstBlock from './components/FirstBlock/FirstBlock';
import FourthBlock from './components/FourthBlock/FourthBlock';
import Header from './components/Header/Header';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <section>5</section>
        <section>6</section>
        <section>7</section>
        <section>8</section>
        <section>9</section>
      </main>
      <footer>10</footer>
    </>
  );
};

export default Page;
