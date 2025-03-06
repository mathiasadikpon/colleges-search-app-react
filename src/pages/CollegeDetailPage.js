import React from "react";

import SubHeader from "../components/SubHeader";
import CollegeDetail from "../colleges/CollegeDetail";

const CollegeDetailPage = () => {
  return (
    <div className="m-3" style={{minHeight:"53vh"}}>
      <p>
        <SubHeader current="College Details" />
        <h4>
          Welcome to details page. Here you can view the details of the college.
        </h4>
      </p>

      <CollegeDetail />
    </div>
  );
};

export default CollegeDetailPage;
