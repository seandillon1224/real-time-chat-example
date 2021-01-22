import { useState, useContext } from "react";
import withApollo from "lib/apollo";
import { MESSAGES } from "../graphql/subscriptions";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import SignInInput from "../components/SignInInput/SignInInput";
import ChatBox from "../components/ChatBox";
import StyledHome from "../styles/home";
import { CREATE_USER } from "../graphql/mutations";
import { login } from "../components/utils/AuthProvider";
import { Context } from "./_app";
// import { useAuth } from "../components/utils/AuthProvider";

function Home() {
  // const { signIn } = useAuth();
  const { user, setUser } = useContext(Context);
  const onCompleted = (d) => {
    const { token } = d.createUser;
    login({ token });
  };
  const [createUser, { data }] = useMutation(CREATE_USER, { onCompleted });
  const [inputVals, setInputVals] = useState({
    name: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    createUser({ variables: { input: inputVals } });
  };

  return (
    <form onSubmit={submit}>
      <input
        value={inputVals.name}
        onChange={(e) => setInputVals({ ...inputVals, name: e.target.value })}
      />
      <input
        value={inputVals.password}
        onChange={(e) =>
          setInputVals({ ...inputVals, password: e.target.value })
        }
      />
      <button type="submit">CLICK ME</button>
    </form>
    /* <div className="main">
          <div className="header">
            {user ? `Hello ${user}` : "Please Enter Name To Begin"}
          </div>
          <div className="lowerHalf">
          {user && <ChatBox error={error} data={data} />}
          {!user && <SignInInput />}
          </div>
        </div> */
  );
}

export default withApollo(Home);
