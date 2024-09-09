import React from "react";
import { useParams } from "react-router-dom";

const Hello = () => {
  const { tripName } = useParams();
  console.log(tripName);
  return <div>demo</div>;
};

export default Hello;
