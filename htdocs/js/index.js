
// HEADERの自動スクロール



$(document).ready(function() {
  if ($('body').hasClass('page-index')) { // 現在のページが index.php かどうかをチェック

      // #scroll_Schedule
      $("#scroll_Schedule").click(function(event) {
          event.preventDefault();
          var position = $("#point_Schedule").offset().top;
          $("html,body").animate({
              scrollTop: position
          }, { queue: false });
      });

      // #scroll_Schedule2
      $("#scroll_Schedule2").click(function(event) {
          event.preventDefault();
          var position = $("#point_Schedule").offset().top;
          $("html,body").animate({
              scrollTop: position
          }, { queue: false });
      });

      // #scroll_Access
      $("#scroll_Access").click(function(event) {
          event.preventDefault();
          var position2 = $("#point_Access").offset().top;
          $("html,body").animate({
              scrollTop: position2
          }, { queue: false });
      });

      // #scroll_Access2
      $("#scroll_Access2").click(function(event) {
          event.preventDefault();
          var position2 = $("#point_Access").offset().top;
          $("html,body").animate({
              scrollTop: position2
          }, { queue: false });
      });

      // #scroll_reserve
      $("#scroll_reserve").click(function(event) {
          event.preventDefault();
          var position3 = $("#point_reserve").offset().top;
          $("html,body").animate({
              scrollTop: position3
          }, { queue: false });
      });

      // #scroll_reserve2
      $("#scroll_reserve2").click(function(event) {
          event.preventDefault();
          var position3 = $("#point_reserve").offset().top;
          $("html,body").animate({
              scrollTop: position3
          }, { queue: false });
      });
  }
});

// $("#scroll_Schedule").click(function(event){
//   event.preventDefault();
//   var position = $("#point_Schedule").offset().top;
//   $("html,body").animate({
//       scrollTop: position
//   }, {
//       queue: false
//   });
// });

// $("#scroll_Schedule2").click(function(event){
//   event.preventDefault();
//   var position = $("#point_Schedule").offset().top;
//   $("html,body").animate({
//       scrollTop: position
//   }, {
//       queue: false
//   });
// });


// var position2 = $("#point_Access").offset().top;

// $("#scroll_Access").click(function(event){
//   event.preventDefault();
//   var position2 = $("#point_Access").offset().top;
//   $("html,body").animate({
//       scrollTop: position2
//   }, {
//       queue: false
//   });
// });

// $("#scroll_Access2").click(function(event){
//   event.preventDefault();
//   var position2 = $("#point_Access").offset().top;
//   $("html,body").animate({
//       scrollTop: position2
//   }, {
//       queue: false
//   });
// });

// var position3 = $("#point_reserve").offset().top;

// $("#scroll_reserve").click(function(event){
//   event.preventDefault();
//   var position3 = $("#point_reserve").offset().top;
//   $("html,body").animate({
//       scrollTop: position3
//   }, {
//       queue: false
//   });
// });

// $("#scroll_reserve2").click(function(event){
//   event.preventDefault();
//   var position3 = $("#point_reserve").offset().top;
//   $("html,body").animate({
//       scrollTop: position3
//   }, {
//       queue: false
//   });
// });


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





$(document).ready(function() {
  $('form input, select').on('input change', function() {
    validation();
  });

  function validation() {
    const name = $('input[name="name"]').val().trim() !== ""; // 名前の入力確認
    const seat = $("select[name='saet']").val() !== ""; // シートの選択確認
    const email = $('input[type="email"]').val().trim() !== ""; // メールの入力確認
    const tel = $('input[type="tel"]').val(); // 電話番号の入力値
    
    // 電話番号を必須から除外した全項目のバリデーション
    const allValid = name && seat && email;

    // 「送信」ボタンの有効化/無効化
    $('input[type="submit"]').prop("disabled", !allValid);
  }

  $('.js-submit-validation').on('click', (e) => {
    const tel = $('input[type="tel"]').val().trim(); // 電話番号の入力値
    const tel_validation = tel ? /^0\d{9,10}$/.test(tel) : true; // 電話番号が入力されている場合のみバリデーション


    if (!tel_validation) {
      e.preventDefault();
      $('.telError').css('display', 'block')
    } else {
      $('.telError').css('display', 'none')
    }
  })
});
