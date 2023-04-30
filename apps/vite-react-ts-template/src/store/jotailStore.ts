import { atom } from 'jotai';
export const counterState = atom<number | null>(0);
console.log('counterState', counterState);
