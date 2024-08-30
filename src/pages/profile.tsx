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
    <section>
      <div className="login-banner relative justify-center flex w-full">
        <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold md:block hidden">
          Profile
        </h1>
      </div>
      <div>
        <p>{user?.first_name}</p>
        <p>{user?.last_name}</p>
        <p>{user?.phone_number}</p>
        <p>{user?.course}</p>
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
          <option value="cycling">Cycling</option>
          <option value="yoga">Yoga</option>
          <option value="power lifting">Power Lifting</option>
          <option value="karate">Karate</option>
          <option value="boxing">Boxing</option>
          <option value="running">Running</option>
          <option value="body building">Body Building</option>
          <option value="crossing">Crossing</option>
          <option value="fitness">Fitness</option>
          <option value="cardio">Cardio</option>
        </select>
        <div>
          <button type="button" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
