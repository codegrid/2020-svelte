<script>
import ExampleComponent from './ExampleComponent.svelte'

let child

function onClick() {
  child.reset()
}
</script>

<ExampleComponent bind:this={child} />
<hr>
<button on:click={onClick}>Reset</button>
