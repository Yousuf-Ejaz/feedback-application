import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
	const { deleteFeedback } = useContext(FeedbackContext);

	return (
		<Card >
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<button className="edit">
				<FaEdit color="purple" />
			</button>
		</Card>
	);
}

export default FeedbackItem;
