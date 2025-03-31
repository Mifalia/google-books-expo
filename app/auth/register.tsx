import AuthScreenLayout from "@/components/layouts/AuthScreenLayout/AuthScreenLayout";
import { Button, Input, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RegisterScreen() {
  const handleSecondaryAction = () => {
    router.replace("/auth/login");
  }

  return (
    <AuthScreenLayout>
      <View style={s.formContainer}>
        <View>
          <Text style={s.label}>User name</Text>
          <Input placeholder="Username" />
        </View>
        <View>
          <Text style={s.label}>Email</Text>
          <Input placeholder="user@example.com" />
        </View>
        <View>
          <Text style={s.label}>Your password</Text>
          <Input placeholder="Password" />
        </View> 
        <View>
          <Text style={s.label}>Confirm Password</Text>
          <Input placeholder="Password" />
        </View>         
        <View style={s.submitContainer}>
          <Button>{"Create your accout"}</Button>
          <Text style={{textAlign:"center", marginVertical: 16}}>Or</Text>
          <Button appearance="outline" onPress={handleSecondaryAction}>{"Login"}</Button>
        </View>
      </View>
    </AuthScreenLayout>
  );
}

const s = StyleSheet.create({
  formContainer : {
    flexGrow: 1,
    justifyContent: "flex-start",
  },

  label : {
    marginTop: 24,
    marginBottom: 8,
    color: "#8c8c8c"
  },

  submitContainer : {
    marginTop: 24
  }
})