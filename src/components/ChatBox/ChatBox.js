import * as React from "react";
import css from "./ChatBox.module.css";
import ChatBubble from "../ChatBubble";
import ChatInput from "../ChatInput";

const ChatBox = ({ data, error }) => {
  if (error) return <span>An Error Occurred Loading Messages!</span>;
  const isMessages = data.messages && data.messages.length > 0;
  return (
    <div className={css.chatBox}>
      {isMessages &&
        data.messages.map(({ id, content, user }) =>  (
          <ChatBubble key={id} message={content} user={user} />
        ))}
      <ChatInput />
    </div>
  );
};

export default ChatBox;
