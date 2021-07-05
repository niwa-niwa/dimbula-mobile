import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from './layouts/Drawer';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
import ResendEmail from './sign/ResendEmail';
import ForgetPw from './sign/ForgetPw';

interface AuthViewProps {}
const AuthStack = createStackNavigator<any>();
const AuthView: React.FC<AuthViewProps> = ({})=>{
  return(
    <AuthStack.Navigator
      initialRouteName="SignIn"
    >
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle:"Sign In"
        }}
      />
    </AuthStack.Navigator>
  )
}

interface GuestViewProps {}
const GuestStack = createStackNavigator<any>();
const GuestView: React.FC<GuestViewProps> = ({})=>{
  return(
    <GuestStack.Navigator
      initialRouteName="SignIn"
    >
      <GuestStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle:"Sign In"
        }}
      />
      <GuestStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle:"Sign Up"
        }}
      />
      <GuestStack.Screen
        name="ResendEmail"
        component={ResendEmail}
        options={{
          headerTitle:"Resend Email"
        }}
      />
      <GuestStack.Screen
        name="ForgetPw"
        component={ForgetPw}
        options={{
          headerTitle:"Forget Password"
        }}
      />
    </GuestStack.Navigator>
  )
}


interface IndexProps {}
const Index: React.FC<IndexProps> = ({}) => {
  return (
    <NavigationContainer>
      <GuestView />
    </NavigationContainer>
  )
};
export default Index;
