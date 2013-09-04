// 将该脚本保存为 `options.js`

// 将选项保存至 localStorage。
function save_options() {
  var save_user_name = document.getElementById("save_user_name").value;
  var save_password = document.getElementById("save_password").value;

  localStorage["save_user_name"] = save_user_name;
  localStorage["save_password"] = save_password;

  // 更新状态，告诉用户选项已保存。
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// 从保存在 localStorage 中的值恢复选定的内容。
function restore_options() {
  var username = localStorage["save_user_name"];
  var password = localStorage['save_password'];

  if(!username && !password) {
      return;
  }
  $('#save_user_name').val(username);
  $('#save_password').val(password);
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);