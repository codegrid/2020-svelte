<script>
import { count } from './store'

function onClickAddButton () {
  count.update(currentValue => currentValue + 1)
}

function onClickResetButton () {
  count.set(0)
}
</script>

<button type="button" on:click={onClickAddButton}>button</button>
<button type="button" on:click={onClickResetButton}>reset</button>
<output>{$count}</output>

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
