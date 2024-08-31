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
      <div className="lg:w-5/12 md:w-6/12 w-11/12 mx-auto md:mt-8 mt-16 md:mb-20 mb-36 relative z-[9] border-[1px] border-black/30">
        <div className="w-full flex flex-col bg-white pb-6">
          <div className="w-full flex flex-row justify-start p-4">
            <div className="w-32 h-32 rounded-full border-[1px] border-black/30 flex items-center justify-center">
              <GoPersonFill className="text-8xl text-black/30" />
            </div>
            <div className="w-3/4 flex flex-col justify-center p-4 space-y-2">
              <p>
                First Name :{" "}
                <span className="font-bold">{user?.first_name}</span>
              </p>
              <p>
                Last Name : <span className="font-bold">{user?.last_name}</span>
              </p>
              <p>Telephone Number : {user?.phone_number}</p>
            </div>
          </div>
          <div className="w-2/3 pl-12">
            <p className="font-bold">
              Category : <span className="text-[#FF0336] ml-8">Advanced</span>
            </p>
          </div>
        </div>
        <div className=" w-full bg-red-100 flex flex-row justify-around p-4 mt-6">
          <div>
            <p className="flex items center gap-2">
              <IoPersonOutline className="text-xl text-black/50" />
              My Account
            </p>
          </div>
          <div>
            <button type="button" onClick={handleSignout}>
              <p className="flex items center gap-2 text-red-400 hover:text-[#FF0336]">
                <PiSignOutDuotone className="text-xl" />
                Sign out
              </p>
            </button>
          </div>
        </div>
        <div className="mx-12 mt-6">
          <p className="text-black/60">
            {" "}
            Selected class :{" "}
            <span className="font-bold text-xl text-black">
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
            className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-sm md:p-2 p-8 py-4 md:mt-4 mt-20 text-gray-700 focus:outline-none md:text-sm text-4xl"
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
        <div className="w-full p-6 text-center mt-6 bg-white mb-20">
          <h3 className="text-xl font-bold">Days of the Week</h3>
          <div className="flex flex-row justify-evenly mt-6">
            <p>Monday</p>
            <p className="text-black/40">4:00pm - 7:00pm</p>
          </div>
          <div className="flex flex-row justify-evenly mt-3">
            <p>Wednesday</p>
            <p className="text-black/40">8:00am - 10:00am</p>
          </div>
          <div className="flex flex-row justify-evenly mt-3">
            <p>Friday</p>
            <p className="text-black/40">9:00am - 1:00pm</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Profile;
