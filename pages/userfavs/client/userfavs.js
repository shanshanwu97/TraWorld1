Template.userfavs.helpers({
	userfavorites:function(){
		
		return UserFavorites.findOne({user:Meteor.userId()});
	},
	anyfav: function(){
	if(UserFavorites.find({user:Meteor.userId()}).count()==0){
		return true;
	}
	
}
})
Template.removeFav.helpers({
	findfavtrip:function(){
		return Trips.findOne({_id:this.fav});
	},

})
Template.removeFav.events({
	"click .js-deletefav ":function(event){
		console.log(this.idof); //debug
		console.log(this.fav);
		// window.alert("You are about to delete this favorite!");
		UserFavorites.update({_id: this.idof},{$pull:{favadded:this.fav}});
		// Meteor.call("removefav",blog);  //callback->this <--removes object created
	},
})
Template.userfavs.events({
	"click .js-gohome":function(event){
		Router.go("/");
	}
})
