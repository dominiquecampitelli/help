import { View } from "react-native";

import Login from "@/app/login";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Login />
    </View>
  );
}
