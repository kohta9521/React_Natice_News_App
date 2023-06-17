import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
// import dummyArticles from "./dummies/articles.json";
import axios from "axios";
import Constants from "expo-constants";

export default function App() {
  const [articles, setArticles] = useState([]);

  const URL =
    "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=ee6690c543b748fd95ec420e32abac49";
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (err) {
      console.error(error);
    }
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
