import EighthBlock from './components/EighthBlock/EighthBlock';
import FifthBlock from './components/FifthBlock/FifthBlock';
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
import Footer from './components/Footer/Footer';
import Employees from './components/Employees/Employees';
import Header from './components/Header/Header';
import NinthBlock from './components/NinethBlock/NinthBlock';
import AdvantagesBlock from './components/AdvantagesBlock/AdvantagesBlock';
import SeventhBlock from './components/SeventhBlock/SeventhBlock';
import SixthBlock from './components/SixthBlock/SixthBlock';
import TenthBlock from './components/TenthBlock/TenthBlock';
import AboutUsHeading from './components/AboutUsHeading/AboutUsHeading';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <WelcomeBlock />
        <AdvantagesBlock />
        <AboutUsHeading />
        <Employees />
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
