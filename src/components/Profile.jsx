import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email = currentUser.email || "";
        const name = localStorage.getItem("popx_name") || "";
        setUser({ name, email });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f7] flex items-start justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-medium text-gray-700">Account Settings</h2>
        </div>
        <div className="px-6 py-6 flex flex-col items-start">
          <div className="flex items-center mb-4 w-full">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-[#a259ff] rounded-full p-1">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M12 5.9c-3.37 0-6.1 2.73-6.1 6.1s2.73 6.1 6.1 6.1 6.1-2.73 6.1-6.1-2.73-6.1-6.1-6.1zm0 11c-2.71 0-4.9-2.19-4.9-4.9s2.19-4.9 4.9-4.9 4.9 2.19 4.9 4.9-2.19 4.9-4.9 4.9zm0-8.1c-1.77 0-3.2 1.43-3.2 3.2s1.43 3.2 3.2 3.2 3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2z"/>
                </svg>
              </span>
            </div>
            <div className="ml-4">
              <div className="font-bold text-gray-900">{user.name || "Loading name..."}</div>
              <div className="text-gray-500 text-sm">{user.email || "Loading email..."}</div>
            </div>
          </div>
          <div className="text-gray-600 text-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
          </div>
        </div>
        <div className="border-t border-dashed border-gray-200 h-80 bg-[#f6f6f7]"></div>
      </div>
    </div>
  );
};

export default Profile;
