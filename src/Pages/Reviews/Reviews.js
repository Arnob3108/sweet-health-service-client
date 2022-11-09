import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import AllReviews from "./AllReviews";
import ReviewForm from "./ReviewForm";

const Reviews = ({ service }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <ReviewForm service={service} key={service._id}></ReviewForm>
      <AllReviews service={service} key={service._id}></AllReviews>
    </div>
  );
};

export default Reviews;
