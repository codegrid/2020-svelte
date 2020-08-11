<script>
let count = 0
let lastClicked = ''

function onClickButton () {
  count++
}

function logClick () {
  lastClicked = new Date()
}
</script>

<button type="button" on:click={onClickButton} on:click={logClick}>increment</button>
<output>{count}</output>
<div>最終クリック日時：{lastClicked}</div>

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
