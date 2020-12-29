import { useState, createContext } from "react";
import withApollo from "lib/apollo";
import { MESSAGES } from "../graphql/subscriptions";
import { useSubscription } from "@apollo/react-hooks";
import SignInInput from "../components/SignInInput/SignInInput";
import ChatBox from "../components/ChatBox";
import StyledHome from "../styles/home";

export const Context = createContext({});

function Home() {
  const { error, data } = useSubscription(MESSAGES);

  const [user, setUser] = useState("");

  return (
    <Context.Provider value={{ user, setUser }}>
      <StyledHome>
        <div className="main">
          <div className="header">
            {user ? `Hello ${user}` : "Please Enter Name To Begin"}
          </div>
          <div className="lowerHalf">
          {user && <ChatBox error={error} data={data} />}
          {!user && <SignInInput />}
          </div>
        </div>
      </StyledHome>
    </Context.Provider>
  );
}

export default withApollo(Home);
