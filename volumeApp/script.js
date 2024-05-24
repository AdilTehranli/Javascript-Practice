let volume = document.querySelector(".volume_border");
let volume_bar = document.querySelector(".child");
let volume_width = parseInt(volume.style.width);
faiz.innerText =
  Math.round((parseInt(volume_bar.style.width) / volume_width) * 100) + " %";
volume.addEventListener("click", function (e) {
  volume_bar.style.width = e.offsetX + "px";
  let percent = Math.round((e.offsetX / volume_width) * 100);
  faiz.innerText = percent + " %";
});

minus.addEventListener("click", function () {
  let a = parseInt(faiz.innerText);
  if (a > 0) {
    a--;
  }
  faiz.innerText = a + "%";
  volume_bar.style.width = a + "% ";
});
plus.addEventListener("click", function () {
  let p = parseInt(faiz.innerText);
  if (p < 100) {
    p++;
  }
  faiz.innerText = p + " %";
  volume_bar.style.width = p + "%";
});
