
$(function(){
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
  });
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

// кнопка еще подкасты
$('.podcast__link').on('click', function(){
    $('.podcast-more').toggleClass('podcast-more--active');
  });
  // селект стайл

  $('.guest-block__title').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
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
  // dots: false,
  // arrows: false,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // loop: true,
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



