function taoDanhSachSanPham(option = 'SƯU TẬP TRỨNG') {
  const shirtList = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/Trung/t_1.0.png',
      price: 399.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/Trung/t_1.2.png',
      price: 299.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/Trung/t_1.4.png',
      price: 399.0,
    },
    {
      id: 4,
      name: '',
      imgUrl: '../img/Trung/t_1.6.png',
      price: 349.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/Trung/t_1.8.png',
      price: 399.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/Trung/t_2.0.png',
      price: 449.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/Trung/t_2.2.png',
      price: 449.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/Trung/t_2.4.png',
      price: 449.0,
    },
    {
      id: 9,
      name: '',
      imgUrl: '../img/Trung/t_2.6.png',
      price: 449.0,
    },
    {
      id: 10,
      name: '',
      imgUrl: '../img/Trung/t_2.8.png',
      price: 449.0,
    },
    {
      id: 11,
      name: '',
      imgUrl: '../img/Trung/t_3.0.png',
      price: 449.0,
    },
    {
      id: 12,
      name: '',
      imgUrl: '../img/Trung/t_3.2.png',
      price: 449.0,
    },
    {
      id: 13,
      name: '',
      imgUrl: '../img/Trung/t_3.4.png',
      price: 449.0,
    },
    {
      id: 14,
      name: '',
      imgUrl: '../img/Trung/t_3.6.png',
      price: 449.0,
    },
    {
      id: 15,
      name: '',
      imgUrl: '../img/Trung/t_3.8.png',
      price: 449.0,
    },
  ];

  const dressList = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.0.png',
      price: 499.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.2.png',
      price: 549.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.4.png',
      price: 649.0,
    },
    {
      id: 4,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.6.png',
      price: 599.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_1.8.png',
      price: 599.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.0.png',
      price: 599.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.2.png',
      price: 599.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.4.png',
      price: 599.0,
    },
    {
      id: 9,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.6.png',
      price: 599.0,
    },
    {
      id: 10.,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_2.8.png',
      price: 599.0,
    },
    {
      id: 11,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.0.png',
      price: 599.0,
    },
    {
      id: 12,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.2.png',
      price: 599.0,
    },
    {
      id: 13,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.4.png',
      price: 599.0,
    },
    {
      id: 14,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.6.png',
      price: 599.0,
    },
    {
      id: 15,
      name: '',
      imgUrl: '../img/SieuNhan_RoBot/SN_3.8.png',
      price: 599.0,
    },
  ];

  const skirtList = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.0.png',
      price: 399.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.2.png',
      price: 399.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.4.png',
      price: 399.0,
    },
    {
      id: 4,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.6.png',
      price: 199.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/Nhac/Nhac_1.8.png',
      price: 199.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.0.png',
      price: 499.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.2.png',
      price: 499.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.4.png',
      price: 499.0,
    },
    {
      id: 9,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.6.png',
      price: 499.0,
    },
    {
      id: 10,
      name: '',
      imgUrl: '../img/Nhac/Nhac_2.8.png',
      price: 499.0,
    },
    {
      id: 11,
      name: '',
      imgUrl: '../img/Nhac/Nhac_3.0.png',
      price: 499.0,
    },
    {
      id: 12,
      name: '',
      imgUrl: '../img/Nhac/Nhac_3.2.png',
      price: 499.0,
    },
    {
      id: 13,
      name: '',
      imgUrl: '../img/Nhac/Nhac_3.4.png',
      price: 499.0,
    },
    {
      id: 14,
      name: '',
      imgUrl: '../img/Nhac/Nhac_3.6.png',
      price: 499.0,
    },
    {
      id: 15,
      name: '',
      imgUrl: '../img/Nhac/Nhac_3.8.png',
      price: 499.0,
    },
  ];

  const pantList = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/BupBe/BB_1.0.png',
      price: 499.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/BupBe/BB_1.2.png',
      price: 399.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/BupBe/BB_1.4.png',
      price: 599.0,
    },
    {
      id: 4,
      name: '',
      imgUrl: '../img/BupBe/BB_1.6.png',
      price: 299.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/BupBe/BB_1.8.png',
      price: 599.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/BupBe/BB_2.0.png',
      price: 599.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/BupBe/BB_2.2.png',
      price: 599.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/BupBe/BB_2.4.png',
      price: 599.0,
    },
    {
      id: 9,
      name: '',
      imgUrl: '../img/BupBe/BB_2.6.png',
      price: 599.0,
    },
    {
      id: 10,
      name: '',
      imgUrl: '../img/BupBe/BB_2.8.png',
      price: 599.0,
    },
    {
      id: 11,
      name: '',
      imgUrl: '../img/BupBe/BB_3.0.png',
      price: 599.0,
    },
    {
      id: 12,
      name: '',
      imgUrl: '../img/BupBe/BB_3.2.png',
      price: 599.0,
    },
    {
      id: 13,
      name: '',
      imgUrl: '../img/BupBe/BB_3.4.png',
      price: 599.0,
    },
    {
      id: 14,
      name: '',
      imgUrl: '../img/BupBe/BB_3.6.png',
      price: 599.0,
    },
    {
      id: 15,
      name: '',
      imgUrl: '../img/BupBe/BB_3.8.png',
      price: 599.0,
    },
  ];

  const bepList = [
    {
      id: 1,
      name: '',
      imgUrl: '../img/Bep/Bep_1.0.png',
      price: 499.0,
    },
    {
      id: 2,
      name: '',
      imgUrl: '../img/Bep/Bep_1.2.png',
      price: 399.0,
    },
    {
      id: 3,
      name: '',
      imgUrl: '../img/Bep/Bep_1.4.png',
      price: 599.0,
    },
    {
      id: 4,
      name: '',
      imgUrl: '../img/Bep/Bep_1.6.png',
      price: 299.0,
    },
    {
      id: 5,
      name: '',
      imgUrl: '../img/Bep/Bep_1.8.png',
      price: 599.0,
    },
    {
      id: 6,
      name: '',
      imgUrl: '../img/Bep/Bep_2.0.png',
      price: 599.0,
    },
    {
      id: 7,
      name: '',
      imgUrl: '../img/Bep/Bep_2.2.png',
      price: 599.0,
    },
    {
      id: 8,
      name: '',
      imgUrl: '../img/Bep/Bep_2.4.png',
      price: 599.0,
    },
    {
      id: 9,
      name: '',
      imgUrl: '../img/Bep/Bep_2.6.png',
      price: 599.0,
    },
    {
      id: 10,
      name: '',
      imgUrl: '../img/Bep/Bep_2.8.png',
      price: 599.0,
    },
    {
      id: 11,
      name: '',
      imgUrl: '../img/Bep/Bep_3.0.png',
      price: 599.0,
    },
    {
      id: 12,
      name: '',
      imgUrl: '../img/Bep/Bep_3.2.png',
      price: 599.0,
    },
    {
      id: 13,
      name: '',
      imgUrl: '../img/Bep/Bep_3.4.png',
      price: 599.0,
    },
    {
      id: 14,
      name: '',
      imgUrl: '../img/Bep/Bep_3.6.png',
      price: 599.0,
    },
    {
      id: 15,
      name: '',
      imgUrl: '../img/Bep/Bep_3.8.png',
      price: 599.0,
    },
  ];

  if (option === 'SƯU TẬP TRỨNG') {
    shirtList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 col-sm-6 col-12 d-flex justify-content-center mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="SƯU TẬP TRỨNG ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-dress-1.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center card-price">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-dress-1.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'ROBOT-SIÊU NHÂN') {
    dressList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="ROBOT-SIÊU NHÂN ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-pant-1.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-pant-1.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'NHẠC CỤ') {
    skirtList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="NHẠC CỤ ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-shirt-1.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-shirt-1.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'BÚP BÊ') {
    pantList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="BÚP BÊ ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-skirt-1.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-skirt-1.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
  if (option === 'DỤNG CỤ BẾP') {
    bepList.filter((item, idx) => {
      $('.product__list').append(`
          <div class="col col-lg-4 mb-4 product">
            <div class="card" style="width: 18rem; height: 460px">
              <img src=${item.imgUrl} class="card-img-top" alt="DỤNG CỤ BẾP ${idx + 1}" />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <a class="text-decoration-none text-dark" href="../html/chitietsanpham-skirt-1.html"
                    >${item.name}</a
                  >
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-link text-secondary">${item.price},000đ</span>
                  <a href="../html/chitietsanpham-skirt-1.html" class="btn btn-primary">Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
          `);
    });
  }
}

