import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useLectureData from "./hooks/useLectureData";
import useTopicCardData from "./hooks/useTopicCardData";

function App() {
	// KEEP THIS FOR TESTING PURPOSES
	const { lectures, newLecture, editLecture, deleteLecture } = useLectureData();
	const { topicCards, newTopicCard, editTopicCard } = useTopicCardData(1);
	React.useEffect(() => {
		// newLecture(1, "Lecture from react", "description from react");
		// editLecture(1, "Edit lecture from react", "edit description from react");
		// deleteLecture(1);
		// newTopicCard(1, "React Title", "React description", 8);
		// editTopicCard(2, "React Title", "React description", 8);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
