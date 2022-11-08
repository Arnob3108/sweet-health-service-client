import React, { useContext, useState } from "react";
import logo from "../../Assets/logo.png";
import img from "../../Assets/register.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, userProfileUpdate, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateProfile(name, photoUrl);
        navigate(from, { replace: true });
        toast.success("Registration Successfull");
        toast.success("verify your email to login");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdateProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    userProfileUpdate(profile)
      .then(() => toast.success("Profile Updated"))
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div class="flex my-[3%] shadow-2xl shadow-slate-500/50 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 lg:max-w-4xl">
      <div
        class="hidden bg-cover lg:block lg:w-1/2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <img className="w-10 h-10 mx-auto rounded-full" src={logo} alt="" />
        <h2 class="text-3xl uppercase font-semibold text-center text-gray-700 dark:text-white">
          Sweet health
        </h2>

        <p class="text-lg text-center text-gray-600 dark:text-gray-200">
          Welcome!
        </p>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <p class="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            Sign UP with email
          </p>

          <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="userName"
            >
              USER NAME
            </label>
            <input
              id="userName"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="user name"
              name="name"
              required
            />
          </div>
          <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="photoUrl"
            >
              Photo URL
            </label>
            <input
              id="photoUrl"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Your photo url"
              name="photoUrl"
              required
            />
          </div>
          <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>

          <div class="mt-4">
            <div class="flex justify-between">
              <label
                class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword"
              >
                Password
              </label>
              <a
                href="#"
                class="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              id="loggingPassword"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
              required
              placeholder="Your Password"
            />
          </div>

          <div class="mt-8">
            <button class="w-full px-4 py-2 glass tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Sign Up
            </button>
            <p>
              <small className="text-red-600">{error}</small>
            </p>
          </div>
        </form>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/signin"
            class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            have account? sign in
          </Link>

          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