function taoBanner(option = 'SƯU TẬP TRỨNG') {
  if (option === 'SƯU TẬP TRỨNG') {
    return '../img/Bander/Bander__Trung.jpg';
  }

  if (option === 'ROBOT-SIÊU NHÂN') {
    return '../img/Bander/Bander__SN.jpg';
  }

  if (option === 'NHẠC CỤ') {
    return '../img/Bander/Bander__Nhac.jpg';
  }

  if (option === 'BÚP BÊ') {
    return '../img/Bander/Bander__BB.jpg';
  }
  if (option === 'DỤNG CỤ BẾP') {
    return '../img/Bander/Bander__Bep.jpg';
  }
}

$(document).ready(function () {
  let tenloai = $('.selected').children('.active').text();

  $('.img-banner').attr('src', taoBanner(tenloai));
  $('.product__list').append(taoDanhSachSanPham(tenloai));

  $('.selected').click(function () {
    $('.selected').children().removeClass('active');
    $(this).children().addClass('active');
    $('.product__list').children().remove();

    let tenloai = $('.selected').children('.active').text();
    $('.breadcrumb .breadcrumb-item.active').text(tenloai);
    $('.img-banner').attr('src', taoBanner(tenloai));
    taoDanhSachSanPham(tenloai);
  });

  $('#form-search').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('.product__list .product').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $('#form-checkbox-100').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val < 100);
      })
      .toggle();
  });

