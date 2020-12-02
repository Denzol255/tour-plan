var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // autoHeight: true,
  // autoHeight слишком сильно сжимает/обрезает одну из картинок
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect:"coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // autoHeight: true,
  // autoHeight слишком сильно сжимает/обрезает одну из картинок
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [7.838196, 98.298813],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [7.838196, 98.298813],
        },
        // Свойства.
        properties: {
          // Контент метки.
          iconContent: "",
          hintContent: "Hilton",
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#greenDotIconWithCaption',
      }
    );

  myMap.geoObjects
    .add(myGeoObject);
}

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function() {
  console.log("Кнопка нажата");
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--active')
  document.querySelector(".menu-button").classList.toggle('menu-button--active')
   document.querySelector("body").classList.toggle('scroll--lock')
})