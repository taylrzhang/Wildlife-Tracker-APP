import React, { useState, useEffect } from "react";
import { Footer } from "./parts.jsx";
import axios from "axios";

const AddAnimalPage = (props) => {
  const useInput = (init) => {
    const [value, setValue] = useState(init);
    const onChange = (e) => {
      setValue(e.target.value);
    };
    // return the value with the onChange function instead of setValue function
    return [value, onChange];
  };

  const [name, nameOnChange] = useInput("");
  const [type, typeOnChange] = useInput("");
  const [description, descriptionOnChange] = useInput("");
  const [nameError, setNameError] = useState(null);

  const saveAnimal = () => {
    if (name === "") {
      setNameError("required");
    }
    const body = {
      name,
      type,
      description,
    };
    axios
      .post("/api/addAnimal", body)
      .then((data) => {
        console.log(data);
        window.location = "/list";
      })
      .catch((err) =>
        console.log("CreateCharacter fetch /api/character: ERROR: ", err)
      );
  };

  useEffect(() => {
    setNameError(null);
  }, [name]);

  return (
    <div>
      <h2>Add Animal</h2>
      <form action="" className="add-animal-form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameOnChange}
        />
        {nameError ? <span>{nameError}</span> : null}
        <label>Type</label>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={typeOnChange}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={descriptionOnChange}
        />
        <button type="button" className="save-button" onClick={saveAnimal}>
          Save
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AddAnimalPage;
