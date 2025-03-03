import React from "react";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
  return (
    <div>
      <SubHeader current="Home" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Home Page</h2>
            <p>
              Welcome to the Home Page. This is where you can provide a brief
              overview of your application and what it does. You can also
              provide links to other parts of your application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
