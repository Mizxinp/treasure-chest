import { useReducer } from "react";

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return {...state, ...action.payload}
  }
}