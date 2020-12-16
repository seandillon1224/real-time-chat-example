import * as React from "react";
import css from "./ChatBox.module.css";
import ChatBubble from "../ChatBubble";
import ChatInput from "../ChatInput";

const ChatBox = ({ messages, error, loading }) => {
  if (loading) return <div>LOADING!!!</div>;
  if (error) return <span>An Error Occurred Loading Messages!</span>;
  const isMessages = messages && messages.length > 0;
  return (
    <div className={css.chatBox}>
      {isMessages &&
        messages.map(({ id, content, user }) => (
          <ChatBubble key={id} message={content} user={user} />
        ))}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
