// eslint-disable-next-line import/no-extraneous-dependencies
import {useState} from 'react'

/**
 * Sums two numbers.
 *
 * @param a The first number.
 * @param b The second number.
 * @returns The sum.
 */
export function add(a: number, b: number): number {
  return a + b
}

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <button onClick={() => setCount((prevCount) => add(prevCount, 1))} type="button">
        Increment
      </button>
    </div>
  )
}
