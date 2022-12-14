import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutPages from "./components/pages/AboutPages";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // =================DELELTE FEEDBACK=========================
  const deleteFeedback = (id) => {
    if (window.confirm(`Are you sure you want to delete`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // ====================ADD FEEDBACK=========================
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList handleDelete={deleteFeedback}></FeedbackList>
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPages />} />
          </Routes>
        </div>
        <AboutIconLink></AboutIconLink>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
