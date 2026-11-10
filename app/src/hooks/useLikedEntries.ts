import { useMemo } from "react";

export function useLikedEntries(entries: any[], likedIds: Set<number>) {
  // Menggunakan useMemo agar performa ringan saat menyaring data
  const likedEntries = useMemo(() => {
    return entries.filter((entry) => likedIds.has(entry.id));
  }, [entries, likedIds]);

  return likedEntries;
}
