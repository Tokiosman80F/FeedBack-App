import React from "react";

function RatingSelected() {
  return (
    <ul>
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        ></input>
        <label htmlFor="num1">1</label>
      </li>
    </ul>
  );
}

export default RatingSelected;
