
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





// // フォームバリデーション
// $(document).ready(function() { 
//   $('form input, select').on('input change', function() { 
//     validation();
//   });

//   function validation() {
//     var select = $("select").val();
//     var tel = $('input[type="tel"]').val();
//     var tel_validation = true;


//     // 電話番号のバリデーション
//     if (tel) {
//       const regexp = /^0\d{9,10}$/;
//       tel_validation = regexp.test(tel);
//     }

//     // 各入力欄のチェック
//     if (
//       $('input[name="name"]').val().trim() !== "" &&
//       $('input[type="email"]').val().trim() !== "" &&
//       select !== "" &&
//       tel_validation
//     ) {
//       $('input[type="submit"]').prop("disabled", false);
//     } else {
//       $('input[type="submit"]').prop("disabled", true);
//     }
//   }

// });

// $(document).ready(function() {
//   // 入力や選択変更時にバリデーションを実行
//   $('form input, select').on('input change', function() {
//       validation();
//   });

//   // submit時の電話番号バリデーション処理
//   $('form').on('submit', function(event) {
//       var tel = $('input[type="tel"]').val();

//       // 電話番号の文字数チェック
//       if (tel.length !== 0 && tel.length !== 9 && tel.length !== 10) {
//           event.preventDefault(); // フォーム送信を停止
//           $('.no').addClass('active').text('電話番号は0文字、9文字、または10文字である必要があります。');
//           return false; // 処理終了
//       } else {
//           $('.no').removeClass('active').text(''); // 条件を満たした場合、エラーメッセージを削除
//       }
//   });

//   function validation() {
//       var select = $("select").val();
//       var tel = $('input[type="tel"]').val();
//       var tel_validation = true;

//       // 電話番号のバリデーション（形式チェック）
//       if (tel) {
//           const regexp = /^0\d{8,9}$/; // 正しい形式をチェック（0から始まる9桁または10桁）
//           tel_validation = regexp.test(tel);
//       }

//       // 各入力欄のチェック
//       if (
//           $('input[name="name"]').val().trim() !== "" &&
//           $('input[type="email"]').val().trim() !== "" &&
//           select !== "" &&
//           tel_validation
//       ) {
//           $('input[type="submit"]').prop("disabled", false);
//       } else {
//           $('input[type="submit"]').prop("disabled", true);
//       }
//   }
// });


$(document).ready(function() {
  $('form input, select').on('input change', function() {
    validation();
  });

  function validation() {
    const name = $('input[name="name"]').val().trim() !== ""; // 名前の入力確認
    const seat = $("select[name='seat']").val() !== ""; // シートの選択確認
    const email = $('input[type="email"]').val().trim() !== ""; // メールの入力確認
    const tel = $('input[type="tel"]').val(); // 電話番号の入力値
    
    // 電話番号を必須から除外した全項目のバリデーション
    const allValid = name && seat && email;

    // 「送信」ボタンの有効化/無効化
    $('input[type="submit"]').prop("disabled", !allValid);
  }

  $('.js-submit-validation').on('click', (e) => {
    const tel = $('input[type="tel"]').val(); // 電話番号の入力値
    const tel_validation = tel ? /^0\d{9,10}$/.test(tel) : true; // 電話番号が入力されている場合のみバリデーション
    
    if (!tel_validation) {
      e.preventDefault();
      $('#telError').css('display', 'block')
    } else {
      $('#telError').css('display', 'none')
    }
  })
});