import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
	return (
		<Card>
			<form action="#">
				<h2>How would you rate your service with us?</h2>
				<RatingSelect />
				<div className="input-group">
					<input type="text" placeholder="Write a review" />
					<Button>Send</Button>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
