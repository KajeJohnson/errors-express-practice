import { nanoid } from "nanoid";
import { User } from "../types";

export const users: User[] = [
  {
    id: nanoid(5),
    name: "Jalen",
    address: "3423423 street",
  },
  {
    id: nanoid(5),
    name: "Kerry",
    address: "347 Sumner Lane",
  },
  {
    id: nanoid(5),
    name: "Mitch",
    address: "347 Sumner Lane",
  },
  {
    id: nanoid(5),
    name: "Rob",
    address: "347 Sumner Lane",
  },
];
