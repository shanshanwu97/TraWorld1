Template.groupCampSearch.helpers({
     Trips: function(){
          return GroupCampTrips.find({});
     },

     getTravelerCount: function(){
          return 0;
     },

     getTags: function(trip) {
          return trip.tags.toString();
     }
});

Template.GroupCampDetails.helpers({
     getTags: function(trip) {
          return tags.toString();
     }
});