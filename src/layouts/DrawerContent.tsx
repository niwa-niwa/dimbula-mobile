import React from "react";
import { View, Text } from 'react-native';
import { DrawerContentScrollView, } from '@react-navigation/drawer';

interface DrawerProps {}

const DrawerContent: React.FC<DrawerProps> = ({}) => {
  return (
    <DrawerContentScrollView >
      <View>
        <Text>This is DrawerContent</Text>
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
