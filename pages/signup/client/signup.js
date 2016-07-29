Template.signup.helpers({

});

Template.signup.events({
  // "click .js-checkuser": function(event){
  //   event.preventDefault();
    // var user=Meteor.users.findOne({userName:Meteor.userId()});
    // if (user.userName&&user!=null){
    //   alert("You already have a username, you can only change it once!");
    // }
    // else
  //   const urname=$(".js-usern").val();

  //   if (Meteor.users.find({userName:$(".js-usern").val()}).count()==0){
  //     alert("The username is available!");
  //   }else{
  //     alert("The username is not available! Please re-enter!");
  //   }
  // },
  "submit .register": function(event) {
    event.preventDefault();


    // if (Meteor.users.find({userName:$(".js-usern").val()}).count()==0){
    //   alert("The username is available!");
      const f = $(".js-first").val();
    const l = $(".js-last").val();
    const e = $(".js-email").val();
    const p = $(".js-password").val();
const usrname=$(".js-usern").val();
if(e.split("@")[1]!="brandeis.edu"){
  window.alert("You must use a Brandeis University account!");
  $(".js-email").val("");
  $(".js-password").val("");
}
else{    Accounts.createUser({
      // userName: usrname,
      profile: {
        first: f,
        last: l,
        color: "bg-danger",
          username: e.split("@")[0],
      },
      email: e,
      password: p,


    }, function(error) {
      if(error) { // if registration fails
        console.log(error.reason);
        window.alert(error.reason); // console log reason
        return;
      } else {
        Router.go('/'); // else go to feed page
      }
    });

  }
    // }else{
    //   alert("The username is not available! Please re-enter!");
    // }

  },



});
