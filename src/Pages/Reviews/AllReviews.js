import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import SingleReview from "./SingleReview";

const AllReviews = ({ service }) => {
  const { _id } = service;
  //   console.log(service);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  //   console.log(reviews);
  //   const [refresh, setRefresh] = useState(false);

  //   const url = `http://localhost:5000/reviews?service=${service._id}`;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold dark:text-white my-3">
        What Clients Saying
      </h1>
      <div>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
