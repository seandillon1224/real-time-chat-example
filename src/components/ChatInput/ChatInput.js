import * as React from "react";
import { CREATE_MESSAGE } from "../../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";
import { Context } from "../../pages";
import Input from "../Input";
import Button from "../Button";

const ChatInput = () => {
  const { user } = React.useContext(Context);
  const [makeMessage, { loading }] = useMutation(CREATE_MESSAGE);

  const [inputVal, setInputVal] = React.useState("");
  const handleInputVal = (e) => setInputVal(e.target.value);

  const handleMessage = () => {
    makeMessage({ variables: { user, content: inputVal } });
    setInputVal("");
  };

  return (
    <>
      <Input value={inputVal} onChange={handleInputVal} name="input" />
      <Button type="button" onClick={handleMessage} title="myButton">
        SUBMIT{loading && "TING"}
      </Button>
    </>
  );
};

export default ChatInput;
