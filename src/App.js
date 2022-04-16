import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from "./components/Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
	return (
		<Router>
			<FeedbackProvider>
				<Header />
				<div className="container">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
									<AboutIconLink />
								</>
							}
						/>
						<Route path="/about" element={<AboutPage />} />
					</Routes>
				</div>
			</FeedbackProvider>
		</Router>
	);
}

export default App;
