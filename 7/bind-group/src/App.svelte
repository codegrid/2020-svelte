<script>
let radio = ''
let check = []
</script>

<fieldset>
  <label><input type="radio" bind:group={radio} value="apple" name="example-radio"> りんご</label><br>
  <label><input type="radio" bind:group={radio} value="banana" name="example-radio"> バナナ</label><br>
  <label><input type="radio" bind:group={radio} value="grape" name="example-radio"> ぶどう</label>
</fieldset>
<hr>
<fieldset>
  <label><input type="checkbox" bind:group={check} value="circle" name="example-check"> 円</label><br>
  <label><input type="checkbox" bind:group={check} value="triangle" name="example-check"> 三角形</label><br>
  <label><input type="checkbox" bind:group={check} value="tetragon" name="example-check"> 四角形</label><br>
  <label><input type="checkbox" bind:group={check} value="pentagon" name="example-check"> 五角形</label><br>
  <label><input type="checkbox" bind:group={check} value="hexagon" name="example-check"> 六角形</label>
</fieldset>
<hr>
<p>
  ラジオボタオンの値：{radio}<br>
  チェックボックスの値：{check.join(', ')}
</p>
