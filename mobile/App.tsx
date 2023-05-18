import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950 text-zinc-50">
      <Text className="text-5xl font-bold text-zinc-50">React Native oi</Text>
      <StatusBar style="auto" translucent />
    </View>
  );
}
