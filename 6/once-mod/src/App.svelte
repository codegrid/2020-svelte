<script>
let count = 0

function onClickButton () {
  count++
}
</script>

<button type="button" on:click|once={onClickButton}>button</button>
<output>{count}</output>

<style>
:global(html) {
  height: 100%;
}

:global(body) {
  font-size: 2rem;
}

button {
  margin-right: 0.5em;
  font-size: inherit;
}

div {
  font-size: 1rem;
}
</style>
