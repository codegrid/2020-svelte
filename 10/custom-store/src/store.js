import { writable } from 'svelte/store'

function createStore (initial) {
  const { subscribe, set, update } = writable(initial)

  return {
    subscribe,
    increment () {
      update(value => value + 1)
    },
    reset () {
      set(initial)
    }
  }
}

export const count = createStore(0)
