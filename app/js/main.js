
// кастом селект передачи
$(function(){
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
  });

// бургер меню
  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu-btn').click(function(){
    $(this).toggleClass('open');
  });

// кнопка еще подкасты
$('.podcast__link').on('click', function(){
    $('.podcast-more').toggleClass('podcast-more--active');
  });


  $(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 470) $(".podcast-mobile").addClass("podcast-more");
    else $(".podcast-mobile").removeClass("podcast-more");
  
    $(window).resize(function() {
      var windowWidth = $(window).width();
      if (windowWidth < 470) $(".podcast-mobile").addClass("podcast-more");
      else $(".podcast-mobile").removeClass("podcast-more");
    });
  });
  

// что в эфире
  $('.header__bottom-mobile-box').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
  });

// гости
  $('.guest-block__title').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.guest-block__link').on('click', function(e){
    e.preventDefault();
    $('.guest-block__link').removeClass('guest-block__link--active');
    $(this).addClass('guest-block__link--active');

    $('.guest__bio').removeClass('guest__bio--active');
    $($(this).attr('href')).addClass('guest__bio--active');
  });
// скролл из нав бара
  $(".menu a").on("click", function (event) {

		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
  });

// слайдер жанры
$('.playlist__styles--mobile').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
}); 

// радио кнопка жанры
function clickRadio(el) {
  var siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i] != el)
      siblings[i].oldChecked = false;
  }
  if (el.oldChecked)
    el.checked = false;
  el.oldChecked = el.checked;
}

// валидация формы
const validation = new JustValidate('#form' , {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#FF6F6F',
  },
}
);
validation
.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Ошибка',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Ошибка',
   
  },
])
.addField('#email', [
  {
    rule: 'email',
    errorMessage: 'Ошибка',
  },
]);
    
    

  


  