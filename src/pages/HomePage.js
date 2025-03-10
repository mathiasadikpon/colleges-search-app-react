import React, { useReducer, useState } from "react";
import SubHeader from "../components/SubHeader";
import { COLLEGESDATA } from "../app/shared/COLLEGESDATA";
import CollegeList from "../colleges/CollegeList";
import { Badge, Col, Row } from "reactstrap";
import SubHeaderHome from "../components/SubHeaderHome";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((college) => college.id !== action.payload.id);
    default:
      return state;
  }
};

const HomePage = () => {
  const [collegesSelected, dispatch] = useReducer(reducer, []);
  const [colleges, setColleges] = useState(COLLEGESDATA);
  return (
    <div style={{ minHeight: "53vh" }}>
      <SubHeaderHome current={"Home"} collegesSelected={collegesSelected} />
      <div
        className="m-3"
        style={{
          cursor: "default",
          minHeight: "30vh",
          minWidth: "50vw",
          display: "grid",
          placeContent: "center",
        }}
      >
        <h4>
          Welcome to College Search, your one-stop destination to find the best
          colleges around the world. We have a vast collection of colleges from
          various countries. You can search for colleges, view their details,
          and add them to your favorites. We hope you find the college of your
          dreams. Happy searching! <br />
          Tip:
          <br />
          - Click on the college name to view more details <br />- Click on{" "}
          <i>Go To Website</i> to visit the college website <br />- Click on the{" "}
          <i>+</i> icon to add the college to your favorites
          <br />- Click on the <i>Check</i> icon to remove the college from your
          favorites
        </h4>

        <div>
          <CollegeList colleges={colleges} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
