var hamburger = document.querySelectorAll(".hamburger")[0]
var m = document.querySelectorAll(".m")[0]
var t = document.querySelectorAll(".t")[0]


hamburger.addEventListener("click", function(){
    m.classList.add("menu")
    m.classList.remove("hidden")
    t.classList.remove("hidden-t")
})