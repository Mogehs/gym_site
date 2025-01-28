import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Classes from "../components/Home/Classes";
import Feauters from "../components/Home/feauters";
import ChooseUs from "../components/Home/ChooseUs";
import Trainers from "../components/Home/Trainers";
import PricingPlans from "../components/Home/PricingPlans";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Classes />
      <Feauters />
      <ChooseUs />
      <Trainers />
      <PricingPlans />
      <Testimonials />
    </>
  );
};

export default Home;
