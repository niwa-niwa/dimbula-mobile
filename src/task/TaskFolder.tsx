import React from "react";
import { View } from "react-native";
import { Appbar, List } from 'react-native-paper';
// import { Platform } from 'react-native';
// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

interface TaskFolderProps{}
export const TaskFolder: React.FC<TaskFolderProps> = ()=>{
  return(
    <View>
      <Appbar.Header>
        <Appbar.Content title="Task Folders"/>
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        <Appbar.Action icon="plus" onPress={() => {}} />
      </Appbar.Header>

      <List.Item
        title="First Item"
        description="date - date"
        left={props=><List.Icon {...props} icon="folder" />}
        onPress={()=>{console.log("onPress")}}
        onLongPress={()=>{console.log("onLongPress")}}
      />
      <List.Item
        title="First Item"
        description="date - date"
        left={props=><List.Icon {...props} icon="folder" />}
        onPress={()=>{}}
        onLongPress={()=>{console.log("onLongPress")}}
      />
      <List.Item
        title="First Item"
        description="date - date"
        left={props=><List.Icon {...props} icon="folder" />}
        onPress={()=>{}}
        onLongPress={()=>{console.log("onLongPress")}}
      />
      <List.Item
        title="First Item"
        description="date - date"
        left={props=><List.Icon {...props} icon="folder" />}
        onPress={()=>{}}
        onLongPress={()=>{console.log("onLongPress")}}
      />
    </View>
  )
}
