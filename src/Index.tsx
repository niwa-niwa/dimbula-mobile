import React from "react";
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
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Guest">
        <Drawer.Screen component={GuestView} name="Guest" />
        <Drawer.Screen component={AuthView} name="Auth" />
        {/* <GuestView /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Index;

