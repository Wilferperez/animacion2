var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

console.log("cont >>> ", $cont);
console.log("elsArr >>> ", $elsArr);
console.log("closeBtnsArr >>> ", $closeBtnsArr);

setTimeout(() => {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach((el) => {
  console.log("$el >>> ", el);
  el.addEventlistener("click", () => {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("S--el-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventlistener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--el-active");
    document.querySelectorAll(".el.s--active").classList.remove("s--active");
  });
});
