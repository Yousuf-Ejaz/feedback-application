import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || feedback.length === 0) return <p>No Feedbacks Yet...</p>;

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;
