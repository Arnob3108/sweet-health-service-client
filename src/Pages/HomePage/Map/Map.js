import React from "react";

const Map = () => {
  return (
    <div>
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold dark:text-white ml-[5%] lg:ml-[10%] capitalize">
          Check Our location on <br /> Google map
        </h1>
      </div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-full h-[46rem] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  US Bangla Medical & College, Rupshi, Narayangang, Dhaka-Sylhet
                  Road, Dhaka, Bangladesh.
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">
                  dr.sweety@gmail.com
                </a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Map;
