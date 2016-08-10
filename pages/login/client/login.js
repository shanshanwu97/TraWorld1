Template.login.events({

"submit form": function() {
  event.preventDefault();
  const username = $(".js-login-email").val();

  const password = $(".js-login-password").val();
  if(username.indexOf("@")==-1){
    console.log("username");
    
Meteor.loginWithPassword(username, password, function (error) {
    if(error) {
      event.preventDefault();
      console.log(error.reason);
      window.alert(error.reason);
      return;
    } else {
      $("#signInModal").modal("hide");
      Router.go("/");
    }
  });
  }else{
    console.log("email");
   
  Meteor.loginWithPassword({email:username}, password, function (error) {
    if(error) {
      event.preventDefault();
      console.log(error.reason);
      window.alert(error.reason);
      return;
    } else {
       $("#signInModal").modal("hide");
      Router.go("/");
    }
  });
}
},
"click .js-closesigninmod":function(){
  $("#signInModal").modal("hide");
}


});
