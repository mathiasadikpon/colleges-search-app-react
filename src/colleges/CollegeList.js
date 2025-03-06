import React from "react";
import { Row } from "reactstrap";
import College from "./College";

const CollegeList = ({ colleges }) => {
  return (
    colleges &&
    colleges.length && (
      <Row className="m-1 ">
        {colleges.map((college, indx) => {
          return college && <College key={indx} college={college} />;
        })}
      </Row>
    )
  );
};

export default CollegeList;
