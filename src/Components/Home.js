import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/teacher");
        }}
      >
        Teacher
      </Button>
      <Button
        onClick={() => {
          navigate("/student");
        }}
      >
        Student
      </Button>
    </div>
  );
}

export default Home;
