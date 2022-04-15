import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "This is First Feedback",
			rating: 10,
		},
		{
			id: 2,
			text: "This is Second Feedback",
			rating: 8,
		},
		{
			id: 3,
			text: "This is Third Feedback",
			rating: 9,
		},
	]);
	const [newFeedback, setNewFeedback] = useState(null);

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete this item?"))
			setFeedback(feedback.filter((item) => item.id !== id));
	};
	const addFeedback = (item) => {
		setNewFeedback({ id: uuidv4(), ...item });

		setFeedback([...feedback.concat({ id: uuidv4(), ...item })]);
	};

	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
