import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/auth";
import { Button, Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { ReactComponent as Logo } from "../../assets/logo-react-zzaria.svg";

const firebaseConfig = {
  apiKey: "AIzaSyADdMggpnHHA6NazGa8e58qtEDNVq-zUnI",
  authDomain: "reactzzaria-cd343.firebaseapp.com",
  projectId: "reactzzaria-cd343",
  storageBucket: "reactzzaria-cd343.appspot.com",
  messagingSenderId: "243081295749",
  appId: "1:243081295749:web:8f34a4e0b6439ad60ef6ec",
  measurementId: "G-G00F7F3SCH",
};

firebase.initializeApp(firebaseConfig);

const login = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

function Login() {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  });

  const { isUserLoggedIn, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Usuário Logado: ", user);
      setUserInfo({ isUserLoggedIn: !!user, user });
    });
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("deslogou!");
        setUserInfo({
          isUserLoggedIn: false,
          user: null,
        });
      });
  };

  return (
    <Container>
      <Grid container direction="column" justify="center" spacing={40}>
        <Grid item>
          <Logo style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} container justify="center">
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant="contained" onClick={logout}>
                Sair
              </Button>
            </>
          )}
          {!isUserLoggedIn && (
            <GitHubButton onClick={login}>
              Logar com <GitHubIcon style={{ marginLeft: "5px" }} />
            </GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const GitHubButton = styled(Button).attrs({
  variant: "contained",
  fullWidth: true,
})`
  && {
    max-width: 430px;
    font-size: 22px;
    padding: 5px;
    text-transform: none;
    margin-top: 20px;
  }
`;

export default Login;
