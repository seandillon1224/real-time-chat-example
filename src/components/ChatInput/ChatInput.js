import * as React from "react";
import css from "./ChatInput.module.css";
import { MAKE_MESSAGE } from "../../graphql/mutations";
import { useMutation, gql, useApolloClient } from "@apollo/react-hooks";
import { Context } from "../../pages";

const ChatInput = () => {
  const { user } = React.useContext(Context);
  const [makeMessage, { loading }] = useMutation(MAKE_MESSAGE, {refetchQueries: ["messages"]});

  const [inputVal, setInputVal] = React.useState("");
  const handleInputVal = (e) => setInputVal(e.target.value);

  const handleMessage = () => {
    makeMessage({ variables: { user, content: inputVal } });
    setInputVal("");
  };
  
  return (
    <>
      <input
        className={css.chatInput}
        value={inputVal}
        onChange={handleInputVal}
        name="input"
      />
      <button type="button" onClick={handleMessage} title="myButton">
        SUBMIT{loading && "TING"}
      </button>
    </>
  );
};

export default ChatInput;
