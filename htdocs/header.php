<?php
$current_page = basename($_SERVER['PHP_SELF']); // 現在のページ名を取得
$is_disabled = ($current_page === 'confirm.php' || $current_page === 'thanks.php');
?>

<?php
$current_page = basename($_SERVER['PHP_SELF']); // 現在のファイル名を取得
$body_class = '';
if ($current_page === 'index.php') {
    $body_class = 'page-index';
} elseif ($current_page === 'confirm.php') {
    $body_class = 'page-confirm';
} elseif ($current_page === 'thanks.php') {
    $body_class = 'page-thanks';
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
</head>

<body class="<?php echo $body_class; ?>">

<header class="header">
<h1>
    <a href="">
        <img src="./image/logo.png" alt="ロゴ画像" id="header-logo">
    </a>
</h1>

<!-- HEADER_BEFORE -->
<nav class="nav">
    <ul class="ul">
        <li><a href="<?php echo $is_disabled ? '#' : ''; ?>" id="scroll_Schedule2" <?php echo $is_disabled ? 'class="disabled"' : ''; ?>>スケジュール</a></li>
        <li><a href="<?php echo $is_disabled ? '#' : ''; ?>" id="scroll_Access2" <?php echo $is_disabled ? 'class="disabled"' : ''; ?>>アクセス</a></li>
        <li><a href="<?php echo $is_disabled ? '#' : ''; ?>" id="scroll_reserve2" <?php echo $is_disabled ? 'class="disabled"' : ''; ?>>席予約</a></li>
    </ul>
</nav>


<!-- HUMBURGER_MENU -->
<button class="hamburger-menu" id="js-hamburger-menu">
    <span class="hamburger-menu__bar"></span>
    <span class="hamburger-menu__bar"></span>
    <span class="hamburger-menu__bar"></span>
</button>

<!-- HUMBURGER_NAVIGATION -->
<nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list-item"><a href="#" class="navigation__link" id="scroll_Schedule">スケジュール</a></li>
      <li class="navigation__list-item"><a href="#" class="navigation__link" id="scroll_Access">アクセス</a></li>
      <li class="navigation__list-item"><a href="#" class="navigation__link" id="scroll_reserve">席予約</a></li>
    </ul>
</nav>

</header>



