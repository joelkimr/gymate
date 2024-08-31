import React, { useState } from "react";
import Footer from "@/components/Footer/footer";
import Link from "next/link";

const Schedule = () => {
  const [selected, setSelected] = useState(0);
  const week = [
    {
      title: "Monday",
      activities: [
        {
          name: "Fitness",
          time: "9:00 AM - 10:00 PM",
          trainer: "Joel Park",
        },
        {
          name: "Body building",
          time: "10:00 PM - 11:00 PM",
          trainer: "John Wick",
        },
        {
          name: "Cycling",
          time: "4:00 PM - 5:00 PM",
          trainer: "Nicky John",
        },
        {
          name: "Running",
          time: "6:00 PM - 7:00 PM",
          trainer: "Robert Louis",
        },
      ],
    },
    {
      title: "Tuersday",
      activities: [
        {
          name: "Yoga",
          time: "6:00 AM - 8:00 PM",
          trainer: "???",
        },
        {
          name: "Karate",
          time: "9:00 PM - 11:00 PM",
          trainer: "Bruce Chen",
        },
        {
          name: "Cardio",
          time: "6:00 PM - 8:00 PM",
          trainer: "Alexandro Rela",
        },
        {
          name: "Fitness",
          time: "9:00 PM - 10:00 PM",
          trainer: "Louis Corolla",
        },
      ],
    },
    {
      title: "Wednesday",
      activities: [
        {
          name: "Power Lifitng",
          time: "7:00 AM - 9:00 PM",
          trainer: "Johnson Bell",
        },
        {
          name: "Boxing",
          time: "10:00 PM - 11:00 PM",
          trainer: "John Wick",
        },
        {
          name: "Cardio",
          time: "4:00 PM - 5:00 PM",
          trainer: "Juma Karim",
        },
        {
          name: "Running",
          time: "6:00 PM - 7:00 PM",
          trainer: "Robert Louis",
        },
      ],
    },
    {
      title: "Thursday",
      activities: [
        {
          name: "Yoga",
          time: "9:00 AM - 10:00 PM",
          trainer: "Jessi Palm",
        },
        {
          name: "Body building",
          time: "10:00 PM - 11:00 PM",
          trainer: "Carlos Mendez",
        },
        {
          name: "Karate",
          time: "4:00 PM - 5:00 PM",
          trainer: "Coach Bob",
        },
        {
          name: "Fitness",
          time: "6:00 PM - 7:00 PM",
          trainer: "Robert Louis",
        },
      ],
    },
    {
      title: "Friday",
      activities: [
        {
          name: "Crossing",
          time: "9:00 AM - 10:00 PM",
          trainer: "???",
        },
        {
          name: "Body building",
          time: "10:00 PM - 11:00 PM",
          trainer: "John Wick",
        },
        {
          name: "Cycling",
          time: "4:00 PM - 5:00 PM",
          trainer: "???",
        },
        {
          name: "Running",
          time: "6:00 PM - 7:00 PM",
          trainer: "???",
        },
      ],
    },
    {
      title: "Saturday",
      activities: [
        {
          name: "Karate",
          time: "9:00 AM - 10:00 PM",
          trainer: "Joel Park",
        },
        {
          name: "Body building",
          time: "10:00 PM - 11:00 PM",
          trainer: "John Wick",
        },
        {
          name: "Cycling",
          time: "4:00 PM - 5:00 PM",
          trainer: "???",
        },
        {
          name: "Running",
          time: "6:00 PM - 7:00 PM",
          trainer: "Robert Louis",
        },
      ],
    },
    {
      title: "Sunday",
      activities: [
        {
          name: "Yoga",
          time: "6:00 AM - 80:00 PM",
          trainer: "Sarah J.",
        },
        {
          name: "Body building",
          time: "10:00 PM - 11:00 PM",
          trainer: "John Wick",
        },
        {
          name: "Cycling",
          time: "4:00 PM - 5:00 PM",
          trainer: "Nicky John",
        },
        {
          name: "Running",
          time: "6:00 PM - 7:00 PM",
          trainer: "Robert Louis",
        },
      ],
    },
  ];

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-full">
          <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold">
            Schedule by Day
          </h1>
        </div>
        <div className="min-w-[60rem] xl:w-auto 2xl:w-[60%] mx-auto md:w-full">
          <div className="md:w-full flex flex-wrap md:gap-4 gap-12 justify-center mt-[4rem]">
            {week.map((day, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelected(key);
                  }}
                  className={`md:w-32 md:h-10 w-[22rem] lg:w-28 xl:w-40 h-20 inline-flex items-center justify-center text-center md:text-[16px]  text-[44px] border border-solid border-[#dee2e6] font-medium rounded-3xl  ease-in duration-300 hover:shadow-2xl hover:bg-[#ff0336] hover:text-white ${
                    selected === key
                      ? "bg-[#ff0336] text-white "
                      : "bg-none text-black"
                  }`}
                >
                  {day.title}
                </button>
              );
            })}
          </div>
          <div className="mt-[3rem] flex justify-center">
            <RowOne data={week[selected]} />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Schedule;

const RowOne = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="flex flex-col md:gap-3 gap-9 w-3/4 text-center">
      {data.activities.map((activity: any, key: number) => {
        return (
          <ul key={key} className="md:flex justify-between">
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="md:text-[14px] text-4xl font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="md:text-[18px] lg:text-[13px] xl:text-[18px] text-5xl text-black font-bold mt-3">
                {activity.name}
              </p>
            </li>

            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="md:text-[14px] text-4xl font-medium text-[#a0a0a0]">
                Time
              </p>
              <p className="md:text-[18px] lg:text-[13px] xl:text-[18px] text-5xl text-black font-bold mt-3">
                {activity.time}
              </p>
            </li>

            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="md:text-[14px] text-4xl font-medium text-[#a0a0a0]">
                Trainer
              </p>
              <p className="md:text-[18px] lg:text-[13px] xl:text-[18px] text-5xl text-black font-extrabold mt-3">
                {activity.trainer}
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex md:justify-end justify-center">
              <Link
                href="/joinClass"
                className="text-white md:text-[15px] text-4xl font-medium bg-[#555] md:py-[3px] lg:py-[1px] py-[25px] md:px-[20px] px-[35px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
              >
                Join Now
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
