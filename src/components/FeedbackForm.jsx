import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelected from "./RatingSelected";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text.trim().length <= 10 && text !== "") {
      setBtnDisabled(true);
      setMessage("this is message");
    } else {
      setMessage();
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would u rate us</h2>
        <RatingSelected></RatingSelected>
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
