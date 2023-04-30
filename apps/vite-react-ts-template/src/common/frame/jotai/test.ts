export function sum(numbers: number[]): number;
export function sum(numbers: string[]): number;

export function sum(numbers: number[] | string[]): number {
  if (numbers.some(item => typeof item === 'string')) {
    return numbers.reduce((acc, num) => acc + Number(num), 0)
  }
  return numbers.reduce((acc, num) => acc + num, 0)
}
