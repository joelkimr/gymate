import { auth, db } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoPersonFill } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { PiSignOutDuotone } from "react-icons/pi";
import Footer from "@/components/Footer/footer";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [docId, setDocId] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");

    if (!auth.currentUser && user_id === null) {
      router.push("/login");
    } else {
      if (user === null && user_id) {
        fetchUserInfo();
      }
    }
  }, []);
  console.log({ user });

  const handleSignout = async () => {
    await auth.signOut();
    localStorage.clear();
    router.push("/login");
  };

  const fetchUserInfo = async () => {
    const user_id = auth.currentUser?.uid
      ? auth.currentUser.uid
      : localStorage.getItem("user_id");

    const dataCollection = collection(db, "userInfo");
    const value = query(dataCollection, where("user_id", "==", user_id));
    const data = await getDocs(value);
    data.forEach((doc) => {
      const dataFromFirebaseDb: any = doc.data();
      setUser(dataFromFirebaseDb);
      setDocId(doc.id);
    });
  };

  const handleClasses = async (course: string) => {
    const ref = await doc(db, "userInfo", docId);
    await updateDoc(ref, { course });
    await fetchUserInfo();
  };

  return (
    <section className="login-section">
      <div className="login-banner relative justify-center flex w-full">
        <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold md:block hidden">
          My Profile
        </h1>
      </div>
      <p className="text-7xl text-center block md:hidden mx-auto mt-20">
        My Profile
      </p>
      <div className="xl:w-5/12 lg:w-7/12 md:w-7/12 w-11/12 mx-auto md:mt-8 mt-16 md:mb-20 mb-36 relative z-[9] border-[4px] md:border-[1px] border-black/30 rounded-lg">
        <div className="w-full flex flex-col bg-white md:pb-6 pb-32 rounded-tl-lg rounded-tr-lg">
          <div className="w-full flex flex-row justify-start md:p-4 p-12 gap-8 md:gap-0">
            <div className="md:w-32 w-52 md:h-32 h-52 rounded-full border-[1px] border-black/30 flex items-center justify-center">
              <GoPersonFill className="text-8xl text-black/30" />
            </div>
            <div className="w-3/4 flex flex-col justify-center p-4 md:space-y-2 space-y-6">
              <p className="md:text-lg text-[42px]">
                First Name :{" "}
                <span className="font-bold">{user?.first_name}</span>
              </p>
              <p className="md:text-lg text-[42px]">
                Last Name : <span className="font-bold">{user?.last_name}</span>
              </p>
              <p className="md:text-lg text-[42px]">
                Phone Number : {user?.phone_number}
              </p>
            </div>
          </div>
          <div className="w-2/3 pl-12">
            <p className="font-bold md:text-lg text-[42px]">
              Category :{" "}
              <span className="text-[#FF0336] ml-8 md:text-xl text-6xl">
                Advanced
              </span>
            </p>
          </div>
        </div>
        <div className=" w-full bg-red-100 flex flex-row justify-around md:p-4 p-8 md:mt-6 mt-28">
          <div>
            <p className="flex items-center gap-2 md:text-lg text-[42px]">
              <IoPersonOutline className="text-black/50 md:text-xl text-5xl" />
              My Account
            </p>
          </div>
          <div>
            <button type="button" onClick={handleSignout}>
              <p className="flex items-center gap-2 text-[#FF0336] hover:text-red-400  md:text-lg text-[42px]">
                <PiSignOutDuotone className=" md:text-xl text-5xl" />
                Sign out
              </p>
            </button>
          </div>
        </div>
        <div className="mx-12 md:mt-6 mt-24">
          <p className="text-black/60 md:text-xl text-5xl">
            {" "}
            Selected class :{" "}
            <span className="font-bold md:text-xl text-7xl text-black">
              {" "}
              {user?.course}
            </span>
          </p>
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value !== "#") {
                handleClasses(value);
              }
            }}
            name="classes"
            id="class"
            className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-sm md:p-2 p-8 py-4 md:mt-4 mt-20 text-gray-700 focus:outline-none md:text-xl text-5xl"
          >
            <option value="#">Select Class</option>
            <option value="Cycling">Cycling</option>
            <option value="Yoga">Yoga</option>
            <option value="Power Lifting">Power Lifting</option>
            <option value="Karate">Karate</option>
            <option value="Boxing">Boxing</option>
            <option value="Running">Running</option>
            <option value="Body building">Body Building</option>
            <option value="Crossing">Crossing</option>
            <option value="Fitness">Fitness</option>
            <option value="Cardio">Cardio</option>
          </select>
        </div>
        <div className="w-full md:p-6 p-20 text-center md:mt-6 mt-28 bg-gray-100">
          <h3 className="md:text-xl text-5xl font-bold underline">
            Days of the Week
          </h3>
          <div className="flex flex-row justify-evenly md:mt-6 mt-20">
            <p className="md:text-xl text-[42px]">Monday</p>
            <p className="text-black/40 md:text-xl text-[42px]">
              4:00pm - 7:00pm
            </p>
          </div>
          <div className="flex flex-row justify-evenly md:mt-3 mt-11">
            <p className="md:text-xl text-[42px]">Wednesday</p>
            <p className="text-black/40 md:text-xl text-[42px]">
              8:00am - 10:00am
            </p>
          </div>
          <div className="flex flex-row justify-evenly md:mt-3 mt-11">
            <p className="md:text-xl text-[42px]">Friday</p>
            <p className="text-black/40 md:text-xl text-[42px]">
              9:00am - 1:00pm
            </p>
          </div>
        </div>
        <div className="text-center mx-auto md:mt-10 mt-28 md:mb-20 mb-48">
          <p className="text-green-400 md:text-lg text-[42px]">
            your changes are automatically saved!
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Profile;
