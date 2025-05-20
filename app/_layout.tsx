import React from "react";
import { Stack } from "expo-router";
import * as eva from "@eva-design/eva";
import { default as theme } from "@/theme/custom-theme.json";

import { ApplicationProvider } from "@ui-kitten/components";
import Toast from "react-native-toast-message";

const RootLayout = () => (
  <>
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#3c3968" },
        headerTintColor: "#ffffff",
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Google Books",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="book"
        options={{
          headerShown: true,
          title: "Détails",
        }}
      ></Stack.Screen>
    </Stack>
    <Toast />
  </>
);

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <RootLayout />
  </ApplicationProvider>
);
