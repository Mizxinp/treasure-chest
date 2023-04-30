import { useEffect, useContext, useReducer } from "react";
import { JotaiContext } from "./context";

type Store = any;
type Atom = any;
type Options = any

export function createStore() {
  const store = new Map();
  const get = (atom: Atom) => {
    return store.get(atom);
  };
  const set = (atom: Atom, value: any) => {
    store.set(atom, value);
  };
  return { get, set };
}

export function useAtom(store: Store, options: any) {
  return [useAtomValue(store), useSetAtom(store)];
}

export function useAtomValue(atom: Atom) {
  const store = useStore()
  const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = useReducer((pre) => {
    const newValue = store.get(atom)
    if (Object.is(pre[0], newValue) && pre[1] === store && pre[2] === atom) {
      return pre
    }
    return [newValue, store, atom]
  }, undefined, () => [store.get(atom), store, atom])

  let value = valueFromReducer
  if (storeFromReducer !== store || atomFromReducer !== atom) {
    rerender()
    value = store.get(atom)
  }

  useEffect(() => {
    rerender()
  }, [atom, store])

  return value
}


export function useSetAtom(atom: Atom) {
  const store = useStore()
  const setAtom = (...arg: any) => {
    return store.set(atom, ...arg)
  }
  return setAtom
}

let atomKey = 0;

export const useStore = (options?: Options) => {
  const store = useContext(JotaiContext)
  console.log('ssss', store);
  
  return options?.store || store 
}

export function atom<Value>(defaultValue: Value) {
  const key = `atom${atomKey + 1}`;
  const result = {
    defaultValue,
    key,
  };
  return key;
}
