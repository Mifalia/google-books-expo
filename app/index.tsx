import { Button, Input } from "@ui-kitten/components";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Input placeholder="Password" />
      <Button>Login</Button>
    </View>
  );
}
