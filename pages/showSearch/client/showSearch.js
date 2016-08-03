// Template.showSearch.rendered = function(){
//   if(this.createdBy==Meteor.userId()){
  
//   $('#addTextForm').on('shown.bs.modal', function () {
//     $('#title').focus()
//   });
  
  
// }
// Template.showSearch.rendered= function(){
// var timelineBlocks = $('.cd-timeline-block'),
//     offset = 0.8;

//   //hide timeline blocks which are outside the viewport
//   hideBlocks(timelineBlocks, offset);

//   //on scolling, show/animate timeline blocks when enter the viewport
// $(window).on('scroll', function(){
//     (!window.requestAnimationFrame) 
//       ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
//       : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
//   });

//   function hideBlocks(blocks, offset) {
//     blocks.each(function(){
//       ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
//     });
//   }

//   function showBlocks(blocks, offset) {
//     blocks.each(function(){
//       ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
//     });
//   }
// }
// }
// Template.showSearch.onCreated(function () {
//   Session.set("mapid",{lat:42,lng:-71});
//   GoogleMaps.load({ v: '3', key: 'AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c', libraries: '' });
//   GoogleMaps.ready('naviMap',function(map) {
//     var markerCurrent = new google.maps.Marker({
//         position: new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng),
//         map:map&&map.instance
//       });
//     Tracker.autorun(function() {
//       map.instance.setCenter(new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng))
//       markerCurrent.setPosition(new google.maps.LatLng(Session.get("mapid").lat,Session.get("mapid").lng));
//     });  
// });
// });
Template.showSearch.helpers({
  saveuserid:function(){
    Session.set("thistripid", this._id);
  }
  // naviMapOptions: function(map) {
  //   if (GoogleMaps.loaded()) {
  //     const l=Session.get("mapid");
  //     var markloc={lat:l.lat, lng:l.lng}
  //     console.dir(markloc);
  //     console.dir(l);
  //     var markerCur= new google.maps.Marker({
  //       position: markloc,
  //       map:map,
  //     });
  //     return {
  //       center: new google.maps.LatLng(l.lat,l.lng),
  //       zoom:15
  //     };
  //   }
  // },  
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
    const addtext={_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), title, text:txtdes, type:"text", date:txtdate};
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
    const date=$(".js-picdate").val();
    const addpix={_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), title:pictitle, text:picdes, type:"picture",pic:newpic, date};
    Trips.update({_id:this._id},{$push:{textedit:addpix}});
    $("#addPicture").modal('hide');
},
  "submit #mapform":function(){
    event.preventDefault();
    const locit=Session.get("locmap");
    const toloc=$(".js-locit").val();
    const maploc={_id: new Meteor.Collection.ObjectID()._str, author: Meteor.userId(), location:toloc, map:locit, type:"maploc"};
    Trips.update({_id:this._id},{$push:{textedit:maploc}});
    $("#addMap").modal('hide');
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
  // "click .js-mapdir":function(){
  //   Router.go("map");
  // }
  // function deletethis(obid){
  //   Trips.update({_id:this._id},{$pull:{textedit:{$elemMatch:{_id:obid}}}});
  // },
 "click .js-addfav ":function(event){
    console.log("clicked on the +"); //debug
    console.dir(this);
    window.alert("Added to favorite!");
    var favid= $(".js-favid").val()
    var blog= Trips.findOne({_id: this._id});
    console.dir(blog);
    const fav =
    {user: Meteor.userId(),
    addedAt: new Date(),
    favadded: blog
    }
    Meteor.call("addFav", fav);
  },
  "click .js-closet":function(event){
    const docid=$(".js-docid").val();
    Trips.update({_id: this._id}, {$pull:{textedit:{_id: docid}}});
  }
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
Template.timelinedisplay.helpers({
  naviMapOptions: function(map) {
    if (GoogleMaps.loaded()) {
      const l=Session.get("mapid");
      var markloc={lat:l.lat, lng:l.lng}
      console.dir(markloc);
      console.dir(l);
      var markerCur= new google.maps.Marker({
        position: markloc,
        map:map,
      });
      return {
        center: new google.maps.LatLng(l.lat,l.lng),
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
  savemapref:function(map){
    Session.set("mapid",map);
  },
})
Template.timelinedisplay.events({
  "click .js-closet":function(){
    var tripid=Session.get("thistripid");
      Trips.update({_id: tripid}, {$pull:{textedit:{_id: this.t._id}}});
  }
})