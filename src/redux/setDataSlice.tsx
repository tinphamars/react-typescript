import { createSlice } from "@reduxjs/toolkit";

type New = {
  userId: number;
  id: number;
  title: string;
  body?: string;
};

const initialState: New[] = [
  {
    id: 1,
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

const setDataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {
    getData: (state) => {},
  },
});

export default setDataSlice;
