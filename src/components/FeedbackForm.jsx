import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
	const [text, setText] = useState("");
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState(null);
	const [rating, setRating] = useState(10);

	const { addFeedback, feedbackEdit } = useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setRating(feedbackEdit.item.rating);
			setText(feedbackEdit.item.text);
		}
	}, [feedbackEdit]);

	const getText = (e) => {
		setText(e.target.value);
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage("Text must be at least 10 characters long.");
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}
	};
	const clickHandler = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};
			addFeedback(newFeedback);
		}
		setText("");
	};
	return (
		<Card>
			<form onSubmit={clickHandler}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						type="text"
						placeholder="Write a review"
						onChange={getText}
						value={text}
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				<div className="message">{message}</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
