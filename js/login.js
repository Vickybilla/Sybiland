  function Login(){ 
  var done=0; 
  var usr=document.login.inputEmail.value; 
  var pass=document.login.inputPassword.value; 
  if (usr=="jimena@gmail.com" && pass=="12345") { 
  window.location="../html/Sybiland.html"; 
  } 
  if (usr=="victoria@gmail.com" && pass=="kryptonita") { 
  window.location="../html/Sybiland.html"; 
  } 
  if (usr=="" && pass=="") { 
    alert("Ingrese, nombre de usuario y contraseña correctos."); 
  } 
  } 
  //Se probó la funcionalidad  de la validación, no es un proceso seguro para implementar, necesita seguridad.