Template.login.events({

"submit form": function() {
  event.preventDefault();
  const email = $(".js-login-email").val();
  const password = $(".js-login-password").val();

  Meteor.loginWithPassword(email, password, function (error) {
    if(error) {
      event.preventDefault();
      console.log(error.reason);
      window.alert(error.reason);
      return;
    } else {
      Router.go("/");
    }
  });
},

});
