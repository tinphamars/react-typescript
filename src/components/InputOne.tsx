import * as React from "react";

export interface IInputOneProps {
  number: string;
  sentSetNumberToChil: () => void;
}

export default function InputOne({  }: IInputOneProps) {
  const [] = React.useState<string>();
  return (
    <div>
      <h1>Input text </h1>
      <input type="text" value={""} />
    </div>
  );
}
