import React from "react";
import Home from "@/components/HomePage/Home";
import About from "@/components/About/about";
import Featured from "@/components/Featured/featured";
import ChooseUs from "@/components/ChooseUs/chooseUs";
import Trainers from "../components/Trainers/trainers";
import Gallery from "@/components/Gallery/gallery";
// import BMI from "@/components/BodyMassIndex/bmi";
import Pricing from "@/components/Pricing/pricing";
import Blog from "@/components/Blog/blog";
import CallBanner from "@/components/CallBanner/callBanner";
import Footer from "@/components/Footer/footer";

const index = () => {
  return (
    <>
      <Home />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Gallery />
      {/* <BMI /> */}
      <Pricing />
      <Blog />
      <CallBanner />
      <Footer />
    </>
  );
};

export default index;
