import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface BookCardProps {
  title: string;
  author: string;
  thumbnail: string;
  onPress?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  thumbnail,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image
        source={{ uri: thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // minWidth: "auto",
    // maxWidth: "50%",
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: 100,
    backgroundColor: "#f0f0f0",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  author: {
    fontSize: 12,
    color: "#6e6e6e",
  },
});

export default BookCard;
