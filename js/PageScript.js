$(document).ready(function(){
$(".top_header a, footer a[href='#myPage']").on('click', function(event) {
if (this.hash !== "") {
  event.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){
    window.location.hash = hash;
  });
} 
});

$(window).scroll(function() {
$(".slideanim").each(function(){
  var pos = $(this).offset().top;

  var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
});
});
});
//Counting
$('.number').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

// Review Rating
jQuery(document).ready(function($){
    
$(".btnrating").on('click',(function(e) {

var previous_value = $("#selected_rating").val();

var selected_value = $(this).attr("data-attr");
$("#selected_rating").val(selected_value);

$(".selected-rating").empty();
$(".selected-rating").html(selected_value);

for (i = 1; i <= selected_value; ++i) {
$("#rating-star-"+i).toggleClass('btn-warning');
$("#rating-star-"+i).toggleClass('btn-default');
}

for (ix = 1; ix <= previous_value; ++ix) {
$("#rating-star-"+ix).toggleClass('btn-warning');
$("#rating-star-"+ix).toggleClass('btn-default');
}

}));
  
});



//
let numbers = [1,2,3,4,5,6,7,8,9];
function isoddnumbers(number){
  return number % 2;
}
function oddnumber=numbers.filter(isoddnumbers){
console.log(oddnumber);
}