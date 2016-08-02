// Group Camp Search
     Template.groupCampSearch.helpers({
          setUp: function(){
               Session.set("searchBy", null);
     		Session.set("searchOption", "tag");
               Session.set("volume", false);
               Session.set("speachActive", false);
     	},

          hasTrips: function(){
               if (Session.get("searchBy") == "tag")
                    return (GroupCampTrips.find({tags: Session.get("searchField"), deadline: {$gte: new Date()}}).count() != 0);
               else if (Session.get("searchBy") == "author")
                    return (GroupCampTrips.find({author: Session.get("searchField"), deadline: {$gte: new Date()}}).count() != 0);
               else if (Session.get("searchBy") == "ID")
                    return (GroupCampTrips.find({_id: Session.get("searchField")}).count() != 0);
               else if (Session.get("searchBy") == "mine")
                    return (GroupCampTrips.find({author: Meteor.users.findOne({_id: Meteor.userId()}).profile.username, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}).count() != 0);
               else if (Session.get("searchBy") == "going")
                    return (GroupCampTrips.find({travelers: Meteor.users.findOne({_id: Meteor.userId()}).profile.username, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}).count() != 0);
               else if (Session.get("searchBy") == "bookmarks")
                    return (GroupCampTrips.find({bookmarks: Meteor.users.findOne({_id: Meteor.userId()}).profile.username, deadline: {$gte: new Date()}}).count() != 0);
               else
                    return (GroupCampTrips.find({deadline: {$gte: new Date()}}).count() != 0);
          },

          getTrips: function(){
               if (Session.get("searchBy") == "tag")
                    return GroupCampTrips.find({tags: Session.get("searchField"), deadline: {$gte: new Date()}}, {sort: {timestamp: -1}});
               else if (Session.get("searchBy") == "author")
                    return GroupCampTrips.find({author: Session.get("searchField"), deadline: {$gte: new Date()}}, {sort: {timestamp: -1}});
               else if (Session.get("searchBy") == "ID")
                    return GroupCampTrips.find({_id: Session.get("searchField")}, {sort: {timestamp: -1}});
               else if (Session.get("searchBy") == "mine")
                    return GroupCampTrips.find({author: Meteor.users.findOne({_id: Meteor.userId()}).profile.username, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}, {sort: {timestamp: -1}});
               else if (Session.get("searchBy") == "going")
                    return GroupCampTrips.find({travelers: Meteor.users.findOne({_id: Meteor.userId()}).profile.username, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}, {sort: {timestamp: -1}});
               else if (Session.get("searchBy") == "bookmarks")
                    return GroupCampTrips.find({bookmarks: Meteor.users.findOne({_id: Meteor.userId()}).profile.username, deadline: {$gte: new Date()}}, {sort: {timestamp: -1}});
               else
                    return GroupCampTrips.find({deadline: {$gte: new Date()}}, {sort: {timestamp: -1}});
          },

          getUsername: function() {return Meteor.users.findOne({_id: Meteor.userId()}).profile.username},

          getSpeakIcon: function() {
               if (Session.get("speachActive"))
                    return "equalizer";
               else
                    return "volume-up";
          },

          getSearchGlyph: function() {
               if (Session.get("searchOption") == "author")
                    return "user";
               else if (Session.get("searchOption") == "ID")
                    return "asterisk";
               else
                    return "tag";
          },

          getSearchText: function() {
               if (Session.get("searchOption") == "author")
                    return "Search by Author";
               else if (Session.get("searchOption") == "ID")
                    return "Search by ID";
               else
                    return "Search by Tag";
          },

          getSearchColor: function() {
               if (Session.get("searchOption") == "author")
                    return "primary";
               else if (Session.get("searchOption") == "ID")
                    return "success";
               else
                    return "danger";
          },

          playModal1alt: function() {
               if (Session.get("volume")) {
                    var instruct=$(".js-instruct-1-alt").text();
                    console.log(instruct);
                    var msg = new SpeechSynthesisUtterance(instruct);
                    window.speechSynthesis.speak(msg);
                    Session.set("volume", true);
               }
               else {
                    // CODE TO STOP VOICE
               }
          }
     });

     Template.groupCampSearch.events({
       "click .js-talk": function(event){
           console.log("clicked it");
           Session.set("speachActive", true);
           event.preventDefault();
        // https://shapeshed.com/html5-speech-recognition-api/
           const recognition = new webkitSpeechRecognition();
           recognition.lang = 'en-US'
           recognition.onresult = function(event) {
               console.dir(event);
               Session.set("speachActive", false);
               Session.set("transcript",event.results[0][0].transcript);
               $(".js-searchField").val(Session.get("transcript"));


     //        execute(Session.get("transcript"));
             };
             $(".js-searchField").val("");
         recognition.start();
        //      console.log("starting the recognizer")


        },
          "click .js-search": function(event, instance) {
               event.preventDefault();
               search = $(".js-searchField").val().trim();

               if (Session.get("searchOption") == "author")
                    Session.set("searchBy", "author");
               else if (Session.get("searchOption") == "ID")
                    Session.set("searchBy", "ID");
               else{
                    search = search.toLowerCase();
                    Session.set("searchBy", "tag");
               }

               Session.set("searchField", search);
          },

          "click .js-searchByTagOption": function(event, instance) {
               console.log("clicked Search by Tag");
               Session.set("searchOption", "tag");
               $(".js-searchField").val("");
          },

          "click .js-searchByAuthorOption": function(event, instance) {
               console.log("clicked Search by Author");
               Session.set("searchOption", "author");
               $(".js-searchField").val("");
          },

          "click .js-searchByIDOption": function(event, instance) {
               console.log("clicked Search by ID");
               Session.set("searchOption", "ID");
               $(".js-searchField").val("");
          },

          "click .js-seeAll": function(event, instance) {
               event.preventDefault();
               Session.set("searchBy", null);
               Session.set("searchField", null);
               $(".js-searchField").val("");
          },

          "click .js-seeMine": function() {
               event.preventDefault();
               Session.set("searchBy", "mine");
               Session.set("searchField", null);
               $(".js-searchField").val("");
          },

          "click .js-seeAmGoing": function() {
               event.preventDefault();
               Session.set("searchBy", "going");
               Session.set("searchField", null);
               $(".js-searchField").val("");
          },

          "click .js-seeBookmarks": function() {
               event.preventDefault();
               Session.set("searchBy", "bookmarks");
               Session.set("searchField", null);
               $(".js-searchField").val("");
          },

          "click .volume-1-alt": function() {
               console.log("clicked volume button");

               if (Session.get("volume")) {
                    Session.set("volume", false);
               }
               else {
                    Session.set("volume", true);
               }
          },
          "click .volume-1": function() {
               console.log("clicked volume button");
               var instruct=$(".js-instruct-1").text();
               console.log(instruct);
               var msg = new SpeechSynthesisUtterance(instruct);
               window.speechSynthesis.speak(msg);
               console.log(msg);
          },
          "click .volume-2": function() {
               console.log("clicked volume button");
               var instruct=$(".js-instruct-2").text();
               console.log(instruct);
               var msg = new SpeechSynthesisUtterance(instruct);
               window.speechSynthesis.speak(msg);
               console.log(msg);
          },
          "click .volume-3": function() {
               console.log("clicked volume button");
               var instruct=$(".js-instruct-3").text();
               console.log(instruct);
               var msg = new SpeechSynthesisUtterance(instruct);
               window.speechSynthesis.speak(msg);
               console.log(msg);
          },
          "click .volume-4": function() {
               console.log("clicked volume button");
               var instruct=$(".js-instruct-4").text();
               console.log(instruct);
               var msg = new SpeechSynthesisUtterance(instruct);
               window.speechSynthesis.speak(msg);
               console.log(msg);
          },
          "click .volume-5": function() {
               console.log("clicked volume button");
               var instruct=$(".js-instruct-5").text();
               console.log(instruct);
               var msg = new SpeechSynthesisUtterance(instruct);
               window.speechSynthesis.speak(msg);
               console.log(msg);
          }
     });


