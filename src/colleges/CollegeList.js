import React from "react";
import {  Row } from "reactstrap";
import College from "./College";

const CollegeList = ({ colleges }) => {
  return (
    <Row className="m-1 p-3 bg-warning">
      {colleges.map((college, indx) => {
        return <College key={indx} college={college} />;
      })}
    </Row>
  );
};

export default CollegeList;
