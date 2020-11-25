var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // autoHeight: true,
  // autoHeight слишком сильно сжимает/обрезает одну из картинок
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
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
