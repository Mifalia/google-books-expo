import AuthScreenLayout from "@/components/layouts/AuthScreenLayout/AuthScreenLayout";
import { Button, Input, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getRegistrationError } from "@/utils/validators/authValidators";
import Toast from "react-native-toast-message";
import { FolderApi } from "@/services/api/FolderApi";
import { useAuth } from "@/contexts/auth";

export default function RegisterScreen() {
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    const error = getRegistrationError({ name, email, password, confirmPassword });
    if (error !== null) {
      Toast.show({
        swipeable: true,
        autoHide: true,
        text1: 'Registration failed',
        text2: error,
        type: "error"
      });

      return;
    }

    const response = await FolderApi.register({ name, email, password, confirmPassword });
    
    if (response && response.token) {
      auth.signIn(response.token);
      setTimeout(() => {
        router.replace('/');
      }, 1000);
    }
    
    Toast.show({
      swipeable: true,
      autoHide: true,
      text1: response ? 'Registration success' : 'Registration failed',
      text2: response ? 'You\'ll be redirected soon' : 'Something wrong happened',
      type: response ? 'success' : 'error',
    });
  }
  const handleSecondaryAction = () => {
    router.replace("/auth/login");
  }

  return (
    <AuthScreenLayout>
      <View style={s.formContainer}>
        <View>
          <Text style={s.label}>User name</Text>
          <Input
            placeholder="Username"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text style={s.label}>Email</Text>
          <Input
            placeholder="user@example.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={s.label}>Your password</Text>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View> 
        <View>
          <Text style={s.label}>Confirm Password</Text>
          <Input
            placeholder="Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>         
        <View style={s.submitContainer}>
          <Button onPress={handleSubmit}>{"Create your account"}</Button>
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