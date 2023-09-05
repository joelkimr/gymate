import React from "react";
import Home from "@/components/HomePage/Home";
import About from "@/components/About/about";
import Featured from "@/components/Featured/featured";
import ChooseUs from "@/components/ChooseUs/chooseUs";
import Trainers from "../components/Trainers/trainers";
import Gallery from "@/components/Gallery/gallery";
import Pricing from "@/components/Pricing/pricing";
import Blog from "@/components/Blog/blog";
import CallBanner from "@/components/CallBanner/callBanner";
import Footer from "@/components/Footer/footer";

const index = () => {
  return (
    <>
      <div className='w-full h-auto'>
        <Home />
        <About />
        <Featured />
        <ChooseUs />
        <Trainers />
        <Gallery />
        <Pricing />
        <Blog />
        <CallBanner />
        <Footer />
      </div>
    </>
  );
};

export default index;
