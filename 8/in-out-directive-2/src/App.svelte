<script>
import { fade, scale } from 'svelte/transition';

let showBox = true
</script>

<p>
  <label>
    <input type="checkbox" bind:checked={showBox}> ボックスを表示
  </label>
</p>

{#if showBox}
  <div class="box" in:scale={{duration: 3000}} out:scale={{duration: 3000}}></div>
{/if}

{#if showBox}
  <div class="box box2" transition:scale={{duration: 3000}}></div>
{/if}

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}

.box2 {
  margin-top: 1em;
  background-color: skyblue;
}
</style>
