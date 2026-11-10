import { useMemo } from "react";

export function useLikedEntries(entries: any[], likedIds: Set<number>) {
  const likedEntries = useMemo(() => {
    // Menyaring entries yang ID-nya ada di dalam Set likedIds
    return entries.filter((entry) => likedIds.has(entry.id));
  }, [entries, likedIds]);

  return likedEntries;
}
