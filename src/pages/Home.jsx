import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import FeaturedCategories from '../components/sections/FeaturedCategories';
import Footer from '../components/layout/Footer';
import FeaturedProducts from "../components/sections/FeaturedProducts";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;