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
  <div class="box" in:scale out:fade></div>
{/if}

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
</style>
