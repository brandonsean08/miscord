import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectChannelName, selectChannelId } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import database from "../../database_context/firebase";
import firebase from 'firebase';

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [chatMessageInput, setChatMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
      if(channelId) {
        database
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setChatMessages(snapshot.docs.map((doc) => doc.data()))
        );
      }
  }, [channelId]);

  const sendChatMessage = e => {
      e.preventDefault();

      if(chatMessageInput) {
          database.collection('channels').doc(channelId).collection('messages').add({
              message: chatMessageInput,
              user: user,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
      }

      setChatMessageInput("");
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat-messages">
        {chatMessages.map((message) => (
          <ChatMessage user={message.user} timestamp={message.timestamp} message ={message.message}/>
        ))}
      </div>
      <div className="chat-input">
        <AddCircleIcon />
        <form>
          <input
            placeholder={"Message for test Channel"}
            value={chatMessageInput}
            onChange={(e) => setChatMessageInput(e.target.value)}
          />
          <button type="submit" className="chat-input-send-btn" onClick={sendChatMessage}>
            Send Message
          </button>
        </form>

        <div className="chat-input-icons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
