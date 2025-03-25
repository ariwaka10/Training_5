
// HEADERの自動スクロール

var position = $("#point_Schedule").offset().top;

$("#scroll_Schedule").click(function(event){
  event.preventDefault();
  var position = $("#point_Schedule").offset().top;
  $("html,body").animate({
      scrollTop: position
  }, {
      queue: false
  });
});

$("#scroll_Schedule2").click(function(event){
  event.preventDefault();
  var position = $("#point_Schedule").offset().top;
  $("html,body").animate({
      scrollTop: position
  }, {
      queue: false
  });
});


var position2 = $("#point_Access").offset().top;

$("#scroll_Access").click(function(event){
  event.preventDefault();
  var position2 = $("#point_Access").offset().top;
  $("html,body").animate({
      scrollTop: position2
  }, {
      queue: false
  });
});

$("#scroll_Access2").click(function(event){
  event.preventDefault();
  var position2 = $("#point_Access").offset().top;
  $("html,body").animate({
      scrollTop: position2
  }, {
      queue: false
  });
});

var position3 = $("#point_reserve").offset().top;

$("#scroll_reserve").click(function(event){
  event.preventDefault();
  var position3 = $("#point_reserve").offset().top;
  $("html,body").animate({
      scrollTop: position3
  }, {
      queue: false
  });
});

$("#scroll_reserve2").click(function(event){
  event.preventDefault();
  var position3 = $("#point_reserve").offset().top;
  $("html,body").animate({
      scrollTop: position3
  }, {
      queue: false
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
    var select = $("select").val();
    var tel = $('input[type="tel"]').val();
    var tel_validation = true;

    // 電話番号のバリデーション
    if (tel) {
      const regexp = /^0\d{9,10}$/;
      tel_validation = regexp.test(tel);
    }

    // 各入力欄のチェック
    if (
      $('input[name="name"]').val().trim() !== "" &&
      $('input[type="email"]').val().trim() !== "" &&
      select !== "" &&
      tel_validation
    ) {
      $('input[type="submit"]').prop("disabled", false);
    } else {
      $('input[type="submit"]').prop("disabled", true);
    }
  }
});











