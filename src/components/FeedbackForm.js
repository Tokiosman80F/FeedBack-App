import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelected from "./RatingSelected";

function FeedbackForm({ handleAdd }) {
  // ========== USE STATE ==============

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  // ==========HANDLE TEXT CHANGE==============
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length <= 10 && text !== "") {
      setBtnDisabled(true);
      setMessage("Feed back is less than 10 character");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  // ==========HANDLE SUBMIT==============
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };
  // ========== RETRUN START==============
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would u rate us?</h2>
        <RatingSelected select={(rating) => setRating(rating)}></RatingSelected>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your review"
            value={text}
          ></input>
          <Button type="submit" isDisable={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
