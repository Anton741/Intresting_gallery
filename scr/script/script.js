const gallery = document.querySelector('.gallery__body');
const lastImg = document.querySelectorAll('.gallery__column').length;

console.log(lastImg);

const widthGallery = gallery.offsetWidth;
gallery.addEventListener('mousemove', () => {
  const possition = event.pageX - widthGallery / 2;
  console.log(Math.abs(possition));
  if (Math.abs(possition) < widthGallery) {
    // console.log(event.pageX);
    gallery.style.transform = `translateX(${-possition}px)`;
    gallery.classList.add('gallery__body__init');
  }
});

// gallery.addEventListener('mouseout', () => {
//   gallery.style.transform = `translateX(${0}px)`;
//   gallery.classList.remove('gallery__body__init');
// });
