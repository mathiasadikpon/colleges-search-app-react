import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

const College = ({ college, dispatch }) => {
  const { id, name, city, state, country, no_of_students, courses, website } =
    college;

  // State to track if the college is added
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    dispatch({ type: isAdded ? "ADD" : "REMOVE", payload: college });

  },[isAdded])

  return (
    <Col xs="12" sm="6" lg="4" className="p-2">
      <Card
        body
        className="bg-primary text-white m-1"
        // style={{ minWidth: "33%" }}
      >
        <CardBody>
          <Link
            to={`college/${id}`}
            className="text-white"
            style={{ cursor: "default", textDecoration: "none" }}
          >
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>
              <strong>Location:</strong> {city}, {state}, {country} <br />
              <strong>Students:</strong> {no_of_students.toLocaleString()}{" "}
              <br />
              <strong>Courses:</strong> {courses.join(", ")} <br />
            </CardText>
          </Link>
          <CardText>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className=" btn btn-warning text-white"
            >
              <strong>Go To Website:</strong>
            </a>
          </CardText>
        </CardBody>

        <CardFooter>
          {/* Clickable Icon with better contrast */}
          <i
            className={`fa ${
              isAdded ? "fa-check-circle" : "fa-plus-circle"
            } fa-lg`}
            style={{
              cursor: "pointer",
              padding: "3px",
              borderRadius: "50%",
              backgroundColor: isAdded ? "white" : "transparent",
              color: isAdded ? "green" : "white",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from triggering navigation
              setIsAdded(!isAdded);
              // dispatch({ type: isAdded ? "REMOVE" : "ADD", payload: college });
            }}
          />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default College;
