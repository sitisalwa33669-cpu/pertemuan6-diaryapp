import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2563EB" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Tambah",
          tabBarLabel: "Tambah",
        }}
      />
      {/* Ini dia menu Favorit yang mengarah ke file two.tsx */}
      <Tabs.Screen
        name="two"
        options={{
          title: "Favorit",
          tabBarLabel: "Favorit",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Pengaturan",
          tabBarLabel: "Pengaturan",
        }}
      />
    </Tabs>
  );
}
