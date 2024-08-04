import React from "react";
import Footer from "@/components/Footer/footer";

const Classes = () => {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]">
          <h1 className="text-white absolute bottom-8 md:text-[30px] text-[50px] font-bold">
            Classes
          </h1>
        </div>
        <div className="w-full h-80 flex items-center justify-center text-4xl font-bold  lg:min-w-[70rem] md:min-w-[73rem] min-w-[60rem] ">
          <p>Coming soon ...</p>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Classes;
