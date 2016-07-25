Template.showSearch.rendered = function(){
  if(this.createdBy==Meteor.userId()){
  
  $('#addTextForm').on('shown.bs.modal', function () {
    $('#title').focus()
  });
}

}
Template.showSearch.onCreated(function () {
  Session.set("mapid",{lat:42,lng:-71});
  GoogleMaps.load({ v: '3', key: 'AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c', libraries: '' });
  GoogleMaps.ready('naviMap',function(map) {
    var markerCurrent = new google.maps.Marker({
        position: new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng),
        map:map&&map.instance
      });
    Tracker.autorun(function() {
      map.instance.setCenter(new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng))
      markerCurrent.setPosition(new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng));
    });  
});
});
Template.showSearch.helpers({
  
  naviMapOptions: function(map) {
    if (GoogleMaps.loaded()) {

      var markerCur= new google.maps.Marker({
        position: new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng),
        map:map&&map.instance
      });
      return {
        center: new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng),
        marker: new google.maps.Marker({
        position: new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng),
        map:map&&map.instance}),
        zoom:15
      };
    }
  },  
});
Template.showSearch.events({
  "click .js-imgsss" : function(){
    console.log("clicked image");
  },
  "submit #textform": function(){
    event.preventDefault();
    const title=$(".js-titletext").val();
    const txtdes=$(".js-textdesc").val();
    const addtext={title, text:txtdes, type:"text"};
    Trips.update({_id:this._id},{$push:{textedit:addtext}});
    $("#addTextForm").modal('hide');
  },
  "click .js-addstuff":function(event){
    if( $('.cd-stretchy-nav').length > 0 ) {
    var stretchyNavs = $('.cd-stretchy-nav');
    
    stretchyNavs.each(function(){
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
      event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
    });
( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
}
  
  },
    
  "submit #picform":function(){
      event.preventDefault();
      console.log("submittedpic");
    var newpic=Session.get("addpics");
    const pictitle=$(".js-titlepic").val();
    const picdes=$(".js-picdesc").val();
    const addpix={title:pictitle, text:picdes, type:"picture",pic:newpic};
    Trips.update({_id:this._id},{$push:{textedit:addpix}});
    $("#addPicture").modal('hide');
},
  "submit #mapform":function(){
    event.preventDefault();
    const locit=Session.get("locmap");
    const toloc=$(".js-locit").val();
    const maploc={location:toloc, map:locit, type:"maploc"};
    Trips.update({_id:this._id},{$push:{textedit:maploc}});
    $("#addMap").modal('hide');
  }

})
Template.showSearch.helpers({
  isUser:function(){
      if(this.createdBy==Meteor.userId()){

        return true;
      }else{
        return false;}
  },
  checkText:function(type){
      if(type=="text"){
        return true;
      }else{
        return false;
      }
  },
  checkPic:function(type){
    if(type=="picture"){
      return true;
    }else{
      return false;
    }
  },
  savepicref:function(id){
    Session.set("picid",id);
  },
  thispic:function(){
    return YourFileCollection.findOne({_id:Session.get("picid")});
  },
  checkMap:function(type){
    if(type=="maploc"){
      return true;
    }else{
      return false;
    }
  },
  savemapref:function(map){
    Session.set("mapid",map);
  },
})