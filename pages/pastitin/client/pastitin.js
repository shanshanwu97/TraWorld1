Template.pastitin.helpers({
	resultData:function(){
		return Trips.find();
	}
})
Template.pastitin.events({
	"click #newit":function(){
		Router.go("itineraries");
	},
	"click .js-addfav ":function(event){
		console.log("clicked on the +"); //debug
		console.dir(this);
		window.alert("Added to favorite!");
		var favid= $(".js-favid").val()
		var blog= Trips.findOne({_id: favid});
		console.dir(blog);
		const fav =
		{user: Meteor.userId(),
		addedAt: new Date(),
		favadded: blog
		}
		Meteor.call("addFav", fav);
	}
})