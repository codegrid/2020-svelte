<script>
let clientWidth
let clientHeight
let offsetWidth
let offsetHeight
</script>

<div class="resizable"
     bind:clientWidth={clientWidth}
     bind:clientHeight={clientHeight}
     bind:offsetWidth={offsetWidth}
     bind:offsetHeight={offsetHeight}
></div>
<pre>
clientWidth: {clientWidth}
  clientHeight: {clientHeight}
  offsetWidth: {offsetWidth}
  offsetHeight: {offsetHeight}
</pre>

<style>
.resizable {
  width: 100px;
  height: 100px;
  overflow: auto;
  resize: both;
  background-color: skyblue;
}
</style>
