import { recoil  } from "state";
export const countState = recoil.atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});

export const nameState = recoil.atom({
  key: 'nameState',
  default: 'zhangsan'
})

export const nameAndCountState = recoil.selector({
  key: 'nameAndCountState',
  get: ({ get }) => {
    const count = get(countState)
    const name = get(nameState)
    return `${name}: ${count}`
  }
})