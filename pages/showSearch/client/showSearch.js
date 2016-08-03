Session.set('emptyTextForm', false);
Session.set('emptyMapForm', false);

Template.showSearch.helpers({
  saveuserid:function(){
    Session.set("thistripid", this._id);
  },
  alreadyFav:function(){
    var userfavor=UserFavorites.findOne({user:Meteor.userId()});
    var userfavlist=userfavor.favadded;
    // console.dir(userfavlist.indexOf(tripId));
    if(userfavlist.indexOf(this._id)!=-1){
      return true;
    }else{
      return false;
    }
  },
  emptyTextForm:function(){
    if (Session.get("emptyTextForm")){
      return true;
    }else{
      return false;
  }
}
  
  
});
Template.showSearch.events({
  "click .js-imgsss" : function(){
    console.log("clicked image");
  },
  "submit #textform": function(){
    event.preventDefault();
    const title=$(".js-titletext").val();
    const txtdes=$(".js-textdesc").val();
    const txtdate=$(".js-txtdate").val();
    if(!title&&!txtdes&&!txtdate){
        Session.set("emptyTextForm", true);
        console.log("emptyform");
    }else{
    const addtext={_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), title, text:txtdes, type:"text", date:txtdate};
    Trips.update({_id:this._id},{$push:{textedit:addtext}});
    $("#addTextForm").modal('hide');
  }
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
    
  "click #submitpic":function(){
      event.preventDefault();
      console.log("submittedpic");
    var newpic=Session.get("addpics");
    const pictitle=$(".js-titlepic").val();
    const picdes=$(".js-picdesc").val();
    const date=$(".js-picdate").val();
    const locname=$(".js-locname").val();
    const loclat=$(".js-loclat").val();
const loclng=$(".js-loclng").val();
if(!pictitle&&!picdes&&!date&&!locname&&!loclat&&!loclng){
        Session.set("emptyPicForm", true);
        
    }else{
    const addpix={_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), title:pictitle, text:picdes, type:"picture",pic:newpic, date,locname, lat:loclat, lng:loclng};
    Trips.update({_id:this._id},{$push:{textedit:addpix}});
    $("#addPicture").modal('hide');
  }
},
  "click .js-submitmap":function(){
    event.preventDefault();
    
    const locname=$(".js-locname").val();
    const loclat=$(".js-loclat").val();
const loclng=$(".js-loclng").val();
const mapdesc=$(".js-mapdesc").val();
const mapdate=$(".js-mapdate").val();
if(!locname&&!loclat&&!loclng&&!mapdesc&&!mapdate){
        Session.set("emptyMapForm", true);
        
    }else{
var maploc= {_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), locname, type:"maploc",lat:loclat, lng:loclng, description:mapdesc, date:mapdate}
    // const locit=Session.get("locmap");
    // const toloc=$(".js-locit").val();
    // const maploc={_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), location:toloc, map:locit, type:"maploc"};
    
    Trips.update({_id:this._id},{$push:{textedit:maploc}});
    $("#addMap").modal('hide');
  }
  },
  "click .js-lookmap":function(){

  },
  "click .js-addBanner":function(){
    $("#openBanner").modal('show');
  },
  // "click .js-removeupload":function(){
  //   document.getElementById('uploadbanner').style.display = "none";
  // },
  'change .your-upload-class': function (event, template) {
    console.log("uploading...")
    FS.Utility.eachFile(event, function (file) {
      console.log("each file...");
      var yourFile = new FS.File(file);
      yourFile.creatorId = Meteor.userId(); // todo
      var banner=YourFileCollection.insert(yourFile, function (err, fileObj) {
        console.log("callback for the insert, err: ", err);
        if (!err) {
          console.log("inserted without error");
        }
        else {
          console.log("there was an error", err);
        }
        
      });
      Session.set("bannerimg",banner&&banner._id);
    });
  },
  'click .js-uploadban':function(){
    var banimg=Session.get("bannerimg");
    Trips.update({_id:this._id},{$set:{image:banimg}});
    $("#openBanner").modal('hide');
    // document.getElementById('uploadbanner').style.display = "none";
  },
  'click #likebutton': function(){
    Trips.update({_id:this._id},{$inc:{likes:1}});
  },
  "submit #basicsetting": function(){
    event.preventDefault();
    const title=$(".js-titleset").val();
    const description=$(".js-descset").val();
    const arrival=$(".js-arriveset").val();
    const departure=$(".js-departset").val();
    const amountOfTraveler=$(".js-amtppl").val();
    const expenses=$(".js-expenses").val();
    const tripid=$(".js-thistripid").val();
    Trips.update({_id:tripid}, {$set:{title, description,arrival, departure,amountOfTraveler,expenses}});
    $("#displaySet").modal('hide');
  },
 
 "click .js-addfav ":function(event){
    window.alert("Added to favorite!");
    var favid=this._id;
   
    if (UserFavorites.find({user:Meteor.userId()}).count()==0){
      const fav =
    {user: Meteor.userId(),
    addedAt: new Date(),
    favadded: [favid],
    }
    Meteor.call("addFav", fav);
    }else{
      var userfav=UserFavorites.findOne({user:Meteor.userId()});

      UserFavorites.update({_id:userfav&&userfav._id},{$push:{favadded:favid}});
    }
    
  },
  "click .js-removefav":function(event){
    var id=this._id;
    
      var userfav1=UserFavorites.findOne({user:Meteor.userId()});

      UserFavorites.update({_id:userfav1&&userfav1._id},{$pull:{favadded:id}});
  },
  "click .js-closet":function(event){
    const docid=$(".js-docid").val();
    Trips.update({_id: this._id}, {$pull:{textedit:{_id: docid}}});
  },
});


