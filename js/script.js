$(document).ready(function () {
  $('.h-title__buttom').click(function (event) {
    $('.h-title__buttom,.h-title__items').toggleClass('active');
  });
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__title,.burger__block,.header__services').toggleClass('active');
  });
  $('.service-menu__burger').click(function (event) {
    $('.service-menu__burger,.service-menu__list,.service-menu__burger-link').toggleClass('active');
  });
});