// Group Camp Listing

     Template.GroupCampListing.onCreated(function() {
          this.state = new ReactiveDict();
          this.state.setDefault({"going": false});
     });

     Template.GroupCampListing.helpers({
          amGoing: function(){
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               var index = travelers.indexOf(Meteor.users.findOne({_id: Meteor.userId()}).profile.username);

               if (index == -1)
                    return false;
               else
                    return true;
          },

          isBookmarked: function(){
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var bookmarks = trip && trip.bookmarks;
               var index = bookmarks.indexOf(Meteor.users.findOne({_id: Meteor.userId()}).profile.username);

               if (index == -1)
                    return false;
               else
                    return true;
          },

          getTravelersNeeded: function(){
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               return trip.threshold - travelers.length;
          },

          isPlural: function(){
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               if (trip.threshold - travelers.length == 1)
                    return false;
               else
                    return true;
          },

          getUsername: function() {return Meteor.users.findOne({_id: Meteor.userId()}).profile.username},

          isMine: function() {
               author = this.trip.author;
               if (author == Meteor.users.findOne({_id: Meteor.userId()}).profile.username)
                    return true;
               else
                    return false;
          },

          isMe: function(traveler) {
               if (traveler == Meteor.users.findOne({_id: Meteor.userId()}).profile.username)
                    return true;
               else
                    return false;
          },

          hasEnoughTravelers: function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               if (travelers.length < trip.threshold)
                    return false;
               else
                    return true;
          },

          isOpen: function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               if(new Date(trip.deadline) < new Date())
                    return false;
               else
                    return true;
          },

          getColor: function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               if (travelers.length < trip.threshold)
                    if(new Date(trip.deadline) < new Date())
                         return "danger";
                    else
                         return "warning";
               else
                    if(new Date(trip.deadline) < new Date())
                         return "info";
                    else
                         return "success";
          },

          getProgressBarWidth: function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               return 100 * travelers.length / trip.threshold;
          },

          getFrom: function() {
               return new Date(this.trip.from).toDateString();
          },

          getTo: function() {
               return new Date(this.trip.to).toDateString();
          },

          getDeadline: function() {
               return new Date(this.trip.deadline).toDateString();
          },

          getTimestamp: function() {
               return new Date(this.trip.timestamp).toDateString();
          },

          getTimeof: function(dateObj) {
               minutes = dateObj.getMinutes();
               if (minutes < 10)
                    minutes = "0" + minutes;

               if (dateObj.getHours() == 0) {
                    return "12:" + minutes + " AM";
               }
               else if (dateObj.getHours() < 12) {
                    return dateObj.getHours() + ":" + minutes + " AM";
               }
               else if (dateObj.getHours() == 12) {
                    return "12:" + minutes + " PM";
               }
               else {
                    return (dateObj.getHours() - 12) + ":" + minutes + " PM";
               }
          }
     });

     Template.GroupCampListing.events({
          "click .js-changeAmGoing": function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               var username = Meteor.user() && Meteor.users.findOne({_id: Meteor.userId()}).profile.username;
               var index = travelers.indexOf(username);

               if (index == -1) {
                    GroupCampTrips.update({_id: this.trip._id}, {$push: {travelers:username}});
                    GroupCampTrips.update({_id: this.trip._id}, {$push: {chat: {alert: true, isGoing: true, username: username, timestamp: new Date()}}});

                    var bookmarks = trip && trip.bookmarks;
                    var bookmarksIndex = bookmarks.indexOf(username);
                    bookmarks.splice(bookmarksIndex, 1);
                    GroupCampTrips.update({_id: this.trip._id}, {$set: {bookmarks: bookmarks}});
               }
               else {
                    travelers.splice(index, 1);
                    GroupCampTrips.update({_id: this.trip._id}, {$set: {travelers: travelers}});
                    GroupCampTrips.update({_id: this.trip._id}, {$push: {chat: {alert: true, isGoing: false, username: username, timestamp: new Date()}}});
               }
          },

          "click .js-bookmark": function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var bookmarks = trip && trip.bookmarks;
               var username = Meteor.user() && Meteor.users.findOne({_id: Meteor.userId()}).profile.username;
               var index = bookmarks.indexOf(username);

               if (index == -1) {
                    GroupCampTrips.update({_id: this.trip._id}, {$push: {bookmarks: username}});
               }
               else {
                    bookmarks.splice(index, 1);
                    GroupCampTrips.update({_id: this.trip._id}, {$set: {bookmarks: bookmarks}});
               }
          },

          "click .js-modalCancel": function() {
               GroupCampTrips.remove({_id: this.trip._id});
               $("#deleteWarningModal-" + this.trip._id).modal('hide');
     		$('body').removeClass('modal-open');
     		$('.modal-backdrop').hide();
          },

          "click .js-postToChat": function() {
               event.preventDefault();
               var text = $(".js-postToChatText").val().trim();

               if (text != "") {
                    var trip = GroupCampTrips.findOne({_id:this.trip._id});
                    var chat = trip && trip.chat;
                    var username = Meteor.user() && Meteor.users.findOne({_id: Meteor.userId()}).profile.username;

                    GroupCampTrips.update({_id: this.trip._id}, {$push: {chat: {alert: false, username: username, text: text, timestamp: new Date()}}});
                    $(".js-postToChatText").val("");

                    $("#chat-" + this.trip._id).animate({ scrollTop: $('.chatInput').offset().top }, 500);
               }
          }
     });