Template.showSearch.helpers({
  isUser:function(){
      if(this.createdBy==Meteor.userId()){

        return true;
      }else{
        return false;}
  },
  
  bannerimage:function(){
    return YourFileCollection.findOne({_id:this.image});
  },
  propic:function(){

    var user =UserProfiles.findOne({user:this.createdBy});
    const id= user&&user.propic;
    return YourFileCollection.findOne({_id:id});

  },
  isNotUser:function(){
      if(this.createdBy!=Meteor.userId()){

        return true;
      }else{
        return false;}
  },
})
Template.timelinedisplay.events({
  "click .js-lookmap":function(){
  // Session.set("locmap",{lat:this.t.lat,lng:this.t.lng});
  // console.log(this.t.lat);
  // GoogleMaps.load({ v: '3', key: 'AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c', libraries: '' });
  // GoogleMaps.ready('naviMap',function(map) {
  //   var markerCurrent = new google.maps.Marker({
  //       position: new google.maps.LatLng(this.t.lat,this.t.lng),
  //       map:map.instance
  //     });
  //   Tracker.autorun(function() {
  //     map.instance.setCenter(new google.maps.LatLng(this.t.lat,this.t.lng))
  //     // markerCurrent.setPosition(new google.maps.LatLng(Session.get("locmap").lat,Session.get("locmap").lng));
  //   });  
// });
  }
})
Template.timelinedisplay.helpers({
  naviMapOptions: function(map) {
    if (GoogleMaps.loaded()) {
      var markloc={lat:this.t.lat, lng:this.t.lng};
      var markerCur= new google.maps.Marker({
        position: markloc,
        map:map,
      });
      return {
        center: new google.maps.LatLng(this.t.lat,this.t.lng),
        zoom:15
      };
    }
  }, 
  isUser:function(){
      if(this.t.author==Meteor.userId()){

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
  savemapref:function(loclat,loclng){
    var map={lat:loclat, lng :loclng}
    Session.set("mapid", map);
  },
})
Template.timelinedisplay.events({
  "click .js-closet":function(){
    var tripid=Session.get("thistripid");
      Trips.update({_id: tripid}, {$pull:{textedit:{_id: this.t._id}}});
  }
})