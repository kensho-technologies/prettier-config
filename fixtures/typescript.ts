import {add} from './typescriptreact'

function subtract(a: number, b: number): number {
  return add(a, -b)
}

export const two = add(1, 1)
export const one = subtract(2, 1)
