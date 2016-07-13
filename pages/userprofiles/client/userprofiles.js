
Template.profiledisplay.helpers({
	profile:function(){
		// const dest= $(".js-dest").val();
		return UserProfiles.findOne();
	},
	propic: function(){
		var user=UserProfiles.findOne();
		var userpic=user&&user.propic;
		var userpicid=userpic&&userpic._id;
		return YourFileCollection.findOne({_id:userpicid});
	}
	
})
Template.profiledisplay.events({
	"click .js-submitedit": function(event ){
		event.preventDefault();
		Router.go('editprofile');
	},
	"click .js-changepic":function(event ){
		event.preventDefault();
		
	}
})
Template.userprofiles.helpers({
	profexist:function(){
		if(UserProfiles.find().count()==0){
			return true;
		}else{
			return false;
		}
	}
})

Template.userprofiles.events({
	"click .js-submitinfo": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const fname = $(".js-name").val();

		const email = $(".js-email").val();
		const loc = $(".js-loc").val();
		const amount = $(".js-trv").val();
		var propic= Session.get("file");
			const prof=
			{user:Meteor.userId(), name:fname, email:email, location:loc,propic}; 
			console.log(prof);
			Meteor.call("insertProf", prof);
			Router.go('profiledisplay');
			// //Router.go('profiledisplay');
		 // var fs =  $("#prof"), span = $( "<span>" + fs.val() + "</span>" + "     <span class='glyphicon glyphicon-pencil js-editname' aria-hidden='true'></span>");
 		// span.insertAfter(fs);
 		// fs.hide(); // or fs.hide(); in case you want it later.
 		//  // or fs.hide(); in case you want it later.
 		//  var em =  $("#profem"), span = $( "<span>" + em.val() + "</span>");
 		// span.insertAfter(em);
 		// em.hide(); // or fs.hide(); in case you want it later.
 		// var loca =  $("#profloc"), span = $( "<span>" + loc.val() + "</span>");
 		// span.insertAfter(loca);
 		// loca.hide(); // or fs.hide(); in case you want it later.
 		// var sub= $("#submitbut")
 		// sub.hide();
	},
	  'change .your-upload-class': function (event, template) {
    console.log("uploading...")
    FS.Utility.eachFile(event, function (file) {
      console.log("each file...");
      var yourFile = new FS.File(file);
      yourFile.creatorId = Meteor.userId();
      var imgpath=YourFileCollection.insert(yourFile, function (err, fileObj) {
        console.log("callback for the insert, err: ", err);
        if (!err) {
          console.log("inserted without error");
        }
        else {
          console.log("there was an error", err);
        }
      });
      Session.set("pic",imgpath._id);
      Session.set("file", imgpath);
    });
  }
	// "click .js-submitinfo": function(event){
	// 	event.preventDefault();
	// 	console.log("hey u clicked");
	// 	const fname = $(".js-fname").val();
	// 	const lname = $(".js-lname").val();
	// 	const email = $(".js-email").val();
	// 	const loc = $(".js-loc").val();
	// 	const amount = $(".js-trv").val();
		
	// 		const prof=
	// 		{user:Meteor.userId(), firstname:fname, lastname:lname, email:email, location:loc}; 
	// 		Meteor.call("insertProf", prof);
			//Router.go('profiledisplay');
		 // var fs =  $("#prof"), span = $( "<span id:'prof1'" + fs.val() + "</span>" + "     <span id='editname' class='glyphicon glyphicon-pencil js-editname' aria-hidden='true'></span>");
 		// span.insertAfter(fs);
 		// fs.hide(); // or fs.hide(); in case you want it later.
 		// var fl =  $("#profln"), span = $( "<span>" + fl.val() + "</span>");
 		// span.insertAfter(fl);
 		// fl.hide(); // or fs.hide(); in case you want it later.
 		//  var em =  $("#profem"), span = $( "<span>" + em.val() + "</span>");
 		// span.insertAfter(em);
 		// em.hide(); // or fs.hide(); in case you want it later.
 		// var loca =  $("#profloc"), span = $( "<span>" + loca.val() + "</span>");
 		// span.insertAfter(loca);
 		// loca.hide(); // or fs.hide(); in case you want it later.
 		// var sub= $("#submitbut")
 		// sub.hide();
	// },
	// "click .js-editname": function(event){
	// 	event.preventDefault();
	// 	var name=$("#prof"),
	// 	var exname=$("#prof1"),
	// 	exname.remove();

 // 		name.show();
	// }

})
Template.editprofile.helpers({
	hi:function(){
		return UserProfiles.findOne();
	},
	})
Template.editprofile.events({
	"click .js-submitin": function(event){
		event.preventDefault();
		const fname = $(".js-cname").val();
		const email = $(".js-cemail").val();
		const loc = $(".js-cloc").val();
		var user= UserProfiles.findOne({user: Meteor.userId()});
		var propic=user&&user.propic;
			const prof=
			{user:Meteor.userId(), name:fname, email:email, location:loc,propic}; 
			console.log(prof);
			Meteor.call("updateProf", prof);
			Router.go('profiledisplay');
		},
		
	})

