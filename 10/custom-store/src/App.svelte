<script>
import { count } from './store'

function onClickAddButton () {
  count.increment()
}

function onClickResetButton(event) {
  count.reset()
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
  font-size: inherit;
}
</style>
