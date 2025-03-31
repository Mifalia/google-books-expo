import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ScreenSafeAreaLayout({ children } : { children: React.ReactNode}) {
  return (
    <SafeAreaView style={s.container}>
      {children}
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container : {
    padding: 16
  }
})