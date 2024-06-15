import React from "react";
import logo from "./assets/Logo.png";
import google from "./assets/google.png";
import background from "./assets/Image.png";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex flex-col lg:flex-row w-full lg:w-5/6 max-w-5xl bg-white shadow-lg rounded-[40px] overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 bg-white relative">
          <div className="absolute top-8 left-8">
            <img src={logo} alt="Ruix Logo" className="w-28 h-auto" />
          </div>
          <div className="mt-24 w-4/5 lg:w-3/4 text-center">
            <h2 className="text-3xl font-bold mb-2">SIGN UP</h2>
            <p className="text-gray-600 mb-12">
              Create an account to get started.
            </p>
            <button className="flex items-center justify-center w-full py-2 mb-6 border border-gray-300 rounded-md hover:bg-gray-100">
              <img className="w-5 h-5 mr-2" src={google} alt="Google Logo" />
              Continue With Google
            </button>

            <div className="flex items-center justify-center w-full mb-6">
              <hr className="w-1/4 sm:w-1/5 border-t border-gray-300 my-0 mr-2" />
              <span className="px-2 text-gray-400 text-sm">Or</span>
              <hr className="w-1/4 sm:w-1/5 border-t border-gray-300 my-0 ml-2" />
            </div>
            <form className="w-full flex flex-col mb-4">
              <input
                className="px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="password"
                placeholder="Password"
                required
              />
              <div className="flex items-center mb-4">
                <input className="mr-2" type="checkbox" id="remember-me" />
                <label className="text-gray-600 text-sm" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              <button className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800">
                <p className="text-sm m-0">Register</p>
              </button>
            </form>
            <p className="text-gray-600 mb-12">
              Already have an account?{" "}
              <a className="text-yellow-500 hover:underline" href="#">
                Log in
              </a>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gray-200 rounded-lg lg:rounded-none">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-lg lg:rounded-none"
              src={background}
              alt="Artistic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
