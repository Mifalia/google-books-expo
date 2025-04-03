import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FolderMiniature from "@/components/ui/FolderMiniature/FolderMiniature";
import { Button, ButtonGroup, Input } from "@ui-kitten/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function index() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <View style={s.pageContainer}>
      <View style={s.topContainer}>
        <View style={s.infoView}>
          <View style={s.iconContainer}>
            <Text>
              <Ionicons name="folder" size={64} color="#fdd28a" />
            </Text>
          </View>
          <View style={s.textContainer}>
            <Text style={s.topTitle}>Document Tracker</Text>
            <Text style={s.topSmall}>6 Items total</Text>
          </View>
        </View>
      </View>

      {/* Folder list */}
      <View style={s.bottomContainer}>
        <View style={s.folderListTitleContainer}>
          <Text style={s.folderListTitle}>Your Folders</Text>
          {!showForm && <Button
            appearance="outline"
            size="small"
            status="success"
            onPress={toggleForm}
          >
            <AntDesign name="addfolder" size={24} color={"#000"} />
          </Button>}
        </View>

        {/* form */}
        {showForm && (
          <View style={s.formContainer}>
            <Input placeholder="Folder Name" style={s.formInput} />
            <View style={s.formButtonGroup}>
              <Button status="danger" appearance="outline" onPress={toggleForm}>
                <MaterialCommunityIcons name="cancel" size={24}/>
              </Button>
              <Button status="success" appearance="outline">
                <MaterialCommunityIcons name="check-all" size={24}/>
              </Button>
            </View>
          </View>
        )}

        <View style={s.folderList}>
          <FolderMiniature title="Memories" text="6 items total" />
        </View>
      </View>
    </View>
  );
}

export const s = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },

  topContainer: {
    padding: 20,
  },

  topTitle: {
    fontSize: 16,
    color: "#3F3D56",
    fontWeight: "bold",
  },

  topSmall: {
    fontSize: 14,
    color: "#6b7280",
  },

  infoView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  iconContainer: {},

  textContainer: {
    gap: 2,
  },

  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
  },

  folderListTitle: {
    fontSize: 14,
    color: "#9ca3af",
    fontWeight: "light",
  },

  folderListTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  folderList: {
    marginTop: 20,
  },

  formContainer: {
    padding: 0,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "stretch",
    maxWidth: "100%",
  },

  formInput: {
    flex: 1,
  },

  formButtonGroup: {
    flexDirection: "row",
    gap: 0,
  }
});
