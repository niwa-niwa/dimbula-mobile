import React from "react";
import { Text } from "react-native";
import { Center } from "./layouts/Center";
import firebase from "./apis/firebase";
import "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SignIn } from "./sign/SignIn";
import { SignUp } from "./sign/SignUp";
import { ResendEmail } from "./sign/ResendEmail";
import { ForgetPw } from "./sign/ForgetPw";
import { TaskFolder } from "./task/TaskFolder";
import { TaskList } from "./task/TaskList";

const Drawer = createDrawerNavigator();

interface AuthViewProps {}
const AuthStack = createStackNavigator<any>();
const AuthView: React.FC<AuthViewProps> = ({}) => {
  return (
    <AuthStack.Navigator initialRouteName="TaskFolder">
      <AuthStack.Screen
        name="TaskFolder"
        component={TaskFolder}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

interface GuestViewProps {}
const GuestStack = createStackNavigator<any>();
const GuestView: React.FC<GuestViewProps> = ({}) => {
  return (
    <GuestStack.Navigator initialRouteName="SignIn">
      <GuestStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <GuestStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <GuestStack.Screen
        name="ResendEmail"
        component={ResendEmail}
        options={{
          headerShown: false,
        }}
      />
      <GuestStack.Screen
        name="ForgetPw"
        component={ForgetPw}
        options={{
          headerShown: false,
        }}
      />
    </GuestStack.Navigator>
  );
};

interface IndexProps {}
const Index: React.FC<IndexProps> = ({}) => {
  const [user, setUser] = React.useState<firebase.User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true); // the flag is loading user state

  React.useEffect(() => {
    let isMounted: boolean = true; // the flag is prevented to leak memory

    const effect = async () => {
      firebase
        .auth()
        .onAuthStateChanged(async (_user: firebase.User | null) => {
          if (!_user) {
            console.log("user is null");
          }

          if (_user && !_user.emailVerified) {
            // Confirm the account is valid with dimbula backend
            console.log("You have to confirm our Email.");
          }

          if (_user && _user.emailVerified) {
            // TODO : implement axios for backend 
            // TODO : implement Redux for user state
            const token: string = await _user.getIdToken(true);
            console.log(token, "= token");
            // Redux function
            // const signIn = () =>
            //   new Promise((resolve) => {
            //     resolve(
            //       dispatch(
            //         asyncSignIn({ token, refreshToken: user.refreshToken })
            //       )
            //     );
            //   });
            // const response = await signIn();

            // if (response.type === "user/signin/rejected") {
            //   dispatch(signOut());
            //   dispatch(
            //     setSnackBar({
            //       severity: "error",
            //       message: "Something is wrong.",
            //     })
            //   );
            // }
          }
          setUser(_user);

          if (isMounted) {
            setIsLoading(false);
          }
        });
    };
    effect();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <Center>
        <Text>Now Loading...</Text>
      </Center>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {user ? (
          <Drawer.Screen component={AuthView} name="Auth" />
        ) : (
          <Drawer.Screen component={GuestView} name="Guest" />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Index;
