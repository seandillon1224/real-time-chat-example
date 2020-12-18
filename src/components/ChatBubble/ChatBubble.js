import * as React from "react";
import css from "./ChatBubble.module.css";
import cn from "classnames";
import { Context } from "../../pages";

const ChatBubble = ({ user, message }) => {
  const {user: currUser} = React.useContext(Context);
  const className = user === currUser ? css.right : css.left;
  return <div className={cn(className, css.message, css.chatBubbleRow)}>
    <div className={css.chatMessage}>{message}</div></div>;
};

export default ChatBubble;
