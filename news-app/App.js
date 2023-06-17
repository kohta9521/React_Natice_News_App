import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from "./dummies/articles.json";

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        key={index.toString()}
        imageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
      />
    );
  });

  const sampleText =
    "この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。この文章はダミーです。";
  return (
    <View style={styles.container}>
      {items}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    color: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
