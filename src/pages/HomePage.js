import React, { useState } from "react";
import SubHeader from "../components/SubHeader";
import COLLEGESDATA from "../app/shared/COLLEGESDATA";
import CollegeList from "../colleges/CollegeList";

const HomePage = () => {
  const [colleges, setColleges] = useState(COLLEGESDATA);
  return (
    <div>
      <SubHeader current="Home" />
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              <h4>
                Welcome to the Home Page. When clicked on the each college, you
                can see the details of the college. You can also add the college
                to your list by clicking on the plus icon.
              </h4>
            </p>
            <CollegeList colleges={colleges} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
