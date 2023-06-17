import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "../components/ListItem";
// import dummyArticles from "./dummies/articles.json";
import axios from "axios";

const URL =
  "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=ee6690c543b748fd95ec420e32abac49";

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          return (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
              onPress={() => navigation.navigate("Article", {articles: item})}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
