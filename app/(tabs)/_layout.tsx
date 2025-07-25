import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";
import { getNavigationTheme, useThemeSwitcher } from "@/context/ThemeContext";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme } = useThemeSwitcher();
  const navigationTheme = getNavigationTheme(theme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: navigationTheme.colors.primary,
        tabBarStyle: {
          backgroundColor: navigationTheme.colors.bgSecondary,
          borderTopColor: navigationTheme.colors.border,    
        },
        headerStyle: {
          backgroundColor: navigationTheme.colors.bgSecondary,
        },
        headerTitleStyle: {
          color: navigationTheme.colors.text,
        },
        tabBarLabelStyle: {
          color: navigationTheme.colors.text,
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
