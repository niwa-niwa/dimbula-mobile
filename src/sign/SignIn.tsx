import React from "react";
import { View, Text,} from "react-native";
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { Center } from "../layouts/Center";

import { NAMES } from '../const/names';


interface SignInProps {};
export const SignIn: React.FC<SignInProps> = ({}) => {
  const onPressGoogle = ():void=>{
    console.log("onPress Google");
  }

  return (
    <Center>
      <H1_Text>{NAMES.TITLE}</H1_Text>
      <Wrapper>
        <Text>Sign In</Text>
        <Button 
          onPress={onPressGoogle}
          mode="outlined"
        >
          Sign In With Google
        </Button>
      </Wrapper>
    </Center>
  )
  
};

const H1_Text = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const Wrapper = styled.View`
  display: flex;
  flex-flow: column;
  border: solid 2px #cccccc;
  border-radius: 16px ;
  max-width:320px;
  width:70%;
`;
