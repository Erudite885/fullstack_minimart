import React from "react";
import { useQuery } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest";
import "./Review.scss";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="review">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img src={data.img || ReactIcon} alt="" className="pp" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}

      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src={"/img/star.png" || ReactIcon} alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src={ReactIcon} alt="" />
        <span>Yes</span>
        <img src={ReactIcon} alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
