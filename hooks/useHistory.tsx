import { File } from "@/interfaces/File";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useStorage } from "./useStorage";

type HistoryContextProps = {
  history: File[];
  addToHistory: (file: File) => void;
};

const HistoryContext = createContext<HistoryContextProps | null>(null);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const { getItem, storeItem } = useStorage();

  const [history, setHistory] = useState<File[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const existsInHistory = (file: File): boolean =>
    history.some((f) => f.uri === file.uri);

  const addToHistory = (file: File) => {
    if (!existsInHistory(file)) {
      setHistory((previous) => [file, ...previous]);
    }
  };

  const getHistory = useCallback(async () => {
    const history = await getItem("history");
    setHistory(history ?? []);
    setIsLoaded(true);
  }, [getItem]);

  const saveHistory = useCallback(async () => {
    await storeItem("history", history);
  }, [history, storeItem]);

  useEffect(() => {
    (async () => await getHistory())();
  }, [getHistory]);

  useEffect(() => {
    (async () => {
      if (isLoaded) await saveHistory();
    })();
  }, [history, saveHistory, isLoaded]);

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);

  if (!context) {
    throw new Error(
      "You should not use useHistory outside of HistoryProvider."
    );
  }

  return context;
};
