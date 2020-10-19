<script>
import { count, doubled } from './store'

function onClickAddButton () {
  count.update(currentValue => currentValue + 1)
}
</script>

<button type="button" on:click={onClickAddButton}>button</button>
<div>
  count: <output>{$count}</output><br>
  doubled: <output>{$doubled}</output>
</div>

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
