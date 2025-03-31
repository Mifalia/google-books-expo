import React from 'react';
import { Stack } from 'expo-router';
import * as eva from '@eva-design/eva';

import { ApplicationProvider } from '@ui-kitten/components';

const RootLayout = () => (
  <Stack/>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <RootLayout />
  </ApplicationProvider>
);