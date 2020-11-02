import React from "react";
import LectureTitle from './LectureTitle';
import PlayIcon from "../PlayIcon/PlayIcon";
import HistoryIcon from "../HistoryIcon/HistoryIcon";
import EditIcon from "../EditIcon/EditIcon";
import "./LectureCard.css";

function Show(props) {
	return (
		<section className="lecture-card">
			<div className="lecture-card-title">{props.title}</div>
      {/* <LectureTitle onTitle={props.title} /> */}
			<PlayIcon onPlay={props.onPlay} />
			<HistoryIcon onHistory={props.onHistory} />
			<EditIcon onEdit={props.onEdit} />
		</section>
	);
}

export default Show;
