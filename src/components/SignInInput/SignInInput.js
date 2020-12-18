import * as React from "react";
import {Context} from '../../pages/index'
import css from './SignInInput.module.css'

const SignInInput = () => {
  const {setUser} = React.useContext(Context)
  const [userInput, setUserInput] = React.useState("");
  
  const createUser = () => {
    if (userInput.length > 3) {
      setUser(userInput);
      setUserInput("");
    }
  };

  return (
    <div className={css.container}>
      <input
        placeholder="Enter Name"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        type="input"
        name="userInput"
      />
      <button onClick={createUser} type="button">
        SIGN UP
      </button>
    </div>
  );
};

export default SignInInput;
