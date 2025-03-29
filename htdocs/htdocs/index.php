<?php include(dirname(__FILE__).'/header.php'); ?>

<!-- SWIPER -->

<!-- Slider main container -->
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
        <div class="swiper-slide">
                <div class="swiper-card">
                    <img class="swiper-card-img" src="./image/slide_1.jpg" alt="1枚目">
                </div>
        </div>
        <div class="swiper-slide">
                <div class="swiper-card">
                    <img class="swiper-card-img" src="./image/slide_2.jpg" alt="2枚目">
                </div>
        </div>
        <div class="swiper-slide">
                <div class="swiper-card">
                    <img class="swiper-card-img" src="./image/slide_3.jpg" alt="3枚目">
                </div>
        </div>
    </div>

<!-- navigation -->
    <div class="swiper-pagination"></div>

<!-- navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>

<!-- CATCHCOPY -->
<div class="CatchCopy">
    <p class="title">今年も始まる<span>夏祭り</span></p>
</div>

<!-- SCHEDULE -->
<div class="Schedule">
    <p class="title" id="point_Schedule">スケジュール</p>
        <div class="Schedule_description">
            <div class="tabs">
                <div class="schedule_tab active" id="0901">9月1日</div>
                <div class="schedule_tab" id="0902">9月2日</div>
                <div class="schedule_tab" id="0903">9月3日</div>
            </div>
            <div class="schedule_content">
                <p class="schedule_text active" id="0901_TEXT">9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容</p>
                <p class="schedule_text" id="0902_TEXT">9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容</p>
                <p class="schedule_text" id="0903_TEXT">9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容</p>
            </div>
        </div>
</div>


<!-- ACCESS -->
<div class="Access">
    <p class="title" id="point_Access">アクセス</p>
    <p>〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.5338498570745!2d134.52067701276758!3d34.10708032302411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553725a43298fb3%3A0x1bc47188f8f9226a!2z44CSNzcxLTExNTQg5b6z5bO255yM5b6z5bO25biC5b-c56We55S65p2x6LKe5pa55Y2X5bed5re1!5e0!3m2!1sja!2sjp!4v1742647157858!5m2!1sja!2sjp" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
</div>

<!-- FORM -->
<div class="contact">
    <p class="title" id="point_reserve">席予約</p>
        <form action="./confirm.php" class="form" method="post">
            <div class="input_area">

                <div class="form_content">
                    <label for="name" class="form_content_name">お名前<span class="must">※必須</span></label>
                    <input type="text" name="name" required placeholder="例:田中太郎" class="form_write" value="<?php echo isset($_POST['name']) ? htmlspecialchars($_POST['name']) : ''; ?>">
                </div>
        
                <div class="form_content">
                    <label for="seat" class="form_content_name">席の場所<span class="must">※必須</span></label>
                     <select name="seat" required class="form_write">
                      <option value="">---</option>
                      <?php  $seats = array("SS席", "S席", "A席", "B席", "C席");
                        $selectedSeat = isset($_POST["seat"]) ? $_POST["seat"] : ""; // デフォルト値設定

                        foreach ($seats as $seat) {
                            ?>
              <option value="<?php echo $seat; ?>" <?php echo ($selectedSeat == $seat ? "selected" : ""); ?>>
                <?php echo $seat; ?>
            </option>
                <?php
                }
                ?>
            </select>
        </div>

                <div class="form_content">
                    <label for="email" class="form_content_name">メールアドレス<span class="must" >※必須</span></label>
                    <input type="email" name="email" placeholder="例:abcd1234@example.com" required class="form_write" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                </div>

                <div class="form_content">
                    <label for="tel" class="form_content_name">電話番号<span class="want">※任意</span></label>
                    <input type="text" name="tel" placeholder="例:09012345678" class="form_write ninni" value="<?php echo isset($_POST['tel']) ? htmlspecialchars($_POST['tel']) : ''; ?>">
                    <p id="telError" style="color:red; display:none;">電話番号はX-X文字で入力してください</p>
                </div>

                <div class="form_submit">
                     <input type="submit" value="送信" class="form_write submit_botton js-submit-validation" disabled>
                </div>

            </div>
        </form>

</div>

<?php include(dirname(__FILE__).'/footer.php'); ?>



<!-- issue
1.電話番号の値数が条件を満たしていない場合、エラーメッセージを表示
4.確認・完了画面へのデータ送信エラー解除