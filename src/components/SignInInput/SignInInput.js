import * as React from "react";
import { Context } from "../../pages/index";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

const SignInInput = () => {
  const { setUser } = React.useContext(Context);
  const [userInput, setUserInput] = React.useState("");

  const createUser = () => {
    if (userInput.length > 3) {
      setUser(userInput);
      setUserInput("");
    }
  };

  return (
    <Container>
      <Input
        placeholder="Enter Name"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        type="input"
        name="userInput"
      />
      <Button onClick={createUser} type="button">
        SIGN UP
      </Button>
    </Container>
  );
};

export default SignInInput;
