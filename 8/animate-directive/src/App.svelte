<script>
import { flip } from 'svelte/animate'

let list = ['foo', 'bar', 'baz', 'hoge', 'fuga', 'piyo']

function reorder () {
  const first = list.shift()
  list = list.concat(first)
}

function removeFirst() {
  list.shift()
  list = list
}
</script>

<button on:click={reorder} disabled={!list.length}>最初のアイテムを最後に移動</button>
<button on:click={removeFirst} disabled={!list.length}>最初のアイテムを削除</button>

<ul>
  {#each list as item (item)}
    <li animate:flip>{item}</li>
  {/each}
</ul>
