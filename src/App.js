import React from "react";
import logo from "./assets/Logo.png";
import background from "./assets/Image.png";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 bg-white relative rounded-lg lg:rounded-none">
          <div className="absolute top-8 left-8">
            <img src={logo} alt="Ruix Logo" className="w-24 h-auto" />
          </div>
          <div className="mt-24 w-4/5 lg:w-3/4 text-center">
            <h2 className="text-3xl font-bold mb-2">SIGN UP</h2>
            <p className="text-gray-600 mb-12">
              Create an account to get started.
            </p>
            <button className="flex items-center justify-center w-full py-2 mb-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <img
                className="w-5 h-5 mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
              />
              Continue With Google
            </button>
            <div className="flex items-center w-full mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-400">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <form className="w-full flex flex-col">
              <input
                className="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="password"
                placeholder="Password"
                required
              />
              <div className="flex items-center mb-4">
                <input className="mr-2" type="checkbox" id="remember-me" />
                <label className="text-gray-600" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              <button className="w-full py-2 mb-4 bg-black text-white rounded-lg hover:bg-gray-800">
                Register
              </button>
            </form>
            <p className="text-gray-600">
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