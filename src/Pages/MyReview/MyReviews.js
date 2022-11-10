import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://review-server-arnob3108.vercel.app/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You Sure, You Want To Delete Your Feedback?"
    );
    if (proceed) {
      fetch(`https://review-server-arnob3108.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            const remaining = myReviews.filter((feed) => feed._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center dark:text-white font-bold my-5">
        Your Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myReviews.map((feedbacks) => (
          <MyReview
            key={feedbacks._id}
            feedbacks={feedbacks}
            handleDelete={handleDelete}
          ></MyReview>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
