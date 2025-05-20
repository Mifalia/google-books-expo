import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { searchBooks } from "@/services/api/BooksApi";
import BookMiniature from "@/components/book/BookMiniature";
import SearchBar from "@/components/search/SearchBar";

import { router } from "expo-router";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsQuery, setSearchResultsQuery] = useState("");

  const handleChangeText = (text: string) => {
    setSearchQuery(text);
  };

  const handleMiniaturePress = (item: any) => {
    router.push({ pathname: "/book", params: { id: item?.id } });
  };

  const handleSearch = async () => {
    setSearchResultsQuery(searchQuery);
    const results = await searchBooks(searchQuery);
    if (results) setSearchResults(results);
  };

  return (
    <ScrollView style={s.scrollContainer}>
      <SearchBar
        onChangeText={handleChangeText}
        value={searchQuery}
        onSearch={handleSearch}
        placeholder="Quel livre voulez-vous ?"
      />
      {searchQuery.trim() && searchResults?.length > 0 && (
        <Text
          style={{
            marginVertical: 12,
            fontSize: 14,
            fontWeight: "400",
            color: "#635FA2",
          }}
        >{`Résultats pour "${searchResultsQuery}"`}</Text>
      )}
      {searchResults && searchResults?.length > 0 && (
        <View style={{ flexGrow: 1 }}>
          <View style={s.bookList}>
            {searchResults.map((item: any) => (
              <BookMiniature
                onPress={() => handleMiniaturePress(item)}
                title={item.volumeInfo?.title}
                author={
                  item.volumeInfo.authors !== undefined &&
                  item.volumeInfo.authors?.length > 0
                    ? item.volumeInfo.authors[0]
                    : "Inconnu"
                }
                thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
              />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;

const s = StyleSheet.create({
  layoutContainer: {
    padding: 12,
  },

  bookList: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 0,
    gap: 8,
    flexWrap: "wrap",
  },

  scrollContainer: {
    flex: 1,
    padding: 12,
  },
});
