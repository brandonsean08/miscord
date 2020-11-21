import React from "react";
import "./ChatMessage.css";
import { Avatar } from "@material-ui/core";

/**
 *
 * @param {The chat message object containing the timestamp, user and message} param0
 */
function ChatMessage({ timestamp, user, message }) {
  return (
    <div className="chat-message">
      <Avatar src={user.photo} />
      <div className="chat-message-info">
        <h4>
          {user.displayName}
          <span className="chat-message-timestamp">
            {new Date(timestamp?.toDate()).toLocaleString().split(',')[0]}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
