//var login_name = localStorage.getItem("save_user_name");
//alert(login_name);


localStorage.setItem("ss","11");
alert(localStorage.getItem("ss"));






if($('#loginForm').find("input[type='submit']")) {
    var login_name = localStorage["save_user_name"];
    var password = localStorage["save_password"];
    $('#user').val(login_name);
//    alert(login_name);
    $('#pwd').val(password);
//    $('#loginForm').submit();
}

$('#submitButton').click(function(){
//    alert(1);
    var save_name = $('#user_name').val();
    var save_password =$('#password').val();
    localStorage["save_user_name"] = save_user_name;
    localStorage["save_password"] = save_password;

})
