import { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Home from "./(screens)/home";
import Login from "./(screens)/login";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return <Home />;
}
