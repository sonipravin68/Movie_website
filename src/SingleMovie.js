import React from "react";
import { useParams } from "react-router-dom";

const SingleMovies = () => {
  const { id } = useParams();
  console.log(id);

  return <div>SingleMovies {id} </div>;
};

export default SingleMovies;
