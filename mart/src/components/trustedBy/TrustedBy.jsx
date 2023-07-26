import React from "react";

import { ReactIcon } from "../../assets";
import "./TrustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted by: </span>
        <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
