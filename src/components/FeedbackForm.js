import { useState, useEffect } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelected from "./RatingSelected";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  // ========== USE Context ==============
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  // ========== USE STATE ==============

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  // ========== USE EFFECT ==============
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
    // console.log("hello");
  }, [feedbackEdit]);
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

  // ========== FORM HANDLE SUBMIT ==============
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
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
