<script>
  let limit = 30

  function validate (node, initialLimit) {

    // 制限文字数の初期設定
    let max = initialLimit

    function checkCount () {
      if (node.value.length > max) {
        node.classList.add('invalid')
      } else {
        node.classList.remove('invalid')
      }
    }

    // inputイベントで文字数チェック
    node.addEventListener('input', checkCount)

    // 最初の実行時に文字数チェック
    checkCount()

    return {
      update (newLimit) {
        // 制限文字数を更新
        max = newLimit
        // 文字数チェック
        checkCount()
      },

      destroy () {
        node.removeEventListener('input', checkCount)
      }
    }
  }
</script>

制限文字数 <input type="number" bind:value={limit}>
<hr>
<textarea use:validate={limit}>あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ</textarea>

<style>
  textarea {
    width: 10em;
    height: 5em;
    font-size: 1.5rem;
  }

  :global(textarea.invalid) {
    background-color: lightpink;
  }
</style>
