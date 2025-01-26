import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import SuccessStoriesPage from "../components/Success";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <SuccessStoriesPage/>
      <Footer/>
    </>
  );
}
