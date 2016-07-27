// Meteor.startup(function(){
// 	if (Trips.find().count()==0){
// 		//....create theses fixtures....
// 		Trips.insert({createdBy: "Shanshan", destination:"Los Angeles", duration:["05/19/2016","05/24/2016"], amountOfTraveler:"3", expenses:"$1300"});
// 		Trips.insert({createdBy: "Jen", destination:"Chicago", duration:["05/19/2016","05/24/2016"], amountOfTraveler:"2", expenses:"$500"});
// 	}
// })

Meteor.startup(function() {

     GroupCampTrips.remove({});

     if (GroupCampTrips.find().count() == 0) {

          GroupCampTrips.insert({
               author: "author1",
			timestamp: new Date("April 25, 2016"),

			title: "Trip to Hawaii",
			description: "Travelers will engage in group excursions to various historical landmarks and group activities including beach sports.",
			message: "Travelers will engage in group excursions to various historical landmarks and group activities including beach sports.",
               tags: ["beach", "hawaii"],

			destination: "Honolulu, Hawaii",
			from: new Date("Aug. 02, 2016"),
			to: new Date("Aug. 30, 2016"),
               deadline: new Date("Aug. 1, 2016"),

			travelers: ["user1", "user2", "user3", "user4"],
			threshold: 35,
			cost: "2,500",

               link: "http://www.gohawaii.com/en/",
               picture: "https://aos.iacpublishinglabs.com/question/aq/700px-394px/hawaii-known_2209a286881fab48.jpg?domain=cx.aos.ask.com",

               chat: []
          });

          GroupCampTrips.insert({
               author: "author2",
			timestamp: new Date("Feb. 17, 2016"),

			title: "Hit the Slopes!",
			description: "Adventurers will meet and hit the slopes for this awesome ski and snowboard adventure.",
			message: "Adventurers will meet and hit the slopes for this awesome ski and snowboard adventure.",
               tags: ["france", "skiing", "val thorens"],


			destination: "Val Thorens, France",
			from: new Date("Dec. 1, 2016"),
			to: new Date("Jan. 31, 2017"),
               deadline: new Date("Nov. 1, 2016"),

			travelers: [],
			threshold: 20,

			cost: "5,000",

               link: "http://www.valthorens.com/en/home-page.1.html",
               picture: "http://www.ski-i.com/pub/img/resort/66/glisse_b_longo_ot_val_thorens_6_default.18703.jpg",

               chat: []
          });

          GroupCampTrips.insert({
               author: "author3",
			timestamp: new Date("July 1, 2016"),

			title: "Lost in the Woods",
			description: "Strangers will bond, explore the deep dark woods, and engage in general camp related activities.",
			message: "Strangers will bond, explore the deep dark woods, and engage in general camp related activities.",
               tags: ["camping", "vermont", "woods"],


			destination: "Burlington, Vermont",
			from: new Date("Sept. 10, 2016"),
			to: new Date("Oct. 21, 2016"),
               deadline: new Date("Sept. 8, 2015"),

			travelers: ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10", "abhishek"],
			threshold: 10,

			cost: "50",

               picture: "http://vermontfurnitureblog.com/wp-content/uploads/2014/08/Vermont-Wood-Man.jpg",

               chat: []
          });

     }
})
