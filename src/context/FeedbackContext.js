import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is from feedback context 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this is from feedback context 2",
      rating: 8,
    },
    {
      id: 3,
      text: "this is from feedback context 3",
      rating: 7,
    },
  ]);
  // =================EDIT FEEDBACK=========================
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: true,
  });
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

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
  // ==================== UPDATE FEEDBACK=========================
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
