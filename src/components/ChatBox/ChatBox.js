import * as React from "react";
import ChatBubble from "../ChatBubble";
import ChatInput from "../ChatInput";
import StyledChatBox from "./StyledChatBox";

const ChatBox = ({ data, error }) => {
  if (error) return <span>An Error Occurred Loading Messages!</span>;
  const isMessages = data.messages && data.messages.length > 0;
  return (
    <StyledChatBox>
      {isMessages &&
        data.messages.map(({ id, content, user }) =>  (
          <ChatBubble key={id} message={content} user={user} />
        ))}
      <ChatInput />
    </StyledChatBox>
  );
};

export default ChatBox;
