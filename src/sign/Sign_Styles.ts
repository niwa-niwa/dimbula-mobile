import { StyleSheet } from "react-native";

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

export const Sign_Styles = StyleSheet.create<SignStylesProps>({
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
