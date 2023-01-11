import React from "react";
import { Routes, Route } from "react-router-dom";

import ExplorePage from "./components/explorePage.jsx";
import ListPage from "./components/listPage.jsx";
import AddAnimalPage from "./components/addAnimalPage.jsx";

import "./stylesheets/styles.css";

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Routes>
          <Route exact path="/" element={<ExplorePage />} />
          <Route exact path="/list" element={<ListPage />} />
          <Route exact path="/addAnimal" element={<AddAnimalPage />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
