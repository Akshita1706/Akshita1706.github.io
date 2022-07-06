import React from "react";
import "./Home_body.css";
import { Link } from "react-router-dom";

function Home_body() {
  return (
    <div className="home_body">
      <div className="home_bodyLeft">
        <img
          src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/12/12165612/QTOM1-1024x683.jpg"
          alt=""
        />
      </div>
      <div className="home_bodyRight">
        <img src="https://internship.thesparksfoundation.info/assests/img/logo.png" />

        <h2>Sparks Bank</h2>
        <Link to="/pg2">
          {" "}
          <button type="submit">Customer Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Home_body;
