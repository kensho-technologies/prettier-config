import {add} from './typescriptreact'

function subtract(a, b) {
  return add(a, -b)
}

export const two = add(1, 1)
export const one = subtract(2, 1)
