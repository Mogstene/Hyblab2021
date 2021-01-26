// init du slider (qui peut aussi faire des fondus enchainé)
let mySlidr = slidr.create('slidr',{
    breadcrumbs: false,
    controls: 'none',
    direction: 'horizontal',
    fade: false,
    keyboard: true,
    overflow: true,
    pause: false,
    theme: '#222',
    timing: { 'fade': '0.5s ease-in' },
    touch: true,
    transition: 'linear'
  }).start();

console.log("Index")

// on s'occupe de la 1ère slide
let initSlide1 = function() {
  d3.select('#logo').on('click', function(){
      transition: 'linear';
      mySlidr.slide('page-2');
      initSlide2();
    });
}

initSlide1();
