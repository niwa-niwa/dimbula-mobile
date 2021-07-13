import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { Center } from "../layouts/Center";
import firebase from "../apis/firebase";
import "firebase/auth";
import { NAMES } from "../const/names";

interface SignInProps {}
export const SignIn: React.FC<SignInProps> = ({}) => {

  const onPressGoogle = (): void => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        console.log("Success sign in with google")
      })
      .catch((e) => {
        console.log("Fail sign in with google",e)
      });
  };

  const onPressEmail = (): void => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        "pass_mail39-magazine@yahoo.co.jp",
        "t4169N5175"
      )
      .then((response: any) => {
        console.log(response);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <Center>
      <H1_Text>{NAMES.TITLE}</H1_Text>
      <Wrapper>
        <Text>Sign In With Google</Text>
        <Button onPress={onPressGoogle} mode="outlined">
          Sign In With Google
        </Button>

        <Text>Sign In With Email</Text>
        <Button onPress={onPressEmail} mode="outlined">
          Sign In With Email
        </Button>
      </Wrapper>
    </Center>
  );

};

const H1_Text = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const Wrapper = styled.View`
  display: flex;
  flex-flow: column;
  border: solid 2px #cccccc;
  border-radius: 16px;
  max-width: 320px;
  width: 70%;
`;
