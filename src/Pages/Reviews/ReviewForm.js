import React, { useContext } from "react";
import toast from "react-hot-toast";
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
      userName: userName,
      email,
      feedback,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thanks for your valuable feedback.");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
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
      <button className="btn btn-active btn-ghost hover:bg-indigo-500 hover:dark:text-white w-80 ml-[10%] lg:ml-[18%] ">
        Give Feedback
      </button>
    </form>
  );
};

export default ReviewForm;
