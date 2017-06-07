var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace("w3-white", "");
  // }
  x[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " w3-white";
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlidestwo");
  var dots = document.getElementsByClassName("demotwo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace("w3-white", "");
  // }
  x[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " w3-white";
}