import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";

import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
	return (
		<div className="App">
			<FeedbackProvider>
				<Header />
				<div className="container">
					<FeedbackForm />
					<FeedbackStats />
					<FeedbackList />
				</div>
			</FeedbackProvider>
		</div>
	);
}

export default App;
