const items = document.getElementsByClassName('portfolio-item');


for (let item of items) {
  item.addEventListener('mouseover', function() {
    this.firstElementChild.classList.add('desaturate');
  });
  item.addEventListener('mouseout', function() {
    this.firstElementChild.classList.remove('desaturate');
  });
}
