
import { getColors } from "@/src/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  const colors = getColors();
  const styles = createStyles(colors);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
    </View>
  );
}

const createStyles = (colors: ReturnType<typeof getColors>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.bg,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
    },
    separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
