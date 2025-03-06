import { Row } from "reactstrap";
import College from "./College";

const CollegeList = ({ colleges, dispatch }) => {
  return (
    colleges &&
    colleges.length && (
      <Row className="m-1 ">
        {colleges.map((college, indx) => {
          return (
            college && (
              <College key={indx} college={college} dispatch={dispatch} />
            )
          );
        })}
      </Row>
    )
  );
};

export default CollegeList;
