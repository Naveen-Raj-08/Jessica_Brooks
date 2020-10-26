var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 120,
  fitWidth: true,
  horizontalOrder: true
});

var slide_Index = 1;

do_slide(slide_Index);

function slider(n) {
do_slide(slide_Index += n);
}
function do_slide(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slide_Index = 1}
    if (n < 1) {slide_Index = x.length}
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
    x[slide_Index-1].style.display = "block";  
}