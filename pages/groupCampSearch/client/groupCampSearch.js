// Group Camp Search
     Template.groupCampSearch.helpers({
          hasTrips: function(){
               if (Session.get("searchBy") == "tag")
                    return (GroupCampTrips.find({tags: Session.get("searchedTag")}).count() != 0);
               else if (Session.get("searchBy") == "mine")
                    return (GroupCampTrips.find({author: Meteor.user().userName}).count() != 0);
               else if (Session.get("searchBy") == "going")
                    return (GroupCampTrips.find({travelers: Meteor.user().userName}).count() != 0);
               else
                    return (GroupCampTrips.find({}).count() != 0);
          },

          getTrips: function(){
               if (Session.get("searchBy") == "tag")
                    return GroupCampTrips.find({tags: Session.get("searchedTag")});
               else if (Session.get("searchBy") == "mine")
                    return GroupCampTrips.find({author: Meteor.user().userName});
               else if (Session.get("searchBy") == "going")
                    return GroupCampTrips.find({travelers: Meteor.user().userName});
               else
                    return GroupCampTrips.find({});
          },

          getUserName: function() {return Meteor.user().userName;}
     });

     Template.groupCampSearch.events({
          "click .js-searchTags": function(event, instance) {
               event.preventDefault();
               searchedTag = $(".js-searchTag").val().toLowerCase().trim();
               Session.set("searchBy", "tag");
               Session.set("searchedTag", searchedTag);
          },

          "click .js-seeAll": function(event, instance) {
               event.preventDefault();
               Session.set("searchBy", null);
               Session.set("searchedTag", null);
          },

          "click .js-seeMine": function() {
               event.preventDefault();
               Session.set("searchBy", "mine");
               Session.set("searchedTag", null);
          },

          "click .js-seeAmGoing": function() {
               event.preventDefault();
               Session.set("searchBy", "going");
               Session.set("searchedTag", null);
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

          getTravelerCount: function(){
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               return travelers.length;
          },

          getUserName: function() {return Meteor.user().userName;},

          isMine: function() {
               author = this.trip.author;
               if (author == Meteor.user().userName)
                    return true;
               else
                    return false;
          },

          isSearchedTag: function(tag)    {
               return (Session.get("searchedTag") == tag);
          },

          hasEnoughTravelers: function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               if (travelers.length < trip.threshold)
                    return false;
               else
                    return true;
          },

          getProgressBarWidth: function() {
               var trip = GroupCampTrips.findOne({_id:this.trip._id});
               var travelers = trip && trip.travelers;
               return 100 * travelers.length / trip.threshold;
          },
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

                    console.log("added me");
                    console.log(GroupCampTrips.findOne({_id:this.trip._id}).travelers.toString());

                    $('.amGoing-color-' + this.trip._id).removeClass('btn-warning').addClass('btn-default');
                    $('.amGoing-text-' + this.trip._id).html('Remove Me!');
               }
               else {
                    travelers.splice(index, 1);
                    GroupCampTrips.update({_id: this.trip._id}, {$set: {travelers: travelers}});

                    console.log("removed me");
                    console.log(GroupCampTrips.findOne({_id:this.trip._id}).travelers.toString());

                    $('.amGoing-color-' + this.trip._id).removeClass('btn-default').addClass('btn-warning');
                    $('.amGoing-text-' + this.trip._id).html('Add Me!');
               }
          },

          "click .js-cancel": function() {
               GroupCampTrips.remove({_id: this.trip._id});
          },

          "click .js-cancel": function() {
               GroupCampTrips.remove({_id: this.trip._id});
          }
     });


// Group Camp Details

     Template.GroupCampDetails.helpers({
          getTags: function() {
               return tags.toString();
          },

          isMine: function() {
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
          }
     });
