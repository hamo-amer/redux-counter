import { DECREMENT, INCREMENT } from "../types";

export const increment = n => {
  return { type: INCREMENT, payload: n };
};

export const decrement = () => {
  return { type: DECREMENT };
};
