import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export interface IThemeColorProps {}

export function ThemeColor(props: IThemeColorProps) {
  const context = React.useContext(ThemeContext);

  const handleSetColor = (): void => {
    context?.setColor("blue");
  };

  return (
    <div
      style={{
        background: context?.color,
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      theme color {context?.color}
      <button onClick={handleSetColor}>set to blue</button>
    </div>
  );
}
