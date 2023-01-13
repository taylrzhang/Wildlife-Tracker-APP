import React, { useState } from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Footer, AddButton } from "./parts.jsx";

const ListPage = (props) => {
  // console.log(props.data);
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState([]);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  React.useEffect(() => {
    axios
      .get("/api/list")
      .then((res) => {
        console.log(res.data);
        setAnimals(res.data);
      })
      .catch((err) => {
        console.log(
          "Characters.componentDidMount: get characters: ERROR: ",
          err
        );
      });
  }, []);

  const handleShow = () => {
    setFullscreen(true);
    setShow(true);
  };
  const nameList = [];

  animals.forEach((animal, i) => {
    console.log(animal._id);
    nameList.push(
      <li
        className="animal-list-item"
        onClick={() => {
          handleShow();
          setAnimal(animal);
        }}
        key={i}
      >
        <img className="animal-img" src={animal.img} />
        <div className="animal-list-body">
          <span className="animal-list-name">{animal.name}</span>
          <span className="animal-list-type">{animal.type}</span>
        </div>
      </li>
    );
  });

  const deleteAnimal = (id) => {
    axios
      .delete(`/api/list/${id}`)
      .then((res) => {
        console.log("Data deleted and responsed");
        setAnimals(res.data);
      })
      .catch((err) => console.log(err));
    setShow(false);
  };

  return (
    <div>
      <main>
        <Navbar className="justify-content-between px-3">
          <h2>Animal List</h2>
          <AddButton />
        </Navbar>
        <div>
          <ul className="animal-list">{nameList}</ul>
        </div>
        <Footer />
      </main>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{animal.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="animal-profile-img" src={animal.img} />
          <label>Type</label>
          <p>{animal.type}</p>
          <label>Description</label>
          <p>{animal.description}</p>
          <div id="locations"> map</div>
          <Button
            className="delete"
            variant="outline-danger"
            onClick={() => deleteAnimal(animal._id)}
          >
            delete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListPage;
