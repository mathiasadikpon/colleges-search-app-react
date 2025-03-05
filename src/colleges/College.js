import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";
const College = ({ college }) => {
  const { name, city, state, country, no_of_students, courses, website } =
    college;
  return (
    <Col xs="12" sm="6" md="4" lg = "3" > 
      <Card className="bg-primary text-white m-1" >
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>
            <strong>Location:</strong> {city}, {state}, {country} <br />
            <strong>Students:</strong> {no_of_students.toLocaleString()} <br />
            <strong>Courses:</strong> {courses.join(", ")} <br />
            <strong>Website:</strong>{" "}
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default College;
