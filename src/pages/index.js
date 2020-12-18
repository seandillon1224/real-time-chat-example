import { useState, createContext } from "react";
import withApollo from "lib/apollo";
import { MESSAGES } from "../graphql/queries";
import css from "../../styles/Home.module.css";
import { useSubscription } from "@apollo/react-hooks";
import SignInInput from "../components/SignInInput/SignInInput";
import ChatBox from "../components/ChatBox";

export const Context = createContext({});

function Home() {
  const {
    error,
    data,
  } = useSubscription(MESSAGES);

  const [user, setUser] = useState("");

  return (
    <Context.Provider value={{ user, setUser }}>
      <div className={css.container}>
        <div className={css.main}>
          <div className={css.header}>{user ? `Hello ${user}` : "Please Enter Name To Begin"}</div>

          {user && <ChatBox error={error} data={data} />}
          {!user && <SignInInput />}
        </div>
      </div>
    </Context.Provider>
  );
}

export default withApollo(Home);
