import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthIllustration from '@/assets/images/auth-illustration.png'
import { Image } from 'react-native'

export default function AuthScreenLayout({ children }: { children : React.ReactNode}) {
  return (
    <SafeAreaView style={s.outerContainer}>
      <View style={s.innerContainer}>
        <View style={s.illustrationContainer}>
          <Image style={s.illustration} source={AuthIllustration}  />
          <Text style={s.title}>{"Foldeo"}</Text>
          <Text style={s.description}>{"Access your important files from everywhere"}</Text>
        </View>
        <View style={s.formContainer}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  outerContainer : {
    padding: 16,
    backgroundColor: "#fff",
    flexGrow: 1
  },
  
  innerContainer : {
    flexDirection: "column",
    flexGrow: 1
  },

  illustrationContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
    padding: 20
  },

  illustration: {
    
  },

  formContainer : {
    flexGrow: 1,
  },

  title : {
    fontWeight: '600',
    fontSize: 20
  },

  description: {
    fontWeight: "400",
    marginTop: 20,
    textAlign: "center"
  }
})