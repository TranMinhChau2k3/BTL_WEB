$(document).ready(function () {

  var myCarousel = document.getElementById('carouselExampleIndicators');
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000 // milliseconds
  });
  
  let newArrivals = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/BupBe/BB_1.1.png',
      price: 399.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/BupBe/BB_1.9.png',
      price: 299.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/BupBe/BB_2.3.png',
      price: 399.0,
    },
    {
      id: 4,
      name: '',
      imgUrl: '../img/BupBe/BB_2.5.png',
      price: 199.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.3.png',
      price: 599.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.1.png',
      price: 599.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.3.png',
      price: 599.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.3.png',
      price: 599.0,
    },
    {
      id: 9,
      name: '',
      imgUrl: '../img/Nhac/Nhac_3.5.png',
      price: 599.0,
    },
    {
      id: 10,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.1.png',
      price: 599.0,
    },
    {
      id: 11,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.3.png',
      price: 599.0,
    },
    {
      id: 12,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.5.png',
      price: 599.0,
    },
  ];
  let newDress = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/Trung/T_1.1.png',
      price: 499.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/Bep/Bep_1.9.png',
      price: 549.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/BupBe/BB_3.7.png',
      price: 649.0,
    },
    {
      id: 4,
      name: 'I',
      imgUrl: '../img/Nhac/Nhac_3.7.png',
      price: 599.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.7.png',
      price: 599.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/Bep/Bep_3.5.png',
      price: 599.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.1.png',
      price: 599.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.7.png',
      price: 599.0,
    },
  ];

  let imgUrl = null;
  $('.card-img-arrivals').filter(function (idx) {
    $(this).hover(
      function () {
        imgUrl = $(this).attr('src');
        $(this).attr('src', newArrivals[idx].imgUrl);
        $(this).css('cursor', 'zoom-in');
      },
      function () {
        $(this).attr('src', imgUrl);
      }
    );
  });

  $('.card-img-dress').filter(function (idx) {
    $(this).hover(
      function () {
        imgUrl = $(this).attr('src');
        $(this).attr('src', newDress[idx].imgUrl);
        $(this).css('cursor', 'zoom-in');
      },
      function () {
        $(this).attr('src', imgUrl);
      }
    );
  });

  document.getElementById("menu-product").addEventListener("click", function() {
    var boxMenuItem = document.querySelector(".box-menu-item");
    if (boxMenuItem.style.display === "none" || boxMenuItem.style.display === "") {
        boxMenuItem.style.display = "block";
    } else {
        boxMenuItem.style.display = "none";
    }
});


});

    
