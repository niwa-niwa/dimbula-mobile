import React from "react";
import { ScrollView } from "react-native";
import {
  Appbar,
  List,
  Divider,
  Portal,
  Dialog,
  Menu,
} from "react-native-paper";

// TODO : implement dialog to edit a task

interface TaskListProps {
  navigation: any;
}

export const TaskList: React.FC<TaskListProps> = ({ navigation }) => {
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
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Folder Name" />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        <Appbar.Action icon="plus" onPress={() => {}} />
      </Appbar.Header>

      <LocalDialog />

      <List.Item
        title="First Item"
        description="date - date"
        left={(props) => <List.Icon {...props} icon="checkbox-blank-outline" />}
        right={(props) => <List.Icon {...props} icon="star-outline" />}
        onPress={() => {
          navigation.navigate("Task");
        }}
        onLongPress={() => {
          showDialog();
        }}
      />
      <Divider />
    </ScrollView>
  );
};
