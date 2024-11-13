/* 스크롤 이벤트 감지해서 헤더 고정 or 숨기기 */
$(document).ready(function () {
  let lastScrollTop = 0;
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let headerHeight = $(".header").outerHeight();

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      $(".header").removeClass("header__fixed"); 
    } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight) {
      $(".header").addClass("header__fixed");  // 스크롤을 올릴 때 헤더를 고정
    }
    if (scrollTop <= headerHeight) {
      // 단 스크롤 높이 값이 headerHeight값보다 작아진다면 relative로 다시 전환하기 (최상단 애니메이션 막기)
      $(".header").removeClass("header__fixed");
    }
    lastScrollTop = scrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤이 0일 때 음수로 가지 않게 함
  });
});

/** 헤더 영역 토글 함수 active 값에 따라 펼치기 */
$(document).ready(function () {
  const gnbTop__Menu = $("#gnb1 > .top__menu > li.plus > a");
  const gnbSub__Menu = $("#gnb1 .sub__menu > ul > li > a");

  let gnbOpenMenu;

  gnbTop__Menu.click(function () {
    gnbOpenMenu = $(this).parent();
    const isItOpen = gnbOpenMenu.hasClass("active");

    if (isItOpen) {
      gnbOpenMenu.removeClass("active");
      $(".gnb__bg").hide();
    } else {
      gnbTop__Menu.parent().removeClass("active");
      gnbSub__Menu.parent().removeClass("active");
      gnbOpenMenu.addClass("active");
      $(".gnb__bg").show();
    }

    const firstSub__MenuItem = gnbOpenMenu.find(
      ".sub__menu ul li:first-child a"
    );
    if (firstSub__MenuItem.length > 0) {
      gnbOpenMenu.siblings().find(".sub__menu ul li").removeClass("active");
      firstSub__MenuItem.parent().addClass("active");
    }
  });
  gnbSub__Menu.click(function () {
    const gnbOpenSub__Menu = $(this).parent();
    gnbSub__Menu.parent().removeClass("active");
    gnbOpenSub__Menu.addClass("active");
  });

  $(".gnb__bg").click(function () {
    gnbOpenMenu.removeClass("active");
    $(this).hide();
  });
});

// 라디오 버튼 클릭 시 clicked 클래스 추가 (클릭 시 notchecked 스타일 변경)
const radioAgree = $('input[type="radio"]')
radioAgree.click(function() {
  radioAgree.addClass('clicked');
});

/* 웹 탭 변환 Open Tab web */
$('.tab__content .tab').hide().eq(0).show();
$('.tab__btn button').eq(0).addClass('active');
$(".tab__wrap .tab__btn button").click(function () {
  var idx = $(this).parent().index();
  $(".tab__content .tab").hide();
  $(".tab__content .tab").eq(idx).fadeIn();
  $(".tab__btn button").removeClass("active");
  $(this).addClass("active");
});

/* 모바일 탭 변환 mobile Tab */
$(".mobile__tab .swiper-slide button").eq(0).addClass('active');
$(".mobile__tab .swiper-slide button").click(function(){
  var idx = $(this).parent().index()
  $(".tab__content .tab").hide();
  $(".tab__content .tab").eq(idx).fadeIn();
  $(".mobile__tab .swiper-slide button").removeClass("active")
  $(this).addClass("active")
})

// 모바일 클릭 GNB 이벤트
let submenuUl = $('.submenu__wrap .submenu');
submenuUl.hide().eq(0).show();
$("#gnb2 .menu__wrap a").eq(0).addClass("active");
  $("#gnb2 .menu__wrap a").click(function (event) {
    event.preventDefault();
    var idx = $(this).parent().index()
    submenuUl.hide().eq(idx).fadeIn();
    $("#gnb2 .menu__wrap a").removeClass("active");
    $(this).addClass("active");
  });

// 모달 닫기 이벤트 핸들러
$(".modal__close button").click(function () {
  $(".modal, .modal__bg").hide(); // 모든 모달 요소를 숨김
});

/** 메뉴 클릭 시 gnb2 메뉴 토글 */
$(".hamburger").on("click", function () {
  $("#gnb2").addClass("active");
  $("body").css("overflow", "hidden");
});

$(".gnb__close").click(function () {
  $("#gnb2").removeClass("active");
  $("body").css("overflow", "");
});

// 메뉴 권한 애니메이션 높이 제어
$(document).ready(function () {
  let menuList = $(".menu-wrap");
  let menuHeight = menuList.innerHeight();
  menuList.css("height", menuHeight);
});

// 테이블 클릭 이벤트  
$('table.click tr').click(function(){
  $('table.click tr').removeClass('on');
  $(this).addClass("on")
})

// 테이블 페이지 네이션 전환
$(document).ready(function () {
  let tablePagination = $(".pagination .page-link");
  tablePagination.click(function (e) {
    e.preventDefault();
    $(this).addClass("active");
    tablePagination.not($(this)).removeClass("active");
  });
  tablePagination.eq(0).addClass("active");
});


