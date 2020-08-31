<script>
import { onMount } from 'svelte'

let h1

onMount(() => {
  h1.textContent = new Date().toLocaleDateString()
})
</script>

<h1 bind:this={h1}></h1>
