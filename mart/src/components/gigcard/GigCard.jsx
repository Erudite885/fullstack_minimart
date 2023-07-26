import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { ReactIcon } from "../../assets";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["${item.userId}"], // fix this.
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "Loading..."
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || ReactIcon} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src={ReactIcon} alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src={ReactIcon} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
