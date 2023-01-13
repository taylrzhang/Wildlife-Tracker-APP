import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Footer, AddButton } from "./parts.jsx";
import { useJsApiLoader } from "@react-google-maps/api";

import Map from "./map.jsx";

const ExplorePage = (props) => {
  // console.log(props.data);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCR9ofzXq6heqf1xQCmSM1MXfYhSCw6z9A",
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div>
      <Navbar className="justify-content-between px-3">
        <h2>Explore Page</h2>
        <AddButton />
      </Navbar>
      {/* <div id="map">map</div> */}
      <Map data={props.data} />
      <Footer />
    </div>
  );
};

export default ExplorePage;
