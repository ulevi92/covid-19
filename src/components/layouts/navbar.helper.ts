import { v4 as uuidv4 } from "uuid";

export const linksObject = ["country", "about"].map((link) => ({
  id: uuidv4(),
  link,
}));
