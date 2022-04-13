import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);
	const averageRating = feedback
		.reduce((acc, item, _, arr) => acc + item.rating / arr.length, 0)
		.toFixed(1)
		.replace(/[.,]0$/, "");
	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
		</div>
	);
}

export default FeedbackStats;
