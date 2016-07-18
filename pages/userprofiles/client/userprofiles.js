
Template.profiledisplay.helpers({
	pro:function(){
		// const dest= $(".js-dest").val();
		return UserProfiles.findOne({user:Meteor.userId});
	},
	propic:function(){
		var user =UserProfiles.findOne({user:Meteor.userId()});
		const id= user&&user.propic&&user.propic._id
		return YourFileCollection.findOne({_id:id});

	}
})
Template.userprofiles.events({
	"click .js-check": function(event){
		event.preventDefault();
		const urname=$(".js-username").val();
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user!=null){
			alert("You already have a username, you can only change it once!");
		}
		else if (Meteor.users.find({userName:urname}).count()==0){
			alert("The username is available!");
		}else{
			alert("The username is not available! Please re-enter!");
		}
	},
	"click .js-submitname": function(event){
		event.preventDefault();
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user!=null){
			alert("You already have a username, you can only change it once!");
		}else{
			const finalname=$(".js-username").val();
			Meteor.call("updateName", finalname);
		}
	},


})
Template.userprofiles.events({
	"click .js-submitinfo": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const loc = $(".js-locat").val();
		var imgpath=Session.get("propic");
			const prof=
			{user:Meteor.userId(), loc:loc, propic:imgpath}; 
			Meteor.call("insertProf", prof);
			Router.go('profiledisplay');
			
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
      Session.set("propic",imgfile);
    });
  }
});

Template.userprofiles.helpers({
  theFiles: function () {
    return YourFileCollection.find();
  }
});
