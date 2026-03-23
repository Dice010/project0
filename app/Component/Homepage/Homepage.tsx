import Carousel from "./Carousel_Homepage";
import Banner from "./Banner_Homepage";
import GridBooks from "./GridBooks_Homepage";
import AboutThisProject from "./AboutThisProject";
import Footer from "../Footer_Homepage";
import GridBox from "./GridBox";
import Navbar from "../Navbar";

export const Body_padding: number = 20; // Adjust this value based on your desired padding for the body content
export const Navbar_padding: number = 100; // Adjust this value based on your actual navbar height

export default function Homepage() {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <Carousel />
      <Banner />
      <GridBooks />
      <AboutThisProject />
      <GridBox />
      <Footer />
    </main>
  );
}
