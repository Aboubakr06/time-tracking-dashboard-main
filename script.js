let MenuOp = document.querySelector(".menu-open");
let MenuCl = document.querySelector(".menu-close");
let MenuEl = document.querySelector(".menu");

MenuOp.addEventListener('click', function () {
  MenuCl.classList.remove('hidden');
  MenuEl.classList.remove('max-lg:hidden');
  MenuOp.classList.add('hidden');
});

MenuCl.addEventListener('click', function () {
  MenuCl.classList.add('hidden');
  MenuEl.classList.add('max-lg:hidden');
  MenuOp.classList.remove('hidden');
});