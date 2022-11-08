import React, { useEffect, useState } from "react";
import AllService from "./AllService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>this is services {services.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-10">
        {services.map((service) => (
          <AllService key={service._id} service={service}></AllService>
        ))}
      </div>
    </div>
  );
};

export default Services;
