import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import ExplorePage from "./components/explorePage.jsx";
import ListPage from "./components/listPage.jsx";
import AddAnimalPage from "./components/addAnimalPage.jsx";
// import AnimalProfile from "./components/animalProfile.jsx";

import "./stylesheets/styles.css";

const App = (props) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        // console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(
          "Characters.componentDidMount: get characters: ERROR: ",
          err
        );
      });
  }, []);

  return (
    <div className="router">
      <Routes>
        <Route exact path="/" element={<ExplorePage data={state} />} />
        <Route exact path="/list" element={<ListPage />} />
        <Route exact path="/addAnimal" element={<AddAnimalPage />} />
        {/* <Route exact path="/animalProfile" element={<AnimalProfile />} /> */}
      </Routes>
    </div>
  );
};
export default App;
