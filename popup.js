var userContent = {
  dealContent: function(id) {
      if(localStorage.getItem("save_user_name") && localStorage.getItem("save_password")) {
          $('#user_content').html('已设置用户名：'+localStorage.getItem("save_user_name"));
      } else {
        var obj = document.getElementById(id);
            obj.onclick = function(){
                var u = $('#user_name').val();
                var p = $('#password').val();
                localStorage.setItem("save_user_name") = u;
                localStorage.setItem("save_password") = p;
                $('#user_content').html('已设置用户名：'+u);
            }
        }
    }
};


document.addEventListener('DOMContentLoaded', function () {
  userContent.dealContent('submitButton');
});
