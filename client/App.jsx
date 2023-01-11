import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

// // import explorePage from "./components/explorePage.jsx";
// import listPage from "./components/listPage.jsx";
// import addAnimalPage from "./components/addAnimalPage.jsx";

import "./stylesheets/styles.css";

const listPage = (props) => {
  return (
    <div>
      <h1>Animal List</h1>
      <ul>
        <li>Marmot</li>
        <li>Raccoon</li>
        <li>Coyote</li>
      </ul>
    </div>
  );
};

const addAnimalPage = (props) => {
  return (
    <div>
      <h1>Add Animal</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Type" />
      <input type="text" placeholder="Description" />
    </div>
  );
};

const App = (props) => {
  return (
    <div className="router">
      <main>
        <h1>Explore Page</h1>
        <div>map</div>
        <Routes>
          {/* <Route exact path="/" component={<explorePage />} /> */}
          <Route exact path="/api/list" element={<listPage />} />
          <Route exact path="/api/addAnimal" element={<addAnimalPage />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
