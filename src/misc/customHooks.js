import { useCallback, useState } from "react";

export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
}

/*export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const querylist = window.matchMedia(query);
    setMatches(querylist.matches);

    const listener = (evt) => setMatches(evt.matches);
    querylist.addListener(listener);
    return () => {
      querylist.removeListener(listener);
    };
  }, [query]);
  return matches;
};*/
