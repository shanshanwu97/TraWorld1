Template.groupCampPost.helpers({
	trips:function(){
		// const dest= $(".js-dest").val();
		return GroupCampTrips.find();
	}
})

Template.groupCampPost.events({
	"click .js-submit": function(event){
		console.log("Submitted!");

		GroupCampTrips.insert({
			author: $(".js-author").val(),
			timestamp: new Date(),

			title: $(".js-title").val(),
			description: $(".js-description").val(),

			destination: $(".js-destination").val(), //.toLowerCase(),
			from: $(".js-from").val(),
			to: $(".js-to").val(),

			travelers: [],
			threshold: $(".js-threshold").val(),
			cost: $(".js-cost").val(),

			link: $(".js-link").val(),
			picture: $(".js-picture").val()
		});
	}
})
