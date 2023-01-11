import React, { Component } from "react";
import { Link } from "react-router-dom";

const ExplorePage = (props) => {
  return (
    <div>
      <h1>Explore Page</h1>
      <div>map</div>
      <Link to="/list">
        <button>list</button>
      </Link>
      <Link to="/addAnimal">
        <button>addAnimal</button>
      </Link>
    </div>
  );
};

export default ExplorePage;