// 도움말 버튼 클릭 시 창 팝업
$(".info__tip").on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("active");
  $(this).next(".tooltip__layer").toggleClass("active");
});
$(".tooltip__layer .info__close__btn").on("click", function (e) {
  e.stopPropagation();
  $(this).closest(".tooltip__layer").removeClass("active");
  $(this).closest(".tooltip__layer").prev(".info__tip").removeClass("active");
});

// 업로드 임시 이벤트 제거
$(".btn__upload").click(function (e) {
  e.preventDefault();
});

// 비밀번호 숨기기 보이기 코드, 버튼 클릭 시. text 박스로 변경
$(document).ready(function(){                      
$('.secret__Check').each(function(){
      const pwInput = $(this).find('.password__input')
      const showButton = $(this).find('.icon__pw-visible')
      const showIcon = $(this).find('.show__icon')
      showButton.on('click', function() {
      const type = pwInput.attr('type') === 'password' ? 'text' : 'password';
      pwInput.attr('type', type);
      const iconSrc = type === 'password' ? 'img/icon__see.svg' : 'img/icon__see-visible.svg';
      showIcon.attr('src', iconSrc);
    });
  })   
})

// 노동조합 규약명 추가 및 삭제 함수
$(document).ready(function () {
  $(".form__body").on("click", ".btn__add", function () {
      const template = document.getElementById("row-template");
      const newRow = template.content.cloneNode(true);
      const fileIndex = `file_${Date.now()}`;
      const newFileInput = newRow.querySelector(".file__post");
      newFileInput.id = `profile_pics${fileIndex}`;
      newRow.querySelector(".btn__file__select").setAttribute("for", `profile_pics${fileIndex}`);
      newRow.querySelector(".btn__file__select--mo").setAttribute("for", `profile_pics${fileIndex}`);
      $(".form__body").append(newRow); // 새로운 행 추가
    });

      $(".form__body").on("click", ".btn__remove", function () {
      $(this).closest(".form__row").remove();
      });
    });

// 파일명 함수
$(document).ready(function () {
  let preview = $(".preview");

  function displayFileNames(event) {
      let currentInput = $(event.target);
      let previewBox = currentInput.siblings(".preview");
      previewBox.empty();
      const currentFile = currentInput[0].files;

      if (currentFile.length === 0) {
        const para = $("<span>").text("아무 파일도 입력되지 않았어요");
        previewBox.append(para);
      } else {
        const fileList = $("<div>");
        previewBox.append(fileList);

      for (const file of currentFile) {
        const listItem = $("<p>").text(file.name).addClass("upload__file__name");
        fileList.append(listItem);
      }
    }
  }
  $(document).on('change', '.file__post', displayFileNames)
});


/* Modal */
var $this;
$(".openPopup").on("click", function(event) {
  $this = $(this);
  $("#popup").fadeIn(400).attr("tabindex", 0).show().focus();; 
  $("body").append('<div class="bgPopup"></div>');
  $('body').addClass('overflow-rock')
});

/* popup bg 클릭 시 팝업 및 배경 비활성화 */
$('body').on('click', '.bgPopup', function() {
  $('#popup').fadeOut()
  $(this).fadeOut(); 
  $('body').removeClass('overflow-rock')
});

$("#popup .close").on("click", function(event) { 
  $("#popup").fadeOut(400); 
  $(".bgPopup").fadeOut(400);
  $('body').removeClass('overflow-rock')
});

/** 모바일 슬라이드 토글 */
let dataOpen = $(".data--open");
$(document).ready(function () {
  dataOpen.click(function () {
    var currentSlide = $(this).next(".mo__slide");
    $(this).next(".mo__slide").slideToggle();
    $(this).toggleClass("on").siblings().removeClass("on");
    dataOpen.not($(this)).removeClass('on');
    $(".mo__slide").not(currentSlide).slideUp();
  });
  $(".mo__slide").slideUp();
});

/* 공시 열람 모바일 애니메이션 */
$('.mo__slide .acordian__table .t__title').on('click', function(){
  /* 클릭 시 자신을 포함한 tr을 찾아 해당 요소 내부에 td 모두 display block */
  let parentTr = $(this).closest('tr');
  $('.mo__slide > table tr').not(parentTr).removeClass('is-open')
  parentTr.toggleClass('is-open')
})

/* 공시 열람 depth 토글 애니메이션 */
$('.mo__slide td:not(.depth-1)').hide()
$('.mo__slide .sub__t__title').on('click', function(){
  $(this).toggleClass('is-subopen');
})
$('.mo__slide .sub__t__title.depth-1').on('click',function(){
  $(this).siblings('.depth-2').toggle();
})
$('.mo__slide .sub__t__title.depth-2').on('click',function(){
  $('.mo__slide .depth-2').not($(this)).removeClass('is-subopen');
  $('.mo__slide .depth-2').not($(this)).nextUntil('.depth-2').filter('.depth-3').hide();
  // 클릭되지 않은 depth-2의 옆 depth-3 hide하기
  $(this).nextUntil('.depth-2').filter('.depth-3').toggle();
})












