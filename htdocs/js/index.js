
// HEADERの自動スクロール

document.getElementById('header-logo').addEventListener('click', function(event) {
  event.preventDefault(); // デフォルトのリンク挙動を無効化

  // 現在のページURLを取得
  const currentPage = window.location.pathname;

  if (currentPage === '/index.php') {
      // 現在のページが "index.php" の場合、ファーストビューにスムーズスクロール
      const firstViewSection = document.getElementById('lp-first-view');
      if (firstViewSection) {
          firstViewSection.scrollIntoView({ behavior: 'smooth' });
      }
  } else {
      // 他のページの場合、"index.php" にリダイレクト
      window.location.href = '/index.php#lp-first-view';
  }
});

$(document).ready(function() {
  // #scroll_Schedule のクリックイベント
  $("#scroll_Schedule").click(function(event) {
      event.preventDefault();
      if ($('body').hasClass('page-index')) { // 現在のページが index.php の場合
          var position = $("#point_Schedule").offset().top;
          $("html,body").animate({
              scrollTop: position
          }, { queue: false });
      } else { // 現在のページが index.php 以外の場合
          window.location.href = '/index.php#point_Schedule'; // index.php にリダイレクト
      }
  });

  // #scroll_Schedule2 のクリックイベント
  $("#scroll_Schedule2").click(function(event) {
      event.preventDefault();
      if ($('body').hasClass('page-index')) {
          var position = $("#point_Schedule").offset().top;
          $("html,body").animate({
              scrollTop: position
          }, { queue: false });
      } else {
          window.location.href = '/index.php#point_Schedule';
      }
  });

  // #scroll_Access のクリックイベント
  $("#scroll_Access").click(function(event) {
      event.preventDefault();
      if ($('body').hasClass('page-index')) {
          var position2 = $("#point_Access").offset().top;
          $("html,body").animate({
              scrollTop: position2
          }, { queue: false });
      } else {
          window.location.href = '/index.php#point_Access';
      }
  });

  // #scroll_Access2 のクリックイベント
  $("#scroll_Access2").click(function(event) {
      event.preventDefault();
      if ($('body').hasClass('page-index')) {
          var position2 = $("#point_Access").offset().top;
          $("html,body").animate({
              scrollTop: position2
          }, { queue: false });
      } else {
          window.location.href = '/index.php#point_Access';
      }
  });

  // #scroll_reserve のクリックイベント
  $("#scroll_reserve").click(function(event) {
      event.preventDefault();
      if ($('body').hasClass('page-index')) {
          var position3 = $("#point_reserve").offset().top;
          $("html,body").animate({
              scrollTop: position3
          }, { queue: false });
      } else {
          window.location.href = '/index.php#point_reserve';
      }
  });

  // #scroll_reserve2 のクリックイベント
  $("#scroll_reserve2").click(function(event) {
      event.preventDefault();
      if ($('body').hasClass('page-index')) {
          var position3 = $("#point_reserve").offset().top;
          $("html,body").animate({
              scrollTop: position3
          }, { queue: false });
      } else {
          window.location.href = '/index.php#point_reserve';
      }
  });
});


// HUMBURGER

$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});


// SWIPER

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.5, // 一度に表示する枚数
  spaceBetween: 20, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  }, 


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }


});



// // Schedule
$(function(){
  $(".schedule_tab").click(function(){
      let date = $(this).attr("id");    //schedule_tabのIDを抽出
      $(".schedule_tab").removeClass("active");   //schedule_tabのactive要素を削除
      $(this).addClass("active");　//schedule_tabのクリックされた要素に"active"を付与する
      $(".schedule_text").removeClass("active");　
      $("#"+date+"_TEXT").addClass("active");
  })
});



// フォームバリデーション

$(document).ready(function() {
  $('form input, select').on('input change', function() {
    validation();
  });

  function validation() {
    const name = $('input[name="name"]').val().trim() !== ""; // 名前の入力確認
    const seat = $("select[name='seat']").val() !== ""; // シートの選択確認
    const email = $('input[type="email"]').val().trim() !== ""; // メールの入力確認
    
    // 電話番号を必須から除外した全項目のバリデーション
    const allValid = name && seat && email;

    // 「送信」ボタンの有効化/無効化
    $('input[type="submit"]').prop("disabled", !allValid);
  }


  $('#form').on('submit', (e) => {
    const tel = $("input[type='tel']").val().trim(); // 電話番号の入力値
    const tel_validation = tel ? /^0\d{9,10}$/.test(tel) : true; // 電話番号が入力されている場合のみバリデーション

    if (!tel_validation) {
      e.preventDefault();
      $('.telError').css('display', 'block')
    } else {
      $('.telError').css('display', 'none')
    }

  })
});