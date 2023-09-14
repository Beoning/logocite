import FifthBlock from './components/FifthBlock/FifthBlock';
import FirstBlock from './components/FirstBlock/FirstBlock';
import FourthBlock from './components/FourthBlock/FourthBlock';
import Header from './components/Header/Header';
import SecondBlock from './components/SecondBlock/SecondBlock';
import SeventhBlock from './components/SeventhBlock/SeventhBlock';
import SixthBlock from './components/SixthBlock/SixthBlock';
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
        <FifthBlock />
        <SixthBlock />
        <SeventhBlock />
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};

export default Page;