$('#form-checkbox-300').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 100 && val < 300);
      })
      .toggle();
  });

$('#form-checkbox-500').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 300 && val < 500);
      })
      .toggle();
  });

$('#form-checkbox-1000').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 500 && val < 1000);
      })
      .toggle();
  });

$('#form-checkbox-2000').click(function () {
    $('.product__list .product')
      .filter(function () {
        let val = Number($(this).find('.card-link').text().split(',')[0]);
        return !(val >= 1000);
      })
      .toggle();
  });


  // $('#form-checkbox-100').click(function () {
  //   $('.product__list .product')
  //     .filter(function () {
  //       let val = Number($(this).find('.card-link').text().split(',')[0]);
  //       return !(val < 100);
  //     })
  //     .toggle();
  // });

  // $('#form-checkbox-300').click(function () {
  //   $('.product__list .product')
  //     .filter(function () {
  //       let val = Number($(this).find('.card-link').text().split(',')[0]);
  //       return !(val >= 100 && val < 300);
  //     })
  //     .toggle();
  // });

  // $('#form-checkbox-500').click(function () {
  //   $('.product__list .product')
  //     .filter(function () {
  //       let val = Number($(this).find('.card-link').text().split(',')[0]);
  //       return !(val >= 300 && val < 500);
  //     })
  //     .toggle();
  // });

  // $('#form-checkbox-1000').click(function () {
  //   $('.product__list .product')
  //     .filter(function () {
  //       let val = Number($(this).find('.card-link').text().split(',')[0]);
  //       return !(val >= 500 && val < 1000);
  //     })
  //     .toggle();
  // });

  // $('#form-checkbox-2000').click(function () {
  //   $('.product__list .product')
  //     .filter(function () {
  //       let val = Number($(this).find('.card-link').text().split(',')[0]);
  //       return !(val >= 1000);
  //     })
  //     .toggle();
  // });
});
