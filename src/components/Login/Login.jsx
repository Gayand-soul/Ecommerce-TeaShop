import React from "react";
import Loginimage1 from "../../assets/images/Loginimage1.jpg";

function Login() {
  return (
    <div id="login-section"   className="min-h-screen flex">
      {/* Vänster sida med bild */}
      <div className="w-1/2 hidden md:block  mt-10 ml-10">
            <img
            src={Loginimage1}
            alt="Login visual"
            className="w-full h-full object-cover rounded-3xl"
            />
      </div>

      {/* Höger sida med formulär */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
            Create Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="primary-btn"
              >
                Create an Account
              </button>
            </div>
          </form>

          <hr className="my-6" />

          {/* Inloggningssektion */}
          <div className="mt-8">
            <p className="text-gray-700 mb-4">Already have an account?</p>

            <form className="space-y-4">
              <div>
                <label className="block text-left text-sm font-medium text-gray-700">
                  Username or Email
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="primary-btn"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
