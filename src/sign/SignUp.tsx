import React from "react";
import { Text, View } from "react-native";
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
import { Sign_Styles } from "./Sign_Styles";

interface SignUpProps {
  navigation: any;
}

export const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

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
        <Text style={Sign_Styles.sub_title}>Sign Up</Text>
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
            minLength: {
              value: 8,
              message: "min length is 8 and max is 32",
            },
            maxLength: {
              value: 32,
              message: "min length is 8 and max is 32",
            },
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
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign In
          </PaperButton>
          <PaperButton
            style={Sign_Styles.link_button}
            onPress={() => navigation.navigate("ForgetPw")}
          >
            Forget Your Password
          </PaperButton>
          <PaperButton
            style={Sign_Styles.link_button}
            onPress={() => navigation.navigate("ResendEmail")}
          >
            Resend E-mail
          </PaperButton>
        </View>
      </View>
    </Center>
  );
};
