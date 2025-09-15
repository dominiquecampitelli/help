import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { styles } from "./styles";
import { ControlledInput } from "@/components/controlledInput";
import { Button } from "@/components/button";

const VALID_EMAIL_EXPRESSION =
  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
  });

  function handleUserLogin(data: FormData) {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Text style={styles.logo}>HELP</Text>
          <View style={styles.form}>
            <ControlledInput
              name="email"
              placeholder="E-mail"
              control={control}
              keyboardType="email-address"
              autoCapitalize="none"
              rules={{
                required: "O e-mail é obrigatório.",
                pattern: {
                  value: VALID_EMAIL_EXPRESSION,
                  message: "Por favor, insira um e-mail válido.",
                },
              }}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <ControlledInput
              name="password"
              placeholder="Senha"
              control={control}
              secureTextEntry
              rules={{
                required: "A senha é obrigatória.",
              }}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <Button title="Entrar" onPress={handleSubmit(handleUserLogin)} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
