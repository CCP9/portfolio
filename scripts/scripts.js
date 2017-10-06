$(document).ready( function() {
  $('.cs-nav-link').click(function() {
    $('.cs-nav-link').removeClass('active');
    $(this).addClass('active');
  })
})

function smoothScrollingTo(target){
  $('html,body').animate({scrollTop:$(target).offset().top}, 500);
}

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    smoothScrollingTo(this.hash);
});



