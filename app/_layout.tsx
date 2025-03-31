import React from 'react';
import { Stack } from 'expo-router';
import * as eva from '@eva-design/eva';
import {default as theme} from '@/theme/custom-theme.json'

import { ApplicationProvider } from '@ui-kitten/components';

const RootLayout = () => (
  <Stack screenOptions={{headerShown: false}} />
);

export default () => (
  <ApplicationProvider {...eva} theme={{... eva.light, ...theme}}>
    <RootLayout />
  </ApplicationProvider>
);