'use client';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import About from "../../components/About";
import Skills from "../../components/Skills";
import InternshipSection from "../../components/experience";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Project from "../../components/Project";


export default function Home() {
  return (
  <>
  <Navbar/>
  <Header/>
  <About/>
  <Skills/>
  <InternshipSection/>
  <Project/>
  <Contact/>
  <Footer/>
  </>
  );
}
