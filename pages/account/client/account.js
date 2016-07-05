Template.account.events({
    "click .js-register": function(event){
      event.preventDefault();

      // var email=$(".js-email").val();
      // var lastname=$(".js-lastname").val();
      // Accounts.createUser({
      //   email:email,
      //   lastname:lastname
      // });
      Router.go('home');
    }
});
