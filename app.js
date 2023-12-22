var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}
window.onload = function() {
  var audio = document.querySelector("audio");
  audio.play();
};
