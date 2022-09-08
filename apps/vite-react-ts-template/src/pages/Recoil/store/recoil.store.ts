import { recoil  } from "state";
export const textState = recoil.atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});