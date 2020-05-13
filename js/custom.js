
$(document).ready(function() {
  var docWidth = $(document).width();
  var Select2ON 



/* Мобильное меню гамбургер */
  $('.mob-hamburger').click(function(e) {
    e.preventDefault();
    if (!$(this).hasClass("open")) {
      $(this).addClass("open");
    $('.header-land__nav-block').addClass("open");
    }
    else {
    $(this).removeClass("open");
    $('.header-land__nav-block').removeClass("open"); 
    }
  })

  /* Закрывваем меню при нажатии на ссылку */
  $('.nav__item').click(function(e){
    e.preventDefault();
    if ($('.mob-hamburger').hasClass('open')) {
      $('.mob-hamburger').removeClass('open')
    }
    if ($('.header-land__nav-block').hasClass('open')) {
      $('.header-land__nav-block').removeClass('open')
    }
  })


/* ---------------- */
var MobHeaderHeight
function FixedTopMenu(w) {
/* Появление меню при скролле наверх */
var HeaderHeight = $('.header').height();
//появление меню при скроле наверх
$('main').css('margin-top', HeaderHeight)

// Получаем высоту закрытого меню в смартфоне //
if (w < 786) {
  MobHeaderHeight = $('.header').height();
}

return false
}
FixedTopMenu(docWidth)
/*    --------------------------- */

// Анимация для якорных ссылок //
var ScrollPadding;
function animatedScroll(w) {
$("body").on('click', "a[anchor='yes']", function(e){
    e.preventDefault();
    if (w >= 1200)
    ScrollPadding = 100;
    if (w < 1200)
    ScrollPadding = 50;
    if (w >=768)
    $('html,body').stop().animate({ scrollTop:$(this.hash).offset().top - ScrollPadding - $('.header').height()}, 500);
    if (w < 768) {
    
    $('html,body').stop().animate({ scrollTop:$(this.hash).offset().top - ScrollPadding - MobHeaderHeight}, 500);
    }

 });
}
animatedScroll(docWidth)
// Плавный скролл наверх по клику на кнопку //
function scrollControl(w) {
$(window).scroll(function(){
        if ($(this).scrollTop() > $('.header').height()) {
            $('.top-button').addClass('show');
            if (w >= 768) {
              $('.header').addClass('mini')
            }
        } else {
            $('.top-button').removeClass('show');
            if (w >= 768) {
              $('.header').removeClass('mini')
            }
        }
        return false
        });
      return false
      }
scrollControl(docWidth)  

$('.top-button').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});



/* Begin ScrollBar Custom */
function customScrollBar(w) {
  if (w >= 768) {
$(".cities-block").customScrollbar({
    skin: "default-skin",
    preventDefaultScroll: true,
    hScroll: false,
    updateOnWindowResize: true
    })
  }
  if (w < 768) {
    $(".cities-block").customScrollbar('remove')
  }
  return false
}
customScrollBar(docWidth)


/* Select JS */
function select_style(w) {
    if (w >= 1200) 
    {
        $('.select-default').select2({
            minimumResultsForSearch: Infinity,
            theme: 'custom-select',
            language: "ru"
        });
        Select2ON = 1;
    }
    if (w < 1200) {
        if (Select2ON==1) {
        $('.select-default').select2('destroy');
        Select2ON= 0;
        }
    }
    return false
}
select_style(docWidth)

/* Добавляем класс в селект в попапе для отступов */
$('.popup__form--select-salon .select2-selection--single .select2-selection__rendered').click(function(e) {
    $('.select2-container--custom-select').addClass('popup__form--custom-select')
})

/* End select JS */



/* Modal JS */
/* $('.modal-click').click(function(event) {
    event.preventDefault(); */
    /* Функция блокировки скрола при раскрытии модального окна с задежкой по времени */
/*     setTimeout( function() {
        
        if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
    
          let scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Получаем позицию прокрутки
    
          document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = '-' + scrollPosition + 'px';
          document.body.style.left = '0';
          document.body.style.right = '0';
    
        }
    
      }, 10 );  */
      /* - Окончание функции блокировки скрола при раскрытии модального окна */
/*     $(this).modal({
      fadeDuration: 150,
      closeClass: 'close-custom',
      closeText: '<span class="visually-hidden">Закрыть</span>'
    });
  });

  $('.modal').on($.modal.BEFORE_CLOSE, function(event, modal) {
    event.preventDefault();
    if ( document.body.hasAttribute('data-body-scroll-fix')) {

      let scrollPosition = document.body.getAttribute('data-body-scroll-fix'); // Получаем позицию прокрутки из атрибута
  
      document.body.removeAttribute('data-body-scroll-fix'); // Удаляем атрибут
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
  
      window.scroll(0, scrollPosition); // Прокручиваем на полученное из атрибута значение
  
    }
  }) */

/* End Modal JS */

// Функция скрытие адресов автосалонов, если их больше двух /////
var cityAll = $('.cities-block__city');
var Position
function HideCity(w) {
  if (w < 768) {
    cityAll.each(function(index,element) {
      if (index > 1) {
        $(element).addClass('hide')
      }
    })
  }
  if (w >= 768) {
    cityAll.each(function(index,element) {
      if ($(element).hasClass('hide')) {
        $(element).removeClass('hide')
      }
      if ($(element).hasClass('show')) {
        $(element).removeClass('show')
      }
    })
  }
  return false
}
HideCity(docWidth)

if (docWidth < 768) {
$('.cities-block__city--allsities-view .link').click(function(e) {
  e.preventDefault();
  cityAll.each(function(index,element) {
    if ($(element).hasClass('hide'))
      $(element).toggleClass('show');
  })
  var text = $(this).text();
  if (text == "Показать ещё"){
      $(this).text('Скрыть')
      Position = $(window).scrollTop()
      }
  if (text =="Скрыть") {
      $('body, html').scrollTop(Position)
      $(this).text('Показать ещё')
      }
});
}

$(window).resize(function(event) {
    var new_docWidth = $(document).width();
    if (new_docWidth != docWidth) {
    FixedTopMenu(new_docWidth);
    scrollControl(new_docWidth)
    select_style(new_docWidth);
    customScrollBar(new_docWidth);
    HideCity(new_docWidth)
    }
})


});