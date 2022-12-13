import { Console } from "console";
import * as React from "react";
import InputOne from "./InputOne";

export interface IAppProps {}

type Item = {
  _id: string;
  type: string;
  slug: string;
  price: number | null;
  parentId: string;
  title: string;
  regular_price: number | null;
  attribute: Attr;
};

type Attr = {
  dung_luong: string;
  mau_sac: string;
  phien_ban: string;
};

const groups: Item[] = [
  {
    _id: "63981e83cbeb101aa9ee66f7",
    parentId: "63981e83cbeb101aa9ee66ee",
    title: "Tên sản phẩm",
    slug: "test-product",
    type: "variable",
    price: 13000,
    regular_price: 13500,
    attribute: {
      dung_luong: "128GB",
      mau_sac: "Blue",
      phien_ban: "LLA",
    },
  },
  {
    _id: "63981e83cbeb101aa9ee66fd",
    parentId: "63981e83cbeb101aa9ee66ee",
    title: "Tên sản phẩm",
    slug: "test-product",
    type: "variable",
    price: null,
    regular_price: null,
    attribute: {
      dung_luong: "1TB",
      mau_sac: "Gold",
      phien_ban: "GPS",
    },
  },
  {
    _id: "63981e83cbeb101aa9ee66ff",
    parentId: "63981e83cbeb101aa9ee66ee",
    title: "Tên sản phẩm",
    slug: "test-product",
    type: "variable",
    price: null,
    regular_price: null,
    attribute: {
      dung_luong: "1TB",
      mau_sac: "Gold",
      phien_ban: "LLA",
    },
  },
  {
    _id: "63981e83cbeb101aa9ee6705",
    parentId: "63981e83cbeb101aa9ee66ee",
    title: "Tên sản phẩm",
    slug: "test-product",
    type: "variable",
    price: null,
    regular_price: null,
    attribute: {
      dung_luong: "256GB",
      mau_sac: "Gold",
      phien_ban: "GPS",
    },
  },
  {
    _id: "63981e83cbeb101aa9ee6707",
    parentId: "63981e83cbeb101aa9ee66ee",
    title: "Tên sản phẩm",
    slug: "test-product",
    type: "variable",
    price: null,
    regular_price: null,
    attribute: {
      dung_luong: "256GB",
      mau_sac: "Blue",
      phien_ban: "LLA",
    },
  },
];

type type = {
  value: string;
  active: boolean;
  type?: string;
};

const type_1: type[] = [
  { value: "128GB", active: true, type: "dung_luong" },
  { value: "256GB", active: false, type: "dung_luong" },
  { value: "1TB", active: false, type: "dung_luong" },
];

const type_2: type[] = [
  { value: "Gold", active: false, type: "mau_sac" },
  { value: "Blue", active: false, type: "mau_sac" },
];

const type_3: type[] = [
  { value: "LLA", active: false, type: "phien_ban" },
  { value: "GPS", active: false, type: "phien_ban" },
];

export default function Product(props: IAppProps) {
  const [types, setType] = React.useState(type_1);
  const [colors, setColor] = React.useState(type_2);
  const [sizes, setSize] = React.useState(type_3);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    size: type
  ): void => {
    const list = groups.filter((item: Item) => {
      if (item.attribute.dung_luong === size.value) {
        console.log(item.attribute.phien_ban);
        let data: type = {
          value: item.attribute.phien_ban,
          active: true,
          type: "phien_ban",
        };
        let datas = [...sizes];
        // console.log(datas.filter(data.value === item.attribute.phien_ban));
        // setSize();
      }
    });

    // list.map((item: Item) => {

    // });
  };

  const functionSetActive = (): void => {};

  return (
    <div>
      <h1>DE</h1>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        {types.map((item: type) => (
          <button
            type="button"
            onClick={(e) => handleClick(e, item)}
            style={{
              background: `${item.active ? "green" : "black"}`,
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          >
            {item.value}
          </button>
        ))}
      </div>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        {colors.map((item: type) => (
          <button
            style={{
              background: `${item.active ? "green" : "black"}`,
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          >
            {item.value}
          </button>
        ))}
      </div>

      <div
        style={{
          marginBottom: "10px",
        }}
      >
        {sizes.map((item: type) => (
          <button
            style={{
              background: `${item.active ? "green" : "black"}`,
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
