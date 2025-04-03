import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/contexts/auth'

export default function AuthenticatedLayout() {
  const userToken = useAuth().userToken;
  if (userToken === null) {
    return (
      <Redirect href={'/auth/login'} />
    )
  }
  
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='index' options={{ contentStyle: {backgroundColor: '#fffbf4'} }} />
    </Stack>
  )
}