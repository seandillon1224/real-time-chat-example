import * as React from "react";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "styles/theme";
import { WithAuthSync } from "../components/utils/AuthProvider";
import StyledHome from "../styles/home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.body};
    background: ${({ theme }) => theme.colors.purple};
  }
`;

export const Context = React.createContext({});

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState("");

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WithAuthSync>
          <StyledHome>
            <Context.Provider value={{ user, setUser }}>
              <Component {...pageProps} />
            </Context.Provider>
          </StyledHome>
        </WithAuthSync>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
