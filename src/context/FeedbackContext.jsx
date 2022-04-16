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

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete this item?"))
			setFeedback(feedback.filter((item) => item.id !== id));
	};
	const addFeedback = (item) => {
		item.id = uuidv4();
		setFeedback([item, ...feedback]);
	};
	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updItem } : item
			)
		);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
