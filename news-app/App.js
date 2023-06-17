import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import dummyArticles from "./dummies/articles.json";

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    setArticles(dummyArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // const items = articles.map((article, index) => {
  //   return (
  //     <ListItem
  //       key={index.toString()}
  //       imageUrl={article.urlToImage}
  //       title={article.title}
  //       author={article.author}
  //     />
  //   );
  // });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          return <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
});
