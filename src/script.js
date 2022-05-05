// MENU AMBURGER
$('.navbar__menu-btn').on('click', function() {
  $('.navbar__links').toggleClass('active');
  $(this).find('i').toggleClass('fa-bars');
  $(this).find('i').toggleClass('fa-times');
});






// CARROCEL

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    dots: false,
    prevArrow: `<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;`,
    nextArrow:`<button type="button" class="slick-next slider__prev-next-arrow">Previous</button>;`
  });

  $(".footer__form-button").on(clik, () => {
    const email = $('#email').val();
    Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'icaro_barbosa.com',
    From : email,
    Subject : "Por favor me add na newsletter",
  Body :`Ola! Gostaria de ser adicionado na newslatter do site.
  meu email é $(email). Obrigado`
}).then(
  message => alert(message)
);
  })
});