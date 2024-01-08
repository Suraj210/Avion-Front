// Card Js

let buy = document.querySelectorAll("#products .buy");
let remove = document.querySelectorAll("#products .remove");

buy.forEach((elem) => {
  elem.addEventListener("click", function () {
    this.parentNode.parentNode.classList.add("clicked");
  });
});

remove.forEach((elem) => {
  elem.addEventListener("click", function () {
    this.parentNode.parentNode.classList.remove("clicked");
  });
});

// $(".buy").click(function () {
//   $(".bottom").addClass("clicked");
// });

// $(".remove").click(function () {
//   $(".bottom").removeClass("clicked");
// });

// Card wishlist Js

let wishlist = document.querySelectorAll("#products .wishlist");

wishlist.forEach((elem) => {
  elem.addEventListener("click", function () {
    this.classList.toggle("added");
  });
});
