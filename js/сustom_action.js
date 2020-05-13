
$(document).ready(function() {
    var docWidth = $(document).width();
    var Select2ON 
  /* Swiper Slider */
  
  /* Слайдер навигации для главного блока оффера */
  
/*   var OfferSliderMainNav = new Swiper('.nav-slider.nav-offer-main', {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
          nextEl: '.swiper-button.swiper-button-next',
          prevEl: '.swiper-button.swiper-button-prev',
        },
    }); */
  
      // Если кол-во слайдов меньше 4 в верхнем слайдере навигации, то удалаяем стрелки и убираем отступы по сторонам //
/*   var lengthOfferSlideMainNav = $(".nav-slider.nav-offer-main .swiper-slide").length;
  
  if (lengthOfferSlideMainNav <= 4) {
      $('.nav-slider.nav-offer-main .swiper-button').remove();
      $('.offer-block-main__nav-slider').css({'padding':'0'})
  } */
  // ---------------------- //  
  
  /* Слайдер для главного блока оффера */
  
/*   var MainOfferSlider = new Swiper('.top-slider.main-offer-slider', {
      effect: 'fade',
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button.swiper-button-next',
        prevEl: '.swiper-button.swiper-button-prev',
      },
        thumbs: {
          swiper: OfferSliderMainNav
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
    });
  
    var lengthMainOfferSlide = $('.top-slider.main-offer-slider .swiper-slide').length;
  
  // Если в главном слайдере один слайд, то отключаем слайдер и удаляем слайдер навигации //
  if (lengthMainOfferSlide == 1) {
      MainOfferSlider.destroy()
      $('.top-slider.main-offer-slider .swiper-button').remove();
      $('.offer-block-main__nav-slider').remove()
  } */
  // --------------------- //
  
 /*  /* Слайдер для блока каталога */
  
/*   var CatalogSlider = new Swiper('.nav-slider.catalog-slider', {
      spaceBetween: 50,
      slidesPerView: 3,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
          nextEl: '.swiper-button.swiper-button-next',
          prevEl: '.swiper-button.swiper-button-prev',
        },
      breakpoints: {
        1200: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      }
    }); */
  
  
    /* Проверяем кол-во слайдов в слайдере каталога, если их меньше трех, то убираем стрелки навигации */
/*     var lengthCatalogSlider = $(".catalog-slider .swiper-slide").length;
  
  if (lengthCatalogSlider <= 3) {
      $('.nav-slider.catalog-slider .swiper-button').remove();
  }  */
  
  /* ------------------- */
  
  
  /* Слайдер навигации для слайдера тест-драйва  */
  
  /* var OfferSliderNav = new Swiper('.nav-slider.nav-offer', {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
          nextEl: '.swiper-button.swiper-button-next',
          prevEl: '.swiper-button.swiper-button-prev',
        },
    });
  
      // Если кол-во слайдов меньше 4 в верхнем слайдере навигации, то удалаяем стрелки и убираем отступы по сторонам //
  var lengthOfferSlideNav = $(".nav-slider.nav-offer .swiper-slide").length;
  
  if (lengthOfferSlideNav <= 4) {
      $('.nav-slider.nav-offer .swiper-button').remove();
      $('.offer-block__nav-slider').css({'padding':'0'})
  } */
  // ---------------------- //  
  
  /* Слайдер для блока тест-драйва  */
  
  /* var OfferSlider = new Swiper('.top-slider.offer-slider', {
      effect: 'fade',
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button.swiper-button-next',
        prevEl: '.swiper-button.swiper-button-prev',
      },
        thumbs: {
          swiper: OfferSliderNav
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
    });
  
    var lengthOfferSlider = $('.top-slider.offer-slider .swiper-slide').length;
  
  // Если в главном слайдере один слайд, то отключаем слайдер и удаляем слайдер навигации //
  if (lengthOfferSlider == 1) {
      OfferSlider.destroy()
      $('.top-slider.offer-slider .swiper-button').remove();
      $('.offer-block-main__nav-slider').remove()
  } */
  /* --------------*/
  
  /* End swiper Slider */
  
  
  
  
  
  
  // -------------------------------------------//
  
/*   $('.price-tech__marks--single:not(.allmarks)').click(function(e){
      e.preventDefault();
      $('.price-tech__marks--single:not(.allmarks)').removeClass('active');
      $(this).addClass('active')
  }) */
  // Убираем блок с подсказкой над марками по клику на крестик ////
/*   $('.price-tech__marks--tooltip .close-tooltip').click(function(e) {
      e.preventDefault();
      $('.price-tech__marks--tooltip').fadeOut()
  }) */
  


  
  //
  
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
  
  /* LightGallery */
  $(".lightgallery").lightGallery({
      share: false,
  });
  
  
  
  //timer
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();
          
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   /*  var seconds = Math.floor((distance % (1000 * 60)) / 1000); */
  
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
  /*   document.getElementById("seconds").innerHTML = seconds; */
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Время акции закончилось";
    }
  }, 1000);
  // end timer
  
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
          /* Отключаем выбор первого option во всех селектах на мобильных устройствах (в IOS опция не скрывается) */
  /*         $('.select-default').each(function(index,element){
              $(element).find('option').each(function(index,element){
                  if (index == 0){
                      $(this).attr('disabled','disabled')
                  }
              })
          }) */
      }
      return false
  }
  select_style(docWidth)
  
  /* Добавляем класс в селект в попапе для отступов */
  $('.popup__form--select-salon .select2-selection--single .select2-selection__rendered').click(function(e) {
      $('.select2-container--custom-select').addClass('popup__form--custom-select')
  })
  
  /* End select JS */
  
  
  
  /* Masked Input Phone */
  $(function(){
      $(".mask-phone").mask("+7 (999) 999-99-99");
    });
  /*--------------*/
  
  
  
  $('.popup__form--btn-blue:not(.filter-button):not(.subscribe-popup-btn)').click(function(e) {
      $(this).text('отправлено!')
  })
  
  $('.subscribe-block--btn-blue.desctop, .subscribe-modal-popup .subscribe-popup-btn').click(function(e) {
    $(this).text('Вы подписаны!')
  })
  
  
  
  /* ToolTip */
  $('.tooltip').tooltipster({
      theme: 'tooltipster-shadow',
      trigger: 'click'
  });
  $('.tooltip').click(function(e) {
    e.preventDefault();
  });
  
  /* Modal JS */
  $('.modal-click').click(function(event) {
      event.preventDefault();
      /* Функция блокировки скрола при раскрытии модального окна с задежкой по времени */
      setTimeout( function() {
          
          if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
      
            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Получаем позицию прокрутки
      
            document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = '-' + scrollPosition + 'px';
            document.body.style.left = '0';
            document.body.style.right = '0';
      
          }
      
        }, 10 ); 
        /* - Окончание функции блокировки скрола при раскрытии модального окна */
      $(this).modal({
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
    })
  
  /* End Modal JS */
  
  // добавляем пробелы в числа во всех тегах с классом this-number
      var ThisNumber = $('.this-number')
          ThisNumber.each(function(index, element){
              var valIn = $(this).text()
              var valInNew = valIn.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
              $(this).text(valInNew)
          });
  //----------------------//
  
  
  //проверка на ввод цифр в ипутах фильтра
/*   $('.input-price').bind("change keyup input click", function() {
      if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
      }
      })
      
      //добавляем пробелы в инпуты
      $('.input-price').bind('change keyup blur',function(e){
      var $this = $(this),
       valIn = $this.val(),  
      valInNew = valIn.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
      
      $this.val(valInNew);
      }); */
  
      var SubscribeBlock = $('.subscribe')
      var VisibleSubscribeBlock = false
  function ScrollControl(w) {
    // Делаем видимым блок с подпиской при прокрутке до 1/3 страницы //
    var HeightPage = $(document).height();
    var HeightSubscribeBlock = SubscribeBlock.height();
  $('.grey.footer-section').css('margin-bottom', HeightSubscribeBlock + 'px')
     //* Узнаем позицию кнопки фильтра и высоту кнопки на мобильных устройствах до 767px и высоту блока каталога чтобы сделать её фиксированной в мобиле */
   /*  if (w < 768) {
      var FilterButton = $(".catalog-block__filter-mobile")
      var FilterButtonHeight = FilterButton.height()
      var PositionFilterButton = FilterButton.offset().top
      var CatalogBlockHeight = $('.catalog-block__item-block').height()
    } */
  $(document).scroll(function() {
    
    var ScrollPositionNow = $(this).scrollTop();
      // Проверяем позицию скрола чтобы показать кнопку наверх //
      if (ScrollPositionNow > 100) {
          $('.top-button').addClass('show');
      } else {
          $('.top-button').removeClass("show");
      }
   // ------------------------------- //
  
  //На мобильном разрешении приклеиваем кнопку фильтра к верху окна ////
  /* if (w < 768) {
    if (ScrollPositionNow >= PositionFilterButton && ScrollPositionNow <= PositionFilterButton + CatalogBlockHeight) {
      $(FilterButton).addClass('fixed')
      $('body').css('margin-top', FilterButtonHeight + 'px')
    }
    if (ScrollPositionNow < PositionFilterButton) {
      $(FilterButton).removeClass('fixed')
      $('body').css('margin-top', '')
    }
    if (ScrollPositionNow >  PositionFilterButton + CatalogBlockHeight) {
      $(FilterButton).removeClass('fixed')
      $('body').css('margin-top', '')
    }
  } */
  
    var EndPagePosition = ScrollPositionNow + $(window).height()
    if (ScrollPositionNow >= HeightPage/3 && VisibleSubscribeBlock == false) {
      SubscribeBlock.addClass('visible').addClass('border-top');
      VisibleSubscribeBlock = true
    }
    if (EndPagePosition == HeightPage + HeightSubscribeBlock) {
      SubscribeBlock.removeClass('border-top');
      VisibleSubscribeBlock = false
    }
  })
  return false
  }
  ScrollControl(docWidth)
  
  
  // -------------Адаптив фильтра каталога -------------- //
  /* var FilterContent = $('.catalog-block__filter').children()
  var focusInputMobile = false
  function FilterAdaptive(w) {
      if (w<768) {
        $('.catalog-fitler-popup .input-price-block .input-price').on('focus',function(e){
          e.preventDefault();
          focusInputMobile = true
        })
      }
      FilterContent.each(function(index,element){
        if (w < 768) {
        if (focusInputMobile == false) {
        $(element).appendTo(".popup-filter__body")
        }
        else
        return false 
        }
        if (w >= 768) {
        $(element).appendTo(".catalog-block__filter")
        }
    })
    if (w >= 768) {
      focusInputMobile = false
    }
    return false
  }
  FilterAdaptive(docWidth) */
  // ------------------------------------//
  
  // Открывание всех марок по кнопке "Показать все марки" //
  var AllMarks= $('.price-tech__marks--single:not(.allmarks)')
  function ShowHideMarks (w) {
  AllMarks.each(function(index,element){
    if (w >= 1200) {
      if ($(element).hasClass('hide')) {
        $(element).removeClass('hide')
      }  
      if (index > 10 ) {
      $(element).addClass('hide');
      }
    }
    if (w >=768 && w < 1200) {
      if (index > 5 ) {
        $(element).addClass('hide');
        }
    }
    if (w < 768) {
      if ($(element).hasClass('hide')) {
        $(element).removeClass('hide')
      }  
    }
  })
  return false
  }
  ShowHideMarks(docWidth)
  
  $('.allmarks').click(function(e) {
      e.preventDefault();
      AllMarks.each(function(index,element) {
        if ($(element).hasClass('hide')){
          $(element).toggleClass('show');
        }
      })
      var AllMarksClick = $(this).find('.allmarks__text');
      var AllMarksText = AllMarksClick.text()
      if (AllMarksText == "Показать все марки"){
          $(AllMarksClick).text('Скрыть все марки')
          }
      if (AllMarksText =="Скрыть все марки") {
          $(AllMarksClick).text('Показать все марки')
          }
    });
  
  
  // Функция скрытие адресов автосалонов, если их больше двух /////
  /* var City2 = $('.address-salon .cities-block .cities-block__city:nth-child(2)') */
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
  
  // Анимация для якорных ссылок //
  var ScrollPadding;
  function animatedScroll(w) {
  $("body").on('click', "a[anchor='yes']", function(e){
      e.preventDefault();
      if (w >= 1200)
      ScrollPadding = 100;
      if (w < 1200)
      ScrollPadding = 50;
      $('html,body').stop().animate({ scrollTop:$(this.hash).offset().top - ScrollPadding}, 500);		
   });
  
  // Плавный скролл наверх по клику на кнопку //
  $('.top-button').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  }
  animatedScroll(docWidth)
  
  
  $(window).resize(function(event) {
      var new_docWidth = $(document).width();
      if (new_docWidth != docWidth) {
      select_style(new_docWidth);
/*       FilterAdaptive(new_docWidth); */
      ScrollControl(new_docWidth)
      customScrollBar(new_docWidth);
      HideCity(new_docWidth)
      }
      ShowHideMarks(new_docWidth)
  })
  
  
  });