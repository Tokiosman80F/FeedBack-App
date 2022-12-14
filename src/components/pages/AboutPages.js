import React from "react";
import Card from "../../shared/Card";
import { Link } from "react-router-dom";
function AboutPages() {
  return (
    <Card>
      <h3>About Page</h3>
      <p> This is a React App. </p>
      <p> This FeedBack app store the users reviews of a Product/Services </p>
      <p>Version: 1.00.1</p>
      <Link to="/">
        <p>Back to HOME</p>
      </Link>
    </Card>
  );
}

export default AboutPages;
