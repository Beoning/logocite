import Slider from './components/Slider/Slider';
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
import Footer from './components/Footer/Footer';
import Employees from './components/Employees/Employees';
import Header from './components/Header/Header';
import YandexMap from './components/YandexMap/YandexMap';
import AdvantagesBlock from './components/AdvantagesBlock/AdvantagesBlock';
import UseCases from './components/UseCases/UseCases';
import SignTo from './components/SignTo/SignTo';
import Addresses from './components/Addresses/Addresses';
import AboutUsHeading from './components/AboutUsHeading/AboutUsHeading';
import FormContainer from './components/Form/FormContainer/FormContainer';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <WelcomeBlock />
        <AdvantagesBlock />
        <AboutUsHeading />
        <Employees />
        <Slider />
        <SignTo />
        <UseCases />
        <FormContainer />
        <YandexMap />
        <Addresses />
      </main>
      <Footer />
    </>
  );
};

export default Page;
