
Template.about.events({
  "click .js-imgsss" : function(){
    console.log("clicked image");
  },
  "submit #textform": function(){
    event.preventDefault();
    const title=$(".js-titletext").val();
    const txtdes=$(".js-textdesc").val();
    const date=$(".js-date").val();
    const addtext={title, text:txtdes, date};
    $("#addTextForm").modal('hide');
  }, "submit #submitpic":function(){
      event.preventDefault();
      console.log("submittedpic");
    var newpic=Session.get("addpics");
    const pictitle=$(".js-titlepic").val();
    const picdes=$(".js-picdesc").val();
    const addpix={title:pictitle, text:picdes, type:"picture",pic:newpic};
    Trips.update({_id:this._id},{$push:{textedit:addtext}});
    $("#addPicture").modal('hide');
},
  // "click .js-addevent": function(){
  //       document.getElementById("myDropdown").classList.toggle("show");
  // },
});
Template.about.rendered = function(){
  if( $('.cd-stretchy-nav').length > 0 ) {
    var stretchyNavs = $('.cd-stretchy-nav');
    
    stretchyNavs.each(function(){
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
      
      stretchyNavTrigger.on('click', function(event){
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function(event){
      ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
    });
  }
  $('#addTextForm').on('shown.bs.modal', function () {
    $('#title').focus()
  });

}
Template.addpicture.events({
    "change .your-upload-class":function(event){
    console.log("uploading...")
    FS.Utility.eachFile(event, function (file) {
      console.log("each file...");
      var yourFile = new FS.File(file);
      yourFile.creatorId = Meteor.userId(); // todo
      var itimg=YourFileCollection.insert(yourFile, function (err, fileObj) {
        console.log("callback for the insert, err: ", err);
        if (!err) {
          console.log("inserted without error");
        }
        else {
          console.log("there was an error", err);
        }
        
      });
      Session.set("addpics",itimg&&itimg._id);
    });
  }
})
Template.addmap.events({
  "click .js-mapit":function(event){
    $("#locmap").toggle('show');
    $("#dirbuttons").toggle('hide');
    $("#submitmap").toggle('show');
  },
  "click .js-closeit":function(event){
    $("#locmap").toggle('hide');
    $("#dirbuttons").toggle('show');
    $("#submitmap").toggle('hide');
  }
})
Template.addmap.rendered=function(){
  $("#locmap").toggle('hide');
  $("#submitmap").toggle('hide');
};
Template.addmap.onCreated(function () {
  Session.set("locmap",{lat:42,lng:-71})
  GoogleMaps.load({ v: '3', key: 'AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c', libraries: '' });
  GoogleMaps.ready('naviMap',function(map) {
    var markerCurrent = new google.maps.Marker({
        position: new google.maps.LatLng(Session.get("locmap").lat,Session.get("locmap").lng),
        map:map.instance
      });
    Tracker.autorun(function() {
      map.instance.setCenter(new google.maps.LatLng(Session.get("locmap").lat,Session.get("locmap").lng))
      markerCurrent.setPosition(new google.maps.LatLng(Session.get("locmap").lat,Session.get("locmap").lng));
    });  
});
});
    
Template.addmap.helpers({
  
  naviMapOptions: function() {
    if (GoogleMaps.loaded()) {
      
      return {
        center: new google.maps.LatLng(Session.get("locmap").lat,Session.get("locmap").lng),
        zoom:15
      };
    }
  },  
});
Template.addmap.events({
  "click .js-addloc": function(event){
    console.log("hey you clicked the button");
    const location =$(".js-locit").val();
    console.log(location);
    $.ajax({
      url:"https://maps.googleapis.com/maps/api/geocode/json",
        data:{
          "address":location,
          "key": "AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c",
        },
        dataType:"json"
    }).done(function( data ) {
    if ( console && console.log ) {
      Session.set( "locmap",data.results[0].geometry.location );

    }
  })
  }
})