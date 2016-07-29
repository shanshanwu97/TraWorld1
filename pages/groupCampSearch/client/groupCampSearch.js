// Group Camp Search
     Template.groupCampSearch.helpers({
          setUp: function(){
               Session.set("searchBy", null);
     		Session.set("searchOption", "tag");
     	},

          hasTrips: function(){
               if (Session.get("searchBy") == "tag")
                    return (GroupCampTrips.find({tags: Session.get("searchField"), deadline: {$gte: new Date()}}).count() != 0);
               else if (Session.get("searchBy") == "author")
                    return (GroupCampTrips.find({author: Session.get("searchField"), deadline: {$gte: new Date()}}).count() != 0);
               else if (Session.get("searchBy") == "ID")
                    return (GroupCampTrips.find({_id: Session.get("searchField")}).count() != 0);
               else if (Session.get("searchBy") == "mine")
                    return (GroupCampTrips.find({author: Meteor.user().userName, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}).count() != 0);
               else if (Session.get("searchBy") == "going")
                    return (GroupCampTrips.find({travelers: Meteor.user().userName, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}).count() != 0);
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
                    return GroupCampTrips.find({author: Meteor.user().userName, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}, {sort: {timestamp: -1}});
               else if (Session.get("searchBy") == "going")
                    return GroupCampTrips.find({travelers: Meteor.user().userName, to: {$gte: new Date()}, $or: [{deadline: {$gte: new Date()}}, {$where: "obj.travelers.length >= obj.threshold"}]}, {sort: {timestamp: -1}});
               else
                    return GroupCampTrips.find({deadline: {$gte: new Date()}}, {sort: {timestamp: -1}});
          },

          getUserName: function() {return Meteor.user().userName;},

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
          }
     });

     Template.groupCampSearch.events({
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
               var index = travelers.indexOf(Meteor.user().userName);

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

          getUserName: function() {return Meteor.user().userName;},

          isMine: function() {
               author = this.trip.author;
               if (author == Meteor.user().userName)
                    return true;
               else
                    return false;
          },

          isMe: function(traveler) {
               if (traveler == Meteor.user().userName)
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
               console.log(new Date(trip.deadline));
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
               console.log(travelers);
               var username = Meteor.user() && Meteor.user().userName;
               var index = travelers.indexOf(username);

               if (index == -1) {
                    GroupCampTrips.update({_id: this.trip._id}, {$push: {travelers:username}});

                    $('.amGoing-color-' + this.trip._id).removeClass('btn-warning').addClass('btn-default');
                    $('.amGoing-text-' + this.trip._id).html('Remove Me!');

                    GroupCampTrips.update({_id: this.trip._id}, {$push: {chat: {alert: true, isGoing: true, username: username, timestamp: new Date()}}});
               }
               else {
                    travelers.splice(index, 1);
                    GroupCampTrips.update({_id: this.trip._id}, {$set: {travelers: travelers}});

                    $('.amGoing-color-' + this.trip._id).removeClass('btn-default').addClass('btn-warning');
                    $('.amGoing-text-' + this.trip._id).html('Add Me!');

                    GroupCampTrips.update({_id: this.trip._id}, {$push: {chat: {alert: true, isGoing: false, username: username, timestamp: new Date()}}});
               }
          },

          "click .js-cancel": function() {
               GroupCampTrips.remove({_id: this.trip._id});
          },

          "click .js-postToChat": function() {
               event.preventDefault();
               var text = $(".js-postToChatText").val().trim();

               if (text != "") {
                    var trip = GroupCampTrips.findOne({_id:this.trip._id});
                    var chat = trip && trip.chat;
                    var username = Meteor.user() && Meteor.user().userName;

                    GroupCampTrips.update({_id: this.trip._id}, {$push: {chat: {alert: false, username: username, text: text, timestamp: new Date()}}});
                    $(".js-postToChatText").val("");
               }
          }
     });
