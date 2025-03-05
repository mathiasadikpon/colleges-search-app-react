import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

const College = ({ college }) => {
  const { id, name, city, state, country, no_of_students, courses, website } =
    college;

  // State to track if the college is added
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Col xs="12" sm="6" lg="3" className="p-2">
      <Card className="bg-primary text-white m-1 shadow">
        <Link
          to={`/${id}`}
          className="text-white"
          style={{ cursor: "default", textDecoration: "none" }}
        >
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>
              <strong>Location:</strong> {city}, {state}, {country} <br />
              <strong>Students:</strong> {no_of_students.toLocaleString()}{" "}
              <br />
              <strong>Courses:</strong> {courses.join(", ")} <br />
              <strong>Website:</strong>{" "}
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {website}
              </a>
            </CardText>
          </CardBody>
        </Link>
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
            }}
          />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default College;
