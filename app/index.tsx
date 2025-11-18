import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 50,
        }}
      >
        <Text variant="titleLarge">Papyrus</Text>
      </View>
    </SafeAreaView>
  );
}
