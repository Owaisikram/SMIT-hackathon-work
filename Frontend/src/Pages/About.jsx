import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar />
      <section className="about-section">
        <div className="container2">
          <div className="about-content">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Qarz e Hasana is a microfinance platform designed to provide
              interest-free loans to individuals in need. Our mission is to
              support the community by offering financial assistance in a
              transparent and accessible way.
            </p>
            <p className="about-description">
              We believe that everyone deserves a chance to grow, and our goal
              is to empower people to achieve their dreams without the burden of
              high-interest rates. Join us today and be part of a greater cause.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647252901/website-images/static/58.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </section>
      <br />
      <section className="about-section">
        <div className="container2">
          <div className="about-content">
            <h2 className="about-title">Chairman Message</h2>
            <p className="about-description">
              Qarz e Hasana is a microfinance platform designed to provide
              interest-free loans to individuals in need. Our mission is to
              support the community by offering financial assistance in a
              transparent and accessible way.
            </p>
            <p className="about-description">
              Alhamdollilah, Allah has accorded Saylani Welfare with the highest
              favor by sending those people our way who follow the teachings of
              the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and
              other donations to help us help those in need. The purpose of
              sending this message to you is so that you not only spread this
              message to others but also play your part in helping us to
              continue serving and helping the needy till the Day of Judgment.
              <h5 className="chairman">Muhammad Bashir Farooq</h5> <span>Chairman Saylani Welfare</span>
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647964514/website-images/static/62.jpg"
              alt="Chaiman message"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
