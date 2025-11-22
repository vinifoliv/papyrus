import { File } from "@/interfaces/File";
import { createContext, ReactNode, useContext, useState } from "react";

type SelectedFileContextProps = {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
};

const SelectedFileContext = createContext<SelectedFileContextProps | null>(
  null
);

export const SelectedFileProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <SelectedFileContext.Provider value={{ selectedFile, setSelectedFile }}>
      {children}
    </SelectedFileContext.Provider>
  );
};

export const useSelectedFile = () => {
  const context = useContext(SelectedFileContext);

  if (!context) {
    throw new Error(
      "You should not consume useSelectedFile outside of SelectedFileProvider."
    );
  }

  return context;
};
