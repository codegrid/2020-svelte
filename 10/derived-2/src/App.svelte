<script>
import { count, times, multiplied } from './store'

function onClickAddButton () {
  count.update(currentValue => currentValue + 1)
}

function onChangeInput(event) {
  times.set(event.target.value)
}
</script>

<button type="button"
        on:click={onClickAddButton}>button</button>
*
<input type="number" value="{$times}"
       min="0" on:change={onChangeInput}>
<div>
  count: <output>{$count}</output><br>
  multiplied: <output>{$multiplied}</output>
</div>

<style>
:global(html) {
  height: 100%;
}

:global(body) {
  font-size: 2rem;
}

button, input {
  font-size: inherit;
}

input {
  width: 3em;
}
</style>
