import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Feedback from "../components/Home/Feedback";
import Products from "../components/Home/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <FeaturedProducts></FeaturedProducts> */}
      <FeaturedProducts></FeaturedProducts>
      <Products></Products>
      <Feedback></Feedback>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;
