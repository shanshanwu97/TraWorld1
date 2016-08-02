// Meteor.startup(function(){
// 	if (Trips.find().count()==0){
// 		//....create theses fixtures....
// 		Trips.insert({createdBy: "Shanshan", destination:"Los Angeles", duration:["05/19/2016","05/24/2016"], amountOfTraveler:"3", expenses:"$1300"});
// 		Trips.insert({createdBy: "Jen", destination:"Chicago", duration:["05/19/2016","05/24/2016"], amountOfTraveler:"2", expenses:"$500"});
// 	}
// })

Meteor.startup(function() {

     Meteor.users.remove({});
     GroupCampTrips.remove({});
     GroupCampUsers.remove({});

     if (GroupCampTrips.find().count() == 0) {

          // SKYDIVING
          GroupCampTrips.insert({
               author: "author1",
			timestamp: new Date("Jul. 18, 2016"),

			title: "Skydiving Adventure",
			description: "This is a trip for beginers and enthusiast alike. Basic training and equipment provided. Arive at the airfield at 8 AM. Adventure will last entire day. Group will eat dinner and celebrate together at the end of the day. All costs and fees included.",
			message: "Come fall from the sky with a group of people you have never met. Screams, laughs, and memories guarenteed!",
               tags: ["skydiving", "adventure", "thrills", "local"],

			destination: "Airfield",
			from: new Date("Aug. 4, 2016"),
			to: new Date("Aug. 4, 2016"),
               deadline: new Date("Aug. 2, 2016"),

			travelers: ["author1", "user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8"],
			threshold: 10,
			cost: 50,

               picture: "http://www.skydivefortcollins.com/images/gallery/skydiving-gallery-fort-collins.jpg",

               chat: []
          });

          // TRIP HOME TO CHINA
          GroupCampTrips.insert({
               author: "author2",
			timestamp: new Date("Jun. 3, 2016"),

			title: "Trip Home to China",
			description: "Arive at Logan Airport in Boston, MA at 2:30 PM on Aug. 5. ",
			message: "Travel home with us and take advantage of our group discount.",
               tags: ["china", "home", "discount"],

			destination: "Beijing, China",
			from: new Date("Aug. 6, 2016"),
			to: new Date("Aug. 7, 2016"),
               deadline: new Date("Jul. 10, 2016"),

			travelers: ["author2", "user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user 9", "user10", "user11", "user12", "user13", "user14", "user15", "user16", "user17", "user18", "user19", "travis"],
			threshold: 20,
			cost: 900,

               picture: "http://nycaviation.com/newspage/wp-content/uploads/2011/04/plane-over-china-istock-426.jpg",
               chat: []
          });

          // MUSEUM VISIT
          GroupCampTrips.insert({
               author: "author3",
			timestamp: new Date("Jul. 15, 2016"),

			title: "Museum Excursion",
			description: "",
			message: "Come visit the Museum of Fine Arts with with a group of friendly Brandeis students.",
               tags: ["museum", "mfa", "local"],

			destination: "",
			from: new Date("Sept. 10, 2016"),
			to: new Date("Sept. 10, 2016"),
               deadline: new Date("Sept. 1, 2016"),

			travelers: ["author3", "user1", "user2", "user3", "user4", "user5", "user6"],
			threshold: 20,
			cost: 20,

               link: "http://www.mfa.org/",
               picture: "http://www.saci-florence.edu/files/ckfile/images/MFA_475.jpg",

               chat: []
          });

          // TRIP TO ISRAEL
          GroupCampTrips.insert({
               author: "author4",
			timestamp: new Date("Jun. 21, 2016"),

			title: "Trip to Israel",
			message: "Never seen Israel? Frequent visiter looking for a chance to go again? This trip is for you. Discounted tickets included. Arive at Logan Airport at 12:30 PM on day of.",
               tags: ["israel", "discount"],

			destination: "Israel",
			from: new Date("Sept. 8, 2016"),
			to: new Date("Oct. 12, 2016"),
               deadline: new Date("Aug. 10, 2016"),

			travelers: ["author4", "user1", "user2", "user3"],
			threshold: 25,
			cost: "850",

               picture: "http://cdn.timesofisrael.com/uploads/2014/01/flight.jpg",

               chat: []
          });
     }
          // Trips.remove({});



     if (Trips.find().count() == 0) {

          // SKYDIVING
          Trips.insert({
            createdBy: null,
			username:"....",

			datecreated:new Date(),
			title: "We love Boston!",
			destination: ["boston, MA, united states", "new york city, NY, united states"],
            arrival: "07/28/2016",

			departure: "08/06/2016",
			amountOfTraveler: 4,
			expenses: 700,

			// images: ""
			description: "our trip in boston.",
			textedit:[],
			likes: 5,
          });



     }

})
