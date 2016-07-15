Template.groupCampPost.helpers({
	trips:function(){
		return GroupCampTrips.find();
	},

	getUserName: function() {return Meteor.user().userName;}
})

Template.groupCampPost.events({
	"click .js-submit": function(event){
		event.preventDefault();

		tags = $(".js-tags").val().split(",");
		for (i = 0; i < tags.length; i++) 	{tags[i] = tags[i].trim();}
		tags = tags.sort();

		GroupCampTrips.insert({
			author: Meteor.user().userName,
			timestamp: new Date(),

			title: $(".js-title").val(),
			message: $(".js-message").val(),
			description: $(".js-description").val(),
			tags: tags,

			destination: $(".js-destination").val(),
			from: $(".js-from").val(),
			to: $(".js-to").val(),

			travelers: [],
			threshold: $(".js-threshold").val(),

			cost: $(".js-cost").val(),
			link: $(".js-link").val(),
			picture: $(".js-picture").val()
		});

		Router.go("groupCampSearch");
	}
})
