import { v4 as uuidv4 } from "uuid";

export const linksObject = ["countries", "about"].map((link) => ({
  id: uuidv4(),
  link,
}));
