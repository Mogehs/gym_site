import Navbar from "../components/Home/Navbar";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Classes from "../components/Home/Classes";
import Feauters from "../components/Home/feauters";
import ChooseUs from "../components/Home/ChooseUs";
import Trainers from "../components/Home/Trainers";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <About />
      <Classes />
      <Feauters />
      <ChooseUs />
      <Trainers />
    </>
  );
};

export default Home;
