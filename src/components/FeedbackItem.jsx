import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes color="#7e4111" />
			</button>
			<button onClick={() => editFeedback(item)} className="edit">
				<FaEdit color="#7e4111" />
			</button>
		</Card>
	);
}

export default FeedbackItem;
