// Necessary Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Page Components
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/gallery/Gallery";
import Contact from "@/components/contact/Contact";

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
