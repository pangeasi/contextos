import { atom } from "jotai";

export const INPUTS = atom({
  text: "hola",
  number: 1,
  complex: { a: [{ b: 2 + "ads" }] },
});
