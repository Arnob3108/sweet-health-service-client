import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const ReviewForm = ({ service }) => {
  const { name, img, _id, tagLine, date, time, discription } = service;
  const { user } = useContext(AuthContext);

  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user?.displayName || form.userName.value;
    const email = user?.email || "unregistered";
    const feedback = form.feedback.value;

    const reviews = {
      service: _id,
      serviceName: name,
      user: userName,
      email,
      feedback,
    };

    fetch("http://localhost:5000/reviews");
  };

  return (
    <form onSubmit={handleFeedback} className="w-full">
      <input
        type="text"
        name="userName"
        defaultValue={user?.displayName}
        placeholder="Your name here"
        className="input input-bordered input-info w-[80%] ml-[10%]"
      />
      <input
        type="text"
        name="email"
        defaultValue={user?.email}
        readOnly
        placeholder="Your email here"
        className="input input-bordered input-info w-[80%] ml-[10%] my-4"
      />
      <textarea
        className="textarea textarea-info w-[80%] ml-[10%]"
        placeholder="Feedback"
        name="feedback"
      ></textarea>
      <button className="btn btn-ghost w-80 ml-[18%] ">Give Feedback</button>
    </form>
  );
};

export default ReviewForm;
