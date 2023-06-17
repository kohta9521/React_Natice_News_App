import { StyleSheet, SafeAreaView, Text } from "react-native";
import { WebView } from "react-native-webview";

export const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://news.tv-asahi.co.jp/news_society/articles/000303659.html" }}
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
