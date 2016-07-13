Template.map.onCreated(function () {
  Session.set("location",{lat:42,lng:-71})
  GoogleMaps.load();
  GoogleMaps.ready('naviMap',function(map) {
​
    Tracker.autorun(function() {
      map.instance.setCenter(new google.maps.LatLng(Session.get("location").lat,Session.get("location").lng))
    });
    
});
});
    
Template.map.helpers({
  
  naviMapOptions: function() {
    if (GoogleMaps.loaded()) {
      
      return {
        center: new google.maps.LatLng(Session.get("location").lat,Session.get("location").lng),
        zoom:10
      };
    }
  },
​
​
    
});
​
Template.map.events({
  "click .js-addDay": function(event){
    console.log("hey you clicked the button");
    const location =$(".js-location").val();
    console.log(location);
​
    $.ajax({
      url:"https://maps.googleapis.com/maps/api/geocode/json",
        data:{
          "address":location,
          "key": "AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c",
        },
        dataType:"json"
    }).done(function( data ) {
    if ( console && console.log ) {
      Session.set( "location",data.results[0].geometry.location );
​
    }
  })
​
  }
})