import React, { useState } from "react";
import { use } from "react";
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from "../../provider/Authprovider";
import { NavLink, useNavigate } from "react-router";

const Myprofile = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile } = use(AuthContext);
  const [sucessful,setsucsecful] = useState(false)

  const updateHandler = (e) => {
    e.preventDefault();
    // console.log("update btn was cliked");
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({displayName: name , photoURL: photo})
    .then(()=>{
        setsucsecful(true)
        e.target.reset()
        
    })
    .catch(()=>{
      
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-sm w-full max-w-lg p-8 relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-offset-2 ring-gray-100">
                <img src={user.photoURL} alt="profile" />
              </div>
            </div>

            <button className="absolute bottom-0 right-0 bg-white border border-gray-200 p-1.5 rounded-full shadow-sm">
              <svg
                xmlns="http://w3.org"
                className="h-3 w-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-800">
              {user.displayName}
            </h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="divider opacity-50"></div>

        <form onSubmit={updateHandler}>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="text-gray-700 font-medium">Name</span>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="text-right bg-transparent border-none focus:outline-none text-gray-500 w-full"
              />
            </div>

            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="text-gray-700 font-medium">Photo</span>
              <input
                type="url"
                name="photo"
                placeholder="photo Url"
                className="text-right bg-transparent border-none focus:outline-none text-gray-500 w-full"
              />
            </div>

            <div className="mt-10 flex items-center justify-between">
          <button type="submit"
            className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none normal-case px-8 rounded-lg text-white"
          >
            Update Information
          </button>
          <button
            onClick={() => navigate("/")}
            className="btn btn-active btn-success text-white"
          >
            Bact to home
          </button>
        </div>
          </div>
        </form>

        

        {sucessful && <h2 className="text-green-500 font-bold">Update Sucessfull</h2>}
      </div>
    </div>
  );
};

export default Myprofile;
