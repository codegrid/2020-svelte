import { readable } from 'svelte/store'

export const count = readable(0, set => {
  let value = 0

  const timer = setInterval(() => {
    value = value + 1
    set(value)
  }, 1000)

  return () => {
    clearInterval(timer)
  }
})
