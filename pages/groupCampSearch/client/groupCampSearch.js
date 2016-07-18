// Group Camp Search
     Template.groupCampSearch.onCreated(function() {
          this.state = new ReactiveDict();
          this.state.setDefault({"searchedTag": null});
     });

     Template.groupCampSearch.helpers({
          getTrips: function(){
               const instance = Template.instance();
               console.log("searchedTag: " + instance.state.get("searchedTag"));
               if (instance.state.get("searchedTag"))
                    return GroupCampTrips.find({tags: instance.state.get("searchedTag")});
               else
                    return GroupCampTrips.find({});
          }
     });

     Template.groupCampSearch.events({
          "click .js-searchTags": function(event, instance) {
               event.preventDefault();
               searchedTag = $(".js-searchTag").val().toLowerCase().trim();
               instance.state.set("searchedTag", searchedTag);
          },

          "click .js-seeAll": function(event, instance) {
               event.preventDefault();
               instance.state.set("searchedTag", null);
          },
     });


// Group Camp Listing

     Template.GroupCampListing.onCreated(function() {
          this.state = new ReactiveDict();
          this.state.setDefault({"going": false});
     });

     Template.GroupCampListing.helpers({
          amGoing: function(){
               travelers = this.trip.travelers;
               var index = travelers.indexOf(Meteor.user().userName);

               if (Session.get("amGoing") == undefined) {
                    return false;
               }
               else {
                    return Session.get("amGoing");
               }
          },

          getTravelerCount: function(){
               travelers = this.travelers;
               return 0;
          }
     });

     Template.GroupCampListing.events({
          "click .js-changeAmGoing": function() {
               travelers = this.trip.travelers;
               var index = travelers.indexOf(Meteor.user().userName);

               if (index == -1) {
                    travelers.push(Meteor.user().userName);
                    console.log("added me");
                    console.log(travelers.toString());

                    $('.amGoing-color-' + this.trip._id).removeClass('btn-warning').addClass('btn-danger');
                    $('.amGoing-text-' + this.trip._id).html('Remove Me!');
               }
               else {
                    travelers.splice(index, 1);
                    console.log("removed me");
                    console.log(travelers.toString());

                    $('.amGoing-color-' + this.trip._id).removeClass('btn-danger').addClass('btn-warning');
                    $('.amGoing-text-' + this.trip._id).html('Add Me!');
               }
          }
     });


// Group Camp Details

     Template.GroupCampDetails.helpers({
          getTags: function(trip) {
               return tags.toString();
          }
     });
