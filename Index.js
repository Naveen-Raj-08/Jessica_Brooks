var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 120,
  fitWidth: true,
  horizontalOrder: true
});


// var modal = document.getElementById("myModal");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// var captionText = document.getElementById("caption");

// img.onclick = function(){
//   modal.style.display = "flex";
//   captionText = modalImg;
//   modalImg = img;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }
