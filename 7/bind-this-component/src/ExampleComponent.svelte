<script>
let count = 0

export function reset() {
  count = 0
}

function onClick() {
  count++
}
</script>

<button on:click={onClick}>Button</button> count: {count}
