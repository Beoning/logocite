import FirstBlock from './components/FirstBlock/FirstBlock';
import Header from './components/Header/Header';
import SecondBlock from './components/SecondBlock/SecondBlock';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <SecondBlock />
        <section>3</section>
        <section>4</section>
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
