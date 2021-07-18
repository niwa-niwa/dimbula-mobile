import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { Button as PaperButton } from 'react-native-paper';
import styled from "styled-components/native";
import { Center } from "../layouts/Center";
import firebase from "../apis/firebase";
import "firebase/auth";
import { NAMES } from "../const/names";
import { useForm, Controller } from "react-hook-form";

// TODO : implement SignIn.tsx without google auth
// TODO : implement SignUp.tsx without google auth
// TODO : implement ResendEmail.tsx without google auth
// TODO : implement ForgetPw.tsx without google auth



interface SignInProps {};
export const SignIn: React.FC<SignInProps> = ({}) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = ( data:any ) => console.log(data);


  React.useEffect(()=>{
    firebase.auth().onAuthStateChanged(async (user)=>{
        // console.log(user);
    });
  },[]);

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
        {/* <PaperButton onPress={onPressEmail} mode="outlined">
          Sign In With Email
        </PaperButton> */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </Center>
  );

};

const H1_Text = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

interface Styles{
  input:object
};
const styles= StyleSheet.create<Styles>({
  input:{
    borderStyle:"solid",
    width:100,
    height:32,
    backgroundColor:"green"
  }
})