import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import {
  Button as PaperButton,
  TextInput as PaperInput,
  Divider,
} from "react-native-paper";
import { Center } from "../layouts/Center";
import firebase from "../apis/firebase";
import "firebase/auth";
import { NAMES } from "../const/names";
import { useForm, Controller } from "react-hook-form";

// TODO : implement SignUp.tsx without google auth
// TODO : implement ResendEmail.tsx without google auth
// TODO : implement ForgetPw.tsx without google auth

interface SignInProps {}
export const SignIn: React.FC<SignInProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      // console.log(user);
    });
  }, []);

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
      <Text style={Sign_Styles.main_title}>{NAMES.TITLE}</Text>
      <View style={Sign_Styles.sign_wrapper}>
        <Text style={Sign_Styles.sub_title}>Sign In</Text>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PaperInput
              label="E-mail"
              style={Sign_Styles.input}
              onChangeText={onChange}
              value={value}
              mode="outlined"
            />
          )}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          }}
        />
        {/* {errors.email && <Text>This is required.</Text>} */}
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PaperInput
              label="Password"
              style={Sign_Styles.input}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              secureTextEntry={true}
            />
          )}
          rules={{
            required: true,
          }}
        />

        <PaperButton
          style={Sign_Styles.submit_button}
          onPress={handleSubmit(onSubmit)}
          mode="contained"
        >
          Submit
        </PaperButton>

        <Divider style={Sign_Styles.divider} />

        <View style={Sign_Styles.links_wrapper}>
          <PaperButton
            style={Sign_Styles.link_button}
            onPress={() => console.log("sign up")}
          >
            Sign Up
          </PaperButton>
          <PaperButton
            style={Sign_Styles.link_button}
            onPress={() => console.log("forget your password")}
          >
            Forget Your Password
          </PaperButton>
          <PaperButton
            style={Sign_Styles.link_button}
            onPress={() => console.log("resend email")}
          >
            Resend E-mail
          </PaperButton>
        </View>

        {/* <PaperButton onPress={onPressEmail} mode="outlined">
          Sign In With Email
        </PaperButton> */}
      </View>
    </Center>
  );
};

interface SignStylesProps {
  sign_wrapper: object;
  input: object;
  main_title: object;
  sub_title: object;
  submit_button: object;
  divider: object;
  links_wrapper: object;
  link_button: object;
}
const Sign_Styles = StyleSheet.create<SignStylesProps>({
  sign_wrapper: {
    width: "100%",
    padding: 12,
  },
  input: {
    width: "100%",
    height: 48,
    marginBottom: 12,
  },
  main_title: {
    position: "absolute",
    fontSize: 32,
    fontWeight: "bold",
    top: 64,
  },
  sub_title: {
    width: "100%",
    textAlign: "left",
    fontSize: 24,
    marginBottom: 12,
  },
  submit_button: {
    width: "100%",
    marginBottom: 12,
  },
  divider: { margin: 20 },
  links_wrapper: {
    alignItems: "flex-end",
  },
  link_button: {
    marginBottom: 12,
  },
});
