import { createContext, useState } from "react";

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

	return (
		<FeedbackContext.Provider value={{ feedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
