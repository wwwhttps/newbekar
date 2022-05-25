var btn = document.querySelector(".btn3")
var man = document.querySelector(".man3")

function myfun () {

  var put = document.querySelector(".input-value2")
  var comment4 = document.querySelector(".comment5").value;
    put.innerHTML=comment4;
    man.classList.add("man4");
    
}
function remove(){
    man.classList.remove("man4");
}
