import React from 'react';
import confusedEmoji from "./confused_emoji.png";
import './ConfusedEmoji.css';

function ConfusedEmoji() {
  return (
    <div>
      <img className="confused-emoji" src={confusedEmoji}/>
    </div>
  )
}

export default ConfusedEmoji;