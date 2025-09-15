import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

export type InputProps = TextInputProps & {
  value?: string;
};

export function Input({ value, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.gray[400]}
      value={value}
      {...rest}
    />
  );
}
