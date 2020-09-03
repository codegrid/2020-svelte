<script>
import { onMount } from 'svelte'

let h1

onMount(() => {
  const now = new Date()
  const date = now.toLocaleDateString()
  const time = now.toLocaleTimeString()
  h1.textContent = `${date} ${time}`
})
</script>

<h1 bind:this={h1}></h1>
