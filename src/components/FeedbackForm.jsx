import { useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
	const [text, setText] = useState("");
	const [selected, setSelected] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const { addFeedback } = useContext(FeedbackContext);
	const getSelected = (selected) => setSelected(selected);

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
				rating: selected,
			};
			addFeedback(newFeedback);
		}
		setText("");
	};
	return (
		<Card>
			<form onSubmit={clickHandler}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={getSelected} />
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
