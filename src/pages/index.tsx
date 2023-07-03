import React from "react";
import Home from "@/components/HomePage/Home";
import About from "@/components/About/about";
import Featured from "@/components/Featured/featured";
import ChooseUs from "@/components/ChooseUs/chooseUs";

const index = () => {
  return (
    <>
      <Home />
      <About />
      <Featured />
      <ChooseUs />
    </>
  );
};

export default index;
