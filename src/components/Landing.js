import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Register from "../components/auth_components/Register";
import Login from "../components/auth_components/Login";
import { AiOutlineClose } from "react-icons/ai";

export default function Landing() {
  const [visible, setVisible] = useState({
    register: false,
    login: false,
  });

  const showRegistration = () => {
    setVisible({
      ...visible,
      register: true,
    });
  };

  const showLogin = () => {
    setVisible({
      ...visible,
      login: true,
    });
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div className="landing-page-wrapper">
      <h1>Welcome to Hot Takes!</h1>
      <Button onClick={showRegistration}>Register</Button>
      <Button onClick={showLogin}>Log in</Button>
      <Modal
        title="Basic Modal"
        onHide={handleCancel}
        show={visible.register}
        aria-labelledby="contained-modal"
        centered
      >
        <div>
          <AiOutlineClose
            style={{ fontSize: " 2rem", cursor: "pointer" }}
            onClick={handleCancel}
          />
        </div>
        <Register />
      </Modal>
      <Modal
        title="Basic Modal"
        onHide={handleCancel}
        show={visible.login}
        aria-labelledby="contained-modal"
        centered
      >
        <div>
          <AiOutlineClose
            style={{ fontSize: " 2rem", cursor: "pointer" }}
            onClick={handleCancel}
          />
        </div>
        <Login />
      </Modal>
    </div>
  );
}
