import React from "react";
import { Helmet } from "react-helmet-async";
import img1 from "../../Assets/blogs/blog1.png";
import img2 from "../../Assets/blogs/blog2.png";
import img3 from "../../Assets/blogs/blog3.png";
import img4 from "../../Assets/blogs/blog4.png";

const Blogs = () => {
  return (
    <section>
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            From the blog
          </h1>

          <p class="max-w-lg mx-auto mt-4 text-gray-500 text-xl">
            Some Theory About Backend Devolopment
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              class="relative z-10 w-full rounded-md h-96"
              src={img1}
              alt=""
            />

            <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                Difference between SQL and NoSQL
              </a>

              <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                The main difference between SQL and NoSQL is that they are known
                as relational and non-relational database structures,
                respectively, that are used in different modes for implementing
                and manipulating data. The data storage and data management
                systems are highly biased by these terms for their structure and
                arrangement, which helps to maintain the data structure as per
                requirements and needs.
              </p>

              <p class="mt-3 text-sm text-blue-500">08 November 2022</p>
            </div>
          </div>

          <div>
            <img
              class="relative z-10 w-full rounded-md h-96"
              src={img2}
              alt=""
            />

            <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                What is JWT, and how does it work?
              </a>

              <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>

              <p class="mt-3 text-sm text-blue-500">09 November 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              class="relative z-10 object-cover w-full rounded-md h-96"
              src={img3}
              alt=""
            />

            <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                What is the difference between javascript and NodeJS?
              </a>

              <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Difference between JavaScript and Node.js JavaScript is a proper
                high-level programming language used to create web scripts
                whereas Node.js is a run time environment built on google’s v8
                engine. JavaScript is executed in the browser whereas using
                Node.js gives us the ability to execute JavaScript outside the
                browser.
              </p>

              <p class="mt-3 text-sm text-blue-500">10 November 2022</p>
            </div>
          </div>

          <div>
            <img
              class="relative z-10 w-full rounded-md h-96"
              src={img4}
              alt=""
            />

            <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                How does NodeJS handle multiple requests at the same time?
              </a>

              <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. <br /> If NodeJS can process the
                request without I/O blocking then the event loop would itself
                process the request and sends the response back to the client by
                itself. But, it is possible to process multiple requests
                parallelly using the NodeJS cluster module or worker_threads
                module.
              </p>

              <p class="mt-3 text-sm text-blue-500">11 November 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Blog - Sweet Health</title>
      </Helmet>
    </section>
  );
};

export default Blogs;
