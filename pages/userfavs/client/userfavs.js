Template.userfavs.helpers({
	userfavorites:function(){
		var userid=Meteor.userId();
		return UserFavorites.find({user:Meteor.userId()});
	},
	anyfav: function(){
	if(UserFavorites.find({user:Meteor.userId()}).count()==0){
		return true;
	}
}
})
Template.userfavs.events({
	"click .js-deletefav ":function(event){
		console.log("clicked on the x"); //debug
		window.alert("You are about to delete this itinerary!");
		var blog= UserFavorites.findOne({_id: this.user});
		Meteor.call("removefav",blog);  //callback->this <--removes object created
	},
	"click .js-gohome":function(event){
		Router.go("/");
	}
})
