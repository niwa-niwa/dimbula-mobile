import React from "react";
import firebase from "../apis/firebase";

import { ScrollView } from "react-native";
import {
  Appbar,
  List,
  Divider,
  Portal,
  Dialog,
  Menu,
} from "react-native-paper";
// import { Platform } from 'react-native';
// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

interface TaskFolderProps {
  navigation: any;
}
export const TaskFolder: React.FC<TaskFolderProps> = ({ navigation }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const LocalDialog = () => (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Edit Menu</Dialog.Title>
        <Dialog.Content>
          <Menu.Item
            icon="folder-edit-outline"
            onPress={() => {}}
            title="Rename"
          />
          <Menu.Item
            icon="window-close"
            onPress={() => {
              hideDialog();
            }}
            title="Close"
          />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content title="Task Folders" />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        <Appbar.Action
          icon="plus"
          onPress={() => {
            firebase.auth().signOut();
          }}
        />
      </Appbar.Header>

      <LocalDialog />

      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {
          navigation.navigate("TaskList");
        }}
        onLongPress={() => {
          showDialog();
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {}}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {}}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {}}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {}}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {}}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {}}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="folder" />}
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          console.log("onLongPress");
        }}
      />
      <Divider />
    </ScrollView>
  );
};
