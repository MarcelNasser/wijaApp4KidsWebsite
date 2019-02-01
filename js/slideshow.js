var slideIndex = 1;
var colors=["blue","green","red"];
var slides = document.getElementsByClassName("wijaSlide");
for (i = 0; i < slides.length; i++) {
  slides[i].style.backgroundColor=colors[i%colors.length];
}
var nextBtn=document.getElementsByClassName("next");
// jobInfo.innerHTML+="-"+nextBtn[0].style+"-\n";
nextBtn[0].style.right="400px";
// var dots = document.getElementsByClassName("dot");
var jobInfo = document.getElementById("responseLine");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	  slides[i].classList.remove("rotateLeft");
	  slides[i].classList.remove("rotateRight");

	  // jobInfo.innerHTML+="-"+i+"-\n";
	}
  // for (i = 0; i < dots.length; i++) {
      // dots[i].className = dots[i].className.replace(" active", "");
  // }
  refreshSlides(slideIndex);  
  // dots[slideIndex-1].className += " active";
}

function refreshSlides(n){
	slides[moulinette(n-1)].style.display = "block"; 
	slides[moulinette(n-2)].classList.add("rotateLeft");
	slides[moulinette(n-2)].style.display = "block"; 
	slides[moulinette(n)].classList.add("rotateRight");
	slides[moulinette(n)].style.display = "block"; 
}

function moulinette(n){
	index=n
	if (n >= slides.length) {index = 0}    
	if (n < 0) {index = slides.length-1}
	// jobInfo.innerHTML+="-"+index+"/"+slides.length+"-\n";
	return index
}
