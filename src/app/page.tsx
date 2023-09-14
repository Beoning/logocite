import EighthBlock from './components/EighthBlock/EighthBlock';
import FifthBlock from './components/FifthBlock/FifthBlock';
import FirstBlock from './components/FirstBlock/FirstBlock';
import Footer from './components/Footer/Footer';
import FourthBlock from './components/FourthBlock/FourthBlock';
import Header from './components/Header/Header';
import NinthBlock from './components/NinethBlock/NinthBlock';
import SecondBlock from './components/SecondBlock/SecondBlock';
import SeventhBlock from './components/SeventhBlock/SeventhBlock';
import SixthBlock from './components/SixthBlock/SixthBlock';
import TenthBlock from './components/TenthBlock/TenthBlock';
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
        <EighthBlock />
        <NinthBlock />
        <TenthBlock />
      </main>
      <Footer />
    </>
  );
};

export default Page;
