

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});




err = document.querySelector(".error")
err1 = document.querySelector(".error1")

var form=document.getElementById("register-form")

form.addEventListener("submit",function (e){
    e.preventDefault()
    var user=document.getElementById("email1").value
    var pass=document.getElementById("password1").value 

   fetch("http://localhost:3000/user/signup",{
    method:"POST",
    body:JSON.stringify({username:user,password:pass}),
    headers:{
        "Content-Type":"application/json;charset=UTF-8"
    }
}).then((res)=> res.json()).then((data)=>{
  console.log(data)

  if(data.statusCode == 409){
    err.textContent = data.message;
    err.style.color = "red";
    err.style.marginLeft = "30%";
    return ;
  }
  localStorage.setItem("JWT", data.access_token)
  window.location.href = 'buy.html';

})}
)


var form=document.getElementById("login-form")

form.addEventListener("submit",function (e){
    e.preventDefault()
    var user=document.getElementById("email").value
    var pass=document.getElementById("password").value 
    if(user == 'admin@gmail.com' && pass == '1234'){
      window.location.href = 'admin.html';
      return ;
    }

   fetch("http://localhost:3000/auth/signin",{
    method:"POST",
    body:JSON.stringify({username:user,password:pass}),
    headers:{
        "Content-Type":"application/json;charset=UTF-8"
    }
}).then((res)=> res.json()).then((data)=>{
 

  if(data.statusCode == 401){
    err1.textContent = data.message;
    err1.style.color = "red";
    err1.style.marginLeft = "13%"
   
    return ;
  }

  localStorage.setItem("JWT", data.access_token);
  window.location.href = 'buy.html';

})}
)


