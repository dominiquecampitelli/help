import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { Input } from "../input";

type InputProps = React.ComponentProps<typeof Input>;

type Props<T extends FieldValues> = InputProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
};

export function ControlledInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
    />
  );
}
