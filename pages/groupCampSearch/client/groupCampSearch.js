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
     },

     getTravelerCount: function(){
          return 0;
     },
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
     }
});



Template.GroupCampDetails.helpers({
     getTags: function(trip) {
          return tags.toString();
     }
});
