import { useState, useMemo } from "react";

export function useDiarySearch(entries: any[]) {
  // Task 1: Filter Mood pada Home menggunakan useState
  const [query, setQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  // Task 2: Gabungkan query dan filter mood menggunakan useMemo
  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      const matchesQuery =
        entry.title.toLowerCase().includes(query.toLowerCase()) ||
        entry.preview.toLowerCase().includes(query.toLowerCase());
      const matchesMood = selectedMood === "" || entry.mood === selectedMood;
      
      return matchesQuery && matchesMood;
    });
  }, [entries, query, selectedMood]);

  // Task 6: Tombol Reset Filter
  const resetFilter = () => {
    setQuery("");
    setSelectedMood("");
  };

  return {
    query,
    setQuery,
    selectedMood,
    setSelectedMood,
    filteredEntries,
    resultCount: filteredEntries.length,
    resetFilter,
  };
}