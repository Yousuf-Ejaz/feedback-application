import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
	return (
		<div className="App">
			<FeedbackProvider>
				<Header />
				<div className="container">
					<FeedbackList />
				</div>
			</FeedbackProvider>
		</div>
	);
}

export default App;
