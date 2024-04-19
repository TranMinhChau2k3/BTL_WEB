$(document).ready(function () {
  let stt = 2; // Khởi tạo số thứ tự từ 2 vì đã có 2 người dùng mẫu trong bảng
  let userList = []; // Mảng lưu danh sách người dùng

  function checkName(name) {
    let patternName = /^[A-Z][a-zA-Z\s_-]{2,}$/;
    let arrName = name.toString().split(' ');
    let flag = false;

    arrName.forEach(function (el) {
      if (patternName.test(el) === false) {
        flag = true;
      }
    });

    return flag;
  }

  function checkEmail(email) {
    let patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patternEmail.test(email);
}

function checkPassword(password) {
// Mẫu regex mới yêu cầu mật khẩu có ít nhất 8 ký tự và bao gồm ít nhất một chữ hoa, một chữ thường và một chữ số
function checkPassword(password) {
  let patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return patternPassword.test(password);
}

return patternPassword.test(password);
}

function addUserToTable(name, email, password) {
  userList.push({ name: name, email: email, password: password }); // Thêm người dùng vào danh sách
  $('.table tbody').append(`
    <tr>
      <th scope="row">${stt++}</th>
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
    </tr>
  `);
}


  $('#txtName').change(function (e) {
    if (checkName(e.target.value)) {
      $('.nameErr').text('*Tên bắt buộc có độ dài ít nhất 2 ký tự và bắt đầu mỗi chữ bằng in hoa');
      $('.nameErr').removeClass('text-success');
      $('.nameErr').addClass('text-danger');
    } else {
      $('.nameErr').text('*Tên hợp lệ');
      $('.nameErr').removeClass('text-danger');
      $('.nameErr').addClass('text-success');
    }
  });

  $('#txtEmail').change(function (e) {
    if (checkEmail(e.target.value) === false) {
      $('.emailErr').text('*Địa chỉ email không hợp lệ');
      $('.emailErr').removeClass('text-success');
      $('.emailErr').addClass('text-danger');
    } else {
      $('.emailErr').text('*Địa chỉ email hợp lệ');
      $('.emailErr').removeClass('text-danger');
      $('.emailErr').addClass('text-success');
    }
  });

  $('#txtPassword').change(function (e) {
    if (checkPassword(e.target.value) === false) {
      $('.passwordErr').text('*Mật khẩu bắt buộc theo cú pháp Chau_1234!');
      $('.passwordErr').removeClass('text-success');
      $('.passwordErr').addClass('text-danger');
    } else {
      $('.passwordErr').text('*Mật khẩu hợp lệ');
      $('.passwordErr').removeClass('text-danger');
      $('.passwordErr').addClass('text-success');
    }
  });

  $('#retypePass').change(function (e) {
    let password = $('#txtPassword').val();
    if (password !== e.target.value) {
      $('.retypePassErr').text('*Mật khẩu không trùng khớp');
      $('.retypePassErr').removeClass('text-success');
      $('.retypePassErr').addClass('text-danger');
    } else {
      $('.retypePassErr').text('*Mật khẩu trùng khớp');
      $('.retypePassErr').removeClass('text-danger');
      $('.retypePassErr').addClass('text-success');
    }
  });

  $('.btn-submit').click(function (e) {
    e.preventDefault();
    let name = $('#txtName').val();
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();
    let retypePass = $('#retypePass').val();

    if (
      checkName(name) === true ||
      checkEmail(email) === false ||
      checkPassword(password) === false ||
      retypePass !== password
    ) {
      if (checkName(name)) {
        $('.nameErr').text('*Tên bắt buộc có độ dài ít nhất 2 ký tự và bắt đầu mỗi chữ bằng in hoa');
      }
      if (!checkEmail(email)) {
        $('.emailErr').text('*Địa chỉ email không hợp lệ');
      }
      if (!checkPassword(password)) {
        $('.passwordErr').text('*Mật khẩu bắt buộc theo cú pháp Chau_1234!');
      }
      if (retypePass !== password) {
        $('.retypePassErr').text('*Mật khẩu không trùng khớp');
      }
      return;
    }

    addUserToTable(name, email, password);

    // Hiển thị modal sau khi thêm người dùng vào bảng
    $('.myModal').modal('show');

    // Xóa dữ liệu trên form
    $('#txtName').val('');
    $('#txtEmail').val('');
    $('#txtPassword').val('');
    $('#retypePass').val('');
    // Xóa thông báo lỗi
    $('.nameErr').text('');
    $('.emailErr').text('');
    $('.passwordErr').text('');
    $('.retypePassErr').text('');
  });

  $('.btn-reset').click(function (e) {
    e.preventDefault();
    $('.nameErr').removeClass('text-danger');
    $('.nameErr').removeClass('text-success');
    $('.nameErr').text('');
    $('#txtName').val('');

    $('.emailErr').removeClass('text-danger');
    $('.emailErr').removeClass('text-success');
    $('.emailErr').text('');
    $('#txtEmail').val('');

    $('.passwordErr').removeClass('text-danger');
    $('.passwordErr').removeClass('text-success');
    $('.passwordErr').text('');
    $('#txtPassword').val('');

    $('.retypePassErr').removeClass('text-danger');
    $('.retypePassErr').removeClass('text-success');
    $('.retypePassErr').text('');
    $('#retypePass').val('');
  });
});
