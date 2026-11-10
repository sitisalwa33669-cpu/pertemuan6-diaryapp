import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import DiaryCard from "../src/component/DiaryCard";
import { useDiary } from "../src/context/DiaryContext";
import { useLikedEntries } from "../src/hooks/useLikedEntries";
import { COLORS, SPACE, TYPO } from "../src/styles/tokens";

export default function FavoritesScreen() {
  const router = useRouter();
  const { entries, toggleLike, likedIds } = useDiary();
  
  // Mengambil data dari custom hook (Task 3)
  const favoriteEntries = useLikedEntries(entries, likedIds);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Diary Favorit</Text>
      <FlatList
        data={favoriteEntries}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <DiaryCard
            title={item.title}
            date={item.date}
            preview={item.preview}
            mood={item.mood}
            liked={true} 
            onPress={() => router.push({ pathname: "/detail/[id]", params: { id: String(item.id) } })}
            onToggleLike={() => toggleLike(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada diary yang disukai.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACE.l, backgroundColor: COLORS.background },
  header: { fontSize: TYPO.h1, fontWeight: "700", color: COLORS.text, marginBottom: SPACE.m },
  list: { gap: SPACE.m, paddingBottom: SPACE.xl },
  empty: { textAlign: "center", color: COLORS.muted, marginTop: 40 },
});