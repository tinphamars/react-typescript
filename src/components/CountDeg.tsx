import * as React from "react";
import InputOne from "./InputOne";
import Product from "./Product";

export interface IAppProps {}

type Item = {
  type: string;
  color: string;
  size: string;
  price: number;
};

const groups: Item[] = [
  {
    type: "64",
    color: "Green",
    size: "xlx",
    price: 15000,
  },
  {
    type: "64",
    color: "Gold",
    size: "xlx",
    price: 16000,
  },
  {
    type: "128",
    color: "Gold",
    size: "xlx",
    price: 14000,
  },
  {
    type: "256",
    color: "Black",
    size: "xlx",
    price: 11000,
  },
];

const types: string[] = ["64", "128", "256"];
const colors: string[] = ["Green", "Gold", "Black"];
const sizes: string[] = ["lxl", "xxl"];

export default function CountDeg(props: IAppProps) {
  const [type, setType] = React.useState<string>(types[0]);
  const [color, setColor] = React.useState<string>("");
  const [size, setSize] = React.useState<string>("");
  const [colorAction, setColorAction] = React.useState<string[]>([]);

  const handleType = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ): void => {
    setType(type);
  };

  const handleColor = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: string
  ): void => {
    setColor(color);
  };

  const handleSize = (
    e: React.MouseEvent<HTMLButtonElement>,
    size: string
  ): void => {
    setSize(size);
  };

  // React.useEffect(() => {
  //   console.log({ type, color });
  // }, [type, color]);

  React.useEffect(() => {
    if (color && type) {
      const lists = groups.filter((item: Item) => {
        return item.type === type;
      });

      console.log(filterColor(lists, type));
    }
  }, [type]);

  const filterColor = (array: Item[], color: string): Item[] => {
    const lists = array.filter((item: any) => {
      return item.color === color;
    });
    return lists;
  };

  return (
    <>
      <h1>Products</h1>
      <Product />
    </>
  );
}
