import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Tarrif from "./components/Tarrif";
import Client from "./components/Client";
import Gallery from "./components/Gallery";
import Owned from "./components/Owned";
import ContactME from "./components/ContactME";
import Footer from "./components/Footer";
import Facilities from "./components/Facilities";
import Experiences from "./components/Experiences";

export default function Home() {
  return (
   <div className="">

      <Header/>
      <Navbar/>
     <section id="home"><Main/></section>
      <section id="about"><About/></section>
      <section id="facilities"><Facilities/></section>
      <section id="tarrif"><Tarrif/></section>
      <section id="clients"><Client/></section>
      <section id="gallery"><Gallery/></section>
      <section id="owned"><Owned/></section>  
      <section id="experiences"><Experiences/></section>
      <section id="contact"><ContactME/></section>
      <Footer/>
   </div>
  );
}
