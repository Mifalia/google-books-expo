import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getBookDetails } from "@/services/api/BooksApi";

const Book = () => {
  const { id } = useLocalSearchParams();
  const [currentBook, setCurrentBook] = useState(null);

  const fetchBookDetails = async (id: string) => {
    const bookDetails = await getBookDetails(id);
    setCurrentBook(bookDetails);
  };

  useEffect(() => {
    if (id) {
      fetchBookDetails(id as string);
    }
  }, [id]);

  if (!currentBook) return null;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={{ uri: currentBook?.volumeInfo.imageLinks.thumbnail }}
        style={styles.thumbnail}
      />
      <Text style={styles.title}>{currentBook?.volumeInfo.title}</Text>
      <Text style={styles.author}>
        by {currentBook?.volumeInfo.authors?.join(", ")}
      </Text>
      <Text style={styles.meta}>
        {currentBook?.volumeInfo.publisher} •{" "}
        {currentBook?.volumeInfo.publishedDate}
      </Text>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        {currentBook?.volumeInfo.description}
      </Text>
      <Text style={styles.sectionTitle}>Details</Text>
      <Text style={styles.detail}>
        Pages: {currentBook?.volumeInfo.pageCount}
      </Text>
      <Text style={styles.detail}>
        Categories: {currentBook?.volumeInfo.categories?.join(", ")}
      </Text>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => Linking.openURL(currentBook?.volumeInfo.infoLink)}
      >
        <Text style={styles.linkButtonText}>Voir sur Google Play</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7fb",
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  thumbnail: {
    width: 180,
    height: 260,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#3c3968",
    marginBottom: 4,
  },
  author: {
    fontSize: 16,
    color: "#6c6a90",
    marginBottom: 2,
  },
  meta: {
    fontSize: 14,
    color: "#aaa9c0",
    marginBottom: 16,
  },
  sectionTitle: {
    alignSelf: "flex-start",
    marginTop: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#3c3968",
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4c4a73",
    marginBottom: 16,
  },
  detail: {
    fontSize: 14,
    color: "#6f6d91",
    marginBottom: 6,
    alignSelf: "flex-start",
  },
  linkButton: {
    marginTop: 24,
    backgroundColor: "#3c3968",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  linkButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
