import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.green[900],
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
  }
});
