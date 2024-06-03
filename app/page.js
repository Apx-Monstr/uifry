// import Image from "next/image";
import "../app/globals.css"
import Advantage from "./components/Advantage";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Advantage/>
      <Testimonial/>
      <FAQ/>
      <Download/>
      <Footer/>
    </>
  );
}
