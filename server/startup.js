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
               author: "Me",
			timestamp: new Date(),

			title: "Trip to Hawaii",
<<<<<<< HEAD
			description: "Travelers will engage in group excursions to various historical landmarks and group activities including beach sports.",
=======
			message: "Travelers will engage in group excursions to various historical landmarks and group activities including beach sports.",
>>>>>>> d3d9a3f27f2615a71b2098f13b6d49b09c156986

			destination: "Honalulu, Hawaii",
			from: "June 01, 2016",
			to: "July 30, 2016",

			travelers: [],
			threshold: 35,
<<<<<<< HEAD
			cost: "2,500"
=======
			cost: "2,500",

               link: "http://www.gohawaii.com/en/",
               picture: "https://aos.iacpublishinglabs.com/question/aq/700px-394px/hawaii-known_2209a286881fab48.jpg?domain=cx.aos.ask.com"
>>>>>>> d3d9a3f27f2615a71b2098f13b6d49b09c156986
          });

          GroupCampTrips.insert({
               author: "Me",
			timestamp: new Date(),

			title: "Hit the Slopes!",
<<<<<<< HEAD
			description: "Adventurers will meet and hit the slopes for this awesome ski and snowboard adventure",
=======
			message: "Adventurers will meet and hit the slopes for this awesome ski and snowboard adventure",
>>>>>>> d3d9a3f27f2615a71b2098f13b6d49b09c156986

			destination: "Val Thorens, France",
			from: "Dec. 1, 2016",
			to: "Jan. 31, 2017",

			travelers: [],
			threshold: 20,
<<<<<<< HEAD
			cost: "5,000"
=======
			cost: "5,000",

               link: "http://www.valthorens.com/en/home-page.1.html",
               picture: "http://www.ski-i.com/pub/img/resort/66/glisse_b_longo_ot_val_thorens_6_default.18703.jpg"
>>>>>>> d3d9a3f27f2615a71b2098f13b6d49b09c156986
          });

          GroupCampTrips.insert({
               author: "Me",
			timestamp: new Date(),

			title: "Lost in the Woods",
<<<<<<< HEAD
			description: "Strangers will bond, explore the deep dark woods, and engage in general cmp realted activities.",
=======
			message: "Strangers will bond, explore the deep dark woods, and engage in general cmp realted activities.",
>>>>>>> d3d9a3f27f2615a71b2098f13b6d49b09c156986

			destination: "Burlington, Vermont",
			from: "Sept. 10, 2016",
			to: "Oct. 21, 2016",

			travelers: [],
			threshold: 25,
<<<<<<< HEAD
			cost: "50"
=======
			cost: "50",

               picture: "http://vermontfurnitureblog.com/wp-content/uploads/2014/08/Vermont-Wood-Man.jpg"
>>>>>>> d3d9a3f27f2615a71b2098f13b6d49b09c156986
          });

     }
})
