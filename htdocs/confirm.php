<?php include(dirname(__FILE__).'/header.php'); ?>


<div class="form_confirm">
    <h2>お問い合わせ内容確認</h2>

<!-- テーブルエリア -->

        <table class="confirm-table">
            <tr><th>お名前</th><td> <?php echo $_POST["name"]; ?></td></tr>
            <tr><th>希望席</th><td> <?php echo $_POST["seat"]; ?></td></tr>
            <tr><th>メールアドレス</th><td> <?php echo $_POST["email"]; ?></td></tr>
            <tr><th>電話番号</th><td> <?php echo $_POST["tel"]; ?></td></tr>
        </table>

<!-- ボタンエリア -->
</div>

<!-- 送信情報 -->
<form class="confirm_form" method="post">
    <input type="hidden" name="name" value="<?php echo $_POST["name"] ?>">
    <input type="hidden" name="seat" value="<?php echo $_POST["seat"] ?>">
    <input type="hidden" name="email" value="<?php echo $_POST["email"] ?>">
    <input type="hidden" name="tel" value="<?php echo $_POST["tel"] ?>">
    <div class="confirm_button">
        <button class="back-button" type="submit back" formaction="./index.php">戻る</button>
        <button class="send-button" type="submit" formaction="./thanks.php">送信</button>
    </div>
</form>


<?php include(dirname(__FILE__).'/footer.php'); ?>

