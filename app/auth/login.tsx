import AuthScreenLayout from "@/components/layouts/AuthScreenLayout/AuthScreenLayout";
import { Button, Input, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <AuthScreenLayout>
      <View style={s.formContainer}>
        <View>
          <Text style={s.label}>Your Email</Text>
          <Input placeholder="Your email" />
        </View>
        <View>
          <Text style={s.label}>Your password</Text>
          <Input placeholder="Password" />
        </View>
        <View style={s.submitContainer}>
          <Button>Login</Button>
          <Text style={{textAlign:"center", marginVertical: 16}}>Or</Text>
          <Button appearance="outline">Create account</Button>
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