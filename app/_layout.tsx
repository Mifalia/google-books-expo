import React from 'react';
import { Stack } from 'expo-router';
import * as eva from '@eva-design/eva';
import {default as theme} from '@/theme/custom-theme.json'

import { ApplicationProvider } from '@ui-kitten/components';
import Toast from 'react-native-toast-message';
import { AuthProvider } from '@/contexts/auth';

const RootLayout = () => (
  <>
    <Stack screenOptions={{headerShown: false}} />
    <Toast/>
  </>
);

export default () => (
  <ApplicationProvider {...eva} theme={{... eva.light, ...theme}}>
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  </ApplicationProvider>
);