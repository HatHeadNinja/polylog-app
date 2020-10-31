import React from "react";
import Button from "../Button/Button";
import LectureInfo from "../LectureInfo/LectureInfo";
import TopicContainer from "../TopicCard/TopicCard";
import Card from "../Quiz/Card";
import useTopicCardData from "../../hooks/useTopicCardData";
import useQuizCardData from "../../hooks/useQuizCardData";
import { ReactComponent as ActivityFeedIcon } from "./playlist_add_check-24px.svg";
import "./ActivityFeed.css";

export default function ActivityFeed(props) {
	const {
		topicCards,
		newTopicCard,
		editTopicCard,
		deleteTopicCard
	} = useTopicCardData(props.lecture.id);

	const {
		quizCards,
		newQuizCard,
		newQuizQuestion,
		newQuizAnswer,
		editQuizCard,
		editQuizQuestion,
		editQuizAnswer,
		deleteQuizCard,
		deleteQuizQuestion,
		deleteQuizAnswer
	} = useQuizCardData(props.lecture.id);

	// I'm using position as a key since the ids aren't unique when combining both cards list
	const topicCardsList = topicCards.map(topicCard => {
		return (
			<TopicContainer
				key={topicCard.position}
				id={topicCard.id}
				title={topicCard.title}
				description={topicCard.description}
				onEdit={editTopicCard}
				onDelete={deleteTopicCard}
				session={props.session}
			/>
		);
	});

	const quizCardsList = quizCards.map(quizCard => {
		return (
			<Card
				key={quizCard.position}
				id={quizCard.id}
				title={quizCard.title}
				onEdit={editQuizCard}
				onDelete={deleteQuizCard}
				onQestion={{ newQuizQuestion, editQuizQuestion, deleteQuizQuestion }}
				onAnswer={{ newQuizAnswer, editQuizAnswer, deleteQuizAnswer }}
				questions={quizCard.questions}
				session={props.session}
			/>
		);
	});

	const cardsList = [...topicCardsList, ...quizCardsList];
	cardsList.sort((a, b) => {
		return a.key > b.key ? 1 : -1;
	});

	return (
		<div className="activity-feed-container">
			<div className="activity-feed-card-header-row">
				<div className="activity-feed-card-header">
					<ActivityFeedIcon className="activity-feed-icon" />
					<h2 className="activity-feed-card-title">Lecture Feed</h2>
				</div>
				<Button variant="close" onClick={props.onClose}>
					x
				</Button>
			</div>
			<LectureInfo
				lecture={props.lecture}
				onEdit={props.onEdit}
				// onNew should bring up a list and that list to choose card type
				onNew={newTopicCard}
				newTopic={newTopicCard}
				newQuiz={newQuizCard}
				cardsList={cardsList}
			/>
			{cardsList}
		</div>
	);
}
