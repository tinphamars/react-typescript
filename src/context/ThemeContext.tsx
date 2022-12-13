import React from "react";

interface MyContext {
  color: string;
  setColor: (color: string) => void;
}

interface PropsType {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<MyContext | null>(null);

export function ThemeProvider({ children }: PropsType) {
  const [color, setColor] = React.useState<string>("green");

  const valueContext: MyContext = {
    color,
    setColor,
  };

  return (
    <ThemeContext.Provider value={valueContext}>
      {children}
    </ThemeContext.Provider>
  );
}
