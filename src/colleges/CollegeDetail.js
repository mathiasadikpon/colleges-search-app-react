import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody, Col } from "reactstrap";
import { findCollegeById } from "./collegeSlice";
import { useParams } from "react-router-dom";
const CollegeDetail = () => {
  const { collegeId } = useParams();
  const college = findCollegeById(collegeId);
  const { name, city, state, country, no_of_students, courses, website } =
    college;
  return (
    <Col md="5" className="m-1 text-center ">
      <Card
        className="bg-primary text-white m-1 "
        style={{ cursor: "default", minHeight:"50vh", minWidth:"53vw" }}
      >
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>
            <strong>Location:</strong> {city}, {state}, {country} <br />
            <strong>Students:</strong> {no_of_students.toLocaleString()} <br />
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
      </Card>
    </Col>
  );
};

export default CollegeDetail;
