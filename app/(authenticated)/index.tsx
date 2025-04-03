import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FolderMiniature from "@/components/folder/FolderMiniature/FolderMiniature";
import { Button, ButtonGroup, Input } from "@ui-kitten/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FolderApi } from "@/services/api/FolderApi";
import { getToken } from "@/services/storage/userStorage";
import { IFolder } from "@/utils/validators/folderValidators";
import Toast from "react-native-toast-message";

export default function index() {
  const [showForm, setShowForm] = useState(false);
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState("")

  const fetchFolders = async () => {
    const token = await getToken()
    const response = await FolderApi.getFolders(token);
    if (response && response?.success === true) {
      setFolders(response.data)
    }
  }

  const handleNewFolderNameChange = (value: string) => {
    setNewFolderName(value)
  }
  
  const handleSubmitFolder = async () => {
    if (newFolderName.trim().length === 0) {
      return;
    }
    
    const token = await getToken()
    const folderData : IFolder = {
      status: 'approved',
      title: newFolderName
    }

    const response = await FolderApi.createFolder({ data: folderData, token })
    const success = (response !== false && response?.success === true)
    
    Toast.show({
      autoHide: true,
      text1: success ? "Folder created" : "Something went wrong",
      text2: success ? `New folder ${newFolderName} has been created` : "Could not create your folder",
      type: success ? "success" : "error"
    })

    if (success) {
      setNewFolderName("");
      toggleForm();
      await fetchFolders()
    };
    
    return;
  }

  useEffect(() => {
    fetchFolders();
  }, [])
  

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
            <Text style={s.topTitle}>{"Document Tracker"}</Text>
            <Text style={s.topSmall}>{`${folders.length} Items total`}</Text>
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
            <Input placeholder="Folder Name" style={s.formInput} onChangeText={handleNewFolderNameChange} />
            <View style={s.formButtonGroup}>
              <Button status="danger" appearance="outline" onPress={toggleForm}>
                <MaterialCommunityIcons name="cancel" size={24}/>
              </Button>
              <Button status="success" appearance="outline" onPress={handleSubmitFolder}>
                <MaterialCommunityIcons name="check-all" size={24}/>
              </Button>
            </View>
          </View>
        )}

        <View style={s.folderList}>
          {folders.map((folder, index) => (
            <FolderMiniature key={index} title={folder?.title} text="0 items total" />
          ))}
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
