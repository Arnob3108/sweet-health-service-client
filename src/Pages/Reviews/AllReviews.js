import React, { useContext, useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import SingleReview from "./SingleReview";

const AllReviews = ({ service }) => {
  const { _id } = service;
  //   console.log(service);
  const { loading, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  //   console.log(reviews);
  //   const [refresh, setRefresh] = useState(false);

  //   const url = `https://review-server-arnob3108.vercel.app/reviews?service=${service._id}`;

  useEffect(() => {
    fetch(`https://review-server-psi.vercel.app/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
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
