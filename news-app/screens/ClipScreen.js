import { StyleSheet, SafeAreaView, Text } from "react-native";

export const ClipScreen = () => {
  return (
    <SafeAreaView style={stylex.container}>
      <Text>Clip Screen!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
