import React from "react";

import SubHeader from "../components/SubHeader";
import CollegeDetail from "../colleges/CollegeDetail";

const CollegeDetailPage = () => {
  return (
    <div className="m-3" style={{minHeight:"53vh"}}>
      <SubHeader current="College Details" />
      <div style={{ cursor: "default", minHeight:"30vh", minWidth:"50vw",display:"grid", placeContent:"center" }} >
      <p>
        
        <h4>
          Welcome to details page. Here you can view the details of the college.
        </h4>
      </p>

      <CollegeDetail /></div>
    </div>
  );
};

export default CollegeDetailPage;
