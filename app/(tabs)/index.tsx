import { Modal, Pressable, FlatList, View, Text } from "react-native";
import { StyleSheet, Button } from "react-native";
import { getColors } from "@/constants/Colors";
import { useState } from "react";
import { ThemeType, useThemeSwitcher } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";


export default function TabOneScreen() {
  const { theme, setTheme } = useThemeSwitcher();
  const colors = getColors();
  const styles = createStyles(colors);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const themeOptions = [
    { label: "Default Theme", value: "default" },
    { label: "Dark Mode Blue", value: "blackBlue" },
  ] as const;

  return (
    <View style={styles.container}>
      {/* Title and header */}
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      {/* Explanation of template setup */}
      <Text style={styles.text}>
        This is a template React Native app using TypeScript with bottom tab navigation and support for dynamic theme switching. Select a theme from the dropdown and press "Set Theme" to apply it across the app.
      </Text>

      {/* Label for theme dropdown */}
      <Text style={styles.text}>Choose a theme:</Text>

      {/* Dropdown pressable to show selected theme and open modal */}
      <Pressable
        style={[styles.dropdown, dropdownVisible && styles.dropdownActive]}
        onPress={() => setDropdownVisible(true)}
      >
        <View style={styles.dropdownContent}>
          <Text style={styles.dropdownText}>
            {themeOptions.find(opt => opt.value === selectedTheme)?.label || selectedTheme}
          </Text>
          <Ionicons
            name="chevron-down"
            size={18}
            color={colors.text}
            style={{
              transform: [{ rotate: dropdownVisible ? "180deg" : "0deg" }],
              transitionDuration: "200ms",
            }}
          />
        </View>
      </Pressable>

      {/* Button that applies the selected theme from dropdown */}
      <Pressable
          onPress={() => {
            setTheme(selectedTheme);
            setDropdownVisible(false);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Set Theme
          </Text>
      </Pressable>

      {/* React Native modal to show theme options when dropdown is active */}
      <Modal transparent visible={dropdownVisible} animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPressOut={() => setDropdownVisible(false)}
        >
          <View style={styles.modalContent}>
          <FlatList
            data={themeOptions}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setSelectedTheme(item.value);
                  setDropdownVisible(false);
                }}
                style={{ padding: 10 }}
              >
                <Text style={styles.dropdownText}>{item.label}</Text>
              </Pressable>
            )}
          />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const createStyles = (colors: ReturnType<typeof getColors>) => StyleSheet.create({
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
  text: {
    fontSize: 16,
    color: colors.text,
    marginVertical: 10,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  dropdown: {
    backgroundColor: colors.card,
    borderRadius: 6,
    borderColor: colors.border,
    borderWidth: 1,
    paddingVertical: 8,
    width: 200,
    marginBottom: 12,
    padding: 10,
  },
  dropdownActive: {
    borderColor: colors.primary,
  },
  dropdownContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.card,
    borderRadius: 6,
    borderColor: colors.border,
    borderWidth: 1,
    paddingVertical: 8,
    width: 200,
  },
  button: {
    backgroundColor: colors.button,
    borderRadius: 10,
    padding: 10,
  },
  dropdownText: {
    color: colors.text,
    fontSize: 16,
    textAlign: "center",
  },
  buttonText: {
    color: colors.textButton,
    fontSize: 16,
    textAlign: "center",
  },
});
