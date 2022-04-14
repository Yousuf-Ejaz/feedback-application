import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
	const getSelected = (selected) => console.log(selected);
	const getText = (e) => console.log(e.target.value);
	return (
		<Card>
			<form action="#">
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={getSelected} />
				<div className="input-group">
					<input
						type="text"
						placeholder="Write a review"
						onChange={getText}
					/>
					<Button>Send</Button>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
