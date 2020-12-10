/**============ 1, Responsive Menu ============= */
var toggleMenu = document.querySelector(".header__bar-button");
var topNav = document.querySelector(".header__bar-menu");
console.log(toggleMenu);
console.log(topNav);
toggleMenu.addEventListener("click", function () {
  topNav.classList.toggle("active");
  document.querySelector(".header").classList.toggle("color");
});
//**================== 3, Sticky Menu ==================== **//
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").classList.add("record");
    document.querySelector(".header__bar-logo").classList.add("show");
  } else {
    document.querySelector(".header").classList.remove("record");
    document.querySelector(".header__bar-logo").classList.remove("show");
  }
}
//**================== 4, Vanilla Menu ==================== **//
function functionScroll() {
  var section = document.querySelectorAll(".section");
  (sections = {}), (i = 0);

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  for (let i in sections) {
    if (sections[i] <= window.pageYOffset + 72) {
      document.querySelector(".appear").classList.remove("appear");
      document.querySelector("a[href*=" + i + "]").classList.add("appear");
      topNav.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", functionScroll);
window.addEventListener("resize", functionScroll);