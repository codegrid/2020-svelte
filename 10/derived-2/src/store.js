import { writable, derived } from 'svelte/store'

export const count = writable(0)
export const times = writable(2)
export const multiplied = derived([count, times], ([$count, $times]) => {
  return $count * $times
})
