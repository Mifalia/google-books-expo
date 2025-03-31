import AuthScreenLayout from "@/components/layouts/AuthScreenLayout/AuthScreenLayout";
import { useAuth } from "@/contexts/auth";
import { FolderApi } from "@/services/api/FolderApi";
import { Button, Input, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const auth = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSecondaryAction = () => {
    router.replace("/auth/register");
  }

  const handleEmailChange = (email: string) => {
    setEmail(email)
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password)
  }

  const handleLogin = async () => {
    const response = await FolderApi.login({email, password})

    Toast.show({
      swipeable: true,
      autoHide: true,
      text1: response ? "Login success" : "Login failed",
      text2: response ? "You are now logged in" : "Please check your credentials",
      type: response ? "success" : "error"
    })

    if (response && response.token) {
      // save token to local storage
      auth.signIn(response.token)
      // redirect to home
      setTimeout(() => {
        router.replace("/")
      }, 1000);
    }

    return;
  }

  return (
    <AuthScreenLayout>
      <View style={s.formContainer}>
        <View>
          <Text style={s.label}>Your Email</Text>
          <Input onChangeText={handleEmailChange} placeholder="Your email" />
        </View>
        <View>
          <Text style={s.label}>Your password</Text>
          <Input onChangeText={handlePasswordChange} placeholder="Password" />
        </View>
        <View style={s.submitContainer}>
          <Button onPress={handleLogin}>Login</Button>
          <Text style={{textAlign:"center", marginVertical: 16}}>Or</Text>
          <Button appearance="outline" onPress={handleSecondaryAction}>Create account</Button>
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