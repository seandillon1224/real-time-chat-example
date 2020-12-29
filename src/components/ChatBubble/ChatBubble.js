import * as React from "react";
import { Context } from "../../pages";
import StyledChatBubble from "./StyledChatBubble";

const ChatBubble = ({ user, message }) => {
  const { user: currUser } = React.useContext(Context);
  const direction = user === currUser ? "right" : "left";
  return (
    <StyledChatBubble direction={direction}>
      <span>{user}</span>
      <div className="bubble">{message}</div>
    </StyledChatBubble>
  );
};

export default ChatBubble;
