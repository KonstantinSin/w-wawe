
$(function(){
// кнопка еще подкасты
$('.podcast__link').on('click', function(){
    $('.podcast-more').toggleClass('podcast-more--active');
  });
  // селект стайл
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
  $('.guest-block__title').click(function(event){
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $(".menu a").on("click", function (event) {

		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
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


