import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import s from "./FolderMiniature.style"

interface FolderMiniatureProps {
  title: string;
  text: string;
}

export default function FolderMiniature({ title, text}: FolderMiniatureProps) {
  return (
    <View style={s.miniatureContainer}>
      <View style={s.iconContainer}>
        <Ionicons name="folder" size={40} color="#d4d4d4" />
      </View>
      <View style={s.texContainer}>
        <Text style={s.folderTitle}>Folder Title</Text>
        <Text style={s.folderSmall}>6 Items total</Text>
      </View>
    </View>
  );
}
