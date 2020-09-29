<script>
import { count } from './store'
</script>

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
