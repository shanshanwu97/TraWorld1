Session.set("emptyform", false);
// Template.userprofiles.helpers({

// })
Template.profiledisplay.helpers({
	propic:function(){
		var user =UserFavorites.findOne({user:Meteor.userId()});
		const id= user&&user.propic
		return YourFileCollection.findOne({_id:id});

	},
	userprof:function(){
		return Meteor.users.findOne({_id:Meteor.userId()});

	},
	userNoName:function(){
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user==null||!(user.userName&&user)){
			return true;
		}else{
			return false;
		}
	},
	propicexist:function(){
		var user =UserFavorites.findOne({user:Meteor.userId()});
		if(user&&user.propic){
			return true;
		}else{
			return false;
		}
	},
	userfavorites:function(){
		return UserFavorites.findOne({user:Meteor.userId()});
		
	},
	anyfav:function(){
		if(UserFavorites.find({user:Meteor.userId()}).count()==0||UserFavorites.findOne({user:Meteor.userId()}).favadded.length==0){
		return true;}
	},
	userit:function(){
		return Trips.find({createdBy:Meteor.userId()});
	},
	anyit:function(){
		if (Trips.find({createdBy:Meteor.userId().count()==0})){
			return true;
		}else{
			return false;
		}
	}

})

Template.showfav.helpers({
findfavtrip:function(){
	console.log(this);
	return Trips.findOne({_id:this.r});
}
})

Template.showUser.helpers({
	propicex:function(){
		var user =UserFavorites.findOne({user:this._id});
		if(user&&user.propic){
			return true;
		}else{
			return false;
		}
	},
	propic:function(){
		var user =UserFavorites.findOne({user:this._id});
		const id= user&&user.propic
		return YourFileCollection.findOne({_id:id});
	},
	userfavorites:function(){
		return UserFavorites.findOne({user:this._id});
	},
	userit:function(){
		console.log(this._id);
		return Trips.find({createdBy:this._id});
	},
	anyit:function(){
		if (Trips.find({createdBy:this._id}).count()==0){
			return true;
		}else{
			return false;
		}
	}
})
Template.profiledisplay.events({
	// "click .js-submitedit": function(event ){
	// 	event.preventDefault();
	// 	Router.go('editprofile');
	// },
	"click .js-uploadpro":function(event ){
		event.preventDefault();
		const picid=Session.get("propic");
		var userid=UserFavorites.findOne({user:Meteor.userId()});
		if(!userid){
			UserFavorites.insert({user:Meteor.userId(),propic:picid,favadded:[]});
		}else{
		UserFavorites.update({_id:userid&&userid._id},{$set:{propic:picid}});
	}
		$("#addPropic").modal('hide');
	},
	 'change .your-upload-class': function (event, template) {
    console.log("uploading...")
    FS.Utility.eachFile(event, function (file) {
      console.log("each file...");
      var yourFile = new FS.File(file);
      yourFile.creatorId = Meteor.userId(); // todo
      var imgfile=YourFileCollection.insert(yourFile, function (err, fileObj) {
        console.log("callback for the insert, err: ", err);
        if (!err) {
          console.log("inserted without error");
        }
        else {
          console.log("there was an error", err);
        }
        
      });
      Session.set("propic",imgfile&&imgfile._id);
    });
  }
})
